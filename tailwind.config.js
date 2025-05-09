module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF", 
        dark: "#1E1E2C",   
        light: "#F5F5F7",  
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'parisienne': ['Parisienne', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],

 
};

