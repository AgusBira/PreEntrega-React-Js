import ButtonComponent from "./ButtonComponent.jsx"
import LogoComponent from "./LogoComponent.jsx"
import CartWidget from "./CartWidget.jsx"
import "./NavBar.css"
export default function tituloComponente() {
  return (
    <>
      <nav>
        <LogoComponent/>
        <ButtonComponent texto = "Accion"/>
        <ButtonComponent texto = "Aventura"/>
        <ButtonComponent texto = "Simulacion"/>
        <CartWidget/>
      </nav>
        
    </>
  )
}

