import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
