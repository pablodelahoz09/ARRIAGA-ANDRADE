# Sitio web de Arriaga Andrade

Manual para editar y publicar el sitio. **No hace falta saber programar.**
Todo lo que se publica está dentro de la carpeta `sitio/`.

---

## 1. Qué hay dentro de `sitio/`

| Archivo o carpeta | Para qué sirve |
|---|---|
| `index.html` | **Todos los textos del sitio.** Es el archivo que se edita casi siempre. |
| `styles.css` | El diseño: colores, tamaños, espacios. No hace falta tocarlo. |
| `script.js` | Un par de detalles menores (subrayar el menú, el año del pie). |
| `fonts/` | Las tipografías. Van dentro del sitio, no se piden a Google. |
| `img/` | El monograma, las fotos, el icono y la imagen que se ve al compartir. |
| `sitemap.xml`, `robots.txt` | Para que Google encuentre el sitio. |

---

## 2. Cómo abrir el archivo de textos

`index.html` se abre con cualquier editor de texto plano:

- **Mac:** clic derecho sobre el archivo → *Abrir con* → *TextEdit*.
- **Windows:** clic derecho → *Abrir con* → *Bloc de notas*.

Verá el texto del sitio mezclado con etiquetas entre `< >`. **Cambie solo lo que
está entre las etiquetas, nunca las etiquetas mismas.**

Así:

```html
<h3>Casación laboral: demandas y oposiciones</h3>
```

Se puede cambiar a:

```html
<h3>Casación laboral ante la Corte Suprema</h3>
```

Pero `<h3>` y `</h3>` se quedan como están.

Guarde el archivo y vuelva a subirlo (paso 6).

---

## 3. Cambiar un teléfono

Los teléfonos están en **tres lugares** del archivo. Los tres están señalados
con un comentario que dice `DATOS DE CONTACTO`. Hay que cambiarlos en los tres:
la sección de contacto, el pie de página y la ficha para buscadores.

**Lugar 1 — la sección de contacto.** Busque este bloque:

```html
<a class="datos__principal" href="tel:+573144116744">+57 314 411 6744</a>
<a class="datos__secundario" href="https://wa.me/573144116744">WhatsApp</a>
```

Hay que cambiar **tres cosas**, y las tres tienen que ser el mismo número:

1. `tel:+573144116744` → el número **sin espacios**, con `+57` adelante.
2. `+57 314 411 6744` → el número **como quiere que se vea**, con espacios.
3. `wa.me/573144116744` → el número **sin espacios y sin el `+`**.

**Lugar 2 — el pie de página.** Cerca del final, dentro de `<footer>`, los dos
teléfonos se repiten como enlaces. Ahí solo hay que cambiar dos cosas: el texto
visible y el `href="tel:..."`.

**Lugar 3 — la ficha para buscadores.** Al final del archivo hay un bloque que
empieza con `"@type": "LegalService"`. Ahí aparece:

```json
"telephone": ["+573144116744", "+573153312222"],
```

Cambie el número también ahí, sin espacios y con `+57`.

> Si un número deja de tener WhatsApp, borre la línea completa que dice
> `datos__secundario`.

---

## 4. Cambiar un correo

Igual que los teléfonos: están en los mismos **tres lugares**.

```html
<a class="datos__correo" href="mailto:felipe.arriaga@arriagaandrade.co?subject=Consulta%20laboral%20%E2%80%94%20sitio%20web">felipe.arriaga@arriagaandrade.co</a>
```

El correo aparece **dos veces en la misma línea** y las dos tienen que decir lo
mismo: una detrás de `mailto:` y otra entre `>` y `<`.

Lo que va después de `?subject=` es el **asunto que el sitio escribe solo** en el
correo del visitante: «Consulta laboral — sitio web». Sirve para que las consultas
del sitio lleguen identificadas. Si quieren otro asunto, cámbienlo, pero los
espacios se escriben `%20`.

Y en la ficha del final:

```json
"email": ["felipe.arriaga@arriagaandrade.co", "hector.arriaga@arriagaandrade.co"],
```

> **⚠ Pendiente.** El brochure trae los correos con dos dominios distintos
> (`.co` y `.com`) y una mayúscula suelta (`hector.Arriaga@`). En el sitio
> quedaron provisionalmente **todos en `.co` y en minúsculas**. Hay que
> confirmarlo con la firma antes de publicar.

---

## 5. Cambiar una foto

Hay dos fotos y las dos son de manos y documentos, sin rostros.

- `img/fuero-764.jpg` y `img/fuero-480.jpg` — la foto de la sección de fuero
  sindical. Son **la misma imagen en dos tamaños**; hay que reemplazar las dos.
- `img/fuero-764.webp` y `img/fuero-480.webp` — la misma foto en un formato más
  liviano. Si no sabe generarlas, bórrelas: el sitio usa los `.jpg` solo.
- `img/hero-610.jpg` y `.webp` — la foto de la portada. Solo se ve en
  computador; en celular no se descarga siquiera.

La foto nueva debe:

- ser horizontal, de **764 × 573 píxeles** (la de fuero) o vertical de
  **610 × 980** (la de portada);
- estar en blanco y negro y ser oscura;
- pesar menos de 60 KB;
- llamarse **exactamente igual** que la que reemplaza.

> Si cambia el tamaño de la foto de fuero, avise: hay dos números
> (`width="764" height="573"`) en `index.html` que hay que actualizar para que
> la página no dé un salto al cargar.

---

## 6. Cómo publicar el sitio

El sitio no necesita servidor especial, ni base de datos, ni programas.
**Es una carpeta que se sube y ya.**

### Opción A — Netlify (gratis, la más sencilla)

1. Entre a `app.netlify.com/drop`.
2. Arrastre la carpeta `sitio` completa a la ventana.
3. En un minuto le dan una dirección temporal.
4. En *Domain settings* conecte el dominio `arriagaandrade.co`.

### Opción B — el hosting que ya tenga la firma

1. Pida los datos de FTP a quien administre el dominio.
2. Con un programa como FileZilla o Cyberduck, copie **el contenido** de la
   carpeta `sitio` (no la carpeta, su contenido) dentro de `public_html`
   o `www`.

### Después de publicar, revise que la dirección quede bien escrita

Si el dominio final no es exactamente `https://www.arriagaandrade.co/`, hay que
corregirlo en tres sitios:

- `index.html`, en las líneas que dicen `canonical` y `og:` (arriba del todo);
- `sitemap.xml`;
- `robots.txt`.

---

## 7. La barra inferior de «Llamar / WhatsApp»

Está construida pero **apagada**, para que ustedes decidan.

- **Para encenderla:** en `index.html`, cambie `<body>` por
  `<body class="con-barra">`.
- **Para dejarla apagada y limpia:** borre el bloque `<nav class="barra">` de
  `index.html` y el apartado 17 de `styles.css`.

---

## 8. Cosas que este sitio no tiene, a propósito

- **No hay formulario de contacto.** El teléfono y el correo convierten mejor en
  un sitio de abogados, y un formulario obligaría a publicar una política de
  tratamiento de datos (Ley 1581 de 2012). Si más adelante quieren formulario,
  hay que añadir esa política.
- **No hay cookies, ni analítica, ni chat, ni rastreadores.** El sitio no
  guarda ningún dato de quien lo visita, así que no necesita aviso de cookies.
- **No hay modo oscuro con interruptor**, ni animaciones al hacer scroll.
- **No se inventó ningún dato**: ni clientes, ni cifras, ni premios, ni año de
  fundación. Todo el texto sale del brochure.

---

## 9. Ver el sitio en su computador antes de publicarlo

Abra la Terminal, escriba esto y presione Enter:

```bash
cd "/Users/pablodelahoz/Desktop/ARRIAGA ANDRADE" && python3 -m http.server 4173 --directory sitio
```

Luego abra `http://localhost:4173` en el navegador.
Para apagarlo, vuelva a la Terminal y presione `Control + C`.

---

## 10. Lo que falta pedirle a la firma

Cada punto tiene ya su lugar marcado con un comentario dentro de `index.html`.

**Bloquea la publicación**

1. **Dominio de los correos.** Hay **tres** variantes en circulación:
   `felipe.arriaga@arriagaandrade.com` (brochure, lámina 8),
   `felipe.arriaga@arriagaandrade.co` (brochure, lámina 9) y
   `f.arriaga@arriagaandradelaboralistas.com` (sitio anterior).
   Hay que saber cuál está activo. Un correo que rebota en la página de
   contacto de un abogado es la peor falla posible. Provisionalmente están
   los `.co`.
2. **Qué pasa con el dominio viejo.** Si `arriagaandradelaboralistas.com` se
   apaga sin redirección 301 al nuevo, se pierde lo que tenga indexado y
   cualquier enlace que circule por ahí.
3. **Dirección definitiva del sitio nuevo**, para `canonical`, Open Graph y
   `sitemap.xml`.
4. **De quién es cada teléfono.** Y si el segundo tiene WhatsApp: hoy solo
   lleva WhatsApp el primero, que es el único confirmado porque el sitio
   anterior lo enlazaba.
5. **Visto bueno de un socio al párrafo sobre la Ley 2466 de 2025.** Está
   escrito pero **sin publicar**, entre comentarios, en la sección de
   instrumentos internos. Es una afirmación jurídica: la tiene que validar un
   abogado antes de que aparezca. Cuando la validen, se borran las dos líneas
   de comentario que la rodean.

**Decisiones de contenido**

6. **Público objetivo.** El brochure habla de empresas, gerencias y áreas
   jurídicas; el sitio anterior hablaba de pymes de 10 a 200 empleados. No es
   el mismo cliente. El sitio hoy sigue el brochure. Confírmelo.
7. **Los porcentajes de éxito del sitio anterior** (más del 90 % en
   contestaciones, más del 95 % en levantamiento de fuero) **no se pasaron**.
   No son verificables por el lector y bordean la promesa de resultado, que
   el régimen disciplinario del abogado trata con severidad. Si la firma
   quiere conservarlos, tiene que poder sustentarlos y acotarlos: universo,
   periodo y quién los mide.
8. **Tres servicios del sitio anterior quedaron fuera** a la espera de
   confirmación: autorizaciones para trabajadores extranjeros, sistemas de
   gestión de seguridad y salud en el trabajo, y manejo integral de
   departamentos de recursos humanos. ¿Siguen vigentes?
9. **Qué es el diagnóstico laboral inicial:** duración, costo, qué recibe la
   empresa al final y en cuánto responde la firma.
10. **Confirmar que Felipe ya no está en Cencosud.** El texto dice «entre 2013
    y 2026» y 2026 es este año.

**Mejora mucho el sitio**

11. **Retratos de los dos socios.** Blanco y negro, mismo fondo, misma luz,
    mismo encuadre a la altura del pecho. **Los dos o ninguno:** un socio con
    foto y el otro sin ella se lee como jerarquía involuntaria.
12. **Dirección de la oficina**, razón social, NIT y LinkedIn para el pie.
13. **Sectores o tipos de empresa** que atiende, sin nombrar clientes.
14. **¿Notas periódicas o preguntas frecuentes?** Un blog con la última
    entrada de hace dos años hace más daño que no tenerlo.
15. **¿Versión en inglés?**

**Decisiones pendientes de diseño**

16. La **barra inferior de móvil**: encenderla o borrarla.
17. **Las fotografías.** Ver el punto 13 de este documento.

## 11. Nota sobre imprimir el sitio

Los navegadores **no imprimen los fondos de color** salvo que uno marque esa
casilla en el diálogo de impresión. Como este sitio tiene tres secciones de fondo
negro con texto claro, al imprimirlo sin fondos ese texto saldría blanco sobre
papel blanco, es decir, invisible.

El sitio ya trae una hoja de estilo de impresión que resuelve esto: al imprimir,
las secciones oscuras se pasan solas a texto negro sobre blanco, se ocultan el
menú y los enlaces que en papel no sirven, y ningún bloque se parte entre dos
hojas.

**Si alguien les manda un PDF del sitio que se ve casi en blanco, es que lo
imprimió con una versión anterior o con una herramienta que ignora la hoja de
impresión. No es un defecto del sitio.**

---

## 12. El sitio en GitHub

El proyecto está en **github.com/pablodelahoz09/ARRIAGA-ANDRADE** y se publica
solo cada vez que se sube un cambio.

**Dirección para mostrarle el sitio al cliente:**
`https://pablodelahoz09.github.io/ARRIAGA-ANDRADE/`

Es gratis, va por HTTPS y sirve para que su amigo lo abra desde el celular
antes de comprar hosting. No reemplaza al dominio definitivo.

### Para subir un cambio

Después de editar `index.html` o cualquier archivo de `sitio/`, abra la
Terminal y escriba esto:

```bash
cd "/Users/pablodelahoz/Desktop/ARRIAGA ANDRADE" && git add -A && git commit -m "Cambio de textos" && git push
```

En medio minuto la dirección de arriba ya muestra el cambio. Puede cambiar
«Cambio de textos» por lo que describa mejor lo que hizo.

### Qué no está en GitHub, a propósito

El brochure (`.pptx`) y la carpeta `REFERENCIAS` **no se suben**: el
repositorio es público y ahí están los sitios completos de cuatro firmas
competidoras. Siguen en la carpeta de su computador. La regla está en el
archivo `.gitignore`; si algún día quiere incluirlos, borre esas dos líneas
—y considere volver el repositorio privado primero—.

### Un detalle de la dirección de prueba

Las etiquetas para compartir por WhatsApp apuntan al dominio definitivo
(`arriagaandrade.co`), que todavía no existe. Por eso, al compartir la
dirección de prueba, WhatsApp muestra el título y la descripción pero **no la
imagen**. No es un error: se arregla solo el día que el dominio esté activo.
Si quiere ver también la imagen mientras tanto, cambie en `index.html` la
línea `og:image` por:

```html
<meta property="og:image" content="https://pablodelahoz09.github.io/ARRIAGA-ANDRADE/img/og.jpg">
```

y acuérdese de devolverla al dominio real antes de publicar de verdad.

---

## 13. Las fotografías: qué se revisó y qué falta decidir

### Las once imágenes del sitio anterior no sirven

Se descargaron todas —`1.png` a `9.png`, la del hero y la de Getty— y se
revisaron una por una. Están en la carpeta `imagenes-sitio-anterior/`, **fuera
de lo que se publica**. Conclusión: ninguna es usable.

- **`1.png` a `8.png`** son ocho variaciones de la misma escena: gente en
  traje azul alrededor de una mesa de juntas de madera, con ventanal. Están a
  780 × 520 píxeles, demasiado pequeñas, y son exactamente el género que este
  proyecto descartó desde el principio: «equipo sonriendo en sala de juntas».
- **`9.png`** es un lobby de oficina vacío, también generado por IA.
- **La del hero** es una estatuilla de la balanza de la justicia sobre un
  libro. Es el cliché más previsible del oficio.
- **La de Getty** (`611765652`) es la única fotografía real —tomada con una
  Nikon D810— y precisamente por eso es la que tiene una licencia de terceros
  inequívoca.

Todas están en color y en tonos cálidos, cuando la identidad de la firma es
blanco y negro al carbón. Traerlas sería un retroceso.

### La pregunta de licencias sigue abierta

Las seis fotografías que hoy usa el sitio vienen del brochure y **parecen
generadas por inteligencia artificial**: los documentos tienen texto ilegible
y las manos presentan anomalías. Antes de publicar hay que preguntarle a la
firma de dónde salieron y si tiene licencia propia.

Tres caminos limpios, en orden:

1. **Fotografías reales de los socios y de la oficina.** Es lo mejor por
   razones que van más allá de la licencia.
2. **Banco de imágenes con licencia comprada a nombre de la firma.**
3. **Ninguna fotografía de archivo:** solo tipografía, aire y el monograma.
   Para una firma sobria de dos abogados es una opción digna, y bastante más
   elegante que el archivo genérico.

Si eligen la tercera, quitar las fotos es rápido: se borran los bloques
`<figure>` de `index.html` y el apartado 11b de `styles.css`.

### Si finalmente se usan fotografías

- Blanco y negro real, contraste alto. Nada de virados cálidos.
- Mismo tratamiento en todas.
- Encuadre en el detalle —manos, documentos, el borde de una mesa—, nunca
  personas mirando a cámara.
- Recorte decidido a mano, no escalado automático.
- Nunca más de 200 KB por archivo. Las de hoy no pasan de 16 KB.
