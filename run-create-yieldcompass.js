const { spawnSync } = require('child_process');
const ONCHAINOS_PATH = "C:\\Users\\shuhaib s\\.local\\bin\\onchainos.exe";

const service = [
  {
    serviceName: "Yield Compass Advisor",
    serviceDescription: "Scans live DeFi products across chains and provides gas-optimized strategy recommendations.\nProvide: 1. token (e.g. USDC, ETH) 2. amount (capital size in USD)",
    serviceType: "A2A",
    fee: "1"
  }
];

const args = [
  "agent", "create",
  "--role", "asp",
  "--name", "YieldCompass",
  "--description", "DeFi yield scanner and gas-optimized investment strategy advisor across multi-chain protocols.",
  "--picture", "https://static.okx.com/cdn/web3/wallet/marketplace/headimages/agent/avatar/e1062cf7-2fa2-4577-af29-e20352e7125c.png",
  "--service", JSON.stringify(service)
];

const result = spawnSync(ONCHAINOS_PATH, args, { env: process.env, encoding: 'utf8' });
if (result.error) {
  console.error("Error:", result.error);
} else {
  console.log(result.stdout);
  if (result.stderr) console.error("Stderr:", result.stderr);
}
