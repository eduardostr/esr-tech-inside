/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ESR Brand
        esr: {
          primary:   "#667eea",
          secondary: "#764ba2",
          dark:      "#1a1a1a",
          gray:      "#f8f9fa",
        },
      },
      fontFamily: {
        display: ['"Poppins"', "sans-serif"],
        body:    ["Poppins", "sans-serif"],
        sans:    ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "esr-gradient": "linear-gradient(135deg, #667eea, #764ba2)",
      },
      boxShadow: {
        "esr-sm":  "0 4px 18px rgba(102,126,234,.35)",
        "esr-md":  "0 6px 28px rgba(102,126,234,.40)",
        "esr-lg":  "0 10px 36px rgba(102,126,234,.50)",
        "esr-card":"0 16px 48px rgba(102,126,234,.12)",
      },
    },
  },
  plugins: [],
};
