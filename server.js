const express = require('express');
const path = require('path');
const usersRoute = require('./routes/users'); // Import the users route
const cors = require('cors');

export const app = express();
const PORT = process.env.PORT || 3000;

// use cors
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // enable set cookie
};
app.use(cors(corsOptions));

// Serve static files from the react fontend folder
app.use(express.static(path.join(__dirname, 'fontend/build')));

// Use the users route
app.use('/api/users', usersRoute);

// Catch-all route to serve the frontend
app.get('*', (req, res) => {
  res.status(404).send({message: 'route not found'});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
