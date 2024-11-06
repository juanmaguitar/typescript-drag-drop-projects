# Drag & Drop Project Manager

A TypeScript project that implements a drag-and-drop interface for managing projects. Users can create projects and drag them between "Active" and "Finished" states.

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
