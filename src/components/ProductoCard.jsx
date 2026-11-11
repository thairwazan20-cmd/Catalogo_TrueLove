import { linkWhatsapp } from '../data/catalogo'

const soles = (n) => `S/ ${n}`

export default function ProductoCard({ producto }) {
  const { nombre, detalle, descripcion, precio, variantes, badge, imagen } = producto
  const mensaje = `Hola, me interesa el producto "${nombre} (${detalle})" del catálogo de True Love Store.`

  return (
    <article className="producto">
      <div className="producto__imagen">
        <img src={imagen} alt={nombre} />
        {badge && <span className="producto__badge">{badge}</span>}
      </div>
      <div className="producto__info">
        <h3>{nombre}</h3>
        <p className="producto__detalle">{detalle}</p>
        <p className="producto__descripcion">{descripcion}</p>
        <div className="producto__pie">
          {variantes ? (
            <p className="producto__precio producto__precio--variantes">
              {variantes.map((v) => (
                <span key={v.label}>
                  {v.label} <strong>{soles(v.precio)}</strong>
                </span>
              ))}
            </p>
          ) : (
            <p className="producto__precio">
              <strong>{soles(precio)}</strong>
            </p>
          )}
          <a className="producto__cta" href={linkWhatsapp(mensaje)} target="_blank" rel="noreferrer">
            Pedir
          </a>
        </div>
      </div>
    </article>
  )
}
