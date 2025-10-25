# Journal App — Diseño y animaciones mejoradas

Una aplicación de diario moderna construida con React y Material-UI. Este repositorio contiene una versión estilizada del proyecto original, con mejoras visuales, paleta de colores, animaciones y microinteracciones pensadas para mostrar en un portafolio.

Características principales:
- Panel lateral con lista de notas.
- Editor de notas con subida de imágenes y galería.
- Estado de autenticación (login / register) integrado con Firebase.
- Tema oscuro personalizado y componentes con glassmorphism ligero.

Tecnologías
- React 18
- Vite (dev server)
- Material-UI (MUI)
- Redux Toolkit
- Firebase (Auth + Firestore + Storage)
- Animate.css (utilizada junto con animaciones CSS personalizadas)

Mejoras visuales y de interacción
- Tema oscuro personalizado (`src/theme/purpleTheme.js`) con tipografía y overrides de componentes.
- Variables CSS y estilos globales en `src/styles.css` (gradientes, glass effect, animaciones, pulses).
- Microinteracciones: hover en tarjetas, animaciones de entrada (fade-in-up), efecto pulse en botón Guardar cuando está guardando.
- Galería de imágenes con efecto hover y transición suave.

Instalación

1. Clonar el repositorio:

```cmd
git clone https://github.com/CarlosAriasLK/JournalApp.git
cd JournalApp
```

2. Instalar dependencias:

```cmd
npm install
```

3. Variables de entorno

Configura tu Firebase en `src/firebase/config.js`. Puedes usar `src/helpers/getEnvironments.js` como referencia para leer variables.

4. Ejecutar en desarrollo:

```cmd
npm run dev
```

Estructura relevante
- `src/theme/` — Tema global MUI.
- `src/styles.css` — Estilos globales, variables y animaciones.
- `src/journal/components/` — Componentes reutilizables (NavBar, SideBar, ImageGallery, etc.).
- `src/journal/views/NoteView.jsx` — Editor de notas y botones principales.

