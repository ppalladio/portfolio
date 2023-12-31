/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
                phlox: {
                    DEFAULT: '#B459FF',
                    100: '#260044',
                    200: '#4b0089',
                    300: '#7100cd',
                    400: '#9512ff',
                    500: '#b459ff',
                    600: '#c278ff',
                    700: '#d29aff',
                    800: '#e1bcff',
                    900: '#f0ddff',
                },
                electric_violet: {
                    DEFAULT: '#951CFD',
                    100: '#1e0138',
                    200: '#3c016f',
                    300: '#5a02a7',
                    400: '#7802de',
                    500: '#951cfd',
                    600: '#a949fd',
                    700: '#bf77fe',
                    800: '#d4a4fe',
                    900: '#ead2ff',
                },
                pale_purple: {
                    DEFAULT: '#F8EBFD',
                    100: '#420959',
                    200: '#8512b2',
                    300: '#b93aec',
                    400: '#d993f4',
                    500: '#f8ebfd',
                    600: '#faf0fe',
                    700: '#fbf4fe',
                    800: '#fcf8fe',
                    900: '#fefbff',
                },
                thistle: {
                    DEFAULT: '#E6D1FA',
                    100: '#2f0953',
                    200: '#5e12a5',
                    300: '#8d2ce8',
                    400: '#ba7ef1',
                    500: '#e6d1fa',
                    600: '#ebdafb',
                    700: '#f0e3fc',
                    800: '#f5edfd',
                    900: '#faf6fe',
                },
                mauve: {
                    DEFAULT: '#D5A4FD',
                    100: '#2e0252',
                    200: '#5c03a4',
                    300: '#8a05f6',
                    400: '#b053fb',
                    500: '#d5a4fd',
                    600: '#deb7fe',
                    700: '#e6c9fe',
                    800: '#eedbfe',
                    900: '#f7edff',
                },
            },
            backgroundImage: () => ({
                'gradient-btn':
                    'linear-gradient(145deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%)',

                'gradient-divider':
                    'linear-gradient(90deg, hsla(47, 100%, 87%, 1) 0%, hsla(334, 81%, 60%, 1) 50%, hsla(237, 64%, 56%, 1) 100%)',
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
