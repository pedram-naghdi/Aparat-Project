import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import Menu from '@/components/sidebar/menu'

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
        <main className="mt-[65px] flex">
          <aside className="bg-gray-100 p-4 shadow-sm">
            <Menu />
          </aside>
          <div className="wrapper p-4">
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
