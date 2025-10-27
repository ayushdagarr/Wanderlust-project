# Wanderlust-project

Wanderlust is a full-stack web application inspired by Airbnb, designed to help users explore, create, and review travel destinations from around the world.
It’s built with a focus on clean architecture, responsive design, and secure user interactions — showcasing skills in Node.js, Express, MongoDB, Cloudinary, and MapLibre integration.

The platform enables travelers to share their experiences by adding property listings with photos, viewing others’ posts, and leaving reviews — fostering a vibrant travel community experience.

💡 Project Overview

Wanderlust allows users to:

* 🏡 Create and manage listings — Add new stays with detailed descriptions, prices, and images.

*🔐 Register and log in securely — Built using Passport.js with sessions and authentication.

* 🗺️ Explore listings on an interactive map — Implemented using MapLibre GL JS and Geoapify API for free map rendering.

* 💬 Leave reviews and ratings — Authenticated users can share feedback on listed stays.

* ☁️ Upload images to the cloud — Integrated Cloudinary for fast and reliable image storage.

* ⚙️ Validate data and handle errors gracefully — Ensures secure and user-friendly interactions with Joi and custom error-handling middleware.

🧰 Tech Stack

The project is built using Node.js and Express.js on the backend, with EJS as the templating engine for rendering dynamic views.
It utilizes MongoDB Atlas for a scalable, cloud-based database solution.
User authentication and session management are implemented with Passport.js (Local Strategy) and Express-Session, ensuring secure login and data handling.
Image uploads are managed via Cloudinary, integrated through Multer for efficient cloud storage.
Interactive maps are powered by MapLibre GL JS and the Geoapify API, providing responsive and open-source map visualization.
Data validation and error management are handled using Joi and Express middleware, with configuration managed through dotenv.
For version control and collaboration, the project relies on Git and GitHub.

🚀 Key Highlights

* ✅ Developed a fully functional CRUD-based platform for travel listings.

* 🔒 Implemented secure session handling and authorization middleware for ownership protection.

* 📸 Integrated Cloudinary + Multer for real-time image uploads.

* 🗺️ Used MapLibre GL JS for free, high-quality map visualization.

* 🧩 Built with a modular and scalable architecture using Express routers and controllers.
