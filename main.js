import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";
const btn = document.querySelector("button");

btn.addEventListener("click", getMovie);

const randomNumber = () => Math.floor(Math.random() * 780.498);

async function getMovie() {
  const url = `${BASE_URL}${randomNumber()}${API_KEY}${language}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    nomeFilme.textContent = data.title;
    capaFilme.setAttribute("src", `${IMG_URL}${data.poster_path}`);
    sinopseFilme.textContent = data.overview;
    capaFilme.style.display = "flex";
    sinopseFilme.style.display = "flex";
  } catch (e) {
    console.error(e);
    nomeFilme.textContent =
      "Ainda não encontramos um filme clique novamente no botão";
    capaFilme.style.display = "flex";
    capaFilme.setAttribute("src", "assets/Poster.svg");
    sinopseFilme.style.display = "none";
  }
}
