import { useMediaQuery } from 'react-responsive'
export const isMobile = useMediaQuery({
    query: '(min-device-width: 320px)'
})
export const isTablet = useMediaQuery({
    query: '(min-device-width: 481px)'
})
export const isSmallScreen = useMediaQuery({
    query: '(min-device-width: 769px)'
})
export const isLargeScreen = useMediaQuery({
    query: '(min-device-width: 1025px)'
})
export const isXLargeScreen = useMediaQuery({
    query: '(min-device-width: 1201px)'
})