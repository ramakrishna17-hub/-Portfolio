(function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = {
    skills: document.getElementById("skillsPane"),
    experience: document.getElementById("experiencePane"),
    education: document.getElementById("educationPane"),
  };

  function activateTab(tabId) {
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    Object.entries(tabPanes).forEach(([id, pane]) => {
      if (!pane) return;
      const isActive = id === tabId;
      pane.classList.toggle("active-pane", isActive);
      pane.hidden = !isActive;
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));
  });

  document.querySelectorAll("[data-tab]").forEach((el) => {
    if (el.classList.contains("tab-btn")) return;
    el.addEventListener("click", (e) => {
      const tabId = el.dataset.tab;
      if (!tabId) return;
      if (el.getAttribute("href") === "#tabbed-section") {
        e.preventDefault();
      }
      activateTab(tabId);
      document.getElementById("tabbed-section")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll('.nav-links a[href="#tabbed-section"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const tabId = link.dataset.tab;
      if (!tabId) return;
      e.preventDefault();
      activateTab(tabId);
      document.getElementById("tabbed-section")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const themeBtn = document.getElementById("themeSwitchBtn");
  const savedTheme = localStorage.getItem("portfolioTheme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    updateThemeButton(true);
  }

  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
    updateThemeButton(isLight);
  });

  function updateThemeButton(isLight) {
    if (!themeBtn) return;
    themeBtn.innerHTML = isLight
      ? '<i class="fas fa-sun" aria-hidden="true"></i> Light'
      : '<i class="fas fa-moon" aria-hidden="true"></i> Dark';
  }

  const backBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backBtn?.classList.toggle("show", window.scrollY > 300);
  });
  backBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('.nav-links a[href^="#"]:not([data-tab])').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const contactForm = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMsg").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please fill all fields.";
      feedback.className = "form-feedback error";
      return;
    }

    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
    window.location.href =
      "mailto:ramakrishnachanigarapu01@gmail.com?subject=" + subject + "&body=" + body;

    feedback.textContent = "Opening your email app…";
    feedback.className = "form-feedback success";
    contactForm.reset();
    setTimeout(() => {
      feedback.textContent = "";
      feedback.className = "form-feedback";
    }, 4000);
  });
})();
