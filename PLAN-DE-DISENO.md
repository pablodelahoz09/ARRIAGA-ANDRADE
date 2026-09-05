# Arriaga Andrade — plan de diseño y registro de decisiones

Documento de trabajo. Recoge de dónde salió cada decisión visual, qué se
descartó y qué información falta.

---

## 1. Lectura de las referencias

Se revisaron los cuatro sitios que eligió el cliente: **López & Asociados**,
**Posse Herrera Ruiz**, **Quintero y Quintero** y **Godoy**.

Las cuatro comparten el mismo esqueleto: barra horizontal de cinco a siete
ítems (Inicio · Quiénes somos / La firma · Servicios · Equipo / Abogados ·
Novedades / Blog · Contacto), con **Contacto siempre separado del resto** —en
otro color, en una caja o en una franja aparte—. Home larga que resume todo, y
pie denso con direcciones por ciudad y teléfonos fijos con indicativo.

En tono, ninguna vende con adjetivos: describen. Godoy es la más sobria y la
más tipográfica —serif grande blanca sobre negro, un solo verde institucional—.
López y PHR son las más ruidosas —carrusel, formas orgánicas de fondo,
triangulitos, buscador de abogados— y son precisamente las dos que peor
envejecen. Quintero queda en medio: serif elegante, pero con un render 3D azul
y una burbuja de chat con emoji de balanza.

**Lo decisivo:** las cuatro construyen credibilidad con las mismas tres cosas
—oficinas con dirección, reconocimientos (Chambers, Legal 500, Forbes) y equipo
numeroso con foto—. Arriaga Andrade no tiene confirmadas las dos primeras y de
la tercera tiene dos socios. Eso cambia el problema: **donde ellas ponen
insignias, aquí hay que poner especificidad técnica.** Los 50 años en casación
y el levantamiento de fuero sindical son el activo real, y ninguna de las
cuatro referencias lo tiene.

---

## 2. Paleta

Muestreada del XML del brochure, no estimada a ojo. Corrige el valor que traía
el encargo: el vino no es `#7B3B3F`.

| Nombre | Hex | Uso | Contraste |
|---|---|---|---|
| `--tinta` | `#1A1D22` | Fondo de portada, fuero y cierre; texto sobre claro | 14.6:1 sobre hueso |
| `--hueso` | `#F1EEE7` | Fondo claro principal; texto sobre oscuro | 14.6:1 sobre tinta |
| `--papel` | `#FFFFFF` | Segundo fondo claro, solo para dar ritmo | — |
| `--vino` | `#6E2A2E` | Acento sobre fondo claro | 8.9:1 sobre hueso |
| `--vino-claro` | `#B5666A` | Acento sobre fondo oscuro | 4.1:1 — **solo decoración** |
| `--gris` | `#4A4C50` | Texto secundario sobre claro | 7.4:1 sobre hueso |
| `--gris-suave` | `#C9C6BE` | Filetes; texto secundario sobre oscuro | 9.9:1 sobre tinta |

**El brochure ya distinguía dos vinos** y esa distinción se respetó: el vino
oscuro no tiene contraste suficiente sobre el negro. El vino claro se quedó
donde no es texto —el filete de la portada, la barra de la cita, el subrayado
de «Contacto», el monograma—, porque a 4.1:1 no llega al mínimo AA de 4.5.

Todo el color vive en siete variables que cada superficie redefine. El resto de
la hoja de estilo **nunca vuelve a nombrar un color**.

---

## 3. Tipografías

El brochure usa Cambria y Calibri, que son las que trae PowerPoint por defecto:
no son una decisión de identidad, así que no había nada que respetar ahí.

**Libre Caslon Display** — titulares, teléfonos y la cita.
Caslon es la serif de la imprenta institucional y jurídica desde el siglo XVIII;
el corte *Display* tiene el contraste alto que pedía el brochure para los
títulos y que Cambria, dibujada para pantallas pequeñas, no tiene. La dibujaron
Pablo Impallari y Rodrigo Fuenzalida.

**Archivo** — texto corrido e interfaz.
Grotesca neutra y económica de ancho, de Omnibus-Type. Se eligió por encima de
Inter precisamente porque no es Inter: tiene el carácter institucional de las
grotescas de señalización, resuelve muy bien los acentos y la eñe, y su ancho
ajustado hace el trabajo que en el brochure hacía Calibri, sin el aire de
documento de Windows.

Que las dos vengan de fundiciones latinoamericanas no fue el criterio, pero
tampoco estorba en una firma de Bogotá.

Ambas con licencia SIL OFL 1.1, autoalojadas en `/fonts` como subconjuntos
`latin` y `latin-ext`. **Cero peticiones a servidores de terceros.** En español
solo se descarga el subconjunto `latin`: 50 KB entre las dos.

**Un detalle que hubo que corregir:** la Caslon tiene la altura de x mucho más
baja que la Archivo, así que a igual cuerpo se ve más pequeña. Los `h3` estaban
quedando ópticamente por debajo de su propia descripción. Se subieron los `h3`
y se bajó a 16 px el texto descriptivo que cuelga de ellos.

---

## 4. Composición

Una sola página con anclas. Se probó contra la instrucción de «lo que tengan
las otras páginas»: el menú dice exactamente lo mismo que el de las cuatro
referencias —seis entradas, con Contacto aparte—, pero sin fabricar páginas
vacías. Las referencias tienen interiores porque tienen blog, veinte abogados y
tres oficinas; aquí, cuatro páginas medio llenas leerían como una firma
inflada. **Si más adelante hay novedades o una página propia de fuero sindical,
partirla es un rato de trabajo, no un rediseño.**

### Móvil, 390 px

```
┌──────────────────────────────┐
│ ᴀᴀ ARRIAGA ANDRADE  CONTACTO │  cabecera fija, 56 px
├──────────────────────────────┤
│                              │
│  DERECHO LABORAL · DERECHO   │  cintillo (1 de 2 en toda la página)
│  COLECTIVO · CASACIÓN        │
│                              │
│  Derecho laboral             │  h1, Caslon, 36 px
│  estratégico para empresas   │
│  ───                         │  el filete se traza una vez al cargar
│                              │
│  Acompañamos a gerencias,…   │  a quién sirve, dicho de entrada
│  ─────────                   │
│  Más de 50 años ante la Sala │  la credencial, en la primera pantalla
│  de Casación Laboral…        │
│  Hable con nosotros          │  sin botón, sin flecha
├══════════════════════════════┤  ← cambio de superficie: negro a hueso
│  Una práctica diseñada…      │
│  Prevenir / Estructurar /    │  cuatro verbos, sin filetes ni números
│  Defender / Acompañar        │
├──────────────────────────────┤
│  Servicios                   │  filas anchas separadas por filete
│  Hable con nosotros          │  cierre repetido
├──────────────────────────────┤
│  Instrumentos internos       │  rejilla 2×2 en pantallas anchas
├══════════════════════════════┤  ← negro
│  ÉNFASIS DIFERENCIAL         │  cintillo (2 de 2)
│  Levantamiento judicial…     │
│  │ cita en Caslon            │
│  [ foto: manos y documentos ]│
│  cuatro pasos, sin dígitos   │
│  Consultar un caso…          │  cierre repetido
├──────────────────────────────┤
│  Casación laboral            │  segundo diferencial, sección propia
├──────────────────────────────┤
│  «La gestión laboral no debe │  mensaje clave del brochure
│   reaccionar ante…»          │
│  Metodología  1 2 3 4 5      │  única secuencia numerada del sitio
├──────────────────────────────┤
│  Socios                      │
├══════════════════════════════┤  ← negro
│  +57 314 411 6744  WhatsApp  │  teléfonos grandes, tocables
│  Prevención. Estrategia.…    │
├──────────────────────────────┤
│  Pie: contacto repetido,     │  zona de confianza
│  ciudad, © 2026              │
└──────────────────────────────┘
```

### Escritorio

El negro de la portada va a sangre y la fotografía muere contra el borde
derecho de la pantalla, a la altura completa. El titular arranca en la misma
vertical que el resto de la página.

```
┌────────────────────────────────────────────────────────────┐
│ ᴀᴀ ARRIAGA ANDRADE   la firma servicios fuero …  CONTACTO  │
├─────────────────────────────────────────────┬──────────────┤
│  DERECHO LABORAL · DERECHO COLECTIVO        │              │
│                                             │              │
│  Derecho laboral                            │     foto     │
│  estratégico para empresas                  │   a sangre   │
│  ───                                        │              │
│  Acompañamos a gerencias, áreas jurídicas…  │              │
│  Más de 50 años ante la Sala de Casación…   │              │
│  Hable con nosotros                         │              │
└─────────────────────────────────────────────┴──────────────┘
```

Cada sección tiene una forma distinta a propósito: dos columnas · filas anchas
con títulos al margen · negro con foto en columna alta · rejilla 2×2 · cinco
columnas numeradas · dos columnas · datos en dos bloques. **Ninguna repite el
ritmo de título centrado + bajada + grilla de tres.**

---

## 5. Los cuatro principios

1. **La página es un documento, no una interfaz.** La jerarquía tipográfica y
   los filetes hacen el trabajo que en otros sitios hacen las cajas y las
   sombras. No hay una sola tarjeta en todo el sitio.
2. **El color se gana.** El vino aparece en seis lugares contados en toda la
   página. Si apareciera en el séptimo, dejaría de significar algo.
3. **Negro para afirmar, hueso para explicar.** La alternancia viene del
   brochure: las láminas negras son declaraciones, las claras son contenido.
   El sitio hereda esa regla y por eso el fuero sindical va en negro.
4. **Un solo gesto de movimiento.** El filete bajo el titular se traza una vez
   al cargar y nada más se mueve en toda la página. Respeta
   `prefers-reduced-motion`.

---

## 6. Autocrítica del plan

Me pregunté qué de esto haría igual para cualquier otra firma de abogados.
Esto es lo que cambié por esa razón:

| Lo genérico | Lo que se hizo | Por qué |
|---|---|---|
| Portada con foto del equipo y botón «Contáctanos» | Portada tipográfica en negro, sin botón; el llamado es un enlace subrayado | El botón de landing es la marca de agua del sitio hecho en plantilla |
| Servicios en grilla de tres tarjetas con icono | Filas anchas con el título al margen, como un dictamen | Cinco servicios no son tres, y ninguno necesita icono |
| Sección «Por qué elegirnos» con balanzas y escudos | No existe | No está en el brochure: sería invento |
| Cifras animadas y logos de clientes | No existen | Además de falso, en publicidad jurídica es un riesgo real |
| Hamburguesa en móvil para seis anclas | Cabecera con marca y «Contacto» y nada más | Un menú para seis anclas de la misma página es un mueble que estorba |
| Azul corporativo | Negro, hueso y vino del brochure | La identidad ya existía |

**Lo que sigue siendo convencional, y por qué se deja.** El orden de las
secciones —quiénes son, qué hacen, en qué se distinguen, cómo trabajan, quiénes
firman, cómo llamarlos— es el de siempre, porque las preguntas del lector son
las de siempre. Lo que no es convencional es **dónde se puso el diferencial**:
el fuero sindical está en tercera posición, antes de la metodología, y es la
única sección que hereda el negro de la portada. El sitio está organizado
alrededor de lo único que solo hace esta firma.

---

## 7. Decisiones y descartes

**Se decidió así:**

- Una sola página, con el menú de las referencias.
- Sin fotos con rostros. De las ocho imágenes del brochure se usaron dos, las
  de manos y documentos, y se oscurecieron más (58 % la de portada, 30 % la de
  contenido) para que el titular pese más que la fotografía.
- La foto de portada vive en una media query: **en celular no se descarga**.
- Los cuatro pasos del fuero van en `<ol>` —son una secuencia real— pero **sin
  dígitos visibles**: el orden se lee en la disposición. La numeración visible
  se reservó para la metodología, que es la única secuencia que el brochure
  presenta como tal.
- Sin degradados de ningún tipo, tampoco para fundir la foto con el negro: el
  borde es duro y es una decisión.
- La barra inferior de «Llamar / WhatsApp» quedó construida pero apagada.

**Se descartó:**

- Las cuatro imágenes con rostros del brochure. Son generadas por IA y se nota
  —documentos con texto ilegible, caras genéricas—. En un sitio de abogados eso
  resta exactamente la credibilidad que el sitio busca.
- Formulario de contacto.
- Modo oscuro, analítica, cookies, chat, buscador.
- Sección de reconocimientos: no hay ninguno confirmado y no se inventa.

---

## 8. Verificación hecha

- **Sin scroll horizontal** a 360, 390, 414, 430, 768, 1280 y 1440 px
  (comprobado midiendo `scrollWidth` contra el ancho de la ventana, no a ojo).
- **Áreas de toque:** ningún enlace por debajo de 44 px de alto; 24 px de
  separación entre el teléfono y su enlace de WhatsApp.
- **Contraste:** todos los pares de texto por encima de AA. El único que no
  llegaba —«Contacto» de la cabecera, 4.08:1— se corrigió.
- **Cuerpo de texto:** nunca por debajo de 16 px.
- **Estructura:** un solo `h1`, jerarquía de encabezados sin saltos, todas las
  secciones con `aria-labelledby`, `lang="es"`.
- **Consola limpia**, sin errores ni avisos.
- **Peso real de la página completa en móvil: 74 KB** (66 KB de carga inicial
  con gzip, más 8 KB de la foto al hacer scroll). El objetivo era 500 KB.

---

## 9. Lo que falta o está inconsistente en el brochure

**Hay que resolverlo antes de publicar:**

1. **Los correos.** El brochure trae tres variantes: `felipe.arriaga@…co`,
   `felipe.arriaga@…com` y `hector.Arriaga@…com` con mayúscula suelta. En el
   sitio quedaron todos en `.co` y en minúsculas, provisionalmente.
2. **La dirección del sitio.** Se usó `https://www.arriagaandrade.co/` en el
   `canonical`, en las etiquetas de Open Graph y en el `sitemap.xml`. Si el
   dominio final es otro, hay que corregirlo en esos tres lugares.

**Falta información que las cuatro referencias sí publican:**

3. **Dirección física.** Ninguna de las cuatro firmas de referencia omite la
   dirección de su oficina, y es de las cosas que más confianza dan. El
   brochure no la trae. Sin ella, la ficha para buscadores queda con ciudad y
   país pero sin `address`.
4. **Razón social y NIT.** No aparecen. Es habitual ponerlos en el pie.
5. **Horario de atención.**
6. **Perfil de LinkedIn de la firma o de los socios**, si existe.

**Afirmaciones que conviene verificar antes de publicar:**

7. **«Más de 50 años de experiencia»** de Héctor Arriaga Díaz. Está en el
   brochure y se mantuvo tal cual, pero es una afirmación verificable y en
   publicidad de servicios jurídicos conviene que la firma la confirme.
8. **Bogotá.** El brochure nunca dice la ciudad. Se puso «Bogotá, Colombia» en
   el pie y en la ficha para buscadores porque así se indicó en el encargo.

**Decisiones que quedan pendientes de su visto bueno:**

9. La **barra inferior de móvil**: encenderla o borrarla.
10. Si en algún momento se añade **formulario**, hay que redactar y enlazar la
    política de tratamiento de datos (Ley 1581 de 2012).

---

## 10. Respuesta a la auditoría externa (4/9/26)

La auditoría se hizo sobre **una impresión en PDF del sitio**, y eso explica
tres de sus cuatro hallazgos «bloqueantes».

### La causa raíz

Los navegadores **no imprimen fondos de color** salvo que se marque esa casilla.
El sitio tiene tres secciones a sangre con fondo `#1A1D22` y texto `#F1EEE7`. Sin
fondo, ese texto queda hueso sobre papel blanco: **1.06:1**, invisible.

De ahí salieron, en cadena, estos tres diagnósticos:

| Lo que reportó la auditoría | Lo que pasa de verdad |
|---|---|
| «Titulares en gris claro sobre blanco, por debajo de AA» | Medido en el navegador: **no hay un solo titular gris**. Son `#1A1D22` sobre claro (14.6–16.6:1) o `#F1EEE7` sobre `#1A1D22` (14.6:1). |
| «La web es blanca de arriba a abajo, se perdió la identidad del brochure» | Hay **tres secciones negras a sangre**: portada, fuero sindical y contacto. La recomendación de «hero oscuro como el brochure» ya estaba implementada. |
| «Las dos imágenes son manchas grises irreconocibles» | Son fotografías oscuras sobre fondo negro. Impresas sin ese fondo, quedan como manchas. |

**Corregido de todos modos:** el sitio ahora trae hoja de estilo de impresión
(apartado 19 de `styles.css`). Al imprimir, las superficies oscuras se invierten
solas a negro sobre blanco, se ocultan el menú, la foto de portada y los enlaces
que en papel no sirven, se oscurecen los filetes, se oculta el monograma —que es
hueso sobre transparente y desaparecería— y ningún bloque se parte entre hojas.
El sitio ya no depende de que quien lo imprima marque la casilla correcta.

### El menú: falso entonces, cierto ahora

La auditoría reportó que el logotipo y el primer ítem colisionaban
(`ARRIAGA ANDRADELA FIRMA`) y lo dio por confirmado con el texto extraído del
PDF. Esa concatenación es lo que produce cualquier extractor de PDF entre dos
elementos flex contiguos: **es prueba de cómo se extrajo el texto, no de
colisión**. Medido a 992, 1024, 1120, 1280 y 1440 px, la versión auditada no
tenía solapamiento: 37 px de separación y barra de 73 px en una sola línea.

**Pero al añadir «Casación» como sexta entrada, sí se rompió.** A 992 px «La
firma» y «Fuero sindical» se partían en dos líneas y chocaban con la marca. Se
corrigió con `white-space: nowrap` en los enlaces y subiendo el punto de corte
del menú de 62rem a **70rem (1120 px)**, que es el ancho medido que necesitan las
seis entradas más la marca y «Contacto». Por debajo de eso la cabecera se queda
con la marca y «Contacto».

### Hallazgos de contenido: aplicados

- **Los 50 años de casación** salieron de la biografía de Héctor y subieron a la
  primera pantalla, como credencial con filete propio y a color pleno.
- **El mensaje clave del brochure** —«La gestión laboral no debe reaccionar ante
  el conflicto: debe anticiparlo, documentarlo y conducirlo estratégicamente»—
  ahora abre Metodología.
- **Seguridad social** pasó al título del quinto servicio, para que la promesa
  del descriptor tenga respaldo en la lista.
- **La audiencia** (gerencias, áreas jurídicas, talento humano) se movió al hero.
- **Casación tiene sección propia**, junto al fuero sindical, en vez de ser un
  apéndice de Socios.
- **Llamado a la acción repetido** al final de Servicios y de Fuero sindical.
- **El pie** repite teléfonos y correos, con los huecos marcados para dirección,
  razón social, NIT y LinkedIn. El año va como `© 2026 …`.
- **Los correos llevan asunto preescrito**: «Consulta laboral — sitio web».
- **«SOCIO» en versalitas** desapareció: era redundante bajo un título «Socios» y
  era justo el tic que habíamos quedado en evitar.
- **«Hablar con la firma» → «Hable con nosotros»**, para sostener una sola
  persona: nosotros la firma, usted el lector.
- **«Instrumentos»** ya no falta en el menú: la sección se movió justo detrás de
  Servicios y se lee como continuación de ese bloque.

### Hallazgos que no se aplicaron, y por qué

- **La reforma laboral.** Es el mejor hallazgo comercial de la auditoría y hay
  que hacerlo. Pero la auditoría trae fechas, porcentajes y umbrales concretos
  que nosotros no podemos verificar. Publicar contenido normativo sin firma
  profesional en el sitio de un abogado es exactamente el riesgo que este
  encargo prohibía desde el principio. **Lo tienen que redactar o validar los
  socios, con fecha visible.**
- **El origen del nombre de la firma.** La auditoría afirma un vínculo con una
  figura histórica del derecho laboral colombiano. No podemos verificarlo con el
  material que tenemos y no va al sitio hasta que la firma lo confirme por
  escrito. La auditoría misma lo plantea como pregunta, no como dato, y así queda.
- **Jerarquía plana.** Cada sección tiene forma distinta —dos columnas, filas
  anchas, negro con foto en columna alta, rejilla 2×2, cinco columnas numeradas—
  y eso se comprueba en pantalla. En una impresión sin fondos, esa variación
  desaparece; de ahí la impresión de planitud.
- **Política de datos.** Sin formulario no hay tratamiento de datos que declarar
  bajo la Ley 1581. Queda pendiente para el momento en que se añada uno.
- **Metodología en cinco columnas en celular.** Verificado: por debajo de 58rem
  se apila en una sola columna. No hay tiras ilegibles.

### Verificación después de los cambios

Sin scroll horizontal a 360, 430, 992, 1120 y 1440 px. Ningún enlace por debajo
de 44 px. Un solo `h1`, jerarquía de encabezados sin saltos. Consola limpia.
