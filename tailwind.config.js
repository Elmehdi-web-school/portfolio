/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#F8F7F2',
        'theme-secondary': '#EFEEE7',
        'theme-card': '#FFFFFF',
        'theme-text': '#171A1C',
        'theme-muted': '#66706A',
        'theme-accent': '#1F6F78',
        'theme-accent-soft': '#61A5A8',
        'theme-warm': '#C77B38',
        'theme-fresh': '#7A9B68',
        'theme-ink': '#25313B',
        'theme-border': '#DFDCD0',
        'theme-hover': '#EAE7DC',
        'theme-dark-bg': '#101312',
        'theme-dark-secondary': '#171B1A',
        'theme-dark-card': '#1D2321',
        'theme-dark-text': '#F6F3EA',
        'theme-dark-muted': '#AAB3AC',
        'theme-dark-accent': '#79C3C4',
        'theme-dark-accent-soft': '#A7C7B8',
        'theme-dark-warm': '#E3A15E',
        'theme-dark-fresh': '#A7C77B',
        'theme-dark-ink': '#D7E4DD',
        'theme-dark-border': '#2C3632',
        'theme-dark-hover': '#26302C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 22px 60px rgba(37, 49, 59, 0.10)',
        'soft-sm': '0 12px 32px rgba(37, 49, 59, 0.08)',
        glow: '0 18px 55px rgba(31, 111, 120, 0.16)',
        'dark-soft': '0 22px 60px rgba(0, 0, 0, 0.26)',
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: []
}
