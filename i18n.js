import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

// Translation resources
const resources = {
  en: {
    translation: {
      search: "Search...",
      cattledex: "CattleDex",
      origin: "Origin",
      tapForDetails: "Tap to flip for details",
      weight: "Weight",
      height: "Height",
      use: "Use",
    },
  },
  hi: {
    translation: {
      search: "खोजें...",
      cattledex: "गाय सूची",
      origin: "उत्पत्ति",
      tapForDetails: "विवरण के लिए टैप करें",
      weight: "वज़न",
      height: "ऊंचाई",
      use: "उपयोग",
    },
  },
  bn: {
    translation: {
      search: "খুঁজুন...",
      cattledex: "গরু সূচক",
      origin: "উৎপত্তি",
      tapForDetails: "বিস্তারিত দেখতে ট্যাপ করুন",
      weight: "ওজন",
      height: "উচ্চতা",
      use: "ব্যবহার",
    },
  },
  ta: {
    translation: {
      search: "தேடுக...",
      cattledex: "மாடு பட்டியல்",
      origin: "தோற்றம்",
      tapForDetails: "விவரங்களுக்கு தட்டவும்",
      weight: "எடை",
      height: "உயரம்",
      use: "பயன்பாடு",
    },
  },
};

// Device locale detection — always fallback safely
const getDeviceLang = () => {
  if (
    Localization.locale &&
    typeof Localization.locale === "string" &&
    Localization.locale.includes("-")
  ) {
    return Localization.locale.split("-")[0];
  }
  if (
    Localization.locale &&
    typeof Localization.locale === "string" &&
    Localization.locale.length === 2
  ) {
    return Localization.locale;
  }
  return "en";
};

// i18n initialization with defensive logic
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLang(),
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
