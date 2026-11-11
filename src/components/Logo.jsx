import logoRojo from '../assets/images/logo-rojo.png'
import logoBlanco from '../assets/images/logo-blanco.png'

// El PNG original tiene mucho espacio vacío alrededor; el CSS lo recorta.
export default function Logo({ color = 'rojo', className = '' }) {
  return (
    <div className={`logo ${className}`}>
      <img src={color === 'blanco' ? logoBlanco : logoRojo} alt="True Love Store" />
    </div>
  )
}
