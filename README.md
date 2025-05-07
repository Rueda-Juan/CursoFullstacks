# 🛒 Sitio Web de Comercio Electrónico – Tecnología y Electrodomésticos

Este sitio web tiene como objetivo servir como una plataforma de **comercio electrónico dedicada a la venta de productos tecnológicos y electrodomésticos**. Está diseñado para facilitar la experiencia de compra de los usuarios, permitiéndoles explorar, buscar y adquirir productos de manera intuitiva desde sus hogares o dispositivos móviles.

---

## 🎯 Objetivo General

Proporcionar una **plataforma digital eficiente y accesible** desde la cual los usuarios puedan:

- Navegar por un catálogo amplio de productos.
- Buscar fácilmente por nombre o categoría.
- Acceder a información clara y detallada de cada artículo.
- Contactar al vendedor o al área de soporte técnico/comercial.

---

## ✅ Objetivos Específicos

### 📚 Organización del Catálogo
- Ofrecer un catálogo organizado y actualizado de productos, incluyendo:
  - Electrodomésticos: Heladeras, hornos, lavarropas, etc.
  - Tecnología: Notebooks, celulares, tablets, etc.

### 📱 Experiencia de Usuario (UX)
- Brindar una navegación intuitiva y fluida mediante:
  - Diseño responsive adaptado a móviles, tablets y escritorios.
  - Menú dinámico y accesible.
  - Buscador inteligente de productos.

### 💰 Conversión de Ventas
- Aumentar la tasa de conversión mediante:
  - Imágenes de alta calidad.
  - Descripciones precisas y completas.
  - Información clara sobre cuotas, promociones y envíos.
  - Contacto rápido y visible para soporte o dudas.

### ⭐ Calificación de Productos
- Incluir un sistema de calificación visual con estrellas para:
  - Aumentar la confianza del usuario en los productos ofrecidos.
  - Mostrar retroalimentación social (opiniones y puntuaciones de otros compradores).
  - Influir positivamente en la decisión de compra** mediante reseñas.

---

## 🧑‍💻 Público Objetivo

El sitio está dirigido a:

- **Consumidores finales** interesados en adquirir productos del rubro tecnológico y del hogar.
- Usuarios que buscan realizar **compras online de forma rápida, sencilla y segura**.
- Personas que valoran la comodidad de comprar desde sus dispositivos personales sin necesidad de trasladarse a una tienda física.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 personalizado
- Bootstrap 5.3 (grillas, componentes responsivos)
- Bootstrap Icons
- JavaScript de Bootstrap para interactividad

---

## 📂 Estructura del Proyecto
- /img → Imágenes del sitio
- /css/ → Archivo de estilos personalizados
- /html/categorias/ → Páginas de categorías (Electro, Tecnología, etc.)
- /html/contacto/ -> Pagina de contacto
- /html/produtos/ -> Pagina de productos
- /html/inicio/inicio.html → Página principal


## Reparticion de Responsabilidades

### Rueda Juan Bautista
#### Pagina de productos
- <p>
  Para realizar la página de productos me base en la página de productos de mercado libre, en la parte superior tiene hiperlinks estilo “breadcrumbs”, lo hice responsivo con bootstrap, si se está viendo desde una computadora, a la izquierda se encuentra la imagen, y a la derecha se encuentran los datos del producto, y abajo la descripción, y para celulares me base en la aplicación de MercadoLibre, con la imagen arriba, los datos abajo, y la descripción por debajo de los datos, le puse calificaciones falsas para que se sienta más “real” la página, le agregue mediante iconos de bootstrap un icono de viento(espejado horizontalmente) y un camión con el texto “llega mañana”, para que se vea que está yendo rápido, los precios los saque de MercadoLibre, así que tienen un precio real, le agregue la opción de comprar más de un producto mediante un dropdown, también le agregue la función que al tocar el botón de compra se muestre un apartado para poner una calificación y un mensaje, es requerido que se elija una calificación de estrellas del 1 al 5, pero es opcional escribir una reseña, en esto me inspire de “Steam” que al comprar un juego aparece la opción de darle una calificación, elegir la cantidad de estrellas es requerido, pero poner una opinión en la zona de texto es opcional.
 Todo esto intentando que no tenga colores, para luego al final del desarrollo con un CSS se logre cambiar los colores de todas las cosas
</p>

#### GIT
- <p>
  trabaje desde la rama Juanchi-producto, esta rama sale desde la rama develop(de esta rama deberían salir las ramas donde trabajan mis compañeros de grupo), la cual sale de la rama master(default), este método me pareció el más ordenado y profesional para el desarrollo de la página.
</p>

#### Pagina Consulta
- <p> 
  trabaje desde la rama Juanchi-producto, esta rama sale desde la rama develop(de esta rama deberían salir las ramas donde trabajan mis compañeros de grupo), la cual sale de la rama master(default), este método me pareció el más ordenado y profesional para el desarrollo de la página.
</p>

### Atilio Joaquin Rossi
#### Seccion Categorias
- <p>
  La parte del proyecto en donde trabaje fue en las categorías, primero empecé con la creación de una carpeta llamada Categorías, en ella cree cuatro HTML, uno con el nombre Categorias y los otros tres de los diferentes productos que se encuentran en la tienda online. Luego hice un CSS denominado styleCate y una carpeta de imágenes, donde agregué una imagen que muestra los diferentes productos que ofrecemos, como también de las diferentes categorías que serían, de electrodomésticos, tecnologías y la última con lo mismo, pero juntas. 
- Las tres imágenes que muestra el HTML principal (Categorias) tienen la funcionalidad de clickear sobre ellas para dirigirte a cada una de las categorías. Donde allí se encuentran los diferentes productos, con su nombre y precio. Estas imágenes de los productos también tienen la funcionalidad de clickear sobre ellas para dirigirte a cada producto y obtener más información sobre ellos. Esas imágenes en los diferentes HTML se encuentran divididas en tres card que ofrece Boostrap, las mismas se localizan en tres div que son englobadas por un section. En el CSS llamado styleCate se encuentran unas modificación que hice en las card y un @media (media queries) para hacer que el section (donde se encuentran las card), se coloquen de manera de columnas en el momento de achicar la página a 783 px y obtener una mayor funcionalidad. No tuve tantos inconvenientes con la parte del proyecto que me toco, solamente cuando quería hacer la página responsible pero al final lo pude solucionar.
</p>