document.addEventListener("DOMContentLoaded", function() {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon"),
  themeToggleLightIcon = document.getElementById("theme-toggle-light-icon"),
  themeToggleBtn = ("dark" === localStorage.getItem("color-theme") || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (themeToggleLightIcon.classList.remove("hidden"), document.documentElement.classList.add("dark")) : (themeToggleDarkIcon.classList.remove("hidden"), document.documentElement.classList.remove("dark")), document.getElementById("theme-toggle"));

  themeToggleBtn.addEventListener("click", function () {
      themeToggleDarkIcon.classList.toggle("hidden"),
      themeToggleLightIcon.classList.toggle("hidden"),
      localStorage.getItem("color-theme") ? "light" === localStorage.getItem("color-theme") ? (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light")) : document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light")) : (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark"));
  });
});

function marquee() {
  const btn = document.querySelector("button.mobile-menu-button"),
    menu = document.querySelector(".mobile-menu"),
    btnClose = document.querySelector(".navbar-toggle-close"),
    date = (btn.addEventListener("click", () => {
      menu.classList.remove("hidden"), menu.classList.add("open")
    }), btnClose.addEventListener("click", () => {
      menu.classList.add("hidden"), menu.classList.remove("open")
    }), new Date);
  let year = date.getFullYear();
  if (document.getElementById("date").innerHTML = year,
    window.addEventListener("scroll", function () {
      var e = window.pageYOffset,
        t = document.getElementById("top-nav");
      100 <= e ? (document.getElementById("mainnavigationBar").classList.add("nav-sticky"), t && (t.classList.add("scale-y-0", "origin-top"), t.classList.remove("scale-y-100"))) : (document.getElementById("mainnavigationBar").classList.remove("nav-sticky"), t && (t.classList.remove("scale-y-0", "origin-top"), t.classList.add("scale-y-100", "origin-top")))
    }), null != document.querySelector("#clients")) {
    const c = document.documentElement,
      d = getComputedStyle(c).getPropertyValue("--marquee-elements-displayed"),
      e = document.querySelector(".marquee-content");
    c.style.setProperty("--marquee-elements", e.children.length);
    for (let t = 0; t < d; t++) e.appendChild(e.children[t].cloneNode(!0))
  }
}


function counter() {
  let section_counter = document.querySelector("#counter"),
    counters = document.querySelectorAll(".counter");
  if (section_counter) {
    let e = new IntersectionObserver((e, t) => {
      var [e] = e;
      e.isIntersecting && (counters.forEach((n, e) => {
        n.innerHTML = "0";
        const a = () => {
          var e = +n.getAttribute("data-value"),
            t = +n.innerHTML;
          t < e ? (n.innerHTML = "" + Math.ceil(t + e / 5e3), setTimeout(a, 1)) : n.innerHTML = e
        };
        a(), n.parentElement.style.animation ? n.parentElement.style.animation = "" : n.parentElement.style.animation = `slide-up 0.3s ease forwards ${e / counters.length + 1.5}s`
      }), t.unobserve(section_counter))
    }, {
      root: null,
      threshold: 1
    });
    e.observe(section_counter)
  }
  let trusted_counter = document.querySelector("#counter_trusted"),
    trusted_counters = document.querySelectorAll(".counterTrusted");
  if (trusted_counter) {
    let e = new IntersectionObserver((e, t) => {
      var [e] = e;
      e.isIntersecting && (trusted_counters.forEach((n, e) => {
        n.innerHTML = "0";
        const a = () => {
          var e = +n.getAttribute("data-value"),
            t = +n.innerHTML;
          t < e ? (n.innerHTML = "" + Math.ceil(t + e / 5e3), setTimeout(a, 1)) : n.innerHTML = e
        };
        a(), n.parentElement.style.animation ? n.parentElement.style.animation = "" : n.parentElement.style.animation = `slide-up 0.3s ease forwards ${e / trusted_counters.length + 1.5}s`
      }), t.unobserve(trusted_counter))
    }, {
      root: null,
      threshold: 1
    });
    e.observe(trusted_counter)
  }
}

function fapHeader() {
  document.querySelectorAll(".faq-header").forEach(n => {
    n.addEventListener("click", e => {
      let t = n.nextElementSibling;
      if (!n.classList.contains("collapsing")) {
        if (n.classList.contains("open")) t.classList = "faq-body collapsing", setTimeout(() => {
          t.style.height = "0px"
        }, 1), setTimeout(() => {
          t.classList = "faq-body close", t.style.height = ""
        }, 300);
        else {
          t.style.display = "block";
          let e = t.clientHeight;
          setTimeout(() => {
            t.style.height = e + "px", t.style.display = ""
          }, 1), t.classList = "faq-body collapsing", setTimeout(() => {
            t.classList = "faq-body close open"
          }, 300)
        }
        n.classList.toggle("open")
      }
    })
  });
}



var checkBox = document.getElementById("priceCheck");

function check() {
  for (var e = document.getElementsByClassName("price-month"), t = document.getElementsByClassName("price-year"), n = 0; n < e.length; n++) !1 === checkBox.checked ? (e[n].style.display = "block", t[n].style.display = "none") : !0 === checkBox.checked && (e[n].style.display = "none", t[n].style.display = "block")
}

check(), checkBox && checkBox.addEventListener("click", check);

const testimoial = new Swiper("#testionial", {
  loop: !0,
  spaceBetween: 45,
  autoplay: {
    delay: 2500,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: !0
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 45
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45
    }
  }
}),
  bloglFeature = new Swiper("#blog-feature", {
    loop: !0,
    slidesPerView: 1,
    spaceBetween: 45,
    autoplay: {
      delay: 2500,
      disableOnInteraction: !1
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  });

function animationIntegrations() {

  let faqTabs = document.querySelectorAll("ul.faq-tabs > li");

  function myTabClicks(e) {
    for (let e = 0; e < faqTabs.length; e++) faqTabs[e].classList.remove("tabActive");
    e.currentTarget.classList.add("tabActive"), e.preventDefault();
    var t = document.querySelectorAll(".tab-pane");
    for (let e = 0; e < t.length; e++) t[e].classList.remove("tabActive");
    e = e.target.getAttribute("href");
    document.querySelector(e).classList.add("tabActive")
  }
  for (let e = 0; e < faqTabs.length; e++) faqTabs[e].addEventListener("click", myTabClicks);

  Fancybox.bind("[data-fancybox]", {}), gsap.registerPlugin(MotionPathPlugin), gsap.set("#rect, #rect-2, #rect-3, #rect-4, #rect-5, #rect-6", {
    opacity: 1
  }), gsap.from("#rect", {
    motionPath: {
      path: "#path",
      autoRotate: !0,
      align: "#path",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  }), gsap.from("#rect-2", {
    motionPath: {
      path: "#path-2",
      autoRotate: !0,
      align: "#path-2",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  }), gsap.from("#rect-3", {
    motionPath: {
      path: "#path-3",
      autoRotate: !0,
      align: "#path-3",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  }), gsap.from("#rect-4", {
    motionPath: {
      path: "#path-4",
      autoRotate: !0,
      align: "#path-4",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  }), gsap.from("#rect-5", {
    motionPath: {
      path: "#path-5",
      autoRotate: !0,
      align: "#path-5",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  }), gsap.from("#rect-6", {
    motionPath: {
      path: "#path-6",
      autoRotate: !0,
      align: "#path-6",
      alignOrigin: [.5, .5]
    },
    duration: 2,
    ease: "none",
    repeat: -1,
    repeatDelay: 0
  });


}

function modalSearch() {
  let modal = document.getElementById("modal"),
    modalOpenBtn = document.getElementById("open-btn"),
    modalCloseBtn = document.getElementById("ok-btn");
  if (modalOpenBtn.onclick = function () {
    modal.style.display = "flex"
  }, modalCloseBtn.onclick = function () {
    modal.style.display = "none"
  }, window.onclick = function (e) {
    e.target == modal && (modal.style.display = "none")
  }, AOS.init({
    disable: function () {
      return window.innerWidth < 768
    }
  }), null != document.querySelector("#scene")) {
    let e = document.getElementById("scene");

    function parallax(a) {
      this.querySelectorAll(".parallax-effect").forEach(e => {
        var t = e.getAttribute("parallax-value"),
          n = (e.offsetWidth - a.pageX * t) / 90,
          t = (e.offsetWidth - a.pageY * t) / 90;
        e.style.cssText = `transform: translateX(${n}px) translateY(${t}px); transition-duration: 0.1s;`
      })
    }
    e.addEventListener("mousemove", parallax)
  }
}


