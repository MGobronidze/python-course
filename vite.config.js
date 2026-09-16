import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages-ზე დასაჰოსტად შეცვალე 'base' შენი რეპოზიტორის სახელზე.
// მაგ: თუ რეპო არის https://github.com/username/python-course
// მაშინ base უნდა იყოს '/python-course/'
export default defineConfig({
  plugins: [react()],
  base: '/python-course/',
})
