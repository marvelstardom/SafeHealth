// "use client"
import './globals.css'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  const router = useRouter()
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} key={router.asPath} />
    </SessionProvider>
  )
}   