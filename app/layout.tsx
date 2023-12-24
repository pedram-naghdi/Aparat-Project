import type { Metadata } from 'next'
import '@/public/assets/css/globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import Main from '@/components/main/page'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'آپارات | سامانه اشتراک ویدئو',
  description: 'سامانه اشتراک ویدئو',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
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
