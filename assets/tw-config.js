/* Shared Tailwind CDN config — load right after the Tailwind CDN script */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy:  { 950:'#060F1F', 900:'#0B1F3A', 800:'#12294B', 700:'#1B3A66', 600:'#28518C' },
        brass: { 300:'#E3C56A', 400:'#D4AF37', 500:'#C9A227', 600:'#A98A1E' },
        slateink:'#33415C'
      },
      fontFamily: {
        serif: ['"Noto Serif TC"','Georgia','serif'],
        sans:  ['Inter','"Noto Sans TC"','system-ui','sans-serif']
      }
    }
  }
};
