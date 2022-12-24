# Producción de Páginas de Venta - Tienda Web

Producción de Páginas de Venta es un proyecto hecho con el fin de eficientar el desarrollo de tiendas online para emprendimientos. Este repositorio contiene la plantilla de la aplicación web, de la cual se crearán ejemplares personalizados para negocios reales.

La tienda está desarrollada con: [Next.js](https://nextjs.org/), el framework por excelencia de React; [Typescript](https://www.typescriptlang.org/), una extensión de JavaScript que agrega tipos; y [BaseWeb](https://baseweb.design/), un UI framework de React que contiene estilos y componentes listos para usar.

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

-   **services**: se encuentran las funciones que comunican la aplicación con agentes externos, por ejemplo una REST API.

-   **adapters**: se encuentran las funciones que transforman los datos obtenidos de servicios externos a datos específicos para la aplicación. Esto se realiza para que esta diferencia entre datos externos y datos de la aplicación no genere problemas y el formato de los datos en la aplicación se mantenga consistente.

-   **components**: se encuentran los componentes de la aplicación los cuales son reutilizables en
    más de una página, por ejemplo el Header o el ErrorMessage. Cada componente tiene su carpeta y archivo principal con su respectivo nombre. Además puede tener un archivo de estilos el cual tendrá el nombre del componente seguido de un .styles.

-   **models**: se encuentran los modelos que representan a entidades de la lógica de negocio, típicamente son tipos e interfaces de TypeScript. Cada archivo debe contener su nombre y la extensión .model.ts

-   **styles**: se encuentran los estilos base de la aplicación y resets.

-   **utils**: se encuentran aquellas funciones y variables que se puedan reutilizar y su lógica no pertenezca a ninguna sección concreta de la aplicación.

-   **pages-content:** se encuentran los archivos relacionados a una página en específico. Podemos encontrar carpetas similares a las anteriores vistas, con la diferencia de que estas carpetas contienen elementos pertenecientes únicamente a la página.

    Dentro de _pages-content_ debe existir una carpeta para cada página, el nombre de esta tiene que ser el mismo que en el de _pages_ (se permite la traducción a inglés del nombre). Por ejemplo si existe un archivo pages/index.tsx, se debe crear una carpeta
    pages-content/home y se debe volcar todo el contenido de la página de inicio dentro de la misma.

-   **pages**: se encuentran las rutas de la aplicación. Esta carpeta se reserva exclusivamente para el enrutamiento que NextJS ofrece, no se debe insertar ningun archivo que no pertenezca a la página misma dentro de esta carpeta. Los archivos que se encuentran dentro de la carpeta _pages_ solo deben estructurar la página y aplicar su lógica, usando los estilos, funciones y hooks de _pages-content_.
