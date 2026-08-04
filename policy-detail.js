const policyData = window.POLICY_DATA;
const policyAnalysisData = window.POLICY_ANALYSIS || { architectureUnits: [], policyAnalyses: [] };
const detailRoot = document.getElementById("detailApp");
const detailParams = new URLSearchParams(window.location.search);
const selectedId = detailParams.get("id");

const allPolicies = policyData.policies || [];
const allAnalyses = policyAnalysisData.policyAnalyses || [];
const selectedPolicy = allPolicies.find((policy) => policy.id === selectedId);
const selectedAnalysis = allAnalyses.find((analysis) => analysis.policyId === selectedId);
const detailUnitById = new Map((policyAnalysisData.architectureUnits || []).map((unit) => [unit.id, unit]));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function renderMeta(label, value) {
  return `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "未明确")}</strong></div>`;
}

function renderChips(values, emptyText = "待补充") {
  return values?.length
    ? values.map((value) => `<span class="chip tag">${escapeHtml(value)}</span>`).join("")
    : `<span class="chip">${escapeHtml(emptyText)}</span>`;
}

function renderDetailFlow(flowDetails) {
  return `<div class="detail-flow">
    ${(flowDetails || []).map((step) => `
      <article class="detail-flow-step">
        <div class="step-num">${escapeHtml(step.order)}</div>
        <div>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.action)}</p>
          <div class="step-meta">
            <span>牵头：${escapeHtml(step.leadUnit || "待明确")}</span>
            <span>协同/实施：${escapeHtml(step.implementingUnit || "待明确")}</span>
            <span>产出：${escapeHtml(step.output || "过程材料")}</span>
          </div>
          ${step.evidence ? `<blockquote>${escapeHtml(step.evidence)}</blockquote>` : ""}
        </div>
      </article>`).join("")}
  </div>`;
}

function renderTasks(tasks) {
  return `<div class="detail-task-grid">
    ${(tasks || []).map((task) => `
      <article class="task-item">
        <strong>${escapeHtml(task.title)}</strong>
        <p>${escapeHtml(task.description)}</p>
        ${task.evidence ? `<small>证据：${escapeHtml(task.evidence)}</small>` : ""}
        <div><span class="chip">${escapeHtml(task.status)}</span></div>
      </article>`).join("")}
  </div>`;
}

function renderEvidence(excerpts) {
  return `<div class="evidence-list">
    ${(excerpts || []).map((item, index) => `
      <article class="evidence-item">
        <div class="evidence-index">${index + 1}</div>
        <div>
          <strong>${escapeHtml(item.title || "相关原文摘录")}</strong>
          <p>${escapeHtml(item.excerpt)}</p>
          <span>${escapeHtml(item.source || "本地抽取")}</span>
        </div>
      </article>`).join("")}
  </div>`;
}

function renderPolicyGraph(policy, analysis) {
  const units = (analysis.mappedUnits || []).map((mapped) => detailUnitById.get(mapped.unitId)).filter(Boolean);
  const width = 980;
  const height = Math.max(420, units.length * 56 + 140);
  const centerX = 470;
  const centerY = Math.round(height / 2);
  const leftX = 150;
  const rightX = 810;
  const unitY = (index) => 70 + index * ((height - 140) / Math.max(units.length - 1, 1));
  const taskNodes = (analysis.policyTasks || []).slice(0, 5);
  const taskY = (index) => 80 + index * ((height - 160) / Math.max(taskNodes.length - 1, 1));

  return `<div class="detail-graph">
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="单项政策知识图谱">
      <g class="kg-links">
        ${taskNodes.map((_, index) => `<path d="M ${leftX + 130} ${taskY(index)} C ${centerX - 150} ${taskY(index)}, ${centerX - 120} ${centerY}, ${centerX - 25} ${centerY}" />`).join("")}
        ${units.map((_, index) => `<path d="M ${centerX + 25} ${centerY} C ${centerX + 150} ${centerY}, ${rightX - 150} ${unitY(index)}, ${rightX - 12} ${unitY(index)}" />`).join("")}
      </g>
      <g class="kg-nodes">
        ${taskNodes.map((task, index) => `
          <g transform="translate(${leftX},${taskY(index)})">
            <circle r="8"></circle>
            <text x="18" y="5">${escapeHtml(task.title)}</text>
          </g>`).join("")}
        <g class="kg-focus" transform="translate(${centerX},${centerY})">
          <circle r="22"></circle>
          <text y="-34" text-anchor="middle">政策文件</text>
          <text y="5" text-anchor="middle">${escapeHtml(policy.id)}</text>
        </g>
        ${units.map((unit, index) => `
          <g transform="translate(${rightX},${unitY(index)})">
            <circle r="8"></circle>
            <text x="18" y="5">${escapeHtml(unit.name)}</text>
          </g>`).join("")}
      </g>
    </svg>
  </div>`;
}

function renderDesignActions(actions) {
  return `<div class="design-actions">
    ${(actions || []).map((item) => `
      <article>
        <span>${escapeHtml(item.unitName)}</span>
        <h3>${escapeHtml(item.action)}</h3>
        <p>${escapeHtml(item.deliverable)}</p>
        <small>${escapeHtml(item.status)}</small>
      </article>`).join("")}
  </div>`;
}

function renderRelatedPolicies(policy) {
  const related = allPolicies.filter((item) => item.channel === policy.channel && item.id !== policy.id).slice(0, 6);
  return related.length
    ? related.map((item) => {
        const analysis = allAnalyses.find((entry) => entry.policyId === item.id);
        const href = analysis?.hasDetailPage ? `policy-detail.html?id=${encodeURIComponent(item.id)}` : item.file ? encodePath(item.file) : "#";
        return `<a href="${href}">${escapeHtml(item.id)} ${escapeHtml(item.title)}</a>`;
      }).join("")
    : `<span class="empty-note">同渠道下暂无其他政策。</span>`;
}

function renderUnavailable() {
  detailRoot.innerHTML = `<main class="detail-shell">
    <section class="detail-hero">
      <a class="back-link" href="index.html">返回平台首页</a>
      <h1>暂未形成独立详情页</h1>
      <p>这条政策的本地抽取信息还不够完整，先保留在首页卡片中阅读，后续补充原文和任务后再单独成页。</p>
    </section>
  </main>`;
}

function renderDetail() {
  if (!selectedPolicy || !selectedAnalysis?.hasDetailPage) {
    renderUnavailable();
    return;
  }
  document.title = `${selectedPolicy.title} - 政策详情`;
  const fileLink = selectedPolicy.file ? `<a class="primary-btn" href="${encodePath(selectedPolicy.file)}" download>下载原文</a>` : "";
  detailRoot.innerHTML = `<main class="detail-shell">
    <section class="detail-hero">
      <a class="back-link" href="index.html">返回平台首页</a>
      <div class="detail-hero-grid">
        <div>
          <div class="eyebrow">${escapeHtml(selectedPolicy.channel)}</div>
          <h1>${escapeHtml(selectedPolicy.title)}</h1>
          <p>${escapeHtml(selectedPolicy.summary || "待补充解读。")}</p>
          <div class="tag-row">${renderChips(selectedPolicy.tags)}</div>
        </div>
        <aside class="detail-side">
          ${renderMeta("发布单位", selectedAnalysis.issuingAuthority)}
          ${renderMeta("发布时间", selectedAnalysis.issueDate)}
          ${renderMeta("文号", selectedAnalysis.docNo)}
          ${renderMeta("施行时间", selectedAnalysis.effectiveDate)}
          ${renderMeta("有效期", selectedAnalysis.expiryDate)}
          ${fileLink}
        </aside>
      </div>
    </section>

    <section class="detail-layout">
      <div class="detail-main">
        <section class="detail-section">
          <div class="section-heading">
            <span>01</span>
            <h2>实施流程：看到这里就知道怎么推进</h2>
          </div>
          ${renderDetailFlow(selectedAnalysis.implementationFlowDetails)}
        </section>

        <section class="detail-section">
          <div class="section-heading">
            <span>02</span>
            <h2>政策任务</h2>
          </div>
          ${renderTasks(selectedAnalysis.policyTasks)}
        </section>

        <section class="detail-section">
          <div class="section-heading">
            <span>03</span>
            <h2>相关原文摘录</h2>
          </div>
          ${renderEvidence(selectedAnalysis.evidenceExcerpts)}
        </section>

        <section class="detail-section">
          <div class="section-heading">
            <span>04</span>
            <h2>政策到架构的点线图谱</h2>
          </div>
          ${renderPolicyGraph(selectedPolicy, selectedAnalysis)}
        </section>

        <section class="detail-section">
          <div class="section-heading">
            <span>05</span>
            <h2>总体设计响应</h2>
          </div>
          ${renderDesignActions(selectedAnalysis.designActions)}
        </section>
      </div>

      <aside class="detail-aside">
        <div class="sticky-panel">
          <h2>责任协同</h2>
          <div class="unit-chip-list">${renderChips(selectedAnalysis.responsibleUnits, "待明确")}</div>
          <h2>图谱映射</h2>
          <div class="unit-chip-list">
            ${(selectedAnalysis.mappedUnits || []).map((mapped) => {
              const unit = detailUnitById.get(mapped.unitId);
              return `<span class="unit-chip">${escapeHtml(unit?.name || mapped.unitId)} · ${escapeHtml(mapped.supportStrength)}</span>`;
            }).join("")}
          </div>
          <h2>同渠道政策</h2>
          <div class="related-list">${renderRelatedPolicies(selectedPolicy)}</div>
          <p class="review-note">${escapeHtml(selectedAnalysis.validityNote)} 自动抽取结果均为候选信息，正式引用前建议复核原文。</p>
        </div>
      </aside>
    </section>
  </main>`;
}

renderDetail();
