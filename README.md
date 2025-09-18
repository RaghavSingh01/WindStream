# WindStream

A centralized task management application designed to help users and teams organize, track, and prioritize their work efficiently.  



## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)


## Features

- Modern, responsive UI built with React.js  
- Create, edit, delete, and prioritize tasks  
- Organize tasks by status (active, completed, trashed)  
- Designed for smooth collaboration workflows (UI only)  
- Dashboard for an at-a-glance overview of task status  

## Tech Stack

- **Frontend:** React.js, JavaScript, CSS, HTML  
- **Backend:** MERN stack (MongoDB, Express.js, Node.js) code is included but non-functional  
- **Deployment:** Frontend deployed on Netlify ([Live Demo](https://windstream-taskmanager.netlify.app/))

## Getting Started

### Prerequisites

- Node.js and npm installed locally  

### Installation

1. Clone the repo  
```
git clone https://github.com/RaghavSingh01/WindStream.git
```
2. Move into the project directory  
```
cd WindStream 
```
3. Install frontend dependencies  
```
npm install
```
4. Start the React development server  
```
npm start
```

### Production Build

To create a production build of the frontend:  
```
npm run build
```

## Usage

- Register or log in (Using email - singh.raghav1013@gmail.com, password - 1234)  
- Create and manage tasks with priorities and deadlines  
- View tasks sorted by active, completed, and trashed states  
- Collaborate with team members (collaboration features are front-end UI mocks)

## Project Structure

```
src/
│
├── components/ # Reusable UI components
├── pages/ # Application views/pages
├── utils/ # Helper utilities
└── App.js # Main application component
```


**Note:** This repository contains the frontend implementation only (React). Although backend code is present in this repo as part of the MERN stack structure, it is currently non-functional and I have not worked on or maintained it. My work is focused entirely on the frontend.