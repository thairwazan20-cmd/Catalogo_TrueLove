# Propuesta de catálogo — True Love Store

Fuente: https://true-love-store-web.vercel.app (logo, colores, productos, precios y contactos).

## 1. Identidad visual

| Uso | Color | Código |
|---|---|---|
| Principal (logotipo, títulos de acento, precios destacados) | Rojo True Love | `#E30613` |
| Secundario (botones, detalles, círculos) | Rosa marca | `#F5B4D2` |
| Fondos suaves | Rosa claro | `#FFF0F6` |
| Texto principal | Negro | `#1A1A1A` |
| Texto secundario | Malva gris | `#5C4A52` |
| Líneas y bordes | Rosa grisáceo | `#F0E4E9` |

- **Tipografía:** Poppins (la misma de la web). Títulos en 600–700, textos en 400.
- **Logotipo:** imagotipo rojo sobre fondos claros; versión blanca sobre rojo; isotipo (corazón) como sello.
- **Estilo:** mucho espacio en blanco, esquinas redondeadas, etiquetas pequeñas en mayúsculas espaciadas.

## 2. Distribución de páginas (A4 vertical, 21 páginas)

El catálogo se organiza en **Fechas especiales** (una sección por fecha) y **Nuestros productos** (por tipo de producto). El índice muestra ambos grupos.

| Pág. | Contenido | Composición |
|---|---|---|
| 01 | Portada | Degradado blanco → rosa claro, “CATÁLOGO OFICIAL 2026”, logotipo grande, lema y líneas de producto al pie. |
| 02 | Bienvenida + índice | Frase principal, texto de marca, 4 beneficios en tarjetas rosa e índice agrupado con números de página. |
| 03 | Fechas especiales · San Valentín (apertura) | Título grande en rojo, etiqueta “14 de febrero · Día de los enamorados”, frase, intro y 3 fotos reales en estilo polaroid. |
| 04 | San Valentín · 3 diseños | Fichas 2 × 2: Netflix Enamorados, Nuestro tiempo juntos, Mosaico de recuerdos + tarjeta “¿Tienes otra idea en mente?” en el cuarto espacio. |
| 05 | Fechas especiales · Día de la Madre (apertura) | Misma estructura, etiqueta “Segundo domingo de mayo”. |
| 06–09 | Día de la Madre · 14 diseños | Fichas 2 × 2 (4 + 4 + 4 + 2). La última página suma la tarjeta “¿Tienes otra idea en mente?” a lo ancho. |
| 10 | Fechas especiales · Día del Padre (apertura) | Misma estructura, etiqueta “Tercer domingo de junio”. |
| 11 | Día del Padre · 4 diseños | Fichas 2 × 2: Netflix Papá, PAPÁ Collage, Figurita Mundialista, Padre y Abuelo. |
| 12–13 | 01 · Photobooks & Fotolibros (7) | Foto de cabecera + intro + 3 productos; continuación con 4. |
| 14–15 | 02 · Cuadros con Realidad Aumentada (7) | Igual estructura: 3 + 4. |
| 16 | 03 · Álbumes de Figuritas (2) | Cabecera + 2 productos. |
| 17–18 | 04 · Packs & Special Boxes (5) | 3 + 2. |
| 19 | 05 · Scrapbooks & Agendas (3) | Cabecera + 3 productos. |
| 20 | Suscripción mensual | Fondo rosa claro, tarjeta central con precio grande y botón de WhatsApp. |
| 21 | Contraportada | Pasos para pedir, bloque rojo con WhatsApp, redes, ubicación y logotipo blanco. |

**Ficha de producto:** foto cuadrada · etiqueta (Nuevo, Favorito, Premium…) · nombre · medida/formato en rojo · descripción de una línea · precio · botón “Pedir” (abre WhatsApp con el producto ya escrito).

## 3. Textos

**Portada**
- Etiqueta: CATÁLOGO OFICIAL 2026
- Lema: *Regalos personalizados para celebrar tus momentos especiales*

**Bienvenida**
- Título: *Hay recuerdos que merecen algo más que una pantalla.*
- Texto: *En True Love Store convertimos tus fotos y tus historias en regalos que se tocan, se abren y se guardan para siempre. Cada pieza se diseña a tu medida y con mucho amor, para que tu detalle diga exactamente lo que sientes.*
- Firma: *Con cariño, el equipo de True Love Store*
- Beneficios (de la web): Diseño 100% personalizado · Envíos garantizados · Calidad fotográfica premium · Presentación inolvidable

**Categorías** (eyebrow / frase / intro)
1. **Photobooks & Fotolibros** — FAVORITOS DE LOS CLIENTES / *Un pedacito de ti, en cada página.* / Tus fotos favoritas, impresas en alta definición y encuadernadas para durar. El regalo ideal para aniversarios, cumpleaños y viajes que no quieres olvidar.
2. **Cuadros con Realidad Aumentada** — UN REGALO DIFERENTE / *Más que un cuadro, una experiencia.* / Escanéalo con el celular y mira cómo tu foto cobra vida en video. Un detalle que sorprende la primera vez y emociona cada vez que se vuelve a ver.
3. **Álbumes de Figuritas** — COLECCIONA TUS MOMENTOS / *Tu historia, figurita por figurita.* / Un álbum hecho con sus propias fotos para pegar, completar y revivir juntos.
4. **Packs & Special Boxes** — SORPRENDE CON INTENCIÓN / *El regalo perfecto empieza aquí.* / Cajas armadas con detalle y cariño, listas para entregar.
5. **Scrapbooks & Agendas** — DISEÑO PERSONALIZADO / *Recuerdos con mucho amor.* / Para planear, escribir y guardar lo que importa.

Las fichas de cada producto (nombre, medida, descripción y precio) están en `src/data/catalogo.js`.

**Suscripción:** *Suscripción mensual — S/ 29.90 / mes. Recibe tu Photobook Premium de 30 páginas, con capacidad para 200 fotos. Guarda los recuerdos de cada mes sin preocuparte por nada.* → Conoce más por WhatsApp

**Contraportada**
- ¿Cómo hago mi pedido? 1. Elige tu regalo · 2. Escríbenos por WhatsApp · 3. Envía tus fotos · 4. Recíbelo en casa
- Cierre: *Hagamos juntos tu próximo regalo inolvidable.*
- WhatsApp +51 960 985 082 · Instagram / Facebook / TikTok @tlsregalosperu · Lima, Perú · Envíos a todo el Perú
- Nota legal: *Precios en soles, sujetos a confirmación. Imágenes referenciales.*

## 4. Pendientes con la clienta

- [ ] **Fotos reales de productos.** La web usa fotos genéricas de Unsplash (incluso un perro para el Photobook Biocuero). Para un catálogo profesional hacen falta fotos propias.
- [ ] Confirmar precios vigentes.
- [ ] Validar los pasos de pedido y las descripciones cortas (redactadas para el catálogo).
- [ ] Confirmar si hay dirección física, horario o correo para la contraportada.
- [ ] **Día del Padre:** confirmar precios de los 4 cuadros (se usaron los de los cuadros temáticos de la web: 20 × 30 cm S/ 69 · 30 × 40 cm S/ 79), los nombres de cada diseño y si el marco negro y el natural cuestan lo mismo.
- [ ] **Día de la Madre:** confirmar precios y nombres de los 14 diseños (se usaron los mismos precios de cuadros). El diseño “Mamá” Floral se mostró en marco negro; también existe la foto en marco natural. El collage promocional de 5 cuadros no se usó (se puede poner como portada de la sección si la clienta lo prefiere).
- [ ] **San Valentín:** confirmar precios y nombres de los 3 diseños (mismos precios de cuadros). “Nuestro tiempo juntos” se mostró de frente; también hay foto de lado.
- [ ] Enviar las fotos de las demás fechas (Navidad, graduaciones, etc.) y momentos especiales para sumar sus secciones. Se agregan en `fechas` dentro de `src/data/catalogo.js`.
