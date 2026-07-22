const { spawnSync } = require('child_process');
const ONCHAINOS_PATH = "C:\\Users\\shuhaib s\\.local\\bin\\onchainos.exe";

const serviceDelta = [
  {
    operation: "update",
    id: "35558",
    serviceName: "Yield Compass Advisor",
    serviceDescription: "Scans live DeFi products across chains with gas friction analysis, whale signals, and rug security audits.\nProvide: 1. token (e.g. USDC, ETH) 2. amount (capital size in USD)",
    serviceType: "A2A",
    fee: "1"
  }
];

const args = [
  "agent", "update",
  "--agent-id", "6809",
  "--description", "DeFi yield scanner, gas friction advisor, smart money whale signal tracker, and token security rug auditor across multi-chain protocols.",
  "--service", JSON.stringify(serviceDelta)
];

const result = spawnSync(ONCHAINOS_PATH, args, { env: process.env, encoding: 'utf8' });
if (result.error) {
  console.error("Error:", result.error);
} else {
  console.log(result.stdout);
  if (result.stderr) console.error("Stderr:", result.stderr);
}
