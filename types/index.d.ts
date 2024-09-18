interface DefaultConfig {
  theme: {
    customizable: boolean
    color: string
    radius: number
  }
  header: {
    showLoadingIndicator: boolean
    title: string
    showTitle: boolean
    logo: {
      light: string
      dark: string
    }
    showTitleInMobile: boolean
    border: boolean
    darkModeToggle: boolean
    nav: ({
      title: string
      to: string
      target: string
      links: ({
        title: string
        to: string
        target: string
        description: string
      })[]
    })[]
    links: ({
      icon: string
      to: string
      target: string
    })[]
  }
  aside: {
    useLevel: boolean
    collapse: boolean
  }
  main: {
    breadCrumb: boolean
    showTitle: boolean
    codeCopyToast: boolean
    codeCopyToastText: string
    fieldRequiredText: string
    padded: boolean
  }
  footer: {
    credits: string
    links: ({
      icon: string
      title: string
      to: string
      target: string
    })[]
  }
}
