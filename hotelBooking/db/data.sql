USE `0223TDPROM1C2LAED0522FT_GRUPO3`;

-- -----------------------------------------------------
-- Table `caracteristicas`
-- -----------------------------------------------------
INSERT INTO `caracteristicas` (id, titulo) VALUES (1, 'Desayuno');
INSERT INTO `caracteristicas` (id, titulo) VALUES (2, 'Wifi');
INSERT INTO `caracteristicas` (id, titulo) VALUES (3, 'Estacionamiento');
INSERT INTO `caracteristicas` (id, titulo) VALUES (4, 'Aire acondicionado');
INSERT INTO `caracteristicas` (id, titulo) VALUES (5, 'Piscina');
INSERT INTO `caracteristicas` (id, titulo) VALUES (6, 'Gimnasio');
INSERT INTO `caracteristicas` (id, titulo) VALUES (7, 'Sala de Reuniones');
INSERT INTO `caracteristicas` (id, titulo) VALUES (8, 'Mascotas');

-- -----------------------------------------------------
-- Table `categorias`
-- -----------------------------------------------------
INSERT INTO `categorias` (id, nombre, descripcion, url) VALUES (
    1, 'Hoteles',
    'Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías. Algunos hoteles tienen servicios de conferencias y animan a la gente a organizar convenciones y reuniones en su establecimiento.',
    'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/categoria_hoteles.webp'
);
INSERT INTO `categorias` (id, nombre, descripcion, url) VALUES (
    2, 'Departamentos',
    'Es una unidad de vivienda que comprende una o más habitaciones diseñadas para proporcionar instalaciones completas para un individuo o una pequeña familia.',
    'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/categoria_deptos.jpg'
);
INSERT INTO `categorias` (id, nombre, url) VALUES (
    3, 'Casas',
    'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/categoria_casas.jpg'
);
INSERT INTO `categorias` (id, nombre, url) VALUES (
    4, 'Hostels',
    'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/categoria_hostels.jpg'
);

-- -----------------------------------------------------
-- Table `paises`
-- -----------------------------------------------------
INSERT INTO `paises` (id, nombre, codigo) VALUES(1, 'Argentina', 'AR');
INSERT INTO `paises` (id, nombre, codigo) VALUES(2, 'Uruguay', 'UY');

-- -----------------------------------------------------
-- Table `ciudades`
-- -----------------------------------------------------
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(1, 'Buenos Aires', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(2, 'La Plata', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(3, 'Mar del Plata', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(4, 'Mendoza', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(5, 'Rosario', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(6, 'Santa Fe', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(7, 'Salta', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(8, 'Córdoba', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(9, 'Corrientes', 1);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(10, 'Montevideo', 2);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(11, 'Punta del Este', 2);
INSERT INTO `ciudades` (id, nombre, pais_id) VALUES(12, 'Colonia', 2);

-- -----------------------------------------------------
-- Table `direcciones`
-- -----------------------------------------------------
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(1, 'Av Macacha Guemes', 351, 1);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(2, 'Las Araucarias', 1876, 2);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(3, 'Av. Cordoba', 405, 1);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(4, '9 de Julio', 3027, 3);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(5, 'Florida Sur', 167, 5);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(6, 'Calle Pedro Patat Sur', 3909 , 1);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(7, 'Joaquín V. González', 2700, 1);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(8, 'Ruta Panamericana Nr. 9', 'Km 61', 2);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(9, ' Avenida Ambrosio Olmos', 767, 8);
INSERT INTO `direcciones` (id, calle, nro_puerta, ciudad_id) VALUES(10, ' Primitivo de la Reta', 547, 4);

-- -----------------------------------------------------
-- Table `productos`
-- -----------------------------------------------------
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	1, 'Hilton Buenos Aires',
    'Hotel de lujo con acceso al centro de convenciones y 1 piscinas al aire libre cerca de Puente de la Mujer.',
    1, 1
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	2, 'Casa Campus Pilar',
    'Departamento de 3 estrellas con piscina al aire libre, cerca de Universidad Austral y a una hora del aeropuerto de Buenos Aires.',
    3, 2
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	3, 'NH Collection Buenos Aires',
    'Con una ubicación ideal en el corazón de la zona de negocios y cerca de las principales atracciones turísticas, el hotel NH Collection Buenos Aires Lancaster ofrece un toque distintivo de diseño inglés.',
    1, 3
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	4, 'Hotel TreintaSeis',
    'El Hotel Treinta-Seis se encuentra en Mar del Plata, a 600 metros de la playa de La Perla, y ofrece alojamiento de 4 estrellas, jardín, terraza y bar. Este hotel de 4 estrellas cuenta con centro de fitness y habitaciones con aire acondicionado, WiFi gratuita y baño privado. El hotel cuenta con bañera de hidromasaje y servicio de habitaciones.
    
    Todos los alojamientos incluyen hervidor de agua. Algunas habitaciones del Hotel Treinta-Seis tienen balcón y todas incluyen TV de pantalla plana.
    
    El establecimiento sirve un desayuno buffet. El personal de la recepción del Hotel Treinta-Seis está disponible las 24 horas.
    
    Cerca del hotel hay varios lugares de interés, como la playa de Bristol, el casino central de Mar del Plata y la catedral de Mar del Plata. El aeropuerto más cercano es el aeropuerto internacional Astor Piazzolla, ubicado a 7 km del Hotel Treinta-Seis.',
    1, 4
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	5, 'Casa Lola Hotel Boutique',
    'La Casa Lola Hotel Boutique ofrece alojamiento con jardín, aparcamiento privado gratuito, terraza y restaurante. Este hotel de 5 estrellas ofrece servicio de habitaciones, recepción 24 horas y WiFi gratuita. El establecimiento es hipoalergénico y se encuentra a 10 km de la plaza Independencia.
    
    Los alojamientos incluyen TV de pantalla plana. Todas las habitaciones disponen de baño privado y aire acondicionado. Algunas habitaciones tienen balcón.',
    3, 5
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	6, 'Hotel Piedras Moras',
    'El Hotel Piedras Moras ofrece un alojamiento confortable y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta.
    
    Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.
    
    Este hotel alberga un centro de fitness, un restaurante y sirve un desayuno buffet diario. En los alrededores se pueden practicar diversas actividades, como golf. Además, hay recepción 24 horas, solárium y bar. Se ofrecen tratamientos de masaje y servicio de traslado por un suplemento.',
    1, 6
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	7, 'Hotel Torrontes',
    'El Hotel Torrontes ofrece WiFi gratuita, jardín, salón compartido y bar. El baño privado está totalmente equipado con bidet y artículos de aseo gratuitos.
    
    Este bed and breakfast sirve un desayuno a la carta o continental. Hay aparcamiento privado gratuito, centro de negocios y recepción 24 horas. El Hotel Torrontes cuenta con solárium..',
    1, 7
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	8, 'Hotel Sofitel Cardales',
    'El Sofitel Cardales, situado a unos 60 km al norte de la capital argentina, ofrece alojamiento de categoría 5 estrellas, acceso a un lago y a un campo de golf y muchos otros servicios.
    
    Las habitaciones y las suites son amplias y de ambiente sofisticado. Presentan ventanas grandes y terraza con vistas al bosque, al lago y al campo de golf de 18 hoyos.
    
    El hotel dispone de campos de fútbol, pistas de tenis, salas de juegos, gimnasio, bolera, 4 piscinas y mucho más.
    
    Los huéspedes podrán relajarse en el spa del hotel o practicar diversos deportes acuáticos, como kayak en el lago de 20 hectáreas.',
    1, 8
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	9, 'Departamento Cielo en Nueva Córdoba',
    'El Departamento Cielo en Nueva Córdoba se encuentra en Córdoba, a 500 metros de la plaza de España y a 1,3 km del centro comercial Patio Olmos, y ofrece wifi gratis, pileta al aire libre y aire acondicionado. Los huéspedes pueden nadar en la pileta privada.
    
    El departamento tiene 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana con canales por cable, zona de comedor, cocina totalmente equipada y balcón con vistas a la ciudad.
    
    Cerca del departamento hay varios lugares de interés, como la Manzana Jesuítica, la catedral de Córdoba y el Museo Evita Ferreyra Palace. El aeropuerto más cercano es el aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella, ubicado a 13 km del Departamento Cielo en Nueva Córdoba.
    
    Nuestros clientes dicen que esta parte de Córdoba es su favorita, según los comentarios independientes.',
    2, 9
);
INSERT INTO `productos` (id, nombre, descripcion, categoria_id, direccion_id) VALUES(
	10, ' Hostel Estacion Mendoza',
    ' El Hostel Estacion Mendoza cuenta con una cocina común totalmente equipada, un jardín y una piscina al aire libre y ofrece conexión WiFi gratuita. El centro de la ciudad de Mendoza está a 200 metros.
    
    Las habitaciones del Hostel Estación Mendoza cuentan con baño privado o compartido. Algunas habitaciones tienen vistas a la calle y otras tienen vistas al patio. Se ofrece servicio de habitaciones.
    
    Los huéspedes del Hostel Estación Mendoza tienen acceso a las taquillas. También hay una sala de juegos y una sala de televisión.
    
    La terminal de bus se encuentra a 600 metros y la plaza Independencia a 700 metros. El aeropuerto internacional Gabrielli está a 10 km.',
    4, 10
);

-- -----------------------------------------------------
-- Table `imagenes`
-- -----------------------------------------------------
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	1, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678994675212_bedf1e5a.jpg', 1);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	2, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995371567_e2ab3a82.jpg', 1);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	3, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995416261_315fa4e7.webp', 1);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	4, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995471091_cb7f9724.jpg', 1);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	5, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995505325_de486181.jpg', 1);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	6, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995562699_15bec18c.jpg', 2);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	7, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995723289_8d4c1b77.jpg', 2);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	8, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995800068_889471f2.jpg', 2);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	9, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995887246_83377114.jpg', 2);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	10, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678995977223_67ac2a6f.jpg', 2);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	11, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996045973_69ace544.jpg', 3);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	12, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996087413_3be89e0e.jpg', 3);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	13, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996135706_2824fb9a.jpg', 3);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	14,'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996229059_3f91e0f4.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	15, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996388210_3e1d8cff.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	16, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996264308_01b9d05d.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	17, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996302731_58efde70.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	18, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996479150_cbeab648.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	19, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996524643_5d7cdae5.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	20, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678996639170_d708fe7a.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	21, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1678998017392_c5c7fa98.jpg', 4);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	22, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619054287_image1.jpg', 5);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	23, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619080526_image2.jpg', 5);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	24, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619091083_image3.jpg', 5);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	25, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619102529_image4.jpg', 5);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	26, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619116659_image5.jpg', 5);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	27, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619131391_image6.jpg', 6);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	28, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619141612_image7.jpg', 6);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	29, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619149739_image8.jpg', 6);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	30, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619158651_image9.jpg', 6);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	31, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619168139_image10.jpg', 6);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	32, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619180389_image12.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	33, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619193233_image13.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	34, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619211455_image14.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	35, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619220105_image15.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	36, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619230238_image16.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	37, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619240762_image17.jpg', 7);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	38, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619251488_sofitel1.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	39, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619261070_sofitel2.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	40, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619269043_sofitel3.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	41, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619276349_sofitel4.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	42, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619284101_sofitel5.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	43, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619292127_sofitel6.jpg', 8);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	44, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619388600_cordoba1.jpg', 9);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	45, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619397398_cordoba2.jpg', 9);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	46, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619404922_cordoba3.jpg', 9);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	47, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619416536_cordoba4.jpg', 9);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	48, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619424999_cordoba5.jpg', 9);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	49, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619531117_mendoza-hostel-1.jpg', 10);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	50, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619542165_mendoza-hostel-2.jpg', 10);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	51, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619550023_mendoza-hostel-3.jpg', 10);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	52, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619559610_mendoza-hostel-4.jpg', 10);
INSERT INTO `imagenes` (id, url, producto_id) VALUES(
	53, 'https://hotelbooking-cdn-c2g3.s3.us-east-2.amazonaws.com/1680619570830_mendoza-hostel-5.jpg', 10);

-- -----------------------------------------------------
-- Table `producto_has_caracteristica`
-- -----------------------------------------------------
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(1,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(1,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(1,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(1,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(1,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(2,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(2,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(2,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(2,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(2,8);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(3,6);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,6);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(4,7);

INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(5,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(5,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(5,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(5,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(5,8);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(6,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(6,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(6,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(6,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(6,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(7,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(7,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(7,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(7,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(7,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,1);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,3);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,6);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(8,7);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(9,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(9,4);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(9,5);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(10,2);
INSERT INTO `producto_has_caracteristica` (producto_id, caracteristica_id) VALUES(10,5);

-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
INSERT INTO `roles` (id, titulo) VALUES(1, 'ADMIN');
INSERT INTO `roles` (id, titulo) VALUES(2, 'USER');

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
INSERT INTO `users` (id, nombre, apellido, email, password, role_id) VALUES(
	1, 'John', 'Doe', 'john@doe.com', 
    '$2a$10$hWeJ32Zyvvz1T5F9s0vc/ehnY.ixlO/fIS6e5humeF4ghMstfqq3O', 2);

INSERT INTO `users` (id, nombre, apellido, email, password, role_id) VALUES(
	2, 'Steve', 'Jobs', 's.jobs@mail.com', 
    '$2a$10$k9lFPXAjYmJNphizjycH0.aqspLOF9SYyrkWXkWUF2KV2qwXb2d9.', 2);
    
INSERT INTO `users` (id, nombre, apellido, email, password, role_id) VALUES(
	3, 'Jane', 'Doe', 'jane.doe@mail.com', 
    '$2a$10$k9lFPXAjYmJNphizjycH0.aqspLOF9SYyrkWXkWUF2KV2qwXb2d9.', 1);

-- -----------------------------------------------------
-- Table `reservas`
-- -----------------------------------------------------
INSERT INTO `reservas` (id, check_in, check_out, hora_llegada, producto_id, usuario_id)
VALUES(1, '2023-04-07', '2023-04-09', '10:00:00', 1, 1);

INSERT INTO `reservas` (id, check_in, check_out, hora_llegada, producto_id, usuario_id)
VALUES(2, '2023-04-10', '2023-04-20', '09:00:00', 1, 2);

INSERT INTO `reservas` (id, check_in, check_out, hora_llegada, producto_id, usuario_id)
VALUES(3, '2023-04-20', '2023-04-23', '14:00:00', 4, 2);

INSERT INTO `reservas` (id, check_in, check_out, hora_llegada, producto_id, usuario_id)
VALUES(4, '2023-04-21', '2023-04-23', '10:00:00', 1, 1);