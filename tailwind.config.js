/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./portfolio/**/*.{js,ts,jsx,tsx,mdx",
        "./portfolio/components/**/*.{js,ts,jsx,tsx,mdx",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            transparent: 'transparent',
            primary: '#000',
            primaryAlt: '#ddd',
            secondary: '#fff',
            green: 'mediumseagreen',
            blue: 'cornflowerblue',
            red: 'crimson',
            orange: 'orange',
        },
        extend: {},
    },
    plugins: [],
}

