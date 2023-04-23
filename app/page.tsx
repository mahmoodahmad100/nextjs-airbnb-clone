import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h2>Hello World!</h2>
      <p className="text-sky-400/100">Testing tailwindcss!</p>
    </div>
  )
}
