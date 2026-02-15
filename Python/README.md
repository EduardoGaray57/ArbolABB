# 🌳 Árbol Binario de Búsqueda (ABB) en Python

Implementación de un **Árbol Binario de Búsqueda (ABB)** en Python, que incluye
las operaciones fundamentales de la estructura, junto con **pruebas automatizadas usando pytest**.

Este proyecto tiene un enfoque educativo y práctico, orientado a reforzar:
estructuras de datos, recursividad, diseño de clases y testing.

---

## 📁 Estructura del proyecto

Python/
│
├── src/
│ └── ArbolABB.py # Implementación del Árbol Binario de Búsqueda
│
├── tests/
│ └── test_arbolabb.py # Tests automatizados con pytest
│
└── README.md

---

## ⚙️ Funcionalidades implementadas

- Inserción de nodos
- Búsqueda de valores
- Recorridos del árbol:
  - Preorden
  - Inorden
  - Postorden
- Eliminación de nodos:
  - Nodo hoja
  - Nodo con un hijo
  - Nodo con dos hijos
- Manejo de casos borde:
  - Árbol vacío
  - Árbol con un solo nodo
  - Eliminación de elementos inexistentes

---

## 🧪 Pruebas automatizadas

El proyecto incluye pruebas que validan:

- Inserción correcta de múltiples elementos
- Recorrido inorden ordenado
- Búsqueda de valores existentes y no existentes
- Eliminación completa del árbol
- Llamadas a métodos en orden incorrecto
- Casos borde y simulación de errores

### ▶️ Ejecutar los tests

Desde la raíz del proyecto:

```bash
pytest

🛠️ Requisitos

Python 3.8 o superior
pytest

Instalación de dependencias:
pip install pytest

📌 Notas

Este proyecto sirve como práctica de:
Estructuras de datos (ABB)
Programación orientada a objetos
Recursividad
Organización de proyectos en Python
Testing automatizado con pytest
