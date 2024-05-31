import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      start: 'Start',
      'error-page-not-found': 'OPPS..., PAGE NOT FOUND!',
      'error-back-home': 'Go back home',
      'error-sorry': 'Sorry, we couldn’t find the page you’re looking for.'
    }
  },
  vi: {
    translation: {
      start: 'Bắt đầu',
      'error-page-not-found': 'OPPS..., KHÔNG TÌM THẤY TRANG!',
      'error-back-home': 'Trở về trang chủ',
      'error-sorry': 'Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
