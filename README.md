MovieTracker es una aplicación web full stack desarrollada para buscar películas mediante la API de OMDb y gestionar una colección personal de favoritas. El proyecto fue construido utilizando Java, Spring Boot, Angular y MySQL, incorporando autenticación con JWT, gestión de usuarios y una interfaz moderna adaptable a distintos dispositivos.

Tecnologías utilizadas
Backend
•	Java 17
•	Spring Boot 3
•	Spring Web
•	Spring Data JPA
•	Spring Security
•	JWT (JSON Web Tokens)
•	Hibernate
•	Lombok
•	MySQL
•	Maven
Frontend
•	Angular
•	TypeScript
•	Bootstrap 5
•	APIs Externas
•	OMDb API (Open Movie Database)

---------------------------------------------------------------------------------------------------------------------
Funcionalidades principales
Búsqueda de películas
Consulta de películas mediante la API de OMDb.
Visualización de:
- Título
- Año
- Director
- Género
- Sinopsis
- Poster

Gestión de favoritos
- Agregar películas a favoritos.
- Evitar duplicados mediante IMDb ID.
- Eliminar películas favoritas.
- Asignar puntuación de 1 a 5 estrellas.
- Agregar comentarios personalizados.
- Mostrar fecha de guardado.
- Mostrar año de estreno.
- Filtros y ordenamiento
- Filtrar películas favoritas desde un año determinado.

Ordenar favoritos por:
- Título
- Año
---------------------------------------------------------------------------------------------------------------------
Sistema de autenticación

Se implementó autenticación basada en JWT para proteger los recursos privados de la aplicación.

---------------------------------------------------------------------------------------------------------------------
Características implementadas

✅ Consumo de API externa (OMDb)

✅ Arquitectura por capas

✅ DTOs

✅ Servicios

✅ Repositorios JPA

✅ Persistencia con MySQL

✅ CRUD de favoritos

✅ Filtro por año

✅ Ordenamiento por título y año

✅ Comentarios y puntuaciones

✅ Angular Router

✅ Tema claro/oscuro

✅ JWT

✅ Spring Security

✅ Registro de usuarios

✅ Login y Logout

✅ Perfil de usuario

✅ Contraseñas encriptadas con BCrypt

---------------------------------------------------------------------------------------------------------------------
Configuración

El proyecto utiliza un archivo local de configuración que no se incluye en el repositorio por motivos de seguridad.

Copiar el archivo application-local.properties.example.
Renombrarlo a application-local.properties.
Completar los valores correspondientes:
API Key de OMDb.
Usuario y contraseña de MySQL.
Clave secreta para JWT.
Crear la base de datos:
CREATE DATABASE peliculas_db;

Una vez configurado el archivo, el backend estará listo para ejecutarse.
