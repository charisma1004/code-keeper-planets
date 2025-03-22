# Exoplanet Explorer   by  Ahmed Zaky  Italy

**live demo: [https://code-keeper-planets.vercel.app/login](https://code-keeper-planets.vercel.app/login)**

## Overview
Exoplanet Explorer is a simple Next.js application that allows users to submit and explore exoplanets—planets that exist outside our solar system. Users can add new exoplanet entries, search for them, and view detailed information. The application is designed to be responsive and user-friendly.

## Features
- **Exoplanet List**: Displays a list of added exoplanets with key details such as name, distance from Earth (in light-years), and discovery year.
- **Search Functionality**: Users can search for specific exoplanets by name.
- **Exoplanet Submission Form**: A form for users to add new exoplanets, which includes fields for name, distance, discovery year, description, and image URL.
- **Exoplanet Details Page**: Displays comprehensive details of a selected exoplanet, including an optional image.
- **Responsive Design**: The application is optimized for both desktop and mobile users.

## Technologies Used
- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS
- **State Management**: React state
- **Backend**: Firebase (Firestore for data storage)
- **Deployment**: Vercel 
- **Containerization**: Docker 

## Setup Instructions
To run the application locally, follow these steps:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/charisma1004/code-keeper-planets.git
   ```
2. **Install Dependencies:**
  Ensure you have Node.js installed, then run:

  ```shell
  npm install
  ```

3.Run the Development Server:

  ```shell
  npm run dev
  ```



## Docker Setup
  To run the application using Docker, ensure that you have Docker installed on your machine. Then follow the steps below:

**Build the Docker Image:**
  ```shell
  docker build -t exoplanet-explorer
  ```

**Run the Docker Container:**

  ```shell
  docker run -p 3000:3000 exoplanet-explorer
  ```






