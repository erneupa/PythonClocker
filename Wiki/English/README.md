
# PythonClocker

## Visión General
**PythonClocker** es una extensión de navegador diseñada para ayudar a los estudiantes de programación al desafiarles a resolver problemas de programación en Python para detener una alarma. La creé como una forma divertida de motivarme (y motivar a otros) a practicar Python.

---

## Documentación para Desarrolladores

### Estructura del Proyecto

- `server.js`: El servidor backend que maneja las solicitudes y gestiona la funcionalidad de la extensión.
- `background.js`: El script de fondo que ejecuta la lógica de la extensión, como verificar si el problema ha sido resuelto.
- `manifest.json`: El archivo de configuración que le indica al navegador cómo cargar la extensión.
- `assets/`: Carpeta que contiene imágenes y otros recursos necesarios para la extensión.

### Dependencias

- **Node.js**: Requerido para ejecutar el servidor localmente.
- **Express**: Un framework web para Node.js que se utiliza para manejar las solicitudes HTTP.
- **CORS**: Un middleware para Express que maneja solicitudes entre orígenes distintos.
- **Node-fetch**: Una librería ligera para realizar solicitudes HTTP en Node.js.

### Instalación para Desarrolladores

1. Clona el repositorio o descarga el archivo ZIP desde [PythonClocker GitHub](https://github.com/erneupa/PythonClocker).
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Instala las dependencias necesarias ejecutando:

    ```
    npm install node-fetch@2
    npm install express cors
    ```

4. Después de instalar las dependencias, ejecuta el servidor con:

    ```
    node server.js
    ```

5. Ahora puedes probar la extensión localmente cargándola en tu navegador a través de la página de Extensiones (`chrome://extensions/`), activando el modo de desarrollador y seleccionando "Cargar descomprimido".

### Configuración de la API Key

1. Abre el archivo `server.js` y reemplaza `TU-APYKEY` por tu clave API real.
2. Repite lo mismo en el archivo `background.js` donde también se requiere la clave.
3. La clave API generalmente se puede encontrar en los archivos de Moodle relacionados con tu proyecto.

### Cómo Funciona la Extensión

La extensión sirve como una alarma interactiva. Activa una alarma que solo se puede apagar cuando el usuario resuelve un problema de Python. Esta funcionalidad hace que sea una herramienta divertida y efectiva para practicar programación.

---

## Devlog (Publicación en LinkedIn)

### **Devlog Entrada #1: Concepto Inicial y Idea**

Cuando empecé a aprender programación a los 18 años, descubrí que Python podía ser tanto sencillo como frustrante al mismo tiempo. Había días en los que me sentía motivado y otros en los que las dificultades constantes me hacían querer rendirme. Quería encontrar una solución que me mantuviera involucrado mientras aprendía. Así que tuve la idea de **PythonClocker**: una extensión de navegador que combina aprender con un reto. La alarma solo se detiene cuando el usuario resuelve un problema de Python. Fue una manera de combinar motivación y diversión.

### **Devlog Entrada #2: Comenzando con la Extensión**

El siguiente paso fue decidir cómo construir la extensión. Elegí usar JavaScript para la extensión del navegador, ya que es fácil de trabajar para este tipo de proyectos. Comencé creando la estructura básica de la extensión: un archivo de manifiesto, scripts de fondo y un HTML sencillo para la funcionalidad de la alarma. Luego, pasé a configurar un servidor básico usando **Node.js**, **Express** y **CORS**. Quería que todo funcionara sin problemas y localmente, asegurándome de tener una configuración confiable.

### **Devlog Entrada #3: Construyendo el Servidor**

Una vez que tenía la extensión básica funcionando, me concentré en el servidor. El servidor es esencial para manejar solicitudes y gestionar la API que proporciona los problemas de Python. Utilicé **Node-fetch** para realizar solicitudes HTTP y manejar tareas asincrónicas. Configurar el servidor fue complicado, pero una vez que lo entendí, pude ejecutar la extensión sin problemas en mi máquina local.

### **Devlog Entrada #4: Depuración y Pruebas**

La depuración fue una de las partes más desafiantes de este proyecto. Necesitaba asegurarme de que, cuando el usuario resolviera el problema de Python, la alarma se detuviera. Al principio, había algunos problemas con la clave API y la comunicación entre el servidor y la extensión, pero los resolví revisando cuidadosamente la lógica en `server.js` y `background.js`.

### **Devlog Entrada #5: Últimos Ajustes y Despliegue**

