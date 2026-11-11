// Datos del catálogo, tomados de https://true-love-store-web.vercel.app
// Para cambiar precios, textos o fotos, solo se edita este archivo.

const foto = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`

export const marca = {
  nombre: 'True Love Store',
  edicion: 'Catálogo Oficial 2026',
  lema: 'Regalos personalizados para celebrar tus momentos especiales',
  whatsapp: '51960985082',
  whatsappTexto: '+51 960 985 082',
  ubicacion: 'Lima, Perú',
  envios: 'Envíos a todo el Perú',
  web: 'true-love-store-web.vercel.app',
  webUrl: 'https://true-love-store-web.vercel.app',
  redes: [
    { red: 'Instagram', usuario: '@tlsregalosperu', url: 'https://www.instagram.com/tlsregalosperu/' },
    { red: 'Facebook', usuario: 'tlsregalosperu', url: 'https://www.facebook.com/tlsregalosperu/' },
    { red: 'TikTok', usuario: '@tlsregalosperu', url: 'https://www.tiktok.com/@tlsregalosperu' },
  ],
}

export const linkWhatsapp = (mensaje) =>
  `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(mensaje)}`

export const bienvenida = {
  titulo: 'Hay recuerdos que merecen algo más que una pantalla.',
  texto:
    'En True Love Store convertimos tus fotos y tus historias en regalos que se tocan, se abren y se guardan para siempre. Cada pieza se diseña a tu medida y con mucho amor, para que tu detalle diga exactamente lo que sientes.',
  firma: 'Con cariño, el equipo de True Love Store',
  beneficios: [
    { titulo: 'Diseño 100% personalizado', texto: 'Te asesoramos por WhatsApp durante todo el proceso.' },
    { titulo: 'Envíos garantizados', texto: 'Enviamos a todo el Perú.' },
    { titulo: 'Calidad fotográfica premium', texto: 'Impresión en alta definición para tus mejores recuerdos.' },
    { titulo: 'Presentación inolvidable', texto: 'Detalles pensados para fechas especiales.' },
  ],
}

export const categorias = [
  {
    id: 'photobooks',
    nombre: 'Photobooks & Fotolibros',
    eyebrow: 'Favoritos de los clientes',
    titulo: 'Un pedacito de ti, en cada página.',
    intro:
      'Tus fotos favoritas, impresas en alta definición y encuadernadas para durar. El regalo ideal para aniversarios, cumpleaños y viajes que no quieres olvidar.',
    portada: foto('photo-1511285560929-80b456fea0bc'),
    productos: [
      { id: 'photo-1515', nombre: 'Photobook Cuadrado 15 × 15 cm', detalle: '15 páginas · 20 fotos', descripcion: 'Compacto y encantador, perfecto para contar una historia en pocas páginas.', precio: 79, badge: 'Promoción', imagen: foto('photo-1511285560929-80b456fea0bc') },
      { id: 'photo-2230-promo', nombre: 'Photobook Vertical 22 × 30 cm', detalle: '10 páginas · 60 fotos', descripcion: 'Gran formato para lucir cada foto con todo su detalle.', precio: 199, badge: 'Promoción', imagen: foto('photo-1520854221256-17451cc331bf') },
      { id: 'photo-1814', nombre: 'Fotolibro 18 × 14 cm', detalle: 'Formato horizontal', descripcion: 'Práctico y elegante, ideal para regalar en cualquier ocasión.', precio: 99, badge: 'Nuevo', imagen: foto('photo-1511285560929-80b456fea0bc') },
      { id: 'photo-1520', nombre: 'Fotolibro 15 × 20 cm', detalle: 'Formato vertical', descripcion: 'El tamaño preferido de nuestros clientes para sus recuerdos.', precio: 149, badge: 'Favorito', imagen: foto('photo-1529156069898-49953e39b3ac') },
      { id: 'photo-2222', nombre: 'Fotolibro 22 × 22 cm', detalle: 'Formato cuadrado', descripcion: 'Páginas amplias para diseños con más fotos y más texto.', precio: 229, imagen: foto('photo-1516483638261-f4dbaf036963') },
      { id: 'photo-2230', nombre: 'Fotolibro 22 × 30 cm', detalle: 'Formato vertical grande', descripcion: 'Nuestro formato más grande, pensado para historias completas.', precio: 309, badge: 'Exclusivo', imagen: foto('photo-1520854221256-17451cc331bf') },
      { id: 'photo-biocuero', nombre: 'Photobook Premium Biocuero', detalle: 'Tapa en biocuero', descripcion: 'Acabado premium con un tacto suave y sofisticado.', variantes: [{ label: 'Estándar', precio: 210 }, { label: 'Grande', precio: 410 }], badge: 'Premium', imagen: foto('photo-1517849845537-4d257902454a') },
    ],
  },
  {
    id: 'cuadros',
    nombre: 'Cuadros con Realidad Aumentada',
    eyebrow: 'Un regalo diferente',
    titulo: 'Más que un cuadro, una experiencia.',
    intro:
      'Escanéalo con el celular y mira cómo tu foto cobra vida en video. Un detalle que sorprende la primera vez y emociona cada vez que se vuelve a ver.',
    portada: foto('photo-1513519245088-0e12902e5a38'),
    productos: [
      { id: 'frame-2015', nombre: 'Cuadro con Realidad Aumentada', detalle: '20 × 15 cm', descripcion: 'Tu foto con video integrado, en un formato fácil de ubicar.', precio: 55, badge: 'Nuevo', imagen: foto('photo-1513519245088-0e12902e5a38') },
      { id: 'frame-2030', nombre: 'Cuadro con Realidad Aumentada', detalle: '20 × 30 cm', descripcion: 'Tamaño mediano, ideal para escritorio o mesa de noche.', precio: 69, imagen: foto('photo-1507643179773-3e975d7ac515') },
      { id: 'frame-3040', nombre: 'Cuadro con Realidad Aumentada', detalle: '30 × 40 cm', descripcion: 'Gran formato que se convierte en el centro de atención.', precio: 79, badge: 'Más vendido', imagen: foto('photo-1579783902614-a3fb3927b6a5') },
      { id: 'frame-netflix', nombre: 'Cuadro “Netflix”', detalle: '20 × 30 cm', descripcion: 'Su historia de amor presentada como su serie favorita.', precio: 69, badge: 'Favorito', imagen: foto('photo-1513519245088-0e12902e5a38') },
      { id: 'frame-corazon', nombre: 'Cuadro “Corazón”', detalle: '20 × 30 cm', descripcion: 'Un diseño romántico para dedicar con todo el corazón.', precio: 69, imagen: foto('photo-1507643179773-3e975d7ac515') },
      { id: 'frame-noticia', nombre: 'Cuadro “Noticia”', detalle: '30 × 40 cm', descripcion: 'Su momento especial convertido en la portada del día.', precio: 79, badge: 'Exclusivo', imagen: foto('photo-1579783902614-a3fb3927b6a5') },
      { id: 'frame-favorita', nombre: 'Cuadro “Nombre Favorita”', detalle: '15 × 20 cm', descripcion: 'Su nombre y su foto en un diseño tierno y personal.', precio: 55, imagen: foto('photo-1561214115-f2f134cc4912') },
    ],
  },
  {
    id: 'figuritas',
    nombre: 'Álbumes de Figuritas',
    eyebrow: 'Colecciona tus momentos',
    titulo: 'Tu historia, figurita por figurita.',
    intro:
      'Un álbum hecho con sus propias fotos para pegar, completar y revivir juntos. Divertido, original y lleno de nostalgia.',
    portada: foto('photo-1519682337058-a94d519337bc'),
    productos: [
      { id: 'stickers-a4', nombre: 'Álbum de 50 Figuritas', detalle: 'A4 · Tapa dura', descripcion: 'La edición completa: 50 figuritas personalizadas y tapa resistente.', precio: 160, badge: 'Nuevo', imagen: foto('photo-1519682337058-a94d519337bc') },
      { id: 'stickers-a5', nombre: 'Álbum de 30 Figuritas', detalle: 'A5', descripcion: 'Formato práctico con 30 figuritas para un regalo divertido.', precio: 90, imagen: foto('photo-1516979187457-637abb4f9353') },
    ],
  },
  {
    id: 'boxes',
    nombre: 'Packs & Special Boxes',
    eyebrow: 'Sorprende con intención',
    titulo: 'El regalo perfecto empieza aquí.',
    intro:
      'Cajas armadas con detalle y cariño, listas para entregar. Elige la presentación que mejor va con la persona que quieres sorprender.',
    portada: foto('photo-1549465220-1a8b9238cd48'),
    productos: [
      { id: 'box-autentica', nombre: 'Box Auténtica', detalle: 'Presentación clásica', descripcion: 'Un detalle sencillo y lleno de significado.', precio: 65, imagen: foto('photo-1513201099705-a9746e1e201f') },
      { id: 'box-magico', nombre: 'Box Mágico', detalle: 'Presentación premium', descripcion: 'Una caja que sorprende desde que se abre.', precio: 85, badge: 'Favorito', imagen: foto('photo-1549465220-1a8b9238cd48') },
      { id: 'box-netflix', nombre: 'Box Netflix', detalle: 'Edición Netflix', descripcion: 'El plan perfecto de película en una sola caja.', precio: 99, badge: 'Exclusivo', imagen: foto('photo-1512909006721-3d6018887383') },
      { id: 'special-box', nombre: 'Special Box', detalle: 'Edición especial', descripcion: 'Nuestra caja más completa para fechas importantes.', precio: 99, badge: 'Premium', imagen: foto('photo-1513883049090-d0b7439799bf') },
      { id: 'box-chelero', nombre: 'Box Chelero', detalle: 'Personalizado', descripcion: 'El regalo ideal para quien disfruta un buen brindis.', variantes: [{ label: 'Pequeño', precio: 40 }, { label: 'Grande', precio: 69 }], imagen: foto('photo-1513201099705-a9746e1e201f') },
    ],
  },
  {
    id: 'scrapbooks',
    nombre: 'Scrapbooks & Agendas',
    eyebrow: 'Diseño personalizado',
    titulo: 'Recuerdos con mucho amor.',
    intro:
      'Para planear, escribir y guardar lo que importa. Diseños personalizados con diferentes temáticas, que inspiran todos los días.',
    portada: foto('photo-1455390582262-044cdead277a'),
    productos: [
      { id: 'scrapbook-100', nombre: 'Scrapbook 100 Citas', detalle: '100 citas para vivir juntos', descripcion: 'Un plan para cada día: ideas para compartir y recordar.', precio: 79, badge: 'Regalo ideal', imagen: foto('photo-1455390582262-044cdead277a') },
      { id: 'agenda-diaria', nombre: 'Agenda Diaria', detalle: 'Diseño personalizado', descripcion: 'Organiza tu día con una agenda hecha solo para ti.', variantes: [{ label: 'Clásica', precio: 48 }, { label: 'Premium', precio: 80 }], imagen: foto('photo-1517842645767-c639042777db') },
      { id: 'planner', nombre: 'Planificador', detalle: 'Diseño personalizado', descripcion: 'Metas, hábitos y pendientes en un solo lugar.', variantes: [{ label: 'Clásico', precio: 48 }, { label: 'Premium', precio: 80 }], badge: 'Nuevo', imagen: foto('photo-1434030216411-0b793f4b4173') },
    ],
  },
]

export const suscripcion = {
  eyebrow: 'Exclusivo',
  titulo: 'Suscripción mensual',
  precio: 'S/ 29.90',
  producto: 'Photobook Premium',
  detalle: '30 páginas, con capacidad para 200 fotos.',
  texto:
    'Guarda los recuerdos de cada mes sin preocuparte por nada. Tú nos envías tus fotos y nosotros nos encargamos del resto.',
  mensaje: 'Hola, deseo más información sobre la Suscripción Mensual de PHOTOBOOK PREMIUM',
}

export const pasosPedido = [
  { titulo: 'Elige tu regalo', texto: 'Revisa el catálogo y escoge el producto y tamaño.' },
  { titulo: 'Escríbenos por WhatsApp', texto: 'Te asesoramos y confirmamos precio y disponibilidad.' },
  { titulo: 'Envía tus fotos', texto: 'Comparte tus fotos y textos para personalizar el diseño.' },
  { titulo: 'Recíbelo en casa', texto: 'Aprobado el diseño, lo producimos y enviamos a todo el Perú.' },
]
