# SIMPLE API TEST

#### Autor: Omar Steeven Calderon Hernandez

### Descripcion

Estructura de una api de prueba utilizando express y moongose

> ###  Estructura de proyecto

- app.js (archivo que lanza la funcionalidad)
- controllers
    - client.controller.js
    - product.controller.js
- database
    - config.js (conexion)
- models 
    - product.js (modelo de coleccion)
    - client.js (modelo de coleccion)
    - server.js (archivo que hace las configuraciones para levantar api)
- routes
    - client.routes.js
    - product.routes.js
    


> ### Instalar proyecto y dependencias

```
    npm install
```

> ### Ejecutar api
```
    nodemon app.js
```

> ### End point clients

```
http://localhost:8080/client
```
> ### End point products

```
http://localhost:8080/product
```
