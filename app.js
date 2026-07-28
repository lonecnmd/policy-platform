const data = window.POLICY_DATA;
const analysisData = window.POLICY_ANALYSIS || { architectureUnits: [], policyAnalyses: [], relationships: [] };
let state = { category: "全部", channel: "全部", tag: "全部", search: "", view: "cards" };

const $ = (id) => document.getElementById(id);
const policies = data.policies;
const analyses = analysisData.policyAnalyses || [];
const analysisByPolicyId = new Map(analyses.map((item) => [item.policyId, item]));
const unitById = new Map((analysisData.architectureUnits || []).map((unit) => [unit.id, unit]));
const categories = [...new Set(data.channels.map((d) => d.category))];
const channels = [...new Set(data.channels.map((d) => d.channel))];
const tags = [...new Set(policies.flatMap((p) => p.tags))].filter(Boolean).sort();

function byFilter(p) {
  const q = state.search.trim().toLowerCase();
  const analysis = analysisByPolicyId.get(p.id);
  const analysisText = analysis ? [
    analysis.docNo,
    analysis.issuingAuthority,
    analysis.issueDate,
    analysis.effectiveDate,
    analysis.expiryDate,
    analysis.responsibleUnits?.join(" "),
    analysis.implementationFlow?.join(" "),
    analysis.policyTasks?.map((task) => task.description).join(" "),
  ].join(" ") : "";
  const inSearch = !q || [p.id, p.title, p.category, p.channel, p.summary, (p.quotes || []).join(" "), (p.tags || []).join(" "), analysisText].join(" ").toLowerCase().includes(q);
  return (state.category === "全部" || p.category === state.category)
    && (state.channel === "全部" || p.channel === state.channel)
    && (state.tag === "全部" || (p.tags || []).includes(state.tag))
    && inSearch;
}

function fillSelect(el, values, current = "全部") {
  el.innerHTML = ["全部", ...values].map((v) => `<option value="${escapeHtml(v)}"${v === current ? " selected" : ""}>${escapeHtml(v)}</option>`).join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function detailUrl(policy) {
  return `policy-detail.html?id=${encodeURIComponent(policy.id)}`;
}

function canOpenDetail(policy) {
  return Boolean(analysisByPolicyId.get(policy.id)?.hasDetailPage);
}

function renderPolicyTitle(policy) {
  const title = `<span class="policy-id">${escapeHtml(policy.id)}</span>${escapeHtml(policy.title)}`;
  return canOpenDetail(policy)
    ? `<a class="policy-title-link" href="${detailUrl(policy)}">${title}</a>`
    : `${title}<span class="chip muted-chip">信息较少，暂不单独成页</span>`;
}

function renderList(values, className = "") {
  return values?.length
    ? `<ul class="${className}">${values.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : `<div class="empty-note">待补充。</div>`;
}

function renderProcess(steps) {
  return steps?.length
    ? `<div class="process-line">${steps.map((step, index) => {
        const item = typeof step === "string" ? { title: step } : step;
        return `
        <div class="process-step">
          <span>${item.order || index + 1}</span>
          <strong>${escapeHtml(item.title)}</strong>
          ${item.action ? `<p>${escapeHtml(item.action)}</p>` : ""}
          ${item.leadUnit ? `<small>牵头：${escapeHtml(item.leadUnit)}</small>` : ""}
        </div>`;
      }).join("")}</div>`
    : `<div class="empty-note">暂未形成稳定流程。</div>`;
}

function renderTasks(tasks) {
  return tasks?.length
    ? `<div class="task-list">${tasks.map((task) => `
        <div class="task-item">
          <strong>${escapeHtml(task.title)}</strong>
          <p>${escapeHtml(task.description)}</p>
          <span class="chip">${escapeHtml(task.status)}</span>
        </div>`).join("")}</div>`
    : `<div class="empty-note">待补充政策任务。</div>`;
}

function renderMappedUnits(mappedUnits) {
  return mappedUnits?.length
    ? `<div class="unit-chip-list">${mappedUnits.map((mapped) => {
        const unit = unitById.get(mapped.unitId);
        return `<span class="unit-chip">${escapeHtml(unit?.name || mapped.unitId)} · ${escapeHtml(mapped.reviewStatus)}</span>`;
      }).join("")}</div>`
    : `<div class="empty-note">暂无图谱映射。</div>`;
}

function renderPolicyAnalysisBlock(p, compact = false) {
  const analysis = analysisByPolicyId.get(p.id);
  if (!analysis) return `<div class="empty-note">尚未生成政策解读档案。</div>`;
  return `<div class="analysis-block ${compact ? "compact" : ""}">
    <div class="analysis-grid">
      <div><span>发布单位</span><strong>${escapeHtml(analysis.issuingAuthority)}</strong></div>
      <div><span>发布时间</span><strong>${escapeHtml(analysis.issueDate)}</strong></div>
      <div><span>文号</span><strong>${escapeHtml(analysis.docNo)}</strong></div>
      <div><span>施行时间</span><strong>${escapeHtml(analysis.effectiveDate)}</strong></div>
      <div><span>有效期</span><strong>${escapeHtml(analysis.expiryDate)}</strong></div>
      <div><span>抽取状态</span><strong>${escapeHtml(analysis.extractionStatus)}</strong></div>
    </div>
    <div class="analysis-section">
      <h3>责任单位</h3>
      ${renderList(analysis.responsibleUnits)}
    </div>
    <div class="analysis-section">
      <h3>实施流程</h3>
      ${renderProcess(analysis.implementationFlowDetails || analysis.implementationFlow)}
    </div>
    <div class="analysis-section">
      <h3>政策任务</h3>
      ${renderTasks(analysis.policyTasks)}
    </div>
    <div class="analysis-section">
      <h3>图谱映射</h3>
      ${renderMappedUnits(analysis.mappedUnits)}
    </div>
    <p class="review-note">${escapeHtml(analysis.validityNote)}</p>
  </div>`;
}

function renderStats() {
  const categoryCount = categories.length;
  const channelCount = channels.length;
  const tagCount = tags.length;
  const fileCount = policies.reduce((sum, p) => sum + 1 + (p.attachments?.length || 0), 0);
  $("stats").innerHTML = [
    ["政策记录", policies.length],
    ["政策解读", analyses.length],
    ["图谱单元", analysisData.architectureUnits?.length || 0],
    ["资金类别", categoryCount],
    ["资金渠道", channelCount],
    ["结构标签", tagCount],
    ["可下载文件", fileCount],
  ].map(([label, value]) => `<div class="stat"><strong>${escapeHtml(value)}</strong><span>${label}</span></div>`).join("");
}

function renderNav() {
  const grouped = categories.map((category) => ({
    category,
    count: policies.filter((p) => p.category === category).length,
    channels: data.channels.filter((c) => c.category === category).map((c) => ({
      name: c.channel,
      count: policies.filter((p) => p.channel === c.channel).length,
    })),
  }));
  $("navTree").innerHTML = grouped.map((g) => `
    <div class="nav-group">
      <button class="nav-category ${state.category === g.category ? "active" : ""}" data-category="${escapeHtml(g.category)}">
        <span>${escapeHtml(g.category)}</span><span class="count-pill">${g.count}</span>
      </button>
      ${g.channels.map((c) => `
        <button class="nav-channel ${state.channel === c.name ? "active" : ""}" data-channel="${escapeHtml(c.name)}">
          ${escapeHtml(c.name)} <span class="count-pill">${c.count}</span>
        </button>`).join("")}
    </div>`).join("");
  document.querySelectorAll("[data-category]").forEach((btn) => btn.addEventListener("click", () => {
    state.category = btn.dataset.category;
    state.channel = "全部";
    render();
  }));
  document.querySelectorAll("[data-channel]").forEach((btn) => btn.addEventListener("click", () => {
    state.channel = btn.dataset.channel;
    const found = data.channels.find((c) => c.channel === state.channel);
    state.category = found?.category || "全部";
    render();
  }));
}

function renderCards(list) {
  $("cardsView").innerHTML = list.map((p) => {
    const excerptItems = (p.quotes || []).slice(0, 2);
    const excerpts = excerptItems.length
      ? `<ul class="excerpt-list">${excerptItems.map((quote) => `<li>${escapeHtml(quote)}</li>`).join("")}</ul>`
      : "未从报告附录中稳定匹配到相关原文摘录，建议结合原文复核。";
    const fileLink = p.file ? `<a class="download" href="${encodePath(p.file)}" download>下载原文</a>` : "";
    const attachmentLinks = (p.attachments || []).map((a) => `<a class="attachment" href="${encodePath(a.file)}" download>${escapeHtml(a.label)}</a>`).join("");
    return `<article class="policy-card">
      <div class="policy-head">
        <h2 class="policy-title">${renderPolicyTitle(p)}</h2>
        <div class="policy-actions">
          ${canOpenDetail(p) ? `<a class="detail-btn" href="${detailUrl(p)}">进入详情</a>` : ""}
          ${fileLink}
        </div>
      </div>
      <div class="meta-row">
        <span class="chip category">${escapeHtml(p.category)}</span>
        <span class="chip channel">${escapeHtml(p.channel)}</span>
        <span class="chip">标签 ${p.tagCount}</span>
        <span class="chip">${escapeHtml(p.sourceNote)}</span>
      </div>
      <div class="tag-row">${(p.tags.length ? p.tags : ["待人工补充标签"]).map((tag) => `<span class="chip tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <p class="summary">${escapeHtml(p.summary || "待补充解读。")}</p>
      <div class="quote-box"><div class="quote-title">相关原文摘录</div>${excerpts}</div>
      <details class="policy-detail">
        <summary>展开政策解读、流程和图谱映射</summary>
        ${renderPolicyAnalysisBlock(p, true)}
      </details>
      ${attachmentLinks ? `<div class="attachments">${attachmentLinks}</div>` : ""}
    </article>`;
  }).join("") || `<div class="policy-card">没有匹配的政策，试试清空筛选条件。</div>`;
}

function renderAnalysis(list) {
  $("analysisView").innerHTML = list.map((p) => `
    <article class="policy-card analysis-card">
      <div class="policy-head">
        <h2 class="policy-title">${renderPolicyTitle(p)}</h2>
        <div class="policy-actions">
          ${canOpenDetail(p) ? `<a class="detail-btn" href="${detailUrl(p)}">进入详情</a>` : ""}
          ${p.file ? `<a class="download" href="${encodePath(p.file)}" download>下载原文</a>` : ""}
        </div>
      </div>
      <div class="meta-row">
        <span class="chip category">${escapeHtml(p.category)}</span>
        <span class="chip channel">${escapeHtml(p.channel)}</span>
      </div>
      <p class="summary">${escapeHtml(p.summary || "待补充解读。")}</p>
      ${renderPolicyAnalysisBlock(p)}
    </article>`).join("") || `<div class="policy-card">没有匹配的政策解读。</div>`;
}

function renderGraph(list) {
  const visibleIds = new Set(list.map((policy) => policy.id));
  const visibleAnalyses = analyses.filter((analysis) => visibleIds.has(analysis.policyId));
  const relationships = visibleAnalyses.flatMap((analysis) => analysis.mappedUnits.map((mapped) => ({
    ...mapped,
    policyId: analysis.policyId,
  })));
  const unitCards = (analysisData.architectureUnits || []).map((unit) => {
    const related = relationships.filter((item) => item.unitId === unit.id);
    const relatedPolicies = related.map((item) => policies.find((policy) => policy.id === item.policyId)).filter(Boolean);
    return `<article class="graph-unit">
      <div class="unit-layer">${escapeHtml(unit.layer)}</div>
      <h3>${escapeHtml(unit.name)} <span class="count-pill">${relatedPolicies.length}</span></h3>
      <p>${escapeHtml(unit.purpose)}</p>
      <div class="mini-list">
        ${relatedPolicies.slice(0, 8).map((policy) => `<div class="mini-item"><span>${escapeHtml(policy.id)} ${escapeHtml(policy.title)}</span><span>候选映射</span></div>`).join("") || "当前筛选下暂无支撑政策"}
      </div>
    </article>`;
  }).join("");

  $("graphView").innerHTML = `
    <section class="graph-summary">
      ${renderKnowledgeGraph(list, relationships)}
      <div class="graph-chain">
        ${["政策文件", "原文条款", "政策任务", "任务簇", "平台架构单元", "总体设计响应", "交付成果"].map((label) => `<span>${label}</span>`).join("<b></b>")}
      </div>
      <div class="graph-meta">
        <span>当前筛选政策：${list.length}</span>
        <span>候选关系：${relationships.length}</span>
        <span>${escapeHtml(analysisData.method || "候选图谱")}</span>
      </div>
    </section>
    <section class="graph-grid">${unitCards}</section>`;
}

function renderKnowledgeGraph(list, relationships) {
  const visibleChannels = data.channels
    .map(({ channel }) => ({
      channel,
      count: list.filter((policy) => policy.channel === channel).length,
    }))
    .filter((item) => item.count > 0);
  const units = analysisData.architectureUnits || [];
  const width = 960;
  const height = Math.max(340, Math.max(visibleChannels.length, units.length) * 46 + 70);
  const leftX = 170;
  const rightX = 760;
  const channelY = (index) => 50 + index * ((height - 100) / Math.max(visibleChannels.length - 1, 1));
  const unitY = (index) => 50 + index * ((height - 100) / Math.max(units.length - 1, 1));
  const channelIndex = new Map(visibleChannels.map((item, index) => [item.channel, index]));
  const unitIndex = new Map(units.map((unit, index) => [unit.id, index]));
  const policyById = new Map(policies.map((policy) => [policy.id, policy]));
  const links = relationships.slice(0, 90).map((rel) => {
    const policy = policyById.get(rel.policyId);
    if (!policy || !channelIndex.has(policy.channel) || !unitIndex.has(rel.unitId)) return "";
    const x1 = leftX + 110;
    const y1 = channelY(channelIndex.get(policy.channel));
    const x2 = rightX - 110;
    const y2 = unitY(unitIndex.get(rel.unitId));
    return `<path d="M ${x1} ${y1} C ${x1 + 150} ${y1}, ${x2 - 150} ${y2}, ${x2} ${y2}" />`;
  }).join("");
  return `<div class="kg-panel">
    <div class="kg-title">资金渠道到平台架构的候选关系</div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="资金渠道到平台架构单元知识图谱">
      <g class="kg-links">${links}</g>
      <g class="kg-nodes">
        ${visibleChannels.map((item, index) => `
          <g transform="translate(${leftX},${channelY(index)})">
            <circle r="8"></circle>
            <text x="-12" y="5" text-anchor="end">${escapeHtml(item.channel)}</text>
            <text x="16" y="5">${item.count}条</text>
          </g>`).join("")}
        ${units.map((unit, index) => `
          <g transform="translate(${rightX},${unitY(index)})">
            <circle r="8"></circle>
            <text x="16" y="5">${escapeHtml(unit.name)}</text>
          </g>`).join("")}
      </g>
    </svg>
  </div>`;
}

function renderMatrix(list) {
  $("matrixView").innerHTML = data.channels.map(({ category, channel }) => {
    const items = list.filter((p) => p.channel === channel);
    return `<section class="matrix-row">
      <h3>${escapeHtml(category)} / ${escapeHtml(channel)} <span class="count-pill">${items.length}</span></h3>
      <div class="mini-list">${items.map((p) => `<div class="mini-item"><span>${escapeHtml(p.id)} ${escapeHtml(p.title)}</span><span>${p.tags.map(escapeHtml).join("、") || "无标签"}</span></div>`).join("") || "当前筛选下无政策"}</div>
    </section>`;
  }).join("");
}

function renderFiles(list) {
  $("filesView").innerHTML = list.map((p) => {
    const attach = (p.attachments || []).map((a) => `<a class="attachment" href="${encodePath(a.file)}" download>${escapeHtml(a.label)}</a>`).join("");
    return `<div class="file-row">
      <strong>${escapeHtml(p.id)}</strong>
      <div>
        <div>${canOpenDetail(p) ? `<a class="inline-link" href="${detailUrl(p)}">${escapeHtml(p.title)}</a>` : escapeHtml(p.title)}</div>
        <small>${escapeHtml(p.fileName)}</small>
        ${attach ? `<div class="attachments">${attach}</div>` : ""}
      </div>
      ${p.file ? `<a class="download" href="${encodePath(p.file)}" download>下载</a>` : ""}
    </div>`;
  }).join("");
}

function updateViews(list) {
  $("cardsView").classList.toggle("hidden", state.view !== "cards");
  $("analysisView").classList.toggle("hidden", state.view !== "analysis");
  $("graphView").classList.toggle("hidden", state.view !== "graph");
  $("matrixView").classList.toggle("hidden", state.view !== "matrix");
  $("filesView").classList.toggle("hidden", state.view !== "files");
  if (state.view === "cards") renderCards(list);
  if (state.view === "analysis") renderAnalysis(list);
  if (state.view === "graph") renderGraph(list);
  if (state.view === "matrix") renderMatrix(list);
  if (state.view === "files") renderFiles(list);
}

function render() {
  const availableChannels = state.category === "全部"
    ? channels
    : data.channels.filter((c) => c.category === state.category).map((c) => c.channel);
  if (state.channel !== "全部" && !availableChannels.includes(state.channel)) state.channel = "全部";
  fillSelect($("categoryFilter"), categories, state.category);
  fillSelect($("channelFilter"), availableChannels, state.channel);
  fillSelect($("tagFilter"), tags, state.tag);
  $("searchInput").value = state.search;
  renderNav();
  const list = policies.filter(byFilter);
  $("resultCount").textContent = `${list.length} 条政策`;
  updateViews(list);
}

function bindEvents() {
  $("categoryFilter").addEventListener("change", (e) => { state.category = e.target.value; state.channel = "全部"; render(); });
  $("channelFilter").addEventListener("change", (e) => { state.channel = e.target.value; render(); });
  $("tagFilter").addEventListener("change", (e) => { state.tag = e.target.value; render(); });
  $("searchInput").addEventListener("input", (e) => { state.search = e.target.value; render(); });
  $("resetBtn").addEventListener("click", () => { state = { category: "全部", channel: "全部", tag: "全部", search: "", view: state.view }; render(); });
  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    state.view = tab.dataset.view;
    render();
  }));
}

renderStats();
bindEvents();
render();
