/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                108: '28rem',
                124:'32rem',
                132: '36rem',
            },
            width: {
                108: '28rem',
                124:'32rem',
                132: '36rem',
            },
            backgroundImage:{
                'sliceDiv':"url('../public/fill.png')"
            },
            boxShadow:{
                "custom":"5px 8px 10px 2px rgb(0 0 0 / 0.2)"
            }
        },
    },
    plugins: [],
};
