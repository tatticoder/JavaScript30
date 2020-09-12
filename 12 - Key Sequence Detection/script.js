cornify_add_cupcake_button();
const pressed = [];
const secret = "sanskriti";
window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-(secret.length - 1), pressed.length - secret.length);
  var words = [
    "Szkkb",
    "Yvzfgrufo",
    "Hkzipob",
    "Ufmmb",
    "Ufm",
    "Nztrxzo",
    "Olevob",
    "Xfgv",
    "Xszinrmt",
    "Znzarmt",
    "Dlmwviufo",
  ];
  if (pressed.join("").includes(secret)) {
    cornify_click_cupcake_button();
    document.getElementById("main").innerHTML = `<section>        <h1>${
      words[Math.floor(Math.random() * words.length)]
    } chère!</h1>        <h1>R'ev nrhhvw blf. FdF</h1>
    <div class="circle"></div>    </section>  `;
  }
});
const pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});
document.addEventListener("click", cornify_add);
