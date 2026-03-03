import { Poppins } from 'next/font/google'
import '../assets/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'
import { dbConnect } from '@/service/mongo'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Sapientia',
  description: 'Online learning hub with Next JS, Tailwind, Shadcn and Mongo DB.',
}

export default async function RootLayout({ children }) {
  const conn = await dbConnect()
  
  console.log(conn)

  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
        <Toaster
          richColors
          position='top'
        />
      </body>
    </html>
  )
}
