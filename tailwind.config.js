/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                blue: '#2cbce9',
                red: '#DC4492',
                yellow: '#FDCC49',
                grey: '#EDEDED',
                'deep-blue': '#010026',
                'dark-grey': '#757575',
                'opaque-black': 'rbga(0,0,0,0.35)',
            },
            backgroundImage: () => ({
                'gradient-rainbow':
                    'linear-gradient(90deg, #00b5ee 7.21%, #ff45a4 45%, #ffba00 78%)',

                'gradient-blue':
                    'linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)',
            }),
            fontFamily: {
                'Merriweather-Sans': ['Merriweather Sans', 'sans-serif'],
                merriweather: ['Merriweather', 'serif'],
            },
            content: {
                brush: "url('./assets/brush.svg')",
                person1: "url('./assets/person-1.svg')",
                person2: "url('./assets/person-2.svg')",
                person3: "url('./assets/person-3.svg')",
            },
            screens: {
                xs: '480px',
                ss: '576px',
                sm: '768px',
                md: '992px',
                lg: '1200px',
                xl: '1700px',
            },
        },
    },
    plugins: [],
};
