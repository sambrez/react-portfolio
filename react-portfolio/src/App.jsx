import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
