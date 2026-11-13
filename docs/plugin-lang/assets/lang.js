(function () {
  function wide() {
    return window.matchMedia("(min-width: 800px)").matches;
  }

  function place() {
    var header = document.querySelector(".book-header");
    var summary = document.querySelector(".book-summary");
    if (!header) return;

    var search = document.querySelector("#book-search-input");
    if (search && summary) {
      if (wide()) {
        if (search.parentElement !== header) header.appendChild(search);
      } else if (search.parentElement !== summary) {
        summary.insertBefore(search, summary.firstChild);
      }
    }

    var path = location.pathname;
    var here = /\/zh(?=\/|$)/.test(path) ? "zh" : /\/en(?=\/|$)/.test(path) ? "en" : "";
    if (!here) return;
    var bar = header.querySelector(".lang-switch");
    if (!bar) {
      bar = document.createElement("nav");
      bar.className = "lang-switch";
      bar.setAttribute("aria-label", here === "zh" ? "語言" : "Language");
      header.appendChild(bar);
    }
    bar.innerHTML = "";
    [
      ["en", "EN"],
      ["zh", "中文"],
    ].forEach(function (item) {
      var a = document.createElement("a");
      a.href = path.replace(/\/(en|zh)(?=\/|$)/, "/" + item[0]);
      a.textContent = item[1];
      if (item[0] === here) {
        a.className = "on";
        a.setAttribute("aria-current", "page");
      }
      bar.appendChild(a);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", place);
  } else {
    place();
  }
  window.addEventListener("resize", place);
  if (window.gitbook && gitbook.events) {
    gitbook.events.bind("page.change", place);
  }
})();
