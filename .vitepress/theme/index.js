// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeActionIcons from './HomeActionIcons.vue'
import PartnerCarousel from './PartnerCarousel.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-actions-after': () => h(HomeActionIcons),
      'home-partners-carousel': () => h(PartnerCarousel)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PartnerCarousel', PartnerCarousel)
  }
}
