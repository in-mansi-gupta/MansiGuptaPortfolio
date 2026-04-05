import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mansi Gupta — Backend & Distributed Systems Engineer',
  description:
    'Software Engineer with 4+ years building scalable backend systems, event-driven architectures, and experimentation platforms. Open to relocation.',
  keywords: [
    'Software Engineer',
    'Backend Engineer',
    'Distributed Systems',
    'Java',
    'Node.js',
    'AWS',
    'Booking Holdings',
  ],
  openGraph: {
    title: 'Mansi Gupta — Backend Engineer',
    description:
      'Building scalable systems and event-driven architectures.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
