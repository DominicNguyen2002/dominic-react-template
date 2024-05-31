/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": '#96d4eb',
        "secondary": 'f3fafd',
        "text": '#000000',
        "header": '#2e8cad'
      },
      fontSize: {
        'heading-1': [
          '4rem',
          {
            lineHeight: '4rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-2': [
          '3rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-3': [
          '2.5rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-4': [
          '2.25rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-5': [
          '2rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-6': [
          '1.5rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-7': [
          '1.25rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-8': [
          '1.125rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-9': [
          '0.875rem',
          {
            lineHeight: '0.875rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-10': [
          '0.75rem',
          {
            lineHeight: '0.75rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'heading-11': [
          '0.625rem',
          {
            lineHeight: '0.625rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'body-1': [
          '1.125rem',
          {
            lineHeight: '2.1875rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'body-2': [
          '1rem',
          {
            lineHeight: '2.1875rem',
            letterSpacing: '-0.03125rem'
          }
        ],
        'body-3': [
          '0.875rem',
          {
            lineHeight: '2.1875rem',
            letterSpacing: '-0.03125rem'
          }
        ]
      },
      fontFamily: {
        heading: ['JosefinSans'],
        body: ['Montserrat']
      }
    }
  },
  plugins: []
};
