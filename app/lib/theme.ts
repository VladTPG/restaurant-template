import { siteConfig } from "@/config/site";

function hexToRgb(hex: string) {
  // Remove the hash if it exists
  hex = hex.replace("#", "");

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as a string
  return `${r}, ${g}, ${b}`;
}

export function initializeThemeColors() {
  const style = document.documentElement.style;
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  const colors = siteConfig.theme.colors[theme as "light" | "dark"];

  // Set each color from config
  Object.entries(colors).forEach(([key, value]) => {
    // Set both the hex and RGB versions of each color
    style.setProperty(`--${key}`, value);
    style.setProperty(`--${key}-rgb`, hexToRgb(value));
  });
}
