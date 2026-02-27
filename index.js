const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ status: 'EGOKEYS Backend çalışıyor! 🚀' });
});

// Coin doğrulama örneği
app.post('/api/verify-coin', (req, res) => {
  const { userId, amount } = req.body;
  // Burada Firebase Admin ile doğrulama yaparsın
  res.json({ success: true, userId, amount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
