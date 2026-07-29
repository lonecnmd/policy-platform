const policyData = window.POLICY_DATA;
const policyAnalysisData = window.POLICY_ANALYSIS || { architectureUnits: [], policyAnalyses: [] };
const policyTextData = window.POLICY_TEXT_DATA || { policies: {} };
const detailRoot = document.getElementById("detailApp");
const params = new URLSearchParams(window.location.search);
const selectedId = params.get("id");

const allPolicies = policyData.policies || [];
const allAnalyses = policyAnalysisData.policyAnalyses || [];
const selectedPolicy = allPolicies.find((policy) => policy.id === selectedId);
const selectedAnalysis = allAnalyses.find((analysis) => analysis.policyId === selectedId);
const selectedText = policyTextData.policies?.[selectedId]?.fullText || "";
const unitById = new Map((policyAnalysisData.architectureUnits || []).map((unit) => [unit.id, unit]));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function normalize(value) {
  return String(value || "").replace(/\s+/g, "");
}

function numberToChinese(value) {
  const num = Number(value);
  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  if (!Number.isFinite(num) || num <= 0 || num >= 100) return value;
  if (num < 10) return digits[num];
  if (num === 10) return "十";
  if (num < 20) return `十${digits[num % 10]}`;
  const ten = Math.floor(num / 10);
  const one = num % 10;
  return `${digits[ten]}十${one ? digits[one] : ""}`;
}

function renderDateCard(label, value, important = false) {
  return `<div class="date-card ${important ? "important" : ""}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "未明确")}</strong></div>`;
}

function renderHighlights(items) {
  return `<div class="policy-points">
    ${(items || []).slice(0, 6).map((item) => `<article class="${escapeHtml(item.tone || "")}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.description)}</span></article>`).join("")}
  </div>`;
}

function renderCoreClauses(clauses) {
  return `<div class="clause-grid">
    ${(clauses || []).map((clause) => `<article class="clause-card" id="${escapeHtml(clause.id)}">
      <span>${escapeHtml(clause.label)}</span>
      <h3>${escapeHtml(clause.title)}</h3>
      <p>${escapeHtml(clause.summary)}</p>
      <button type="button" data-jump-article="${escapeHtml(clause.label.replace(/[第条]/g, ""))}">定位原文</button>
    </article>`).join("")}
  </div>`;
}

function renderLifecycle(flowDetails) {
  return `<div class="lifecycle-flow">
    ${(flowDetails || []).map((step) => `<article>
      <span>${escapeHtml(step.order)}</span>
      <strong>${escapeHtml(step.title)}</strong>
      <p>${escapeHtml(step.action)}</p>
      <small>牵头：${escapeHtml(step.leadUnit || "待明确")} | 产出：${escapeHtml(step.output || "过程材料")}</small>
    </article>`).join("")}
  </div>`;
}

function buildArticleParagraphs(text) {
  if (!text) return [];
  const compact = text.replace(/\n+/g, "\n").trim();
  const parts = compact.split(/(?=第[一二三四五六七八九十百\d]+条)/).map((part) => part.trim()).filter(Boolean);
  return parts.length ? parts.slice(0, 80) : compact.split(/\n+/).slice(0, 80);
}

function renderFullText(text) {
  const paragraphs = buildArticleParagraphs(text);
  return `<div class="fulltext-reader" id="fulltextReader">
    ${paragraphs.map((paragraph, index) => {
      const match = paragraph.match(/^第([一二三四五六七八九十百\d]+)条/);
      const id = match ? `full-article-${match[1]}` : `full-paragraph-${index + 1}`;
      return `<p id="${escapeHtml(id)}">${escapeHtml(paragraph)}</p>`;
    }).join("") || `<p>暂未生成完整原文文本，请下载 PDF 原文查看。</p>`}
  </div>`;
}

function renderPolicyPanorama(policy, analysis) {
  const workNodes = ["项目入库", "审批审查", "资金监管", "监督检查", "后评价"];
  const units = (analysis.mappedUnits || []).map((mapped) => unitById.get(mapped.unitId)).filter(Boolean).slice(0, 6);
  return `<div class="panorama">
    <div class="panorama-tree">
      <div class="tree-root">${escapeHtml(policy.channel)}</div>
      <div class="tree-branches">
        ${workNodes.map((node) => `<span>${escapeHtml(node)}</span>`).join("")}
      </div>
    </div>
    <div class="panorama-links">
      ${units.map((unit) => `<span>${escapeHtml(unit.name)}</span>`).join("")}
    </div>
  </div>`;
}

function renderMiniGraph(policy, analysis) {
  const tasks = (analysis.policyTasks || []).slice(0, 5);
  const units = (analysis.mappedUnits || []).map((mapped) => unitById.get(mapped.unitId)).filter(Boolean).slice(0, 6);
  const width = 960;
  const height = 420;
  const leftX = 170;
  const centerX = 480;
  const rightX = 760;
  const taskY = (index) => 70 + index * 62;
  const unitY = (index) => 52 + index * 56;
  return `<div class="detail-graph">
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="政策任务到架构单元图谱">
      <g class="kg-links">
        ${tasks.map((_, index) => `<path d="M ${leftX + 130} ${taskY(index)} C 330 ${taskY(index)}, 380 210, ${centerX - 28} 210" />`).join("")}
        ${units.map((_, index) => `<path d="M ${centerX + 28} 210 C 590 210, 650 ${unitY(index)}, ${rightX - 12} ${unitY(index)}" />`).join("")}
      </g>
      <g class="kg-nodes">
        ${tasks.map((task, index) => `<g transform="translate(${leftX},${taskY(index)})"><circle r="8"></circle><text x="18" y="5">${escapeHtml(task.title)}</text></g>`).join("")}
        <g class="kg-focus" transform="translate(${centerX},210)"><circle r="24"></circle><text y="-36" text-anchor="middle">政策</text><text y="5" text-anchor="middle">${escapeHtml(policy.id)}</text></g>
        ${units.map((unit, index) => `<g transform="translate(${rightX},${unitY(index)})"><circle r="8"></circle><text x="18" y="5">${escapeHtml(unit.name)}</text></g>`).join("")}
      </g>
    </svg>
  </div>`;
}

function renderRelated(policy) {
  const related = allPolicies.filter((item) => item.channel === policy.channel && item.id !== policy.id).slice(0, 5);
  return related.map((item) => {
    const analysis = allAnalyses.find((entry) => entry.policyId === item.id);
    const href = analysis?.hasDetailPage ? `policy-detail.html?id=${encodeURIComponent(item.id)}` : item.file ? encodePath(item.file) : "#";
    return `<a href="${href}">${escapeHtml(item.title)}</a>`;
  }).join("") || `<span>暂无同渠道关联政策。</span>`;
}

function renderUnavailable() {
  detailRoot.innerHTML = `<main class="detail-shell">
    <section class="detail-hero">
      <a class="back-link" href="index.html">返回平台首页</a>
      <h1>暂未形成独立详情页</h1>
      <p>这条政策的抽取信息还不够完整，当前先保留在首页卡片与原文下载中。</p>
    </section>
  </main>`;
}

function highlightKeyword(keyword) {
  const reader = document.getElementById("fulltextReader");
  if (!reader) return;
  reader.querySelectorAll("mark").forEach((mark) => mark.replaceWith(document.createTextNode(mark.textContent)));
  if (!keyword.trim()) return;
  const pattern = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  reader.querySelectorAll("p").forEach((paragraph) => {
    paragraph.innerHTML = escapeHtml(paragraph.textContent).replace(pattern, (value) => `<mark>${escapeHtml(value)}</mark>`);
  });
  const first = reader.querySelector("mark");
  if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
}

function jumpToArticle(value) {
  const q = normalize(value).replace(/[第条]/g, "");
  if (!q) return;
  const cn = /^\d+$/.test(q) ? numberToChinese(q) : q;
  const candidates = [
    `full-article-${q}`,
    `full-article-${cn}`,
  ];
  const direct = candidates.map((id) => document.getElementById(id)).find(Boolean);
  if (direct) {
    direct.scrollIntoView({ behavior: "smooth", block: "start" });
    direct.classList.add("pulse");
    setTimeout(() => direct.classList.remove("pulse"), 1200);
    return;
  }
  const found = [...document.querySelectorAll("#fulltextReader p")].find((p) => p.textContent.includes(`第${q}条`) || p.textContent.includes(`第${cn}条`));
  if (found) found.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindDetailEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-jump-article]");
    if (target) jumpToArticle(target.dataset.jumpArticle);
  });
  const articleInput = document.getElementById("articleLocator");
  const articleButton = document.getElementById("articleLocatorBtn");
  const keywordInput = document.getElementById("keywordHighlighter");
  articleButton?.addEventListener("click", () => jumpToArticle(articleInput.value));
  articleInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") jumpToArticle(articleInput.value);
  });
  keywordInput?.addEventListener("input", (event) => highlightKeyword(event.target.value));
}

function renderDetail() {
  if (!selectedPolicy || !selectedAnalysis?.hasDetailPage) {
    renderUnavailable();
    return;
  }
  document.title = `${selectedPolicy.title} - 政策详情`;
  const fileLink = selectedPolicy.file ? `<a class="primary-btn" href="${encodePath(selectedPolicy.file)}" download>下载 PDF 原文</a>` : "";
  detailRoot.innerHTML = `<main class="detail-shell optimized-detail">
    <aside class="anchor-nav">
      <a href="#summary">结构化摘要</a>
      <a href="#clauses">核心条款</a>
      <a href="#flow">监管流程</a>
      <a href="#fulltext">政策原文</a>
      <a href="#related">关联下载</a>
    </aside>

    <section class="detail-hero policy-summary-hero" id="summary">
      <a class="back-link" href="index.html">返回平台首页</a>
      <div class="detail-hero-grid">
        <div>
          <div class="eyebrow">${escapeHtml(selectedPolicy.channel)}</div>
          <h1>${escapeHtml(selectedPolicy.title)}</h1>
          <p>${escapeHtml(selectedPolicy.summary || "待补充解读。")}</p>
          ${renderHighlights(selectedAnalysis.policyHighlights)}
        </div>
        <aside class="detail-side summary-side">
          ${renderDateCard("发文机关", selectedAnalysis.issuingAuthority)}
          ${renderDateCard("文号", selectedAnalysis.docNo)}
          ${renderDateCard("通过日期", selectedAnalysis.passedDate)}
          ${renderDateCard("公布日期", selectedAnalysis.publishDate || selectedAnalysis.issueDate)}
          ${renderDateCard("施行日期", selectedAnalysis.effectiveDate, true)}
          ${fileLink}
        </aside>
      </div>
    </section>

    <section class="detail-layout">
      <div class="detail-main">
        <section class="detail-section" id="clauses">
          <div class="section-heading"><span>01</span><h2>核心条款导读</h2></div>
          ${renderCoreClauses(selectedAnalysis.coreClauses)}
        </section>

        <section class="detail-section" id="flow">
          <div class="section-heading"><span>02</span><h2>全生命周期监管流程</h2></div>
          ${renderLifecycle(selectedAnalysis.implementationFlowDetails)}
        </section>

        <section class="detail-section">
          <div class="section-heading"><span>03</span><h2>政策全景图</h2></div>
          ${renderPolicyPanorama(selectedPolicy, selectedAnalysis)}
          ${renderMiniGraph(selectedPolicy, selectedAnalysis)}
        </section>

        <section class="detail-section" id="fulltext">
          <div class="section-heading"><span>04</span><h2>政策原文阅读</h2></div>
          <div class="reader-tools">
            <label>条款定位 <input id="articleLocator" type="search" placeholder="输入第23条或23" /></label>
            <button id="articleLocatorBtn" type="button">跳转</button>
            <label>关键词高亮 <input id="keywordHighlighter" type="search" placeholder="监督检查、后评价、中央单位" /></label>
          </div>
          ${renderFullText(selectedText)}
        </section>

        <section class="detail-section" id="related">
          <div class="section-heading"><span>05</span><h2>关联与下载</h2></div>
          <div class="related-downloads">
            <article><strong>同渠道政策</strong><div class="related-list">${renderRelated(selectedPolicy)}</div></article>
            <article><strong>上位法与引用线索</strong><div class="related-list"><a href="policy-detail.html?id=9">《政府投资条例》</a>${fileLink}</div></article>
          </div>
        </section>
      </div>

      <aside class="detail-aside">
        <div class="sticky-panel">
          <h2>快速判断</h2>
          <div class="unit-chip-list">
            ${(selectedAnalysis.qualityFlags || []).length ? selectedAnalysis.qualityFlags.map((flag) => `<span class="status-flag">${escapeHtml(flag)}</span>`).join("") : `<span class="unit-chip">数据状态良好</span>`}
          </div>
          <h2>责任单位</h2>
          <div class="unit-chip-list">${(selectedAnalysis.responsibleUnits || []).map((unit) => `<span class="unit-chip">${escapeHtml(unit)}</span>`).join("")}</div>
          <h2>图谱节点</h2>
          <div class="unit-chip-list">${(selectedAnalysis.mappedUnits || []).map((mapped) => `<span class="unit-chip">${escapeHtml(unitById.get(mapped.unitId)?.name || mapped.unitId)}</span>`).join("")}</div>
          <p class="review-note">自动抽取结果用于快速阅读和定位，正式引用前请以 PDF 原文及发布机关文本为准。</p>
        </div>
      </aside>
    </section>
  </main>`;
  bindDetailEvents();
}

renderDetail();
