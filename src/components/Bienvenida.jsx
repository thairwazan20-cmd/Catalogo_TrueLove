import { Fragment } from 'react'
import Pagina from './Pagina'
import { bienvenida } from '../data/catalogo'

export default function Bienvenida({ numero, indice }) {
  return (
    <Pagina numero={numero} className="bienvenida">
      <p className="eyebrow">Bienvenida</p>
      <h2 className="titulo-grande">{bienvenida.titulo}</h2>
      <p className="texto-intro">{bienvenida.texto}</p>
      <p className="bienvenida__firma">{bienvenida.firma}</p>

      <ul className="beneficios">
        {bienvenida.beneficios.map((b) => (
          <li key={b.titulo}>
            <strong>{b.titulo}</strong>
            <span>{b.texto}</span>
          </li>
        ))}
      </ul>

      <div className="indice">
        <p className="eyebrow">Contenido</p>
        <ol>
          {indice.map((item, i) => (
            <Fragment key={item.id}>
              {item.grupo !== indice[i - 1]?.grupo && <li className="indice__grupo">{item.grupo}</li>}
              <li>
                <a href={`#${item.id}`}>{item.nombre}</a>
                <span className="indice__puntos" />
                <span>{String(item.pagina).padStart(2, '0')}</span>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </Pagina>
  )
}
