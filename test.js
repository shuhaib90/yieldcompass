const { generateYieldReport } = require('./index');

async function runTests() {
  console.log("=== STARTING YIELDCOMPASS END-TO-END TESTS ===");
  
  // Test 1: Small capital ($100 USDC) -> Gas friction matters significantly
  console.log("\n------------------------------------------------");
  console.log("Test Case 1: Small Capital ($100 USDC)");
  try {
    const report1 = await generateYieldReport("USDC", "100");
    console.log("\n[Strategy Summary]:\n", report1.strategy_summary);
    console.log("\n[Top Opportunities]:");
    console.table(report1.top_opportunities);
    console.log("\n[Execution Steps]:");
    report1.execution_steps.forEach(step => console.log(" -", step));
  } catch (err) {
    console.error("Test Case 1 Error:", err.message);
  }

  // Test 2: Large capital ($10,000 USDC) -> Maximum APY & TVL matter
  console.log("\n------------------------------------------------");
  console.log("Test Case 2: Large Capital ($10,000 USDC)");
  try {
    const report2 = await generateYieldReport("USDC", "10000");
    console.log("\n[Strategy Summary]:\n", report2.strategy_summary);
    console.log("\n[Top Opportunities]:");
    console.table(report2.top_opportunities);
    console.log("\n[Execution Steps]:");
    report2.execution_steps.forEach(step => console.log(" -", step));
  } catch (err) {
    console.error("Test Case 2 Error:", err.message);
  }

  console.log("\n=== TESTS COMPLETED SUCCESSFULLY ===");
}

runTests();
