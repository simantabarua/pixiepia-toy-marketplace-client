# PixiePia

# [Live Site Link](https://pixie-pia.web.app/)

## Description

#### This website is full-stack Toy Marketplace website various features and functionalities. It includes registration and login systems, different page sections, CRUD operations.

## Technologies Used

- ReactJS
- Tailwind CSS
- Firebase
- Mongodb
- Node.js
- Express.js
- contextAPI
- React-router-dom
- React-hook-form 
- AOS library 

## Installation

To install and run the project locally, follow these steps:
Clone this repository
Install dependencies using npm install
Create a .env file in the root directory and add your Firebase config keys
Run the app using npm start
Openhttp://localhost:5000 in your browser

## Features

- All Toys Page: Displays a table or list of toys added by users, including seller name, toy name, sub-category, price, available quantity, and a "View Details" button. Provides a search system based on toy names.

- Single Toy Details Route (Private): Redirects users to a private route showing detailed information about a specific toy, including picture, name, seller name, seller email, price, rating, available quantity, and description. Optionally, uses a modal for display.

- Add A Toy Page (Private): Allows users to add a new toy with fields for picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and description.

  -My Toys Page (Private): Shows logged-in users all the toys they have added in a tabular form. Provides options to update or delete each toy, allowing modifications to price, available quantity, and detailed description.

- 404 Page: Handles invalid routes or pages not found. Features an interesting image or animation and a "Back to Home" button for easy navigation.

- Environment Variables: Emphasizes the use of environment variables to securely store sensitive information such as Firebase config keys and MongoDB credentials.

### Bonus Features

- Shop page