import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { LOCALES } from '@/lib/optimizely/utils/language'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function generateStaticParams() {
  try {
    return LOCALES.map((locale) => ({ locale }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
