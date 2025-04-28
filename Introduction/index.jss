// script.js

// 1. Translation dictionaries
const translations = {
  swahili: {
    langButton: "English",
    heroTitle: "Karibu kwenye Pristine Detergents",
    heroSubtitle: "Pristine Power: Suluhisho lako kamili la usafi.",
    ctaText: "Angalia Bidhaa Zetu",
    aboutTitle: "Kuhusu Sisi",
    aboutText:
      "Tunatoa suluhisho za usafi zenye ubora wa juu na rafiki kwa mazingira, salama kwa nyumba yako na sayari.",
    productsTitle: "Bidhaa Zetu",
    product1Name: "Sabuni ya Kufulia",
    product1Desc: "Mnyororo wenye nguvu kwa nguo laini na zenye harufu nzuri.",
    product2Name: "Sabuni ya Vyombo",
    product2Desc: "Inakata mafuta kwa sahani zisizo na doa.",
    product3Name: "Kisafisha Madhumuni Yote",
    product3Desc: "Angaza kila uso na kuua bakteria.",
    testimonialsTitle: "Ushuhuda",
    testimonialText:
      '"Ninapenda jinsi kila kitu kinavyo harufu nzuri na Pristine Power!"',
    testimonialFooter: "- Mteja Aliyefurahi",
    contactTitle: "Wasiliana Nasi",
    contactEmail: "Barua Pepe: info@pristinedetergents.com",
    contactPhone: "Simu: +123 456 7890",
  },
  english: {
    langButton: "Kiswahili",
    heroTitle: "Welcome to Pristine Detergents",
    heroSubtitle: "Pristine Power: Your complete cleaning solution.",
    ctaText: "View Our Products",
    aboutTitle: "About Us",
    aboutText:
      "We provide high-quality, eco-friendly cleaning solutions that are safe for your home and the planet.",
    productsTitle: "Our Products",
    product1Name: "Laundry Detergent",
    product1Desc: "Powerful formula for bright, fresh clothes.",
    product2Name: "Dish Soap",
    product2Desc: "Grease-cutting action for spotless dishes.",
    product3Name: "All-Purpose Cleaner",
    product3Desc: "Multi-surface shine & disinfect.",
    testimonialsTitle: "Testimonials",
    testimonialText:
      '"I love how fresh everything smells with Pristine Power!"',
    testimonialFooter: "- Happy Customer",
    contactTitle: "Contact Us",
    contactEmail: "Email: info@pristinedetergents.com",
    contactPhone: "Phone: +123 456 7890",
  },
};

// 2. Current language state
let currentLanguage = "english";

// 3. Elements to translate (query once)
const elements = {
  langButton: document.querySelector(".language-button"),
  heroTitle: document.querySelector(".hero-section h1"),
  heroSubtitle: document.querySelector(".hero-section p"),
  ctaButton: document.querySelector(".cta-button"),
  aboutTitle: document.querySelector("#about h2"),
  aboutText: document.querySelector("#about p"),
  productsTitle: document.querySelector("#product h2"),
  productItems: document.querySelectorAll(".product-item"),
  testimonialsTitle: document.querySelector("#testimonials h2"),
  testimonialText: document.querySelector("#testimonials blockquote p"),
  testimonialFooter: document.querySelector("#testimonials blockquote footer"),
  contactTitle: document.querySelector("#contact h2"),
  contactParas: document.querySelectorAll("#contact p"),
};

// 4. Apply translations to the page
function applyTranslations(lang) {
  const t = translations[lang];

  elements.langButton.textContent = t.langButton;
  elements.heroTitle.textContent = t.heroTitle;
  elements.heroSubtitle.textContent = t.heroSubtitle;
  elements.ctaButton.textContent = t.ctaText;
  elements.aboutTitle.textContent = t.aboutTitle;
  elements.aboutText.textContent = t.aboutText;
  elements.productsTitle.textContent = t.productsTitle;

  // Each product-item: [0] Laundry, [1] Dish, [2] All-Purpose
  const prodData = [
    { name: t.product1Name, desc: t.product1Desc },
    { name: t.product2Name, desc: t.product2Desc },
    { name: t.product3Name, desc: t.product3Desc },
  ];
  elements.productItems.forEach((item, idx) => {
    item.querySelector("h3").textContent = prodData[idx].name;
    item.querySelector("p").textContent = prodData[idx].desc;
  });

  elements.testimonialsTitle.textContent = t.testimonialsTitle;
  elements.testimonialText.textContent = t.testimonialText;
  elements.testimonialFooter.textContent = t.testimonialFooter;
  elements.contactTitle.textContent = t.contactTitle;
  elements.contactParas[0].textContent = t.contactEmail;
  elements.contactParas[1].textContent = t.contactPhone;
}

// 5. Toggle language handler
function toggleLanguage() {
  currentLanguage = currentLanguage === "english" ? "swahili" : "english";
  applyTranslations(currentLanguage);
}

// 6. Smooth scroll for CTA
elements.ctaButton.addEventListener("click", () => {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
});

// 7. Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLanguage);
});
