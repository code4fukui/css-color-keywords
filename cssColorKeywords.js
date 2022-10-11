const url = "https://code4fukui.github.io/css-color-keywords-es/colors.json";
export const cssColorKeywords = await (await fetch(url)).json();
