import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      inProgress: string
      active: string
      completed: string
      redDark: string
    }
  }
}
