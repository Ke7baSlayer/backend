const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100', {
      headers: {
        'X-CMC_PRO_API_KEY': 'd7adb606-aa88-4886-8787-104881b904d8',
      },
    });

    // Success: send the response data as JSON
    const jsonData = response.data;
    res.json(jsonData);
  } catch (error) {
    // Error handling: send an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
