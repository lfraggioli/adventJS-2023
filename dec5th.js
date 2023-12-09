function cyberReindeer(road, time) {
  let snapshots = [road];
  let lastChar = ".";
  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replaceAll("|", "*");

    const matches = road.match(/S[\*\.]/g);
    console.log(matches); // Aquí está el console.log
    if (matches) {
      road = road.replace(matches[0], lastChar + "S");
      lastChar = matches[0][1];
    }
    snapshots.push(road);
  }
  console.log(snapshots);
  return snapshots;
}

cyberReindeer("S...|....|.....", 10);
