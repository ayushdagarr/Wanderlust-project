# WanderLust-Project

🌍 Wanderlust – Travel Listing Web App

Wanderlust is a fully-featured travel marketplace web application where users can explore unique stays, discover new destinations, and share their travel experiences. It allows travelers to browse curated listings, create their own property listings with seamless image uploads via Cloudinary, interact with other users through reviews, and securely manage their personal accounts.

Designed with a focus on real-world functionality, Wanderlust combines a clean UI, secure authentication, ownership-based permissions, and a robust backend architecture — making it feel like a mini Airbnb clone built using modern web technologies.

Whether you're exploring destinations or hosting your own, Wanderlust delivers a smooth, intuitive user experience built on a scalable, production-ready stack.


✨ Features

🏨 Listings
-Create, edit, delete travel listings

-Upload images via Cloudinary

View detailed pages for each listing

Owner-only edit & delete access


⭐ Reviews
Add, edit, delete reviews

Logged-in users only

Author-only permissions


👤 Authentication
Signup / Login with Passport.js

Persistent sessions

Flash messages for feedback



🛡️ Authorization
Users must be logged in to create listings

Only listing owners can modify their posts

Only review authors can modify their reviews



☁️ Cloud Features
Image uploads to Cloudinary

Multer + Cloudinary storage adapter

Secure credentials handled through .env



🛠 Tech Stack

Backend: Node.js, Express
Database: MongoDB, Mongoose
Auth: Passport.js + Local Strategy
Templating Engine: EJS + EJS-Mate
Image Uploads: Multer, Cloudinary
Validation: Joi
Session: express-session + connect-flash
