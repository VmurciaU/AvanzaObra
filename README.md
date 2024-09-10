# Nodejs App
## FVL - Firma Electrónica

Bienvenido a nuestra innovadora aplicación de firma electrónica desarrollada con la potencia y versatilidad de Node.js. Simplificamos el proceso de firmar documentos de manera segura y eficiente, proporcionando una solución robusta para las necesidades de la fundacion en la firma de los documentos del paciente.

## Sobre el software

- Lenguaje programación: <a href="https://es.wikipedia.org/wiki/ECMAScript" target="_blank">ECMAScript - JavaScript</a>

- Entorno de ejecución: <a href="https://nodejs.org/en" target="_blank">Nodejs</a>

- Librerías y enlaces útiles:
    - <a href="https://expressjs.com/" target="_blank">Express</a>
    - <a href="https://www.docker.com/" target="_blank">Docker</a>
    - <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
    - <a href="https://axios-http.com/docs/intro" target="_blank">Axios</a>
    - <a href="https://www.npmjs.com/package/cors" target="_blank">Cors</a>
    - <a href="https://www.npmjs.com/package/dotenv" target="_blank">Dotenv</a>
    - <a href="https://www.npmjs.com/package/nodemon" target="_blank">Nodemon</a>

Para compilar esta aplicación Node.js, sigue los siguientes pasos:

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

2. Instala las dependencias del proyecto utilizando el siguiente comando en la terminal:

    ```bash
    yarn
    ```

3. Instala globalmente la herramienta `cross-env` utilizando el siguiente comando:

    ```bash
    npm install -g cross-env
    ```

    Este paso es necesario para ejecutar correctamente el comando de compilación.

4. Ejecuta el comando de compilación utilizando [Yarn](https://yarnpkg.com/):

    ```bash
    yarn build
    ```

    Esto generará los archivos compilados de la aplicación.

Si encuentras algún problema durante la instalación o compilación, asegúrate de revisar la documentación del proyecto o contactar a los desarrolladores.\


## Notas de Versiones

### V 1.0.0

 - Primera versión del aplicativo FVL Siempre - Telemonitoreo, listo para pruebas unitarias

	##### V 1.0.1
	- **FIX BUG** ->Se arregla bug al momento de cancelar la foto al monitor en medio de la toma de signos vitales.
	- Se cambia el nombre que se muestra del aplicativo en los dispositivos moviles de: Siempre Telemonitoreo se cambia por FVL Siempre - Telemonitoreo.
	- Se agrega número de versión visible en la aplicación, en la parte inferior de la pantalla del Login.
	- Se agrega README al proyecto.
	- Se agregan nuevos iconos para iOS, sin transparencia para correcto funcionamiento y buenas prácticas de App Store
	- Se cambian valores mínimos y máximos de las validaciones realizadas en los campos de ingreso de signos vitales.
	    
    ##### V 1.2.0
	- **FIX BUG** ->Se arregla bug al momento de evaluar si el dispositivo tiene o no conexión con el servidor.
	- Se agrega campo de observación (Opcional) al momento de realizar una toma de signos vitales.
	- Se agrega en el menú la opción de visualizar las observaciones dejadas y visibles por doctor o terapeuta del paciente.
	- Se agrega el page para visualizar las observaciones, con la opción de marcar si este ya fue leído.
	- Se actualiza la versión del aplicativo a la 1.2.0 y se actualiza el README.
