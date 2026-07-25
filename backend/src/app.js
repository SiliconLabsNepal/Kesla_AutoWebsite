// const express = require('express');
// const cors = require('cors');
// const routes = require('./routes');
// const errorHandler = require('./middleware/errorHandler');

// const app = express();

// app.use(cors({ origin: process.env.CORS_ORIGIN }));
// app.use(express.json());

// app.use('/api', routes);

// app.use(errorHandler);

// module.exports = app;

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean)
  : ['http://localhost:3000'];

app.use(
  cors({
    origin(origin, callback) {
      // Allows tools and server-to-server requests that do not send an Origin header
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin not allowed by CORS: ${origin}`));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;