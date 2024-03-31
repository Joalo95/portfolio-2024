import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          SEO_TITLE: "joalodev - Web Developer and Data Analyst",
          SEO_DESCRIPTION: "Full stack web developer. Frontend developer with React, Astro, Next. Backend developer with Node, Java, Python",
          HEADER_1: "ABOUT",
          HEADER_2: "PROYECTS",
          HEADER_BUTTON: "ESPAÑOL",
          INTRO_TITLE: "Hello everyone",
          INTRO_TITLE_AFTER_BR: "I am a web developer and student",
          INTRO_DESCRIPTION_1: "Versatile web designer with experience in graphic and web design. My dedication to continually learning about new web design trends and concepts has made me a professional capable of facing any challenge.",
          INTRO_DESCRIPTION_2: "I also have 10 years of experience in sales, so I can help clients solve business problems with technological solutions.",
          INTRO_DESCRIPTION_3: "In the field of web development I like to create relevant and original products that improve brand recognition, maintaining a creative mindset that helps companies stay updated in a constantly evolving market.",
          BENTO_TITLE_1: "Proyect 1",
          BENTO_CONTENT_1: "",
          BENTO_TITLE_2: "Proyect 2",
          BENTO_CONTENT_2: "",
          BENTO_TITLE_3: "Proyect 3",
          BENTO_CONTENT_3: "",
          BENTO_TITLE_4: "Proyect 4",
          BENTO_CONTENT_4: "",
          HERO_TITLE_1: "Hello World 👋,",
          HERO_TITLE_2: "Freelancer, ",
          HERO_SUBTITLE_1: "Web Developer",
          HERO_SUBTITLE_2: "Data Analyst",
          BUTTOM_HERO_TITLE: "Download Resume",
          VIDEO_HERO_ALT: "Intro Video",
          VIDEO_ALT: "Presentation Video",
          VIDEO_TITLE: "Watch my video pitch",
          MARQUEE_TITLE: "Technology stack",
          MARQUEE_SUBTITLE: "As a developer, my preference for frontend is complemented by my analytical skills, allowing me to address business needs in both backend development and data monitoring.",
          FOOTER: "© 2024 All rights reserved. - Developed by @joalodev"
        }
      },
      es: {
        translation: {
          SEO_TITLE: "joalodev - Web Developer and Data Analyst",
          SEO_DESCRIPTION: "Desarrollador web full stack. Desarrollador frontend con React, Astro, Next. Desarrollador backend con Node, Java, Python",
          HEADER_1: "INFO",
          HEADER_2: "PROYECTOS",
          HEADER_BUTTON: "ENGLISH",
          INTRO_TITLE: "Sobre mí",
          INTRO_TITLE_AFTER_BR: "Soy desarrollador junior y estudiante",
          INTRO_DESCRIPTION_1: "Diseñador web versátil con experiencia en diseño gráfico y web. Mi dedicación por aprender continuamente sobre nuevas tendencias y conceptos de diseño web me ha convertido en un profesional capaz de afrontar cualquier desafío.",
          INTRO_DESCRIPTION_2: "También cuento con 10 años de experiencia en el área de ventas, por lo que puedo ayudar a los clientes a resolver problemas comerciales con soluciones tecnológicas.",
          INTRO_DESCRIPTION_3: "En el campo del desarrollo web me gusta crear productos relevantes y originales que mejoren el reconocimiento de la marca, manteniendo una mentalidad creativa que ayude a las empresas a mantenerse actualizadas en un mercado en constante evolución.",
          BENTO_TITLE_1: "Proyecto 1",
          BENTO_CONTENT_1: "",
          BENTO_TITLE_2: "Proyecto 2",
          BENTO_CONTENT_2: "",
          BENTO_TITLE_3: "Proyecto 3",
          BENTO_CONTENT_3: "",
          BENTO_TITLE_4: "Proyecto 4",
          BENTO_CONTENT_4: "",
          HERO_TITLE_1: "Hola Mundo 👋,",
          HERO_TITLE_2: "Freelancer, ",
          HERO_SUBTITLE_1: "Desarrollador Web",
          HERO_SUBTITLE_2: "Analista de Datos",
          BUTTOM_HERO_TITLE: "Descargar Curriculum",
          VIDEO_HERO_ALT: "Vídeo de Introducción",
          VIDEO_ALT: "Vídeo de Presentación",
          VIDEO_TITLE: "Ir al vídeo de presentación",
          MARQUEE_TITLE: "Stack de tecnologías",
          MARQUEE_SUBTITLE: "Como desarrollador, mi preferencia por el frontend se complementa con mis habilidades analíticas, permitiéndome abordar necesidades de negocio tanto en el desarrollo backend como en la monitorización de datos.",
          FOOTER: "© 2024 Todos los derechos reservados. - Desarrollado por @joalodev"
        }
      }
    }
  });

export default i18n;