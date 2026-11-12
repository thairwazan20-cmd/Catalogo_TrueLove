import Portada from '../components/Portada'
import Bienvenida from '../components/Bienvenida'
import PaginaCategoria from '../components/PaginaCategoria'
import PaginaFecha from '../components/PaginaFecha'
import Suscripcion from '../components/Suscripcion'
import Contacto from '../components/Contacto'
import { categorias, fechas, dividirDisenos } from '../data/catalogo'

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

// Calcula qué va en cada página y su número (fijo, no depende del render).
// Portada = 1, Bienvenida = 2; luego las fechas especiales (2 páginas cada una) y las categorías.
function armarPaginas() {
  const paginasFechas = []
  const paginas = []
  const indice = []
  let numero = 3

  fechas.forEach((fecha, i) => {
    indice.push({ id: fecha.id, nombre: fecha.nombre, pagina: numero, grupo: 'Fechas especiales' })
    paginasFechas.push({ fecha, orden: i + 1, numero })
    numero += 1 + dividirDisenos(fecha.productos).length // apertura + páginas de diseños
  })

  categorias.forEach((categoria, i) => {
    indice.push({ id: categoria.id, nombre: categoria.nombre, pagina: numero, grupo: 'Nuestros productos' })
    dividirEnPaginas(categoria.productos).forEach((productos, j) => {
      paginas.push({ numero, categoria, productos, orden: i + 1, continuacion: j > 0 })
      numero += 1
    })
  })

  const numSuscripcion = numero
  indice.push({ id: 'suscripcion', nombre: 'Suscripción mensual', pagina: numSuscripcion, grupo: 'Más para ti' })
  indice.push({ id: 'contacto', nombre: 'Pedidos y contacto', pagina: numSuscripcion + 1, grupo: 'Más para ti' })

  return { paginasFechas, paginas, indice, numSuscripcion }
}

const { paginasFechas, paginas, indice, numSuscripcion } = armarPaginas()

export default function Catalogo() {
  return (
    <main className="catalogo">
      <Portada />
      <Bienvenida numero={2} indice={indice} />
      {paginasFechas.map((p) => (
        <PaginaFecha key={p.fecha.id} {...p} />
      ))}
      {paginas.map((p) => (
        <PaginaCategoria key={p.numero} {...p} />
      ))}
      <Suscripcion numero={numSuscripcion} />
      <Contacto />
    </main>
  )
}
