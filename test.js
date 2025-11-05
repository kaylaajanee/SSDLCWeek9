const assert = require("assert");
const { add, divide } = require("./math.js");

try {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);

  assert.strictEqual(divide(6, 3), 2);
  assert.throws(() => divide(6, 0), /Division by zero/);

  console.log("All tests passed");
} catch (error) {
  console.log("Test failed:", error.message);
  process.exit(1);
}
