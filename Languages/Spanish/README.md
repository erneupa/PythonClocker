
<h2 align="center">🌐 Otros Idiomas</h2>

<p align="center">
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Spanish">
    🇪🇸 <strong>Español</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/French">
    🇫🇷 <strong>Francés</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Japanese">
    🇯🇵 <strong>Japonés</strong>
  </a>
</p>

<h1 align="center">⏰ PythonClocker</h1>

<p align="center">
  <em>Porque a veces la única forma de aprender Python... es despertando con él.</em>
</p>

<p align="center">
  Esta idea nació cuando un chico de 18 años empezó a estudiar programación.<br>
  Todo iba bien, pero... Python, ese lenguaje interpretado, a veces fácil,<br>
  pero otras veces una auténtica pesadilla.<br><br>
  <strong>¡Aquí tienes la solución!</strong><br>
  Esta extensión del navegador salvará tu asignatura: un despertador que solo puedes parar resolviendo el programa.
</p>

---

<p align="center">
  <a href="https://chromewebstore.google.com/detail/kobehbnioildglecmfabpelnjnemihpn?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/🚀 Demo-PythonClocker-blue?style=for-the-badge" alt="Demo">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/wiki">
    <img src="https://img.shields.io/badge/📘 Wiki-Documentación-green?style=for-the-badge" alt="Wiki">
  </a>
</p>

## Significado de la extensión
Las extensiones son pequeños programas que personalizan la experiencia de navegación. Permiten a los usuarios adaptar la funcionalidad del navegador a sus necesidades o preferencias.

## Editar la extensión

1. En el archivo `server.js`, cambia la `TU-APYKEY`
2. En el archivo `background.js`, cambia la `TU-APYKEY`
3. La clave API se encuentra en los archivos de Moodle.

## ¿Cómo instalar la extensión?

1. [HAZ CLIC AQUÍ](https://github.com/erneupa/PythonClocker/tree/main/PythonClocker) para descargar la extensión.
2. Ve a este enlace `chrome://extensions/`
3. Activa esta opción ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. Añade la extensión aquí ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. Instala un servidor local.

## ¿Cómo instalar un servidor local?
### Descarga node.js
    1. Ve a esta [url](https://nodejs.org/en)
    2. Descarga e instala la app.
1. Abre la consola de Windows.
2. Accede a la carpeta de la extensión mediante la consola.
3. Copia y pega este código:```npm install node-fetch@2```
4. Copia y pega este código: ```npm install express cors```
5. Copia y pega este código: ```node server.js```

**¡PARA USAR LA EXTENSIÓN!**

## Ejemplo de uso.



## PREGUNTAS

### Ciclo de vida del dato (5b)

#### ¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?
Los datos se generan cuando el usuario pone la hora en el reloj o hace una petición a OpenAI. No se guardan de forma permanente, solo se usan mientras la extensión está activa.

#### ¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?
- Se validan las horas y minutos antes de iniciar la cuenta atrás.
- Se maneja correctamente la respuesta de OpenAI para evitar errores en la estructura JSON.
- Se usa `try-catch` en `background.js` para capturar errores en la API.

### Almacenamiento en la nube (5f)

#### Si tu software usa almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad?
- Uso de HTTPS en todas las peticiones a OpenAI.
- No se almacenan datos sensibles.
- Se podría integrar autenticación en futuras versiones.

#### ¿Qué alternativas consideraste y por qué elegiste esta?
Consideré `chrome.storage` o servidor propio, pero preferí memoria para rapidez y simplicidad.

#### ¿Cómo podrías integrar la nube en el futuro?
Con Google Drive o Firebase para guardar historial de preguntas y respuestas.

### Seguridad y regulación (5i)

#### ¿Qué medidas de seguridad implementaste?
- No se guardan datos personales.
- Manejo de errores en `background.js`.
- Restricciones en `manifest.json` para conexiones seguras.

#### ¿Qué normativas podrían afectar (como GDPR)?
Ahora mismo no aplica, pero si se almacenan datos en futuras versiones, se añadirá privacidad.

### Implicación de las THD en negocio y planta (2e)

#### ¿Qué impacto tendría en un negocio o planta?
Útil en educación o empresas para evaluar con preguntas aleatorias. En plantas, puede mostrar recordatorios o tareas.

#### ¿Cómo podría mejorar procesos o decisiones?
Podría automatizar aprendizaje o actuar como recordatorio automático.

#### ¿Qué otros entornos se beneficiarían?
Educación es el principal. Se puede personalizar para tests de programación.

### Mejoras en IT y OT (2f)

#### ¿Cómo puede facilitar integración IT-OT?
Adaptado a empresas, se puede conectar con sistemas de alertas o monitoreo.

#### ¿Qué procesos específicos se beneficiarían?
- Recordatorios automáticos.
- Evaluaciones dinámicas con OpenAI.
- Automatización de tareas temporizadas.

#### ¿Cómo podrías adaptarlo para procesos tecnológicos?
Conexión a Google Calendar o APIs externas para gestión eficiente del tiempo.

### Tecnologías Habilitadoras Digitales (2g)

#### ¿Qué THD has usado o podrías usar?
- OpenAI para preguntas dinámicas.
- API Key para conexión remota.
- `chrome.storage` como opción futura para configuraciones.

#### ¿Cómo mejoran la funcionalidad o alcance?
- OpenAI aporta variedad y dinamismo.
- Un almacenamiento permitiría guardar progreso del usuario.
