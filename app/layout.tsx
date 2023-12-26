import type { Metadata } from 'next'
import '@/public/assets/css/globals.css'
import Header from '@/app/layout/components/header/header'
import Footer from '@/app/layout/components/footer'
import Main from '@/app/layout/components/main'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'آپارات | سامانه اشتراک ویدئو',
  description: 'سامانه اشتراک ویدئو',
}

export default function RootLayout({children,}: PropsWithChildren) {
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
