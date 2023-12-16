import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import Main from '@/components/main/page'

export const metadata: Metadata = {
  title: 'آپارات | سامانه اشتراک ویدئو',
  description: 'سامانه اشتراک ویدئو',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body>
        <Header />
        <Main children={children} />
        <Footer />
      </body>
    </html>
  )
}
