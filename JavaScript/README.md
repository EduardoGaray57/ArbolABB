
# 🌳 Árbol Binario de Búsqueda (ABB) – JavaScript

Implementación de un **Árbol Binario de Búsqueda (Binary Search Tree)** en JavaScript, incluyendo operaciones fundamentales, pruebas unitarias con **Jest** y análisis de **cobertura de código**.

El proyecto está enfocado en buenas prácticas de estructura, legibilidad, testeo y validación del comportamiento del árbol.

---

## 📌 Características

- Inserción de nodos
- Búsqueda de elementos
- Eliminación de nodos:
  - nodo hoja
  - nodo con un hijo
  - nodo con dos hijos
  - eliminación de la raíz
- Recorridos del árbol:
  - In-order
  - Pre-order
  - Post-order
- Manejo de árbol vacío
- Tests unitarios automatizados
- Reporte de cobertura de código

---

## 🧠 Tecnologías utilizadas

- **JavaScript (ES6+)**
- **Node.js**
- **Jest** (testing y coverage)

---

## 📁 Estructura del proyecto

```
JavaScript/
├─ src/
│  ├─ main.js        # Implementación del Árbol Binario de Búsqueda
│  ├─ bst.test.js    # Pruebas unitarias con Jest
├─ coverage/         # Reporte de cobertura (autogenerado)
├─ node_modules/     # Dependencias
├─ package.json
├─ package-lock.json
```

> Nota: Las carpetas `coverage/` y `node_modules/` no deben versionarse.

---

## 🚀 Instalación y ejecución

### 1️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Ejecutar los tests

```bash
npm test
```

### 3️⃣ Ejecutar tests con cobertura

```bash
npm test -- --coverage
```

---

## 📊 Cobertura de código

Resultados actuales:

- **Statements:** ~97%
- **Branches:** ~96%
- **Functions:** 100%
- **Lines:** ~97%

Las líneas no cubiertas corresponden a ramas internas muy específicas sin efecto observable directo, por lo que no se testean para evitar pruebas artificiales.

---

## 🧪 Pruebas implementadas

Las pruebas verifican:

- Recorrido in-order correcto
- Búsqueda de elementos existentes y no existentes
- Eliminación de nodos hoja
- Eliminación de nodos con dos hijos
- Eliminación de la raíz
- Comportamiento en árbol vacío
- Recorridos pre-order y post-order

---

## 🧩 Decisiones de diseño

- Uso de métodos privados para encapsular la lógica interna
- `delete()` retorna el estado de la operación y el nuevo nodo raíz
- Recorridos implementados de forma iterativa
- Tests enfocados en comportamiento observable

---

## 📈 Posibles mejoras

- Implementar una versión balanceada (AVL)
- Agregar visualización gráfica
- Exportar como módulo reutilizable

---

## 📄 Licencia

Proyecto con fines educativos.
