import logo from '../assets/logo.png'
import '../styles/Header.css'

export function Header() {
    return (
        <div className='banner'>
            <img src={logo} alt='logo KASA' className='lmj-logo' />
            <ul  className='lienMenu'>
                <li className='lmj-title'><link to="/">Accueil</link></li>
                <li className='lmj-title'><link to="/a-propos">A propos</link></li>
            </ul>
        </div>
    )
}

