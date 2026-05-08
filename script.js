const startButton = document.getElementById("startButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");
const emailVolume = document.getElementById("emailVolume");
const serviceInterest = document.getElementById("serviceInterest");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutModalDescription = document.getElementById("checkoutModalDescription");
const checkoutStartButton = document.getElementById("checkoutStartButton");
const checkoutCloseButton = document.getElementById("checkoutCloseButton");

const THEME_KEY = "emailgrowth-theme";
let selectedPackage = null;
let deepScrollTracked = false;

const KlaviyoManager = {
  getQueue() {
    window._learnq = window._learnq || [];
    return window._learnq;
  },
  isReady() {
    return Boolean(window.klaviyo);
  },
  track(eventName, payload = {}) {
    if (
      this.isReady() &&
      typeof window.klaviyo.track === "function"
    ) {
      window.klaviyo.track(eventName, payload);
      return;
    }
    this.getQueue().push(["track", eventName, payload]);
  },
  identify(profile = {}) {
    if (
      this.isReady() &&
      typeof window.klaviyo.identify === "function"
    ) {
      window.klaviyo.identify(profile);
      return;
    }
    this.getQueue().push(["identify", profile]);
  },
};

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

function showMessage(message, type = "success") {
  formMessage.textContent = message;
  formMessage.classList.remove("text-red-400", "text-emerald-500", "text-slate-500");
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

function getSelectedServices() {
  if (!serviceInterest) {
    return [];
  }
  return Array.from(serviceInterest.selectedOptions).map((option) => option.value);
}

function openCheckoutModal(packageData) {
  if (!checkoutModal || !checkoutModalDescription) {
    return;
  }
  selectedPackage = packageData;
  checkoutModalDescription.textContent = `"${packageData.productName}" paketi teklif adımına eklendi. Teklif sürecini şimdi tamamlayabilirsiniz.`;
  checkoutModal.classList.remove("hidden");
  checkoutModal.classList.add("flex");
}

function closeCheckoutModal() {
  if (!checkoutModal) {
    return;
  }
  checkoutModal.classList.add("hidden");
  checkoutModal.classList.remove("flex");
}


function setupBehaviorTracking() {
  window.addEventListener("scroll", () => {
    if (deepScrollTracked) {
      return;
    }
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;
    if (scrollRatio >= 0.75) {
      deepScrollTracked = true;
      KlaviyoManager.track("Deep Scroll", {
        threshold: "75%",
        timestamp: new Date().toISOString(),
      });
    }
  });

  window.setTimeout(() => {
    KlaviyoManager.track("High Engagement", {
      time_on_page_seconds: 30,
      timestamp: new Date().toISOString(),
    });
  }, 30000);
}

function setupPackageTracking() {
  const detailButtons = document.querySelectorAll('[data-action="view-product"]');
  const addButtons = document.querySelectorAll('[data-action="add-to-quote"]');

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      KlaviyoManager.track("Viewed Product", {
        product_name: button.dataset.productName,
        product_tier: button.dataset.productTier,
        source: "package_section",
        timestamp: new Date().toISOString(),
      });
    });
  });

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const packageData = {
        productName: button.dataset.productName,
        productTier: button.dataset.productTier,
      };
      KlaviyoManager.track("Added to Cart", {
        product_name: packageData.productName,
        product_tier: packageData.productTier,
        source: "package_section",
        timestamp: new Date().toISOString(),
      });
      openCheckoutModal(packageData);
    });
  });
}

initializeTheme();
setupRevealAnimations();
setupBehaviorTracking();
setupPackageTracking();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const nextMode = isDarkMode ? "light" : "dark";
    setTheme(nextMode);
    localStorage.setItem(THEME_KEY, nextMode);
  });
}

if (checkoutCloseButton) {
  checkoutCloseButton.addEventListener("click", () => {
    closeCheckoutModal();
  });
}

if (checkoutModal) {
  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      closeCheckoutModal();
    }
  });
}

if (checkoutStartButton) {
  checkoutStartButton.addEventListener("click", () => {
    KlaviyoManager.track("Started Checkout", {
      product_name: selectedPackage ? selectedPackage.productName : "unknown",
      product_tier: selectedPackage ? selectedPackage.productTier : "unknown",
      timestamp: new Date().toISOString(),
    });
    closeCheckoutModal();
  });
}

if (startButton) {
  startButton.addEventListener("click", () => {
    KlaviyoManager.track("Click_Start_Button", {
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
    const volume = String(formData.get("emailVolume") || "").trim();
    const services = getSelectedServices();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!firstName || !lastName || !company || !volume || services.length === 0 || !isEmailValid) {
      showMessage("Lütfen tüm alanları doğru biçimde doldurun ve en az bir hizmet seçin.", "error");
      return;
    }

    const profile = {
      $email: email,
      $first_name: firstName,
      $last_name: lastName,
      $organization: company,
      monthly_email_volume: volume,
      interested_services: services,
    };

    KlaviyoManager.identify(profile);
    KlaviyoManager.track("Form_Submitted", {
      form_name: "contact_form",
      company,
      monthly_email_volume: volume,
      interested_services: services,
      timestamp: new Date().toISOString(),
    });

    showMessage("Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.");
    contactForm.reset();
    if (emailVolume) {
      emailVolume.selectedIndex = 0;
    }
  });
}
