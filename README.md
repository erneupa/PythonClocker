Aarón Neupaver Montiel

<h2 align="center">🌐 Other Languages</h2>

<p align="center">
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Spanish">
    🇪🇸 <strong>Spanish</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/French">
    🇫🇷 <strong>French</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/tree/main/Wiki/Japanese">
    🇯🇵 <strong>Japanese</strong>
  </a>
</p>


# PythonClocker

This idea originated when an 18-year-old boy started studying programming. Everything was great, but... Python, that interpreted language, sometimes easy, but other times a complete nightmare.  
So here is your solution!!  
This browser extension will save your subject, an alarm clock that you can only stop by solving the program.

<p align="center">
  <a href="https://chromewebstore.google.com/detail/kobehbnioildglecmfabpelnjnemihpn?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/🚀 Demo-PythonClocker-blue?style=for-the-badge" alt="Demo">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/wiki">
    <img src="https://img.shields.io/badge/📘 Wiki-Documentation-green?style=for-the-badge" alt="Wiki">
  </a>
</p>

## Meaning of extension
Extensions are small software programs that personalize the browsing experience. They allow users to customize the functionality and behavior of the browser to their individual needs or preferences.

## Edit the extension

1. In the file `server.js`, change the `TU-APYKEY`
2. In the file `background.js`, change the `TU-APYKEY`
3. The API key can be found in the Moodle files.

## How to install the extension?

1. [CLICK HERE](https://github.com/erneupa/PythonClocker/blob/main/PYTHONCLOCKER.zip) to download the extension.
2. Go to this link `chrome://extensions/`
3. Enable this feature ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. Add the extension here ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. Install a local server.

## How to install a local server?
### Download node.js.
    1. Go to this [url](https://nodejs.org/en)
    2. Download and install the app.
1. Go to the Windows console.
2. Access the extension folder through the console.
3. Copy and paste this code:```npm install node-fetch@2```
4. Copy and paste this code: ```npm install express cors```
5. Copy and paste this code: ```node server.js```

**TO USE THE EXTENSION!!**

## Example of usage.



## PREGUNTAS

### Ciclo de vida del dato (5b)

#### ¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?
Los datos en mi extensión se generan cuando el usuario pone la hora en el reloj o cuando se hace una petición a OpenAI para obtener una pregunta. No se guardan de forma permanente, solo se usan mientras la extensión está activa y luego desaparecen cuando se cierra.

#### ¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?
- Se validan las horas y minutos antes de iniciar la cuenta atrás.
- Se maneja correctamente la respuesta de OpenAI para evitar errores en la estructura JSON.
- Se usa `try-catch` en `background.js` para capturar errores en la API y manejar respuestas incorrectas.

### Almacenamiento en la nube (5f)

#### Si tu software utiliza almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad de los datos?
- Se usa HTTPS en todas las peticiones a OpenAI.
- No se almacenan datos sensibles en archivos accesibles.
- Se podría integrar autenticación para mejorar la seguridad en futuras versiones.

#### ¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual?
Podría haber guardado datos en `chrome.storage` o en un servidor propio, pero como la extensión no necesita persistencia, preferí mantener todo en memoria para que funcione más rápido.

#### Si no usas la nube, ¿cómo podrías integrarla en futuras versiones?
Podría conectar la extensión con Google Drive o Firebase para que el usuario pueda acceder a su historial de preguntas y respuestas desde cualquier dispositivo.


### Seguridad y regulación (5i)

#### ¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?
- **No se guardan datos personales en el frontend**.
- **Se manejan errores en `background.js`** para evitar fallos en la API.
- **Restricción de accesos en `manifest.json`**, permitiendo solo conexiones seguras.

#### ¿Qué normativas (e.g., GDPR) podrían afectar el uso de tu software y cómo las has tenido en cuenta?
Ahora mismo no afecta porque no almacena datos personales. Pero si en futuras versiones se guardaran datos del usuario, habría que añadir opciones de privacidad para cumplir con GDPR.

### Implicación de las THD en negocio y planta (2e)

#### ¿Qué impacto tendría tu software en un entorno de negocio o en una planta industrial?
Podría ser útil en educación o en empresas que quieran evaluar a sus empleados con preguntas aleatorias. En una planta industrial, se podría adaptar para mostrar recordatorios o gestionar tareas automatizadas.

#### ¿Cómo crees que tu solución podría mejorar procesos operativos o la toma de decisiones?
Si se implementa en un negocio, podría automatizar el aprendizaje con preguntas generadas dinámicamente. También serviría como recordatorio automático para tareas importantes.

#### Si tu proyecto no aplica directamente a negocio o planta, ¿qué otros entornos podrían beneficiarse?
La educación es donde más podría encajar. Se podría mejorar para que los estudiantes de programación practiquen con tests personalizados según su nivel.


### Mejoras en IT y OT (2f)

#### ¿Cómo puede tu software facilitar la integración entre entornos IT y OT?
Si se adapta para usarse en una empresa, podría integrarse con sistemas de alertas o monitoreo para automatizar procesos.

#### ¿Qué procesos específicos podrían beneficiarse de tu solución en términos de automatización o eficiencia?
- **Recordatorios automáticos** para mantenimiento en fábricas.
- **Evaluaciones dinámicas** para empleados usando OpenAI.
- **Automatización de tareas** con alertas basadas en tiempos predefinidos.

#### Si no aplica a IT u OT, ¿cómo podrías adaptarlo para mejorar procesos tecnológicos concretos?
Podría conectarse con Google Calendar para establecer recordatorios personalizados o con APIs externas para gestionar el tiempo de manera eficiente.


### Tecnologías Habilitadoras Digitales (2g)

#### ¿Qué tecnologías habilitadoras digitales (THD) has utilizado o podrías integrar en tu proyecto?
- **Inteligencia Artificial (OpenAI):** Genera preguntas de programación en tiempo real.
- **API KEY :** Conecta la extensión con OpenAI de forma remota.
- **Almacenamiento local (`chrome.storage`)**: Se podría usar en futuras versiones para guardar configuraciones.

#### ¿Cómo mejoran estas tecnologías la funcionalidad o el alcance de tu software?
- OpenAI hace que las preguntas sean dinámicas y diferentes en cada uso.
- Un sistema de almacenamiento permitiría que los usuarios guarden su progreso.
