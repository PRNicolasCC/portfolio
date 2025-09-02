module.exports = {
    theme: {
      extend: {
        keyframes: {
            'border-flow': {
              '0%': { borderImage: 'linear-gradient(90deg, red, blue) 1' },
              '100%': { borderImage: 'linear-gradient(90deg, blue, red) 1' },
            },
          },
          animation: {
            'border-flow': 'border-flow 3s linear infinite',
          }
          
      },
    },
  };
  