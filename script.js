const startButton = document.getElementById("startButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");

const THEME_KEY = "emailgrowth-theme";

function setTheme(mode) {
  const isDark = mode === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️ Aydınlık" : "🌙 Koyu";
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function getKlaviyoQueue() {
  window._learnq = window._learnq || [];
  return window._learnq;
}

function klaviyoTrack(eventName, payload = {}) {
  if (window.klaviyo && typeof window.klaviyo.track === "function") {
    window.klaviyo.track(eventName, payload);
    return;
  }
  getKlaviyoQueue().push(["track", eventName, payload]);
}

function klaviyoIdentify(profile = {}) {
  if (window.klaviyo && typeof window.klaviyo.identify === "function") {
    window.klaviyo.identify(profile);
    return;
  }
  getKlaviyoQueue().push(["identify", profile]);
}

function showMessage(message, type = "success") {
  formMessage.textContent = message;
  formMessage.classList.remove("text-red-400", "text-emerald-400", "text-slate-300");
  formMessage.classList.add(type === "error" ? "text-red-400" : "text-emerald-500");
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

initializeTheme();
setupRevealAnimations();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const nextMode = isDarkMode ? "light" : "dark";
    setTheme(nextMode);
    localStorage.setItem(THEME_KEY, nextMode);
  });
}

if (startButton) {
  startButton.addEventListener("click", () => {
    klaviyoTrack("Click_Start_Button", {
      source: "hero_cta",
      timestamp: new Date().toISOString(),
    });

    const targetSection = document.getElementById("contact");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!firstName || !lastName || !company || !isEmailValid) {
      showMessage("Lütfen tüm alanları doğru biçimde doldurun.", "error");
      return;
    }

    const profile = {
      $email: email,
      $first_name: firstName,
      $last_name: lastName,
      $organization: company,
    };

    klaviyoIdentify(profile);
    klaviyoTrack("Form_Submitted", {
      form_name: "contact_form",
      company,
      timestamp: new Date().toISOString(),
    });

    showMessage("Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.");
    contactForm.reset();
  });
}
