# Trackify Anti-Counterfeit Product Detection System

## Overview
Trackify is an anti-counterfeit product detection system designed to help users verify the authenticity of products. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and features a user-friendly interface with a dark theme.

## Project Structure
The project is organized into two main directories: `client` and `server`.

### Client
The client directory contains the React application, which includes:
- **public/**: Contains static files like `index.html` and `favicon.ico`.
- **src/**: Contains the source code for the React application, including components, pages, hooks, services, styles, and utilities.

### Server
The server directory contains the backend application, which includes:
- **controllers/**: Contains the logic for handling requests related to authentication and product management.
- **models/**: Defines the data models for users and products.
- **routes/**: Contains the API routes for authentication and product management.
- **middleware/**: Includes middleware for authentication.
- **config/**: Contains configuration files, including database connection settings.
- **utils/**: Contains utility functions for the server-side application.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd trackify-anti-counterfeit
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the `server` directory and add your MongoDB connection string and any other necessary environment variables.

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Features
- User authentication
- Product authenticity verification
- Responsive design with a dark theme
- Animated loading page

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.