/* ==== North America P&C Insurance Brokers — shared layout & behaviors ==== */
(function () {
  "use strict";

  var EMAIL = "contact@naplibroker.com";
  var page = document.body.getAttribute("data-page") || "";

  /* ---------------- HEADER ---------------- */
  var headerHTML = ''
  + '<div class="fixed top-0 inset-x-0 z-50">'
  /* utility bar */
  + '  <div class="bg-navy-950 border-b border-white/10 text-xs">'
  + '    <div class="max-w-7xl mx-auto px-5 lg:px-8 h-9 flex items-center justify-end gap-6 text-white/60">'
  + '      <a href="mailto:' + EMAIL + '" class="hover:text-brass-300 transition-colors hidden sm:inline">' + EMAIL + '</a>'
  + '      <a href="claims.html" class="text-brass-400 hover:text-brass-300 transition-colors font-semibold tracking-wide">理賠專區</a>'
  + '    </div>'
  + '  </div>'
  /* main bar */
  + '  <div id="mainBar" class="bg-navy-900/95 backdrop-blur border-b border-white/10">'
  + '    <div class="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">'
  + '      <a href="index.html" class="flex items-center gap-3 group shrink-0">'
  + '        <span class="w-9 h-9 rounded-sm bg-brass-500 flex items-center justify-center font-serif font-bold text-navy-950 text-lg group-hover:bg-brass-300 transition-colors">北</span>'
  + '        <span class="leading-tight">'
  + '          <span class="block text-white font-serif font-semibold text-[15px] tracking-wide">北美洲保險經紀人有限公司</span>'
  + '          <span class="block text-white/50 text-[10px] tracking-[.28em] uppercase">North America P&amp;C Insurance Brokers</span>'
  + '        </span>'
  + '      </a>'
  + '      <nav class="hidden lg:flex items-center gap-7 text-sm text-white/80" aria-label="主選單">'
  + navItem("index",    "index.html",    "首頁", null)
  + navItem("services", "services.html", "服務方案", [
        ["services.html#electronics", "電子產品・消費性電子"],
        ["services.html#machinery",   "機械設備・工具機"],
        ["services.html#auto",        "汽車零組件"],
        ["services.html#medical",     "醫療器材"],
        ["services.html#consumer",    "消費用品・家用品"],
        ["services.html#process",     "投保流程"]
      ])
  + navItem("insights", "insights.html", "北美洞察", [
        ["insights.html#litigation", "美加訴訟環境"],
        ["insights.html#retailers",  "通路投保要求"],
        ["insights.html#glossary",   "保單名詞解析"]
      ])
  + navItem("claims",   "claims.html",   "理賠專區", null)
  + navItem("about",    "about.html",    "認識我們", [
        ["about.html#company", "關於我們"],
        ["about.html#vision",  "理念與願景"],
        ["about.html#team",    "服務團隊與流程"]
      ])
  + navItem("faq",      "faq.html",      "常見問題", null)
  + '        <a href="contact.html" class="btn-gold ml-1 bg-brass-500 text-navy-950 font-semibold px-5 py-2.5 rounded-sm">聯絡我們</a>'
  + '      </nav>'
  + '      <button id="menuBtn" aria-label="開啟選單" aria-expanded="false" class="lg:hidden text-white p-2">'
  + '        <svg id="iconOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>'
  + '        <svg id="iconClose" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>'
  + '      </button>'
  + '    </div>'
  /* mobile menu */
  + '    <div id="mobileMenu" class="lg:hidden hidden bg-navy-950 border-t border-white/10 max-h-[calc(100vh-108px)] overflow-y-auto">'
  + '      <nav class="px-6 py-4 flex flex-col text-white/85 text-[15px]" aria-label="行動版選單">'
  + mobileLink("index.html", "首頁")
  + mobileGroup("服務方案", "services.html", [
        ["services.html#electronics","電子產品"],["services.html#machinery","機械設備"],
        ["services.html#auto","汽車零組件"],["services.html#medical","醫療器材"],
        ["services.html#consumer","消費用品"],["services.html#process","投保流程"]
      ])
  + mobileGroup("北美洞察", "insights.html", [
        ["insights.html#litigation","美加訴訟環境"],["insights.html#retailers","通路投保要求"],["insights.html#glossary","保單名詞解析"]
      ])
  + mobileLink("claims.html", "理賠專區")
  + mobileGroup("認識我們", "about.html", [
        ["about.html#company","關於我們"],["about.html#vision","理念與願景"],["about.html#team","服務團隊與流程"]
      ])
  + mobileLink("faq.html", "常見問題")
  + '        <a href="contact.html" class="py-3.5 text-brass-400 font-semibold">聯絡我們 →</a>'
  + '      </nav>'
  + '    </div>'
  + '  </div>'
  + '</div>';

  function navItem(key, href, label, children) {
    var active = (key === page) ? " is-active" : "";
    var textCls = (key === page) ? "text-brass-300" : "hover:text-white";
    if (!children) {
      return '<div class="nav-item' + active + '"><a href="' + href + '" class="nav-trigger ' + textCls + ' transition-colors py-2 inline-block">' + label + '</a></div>';
    }
    var dd = children.map(function (c) { return '<a href="' + c[0] + '">' + c[1] + '</a>'; }).join("");
    return ''
      + '<div class="nav-item' + active + '">'
      + '  <a href="' + href + '" class="nav-trigger ' + textCls + ' transition-colors py-2 inline-flex items-center gap-1.5">' + label
      + '    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>'
      + '  </a>'
      + '  <div class="nav-dropdown"><div class="nav-dropdown-inner py-2">' + dd + '</div></div>'
      + '</div>';
  }
  function mobileLink(href, label) {
    return '<a href="' + href + '" class="py-3.5 border-b border-white/5">' + label + '</a>';
  }
  function mobileGroup(label, href, children) {
    var dd = children.map(function (c) {
      return '<a href="' + c[0] + '" class="block py-2.5 pl-4 text-white/60 text-sm border-b border-white/5 last:border-0">' + c[1] + '</a>';
    }).join("");
    return ''
      + '<details class="border-b border-white/5">'
      + '  <summary class="py-3.5 flex items-center justify-between cursor-pointer list-none">'
      + '    <span>' + label + '</span>'
      + '    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>'
      + '  </summary>'
      + '  <div class="pb-2"><a href="' + href + '" class="block py-2.5 pl-4 text-brass-400 text-sm border-b border-white/5">總覽</a>' + dd + '</div>'
      + '</details>';
  }

  /* ---------------- FOOTER ---------------- */
  var footerHTML = ''
  + '<footer class="bg-navy-950 text-white/60">'
  + '  <div class="max-w-7xl mx-auto px-5 lg:px-8 py-16">'
  + '    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">'
  /* col 1: identity */
  + '      <div class="lg:col-span-1">'
  + '        <div class="flex items-center gap-3 mb-5">'
  + '          <span class="w-9 h-9 rounded-sm bg-brass-500 flex items-center justify-center font-serif font-bold text-navy-950 text-lg">北</span>'
  + '          <div class="leading-tight">'
  + '            <p class="text-white font-serif font-semibold text-[15px]">北美洲保險經紀人有限公司</p>'
  + '            <p class="text-white/40 text-[10px] tracking-[.28em] uppercase">NA P&amp;C Insurance Brokers</p>'
  + '          </div>'
  + '        </div>'
  + '        <p class="text-sm leading-relaxed">專營出口美國、加拿大市場之產品責任險規劃的 B2B 保險經紀公司。</p>'
  + '        <p class="text-sm mt-4">統一編號：53501165</p>'
  + '      </div>'
  /* col 2: services */
  + '      <div>'
  + '        <p class="text-white font-serif mb-4">服務方案</p>'
  + '        <ul class="space-y-2.5 text-sm">'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="services.html#electronics">電子產品責任險</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="services.html#machinery">機械設備責任險</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="services.html#auto">汽車零組件責任險</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="services.html#medical">醫療器材責任險</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="services.html#consumer">消費用品責任險</a></li>'
  + '        </ul>'
  + '      </div>'
  /* col 3: resources */
  + '      <div>'
  + '        <p class="text-white font-serif mb-4">洞察與資源</p>'
  + '        <ul class="space-y-2.5 text-sm">'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="insights.html#litigation">美加訴訟環境</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="insights.html#retailers">通路投保要求</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="insights.html#glossary">保單名詞解析</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="claims.html">理賠流程與文件</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="faq.html">常見問題</a></li>'
  + '        </ul>'
  + '      </div>'
  /* col 4: contact */
  + '      <div>'
  + '        <p class="text-white font-serif mb-4">聯絡資訊</p>'
  + '        <ul class="space-y-2.5 text-sm">'
  + '          <li>營業時間：週一至週五 09:00–18:00</li>'
  + '          <li><a class="text-brass-400 hover:text-brass-300 transition-colors break-all" href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>'
  + '          <li><a class="hover:text-brass-300 transition-colors" href="contact.html">線上諮詢表單 →</a></li>'
  + '        </ul>'
  + '      </div>'
  + '    </div>'
  + '    <div class="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">'
  + '      <p>© <span id="footerYear"></span> 北美洲保險經紀人有限公司 North America P&amp;C Insurance Brokers Co., Ltd. All rights reserved.</p>'
  + '      <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="聲明事項">'
  + '        <a class="hover:text-white transition-colors" href="legal.html#copyright">版權聲明</a>'
  + '        <a class="hover:text-white transition-colors" href="legal.html#privacy">隱私權保護聲明</a>'
  + '        <a class="hover:text-white transition-colors" href="legal.html#disclaimer">免責聲明</a>'
  + '      </nav>'
  + '    </div>'
  + '    <p class="text-[11px] text-white/30 mt-4 leading-relaxed">本網站為靜態多頁式網站，符合 GitHub Pages 部署規範。網站內容僅供參考，實際承保範圍、條款與費率以各保險公司核保結果及保險單條款為準。</p>'
  + '  </div>'
  + '</footer>';

  /* ---------------- SIDE RAIL ---------------- */
  var railHTML = ''
  + '<div class="side-rail" aria-label="快速功能">'
  + '  <a href="contact.html"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/></svg><span>聯絡專家</span></a>'
  + '  <a href="faq.html"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 9a3.5 3.5 0 116 2.4c-.9.9-2 1.3-2 2.6m0 3h.01"/></svg><span>常見問題</span></a>'
  + '  <button type="button" id="toTopBtn"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 14l7-7 7 7"/></svg><span>TOP</span></button>'
  + '</div>';

  /* ---------------- INJECT ---------------- */
  var headerMount = document.getElementById("site-header");
  var footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML + railHTML;

  var y = document.getElementById("footerYear");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------------- BEHAVIORS ---------------- */
  var menuBtn = document.getElementById("menuBtn"),
      mobileMenu = document.getElementById("mobileMenu"),
      iconOpen = document.getElementById("iconOpen"),
      iconClose = document.getElementById("iconClose");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", !open);
      iconOpen.classList.toggle("hidden", open);
      iconClose.classList.toggle("hidden", !open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  var toTop = document.getElementById("toTopBtn");
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* reveal + risk bars */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  Array.prototype.forEach.call(document.querySelectorAll(".reveal, .riskbar"), function (el) { observer.observe(el); });

  /* copy email buttons (any element with [data-copy-email]) */
  var toast = document.getElementById("toast"), toastTimer = null;
  function showToast() {
    if (!toast) return;
    toast.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.style.opacity = "0"; }, 2400);
  }
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy-email]"), function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.querySelector("[data-copy-label]");
      function done() {
        if (label) {
          var orig = label.textContent;
          label.textContent = "已複製 ✓";
          setTimeout(function () { label.textContent = orig; }, 2400);
        }
        showToast();
      }
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = EMAIL; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (err) {}
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL).then(done).catch(fallback);
      } else { fallback(); }
    });
  });
})();
