function createChristmasTree(ornaments, height) {
  let tree = "";
  let adornmentIndex = 0;

  for (let i = 1; i <= height; i++) {
    tree += " ".repeat(height - i);
    for (let j = 1; j <= i; j++) {
      tree += ornaments[adornmentIndex % ornaments.length];
      if (j < i) {
        tree += " ";
      }
      adornmentIndex++;
    }
    tree += "\n";
  }

  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}
