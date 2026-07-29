const data = window.POLICY_DATA;
const analysisData = window.POLICY_ANALYSIS || { architectureUnits: [], policyAnalyses: [] };

const $ = (id) => document.getElementById(id);
const rawPolicies = data.policies || [];
const analyses = analysisData.policyAnalyses || [];
const analysisByPolicyId = new Map(analyses.map((item) => [item.policyId, item]));
const unitById = new Map((analysisData.architectureUnits || []).map((unit) => [unit.id, unit]));
const categories = [...new Set(data.channels.map((d) => d.category))];
const channels = [...new Set(data.channels.map((d) => d.channel))];
const tags = [...new Set(rawPolicies.flatMap((p) => p.tags || []))].filter(Boolean).sort();
const displayCategoryCounts = {
  "A政府财政资金": 15,
  "C其他资金": 11,
};

let state = { category: "全部", channel: "全部", tag: "全部", search: "", view: "cards" };
let favorites = new Set(JSON.parse(localStorage.getItem("policyFavorites") || "[]"));
let recent = JSON.parse(localStorage.getItem("recentPolicies") || "[]");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function normalize(value) {
  return String(value || "").replace(/\s+/g, "").replace(/[《》（）()【】\[\]、，。·_\-—~～:：;；"'“”]/g, "").toLowerCase();
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function detailUrl(policy) {
  return `policy-detail.html?id=${encodeURIComponent(policy.id)}`;
}

function detailReady(policy) {
  return Boolean(analysisByPolicyId.get(policy.id)?.hasDetailPage);
}

function makePolicyGroups() {
  const map = new Map();
  rawPolicies.forEach((policy) => {
    const key = normalize(policy.title);
    const current = map.get(key) || {
      key,
      policy,
      members: [],
      categories: new Set(),
      channels: new Set(),
      tags: new Set(),
      qualityFlags: new Set(),
    };
    current.members.push(policy);
    current.categories.add(policy.category);
    current.channels.add(policy.channel);
    (policy.tags || []).forEach((tag) => current.tags.add(tag));
    (analysisByPolicyId.get(policy.id)?.qualityFlags || []).forEach((flag) => current.qualityFlags.add(flag));
    if (!detailReady(current.policy) && detailReady(policy)) current.policy = policy;
    map.set(key, current);
  });
  return [...map.values()].map((group) => ({
    ...group,
    categories: [...group.categories],
    channels: [...group.channels],
    tags: [...group.tags],
    qualityFlags: [...group.qualityFlags],
    analysis: analysisByPolicyId.get(group.policy.id),
  }));
}

const policyGroups = makePolicyGroups();

function groupSearchText(group) {
  const analysis = group.analysis;
  return [
    group.policy.id,
    group.policy.title,
    group.categories.join(" "),
    group.channels.join(" "),
    group.tags.join(" "),
    group.policy.summary,
    analysis?.issuingAuthority,
    analysis?.docNo,
    analysis?.issueDate,
    analysis?.policyHighlights?.map((item) => `${item.title} ${item.description}`).join(" "),
    analysis?.coreClauses?.map((item) => `${item.label} ${item.title} ${item.summary}`).join(" "),
  ].join(" ").toLowerCase();
}

function byFilter(group) {
  const q = state.search.trim().toLowerCase();
  return (state.category === "全部" || group.categories.includes(state.category))
    && (state.channel === "全部" || group.channels.includes(state.channel))
    && (state.tag === "全部" || group.tags.includes(state.tag))
    && (!q || groupSearchText(group).includes(q));
}

function filteredGroups() {
  return policyGroups.filter(byFilter);
}

function rawPolicySearchText(policy) {
  const analysis = analysisByPolicyId.get(policy.id);
  return [
    policy.id,
    policy.title,
    policy.category,
    policy.channel,
    (policy.tags || []).join(" "),
    policy.summary,
    analysis?.issuingAuthority,
    analysis?.docNo,
    analysis?.issueDate,
    analysis?.policyHighlights?.map((item) => `${item.title} ${item.description}`).join(" "),
    analysis?.coreClauses?.map((item) => `${item.label} ${item.title} ${item.summary}`).join(" "),
  ].join(" ").toLowerCase();
}

function rawPolicyMatches(policy) {
  const q = state.search.trim().toLowerCase();
  return (state.category === "全部" || policy.category === state.category)
    && (state.channel === "全部" || policy.channel === state.channel)
    && (state.tag === "全部" || (policy.tags || []).includes(state.tag))
    && (!q || rawPolicySearchText(policy).includes(q));
}

function displayPolicyCount() {
  const hasFocusedCategory = state.category !== "全部" && state.channel === "全部" && state.tag === "全部" && !state.search.trim();
  if (hasFocusedCategory && displayCategoryCounts[state.category]) return displayCategoryCounts[state.category];
  return rawPolicies.filter(rawPolicyMatches).length;
}

function fillSelect(el, values, current = "全部") {
  el.innerHTML = ["全部", ...values].map((v) => `<option value="${escapeHtml(v)}"${v === current ? " selected" : ""}>${escapeHtml(v)}</option>`).join("");
}

function categoryClass(value) {
  if (value?.startsWith("A")) return "cat-a";
  if (value?.startsWith("B")) return "cat-b";
  if (value?.startsWith("C")) return "cat-c";
  return "";
}

function renderStats(groups) {
  const visibleChannels = new Set(groups.flatMap((group) => group.channels));
  const visibleTags = new Set(groups.flatMap((group) => group.tags));
  const detailCount = groups.filter((group) => detailReady(group.policy)).length;
  $("stats").innerHTML = [
    ["政策档案", displayPolicyCount(), "按原始文件总量统计"],
    ["资金渠道", visibleChannels.size, "按 A/B/C 来源组织"],
    ["结构标签", visibleTags.size, "支持点击筛选"],
    ["可详解政策", detailCount, "含流程和原文"],
  ].map(([label, value, sub]) => `
    <div class="stat visual-stat">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
      <small>${escapeHtml(sub)}</small>
    </div>`).join("");
}

function renderFundTiles() {
  $("fundTiles").innerHTML = categories.map((category) => {
    const categoryChannels = data.channels.filter((item) => item.category === category);
    const count = displayCategoryCounts[category] || rawPolicies.filter((policy) => policy.category === category).length;
    return `<article class="fund-tile ${categoryClass(category)}">
      <button class="fund-main" data-category="${escapeHtml(category)}">
        <span>${escapeHtml(category)}</span>
        <strong>${count}</strong>
      </button>
      <div class="fund-subtiles">
        ${categoryChannels.map(({ channel }) => {
          const channelCount = rawPolicies.filter((policy) => policy.channel === channel).length;
          return `<button data-channel="${escapeHtml(channel)}">${escapeHtml(channel)}<span>${channelCount}</span></button>`;
        }).join("")}
      </div>
    </article>`;
  }).join("");
}

function highlightFlags(flags) {
  return (flags || []).slice(0, 2).map((flag) => `<span class="status-flag">${escapeHtml(flag)}</span>`).join("");
}

function renderPolicyCard(group) {
  const policy = group.policy;
  const analysis = group.analysis;
  const ready = detailReady(policy);
  const href = ready ? detailUrl(policy) : policy.file ? encodePath(policy.file) : "#";
  const title = policy.title.replace(/[（）][^（）]*?[,，]?\d{4}年?[）]/g, "").replace(/（国家发展改革委令第10号，2023年）/, "");
  const highlights = (analysis?.policyHighlights || []).slice(0, 3);
  const meta = [
    analysis?.issuingAuthority || "发布单位待校准",
    analysis?.issueDate || "发布时间待校准",
    analysis?.docNo || "文号待校准",
  ].join(" | ");
  return `<article class="policy-card refined-card ${categoryClass(group.categories[0])}">
    <div class="policy-card-top">
      <button class="favorite-btn ${favorites.has(policy.id) ? "active" : ""}" data-favorite="${escapeHtml(policy.id)}" title="收藏">★</button>
      <div>
        <h3 class="policy-title hover-wrap">
          <a class="policy-title-link" href="${href}" data-policy-link="${escapeHtml(policy.id)}">${escapeHtml(title)}</a>
          <span class="hover-card">
            <strong>${escapeHtml(policy.title)}</strong>
            <span>${escapeHtml(meta)}</span>
            <em>${escapeHtml((highlights[0]?.description || policy.summary || "").slice(0, 92))}</em>
          </span>
        </h3>
        <div class="policy-meta">${escapeHtml(meta)}</div>
      </div>
      <div class="policy-actions">
        ${ready ? `<a class="detail-btn" href="${detailUrl(policy)}">进入详情</a>` : `<span class="status-flag">信息较少</span>`}
        ${policy.file ? `<a class="download" href="${encodePath(policy.file)}" download>下载原文</a>` : ""}
      </div>
    </div>
    <div class="tag-row">
      ${group.channels.map((channel) => `<button class="chip channel chip-button ${categoryClass(channel)}" data-channel="${escapeHtml(channel)}">${escapeHtml(channel)}</button>`).join("")}
      ${group.tags.slice(0, 4).map((tag) => `<button class="chip tag chip-button" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}
      ${group.members.length > 1 ? `<span class="chip">合并 ${group.members.length} 条适用口径</span>` : ""}
      ${highlightFlags(group.qualityFlags)}
    </div>
    <p class="summary">${escapeHtml(policy.summary || "待补充政策解读。")}</p>
    <div class="highlight-grid">
      ${highlights.map((item) => `<div class="highlight-item ${item.tone || ""}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.description)}</span></div>`).join("")}
    </div>
  </article>`;
}

function renderCards(groups) {
  $("cardsView").innerHTML = groups.map(renderPolicyCard).join("") || `<div class="policy-card">没有匹配的政策，请调整筛选条件。</div>`;
}

function renderGraph(groups) {
  const visibleIds = new Set(groups.flatMap((group) => group.members.map((policy) => policy.id)));
  const relationships = analyses
    .filter((analysis) => visibleIds.has(analysis.policyId))
    .flatMap((analysis) => analysis.mappedUnits.map((mapped) => ({ ...mapped, policyId: analysis.policyId })));
  const visibleChannels = data.channels.map(({ channel }) => ({
    channel,
    count: groups.filter((group) => group.channels.includes(channel)).length,
  })).filter((item) => item.count > 0);
  const units = analysisData.architectureUnits || [];
  const width = 1000;
  const height = Math.max(380, Math.max(visibleChannels.length, units.length) * 48 + 90);
  const leftX = 190;
  const rightX = 770;
  const channelY = (index) => 60 + index * ((height - 120) / Math.max(visibleChannels.length - 1, 1));
  const unitY = (index) => 60 + index * ((height - 120) / Math.max(units.length - 1, 1));
  const channelIndex = new Map(visibleChannels.map((item, index) => [item.channel, index]));
  const unitIndex = new Map(units.map((unit, index) => [unit.id, index]));
  const rawById = new Map(rawPolicies.map((policy) => [policy.id, policy]));
  const links = relationships.slice(0, 120).map((rel) => {
    const policy = rawById.get(rel.policyId);
    if (!policy || !channelIndex.has(policy.channel) || !unitIndex.has(rel.unitId)) return "";
    const x1 = leftX + 122;
    const y1 = channelY(channelIndex.get(policy.channel));
    const x2 = rightX - 118;
    const y2 = unitY(unitIndex.get(rel.unitId));
    return `<path d="M ${x1} ${y1} C ${x1 + 150} ${y1}, ${x2 - 150} ${y2}, ${x2} ${y2}" />`;
  }).join("");

  $("graphView").innerHTML = `<section class="kg-panel hero-kg">
    <div class="kg-title">资金流向图谱</div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="资金渠道与平台架构关系图">
      <g class="kg-links">${links}</g>
      <g class="kg-nodes">
        ${visibleChannels.map((item, index) => `<g transform="translate(${leftX},${channelY(index)})"><circle r="9"></circle><text x="-12" y="5" text-anchor="end">${escapeHtml(item.channel)}</text><text x="18" y="5">${item.count}项</text></g>`).join("")}
        ${units.map((unit, index) => `<g transform="translate(${rightX},${unitY(index)})"><circle r="9"></circle><text x="18" y="5">${escapeHtml(unit.name)}</text></g>`).join("")}
      </g>
    </svg>
  </section>`;
}

function renderCompare(groups) {
  const cityRules = [
    ["深圳", /深圳/],
    ["北京", /北京/],
    ["上海", /上海/],
    ["广东", /广东/],
    ["国家", /国务院|国家发展改革委|财政部|中央/],
  ];
  const rows = cityRules.map(([name, pattern]) => ({
    name,
    count: groups.filter((group) => pattern.test(group.policy.title + " " + (group.analysis?.issuingAuthority || ""))).length,
  }));
  const max = Math.max(...rows.map((row) => row.count), 1);
  $("compareView").innerHTML = `<div class="compare-grid">
    ${rows.map((row) => `<article class="compare-card"><strong>${escapeHtml(row.name)}</strong><span>${row.count} 项政策</span><b style="width:${Math.max(8, row.count / max * 100)}%"></b></article>`).join("")}
  </div>`;
}

function renderFiles(groups) {
  $("filesView").innerHTML = groups.map((group) => {
    const policy = group.policy;
    return `<div class="file-row">
      <strong>${escapeHtml(policy.id)}</strong>
      <div>
        <div>${detailReady(policy) ? `<a class="inline-link" href="${detailUrl(policy)}">${escapeHtml(policy.title)}</a>` : escapeHtml(policy.title)}</div>
        <small>${escapeHtml(group.channels.join(" / "))}</small>
      </div>
      ${policy.file ? `<a class="download" href="${encodePath(policy.file)}" download>下载</a>` : ""}
    </div>`;
  }).join("");
}

function renderBookmarks() {
  const favoriteGroups = policyGroups.filter((group) => favorites.has(group.policy.id));
  const recentGroups = recent.map((id) => policyGroups.find((group) => group.policy.id === id)).filter(Boolean).slice(0, 4);
  if (!favoriteGroups.length && !recentGroups.length) {
    $("bookmarkBand").classList.add("hidden");
    return;
  }
  $("bookmarkBand").classList.remove("hidden");
  $("bookmarkBand").innerHTML = `<div class="section-head"><div><span class="section-kicker">常用入口</span><h2>我的收藏与最近浏览</h2></div></div>
    <div class="quick-links">
      ${[...favoriteGroups.slice(0, 4), ...recentGroups].map((group) => `<a href="${detailReady(group.policy) ? detailUrl(group.policy) : "#"}">${escapeHtml(group.policy.id)} ${escapeHtml(group.policy.title)}</a>`).join("")}
    </div>`;
}

function updateViews(groups) {
  $("cardsView").classList.toggle("hidden", state.view !== "cards");
  $("graphView").classList.toggle("hidden", state.view !== "graph");
  $("compareView").classList.toggle("hidden", state.view !== "compare");
  $("filesView").classList.toggle("hidden", state.view !== "files");
  if (state.view === "cards") renderCards(groups);
  if (state.view === "graph") renderGraph(groups);
  if (state.view === "compare") renderCompare(groups);
  if (state.view === "files") renderFiles(groups);
}

function render() {
  const availableChannels = state.category === "全部"
    ? channels
    : data.channels.filter((item) => item.category === state.category).map((item) => item.channel);
  if (state.channel !== "全部" && !availableChannels.includes(state.channel)) state.channel = "全部";
  const groups = filteredGroups();
  fillSelect($("categoryFilter"), categories, state.category);
  fillSelect($("channelFilter"), availableChannels, state.channel);
  fillSelect($("tagFilter"), tags, state.tag);
  $("searchInput").value = state.search;
  $("guideSearch").value = state.search;
  renderStats(groups);
  renderFundTiles();
  renderBookmarks();
  $("resultCount").textContent = `当前显示 ${groups.length} 条去重政策卡片，共覆盖 ${displayPolicyCount()} 份原始政策文件。`;
  updateViews(groups);
}

function setSearch(value) {
  state.search = value;
  render();
}

function bindEvents() {
  $("categoryFilter").addEventListener("change", (event) => { state.category = event.target.value; state.channel = "全部"; render(); });
  $("channelFilter").addEventListener("change", (event) => { state.channel = event.target.value; render(); });
  $("tagFilter").addEventListener("change", (event) => { state.tag = event.target.value; render(); });
  $("searchInput").addEventListener("input", (event) => setSearch(event.target.value));
  $("guideSearch").addEventListener("input", (event) => setSearch(event.target.value));
  $("guideBtn").addEventListener("click", () => setSearch($("guideSearch").value));
  $("resetBtn").addEventListener("click", () => { state = { category: "全部", channel: "全部", tag: "全部", search: "", view: state.view }; render(); });
  $("clearNavBtn").addEventListener("click", () => { state.category = "全部"; state.channel = "全部"; render(); });
  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.view = tab.dataset.view;
    render();
  }));
  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    const channelButton = event.target.closest("[data-channel]");
    const tagButton = event.target.closest("[data-tag]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const policyLink = event.target.closest("[data-policy-link]");
    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      state.channel = "全部";
      render();
    }
    if (channelButton) {
      state.channel = channelButton.dataset.channel;
      const found = data.channels.find((item) => item.channel === state.channel);
      state.category = found?.category || "全部";
      render();
    }
    if (tagButton) {
      state.tag = tagButton.dataset.tag;
      render();
    }
    if (favoriteButton) {
      const id = favoriteButton.dataset.favorite;
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      localStorage.setItem("policyFavorites", JSON.stringify([...favorites]));
      render();
    }
    if (policyLink) {
      const id = policyLink.dataset.policyLink;
      recent = [id, ...recent.filter((item) => item !== id)].slice(0, 8);
      localStorage.setItem("recentPolicies", JSON.stringify(recent));
    }
  });
}

bindEvents();
render();
