import logo from '../assets/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className='banner'>
            <img src={logo} alt='logo KASA' className='lmj-logo' />
            <ul  className='lienMenu'>
                <li className='lmj-title'><Link to="/">Accueil</Link></li>
                <li className='lmj-title'><Link to="/a-propos">A propos</Link></li>
            </ul>
        </div>
    )
}

