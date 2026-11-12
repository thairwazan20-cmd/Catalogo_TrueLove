import { useCallback, useEffect, useRef } from 'react'
import Catalogo from './pages/Catalogo'
import Cargador from './components/Cargador'
import Logo from './components/Logo'
import useAnimaciones from './hooks/useAnimaciones'
import { linkWhatsapp } from './data/catalogo'

const MENSAJE = 'Hola, estoy viendo el catálogo de True Love Store y quiero hacer un pedido.'

export default function App() {
  const progreso = useRef(null)
  useAnimaciones()

  // Permite compartir enlaces directos a una sección, por ejemplo: /#cuadros
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  // Barra de progreso de lectura
  useEffect(() => {
    let pendiente = false
    const actualizar = () => {
      pendiente = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      progreso.current?.style.setProperty('--progreso', max > 0 ? window.scrollY / max : 0)
    }
    const alDesplazar = () => {
      if (!pendiente) {
        pendiente = true
        requestAnimationFrame(actualizar)
      }
    }
    window.addEventListener('scroll', alDesplazar, { passive: true })
    actualizar()
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  // Cuando se va la pantalla de carga, arranca la animación de la portada
  const alTerminarCarga = useCallback(() => document.documentElement.classList.add('cargado'), [])

  return (
    <>
      <Cargador onTerminar={alTerminarCarga} />

      <div className="barra-acciones">
        <a href="#" className="barra-acciones__logo" aria-label="Volver al inicio">
          <Logo />
        </a>
        <button type="button" onClick={() => window.print()}>
          Descargar PDF
        </button>
        <span ref={progreso} className="barra-acciones__progreso" />
      </div>

      <Catalogo />

      <a className="whatsapp-flotante" href={linkWhatsapp(MENSAJE)} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 16.4a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.7.7.7-2.6-.2-.3A7.4 7.4 0 1 1 12 19.4Zm4.1-5.5c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9 4.4 4.4 0 0 0 .9 2.3 10 10 0 0 0 3.8 3.4c1.4.6 2 .7 2.7.6.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.4-.2Z" />
        </svg>
        <span className="whatsapp-flotante__texto">¿Te ayudamos?</span>
      </a>
    </>
  )
}
