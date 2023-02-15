import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";
const url = `${BASE_URL}${randomNumber()}${API_KEY}${language}`;
const btn = document.querySelector("button");

btn.addEventListener("click", getMovie);

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function getMovie() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      nomeFilme.textContent = data.title;
      capaFilme.setAttribute("src", `${IMG_URL}${data.poster_path}`);
      sinopseFilme.textContent = data.overview;
      capaFilme.style.display = "flex";
      detalhes.style.display = "flex";
      console.log(data);
    })
    .catch(
      (error) => console.error(error),
      (nomeFilme.textContent =
        "Ops, hoje não é dia de assistir filme. Bora codar!"),
      capaFilme.setAttribute("src", "assets/Poster.svg"),
      (capaFilme.style.display = "flex"),
      (detalhes.style.display = "flex")
    );
}
