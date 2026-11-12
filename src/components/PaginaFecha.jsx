import Pagina from './Pagina'
import ProductoCard from './ProductoCard'
import { linkWhatsapp, dividirDisenos } from '../data/catalogo'

// Si la última página de diseños no está llena, se completa con una tarjeta de pedido a medida:
// ocupa el hueco de la grilla (1 o 3 diseños) o una franja ancha debajo (2 diseños).

// Una fecha especial: página de apertura (fotos tipo polaroid) + páginas con sus diseños.
export default function PaginaFecha({ fecha, orden, numero }) {
  const num = String(orden).padStart(2, '0')
  const paginas = dividirDisenos(fecha.productos)
  const mensaje = `Hola, quiero un cuadro personalizado para el ${fecha.nombre} con un diseño a mi medida.`

  return (
    <>
      <Pagina id={fecha.id} numero={numero} className="fecha">
        <header className="fecha__cabecera">
          <p className="eyebrow">Fechas especiales · {num}</p>
          <h2 className="fecha__titulo">{fecha.nombre}</h2>
          <p className="fecha__cuando">{fecha.cuando}</p>
          <p className="categoria__frase">{fecha.titulo}</p>
          <p className="texto-intro">{fecha.intro}</p>
        </header>

        <div className="fecha__polaroids">
          {fecha.fotos.map((src, i) => (
            <figure key={src} className={`polaroid polaroid--${i + 1}`}>
              <img src={src} alt={`${fecha.nombre}, diseño ${i + 1}`} />
            </figure>
          ))}
        </div>

        <p className="fecha__nota">
          {fecha.productos.length} diseños · {fecha.nota}
        </p>
      </Pagina>

      {paginas.map((productos, i) => {
        const ultima = i === paginas.length - 1
        return (
          <Pagina key={i} numero={numero + 1 + i} className="categoria categoria--cont">
            <header className="categoria__cabecera-cont">
              <p className="eyebrow">
                {num} · {fecha.nombre}
                {paginas.length > 1 && ` · ${i + 1} de ${paginas.length}`}
              </p>
            </header>
            <div className="productos productos--dos">
              {productos.map((p) => (
                <ProductoCard key={p.id} producto={p} />
              ))}
              {ultima && productos.length < 4 && (
              <div className={`fecha__a-medida ${productos.length % 2 === 0 ? 'fecha__a-medida--ancho' : ''}`}>
                <p className="eyebrow">Diseño a tu medida</p>
                <h3>¿Tienes otra idea en mente?</h3>
                <p>Cuéntanos tu frase, tus colores y tus fotos favoritas: creamos un cuadro único para esa persona especial.</p>
                <a className="boton" href={linkWhatsapp(mensaje)} target="_blank" rel="noreferrer">
                  Diseñemos juntos por WhatsApp
                </a>
              </div>
              )}
            </div>
          </Pagina>
        )
      })}
    </>
  )
}
