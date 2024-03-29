import Navigation from './Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
    return (
       <div id="top" className='container-fluid'>
       <header className='row navbar-header'>
            <img id="laptop" src="../../img/laptop.svg" />
            <h1 id='title-one' className="col">SAM BRESLIN</h1>
            <Navigation />
        </header>
        </div> 
    )
}

export default Header;