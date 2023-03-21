import './css/style-header.css';
import { Link } from 'react-router-dom'; 
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
}


function Header() {
    return (

        <header id="header">
            <Link to='/' id='logo'>
                <img src='logo.png' />
            </Link>
            <nav id="nav">
                <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                    <span id="hamburger"></span>
                </button>
                <ul id="menu" role="menu">
                    <Link to='/prereserva'>Pré Reserva</Link>
                    <Link to='/quadra'>Status da Quadra</Link>
                    <Link to='/login'>Login</Link>
                </ul>
            </nav>
        </header> 
    );
}

export default Header; 