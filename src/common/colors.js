import hexToRgba from "hex-to-rgba";
export const colors = {
    hex: {
        base:"#646e78",
        gray:"#8d98a7",
        light:"#dcccbb",
        alert:"#f46036",
        dark:"#121113"
    },
    rgba: {
        base: (alpha) => hexToRgba(colors.hex.base, alpha),
        gray: (alpha) => hexToRgba(colors.hex.gray, alpha),
        light: (alpha) => hexToRgba(colors.hex.light, alpha),
        alert: (alpha) => hexToRgba(colors.hex.alert, alpha),
        dark: (alpha) => hexToRgba(colors.hex.dark, alpha)
    }
}