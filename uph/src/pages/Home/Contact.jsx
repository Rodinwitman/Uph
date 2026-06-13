import { Footer } from "../../component/Footer/Footer";
import { Navbar } from "../../component/Navbar/Navbar";

export const Contact = () => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen flex flex-col">
        <Navbar/>
        
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </div>
    </>
  )
}
