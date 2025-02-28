# Prueba Técnica API

Este proyecto es una aplicación en React utilizando Vite que consume la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener y mostrar una lista de usuarios y sus publicaciones.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto:

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Entra en la carpeta del proyecto:
   ```sh
   cd PRUEBATECNICAAPI
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto con la siguiente variable de entorno:
   ```env
   VITE_APP_URL=https://jsonplaceholder.typicode.com
   ```
5. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).

## Funcionalidades Implementadas

- **Listado de usuarios**: Obtiene y muestra una lista de usuarios desde `GET /users`.
- **Visualización de publicaciones**: Permite ver las publicaciones de un usuario usando `GET /posts?userId={id}`.
- **Navegación**: Implementación de `react-router-dom` para gestionar las rutas.

## Decisiones Técnicas

- **Vite**: Se usa Vite para mejorar el rendimiento en el desarrollo.
- **React Router**: Se emplea `react-router-dom` para manejar la navegación entre la lista de usuarios y los posts.
- **Axios**: Se usa Axios para realizar las peticiones HTTP de forma sencilla.
- **Variables de entorno**: Se usa un archivo `.env` para configurar la URL de la API y facilitar la portabilidad del proyecto.

