# Job Board Application

A React-based job board application built with TypeScript, Vite, Tailwind CSS, Radix UI, React Helmet, React Hook Form, Zod, Jest and React Testing Library.

## Setup Instructions

1. Clone the repository: `git clone [https://github.com/jpjuliao/job-board.git`](<https://github.com/jpjuliao/job-board.git>)
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open the application in your browser

## Code Logic

The application is built using a modular approach, with separate components for each feature. The main components are:

* `JobBoard`: Displays a list of available jobs
* `JobDetails`: Displays details about the job
* `JobCard`: Displays a single job listing
* `JobCardDialog`: Displays a Dialog with job's details and allows for editing
* `JobFilter`: Displays a job type select to filter results
* `JobForm`: Handles job submission and validation
* `ErrorBoundary`: Serves as an error boundary to catch JavaScript errors anywhere in the child component tree
* `withProfiler`: Wraps a component in a Profiler that logs the time it takes to render

The application uses React Hooks for state management and Tailwind CSS for styling.

## How to Use

1. Open the application in your browser
2. Browse the list of available jobs on the JobBoard component
3. Click on the "Post a Job" button to open the JobForm component
4. Fill out the job form fields and submit the form to create a new job listing
5. Use the filters on the JobBoard component to narrow down the job listings by type (e.g., full-time, part-time, etc.)

## Technologies and Tools Used

The following technologies and tools were used to build this application:

* Frontend:
  * React: A JavaScript library for building user interfaces
  * TypeScript: A superset of JavaScript that adds optional static typing
  * Vite: A fast and lightweight development server
  * Tailwind CSS: A utility-first CSS framework
  * Radix UI: A UI component library
  * Helmet: A head meta data manager
  * Zod: TypeScript-first schema declaration and validation library with static type inference
* Testing:
  * Jest: A JavaScript testing framework
  * React Testing Library: A testing library for React components

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
