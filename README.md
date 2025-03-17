Aarón Neupaver Montiel
# PythonClocker

## ¿En qué consiste?
Esta idéa, surge cuando un chico de 18 años empezó a estudiar programación, todo era muy bonito pero.... Python, ese lenguaje interpretado a veces facil, pero otras una completa pesadilla.
Así que aquí tienes tu solución!!
Esta extensión para su navegador le salvará su asignatura, un despertador que para poder pararlo, necesitas resolver el programa.

## Significado de extensión
Las extensiones son pequeños programas de software que personalizan la experiencia de navegación. Permiten a los usuarios adaptar la funcionalidad y el comportamiento del navegador a las necesidades o preferencias individuales.

## Edita la extensión

1. En el archivo server.js cambia la TU-APYKEY
2. En el archivo background.js cambia la TU-APYKEY
3. 
## ¿Cómo instalar la extensión?

1. [PINCHA AQUI](https://github.com/erneupa/PythonClocker/blob/main/PYTHONCLOCKER.zip) para descargar la extensión.
2. Dirígete hasta este enlace chrome://extensions/
3. Activa esta función ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. Agrega aqí la estensión ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. Instala un servidor local.

## ¿Como intalar un servidor local?
### Descarga node.js.
    1. Dirígene hacia esta [url](https://nodejs.org/es)
    2. Descarga e instala la app.
1. Dirígete a la consola de Windows.
2. Accede a la carpeta de la extensión a través de la consola.
3. Copia y pega este código ``` npm install node-fetch@2 ```
4. Copia y pega este código ```npm install express cors```
5. Copia y pega este código ```node server.js```

**A USAR LA EXTENSIÓN!!**

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
