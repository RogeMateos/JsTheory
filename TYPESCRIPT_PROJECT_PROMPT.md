# Prompt para crear Tutorial Interactivo de TypeScript

## Contexto del Proyecto Base

Necesito crear un sitio web de tutoriales de **TypeScript** siguiendo exactamente la misma arquitectura y patrones de diseño que este proyecto de JavaScript que estás viendo actualmente.

## Arquitectura del Proyecto Actual (JavaScript)

### Estructura de Carpetas

```
JsTheory/
├── index.html                 # Página principal con navegación
├── script.js                  # Lógica para cargar secciones dinámicamente
├── styles.css                 # Estilos globales
└── sections/
    ├── es/                    # Contenido en español
    │   ├── fundamentals/      # Sección 1
    │   ├── functions/         # Sección 2
    │   ├── objects-data/      # Sección 3
    │   ├── advanced/          # Sección 4
    │   ├── asynchronous/      # Sección 5
    │   ├── apis/              # Sección 6
    │   ├── dom/               # Sección 7
    │   └── regex/             # Sección 8
    └── en/                    # Contenido en inglés
        ├── fundamentals/
        ├── functions/
        ├── objects-data/
        ├── advanced/
        ├── asynchronous/
        ├── apis/
        ├── dom/
        └── regex/
```

### Patrón de Navegación

El `index.html` contiene:
- Una barra de navegación lateral (`<nav>`) con secciones organizadas jerárquicamente
- Un contenedor de contenido (`<div id="content">`) donde se carga dinámicamente el HTML
- Script.js que maneja:
  - Detección de idioma del navegador (ES/EN)
  - Carga dinámica de archivos HTML según `data-section` attribute
  - Sintaxis resaltada con Prism.js

### Estructura de cada archivo HTML de contenido

Cada tutorial sigue este patrón:

```html
<section class="box">
  <h2>Título del Tutorial</h2>
  <p class="subtitle">Subtítulo descriptivo</p>
  <article>
    <h3>Sección 1</h3>
    <p>Explicación...</p>

    <pre><code class="language-javascript">
    // Código de ejemplo
    </code></pre>

    <div class="problem-box">
      <p><strong>⚠️ Nota importante</strong></p>
      <p>Explicación de concepto clave...</p>
    </div>

    <h3>Páginas relacionadas</h3>
    <ul>
      <li>
        <a href="#" data-section="folder/filename">Link interno</a>
      </li>
    </ul>

    <h3>Recursos adicionales</h3>
    <ul>
      <li>
        <a href="URL_EXTERNA" target="_blank" rel="noopener noreferrer">
          Recurso externo
        </a>
      </li>
    </ul>
  </article>
</section>
```

## Tu Tarea: Crear Proyecto TypeScript

### 1. Estructura Base del Proyecto

Crea la siguiente estructura:

```
TsTheory/
├── index.html
├── script.js
├── styles.css
└── sections/
    ├── es/
    │   ├── fundamentals/
    │   ├── types/
    │   ├── interfaces/
    │   ├── classes/
    │   ├── generics/
    │   ├── advanced/
    │   ├── decorators/
    │   └── utility-types/
    └── en/
        ├── fundamentals/
        ├── types/
        ├── interfaces/
        ├── classes/
        ├── generics/
        ├── advanced/
        ├── decorators/
        └── utility-types/
```

### 2. Contenido de index.html

Debe incluir:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TypeScript Tutorial Interactivo</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>
<body>
  <main>
    <nav>
      <h1>TypeScript</h1>
      <ul>
        <li>
          <h3>1. Fundamentos</h3>
          <ul>
            <li><a href="#" data-section="fundamentals/intro">Introducción a TypeScript</a></li>
            <li><a href="#" data-section="fundamentals/setup">Configuración del entorno</a></li>
            <li><a href="#" data-section="fundamentals/compilation">Compilación</a></li>
          </ul>
        </li>

        <li>
          <h3>2. Tipos Básicos</h3>
          <ul>
            <li><a href="#" data-section="types/primitives">Tipos Primitivos</a></li>
            <li><a href="#" data-section="types/arrays">Arrays y Tuplas</a></li>
            <li><a href="#" data-section="types/enums">Enums</a></li>
            <li><a href="#" data-section="types/any-unknown">any vs unknown</a></li>
            <li><a href="#" data-section="types/union-intersection">Union e Intersection</a></li>
            <li><a href="#" data-section="types/type-aliases">Type Aliases</a></li>
          </ul>
        </li>

        <li>
          <h3>3. Interfaces</h3>
          <ul>
            <li><a href="#" data-section="interfaces/basics">Interfaces básicas</a></li>
            <li><a href="#" data-section="interfaces/optional">Propiedades opcionales</a></li>
            <li><a href="#" data-section="interfaces/readonly">Readonly</a></li>
            <li><a href="#" data-section="interfaces/extending">Extender interfaces</a></li>
            <li><a href="#" data-section="interfaces/vs-types">Interfaces vs Types</a></li>
          </ul>
        </li>

        <li>
          <h3>4. Clases</h3>
          <ul>
            <li><a href="#" data-section="classes/basics">Clases en TypeScript</a></li>
            <li><a href="#" data-section="classes/modifiers">Modificadores de acceso</a></li>
            <li><a href="#" data-section="classes/inheritance">Herencia</a></li>
            <li><a href="#" data-section="classes/abstract">Clases abstractas</a></li>
          </ul>
        </li>

        <li>
          <h3>5. Genéricos</h3>
          <ul>
            <li><a href="#" data-section="generics/intro">Introducción a Genéricos</a></li>
            <li><a href="#" data-section="generics/constraints">Restricciones</a></li>
            <li><a href="#" data-section="generics/functions">Funciones genéricas</a></li>
            <li><a href="#" data-section="generics/classes">Clases genéricas</a></li>
          </ul>
        </li>

        <li>
          <h3>6. Avanzado</h3>
          <ul>
            <li><a href="#" data-section="advanced/mapped-types">Mapped Types</a></li>
            <li><a href="#" data-section="advanced/conditional-types">Conditional Types</a></li>
            <li><a href="#" data-section="advanced/type-guards">Type Guards</a></li>
            <li><a href="#" data-section="advanced/assertion">Type Assertion</a></li>
            <li><a href="#" data-section="advanced/narrowing">Type Narrowing</a></li>
          </ul>
        </li>

        <li>
          <h3>7. Decoradores</h3>
          <ul>
            <li><a href="#" data-section="decorators/intro">Introducción a Decoradores</a></li>
            <li><a href="#" data-section="decorators/class">Decoradores de Clase</a></li>
            <li><a href="#" data-section="decorators/method">Decoradores de Método</a></li>
            <li><a href="#" data-section="decorators/property">Decoradores de Propiedad</a></li>
          </ul>
        </li>

        <li>
          <h3>8. Utility Types</h3>
          <ul>
            <li><a href="#" data-section="utility-types/partial-required">Partial y Required</a></li>
            <li><a href="#" data-section="utility-types/pick-omit">Pick y Omit</a></li>
            <li><a href="#" data-section="utility-types/record">Record</a></li>
            <li><a href="#" data-section="utility-types/exclude-extract">Exclude y Extract</a></li>
            <li><a href="#" data-section="utility-types/returntype">ReturnType</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <div id="content">
      <!-- El contenido se cargará aquí dinámicamente -->
    </div>
  </main>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### 3. Contenido de script.js

Copia exactamente el mismo script.js del proyecto JavaScript, pero cambia:

- El idioma por defecto
- La clase de sintaxis resaltada: `language-javascript` → `language-typescript`

```javascript
// Detectar idioma del navegador
const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith('es') ? 'es' : 'en';

// Función para cargar secciones
function loadSection(sectionPath) {
  const fullPath = `sections/${lang}/${sectionPath}.html`;

  fetch(fullPath)
    .then(response => {
      if (!response.ok) throw new Error('Section not found');
      return response.text();
    })
    .then(html => {
      document.getElementById('content').innerHTML = html;
      // Resaltar código
      Prism.highlightAll();
    })
    .catch(error => {
      document.getElementById('content').innerHTML =
        '<p>Error al cargar la sección.</p>';
      console.error(error);
    });
}

// Event listeners para navegación
document.querySelectorAll('a[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');
    loadSection(section);
  });
});

// Cargar sección inicial
loadSection('fundamentals/intro');
```

### 4. Copia el styles.css

Usa exactamente el mismo `styles.css` del proyecto JavaScript. Los estilos son agnósticos del lenguaje.

### 5. Estructura de Tutoriales

Cada archivo HTML de tutorial debe seguir este patrón:

#### Ejemplo: sections/es/fundamentals/intro.html

```html
<section class="box">
  <h2>Introducción a TypeScript</h2>
  <p class="subtitle">¿Qué es TypeScript y por qué usarlo?</p>
  <article>
    <h3>¿Qué es TypeScript?</h3>
    <p>
      TypeScript es un superconjunto de JavaScript que añade tipado estático opcional.
      Fue desarrollado por Microsoft y se compila a JavaScript puro.
    </p>

    <h3>Ventajas de TypeScript</h3>
    <ul>
      <li>Detección de errores en tiempo de compilación</li>
      <li>Mejor autocompletado y refactorización</li>
      <li>Código más mantenible y documentado</li>
      <li>Soporte para las últimas características de JavaScript</li>
    </ul>

    <h3>Primer ejemplo</h3>
    <pre><code class="language-typescript">// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet("World"); // ✅ OK
greet(42);      // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
    </code></pre>

    <div class="problem-box">
      <p><strong>💡 Concepto clave:</strong></p>
      <p>
        TypeScript no se ejecuta en el navegador. Se compila a JavaScript
        antes de ser usado en producción.
      </p>
    </div>

    <h3>TypeScript vs JavaScript</h3>
    <table>
      <thead>
        <tr>
          <th>JavaScript</th>
          <th>TypeScript</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tipado dinámico</td>
          <td>Tipado estático</td>
        </tr>
        <tr>
          <td>Errores en runtime</td>
          <td>Errores en compile time</td>
        </tr>
        <tr>
          <td>Sin necesidad de compilación</td>
          <td>Requiere compilación</td>
        </tr>
      </tbody>
    </table>

    <h3>Páginas relacionadas</h3>
    <ul>
      <li>
        <a href="#" data-section="fundamentals/setup">
          Configuración del entorno
        </a>
      </li>
      <li>
        <a href="#" data-section="fundamentals/compilation">
          Proceso de compilación
        </a>
      </li>
    </ul>

    <h3>Recursos adicionales</h3>
    <ul>
      <li>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación oficial de TypeScript
        </a>
      </li>
    </ul>
  </article>
</section>
```

#### Ejemplo: sections/en/fundamentals/intro.html

```html
<section class="box">
  <h2>Introduction to TypeScript</h2>
  <p class="subtitle">What is TypeScript and why use it?</p>
  <article>
    <h3>What is TypeScript?</h3>
    <p>
      TypeScript is a superset of JavaScript that adds optional static typing.
      It was developed by Microsoft and compiles to plain JavaScript.
    </p>

    <h3>TypeScript Advantages</h3>
    <ul>
      <li>Error detection at compile time</li>
      <li>Better autocomplete and refactoring</li>
      <li>More maintainable and documented code</li>
      <li>Support for latest JavaScript features</li>
    </ul>

    <h3>First example</h3>
    <pre><code class="language-typescript">// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet("World"); // ✅ OK
greet(42);      // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
    </code></pre>

    <div class="problem-box">
      <p><strong>💡 Key concept:</strong></p>
      <p>
        TypeScript doesn't run in the browser. It compiles to JavaScript
        before being used in production.
      </p>
    </div>

    <h3>TypeScript vs JavaScript</h3>
    <table>
      <thead>
        <tr>
          <th>JavaScript</th>
          <th>TypeScript</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dynamic typing</td>
          <td>Static typing</td>
        </tr>
        <tr>
          <td>Runtime errors</td>
          <td>Compile time errors</td>
        </tr>
        <tr>
          <td>No compilation needed</td>
          <td>Requires compilation</td>
        </tr>
      </tbody>
    </table>

    <h3>Related pages</h3>
    <ul>
      <li>
        <a href="#" data-section="fundamentals/setup">
          Environment setup
        </a>
      </li>
      <li>
        <a href="#" data-section="fundamentals/compilation">
          Compilation process
        </a>
      </li>
    </ul>

    <h3>Additional Resources</h3>
    <ul>
      <li>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official TypeScript Documentation
        </a>
      </li>
    </ul>
  </article>
</section>
```

## Temas Clave a Cubrir

### 1. Fundamentos
- Introducción a TypeScript
- Configuración (tsconfig.json)
- Compilación y transpilación
- Tipos básicos vs JavaScript

### 2. Tipos Básicos
- Primitivos: string, number, boolean, null, undefined
- Arrays y Tuplas
- Enums
- any, unknown, never, void
- Union types (|)
- Intersection types (&)
- Type aliases

### 3. Interfaces
- Definición de interfaces
- Propiedades opcionales (?)
- Propiedades readonly
- Index signatures
- Extending interfaces
- Interfaces vs Type aliases

### 4. Clases
- Clases en TypeScript
- Public, private, protected
- Readonly en clases
- Getters y setters
- Static members
- Abstract classes
- Implements vs extends

### 5. Genéricos
- Qué son y por qué usarlos
- Funciones genéricas
- Clases genéricas
- Constraints (extends)
- Default types
- Genéricos múltiples

### 6. Avanzado
- Mapped Types
- Conditional Types
- Template Literal Types
- Type Guards (typeof, instanceof, in)
- Type Assertions (as)
- Type Narrowing
- Discriminated Unions

### 7. Decoradores
- Qué son los decoradores
- Class decorators
- Method decorators
- Property decorators
- Parameter decorators
- Decorator factories

### 8. Utility Types
- Partial<T>
- Required<T>
- Readonly<T>
- Pick<T, K>
- Omit<T, K>
- Record<K, T>
- Exclude<T, U>
- Extract<T, U>
- NonNullable<T>
- ReturnType<T>
- Parameters<T>

## Patrones de Diseño a Seguir

### ✅ Hacer

1. **Siempre crear versiones bilingües** (ES/EN)
2. **Mantener la misma estructura HTML** en todos los tutoriales
3. **Usar `language-typescript`** en los bloques de código
4. **Incluir ejemplos prácticos** con código ejecutable
5. **Añadir cajas de advertencia** (`problem-box`) para conceptos clave
6. **Incluir tablas comparativas** cuando sea útil
7. **Agregar enlaces a recursos externos** (documentación oficial, ChatGPT, etc.)
8. **Enlaces internos** usando `data-section` para navegación
9. **Ejercicios prácticos** al final de cada tutorial
10. **Resumen con puntos clave** (✅) al final

### ❌ Evitar

1. **NO mezclar idiomas** en el mismo archivo
2. **NO usar rutas absolutas** para imágenes o recursos
3. **NO incluir JavaScript ejecutable** en los tutoriales (solo ejemplos)
4. **NO olvidar Prism.js** para resaltado de sintaxis
5. **NO crear archivos fuera de las carpetas es/en**

## Checklist de Implementación

### Fase 1: Estructura Base
- [ ] Crear carpeta raíz `TsTheory/`
- [ ] Crear `index.html` con navegación completa
- [ ] Copiar `script.js` (con modificaciones para TypeScript)
- [ ] Copiar `styles.css`
- [ ] Crear estructura de carpetas `sections/es/` y `sections/en/`
- [ ] Crear subcarpetas para cada sección

### Fase 2: Contenido Básico
- [ ] Fundamentals: intro, setup, compilation (ES/EN)
- [ ] Types: primitives, arrays, enums, any-unknown (ES/EN)
- [ ] Interfaces: basics, optional, readonly (ES/EN)

### Fase 3: Contenido Intermedio
- [ ] Classes: basics, modifiers, inheritance, abstract (ES/EN)
- [ ] Generics: intro, constraints, functions, classes (ES/EN)

### Fase 4: Contenido Avanzado
- [ ] Advanced: mapped-types, conditional-types, type-guards (ES/EN)
- [ ] Decorators: intro, class, method, property (ES/EN)
- [ ] Utility Types: todos los principales (ES/EN)

### Fase 5: Refinamiento
- [ ] Revisar todos los enlaces internos
- [ ] Añadir recursos adicionales externos
- [ ] Verificar resaltado de sintaxis
- [ ] Probar navegación en ambos idiomas
- [ ] Validar HTML de todos los archivos

## Ejemplo de Prompt Inicial para la IA

```
Necesito crear un sitio web de tutoriales interactivos de TypeScript siguiendo
la arquitectura exacta del proyecto JavaScript que te mostré anteriormente.

Estructura requerida:
- Carpeta raíz: TsTheory/
- Navegación bilingüe (ES/EN) con carpetas sections/es/ y sections/en/
- 8 secciones principales: fundamentals, types, interfaces, classes, generics,
  advanced, decorators, utility-types
- Carga dinámica de contenido con script.js
- Resaltado de sintaxis con Prism.js (language-typescript)

Comienza creando:
1. El index.html completo con toda la navegación
2. El script.js adaptado para TypeScript
3. Los primeros 3 tutoriales de la sección "fundamentals":
   - intro.html (ES/EN)
   - setup.html (ES/EN)
   - compilation.html (ES/EN)

Cada tutorial debe seguir el patrón HTML que te mostré, incluyendo:
- <section class="box"> como contenedor principal
- Ejemplos de código con <pre><code class="language-typescript">
- Cajas de advertencia con <div class="problem-box">
- Enlaces relacionados y recursos adicionales
- Resumen con puntos clave al final

Usa un tono pedagógico, claro y profesional, similar al proyecto JavaScript.
```

## Notas Finales

- **Consistencia es clave**: Mantén el mismo formato en todos los archivos
- **Bilingüe siempre**: Cada archivo en ES debe tener su equivalente en EN
- **Ejemplos prácticos**: TypeScript brilla con ejemplos que muestran errores de tipo
- **Comparaciones**: Siempre que sea útil, compara con JavaScript
- **Documentación oficial**: Enlaza a la documentación oficial de TypeScript
- **Progresión lógica**: Ve de lo simple a lo complejo
- **Ejercicios**: Incluye ejercicios prácticos en cada tutorial

## Recursos para Contenido

- Documentación oficial: https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- TypeScript Deep Dive: https://basarat.gitbook.io/typescript/
- Playground: https://www.typescriptlang.org/play

---

**Arquitectura completa lista para replicar. Sigue estos patrones exactos para mantener la consistencia con el proyecto JavaScript.**
