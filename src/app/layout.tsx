import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Souza Barbearia',
  description: 'Souza Barbearia - Invista mais em você!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
