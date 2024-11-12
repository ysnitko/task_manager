import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-btn': "url('/assets/images/icon-remove-item.svg')",
      },
      backgroundSize: {
        '60%': '60%',
      },
      borderColor: {
        'border-cart-hover': 'hsl(14, 86%, 42%)',
        'border-remove-item': 'hsl(7, 20%, 60%)',
      },
      colors: {
        'add-btn-bg': '#E9A23B',
        'add-bg': '#F5E8D5',
        'task-in-progress': '#F5D565',
        'task-completed': '#A0ECB1',
        'task-wont-do': '#F7D4D3',
        'task-to-do': '#E3E8EF',
        'done-task': '#3662E3',
        'cancel-delete': '#00000033',
        'done-label': '#32D657',
        'wont-do-label': '#DD524C',
        'in-progress-label': '#E9A23B',
        'border-icon': '#97A3B6',
      },
    },
  },
  plugins: [],
};
export default config;
