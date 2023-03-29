import { defaultTheme, defaultThemeDark } from "../styles/theme/default";

type ThemeType = typeof defaultTheme | defaultThemeDark

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}