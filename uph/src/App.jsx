import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='overflow-x-hidden min-h-screen flex flex-col'>
        <div className='grow'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
