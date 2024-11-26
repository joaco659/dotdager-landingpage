// porfa cae dager
const pepinos = document.querySelectorAll(".pepino");
let clickCount = 0;
let alreadyEaster = false;
pepinos.forEach((pepino) => {
  pepino.addEventListener("click", (e) => {
    e.target.textContent = "";
    clickCount++;
    if (clickCount === 3) {
      clickCount = 0;
      easterEgg();
    }
  });
});

const easterEgg = () => {
  if (alreadyEaster) return;
  alreadyEaster = true;

  const screamer = new Image();
  screamer.src = "./pepino.png";
  screamer.classList.add("fixed");
  screamer.classList.add("w-full");
  screamer.classList.add("h-full");
  screamer.classList.add("z-30");
  screamer.classList.add("top-0");
  document.body.appendChild(screamer);

  setTimeout(() => {
    screamer.remove();
    const titulo = document.createElement("h5");
    titulo.textContent = "Pickle Easter Egg 🥒";
    titulo.classList.add("text-lime-400");
    titulo.classList.add("text-3xl");

    const lumberIframe = document.createElement("iframe");
    lumberIframe.src = "https://tbot.xyz/lumber/";
    lumberIframe.title = "Lumber Jack Game";
    lumberIframe.width = "400";
    lumberIframe.height = "800";

    const easter = document.getElementById("easter");
    easter.appendChild(titulo);
    easter.appendChild(lumberIframe);
  }, 6000);
};
