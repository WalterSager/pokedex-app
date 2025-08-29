# 🎮 Pokédex — React + TypeScript + Tailwind

Aplicación web estilo Pokédex que consume la **PokéAPI** para listar Pokémon por páginas y mostrar **detalles en un modal** (stats, tipos, habilidades, altura, peso, etc.).

> Proyecto pensado para practicar **React + TypeScript + TailwindCSS**, manejo de **fetching**, **paginación** y **UI accesible**.

---

## ✨ Features
- ✅ Listado de Pokémon con **paginación**.
- ✅ **Modal de detalles** al hacer click en una card.
- ✅ Estilos con **TailwindCSS** (responsive y dark-friendly).
- ✅ Tipado fuerte con **TypeScript**.
- 🧩 Arquitectura simple: `components/`, `hooks/`, `services/`, `types/`, `utils/`.

---

## 🧰 Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)

API: [PokeAPI](https://pokeapi.co/)

---

## 🗂️ Estructura del proyecto (resumen)

src/
├─ components/
├─ hooks/
├─ services/
├─ types/ 
├─ utils/
├─ App.tsx
└─ main.tsx
---

## 🚀 Cómo correrlo localmente

```bash
# 1) Clonar
git clone https://github.com/WalterSager/pokedex-app.git
cd pokedex-app

# 2) Instalar dependencias
npm install

# 3) Ejecutar en desarrollo
npm run dev
