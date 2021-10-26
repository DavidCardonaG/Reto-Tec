Clima APP

es un aplicación web diseñada con el marco de trabajo React, Con Style en CSS puro, conexión  auth y  base de datos con firebase y por el último se maneja un estado global mediante react-redux




En Clima-App podras consultar los diferentes cambios climaticos de las ciudades del mundo, con una pequeña descripción meteorologica, esta app cuenta con mapas actualmente a nivel nacional, y un crud en el cual podras, registar, listar, editar y eliminar diferentes ciudades con sus datos meteorologicos.

al momento de consultar la ciudad deseada, en pantalla apareceran sus diferentes datos y quedaran guardamos en el localStorage, para un mejor manejo de datos.
Igualmente se tiene activa una función para obtener tu geolocalización en tiempo real y guardarla en localStorage, para posible manejo de datos en los mapas

Para trabajar el proyecto como desarrollador deberas instalar indispesablemente las diferentes librerias:

npm install 
npm install react-redux redux
npm install react-map-gl-geocoder
npm install --save redux-thunk


y demás librearias que actualmente se maneja en el proyecto en forma global.

se utilizan dos apis Rest
la principal llamada openWeather  para obtener los datos de las diferentes ciudades en tiempo real y la segunda llamada MapBox la cual nos sirve para consumir los diferentes servicios de los mapas
OpenWeather =  https://openweathermap.org/
MapBox = https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/



