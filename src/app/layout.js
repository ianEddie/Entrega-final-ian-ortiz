import Header from '@/components/header/Header'
import './global.css'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'Marvel comics',
  description: 'Marvel comics e-commerce'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CartProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  )
}
