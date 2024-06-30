const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const personRouter = require('./src/routes/person.routes');
const specialitiesRouter = require('./src/routes/specialities.routes');

app.use(cors());
app.use(express.json());
app.use('/pessoas', personRouter);
app.use('/especialidades', specialitiesRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
