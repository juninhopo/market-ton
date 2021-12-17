import {ImCart} from "react-icons/im"

import './styles.css'

function Header () {
  return (
    <header>
      <p className="titlePage">Ton Cars</p>

      <button className="iconCart">
        <ImCart/>
      </button>

    </header>
  )
}

export default Header
