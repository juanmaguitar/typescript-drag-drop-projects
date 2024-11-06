# Drag & Drop Project Manager

> [!NOTE]
> This project is part of the [TypeScript Course](https://www.udemy.com/course/typescript/) by Maximilian Schwarzmüller ([@mschwarzmueller](https://github.com/mschwarzmueller)) on Udemy.

A TypeScript project that implements a drag-and-drop interface for managing projects. Users can create projects and drag them between "Active" and "Finished" states.

This repository contain several versions of the same project, each one with a different build tool. These versions are available in different branches:

- [`namespaces`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/namespaces): Using typescript [namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html) to organize code (legacy approach, see [TypeScript docs](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html))
- [`esm`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/esm): Using [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to organize code
- [`vite-bundle`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/vite-bundle): Using [Vite](https://vitejs.dev/) to bundle the project for production

[![See online](https://img.shields.io/badge/see_online-vite_bundle-blue)](https://juanmaguitar.github.io/typescript-drag-drop-projects/vite-bundle/) [![See online](https://img.shields.io/badge/see_online-namespaces-blue)](https://juanmaguitar.github.io/typescript-drag-drop-projects/namespaces/) [![See online](https://img.shields.io/badge/see_online-esm-blue)](https://juanmaguitar.github.io/typescript-drag-drop-projects/esm/)

The [`main`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/main) branch contains the latest version of the project using Vite to bundle the project for production.

## Features

- Create new projects with title, description, and number of people
- Drag and drop projects between Active and Finished states
- Form validation for project inputs
- Component-based architecture
- State management using singleton pattern
- TypeScript interfaces and type safety
- **AMD module system with single bundle output** to:
  - _Development Mode_: split files and coordinate them using `namespace`
  - _Production Mode_: Bundling a unique file at `dist/bundle.js`

## Project Structure

The project follows a modular architecture with the following structure:

- `src/` - Source code directory
  - `models/` - Data models and type definitions
    - `project.ts` - Contains the Project class model and ProjectStatus enum (Active/Finished)
    - `drag-drop.ts` - Defines interfaces for drag & drop operations (Draggable/DragTarget)
  - `state/` - Application state management
    - `project-state.ts` - Implements state management using singleton and observer patterns
  - `components/` - UI Components
    - `base-component.ts` - Abstract class providing DOM rendering and lifecycle methods
    - `project-input.ts` - Handles form submission and project creation logic
    - `project-item.ts` - Renders individual project cards with drag functionality
    - `project-list.ts` - Manages project lists and handles drop events
  - `decorators/` - TypeScript decorators
    - `autobind.ts` - Method decorator to automatically bind method contexts
  - `util/` - Helper functions
    - `validation.ts` - Provides input validation rules and validator functions
  - `app.ts` - Bootstraps the application and initializes main components

## Technical Details

- Written in TypeScript
- Compiled to ES6
- Uses AMD module format
- Single bundle output
- DOM manipulation
- Implements drag & drop API
- Follows OOP principles
- Strict type checking enabled
- Source maps enabled
- Experimental decorators enabled

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/juanmaguitar/drag-drop-project-manager.git
   cd drag-drop-project-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start TypeScript compiler in watch mode:

   ```bash
   npm run dev
   ```

4. `index.html` should be opened in your browser at `http://localhost:3000`

The application will load the bundled JavaScript from the dist/bundle.js file.
