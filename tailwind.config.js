/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                blue: '#6277DE',
                red: '#DE6378',
                green: '#78DE63',
                grey: '#EDEDED',
                'deep-blue': '#010026',
                'dark-grey': '#757575',
                'opaque-black': 'rbga(0,0,0,0.35)',
            },
            backgroundImage: () => ({
                'gradient-rainbow':
                    'linear-gradient(90deg, #00EE37 7.21%, #3800F0 45%, #F03800 78%)',

                'gradient-blue':
                    'linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)',
            }),
            fontFamily: {
                merriweathersans: ['Merriweather Sans'],
                merriweather: ['Merriweather'],
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
