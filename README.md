# Renoon Project

This project is a web development project for Renoon. It utilizes Pug templates and Sass for styling. This README provides instructions on how to set up and use the project.

## Installation
Before getting started, make sure you have Node.js installed on your machine.

Clone this repository to your local machine:

```bash
git clone <repository_url>
```

Navigate to the project directory:

```bash
cd renoon-project
```

Install the project dependencies:

```bash
npm install
```

## Usage
The project includes several NPM scripts to simplify development and production tasks.

Development
To start the development environment with automatic compilation and watching of Pug templates and Sass styles, use:

```bash
npm run dev
```

This command will start two processes in parallel, watching Pug and Sass files for changes and recompiling them automatically.

Build
To manually compile Pug templates and Sass styles for production, you can use:

```bash
npm run build
```

This command will compile the Pug templates into HTML and Sass styles into CSS, saving the output to the dist directory.
