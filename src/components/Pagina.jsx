import Logo from './Logo'

export default function Pagina({ id, numero, className = '', pie = true, children }) {
  return (
    <section id={id} className={`pagina ${className}`}>
      {children}
      {pie && (
        <footer className="pagina__pie">
          <Logo className="pagina__pie-logo" />
          <span>{String(numero).padStart(2, '0')}</span>
        </footer>
      )}
    </section>
  )
}
