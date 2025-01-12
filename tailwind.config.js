/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Escanea todos los archivos JSX y TSX en tu proyecto
    '/index.html', // Si tienes un archivo HTML en la carpeta public
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
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'zoom-in': 'zoomIn 0.5s ease-in-out forwards',
        'zoom-out': 'zoomOut 0.5s ease-in-out forwards',
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
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
      },
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'], // Para encabezados
        body: ['Open Sans', 'sans-serif'], // Para texto principal
        
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
        'hard': '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra fuerte
      },
      colors: {
        primary: '#008752', // Verde Andalucía
        secondary: '#006341', // Verde oscuro
        accent: '#c7e8ca', // Verde claro para hover
        background: '#f5f5f5', // Fondo claro para la página
        textPrimary: '#333333', // Texto principal
        textSecondary: '#555555', // Texto secundario
        danger: '#e63946', // Rojo para errores
        success: '#06d6a0', // Verde para éxitos
        warning: '#ffd166', // Amarillo para advertencias
      },
      fontSize: {
        xxs: '0.65rem', // Tamaño de fuente extra pequeño
        tiny: '0.875rem', // Entre xs y sm
        massive: '6rem', // Tamaño extra
      
      },
      fontWeight: {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
},
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
        'hard': '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra fuerte
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra interna
        'glow': '0 0 8px rgba(0, 135, 82, 0.5)', // Efecto de "brillo"
      },

      spacing: {
      '96': '24rem',
      '112': '28rem',
      '160': '40rem', // Espaciados más grandes
      '192': '48rem',
      }
    },
  },

screens: {
  xs: '480px', // Pantallas muy pequeñas
  '2xl': '1536px', // Pantallas más grandes
},
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/line-clamp'), // Controlar líneas visibles
  require('@tailwindcss/container-queries'), // Consultas por contenedor
],
};
