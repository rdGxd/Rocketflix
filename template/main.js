import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";
const url = `${BASE_URL}${randomNumber()}${API_KEY}${language}`;
const btn = document.querySelector("button");

btn.addEventListener("click", getMovie);

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

async function getMovie() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    nomeFilme.textContent = data.title;
    capaFilme.setAttribute("src", `${IMG_URL}${data.poster_path}`);
    sinopseFilme.textContent = data.overview;
    (capaFilme.style.display = "flex"), detalhes.classList.remove("isHidden");
  } catch (error) {
    console.error(error),
      (nomeFilme.textContent =
        "Ops, hoje não é dia de assistir filme. Bora codar!"),
      capaFilme.setAttribute("src", "assets/Poster.svg"),
      detalhes.classList.remove("isHidden");
  }
}
