# Simple Dashboard Project

This repository contains a dashboard application designed to visualize shipment and operational data. It is developed using React for the frontend and leverages a lightweight JSON-server as a backend for demonstration purposes.

## Project Structure

The project is organized as follows:

- **backend/**: Contains the backend logic and APIs that power the application.
- **shipments-dashboard/**: The frontend part, where the user interface is implemented.

## Prerequisites

Before running this project locally, ensure the following software is installed:

- **Node.js**: (preferably the latest LTS version)
- **npm** or **Yarn**: For managing project dependencies

## Installation & Setup

- Clone this repo on your machine
  ```bash
  git clone https://github.com/lproko/dashoboard.git
  ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies
   ```bash
   npm install
   ```
3. Start the backend server
   ```bash
   npx json-server db.json
   ```

### Frontend Setup

1. Navigate to the shipments-dashboard directory
   ```bash
   cd shipments-dashboard
   ```
2. Install the required frontend dependencies
   ```bash
   npm install
   ```
3. Start the frontend application

   ```bash
   npm run dev
   ```

   After completing these steps, you should be able to visit the dashboard at http://localhost:5173 (or a different port specified in the terminal).

### Development Workflow

- **Frontend Development**: Work on the components in the `src` directory. Styling is managed using Chakra UI,
  and the data visualizations use libraries such as `chart.js` and `react-leaflet`

- **API Integration**: All API calls from the frontend interact with the JSON-server.The mock data for the dashboard is stored in db.json within the backend directory. JSON-server serves as a lightweight API backend for development, offering easy mock data simulation.

- **Testing**: Add unit and integration tests using Jest and React Testing Library.
