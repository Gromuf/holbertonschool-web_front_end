function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.transform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let p = document.createElement("p");
  p.textContent = "Welcome Holberton!";
  document.body.appendChild(p);

  let spookyBtn = document.createElement("button");
  spookyBtn.textContent = "Spooky";
  spookyBtn.onclick = spooky;
  document.body.appendChild(spookyBtn);

  let darkBtn = document.createElement("button");
  darkBtn.textContent = "Dark mode";
  darkBtn.onclick = darkMode;
  document.body.appendChild(darkBtn);

  let screamBtn = document.createElement("button");
  screamBtn.textContent = "Scream mode";
  screamBtn.onclick = screamMode;
  document.body.appendChild(screamBtn);
}

main();
