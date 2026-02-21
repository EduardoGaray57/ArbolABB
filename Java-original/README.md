# 🌳 Árbol Binario de Búsqueda (ABB) — Java

Implementación en **Java** de un **Árbol Binario de Búsqueda (ABB / Binary Search Tree)**, desarrollada con fines educativos para comprender el funcionamiento interno de esta estructura de datos fundamental.

Un ABB organiza los datos de forma jerárquica, permitiendo realizar operaciones de **inserción, búsqueda y recorrido** de manera eficiente.

---

## 📌 Características principales

- Implementación clásica de un Árbol Binario de Búsqueda
- Inserción de nodos respetando la propiedad del ABB
- Estructura clara y fácil de entender
- Ideal para estudio y práctica de estructuras de datos en Java

---

## 📂 Estructura del proyecto

```
Java-original/
├── Nodo.java        # Representa un nodo del árbol
├── ABB.java         # Implementación del Árbol Binario de Búsqueda
├── PruebaABB.java   # Clase de prueba con método main
└── README.md        # Documentación del proyecto
```

---

## 🧱 Descripción de las clases

### 🔹 Nodo.java

Define la estructura básica de un nodo del árbol:

- Dato almacenado
- Referencia al hijo izquierdo
- Referencia al hijo derecho

Cada nodo puede tener **cero, uno o dos hijos**.

---

### 🔹 ABB.java

Contiene la lógica principal del Árbol Binario de Búsqueda, incluyendo:

- Inserción de elementos
- Gestión de la raíz del árbol
- Métodos para recorrer el árbol (según implementación)

---

### 🔹 PruebaABB.java

Clase utilizada para probar el funcionamiento del ABB.  
Aquí se crean instancias del árbol, se insertan valores y se muestran los resultados de las operaciones.

---

## 🔍 Propiedad del Árbol Binario de Búsqueda

Para cada nodo del árbol:

- Todos los valores del **subárbol izquierdo** son menores al nodo
- Todos los valores del **subárbol derecho** son mayores al nodo

Gracias a esta propiedad, las operaciones de búsqueda son eficientes.

---

## ▶️ Ejecución del proyecto

### Requisitos

- Java 8 o superior
- Consola o IDE compatible con Java (IntelliJ, Eclipse, NetBeans, VS Code)

### Compilación y ejecución

Desde la carpeta `Java-original`:

```bash
javac *.java
java PruebaABB
```

---

## 🎯 Objetivo del proyecto

Este proyecto tiene como objetivo:

- Comprender la estructura y funcionamiento de un ABB
- Practicar programación orientada a objetos en Java
- Servir como base para futuras mejoras (recorridos, eliminación, balanceo, etc.)

---

## 📚 Posibles mejoras

- Implementar recorridos: inorden, preorden y postorden
- Agregar eliminación de nodos
- Controlar duplicados
- Implementar árboles balanceados (AVL o Red-Black)
- Agregar pruebas unitarias

---

## 📄 Licencia

Proyecto de uso **educativo**, libre para estudiar, modificar y reutilizar.
