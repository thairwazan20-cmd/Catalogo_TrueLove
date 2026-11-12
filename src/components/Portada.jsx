import Pagina from './Pagina'
import Logo from './Logo'
import { marca } from '../data/catalogo'

// Corazones decorativos que flotan en el fondo de la portada: [posición %, tamaño mm, retraso s, duración s]
const CORAZONES = [
  [8, 6, 0, 11], [18, 4, 3.5, 13], [30, 8, 1.5, 15], [44, 5, 6, 12], [57, 7, 2.5, 14],
  [70, 4, 5, 11], [82, 9, 0.8, 16], [92, 5, 4, 13],
]

export default function Portada() {
  return (
    <Pagina className="portada" pie={false}>
      <div className="portada__corazones" aria-hidden="true">
        {CORAZONES.map(([x, t, d, s]) => (
          <svg
            key={x}
            viewBox="0 0 24 24"
            style={{ left: `${x}%`, width: `${t}mm`, animationDelay: `${d}s`, animationDuration: `${s}s` }}
          >
            <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21Z" />
          </svg>
        ))}
      </div>

      <div className="portada__contenido">
        <p className="eyebrow">{marca.edicion}</p>
        <Logo className="portada__logo" />
        <span className="portada__linea" />
        <h1 className="portada__lema">{marca.lema}</h1>
      </div>
      <p className="portada__pie">Photobooks · Cuadros · Álbumes · Boxes · Scrapbooks</p>
    </Pagina>
  )
}
