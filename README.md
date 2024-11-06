# Drag & Drop Project Manager

A TypeScript project that implements a drag-and-drop interface for managing projects. Users can create projects and drag them between "Active" and "Finished" states.

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
