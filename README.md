# ☕ CaféGestión - Sistema CRUD con Singleton en JavaScript

Bienvenido a **CaféGestión**, un sistema web simple para gestionar productos de cafetería desarrollado en JavaScript. Este proyecto incluye un CRUD completo con almacenamiento en `localStorage`, y la implementación del **patrón de diseño Singleton**, como parte de buenas prácticas en arquitectura de software.

---

🧩 ¿En qué consiste el patrón Singleton?
El patrón Singleton es un patrón de diseño que garantiza que una clase tenga una única instancia durante toda la ejecución del programa y proporciona un punto de acceso global a esa instancia. Es útil para manejar configuraciones, sesiones o cualquier estado compartido que no deba duplicarse.

🛠️ ¿Cómo lo implementaste?
Implementé el patrón Singleton mediante una clase llamada AppConfig que:

Verifica si ya existe una instancia previa al crearla.

Si existe, la devuelve; si no, crea una nueva.

Usa localStorage para guardar y recuperar automáticamente la configuración de la app y el usuario actual.

La clase se encuentra en el archivo singleton_guazne/singleton.js y se importa desde el archivo principal app.js.

⚙️ ¿Qué hace tu ejemplo?
Mi ejemplo utiliza el Singleton para:

Gestionar la configuración global de la aplicación (modo, versión, autor).

Guardar y mantener el usuario actual entre recargas de página.

Persistir la información en localStorage, asegurando que la configuración se conserve incluso si se cierra el navegador.

Permitir al usuario cambiar de sesión (cerrar sesión y volver a ingresar).
