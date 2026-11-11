import { useEffect } from 'react'
import Catalogo from './pages/Catalogo'

export default function App() {
  // Permite compartir enlaces directos a una sección, por ejemplo: /#cuadros
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <div className="barra-acciones">
        <button type="button" onClick={() => window.print()}>
          Descargar PDF
        </button>
      </div>
      <Catalogo />
    </>
  )
}
