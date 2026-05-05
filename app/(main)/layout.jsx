import MainNav from '@/components/MainNav'
import Footer  from '../../components/Footer'
import { navLinks } from '@/components/data/uiData'

const MainLayout = ({ children }) => {
  return (  
    <div className='flex min-h-screen flex-col'>
      <header className='z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b'>
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
 
export default MainLayout