import Footer  from '../../components/Footer'

const MainLayout = ({ children }) => {
  return (  
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
 
export default MainLayout