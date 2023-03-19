import './css/style-header.css'; 
import { Link } from 'react-router-dom';

function Header() {
    return (

        <header>
            <nav>
                <Link to=''>
                    <img src='logo.png'/>
                </Link>
                <ul className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/prereserva'>Pré Reserva</Link>
                    <Link to='/quadra'>Status da Quadra</Link>
                    <Link to='/login'>Login</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 