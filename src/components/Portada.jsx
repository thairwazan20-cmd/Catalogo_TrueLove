import Pagina from './Pagina'
import Logo from './Logo'
import { marca } from '../data/catalogo'

export default function Portada() {
  return (
    <Pagina className="portada" pie={false}>
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
