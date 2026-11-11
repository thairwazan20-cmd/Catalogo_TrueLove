import Pagina from './Pagina'
import { suscripcion, linkWhatsapp } from '../data/catalogo'
import isotipo from '../assets/images/isotipo.jpeg'

export default function Suscripcion({ numero }) {
  return (
    <Pagina id="suscripcion" numero={numero} className="suscripcion">
      <div className="suscripcion__caja">
        <img className="suscripcion__isotipo" src={isotipo} alt="" />
        <p className="eyebrow">{suscripcion.eyebrow}</p>
        <h2 className="titulo-grande">{suscripcion.titulo}</h2>
        <p className="suscripcion__precio">
          {suscripcion.precio}
          <span> / mes</span>
        </p>
        <p className="suscripcion__producto">
          Recibe tu <strong>{suscripcion.producto}</strong>
          <br />
          {suscripcion.detalle}
        </p>
        <p className="texto-intro">{suscripcion.texto}</p>
        <a className="boton" href={linkWhatsapp(suscripcion.mensaje)} target="_blank" rel="noreferrer">
          Conoce más por WhatsApp
        </a>
      </div>
    </Pagina>
  )
}
