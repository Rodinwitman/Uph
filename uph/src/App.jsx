import { Outlet } from 'react-router-dom';
import {Footer} from "./component/Footer/Footer";
import {Navbar} from "./component/Navbar/Navbar";

function App() {

  return (
    <>
      <div className='overflow-x-hidden min-h-screen flex flex-col'>
        <Navbar />
        <div className='grow'>
          <Outlet />
        </div>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
