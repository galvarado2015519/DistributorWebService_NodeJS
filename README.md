# DistributorWebService_NodeJS
Web service de mantenimiento para distribuidoras de productos

# Levantar el servidor

## Comandos
`npm i` Instala los paquetes necesarios para correr el servicio.

`npm start` Levanta el servicio en el puerto 3800 (Es necesario crear la base de datos primero) 

## Base de datos
La base de datos debe de ser creada con el siguiente comando: 
```
CREATE DATABASE distributordb
```
Las credenciales son manipulables en el archivo config/db.config.js
La base de datos ya esta definida en las configuraciones


## Rutas Globales

localhost:3800/user

localhost:3800/channel

localhost:3800/distributor

localhost:3800/product

localhost:3800/schedule

```
User
```
 `POST localhost:3800/user/` Ruta para crear un usuario

 `PUT localhost:3800/user/:code` Ruta para actualizar un usuario mediante su llave primaria

 `DELETE localhost:3800/user/:code` Ruta para eliminar un usuario  mediante su llave primaria

 `GET localhost:3800/user/` Ruta para buscar un usuario con su llave primaria 

 `GET localhost:3800/users` Ruta para obtener todos los usuarios existentes


```
Channel
```

 `POST localhost:3800/channel/` Ruta para crear un canal

 `PUT localhost:3800/channel/:code` Ruta para actualizar un canal  mediante su llave primaria

 `DELETE localhost:3800/channel/:code` Ruta para eliminar un canal  mediante su llave primaria

 `GET localhost:3800/channel/` Ruta para buscar un canal con su llave primaria 

 `GET localhost:3800/channels` Ruta para obtener todos los canales existentes


```
Distributor
```
 `POST localhost:3800/distributor/` Ruta para crear un distribuidor

 `PUT localhost:3800/distributor/:code` Ruta para actualizar un distribuidor  mediante su llave primaria

 `DELETE localhost:3800/distributor/:code` Ruta para eliminar un distribuidor  mediante su llave primaria

 `GET localhost:3800/distributor/` Ruta para buscar un distribuidor con su llave primaria 

 `GET localhost:3800/distributors` Ruta para obtener todos los distribuidores existentes

```
Product
```

 `POST localhost:3800/product/` Ruta para crear un producto

 `PUT localhost:3800/product/:code` Ruta para actualizar un producto  mediante su llave primaria

 `DELETE localhost:3800/product/:code` Ruta para eliminar un producto  mediante su llave primaria

 `GET localhost:3800/product/` Ruta para buscar un producto con su llave primaria 

 `GET localhost:3800/products` Ruta para obtener todos los productos existentes

```
Schedule
```

 `POST localhost:3800/schedule/` Ruta para crear un horario

 `PUT localhost:3800/schedule/:code` Ruta para actualizar un horario  mediante su llave primaria

 `DELETE localhost:3800/schedule/:code` Ruta para eliminar un horario  mediante su llave primaria

 `GET localhost:3800/schedule/` Ruta para buscar un horario con su llave primaria 

 `GET localhost:3800/schedules` Ruta para obtener todos los horarios existentes
