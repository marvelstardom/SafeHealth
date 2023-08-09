// import LayoutRoot from "./layoutRoot"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'SafeHealth',
  description: 'Digitalizing your healthcare.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // <LayoutRoot>
    //   {children}
    // </LayoutRoot>
  )
}
