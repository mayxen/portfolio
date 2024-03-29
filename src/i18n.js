import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {resources} from "./editable-stuff/config";


i18n.use(initReactI18next)
    .init({
        resources,
        lng: document.documentElement.lang,
        fallbackLng: 'en'
    });

export default i18n;
