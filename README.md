# Práctica 2 


## Estructura
- `src/app/page.tsx`: Página principal con buscador y listado de países
- `src/components/Country.tsx`: Componente para mostrar cada país con un estilo, tiene la llamada a la ruta dinamica
- `src/app/country/[name]/page.tsx`: Página de ruta dinámica para cada país
- `src/app/country/[name]/BackButton.tsx`: Botón para volver a la página anterior
- `src/app/country/[name]/country-detail.css`: El estilo para la ruta dinámica
- `src/api/countries.ts`: Funciones para hacer la llamada a la api de paises, por nombre y por parametros
- `src/api/axios.ts`: Configuración del axios para hacer las llamadas a la api
- `src/types.ts`: Los tipos de la api para las busquedas

## Problemas encontrados
1.*** Errores 404 en la ruta dinamica ***
   - El archivo de ruta dinámica debe estar en una carpeta `[name]` con un `page.tsx`, al principio me confundí y lo esctructuré mal, pensando que era un problema de la api.

2. **Parámetro `name` undefined**
   - Usando app router dado en clase, para poder usar los parametros que se le pasan a la funcion, hay que hacer uso de un await, sino los parametros podrian ser undefinded y daria error al hacer la busqueda. 
   - Me pasó esto y también pensaba que era error de la api.

3. **Problemas de codificación en la URL**
   - Si metes el nombre de uno de los paises directamente en la url, no lo encuentra, por lo que hay que usar `encodeURIComponent` para que encuentre bien el nombre del pais a la hora de filtrar por nombre

## Pasos para ejecutar el programa
1. **Instalar dependencias**

   - npm install

2. **Iniciar el servidor de desarrollo**

   - npm run dev

3. **Abrir en el navegador**

   - Ve a `http://localhost:3000`

4. **Buscar países y navegar**
   - Usa el buscador para filtrar países por nombre.
   - Si no se usa el buscador se muestran todos los países de la API
   - Haz clic en un país para ver su detalle.
   - Usa el botón "Volver" para regresar.


