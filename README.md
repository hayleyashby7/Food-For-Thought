# Food For Thought 🍎🤔

## Overview

Food For Thought is a full-stack meal planning application built with Vite, React.js, TypeScript, Node.js, Sequelize, and Tailwind CSS, using the Spoonacular API. Based on their calorie intake and diet type, it offers daily meal planning features with detailed nutritional information, helping users make mindful decisions about their diet.

## Key Features

- User registration and authentication through Supabase
- Daily meal planning using the Spoonacular API
- Storage and retrieval of meal and nutritional information using Supabase and Sequelize
- An easy-to-use, responsive interface styled with Tailwind CSS

## Getting Started

### Prerequisites

You need to have Node.js and npm installed on your system to run this project. You will also need to set up an account with Supabase and Spoonacular to obtain the necessary API keys. 

Finally as the server is running as a https server for security, you will need to generate a self-signed SSL certificate using OpenSSL. Instructions for this are beyond the scope of this project and can be found online. 

---

### Installation

**1. Clone the repository** 

`git clone git@github.com:hayleyashby7/Food-For-Thought.git`

**2. Install the project dependencies in the server and client folders respectively**

Server
From project root

`cd server`

`npm install`

Client 
From project root

`cd client`

`npm install`

**3. Create a `.env` file in the root of the server folder and add your Supabase,Spoonacular API and SSL Certificate credentials**

`SUPABASE_URL=your-supabase-url`

`SUPABASE_ANON_KEY=your-supabase-anon-key`

`SPOONACULAR_API_KEY=your-spoonacular-api-key`

`SESSION_KEY=your-SSL-cert-key`

**4. Start the server**

In root of server folder 

`npm run dev`

The server will start on port 3000

`https://localhost:3000`

**5. Start the client app**   

In root of client folder 

`npm run dev`

The client will start on port 5173

`https://localhost:5173`


## Usage

After starting the development server, you can navigate to [Food For Thought](https://localhost:5173) to access the Food For Thought app. Register an account and start planning your meals!

## Contributing

We welcome contributions to Food For Thought! If you have an idea for an improvement or find a bug, please open an issue to discuss it.

## License
