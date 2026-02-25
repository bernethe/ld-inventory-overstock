# LD Inventory Overstock

Panel en React + Vite para visualizar la sobreexistencia de inventario por local usando datos mock en JSON. Para LogicalData.

## Requisitos
- Node.js 18+ y npm.
- Navegador moderno para la app.

## Instalación y uso
1) Clonar el repo y ubicarse en la carpeta del proyecto.
2) Instalar dependencias: `npm install`.
3) Desarrollo: `npm run dev` (abre Vite en modo dev).
4) Build de producción: `npm run build`.
5) Previsualizar el build: `npm run preview`.

## Estructura clave
- [src/App.jsx](src/App.jsx#L1-L11): enrutamiento hacia la página principal.
- [src/components/pages/QueryPage.jsx](src/components/pages/QueryPage.jsx#L1-L64): filtros, tarjetas de métricas, gráficos y tabla.
- [src/components/layouts/MainLayout.jsx](src/components/layouts/MainLayout.jsx): layout contenedor de las vistas.
- [src/components/content](src/components/content): gráficos Highcharts y tabla de sobreexistencia.
- [src/components/elements/Table.jsx](src/components/elements/Table.jsx#L1-L54) y [src/components/elements/TableWrapper.jsx](src/components/elements/TableWrapper.jsx#L1-L47): tabla con ordenamiento (TanStack) y envoltorio de UI.
- [src/json/inventory-overstock.json](src/json/inventory-overstock.json): dataset de sobreexistencia.
- [src/json/locals.json](src/json/locals.json): opciones de locales para los selectores.

## Datos y visualizaciones
- Contadores animados en tarjetas (artículos, costo, piezas) usando CountingNumber.
- Gráficos de pastel con Highcharts para total vs sobreexistencia en costo, piezas y artículos.
- Tabla sortable con todas las columnas del dataset; búsqueda y paginación en el wrapper son actualmente estáticas (solo UI).

## Notas y próximos pasos
- Los filtros (ABC, categoría, marca, departamento) y la búsqueda no aplican lógica aún; conectar al dataset o API según sea necesario.
- Para usar datos en vivo, reemplazar las importaciones de JSON por llamadas a API y alimentar los componentes con el resultado.
