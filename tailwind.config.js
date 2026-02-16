/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB', // Example blue
                secondary: '#10B981', // Example green
                accent: '#F59E0B', // Example orange
            }
        },
    },
    plugins: [],
}
