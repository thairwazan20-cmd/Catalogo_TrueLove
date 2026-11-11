import Pagina from './Pagina'
import ProductoCard from './ProductoCard'

export default function PaginaCategoria({ numero, categoria, productos, orden, continuacion }) {
  const num = String(orden).padStart(2, '0')

  return (
    <Pagina
      id={continuacion ? undefined : categoria.id}
      numero={numero}
      className={`categoria ${continuacion ? 'categoria--cont' : ''}`}
    >
      {continuacion ? (
        <header className="categoria__cabecera-cont">
          <p className="eyebrow">
            {num} · {categoria.nombre}
          </p>
        </header>
      ) : (
        <header className="categoria__cabecera">
          <div className="categoria__foto">
            <img src={categoria.portada} alt={categoria.nombre} />
            <span className="categoria__numero">{num}</span>
          </div>
          <p className="eyebrow">{categoria.eyebrow}</p>
          <h2 className="titulo-grande">{categoria.nombre}</h2>
          <p className="categoria__frase">{categoria.titulo}</p>
          <p className="texto-intro">{categoria.intro}</p>
        </header>
      )}

      <div className="productos">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </Pagina>
  )
}
