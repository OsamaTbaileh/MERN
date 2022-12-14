const express = require('express');
const cors = require('cors');
require('./server/config/mongoose.config');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/player.routes')(app);

app.listen(8000, () => console.log("Listening on port: 8000") );
