import {ImCart} from "react-icons/im"

import './styles.css'

function Header () {
  return (
    <header>
      <p className="titlePage">Ton Cars</p>
      <ImCart className="iconCart"/>
    </header>
  )
}

export default Header
