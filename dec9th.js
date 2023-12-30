function adjustLights(lights) {
  let redChange = 0;
  let greenChange = 0;

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] === "🔴" && lights[i + 1] === "🔴") {
      redChange++;
    } else if (lights[i] === "🟢" && lights[i + 1] === "🟢") {
      greenChange++;
    }
  }

  return redChange + greenChange;
}
