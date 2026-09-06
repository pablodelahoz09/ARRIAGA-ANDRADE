# Respuesta al informe estratégico del cliente

Documento previo a la ejecución. Cuatro entregas: mapa de la fase 1,
contradicciones, contenido que solo puede escribir el cliente, y recomendación
sobre fases. Al final, las cuestiones técnicas del despliegue y las preguntas
que necesito resueltas.

Cómo leí el informe: el `.pages` no traía vista previa en PDF, así que
descomprimí los 697 archivos `.iwa` (Snappy con el encuadre propio de iWork) y
extraje el texto. Leí las quince secciones, incluidas las tablas de corrección
de copy, el mapa de palabras clave, el benchmark y la matriz de prioridades.

---

## 1. Mapa de páginas para la fase 1

Doce URLs. La columna que importa es la última: **de las doce, solo cuatro
pueden publicarse hoy con contenido real.**

| URL | Qué lleva | De dónde sale | Estado |
|---|---|---|---|
| `/` | Hero corregido, eje de marca, las seis áreas resumidas con enlace, riesgos frecuentes, metodología, síntesis de socios, cobertura, contacto | Lo construido + las correcciones del informe | **Listo** |
| `/servicios/` | Hub: las seis áreas con la descripción del informe | Informe §3.3, literal | **Listo** |
| `/socios/hector-arriaga-diaz/` | Trayectoria completa | Ya redactada y aprobada en contenido v2 | **Listo, sujeto a validación documental** |
| `/socios/felipe-arriaga-calle/` | Trayectoria completa | Ya redactada y aprobada en contenido v2 | **Listo, sujeto a validación documental** |
| `/contacto/` | Datos, formulario B2B | Datos existentes, en el orden corregido | **Bloqueado**: dominio de correo sin definir |
| `/la-firma/` | Historia, enfoque y diferencial | Brochure aporta el enfoque; **la historia no existe en ningún insumo** | Parcial |
| `/servicios/levantamiento-fuero-sindical/` | Situación empresarial, cinco etapas, experiencia, preguntas frecuentes | Brochure aporta los cuatro pasos; el informe aporta la estructura de cinco etapas | Parcial: falta la redacción moderada y las preguntas frecuentes |
| `/servicios/casacion-laboral/` | Destinatarios, viabilidad, demanda, oposición, segunda opinión, preguntas frecuentes | Brochure e informe aportan el esqueleto | Parcial: falta el desarrollo técnico |
| `/servicios/auditoria-laboral-colombia/` | Diagnóstico Ejecutivo de Cumplimiento Laboral | Informe §3.6 aporta el proceso | Parcial: falta duración, costo y entregable |
| `/politica-tratamiento-datos/` | — | — | **Bloqueado**: solo un abogado |
| `/aviso-privacidad/` | — | — | **Bloqueado**: solo un abogado |
| `/terminos-uso/` | — | — | **Bloqueado**: solo un abogado |

### Navegación

El informe no resuelve cómo se recorren veinte URLs en una pantalla estrecha, y
es la parte que más fácil se estropea. Propongo:

- **Escritorio:** seis entradas, las mismas de hoy — La firma · Servicios ·
  Fuero sindical · Casación · Socios — con Contacto aparte. Ya está medido que
  caben desde 1120 px.
- **Móvil:** marca y Contacto, nada más, como hoy. El índice completo vive en
  el pie, que en un sitio multipágina pasa a ser el mapa real del sitio.
- **`Servicios` es una página, no un desplegable.** Un menú de tres niveles en
  móvil es exactamente lo que hay que evitar. Las áreas se recorren desde el
  hub, no desde la barra.

---

## 2. Contradicciones entre el informe y lo construido

Todas se resuelven a favor del informe, salvo las tres marcadas.

### Copy, directas

| Construido hoy | Informe | Acción |
|---|---|---|
| «Derecho laboral estratégico para empresas» | «Derecho laboral empresarial para decisiones complejas» | Cambiar |
| Descriptor «Derecho laboral · Derecho colectivo · Casación» | «Derecho laboral **empresarial** · Derecho colectivo · Casación» | Cambiar |
| Subtítulo «Prevención, estrategia y defensa en derecho laboral individual, colectivo y seguridad social…» | «Asesoramos y representamos a empleadores en decisiones laborales sensibles, relaciones colectivas, litigio, seguridad social y casación.» | Cambiar |
| «Cuándo conviene llamarnos» | «Cuándo podemos ser especialmente útiles» | Cambiar |
| «decisiones ejecutables, **medibles** y defendibles» | «…**documentadas** y defendibles» | Cambiar |
| «Los procesos se siguen donde estén radicados» | «Asesoría y representación en asuntos laborales en todo el territorio nacional» | Cambiar |
| «…cambia la lectura del caso» | Explicar qué aporta la experiencia, no aludir a ella | Reescribir |
| «Diagnóstico laboral inicial» | «Diagnóstico Ejecutivo de Cumplimiento Laboral», con proceso definido | Cambiar y desarrollar |
| Un solo llamado a la acción | Siete, uno por contexto | Cambiar |

### Copy, con una advertencia

**El verbo del hero.** El informe aprueba «Un socio fue magistrado… El otro
dirigió…» pero corrige el cargo: Felipe fue **subgerente** de Derecho Laboral,
no director. Es un error que introduje yo. Además, **«una de las mayores
operaciones de retail del país» es en sí misma una afirmación cuantitativa sin
respaldo**, justo del tipo que el informe prohíbe en su cierre. Propongo
nombrar la empresa, que es un hecho verificable, en vez de calificar su tamaño:

> Un socio fue magistrado de la Sala Laboral del Tribunal Superior de Bogotá.
> El otro fue subgerente de Derecho Laboral en Cencosud Colombia.

**El texto del fuero sindical.** El informe pide moderarlo. La frase que hoy
está en el sitio —«La protección sindical no impide la actuación empresarial
cuando existe justa causa acreditada y se acude al juez competente»— **es del
brochure corporativo, es decir, del propio cliente.** El informe manda sobre el
brochure según la jerarquía acordada, así que la cambio; pero conviene que
quien redactó el brochure sepa que se está rectificando una frase suya.

### Estructura

**Las seis áreas no coinciden.** No es que falte una: están agrupadas de otra
manera, y aparece una nueva.

| Construido hoy | Informe |
|---|---|
| Contratación, remuneración, disciplinarias y terminaciones | Asesoría laboral empresarial y decisiones sensibles |
| Cumplimiento, auditoría y documentos | Cumplimiento, auditoría y gestión preventiva |
| Relaciones colectivas y asuntos sindicales | Relaciones laborales colectivas |
| Defensa judicial y representación | Litigio laboral y defensa empresarial |
| Casación laboral | Casación laboral y litigios de alta complejidad |
| Seguridad social | **Seguridad social, SG-SST y riesgos laborales** |

**SG-SST entra.** Estaba en la lista de pendientes de contenido v2 —«¿siguen
vigentes estos tres servicios del sitio anterior?»— y el informe lo responde:
sí. De los otros dos que quedaron en duda, autorizaciones para trabajadores
extranjeros y manejo integral de departamentos de recursos humanos, **el
informe no dice nada. Siguen sin resolver.**

También aparecen dos conceptos nuevos dentro de las áreas: **reorganizaciones**
en la primera y **estabilidad laboral reforzada** con rango propio.

**De una página a un sitio multipágina.** Es el cambio de fondo y va abajo, en
la recomendación.

### Una discrepancia que no puedo arbitrar

El listado de URLs dentro del `.pages` dice `/firma/`. El resumen que me pasaste
dice `/la-firma/`. Son dos URLs distintas y una vez publicada no se cambia sin
redirección. **Necesito que el cliente confirme cuál.**

### Puntos del informe que ya están resueltos

El informe se escribió sobre una versión desplegada. Tres de sus observaciones
ya no aplican, y lo digo con la medición para que se pueda comprobar:

- **El menú no se solapa.** Se rompió de verdad al añadir «Casación» como sexta
  entrada; se corrigió con `white-space: nowrap` y subiendo el punto de corte de
  62 rem a 70 rem. A 1120 px quedan 77 px de aire a la izquierda de la marca y
  44 px a la derecha del menú, en una barra de una sola línea.
- **Los titulares sí alcanzan AA.** Auditando todos los nodos de texto de la
  página, el peor contraste es **7.43:1**; el mínimo AA es 4.5. No hay ningún
  titular gris: son `#1A1D22` sobre claro o `#F1EEE7` sobre `#1A1D22`. El
  diagnóstico venía de un PDF impreso sin fondos de color, donde el texto hueso
  cae a 1.06:1. Se añadió hoja de estilo de impresión para que no se repita.
- **Las imágenes ya no son manchas.** Se rehicieron los recortes midiendo la
  posición de cada figura y se unificaron: las cuatro de contenido tienen ahora
  el mismo ancho, la misma proporción 4:5 y el mismo borde izquierdo.

Conviene confirmar que el cliente estaba viendo la versión del 5 de septiembre
y no una anterior.

---

## 3. Contenido que solo puede escribir el cliente

Nada de esto lo puede redactar un modelo de lenguaje: son afirmaciones
jurídicas firmadas por una firma de abogados, o datos que solo ellos tienen.

### Bloquea el lanzamiento

1. **Dominio y correos definitivos.** Siguen tres variantes en circulación.
2. **Teléfonos: cuál es de cada socio y cuáles tienen WhatsApp.**
3. **Razón social, NIT y dirección.**
4. **Validación documental de las credenciales de los socios**, una por una:
   año de inicio de ejercicio, años en casación, magistratura, conjuez, lista de
   árbitros, Dirección Regional del Trabajo, Secretaría de la Fiscalía Cuarta,
   cátedra en el Rosario, Esguerra; y de Felipe: fechas y cargo exacto en
   Cencosud, títulos, número de negociaciones colectivas.
5. **Los tres documentos legales**: política de tratamiento de datos, aviso de
   privacidad y términos de uso.

### Bloquea páginas concretas

6. **Historia de la firma**, para `/la-firma/`. No existe en ningún insumo.
7. **Redacción moderada del fuero sindical**: la formulación sobre medida,
   causal, procedimiento, prueba y autorización judicial según el caso. Es una
   posición jurídica.
8. **Preguntas frecuentes de fuero sindical y de casación.** El informe las pide
   y son el contenido con más valor de posicionamiento del proyecto.
9. **Desarrollo técnico de la página de casación**, incluido el «contenido
   actualizado al Código Procesal del Trabajo vigente» que menciona el informe.
10. **Definición del Diagnóstico Ejecutivo**: duración, costo, qué recibe la
    empresa y en cuánto responde la firma.
11. **Las preguntas del cuestionario**, que son cuasi jurídicas.
12. **El párrafo sobre la Ley 2466 de 2025**, que sigue escrito pero sin
    publicar, entre comentarios, esperando visto bueno desde contenido v2.
13. **Sectores atendidos**, sin nombrar clientes.
14. **Los dos retratos de socios**, o ninguno.
15. **Si habrá Perspectivas con regularidad**, y quién escribe.

### Sin resolver, del informe

16. ¿Autorizaciones para trabajadores extranjeros y manejo integral de
    departamentos de recursos humanos siguen vigentes? El informe los omite.
17. `/firma/` o `/la-firma/`.

---

## 4. Recomendación sobre fases

**Estoy de acuerdo con la arquitectura del informe y en desacuerdo con
construirla de una vez.** El argumento no es de esfuerzo, es de riesgo.

### El razonamiento

El informe tiene razón en el SEO: una sola URL no puede posicionar a la vez para
«levantamiento de fuero sindical», «casación laboral», «auditoría laboral» y
«reglamento interno de trabajo». Son intenciones de búsqueda distintas y
necesitan páginas distintas. Eso no se discute.

Pero **el cuello de botella no es el SEO ni el diseño: es texto técnico que solo
pueden escribir dos abogados, uno de ellos litigando.** Cada landing necesita
entre 600 y 900 palabras defendibles más sus preguntas frecuentes. Son ocho o
diez piezas. Eso son meses, no semanas.

Y aquí está el riesgo que el informe no menciona: **en el sitio de una firma de
abogados, una página delgada no es solo un problema de posicionamiento, es un
problema de credibilidad ante el lector exacto al que se apunta.** Un director
jurídico que abre «Litigio laboral para empresas» y encuentra cuatro frases
concluye que la firma no tiene mucho que decir sobre litigio. Veinte páginas
delgadas dañan más que una página buena. La ganancia de SEO llega en meses; el
daño de credibilidad, en el primer clic.

De ahí la regla que propongo: **una URL se crea el día que puede sostenerse
sola. Antes no existe, y no está ni en el menú ni en el sitemap.**

### Las fases

**Fase 1A — esta semana, sin depender de nadie.**
`/` · `/servicios/` · `/socios/hector-arriaga-diaz/` · `/socios/felipe-arriaga-calle/`
Más todas las correcciones de copy del informe, el orden de correos y teléfonos
con nombre, los siete llamados a la acción y el reagrupamiento en las seis áreas
del informe. Contacto sigue como sección de la home hasta que haya dominio.

Cuatro URLs, todas con contenido real y ya aprobado. Las de socios son además
la mayor ganancia de credibilidad por página del proyecto: hoy la trayectoria de
Héctor está enterrada y es el activo más fuerte que tiene la firma.

**Fase 1B — cuando los socios entreguen texto.**
`/servicios/levantamiento-fuero-sindical/` · `/servicios/casacion-laboral/` ·
`/servicios/auditoria-laboral-colombia/`
Las tres que cargan el diferencial y las búsquedas que de verdad importan. Van
juntas porque las tres dependen del mismo cuello de botella.

**Fase 1C — cuando existan los documentos legales.**
Las tres páginas legales y `/contacto/` con formulario. El formulario no puede
ir antes que la política de datos: recogería datos sin base publicada.

**Fase 2 — el resto de las áreas de práctica.** A medida que haya contenido.

**Fase 3 — Perspectivas.** Solo con compromiso real de publicación. Un hub con
la última entrada de hace dos años hace más daño que no tenerlo, y el propio
informe lo advierte en el benchmark: «no intentar sostener más formatos de
contenido de los que puedan mantenerse».

### Lo que no recomiendo

Crear las veinte URLs con contenido de relleno y rellenarlas después. Es
tentador porque el mapa queda completo el primer día, pero deja a la vista
justo lo que se quiere evitar.

---

## 5. Cuestiones técnicas del despliegue

### 5.1 Urgente: la vista previa es indexable y su canonical no existe

Comprobado hoy:

- `pablodelahoz09.github.io/ARRIAGA-ANDRADE/robots.txt` dice `Allow: /`.
- La página declara `canonical` a `https://www.arriagaandrade.co/`, **que no
  resuelve**.
- `arriagaandradelaboralistas.com` sigue respondiendo 200.

Es decir: Google puede indexar la vista previa, el canonical que debería
redirigir la autoridad apunta a un host inexistente, y hay dos propiedades vivas
de la misma firma. **Propongo poner `noindex` en la vista previa hasta que el
dominio esté activo.** Es una línea y evita tener que desindexar después.

### 5.2 Rutas bajo subdirectorio

GitHub Pages sirve el sitio en `/ARRIAGA-ANDRADE/`. Con URLs de directorio
(`/servicios/casacion-laboral/`) las rutas absolutas a los recursos se rompen al
cambiar de base. Solución sin dependencias: **rutas relativas calculadas por
profundidad** (`../../styles.css`). Funcionan igual bajo el subdirectorio de
GitHub y bajo el dominio propio, sin `<base>` y sin paso de compilación.

### 5.3 Las redirecciones 301 no se hacen aquí

GitHub Pages no redirige del lado del servidor. Las 301 desde
`arriagaandradelaboralistas.com` se configuran **en GoDaddy o en el DNS del
dominio viejo**. Consecuencia operativa: **no se puede apagar GoDaddy todavía**,
y hay que mantener el pago hasta que las redirecciones estén puestas y Google
las haya procesado.

Para el dominio propio hacen falta un archivo `CNAME` en el repositorio y los
registros DNS apuntando a GitHub.

### 5.4 El formulario necesita un tercero, y eso tiene consecuencias

Sin servidor no hay backend. Un formulario obliga a un servicio externo
(Formspree, Basin, Netlify Forms). **Eso convierte a ese proveedor en encargado
del tratamiento de datos personales**, y hay que nombrarlo en la política de la
firma antes de recoger un solo dato.

El cuestionario del Diagnóstico agrava el punto: recoge presencia sindical,
estado de procesos disciplinarios y datos de SG-SST. Es información comercial
sensible de la empresa que consulta. **No lo resuelvo por mi cuenta: es una
decisión de la firma y de su política de datos.**

---

## 6. Lo que necesito para arrancar la fase 1A

Solo dos cosas bloquean la fase 1A. Todo lo demás puede seguir en paralelo.

1. **Visto bueno a la formulación del hero** con el cargo corregido y sin el
   superlativo sobre el tamaño de Cencosud.
2. **`/firma/` o `/la-firma/`.**

Y una confirmación: que el cliente revisó la versión del 5 de septiembre, para
saber si las tres observaciones sobre menú, contraste e imágenes seguían vivas
cuando escribió el informe o venían de una versión anterior.
