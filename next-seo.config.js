import {getConfig} from 'utilities/config'

const {title} =getConfig()

export default {
    titleTemplate:`%s - ${title}`,
    defaultTitle: title,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://k1eu.dev/',
      site_name: 'k1eu.dev',
    },
    twitter: {
      handle: '@k1eu',
      site: '@k1eu',
      cardType: 'summary_large_image',
    },
  };