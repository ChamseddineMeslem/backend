const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'مرحبًا من الباك اند!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
