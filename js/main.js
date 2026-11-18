(function () {
  var CART_KEY = "myrte-cart-demo";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function writeCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateBagCount();
  }
  function cartCount() {
    return readCart().reduce(function (n, i) { return n + i.qty; }, 0);
  }
  function updateBagCount() {
    $all("[data-bag-count]").forEach(function (el) {
      el.textContent = cartCount();
    });
  }

  function addToCart(product, sizeLabel, price) {
    var items = readCart();
    var key = product.id + "::" + sizeLabel;
    var found = items.find(function (i) { return i.key === key; });
    if (found) found.qty += 1;
    else items.push({
      key: key,
      id: product.id,
      name: product.name,
      size: sizeLabel,
      price: price,
      image: product.image,
      qty: 1
    });
    writeCart(items);
    openCart();
  }

  function headerHTML(active) {
    function item(href, id, label) {
      var cls = active === id ? ' class="is-active"' : "";
      return "<a" + cls + ' href="' + href + '">' + label + "</a>";
    }
    return (
      '<a class="skip" href="#main">본문 바로가기</a>' +
      '<header class="topbar">' +
        '<div class="container">' +
          '<button class="menu-toggle" type="button" aria-label="메뉴 열기" data-menu-toggle><span></span></button>' +
          '<a class="brand" href="index.html">Myrte<span>미르테</span></a>' +
          '<nav class="nav" aria-label="주요">' +
            item("products.html", "products", "제품") +
            item("index.html#space", "space", "공간") +
            item("index.html#philosophy", "philosophy", "이야기") +
          "</nav>" +
          '<div class="topbar-right">' +
            '<button class="bag-btn" type="button" data-open-cart>가방 <span data-bag-count>0</span></button>' +
          "</div>" +
        "</div>" +
      "</header>" +
      '<nav class="mobile-nav" data-mobile-nav hidden>' +
        '<a href="products.html">제품</a>' +
        '<a href="index.html#space">공간</a>' +
        '<a href="index.html#philosophy">이야기</a>' +
      "</nav>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            "<div>" +
              '<a class="brand" href="index.html">Myrte<span>미르테</span></a>' +
              "<p>식물의 온기를 천천히 빚는 가상 아포테카리입니다. 이 사이트는 모임 강의 시연을 위한 더미 예시이며, 실제 브랜드·매장·결제가 아닙니다.</p>" +
            "</div>" +
            "<div>" +
              "<h3>둘러보기</h3>" +
              "<ul>" +
                '<li><a href="products.html">모든 제품</a></li>' +
                '<li><a href="index.html#philosophy">이야기</a></li>' +
                '<li><a href="index.html#space">공간</a></li>' +
              "</ul>" +
            "</div>" +
            "<div>" +
              "<h3>문의 (예시)</h3>" +
              "<ul>" +
                "<li>hello@myrte.example</li>" +
                "<li>02-0000-0000</li>" +
                "<li>서울특별시 종로구 북촌로 00</li>" +
              "</ul>" +
            "</div>" +
            "<div>" +
              "<h3>안내</h3>" +
              "<ul>" +
                "<li>배송 · 교환 (예시)</li>" +
                "<li>성분 문의 (예시)</li>" +
                "<li>개인정보 처리 (예시)</li>" +
              "</ul>" +
            "</div>" +
          "</div>" +
          '<div class="footer-legal">' +
            "<span>© 2026 Myrte. Fictional brand for a lecture demo.</span>" +
            "<span>실존하지 않는 가상 브랜드 · 실결제 없음</span>" +
          "</div>" +
        "</div>" +
      "</footer>" +
      '<div class="overlay" data-overlay hidden></div>' +
      '<aside class="drawer" data-drawer aria-label="가방" hidden>' +
        '<div class="drawer-head">' +
          "<h2>가방</h2>" +
          '<button class="btn-ghost" type="button" data-close-cart>닫기</button>' +
        "</div>" +
        '<div class="cart-list" data-cart-list></div>' +
        '<div class="cart-foot" data-cart-foot></div>' +
      "</aside>"
    );
  }

  function productCard(p) {
    var price = p.sizes[0].price;
    return (
      '<a class="product-card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="thumb"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy" width="600" height="800"></div>' +
        '<p class="label">' + p.categoryLabel + "</p>" +
        "<h3>" + p.name + "</h3>" +
        '<p class="price">' + MYRTE.formatPrice(price) + "</p>" +
      "</a>"
    );
  }

  function renderCart() {
    var items = readCart();
    var list = $("[data-cart-list]");
    var foot = $("[data-cart-foot]");
    if (!list) return;
    if (!items.length) {
      list.innerHTML = '<p class="cart-empty">아직 담긴 제품이 없습니다.</p>';
      foot.innerHTML = "";
      return;
    }
    list.innerHTML = items.map(function (i) {
      return (
        '<div class="cart-item">' +
          '<img src="' + i.image + '" alt="">' +
          "<div><strong>" + i.name + "</strong><div class=\"meta\">" + i.size + " · " + i.qty + "개</div></div>" +
          "<div>" + MYRTE.formatPrice(i.price * i.qty) + "</div>" +
        "</div>"
      );
    }).join("");
    var total = items.reduce(function (n, i) { return n + i.price * i.qty; }, 0);
    foot.innerHTML =
      '<div class="cart-total"><span>합계</span><strong>' + MYRTE.formatPrice(total) + "</strong></div>" +
      '<button class="btn btn-primary" type="button" data-fake-checkout>주문하기</button>' +
      '<p class="note">시연용 예시입니다. 실제 결제는 이루어지지 않으며, 주문 정보는 전송되지 않습니다.</p>';
  }

  function openCart() {
    var drawer = $("[data-drawer]");
    var overlay = $("[data-overlay]");
    renderCart();
    drawer.hidden = false;
    overlay.hidden = false;
    requestAnimationFrame(function () {
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    var drawer = $("[data-drawer]");
    var overlay = $("[data-overlay]");
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(function () {
      drawer.hidden = true;
      overlay.hidden = true;
    }, 280);
  }

  function bindChrome() {
    var toggle = $("[data-menu-toggle]");
    var mobile = $("[data-mobile-nav]");
    if (toggle && mobile) {
      mobile.hidden = false;
      mobile.classList.remove("is-open");
      mobile.style.display = "";
      // CSS handles .is-open; keep hidden attr in sync
      mobile.hidden = true;
      toggle.addEventListener("click", function () {
        var open = !mobile.classList.contains("is-open");
        mobile.hidden = !open;
        mobile.classList.toggle("is-open", open);
        toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
      });
    }
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open-cart], [data-close-cart], [data-overlay], [data-fake-checkout]");
      if (!t) return;
      if (t.hasAttribute("data-open-cart")) openCart();
      if (t.hasAttribute("data-close-cart") || t.hasAttribute("data-overlay")) closeCart();
      if (t.hasAttribute("data-fake-checkout")) {
        t.textContent = "이 페이지는 시연용입니다";
        t.disabled = true;
      }
    });
    updateBagCount();
  }

  function bindNewsletter() {
    var form = $("[data-news-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector("input").value.trim();
      var note = form.parentElement.querySelector("[data-news-note]");
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = "이메일 형식을 확인해 주세요.";
        note.classList.remove("is-ok");
        return;
      }
      form.reset();
      note.textContent = "관심을 보내 주셔서 감사합니다. 시연용 예시이므로 실제로 발송되지 않습니다.";
      note.classList.add("is-ok");
    });
  }

  function renderFeatured() {
    var root = $("[data-featured]");
    if (!root) return;
    var list = MYRTE.products.filter(function (p) { return p.featured; }).slice(0, 3);
    root.innerHTML = list.map(productCard).join("");
  }

  function renderListing() {
    var root = $("[data-listing]");
    var filters = $("[data-filters]");
    if (!root || !filters) return;
    var current = "all";
    function paint() {
      var list = MYRTE.products.filter(function (p) {
        return current === "all" || p.category === current;
      });
      root.innerHTML = list.length
        ? list.map(productCard).join("")
        : '<p class="empty-list">해당하는 제품이 없습니다.</p>';
      $all("[data-filter]").forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-filter") === current);
        btn.setAttribute("aria-pressed", btn.getAttribute("data-filter") === current ? "true" : "false");
      });
    }
    filters.innerHTML = MYRTE.categories.map(function (c) {
      return '<button class="filter-btn" type="button" data-filter="' + c.id + '" aria-pressed="false">' + c.label + "</button>";
    }).join("");
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      current = btn.getAttribute("data-filter");
      paint();
    });
    paint();
  }

  function renderDetail() {
    var root = $("[data-detail]");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var p = id && MYRTE.getProduct(id);
    if (!p) {
      root.innerHTML =
        '<div class="container not-found">' +
          "<h1>제품을 찾을 수 없습니다</h1>" +
          "<p>주소가 바뀌었거나, 더미 데이터에 없는 제품입니다.</p>" +
          '<p><a class="btn-ghost" href="products.html">제품 목록으로</a></p>' +
        "</div>";
      document.title = "제품을 찾을 수 없습니다 — 미르테";
      return;
    }
    document.title = p.name + " — 미르테";
    var initial = p.sizes[0];
    root.innerHTML =
      '<div class="container detail-grid">' +
        '<div class="detail-media"><img src="' + p.image + '" alt="' + p.name + '" width="800" height="1066"></div>' +
        '<div class="detail-info">' +
          '<p class="label">' + p.categoryLabel + "</p>" +
          "<h1>" + p.name + "</h1>" +
          '<p class="detail-price" data-detail-price>' + MYRTE.formatPrice(initial.price) + "</p>" +
          '<p class="tagline">' + p.tagline + "</p>" +
          "<p class=\"lead\">" + p.description + "</p>" +
          '<div class="size-row">' +
            '<span class="field-label">용량</span>' +
            '<div class="size-opts" data-sizes>' +
              p.sizes.map(function (s, i) {
                return '<button class="size-btn' + (i === 0 ? " is-active" : "") + '" type="button" data-size="' + s.label + '" data-price="' + s.price + '">' + s.label + "</button>";
              }).join("") +
            "</div>" +
          "</div>" +
          '<div class="detail-actions">' +
            '<button class="btn btn-primary" type="button" data-add>장바구니 담기</button>' +
            '<a class="btn btn-secondary" href="products.html">목록으로</a>' +
          "</div>" +
          '<div class="accordion">' +
            acc("사용 방법", p.usage) +
            acc("성분", p.ingredients) +
          "</div>" +
        "</div>" +
      "</div>";

    var selected = { label: initial.label, price: initial.price };
    root.addEventListener("click", function (e) {
      var sizeBtn = e.target.closest("[data-size]");
      if (sizeBtn) {
        $all("[data-size]", root).forEach(function (b) { b.classList.remove("is-active"); });
        sizeBtn.classList.add("is-active");
        selected = { label: sizeBtn.getAttribute("data-size"), price: Number(sizeBtn.getAttribute("data-price")) };
        $("[data-detail-price]", root).textContent = MYRTE.formatPrice(selected.price);
      }
      if (e.target.closest("[data-add]")) addToCart(p, selected.label, selected.price);
      var accBtn = e.target.closest("[data-acc]");
      if (accBtn) {
        var item = accBtn.closest(".acc-item");
        var open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        accBtn.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });

    var rel = $("[data-related]");
    if (rel) {
      var items = MYRTE.related(p, 3);
      rel.innerHTML = items.map(productCard).join("");
    }
  }

  function acc(title, body) {
    var id = "acc-" + title;
    return (
      '<div class="acc-item">' +
        "<h2><button type=\"button\" data-acc aria-expanded=\"false\" aria-controls=\"" + id + "\">" + title + " <span>+</span></button></h2>" +
        '<div class="acc-panel" id="' + id + '">' + body + "</div>" +
      "</div>"
    );
  }

  function init() {
    var mountHead = $("[data-chrome-header]");
    var mountFoot = $("[data-chrome-footer]");
    var page = document.body.getAttribute("data-page") || "";
    if (mountHead) mountHead.outerHTML = headerHTML(page);
    if (mountFoot) mountFoot.outerHTML = footerHTML();
    bindChrome();
    bindNewsletter();
    renderFeatured();
    renderListing();
    renderDetail();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
