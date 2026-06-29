const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const foodsRouter = require('./routes/foods');
const ordersRouter = require('./routes/orders');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/foods', foodsRouter);
app.use('/api/orders', ordersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});