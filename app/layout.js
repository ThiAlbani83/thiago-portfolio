import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'


export const metadata = {
  title: `Thiago's Portfolio`,
  description: 'Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-between h-screen'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
