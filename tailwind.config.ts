const { fontFamily } = require("tailwindcss/defaultTheme")

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                primary: "rgb(var(--color-primary-rgb))",
                secondary: "rgb(var(--color-secondary-rgb))",
                tertiary: "rgb(var(--color-tertiary-rgb))",
            }
        },
    },
    plugins: [],
};
export default config;
