import Pagina from './Pagina'
import Logo from './Logo'
import { marca, pasosPedido, linkWhatsapp } from '../data/catalogo'

const MENSAJE = 'Hola, vi el catálogo de True Love Store y quiero hacer un pedido.'

export default function Contacto() {
  return (
    <Pagina id="contacto" className="contacto" pie={false}>
      <div className="contacto__pasos">
        <p className="eyebrow">¿Cómo hago mi pedido?</p>
        <ol>
          {pasosPedido.map((paso, i) => (
            <li key={paso.titulo}>
              <span className="contacto__num">{i + 1}</span>
              <strong>{paso.titulo}</strong>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="contacto__cierre">
        <h2>Hagamos juntos tu próximo regalo inolvidable.</h2>
        <a className="boton boton--blanco" href={linkWhatsapp(MENSAJE)} target="_blank" rel="noreferrer">
          WhatsApp {marca.whatsappTexto}
        </a>

        <ul className="contacto__redes">
          {marca.redes.map((r) => (
            <li key={r.red}>
              <a href={r.url} target="_blank" rel="noreferrer">
                <span>{r.red}</span>
                {r.usuario}
              </a>
            </li>
          ))}
          <li>
            <a href={marca.webUrl} target="_blank" rel="noreferrer">
              <span>Tienda online</span>
              {marca.web}
            </a>
          </li>
        </ul>

        <p className="contacto__ubicacion">
          {marca.ubicacion} · {marca.envios}
        </p>
        <Logo color="blanco" className="contacto__logo" />
        <p className="contacto__nota">Precios en soles, sujetos a confirmación. Imágenes referenciales.</p>
      </div>
    </Pagina>
  )
}
