const config = {
  translations: {
    en: {
      'app.components.LeftMenu.header': 'Inverfennix',
      'app.components.LeftMenu.navbrand.title': 'Inverfennix Dashboard',
    },

    fr: {

      'app.components.LeftMenu.header': 'Inverfennix',
      'app.components.LeftMenu.navbrand.title': 'Inverfennix Dashboard',
    }


  },
  locales: [
     'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
     'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
     'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
  
};
