/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./static/html/**/*.html', './static/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                brand: {
                    deep: '#831843',
                    primary: '#EC4899',
                    soft: '#FBCFE8',
                    accent: '#8B5CF6',
                    bg: '#FDF2F8',
                    glass: 'rgba(255, 255, 255, 0.7)'
                },
                primary: '#EC4899',
                secondary: '#8B5CF6',
                accent: '#10b981',
                textDark: '#831843'
            },
            fontFamily: {
                heading: ['Cormorant', 'serif'],
                sans: ['Montserrat', 'sans-serif']
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(236, 72, 153, 0.08)',
                'pink-lg': '0 10px 15px -3px rgba(236, 72, 153, 0.2), 0 4px 6px -4px rgba(236, 72, 153, 0.1)'
            }
        }
    }
}
