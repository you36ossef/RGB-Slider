function changeColor() {
  const r = document.getElementById("redRange").value;
  const g = document.getElementById("greenRange").value;
  const b = document.getElementById("blueRange").value;

  const color = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("colorResult").style.color = color;

  document.getElementById("redVal").textContent = r;
  document.getElementById("greenVal").textContent = g;
  document.getElementById("blueVal").textContent = b;
}

changeColor();
