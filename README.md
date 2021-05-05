# DistributorWebService_NodeJS
Web service de mantenimiento para distribuidoras de productos

## Rutas Globales

localhost:3800/user
localhost:3800/channel
localhost:3800/distributor
localhost:3800/product
localhost:3800/schedule

```
### User
```
 `POST localhost/user/`
Ruta para crear un usuario
 `PUT localhost/user/:code`
Ruta para actualizar sun usuario enviando mediante su PrimaryKey(code)
 `DELETE localhost/user/:code`
Ruta para eliminar un usuario enviando mediante su PrimaryKey(code)
 `GET localhost/user/`
Ruta para buscar un usuario con cualquiera de los parametros del modelo 
 `GET localhost/users`
Ruta para obtener todos los usuarios existentes
 `GET localhost/user/pk`
Ruta para obtener un usuario enviando mediante su PrimaryKey(code)

```
### Channel
```

 `POST localhost/channel/`
Ruta para crear un canal
 `PUT localhost/channel/:code`
Ruta para actualizar un canal enviando mediante su PrimaryKey(code)
 `DELETE localhost/channel/:code`
Ruta para eliminar un canal enviando mediante su PrimaryKey(code)
 `GET localhost/channel/`
Ruta para buscar un canal con cualquiera de los parametros del modelo 
 `GET localhost/channels`
Ruta para obtener todos los canales existentes
 `GET localhost/channel/pk`
Ruta para obtener un canal enviando mediante su PrimaryKey(code)


```
### Distributor
```
 `POST localhost/distributor/`
Ruta para crear un distribuidor
 `PUT localhost/distributor/:code`
Ruta para actualizar un distribuidor enviando mediante su PrimaryKey(code)
 `DELETE localhost/distributor/:code`
Ruta para eliminar un distribuidor enviando mediante su PrimaryKey(code)
 `GET localhost/distributor/`
Ruta para buscar un distribuidor con cualquiera de los parametros del modelo 
 `GET localhost/distributors`
Ruta para obtener todos los distribuidores existentes
 `GET localhost/distributor/pk`
Ruta para obtener un distribuidor enviando mediante su PrimaryKey(code)

```
### Product
```
 `POST localhost/product/`
Ruta para crear un producto
 `PUT localhost/product/:code`
Ruta para actualizar un producto enviando mediante su PrimaryKey(code)
 `DELETE localhost/product/:code`
Ruta para eliminar un producto enviando mediante su PrimaryKey(code)
 `GET localhost/product/`
Ruta para buscar un producto con cualquiera de los parametros del modelo 
 `GET localhost/products`
Ruta para obtener todos los productos existentes
 `GET localhost/product/pk`
Ruta para obtener un producto enviando mediante su PrimaryKey(code)

```
### Schedule
```
 `POST localhost/schedule/`
Ruta para crear un horario
 `PUT localhost/schedule/:code`
Ruta para actualizar un horario enviando mediante su PrimaryKey(code)
 `DELETE localhost/schedule/:code`
Ruta para eliminar un horario enviando mediante su PrimaryKey(code)
 `GET localhost/schedule/`
Ruta para buscar un horario con cualquiera de los parametros del modelo 
 `GET localhost/schedules`
Ruta para obtener todos los horarios existentes
 `GET localhost/schedule/pk`
Ruta para obtener un horario enviando mediante su PrimaryKey(code)


## npm start 
Levanta el servicio en el puerto 3800

## npm i
Instala los paquetes necesarios para correr el servicio.


## Base de datos
La base de datos debe de ser creada con el siguiente comando: 
```
CREATE DATABASE distributordb
```
Las credenciales son manipulables en el archivo config/db.config.js
La base de datos ya esta definida en las configuraciones