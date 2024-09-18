import { defu } from 'defu'

const defaultConfig: DefaultConfig = {
  theme: {
    customizable: true,
    color: 'zinc',
    radius: 0.5,
  },
  header: {
    showLoadingIndicator: true,
    title: 'shadcn-docs',
    showTitle: true,
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    nav: [],
    links: [],
  },
  aside: {
    useLevel: true,
    collapse: false,
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: true,
    codeCopyToastText: 'Copied to clipboard!',
    fieldRequiredText: 'required',
    padded: true,
  },
  footer: {
    credits: '',
    links: [],
  },
}

export function useConfig() {
  const appConfig = computed(() => useAppConfig().nuxtPlayground || {})

  return computed(() => {
    const processedConfig = defu(appConfig.value, defaultConfig)

    return {
      ...processedConfig,
    }
  })
}
