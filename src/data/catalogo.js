// Datos del catálogo, tomados de https://true-love-store-web.vercel.app
// Para cambiar precios, textos o fotos, solo se edita este archivo.

import padreAbuelo from '../assets/images/dia-del-padre/padre-abuelo.jpg'
import padreAbueloV from '../assets/images/dia-del-padre/padre-abuelo-vertical.jpg'
import mundialista from '../assets/images/dia-del-padre/mundialista.jpg'
import papaCollage from '../assets/images/dia-del-padre/papa-collage.jpg'
import papaCollageV from '../assets/images/dia-del-padre/papa-collage-vertical.jpg'
import netflixPapa from '../assets/images/dia-del-padre/netflix-papa.jpg'
import netflixPapaV from '../assets/images/dia-del-padre/netflix-papa-vertical.jpg'

// Fotos del Día de la Madre: se cargan por nombre de archivo, p. ej. madre('mama-letras')
const fotosMadre = import.meta.glob('../assets/images/dia-de-la-madre/*.jpg', { eager: true, import: 'default' })
const madre = (nombre) => fotosMadre[`../assets/images/dia-de-la-madre/${nombre}.jpg`]
const fotosValentin = import.meta.glob('../assets/images/san-valentin/*.jpg', { eager: true, import: 'default' })
const valentin = (nombre) => fotosValentin[`../assets/images/san-valentin/${nombre}.jpg`]

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

// ===== Fechas especiales =====
// Cada fecha tiene su propia sección: página de apertura + fichas de sus diseños.
// Para agregar otra fecha (Día de la Madre, San Valentín…), copia el bloque y cambia los datos.
// `fotos` son las 3 imágenes verticales de la apertura; `imagen` en cada producto es la foto cuadrada.
const tamanosCuadro = [
  { label: '20 × 30 cm', precio: 69 },
  { label: '30 × 40 cm', precio: 79 },
]

// Diseños de una fecha agrupados de 4 en 4 (una página 2 × 2 cada grupo).
export function dividirDisenos(productos) {
  const paginas = []
  for (let i = 0; i < productos.length; i += 4) paginas.push(productos.slice(i, i + 4))
  return paginas
}

export const fechas = [
  {
    id: 'san-valentin',
    nombre: 'San Valentín',
    cuando: '14 de febrero · Día de los enamorados',
    titulo: 'Para tu persona favorita.',
    intro:
      'Su historia de amor convertida en un cuadro: sus nombres, sus fechas y sus fotos más bonitas. Perfecto para San Valentín, aniversarios o simplemente para recordarle cuánto la quieres.',
    nota: 'Marco negro o natural · Diseño personalizado con tus fotos y textos',
    fotos: [valentin('tiempo-juntos-vertical'), valentin('netflix-enamorados-vertical'), valentin('mosaico-recuerdos-vertical')],
    productos: [
      { id: 'valentin-netflix', nombre: 'Cuadro “Netflix Enamorados”', detalle: 'Hasta 9 fotos', descripcion: 'Su historia como la serie romántica número uno, con sus nombres y una sinopsis dedicada.', variantes: tamanosCuadro, badge: 'Favorito', imagen: valentin('netflix-enamorados') },
      { id: 'valentin-tiempo', nombre: 'Cuadro “Nuestro tiempo juntos”', detalle: '9 fotos + contador', descripcion: 'Su foto favorita en un corazón y los años, meses, días y horas que llevan juntos.', variantes: tamanosCuadro, badge: 'Nuevo', imagen: valentin('tiempo-juntos') },
      { id: 'valentin-mosaico', nombre: 'Cuadro “Mosaico de recuerdos”', detalle: '+60 fotos + foto principal', descripcion: 'Un mosaico en blanco y negro con ustedes a color al centro, sus nombres, dedicatoria y fecha.', variantes: tamanosCuadro, badge: 'Exclusivo', imagen: valentin('mosaico-recuerdos') },
    ],
  },
  {
    id: 'dia-de-la-madre',
    nombre: 'Día de la Madre',
    cuando: 'Segundo domingo de mayo',
    titulo: 'Para la reina de la casa.',
    intro:
      'Cuadros hechos con sus fotos y con las palabras que llevas tiempo queriendo decirle. Elige el estilo que más se parece a ella: tierno, elegante, divertido o lleno de flores.',
    nota: 'Marco negro o natural · Diseño personalizado con tus fotos y textos',
    fotos: [madre('mama-letras-vertical'), madre('netflix-mama-vertical'), madre('contigo-lo-tengo-todo-vertical')],
    productos: [
      { id: 'madre-netflix', nombre: 'Cuadro “Netflix Mamá”', detalle: 'Hasta 9 fotos', descripcion: 'Su historia presentada como la serie más vista de la familia, con sinopsis dedicada.', variantes: tamanosCuadro, badge: 'Favorito', imagen: madre('netflix-mama') },
      { id: 'madre-letras', nombre: 'Cuadro “MAMÁ” Collage', detalle: '8 fotos + frase', descripcion: 'Sus mejores momentos alrededor de la palabra más bonita, con tu mensaje al pie.', variantes: tamanosCuadro, badge: 'Más vendido', imagen: madre('mama-letras') },
      { id: 'madre-inspira', nombre: 'Cuadro “Mamá que inspira”', detalle: '14 fotos estilo polaroid', descripcion: 'Un collage lleno de recuerdos con una frase escrita a mano sobre las fotos.', variantes: tamanosCuadro, imagen: madre('mama-que-inspira') },
      { id: 'madre-quien-eres', nombre: 'Cuadro “¿Quién eres tú para mí?”', detalle: '5 fotos + carta', descripcion: 'Estilo revista en blanco y negro, con una carta dedicada de tu puño y letra.', variantes: tamanosCuadro, badge: 'Exclusivo', imagen: madre('quien-eres-tu') },
      { id: 'madre-contigo', nombre: 'Cuadro “Contigo lo tengo todo”', detalle: '6 fotos + 6 frases', descripcion: 'Tonos rosa y flores de acuarela, con una frase corta junto a cada foto.', variantes: tamanosCuadro, badge: 'Nuevo', imagen: madre('contigo-lo-tengo-todo') },
      { id: 'madre-floral', nombre: 'Cuadro “Mamá” Floral', detalle: '10 fotos + dedicatoria', descripcion: 'Fondo negro con flores y todo lo que ella es para ti, escrito línea por línea.', variantes: tamanosCuadro, imagen: madre('mama-floral') },
      { id: 'madre-eres-la-mejor', nombre: 'Cuadro “Eres la mejor”', detalle: '9 fotos', descripcion: 'Collage a todo color con letras recortadas, divertido y lleno de personalidad.', variantes: tamanosCuadro, imagen: madre('eres-la-mejor') },
      { id: 'madre-la-mejor', nombre: 'Cuadro “La mejor Mamá”', detalle: '12 fotos', descripcion: 'Doce momentos juntas enmarcados con flores en tonos suaves.', variantes: tamanosCuadro, imagen: madre('la-mejor-mama') },
      { id: 'madre-te-amo', nombre: 'Cuadro “Má, te amo”', detalle: '6 fotos', descripcion: 'Diseño moderno en verde que forma tu mensaje entre las fotos.', variantes: tamanosCuadro, imagen: madre('ma-te-amo') },
      { id: 'madre-infinito', nombre: 'Cuadro “Hasta el infinito”', detalle: '1 foto + nombre', descripcion: 'Una sola foto a todo tamaño con una frase tierna y la firma de quien la regala.', variantes: tamanosCuadro, imagen: madre('hasta-el-infinito') },
      { id: 'madre-reina', nombre: 'Cuadro “Mi reina favorita”', detalle: '1 foto + nombres', descripcion: 'Corona, estrellas y su foto favorita, firmado por toda la familia.', variantes: tamanosCuadro, imagen: madre('reina-favorita') },
      { id: 'madre-hogar', nombre: 'Cuadro “Hogar de amor”', detalle: '2 fotos', descripcion: 'Flores de acuarela y dos fotos tipo polaroid para un detalle delicado.', variantes: tamanosCuadro, imagen: madre('hogar-de-amor') },
      { id: 'madre-gracias-flores', nombre: 'Cuadro “Gracias Mamá”', detalle: '2 fotos + nombre', descripcion: 'Un agradecimiento con flores y su nombre, para decirle todo lo que le debes.', variantes: tamanosCuadro, imagen: madre('gracias-mama-flores') },
      { id: 'madre-heroina', nombre: 'Cuadro “Mi heroína”', detalle: '1 foto + nombres', descripcion: 'Tres razones para darle las gracias y una foto especial al centro.', variantes: tamanosCuadro, imagen: madre('gracias-mama-heroina') },
    ],
  },
  {
    id: 'dia-del-padre',
    nombre: 'Día del Padre',
    cuando: 'Tercer domingo de junio',
    titulo: 'Para el héroe de la casa.',
    intro:
      'Cuadros diseñados con sus fotos, su nombre y las palabras que siempre quisiste decirle. Un regalo que se queda en su escritorio, en su sala y en su corazón.',
    nota: 'Marco negro o natural · Diseño personalizado con tus fotos y textos',
    fotos: [papaCollageV, netflixPapaV, padreAbueloV],
    productos: [
      { id: 'padre-netflix', nombre: 'Cuadro “Netflix Papá”', detalle: 'Hasta 9 fotos', descripcion: 'Su historia presentada como la serie número uno de la familia, con sinopsis dedicada.', variantes: tamanosCuadro, badge: 'Favorito', imagen: netflixPapa },
      { id: 'padre-collage', nombre: 'Cuadro “PAPÁ” Collage', detalle: '8 fotos + frase', descripcion: 'Sus mejores momentos alrededor de la palabra más bonita, con tu mensaje al pie.', variantes: tamanosCuadro, badge: 'Más vendido', imagen: papaCollage },
      { id: 'padre-mundialista', nombre: 'Cuadro “Figurita Mundialista”', detalle: '1 foto + nombre', descripcion: 'Papá convertido en la figurita más valiosa del álbum, con su nombre y bandera.', variantes: tamanosCuadro, badge: 'Nuevo', imagen: mundialista },
      { id: 'padre-abuelo', nombre: 'Cuadro “Padre y Abuelo”', detalle: '9 fotos estilo polaroid', descripcion: 'Para el papá que ahora también es abuelo: tres generaciones en un solo cuadro.', variantes: tamanosCuadro, badge: 'Exclusivo', imagen: padreAbuelo },
    ],
  },
]

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
