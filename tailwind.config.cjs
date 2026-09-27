/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#070707',
        charcoal: '#171715',
        roast: {
          900: '#110B07',
          800: '#2C1A11',
          600: '#6E3E22',
          400: '#C69B6E',
        },
        crema: '#D58C3D',
        crema2: '#B07A45',
        bone: '#F1F1EF',
        oat: '#E7E5E3',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'Haettenschweiler', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      fontSize: {
        '10xl': ['9.5rem', '0.9'],
      },
      boxShadow: {
        receipt: '0 30px 60px -20px rgba(0,0,0,0.75)',
        glass: '0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.75)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(14px,-22px,0) rotate(180deg)' },
          '100%': { transform: 'translate3d(0,0,0) rotate(360deg)' },
        },
        liquid: {
          '0%': { transform: 'translate3d(-10%,0,0) scale(1.1)' },
          '50%': { transform: 'translate3d(6%,-4%,0) scale(1.25)' },
          '100%': { transform: 'translate3d(-10%,0,0) scale(1.1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        liquid: 'liquid 22s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};