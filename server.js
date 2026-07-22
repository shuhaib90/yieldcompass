const express = require('express');
const path = require('path');
const { generateYieldReport, fetchWhaleSignals, scanTokenSecurity } = require('./index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ScoutGate Evidence Showcase Route
app.get('/scoutgate', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scoutgate.html'));
});

// Endpoint 1: Primary Yield & Gas Recommendation Strategy
app.get('/api/recommend', async (req, res) => {
  try {
    const token = req.query.token || 'USDC';
    const amount = req.query.amount || '1000';
    const chains = req.query.chains || '';

    console.log(`[API /recommend] token=${token}, amount=${amount}, chains=${chains}`);
    const report = await generateYieldReport(token, amount, { chains });
    res.json({ ok: true, data: report });
  } catch (error) {
    console.error('[API /recommend] Error:', error.message);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Endpoint 2: Dedicated Whale & Smart Money Radar API
app.get('/api/whales', (req, res) => {
  try {
    const chain = req.query.chain || 'ethereum';
    const signals = fetchWhaleSignals(chain);
    res.json({ ok: true, data: signals });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Endpoint 3: Dedicated Token Security & Rug Audit API
app.get('/api/security', (req, res) => {
  try {
    const token = req.query.token || 'USDC';
    const audit = scanTokenSecurity(token);
    res.json({ ok: true, data: audit });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🌾 YieldCompass Web Dashboard: http://localhost:${PORT}`);
  console.log(`🛡️  ScoutGate Evidence Site: http://localhost:${PORT}/scoutgate`);
  console.log(`==================================================\n`);
});
