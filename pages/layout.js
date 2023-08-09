import LayoutRoot from "./layoutRoot"
export const metadata = {
  title: 'SafeHealth',
  description: 'Digitalizing your healthcare.',
}

export default function RootLayout({ children }) {
  return (
    <LayoutRoot>
      {children}
    </LayoutRoot>
  )
}
