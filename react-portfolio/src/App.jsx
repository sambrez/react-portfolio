import { Outlet } from 'react-router-dom';
import { Header, Footer, Navigation } from './components';

import './App.css'

function App() {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
