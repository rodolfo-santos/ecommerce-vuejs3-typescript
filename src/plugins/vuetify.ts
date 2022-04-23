import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#25af6c',
        secondary: '#222222'
      },
      dark: {
        primary: '#25af6c',
        secondary: '#272727'
      }
    }
  }
});
