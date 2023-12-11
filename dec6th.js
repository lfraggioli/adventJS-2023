const movements = ">>><<*>>";

function maxDistance(movements) {
  // Code here
  let calc = movements.match(/[><*]/g);
  let counts = { ">": 0, "<": 0, "*": 0 };

  for (let char of calc) {
    counts[char]++;
  }

  let max = Math.max(counts[">"], counts["<"]);
  let min = Math.min(counts[">"], counts["<"]);

  return max - min + counts["*"];
}
