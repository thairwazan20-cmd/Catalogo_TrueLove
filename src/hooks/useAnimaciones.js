import { useEffect } from 'react'

// Elementos que aparecen con una animación suave al entrar en pantalla.
// Se marcan desde aquí para no tener que tocar cada componente.
const APARECER = [
  '.bienvenida > .eyebrow', '.bienvenida > .titulo-grande', '.bienvenida > .texto-intro', '.bienvenida__firma',
  '.beneficios > li', '.indice > .eyebrow', '.indice li',
  '.categoria__cabecera > *', '.fecha__cabecera > *', '.categoria__cabecera-cont',
  '.producto', '.fecha__a-medida', '.fecha__nota',
  '.suscripcion__caja > *',
  '.contacto__pasos > .eyebrow', '.contacto__pasos li', '.contacto__cierre > *',
].join(', ')

const CAER = '.polaroid' // las polaroids "caen" sobre la página

export default function useAnimaciones() {
  useEffect(() => {
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducir || !('IntersectionObserver' in window)) return

    const html = document.documentElement
    html.classList.add('anim')

    // Retraso escalonado entre hermanos (máx. 6 pasos para que nada tarde demasiado)
    const contador = new Map()
    const marcar = (el, tipo) => {
      const n = contador.get(el.parentElement) ?? 0
      contador.set(el.parentElement, n + 1)
      el.dataset.revelar = tipo
      el.style.setProperty('--i', Math.min(n, 6))
    }
    document.querySelectorAll(APARECER).forEach((el) => marcar(el, 'subir'))
    document.querySelectorAll(CAER).forEach((el) => marcar(el, 'caer'))

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('visible')
          observador.unobserve(e.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('[data-revelar]').forEach((el) => observador.observe(el))

    // Antes de imprimir / guardar PDF se muestra todo
    const mostrarTodo = () => document.querySelectorAll('[data-revelar]').forEach((el) => el.classList.add('visible'))
    window.addEventListener('beforeprint', mostrarTodo)

    return () => {
      observador.disconnect()
      window.removeEventListener('beforeprint', mostrarTodo)
    }
  }, [])
}
