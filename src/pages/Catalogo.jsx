import Portada from '../components/Portada'
import Bienvenida from '../components/Bienvenida'
import PaginaCategoria from '../components/PaginaCategoria'
import Suscripcion from '../components/Suscripcion'
import Contacto from '../components/Contacto'
import { categorias } from '../data/catalogo'

// La primera página de cada categoría muestra 3 productos; las siguientes, hasta 6.
const PRIMERA = 3
const SIGUIENTES = 6

function dividirEnPaginas(productos) {
  const paginas = [productos.slice(0, PRIMERA)]
  for (let i = PRIMERA; i < productos.length; i += SIGUIENTES) {
    paginas.push(productos.slice(i, i + SIGUIENTES))
  }
  return paginas
}

// Calcula qué productos van en cada página y su número (fijo, no depende del render).
// Portada = 1, Bienvenida = 2; las categorías empiezan en la 3.
function armarPaginas() {
  const paginas = []
  const indice = []
  let numero = 3

  categorias.forEach((categoria, i) => {
    indice.push({ id: categoria.id, nombre: categoria.nombre, pagina: numero })
    dividirEnPaginas(categoria.productos).forEach((productos, j) => {
      paginas.push({ numero, categoria, productos, orden: i + 1, continuacion: j > 0 })
      numero += 1
    })
  })

  const numSuscripcion = numero
  indice.push({ id: 'suscripcion', nombre: 'Suscripción mensual', pagina: numSuscripcion })
  indice.push({ id: 'contacto', nombre: 'Pedidos y contacto', pagina: numSuscripcion + 1 })

  return { paginas, indice, numSuscripcion }
}

const { paginas, indice, numSuscripcion } = armarPaginas()

export default function Catalogo() {
  return (
    <main className="catalogo">
      <Portada />
      <Bienvenida numero={2} indice={indice} />
      {paginas.map((p) => (
        <PaginaCategoria key={p.numero} {...p} />
      ))}
      <Suscripcion numero={numSuscripcion} />
      <Contacto />
    </main>
  )
}
