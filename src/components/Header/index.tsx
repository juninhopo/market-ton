import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import './styles.css'

interface HeaderProps {
  isOnCart?: boolean;
} 

function Header ({ isOnCart = false }: HeaderProps) {
  return (
    <header>
      {
        isOnCart && (
          <Link className="back" to="/">
            <AiOutlineArrowLeft size={30}/>
          </Link>
        )
      }

      <p className="titlePage">Ton Cars</p>

      <Link className="link-cart" to="/cart">
        <ImCart/>
      </Link>

    </header>
  )
}

export default Header
