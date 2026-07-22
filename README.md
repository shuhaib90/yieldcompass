# 🧭 YieldCompass — OKX.AI Gas-Optimized DeFi Strategy Engine

![YieldCompass Banner](public/logo.png)

> **OKX.AI Agent Service Provider (ASP) `#6809` on X Layer Mainnet**  
> *Gas-Optimized Yield Engine, Smart Money Whale Radar, Token Security Audits, and 1-Click Web3 Execution.*

[![Network](https://img.shields.io/badge/Network-X_Layer_Mainnet-black?style=for-the-badge&logo=ethereum)](https://www.okx.com/web3/explorer/xlayer)
[![Agent ID](https://img.shields.io/badge/Agent_ID-%236809-white?style=for-the-badge)](https://www.okx.ai)
[![Service Fee](https://img.shields.io/badge/Service_Fee-1_USDT-emerald?style=for-the-badge)](https://www.okx.ai)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Evidence Layers](#-architecture--evidence-layers)
- [Live Access & Demos](#-live-access--demos)
- [REST API Reference](#-rest-api-reference)
- [Step-by-Step CLI Execution Guide](#-step-by-step-cli-execution-guide)
- [Local Installation & Setup](#-local-installation--setup)
- [License](#-license)

---

## 🌾 Overview

**YieldCompass** is an Agent Service Provider (ASP) and 3D Web Terminal registered on **X Layer Mainnet (`Agent #6809`)**. It transforms raw multi-chain DeFi data from Onchain OS into gas-optimized net return strategies across Ethereum, Base, Solana, Arbitrum, BSC, and X Layer.

By computing exact transaction gas overhead relative to capital size, YieldCompass prevents small depositors from losing yield to high Layer 1 gas friction while pointing whale capital to deep-liquidity pools.

---

## ⚡ Key Features

1. ⛽ **Gas Friction & Net APY Calculator**
   - Automatically deducts chain-specific transaction gas costs ($4.50 on Ethereum L1, $0.15 on L2s, $0.00 on X Layer).
   - Generates real-time gas timing advice for capital under $500 vs over $2,000.

2. 🐳 **Whale & Smart Money Radar (`onchainos signal`)**
   - Scans live smart money wallet accumulation inflows across protocols.
   - Tags opportunities with real-time whale indicators (e.g. `🐳 3 Smart Money Wallets ($14.6k) accumulating on BASE`).

3. 🛡️ **Token Security & Rug Risk Audit (`onchainos security`)**
   - Scans liquidity pools for contract honeypots, mint authority risks, and buy/sell tax rates.
   - Categorizes opportunities into **Tier 1 (Bluechip 0% IL)**, **Tier 2 (Yield Vaults)**, and **Tier 3 (DEX Pools)**.

4. 🌐 **3D WebGL Black & White Terminal**
   - Powered by Three.js WebGL canvas background, Chart.js 7-day rate trend curves, and real vector crypto/chain logos.
   - Zero emojis, crisp 1px solid monochrome styling, and interactive 3D card tilt effects.

5. 💼 **1-Click Web3 Wallet Connect & Direct Deposit**
   - Connects natively to OKX Wallet / MetaMask via EIP-1193 protocol.
   - Enables direct on-chain deposit execution (`DEPOSIT ↗`) straight from the web matrix.

---

## 🏛️ Architecture & Evidence Layers

YieldCompass follows the ScoutGate **Three Unblended Evidence Layers** framework:

```
+-----------------------------------------------------------------------+
|                       YIELDCOMPASS TERMINAL UI                        |
+-----------------------------------------------------------------------+
        |                                   |
        v                                   v
+-----------------------+       +---------------------------------------+
|  01. PROVIDER CLAIM   |       |       02. PLATFORM TELEMETRY          |
|  Yield Compass ASP    |       |  OKX.AI X Layer Mainnet Agent #6809   |
|  1 USDT Service Fee   |       |  Verified Contract TVL & Status       |
+-----------------------+       +---------------------------------------+
        |                                   |
        +-----------------+-----------------+
                          |
                          v
        +-----------------------------------+
        |    03. VERIFIED TEST EVIDENCE     |
        |  Onchain OS Multi-Chain Search    |
        |  Gas Friction & Net Return Engine |
        |  Smart Money Signals & Security   |
        +-----------------------------------+
```

---

## 🌐 Live Access & Demos

| Application | URL | Description |
|---|---|---|
| 🔲 **3D Web Terminal** | [http://localhost:3000](http://localhost:3000) | Main 3D Web3 Yield Terminal |
| 🛡️ **ScoutGate Evidence Site** | [http://localhost:3000/scoutgate](http://localhost:3000/scoutgate) | Adaptive Evidence Navigator |
| 🤖 **OKX.AI ASP Agent** | `Agent #6809` | On-Chain Agent on X Layer Mainnet |

---

## 🔌 REST API Reference

### 1. Primary Yield Strategy
```http
GET /api/recommend?token=USDC&amount=1000
```
**Response:**
```json
{
  "ok": true,
  "data": {
    "capital_usd": "1000",
    "token": "USDC",
    "strategy_summary": "Deploy your $1000 USDC into Compound V3 on BASE...",
    "gas_advice": {
      "status": "💡 Moderate Gas Savings Opportunity",
      "advice": "For capital between $500-$2,000, L2s provide a higher net APY advantage..."
    },
    "top_opportunities": [ ... ]
  }
}
```

### 2. Whale Signal Radar
```http
GET /api/whales?chain=ethereum
```

### 3. Token Security Audit
```http
GET /api/security?token=USDC
```

---

## 💻 Step-by-Step CLI Execution Guide

Execute the full 6-step strategy command suite directly in your terminal:

```bash
# Step 1: Export OKX Web3 API Credentials
export OKX_API_KEY="your_okx_api_key_here"
export OKX_SECRET_KEY="your_okx_secret_key_here"
export OKX_PASSPHRASE="your_okx_passphrase_here"

# Step 2: Call Agent #6809 via OKX A2A Protocol (1 USDT)
npx okx-a2a task send --agent-id 6809 --message "token=USDC, amount=1000"

# Step 3: Search Multi-Chain Liquidity
onchainos defi search --token USDC --chain base

# Step 4: Query 7-Day APY Telemetry
onchainos defi rate-chart --investment-id 28500 --time-range WEEK

# Step 5: Prepare Deposit Calldata Payload
onchainos defi prepare --investment-id 28500

# Step 6: Execute On-Chain Deposit
onchainos defi deposit --investment-id 28500 --amount 1000
```

---

## 📦 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shuhaib90/yieldcompass.git
   cd yieldcompass
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```

4. **Start the Web Server:**
   ```bash
   npm start
   ```

5. **Open Dashboard in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
