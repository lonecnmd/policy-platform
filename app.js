const data = window.POLICY_DATA;
let state = { category: "全部", channel: "全部", tag: "全部", search: "", view: "cards" };

const $ = (id) => document.getElementById(id);
const policies = data.policies;
const categories = [...new Set(data.channels.map((d) => d.category))];
const channels = [...new Set(data.channels.map((d) => d.channel))];
const tags = [...new Set(policies.flatMap((p) => p.tags))].filter(Boolean).sort();

function byFilter(p) {
  const q = state.search.trim().toLowerCase();
  const inSearch = !q || [p.id, p.title, p.category, p.channel, p.summary, p.quotes.join(" "), p.tags.join(" ")].join(" ").toLowerCase().includes(q);
  return (state.category === "全部" || p.category === state.category)
    && (state.channel === "全部" || p.channel === state.channel)
    && (state.tag === "全部" || p.tags.includes(state.tag))
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

function renderStats() {
  const categoryCount = categories.length;
  const channelCount = channels.length;
  const tagCount = tags.length;
  const fileCount = policies.reduce((sum, p) => sum + 1 + (p.attachments?.length || 0), 0);
  $("stats").innerHTML = [
    ["政策记录", policies.length],
    ["资金类别", categoryCount],
    ["资金渠道", channelCount],
    ["结构标签", tagCount],
    ["可下载文件", fileCount],
    ["更新日期", data.updatedAt],
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
    const firstQuote = p.quotes[0] || "未从本地文本中稳定抽取到资金管理条款，建议结合原文复核。";
    const fileLink = p.file ? `<a class="download" href="${encodePath(p.file)}" download>下载原文</a>` : "";
    const attachmentLinks = (p.attachments || []).map((a) => `<a class="attachment" href="${encodePath(a.file)}" download>${escapeHtml(a.label)}</a>`).join("");
    return `<article class="policy-card">
      <div class="policy-head">
        <h2 class="policy-title"><span class="policy-id">${escapeHtml(p.id)}</span>${escapeHtml(p.title)}</h2>
        ${fileLink}
      </div>
      <div class="meta-row">
        <span class="chip category">${escapeHtml(p.category)}</span>
        <span class="chip channel">${escapeHtml(p.channel)}</span>
        <span class="chip">标签 ${p.tagCount}</span>
        <span class="chip">${escapeHtml(p.sourceNote)}</span>
      </div>
      <div class="tag-row">${(p.tags.length ? p.tags : ["待人工补充标签"]).map((tag) => `<span class="chip tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <p class="summary">${escapeHtml(p.summary || "待补充解读。")}</p>
      <div class="quote-box"><div class="quote-title">资金管理摘录</div>${escapeHtml(firstQuote)}</div>
      ${attachmentLinks ? `<div class="attachments">${attachmentLinks}</div>` : ""}
    </article>`;
  }).join("") || `<div class="policy-card">没有匹配的政策，试试清空筛选条件。</div>`;
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
        <div>${escapeHtml(p.title)}</div>
        <small>${escapeHtml(p.fileName)}</small>
        ${attach ? `<div class="attachments">${attach}</div>` : ""}
      </div>
      ${p.file ? `<a class="download" href="${encodePath(p.file)}" download>下载</a>` : ""}
    </div>`;
  }).join("");
}

function updateViews(list) {
  $("cardsView").classList.toggle("hidden", state.view !== "cards");
  $("matrixView").classList.toggle("hidden", state.view !== "matrix");
  $("filesView").classList.toggle("hidden", state.view !== "files");
  if (state.view === "cards") renderCards(list);
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
