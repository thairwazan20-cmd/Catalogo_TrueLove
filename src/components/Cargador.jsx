import { useEffect, useState } from 'react'
import isotipo from '../assets/images/isotipo.jpeg'

const MINIMO_MS = 1100 // tiempo mínimo en pantalla, para que la animación se alcance a ver
const SALIDA_MS = 700

// Pantalla de entrada: el corazón de la marca late mientras carga la página y luego se desvanece.
export default function Cargador({ onTerminar }) {
  const [fase, setFase] = useState('visible') // visible → saliendo → fuera

  useEffect(() => {
    const inicio = performance.now()
    let timers = []

    const salir = () => {
      const espera = Math.max(0, MINIMO_MS - (performance.now() - inicio))
      timers.push(
        setTimeout(() => {
          setFase('saliendo')
          onTerminar?.()
          timers.push(setTimeout(() => setFase('fuera'), SALIDA_MS))
        }, espera),
      )
    }

    if (document.readyState === 'complete') salir()
    else window.addEventListener('load', salir, { once: true })

    // Por si alguna imagen tarda demasiado: nunca más de 3,5 s
    timers.push(setTimeout(salir, 3500))

    return () => {
      window.removeEventListener('load', salir)
      timers.forEach(clearTimeout)
      timers = []
    }
  }, [onTerminar])

  if (fase === 'fuera') return null

  return (
    <div className={`cargador ${fase === 'saliendo' ? 'cargador--saliendo' : ''}`} aria-hidden="true">
      <div className="cargador__corazon">
        <img src={isotipo} alt="" />
      </div>
      <p className="cargador__marca">True Love Store</p>
      <p className="cargador__texto">Preparando tu catálogo…</p>
      <span className="cargador__barra" />
    </div>
  )
}
