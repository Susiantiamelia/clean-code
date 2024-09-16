// src/frameworks/web/server.js
const express = require('express');
const bodyParser = require('body-parser');
const ActivityController = require('../../adapters/controllers/ActivityController');

const app = express();
app.use(bodyParser.json());

app.post('/activities', ActivityController.add);
app.put('/activities/:id', ActivityController.edit);
app.delete('/activities/:id', ActivityController.delete);
app.patch('/activities/:id/complete', ActivityController.complete);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
