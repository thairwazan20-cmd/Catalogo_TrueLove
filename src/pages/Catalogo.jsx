import { productos } from '../data/productos'

export default function Catalogo() {
  return (
    <main>
      <h2>Catálogo</h2>
      {productos.length === 0 && <p>Próximamente...</p>}
    </main>
  )
}
