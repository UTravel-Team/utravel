/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Escanea todos los archivos JSX y TSX en tu proyecto
    './index.html', // Archivo HTML en la raíz del proyecto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008752', // Verde Andalucía
        secondary: '#006341', // Verde oscuro
        accent: '#c7e8ca', // Verde claro para hover
      },
      spacing: {
        '128': '32rem', // Espaciado personalizado
        '144': '36rem', // Más opciones de espaciado
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-in': 'slideIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Fuente predeterminada
        serif: ['Georgia', 'serif'], // Fuente alternativa
        custom: ['Roboto', 'sans-serif'], // Fuente personalizada
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
        'hard': '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra fuerte
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para formularios estilizados
    require('@tailwindcss/typography'), // Para estilos de texto enriquecidos
    require('@tailwindcss/aspect-ratio'), // Para manejar ratios de imágenes o videos
  ],
};
