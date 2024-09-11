import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import translation files
import translationEN from './locales/en/translation.json';
import translationCY from './locales/cy/translation.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    cy: { translation: translationCY },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </I18nextProvider>
  </React.StrictMode>
);
