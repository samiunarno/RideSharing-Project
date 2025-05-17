<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>MERN Ride-Sharing App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background: #f9f9f9;
      line-height: 1.6;
      color: #333;
    }
    h1, h2, h3 {
      color: #0d6efd;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background: #f0f0f0;
      padding: 10px;
      overflow-x: auto;
      border-left: 4px solid #0d6efd;
    }
    a {
      color: #0d6efd;
    }
  </style>
</head>
<body>

  <h1>🚗 MERN Ride-Sharing Application</h1>

  <p><strong>A full-stack ride-sharing platform built with MongoDB, Express, React, and Node.js.</strong></p>

  <h2>📌 Features</h2>
  <ul>
    <li>User Registration & Login (JWT Auth)</li>
    <li>Role-based Access (Driver, Rider, Admin)</li>
    <li>Book & Offer Rides</li>
    <li>Live Ride Tracking (optional with Socket.io)</li>
    <li>Driver Rating & Feedback System</li>
    <li>Trip History</li>
    <li>Admin Dashboard for Monitoring Users & Rides</li>
  </ul>

  <h2>🚀 Technologies Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js, Axios, React Router, Bootstrap/Tailwind</li>
    <li><strong>Backend:</strong> Node.js, Express.js, JWT, MongoDB</li>
    <li><strong>Database:</strong> MongoDB Atlas</li>
    <li><strong>Authentication:</strong> JSON Web Token (JWT)</li>
    <li><strong>Optional Realtime:</strong> Socket.io</li>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre>
/client
  /src
    /components
    /pages
    /context
    App.js
    index.js

/server
  /controllers
  /models
  /routes
  /middleware
  server.js

.env
package.json (root and /client)
README.html
  </pre>

  <h2>⚙️ Setup Instructions</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/your-username/mern-rideshare-app.git</code></pre>

  <h3>2. Setup Backend</h3>
  <pre><code>
cd server
npm install
create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
  </code></pre>

  <h3>3. Setup Frontend</h3>
  <pre><code>
cd client
npm install
npm run dev
  </code></pre>

  <h3>4. Run the Application</h3>
  <pre><code>
# In root folder (concurrently)
npm install concurrently
npm run dev
  </code></pre>

  <h2>🌐 API Endpoints</h2>
  <ul>
    <li><code>POST /api/auth/register</code> - Register user</li>
    <li><code>POST /api/auth/login</code> - Login user</li>
    <li><code>POST /api/rides</code> - Offer a ride (Driver)</li>
    <li><code>GET /api/rides</code> - Get available rides</li>
    <li><code>POST /api/rides/book/:id</code> - Book a ride</li>
    <li><code>GET /api/user/rides</code> - Get user rides</li>
    <li><code>GET /api/admin/dashboard</code> - Admin stats</li>
  </ul>

  <h2>🛡 Authentication</h2>
  <p>
    All protected routes require a JWT token in headers: <code>Authorization: Bearer &lt;token&gt;</code>.
  </p>

  <h2>📦 Deployment</h2>
  <ul>
    <li>Frontend: Netlify / Vercel</li>
    <li>Backend: Render / Railway / Heroku</li>
    <li>Database: MongoDB Atlas</li>
  </ul>

  <h2>📸 Screenshots</h2>
  <p>Add your project screenshots here.</p>

  <h2>🤝 Contributing</h2>
  <p>Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.</p>

  

  <h2>📬 Contact</h2>
  <p>Email: <a href="mailto:your-email@example.com">samiunarnouk@gmail.com</a></p>
  <p>GitHub: <a href="https://github.com/your-username" target="_blank">samiunarno</a></p>

</body>
</html>
