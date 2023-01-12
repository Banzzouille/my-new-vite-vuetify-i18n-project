/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

function getNavigatorLanguages(options = {}) {
    const defaultOptions = {countryCodeOnly: true}
    const opt = {...defaultOptions, ...options}
    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language
    if (!navigatorLocale) {
        return undefined
    }
    const local=opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim();
  console.log(local);
    return local
  }

registerPlugins(app)
import enJson from './locales/en.json'
import frJson from './locales/fr.json'

const i18n = createI18n({
    locale: getNavigatorLanguages() || navigator.language,
    fallbackLocale: 'en',
    allowComposition: true, // you need to specify that!
    messages: {
      en: enJson,
      fr: frJson
    }
  })

app.use(i18n).mount('#app')
