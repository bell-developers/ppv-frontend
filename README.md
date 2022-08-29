# Producción de Páginas de Venta - Tienda Web

## Comenzar a desarrollar

Este proyecto de [Next.js](https://nextjs.org/) fue iniciado con la herramienta [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Para iniciar el servidor de desarrollo, utilizar el comando:

```bash
npm run dev
```

El servidor se iniciará en: [http://localhost:3000](http://localhost:3000).
Al realizar cambios en el código, el servidor se reinicia automáticamente y los cambios son aplicados.

## Documentación

El proyecto cuenta con algunas reglas sobre cómo modificar el código, agregar cosas nuevas y cómo organizarlas.

### Arquitectura de carpetas

La aplicación cuenta con una organización de carpetas ya definida. La cual consiste en:

-   **src**: se encuentra única y exclusivamente todo el código de la aplicación.

**Las siguientes carpetas se encuentran dentro de src:**

-   **services**: se encuentran las funciones que realizan el consumo de servicios, por ejemplo un REST API. A su vez esta carpeta está separada en subcarpetas clasificadas por el tipo de servicio, por ejemplo el servicio getCatalog se encuentra dentro de /get.
-   **adapters**: se encuentran las funciones que adaptan los datos obtenidos de servicios externos. Esto se realiza para que esta diferencia entre datos externos y datos de la aplicación no genere problemas y el formato de los datos en la aplicación se mantengan consistentes.
-   **components**: se encuentran los componentes de la aplicación los cuales son reutilizables en más de una página, por ejemplo el Header o el ErrorMessage.
    Cada componente tiene su carpeta y archivo principal con su respectivo nombre. Además puede tener un archivo de estilos el cual tendrá el nombre del componente seguido de un .styles.
    Por ejemplo: el componente Header se encuentra dentro de components/header/Header.tsx y posee su archivo de estilos Header.styles.ts.
-   **models**: se encuentran los modelos que se utilizan en la aplicación. Normalmente son archivos que exportan uno o más tipos que representan una entidad en la aplicación. Por ejemplo: el modelo Product. Cada archivo debe contener su nombre y la extensión .model.ts
-   **styles**: se encuentran los estilos base de la aplicación y resets.
-   **utils**: se encuentran aquellas funciones y variables que se puedan reutilizar y su lógica no pertenezca a ninguna sección concreta de la aplicación.
-   **pages-content:** se encuentran los componentes, layouts y hooks que componen a las páginas.
    Dentro de _pages-content_ debe existir una carpeta para cada página, el nombre de esta tiene que ser el mismo que en el de _pages_ (se permite la traducción a inglés del nombre). Por ejemplo si existe un archivo pages/index.tsx, se debe crear una carpeta
    pages-content/home y se debe volcar todo el contenido de la página de inicio dentro de la misma.
    Cada carpeta de página puede contener una carpeta:
    -   **layouts:** donde se encontrarían los styled-components que construyen la estructura de la misma y no son reutilizados. Por ejemplo el contenedor Main de una página.
    -   **components:** donde se encontrarían los componentes que posean lógica propia y su implementación requiera algo más que solo estilos. Estos componentes
-   **pages**: se encuentran las rutas de la aplicación. Esta carpeta se reserva exclusivamente para el enrutamiento que NextJS ofrece, no se debe insertar ningun archivo que no pertenezca a la página misma dentro de esta carpeta.
    Los archivos que se encuentran dentro de carpeta _pages_ solo deben estructurar la página y aplicar su lógica, usando los estilos, funciones y hooks de _pages-layout_. Es posible realizar distintas secciones por página, esto depende de cual forma sea más legible.
