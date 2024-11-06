# Drag & Drop Project Manager

> [!NOTE]
> This project is part of the [TypeScript Course](https://www.udemy.com/course/typescript/) by Maximilian Schwarzmüller ([@mschwarzmueller](https://github.com/mschwarzmueller)) on Udemy.

A TypeScript project that implements a drag-and-drop interface for managing projects. Users can create projects and drag them between "Active" and "Finished" states.

This repository contain several versions of the same project, each one with a different build tool. These versions are available in different branches:

- [`namespaces`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/namespaces): Using typescript [namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html) to organize code (legacy approach, see [TypeScript docs](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html))
- [`esm`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/esm): Using [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to organize code
- [`vite-bundle`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/vite-bundle): Using [Vite](https://vitejs.dev/) to bundle the project for production

The [`main`](https://github.com/juanmaguitar/typescript-drag-drop-projects/tree/main) branch contains the latest version of the project using Vite to bundle the project for production.

## Features

- Create new projects with title, description, and number of people
- Drag and drop projects between Active and Finished states
- Form validation for project inputs
- Component-based architecture
- State management using singleton pattern
- TypeScript interfaces and type safety
- **Vite configuration** to:
  - _Development Mode_: split files and coordinate them using ESM `import`/`export`
  - _Production Mode_: Bundling a unique file with tree-shaked code

## Project Structure

The project follows a modular architecture with the following structure:

- `src/` - Source code directory

  - `Component.ts` - Abstract base class providing core rendering and DOM manipulation functionality
  - `DragAndDrop.ts` - Interfaces defining drag & drop behavior contracts for projects
  - `Project.ts` - Project model class and status enum for managing project data
  - `ProjectInput.ts` - Form component handling user input and project creation
  - `ProjectItem.ts` - Component representing individual project items in lists
  - `ProjectList.ts` - Component managing lists of active and finished projects
  - `ProjectState.ts` - Singleton state management using observer pattern
  - `utils.ts` - Shared utility functions, decorators and validation logic
  - `app.ts` - Main application entry point instantiating core components

## Technical Details

- Written in TypeScript
- Compiled to ES6
- Uses DOM manipulation
- Implements drag & drop API
- Follows OOP principles
- Strict type checking enabled

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

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

The development server will start at `http://localhost:5173` by default.
