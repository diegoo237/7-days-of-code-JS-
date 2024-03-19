"use strict";
// Array com os dados dos filmes (simulando uma lista de filmes)
const filmes = [
  {
    img: "./imgs/image 1.svg",
    titulo: "Filme 1",
    ano: 2020,
    descricao: "Descrição do Filme 1",
  },
  {
    img: "./imgs/image 2.svg",
    titulo: "Filme 2",
    ano: 2021,
    descricao: "Descrição do Filme 2",
  },
  {
    img: "./imgs/image 3.svg",
    titulo: "Filme 3",
    ano: 2019,
    descricao: "Descrição do Filme 3",
  },
];

// Função para adicionar os filmes ao container
function adicionarFilmesAoContainer() {
  const moviesContainer = document.querySelector(".search");

  // Iterando sobre a lista de filmes
  filmes.forEach((filme) => {
    // Criando elementos HTML para cada filme
    const filmeElemento = document.createElement("section");
    filmeElemento.classList.add("movie");

    const filmeBox = document.createElement("div");
    filmeBox.classList.add("filme-box");

    const imagemElemento = document.createElement("img");
    imagemElemento.classList.add("imagem");
    imagemElemento.setAttribute("src", filme.img);
    imagemElemento.setAttribute("alt", "");

    const containerElemento = document.createElement("div");
    containerElemento.classList.add("container");
    containerElemento.textContent = `${filme.titulo} (${filme.ano})`;

    const rateElemento = document.createElement("div");
    rateElemento.classList.add("rate");

    const starElemento = document.createElement("div");
    starElemento.classList.add("star");
    starElemento.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon-star">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        9.4
      `;

    const favElemento = document.createElement("div");
    favElemento.classList.add("fav");
    favElemento.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon icon-heart">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        Favoritar
      `;

    const descricaoElemento = document.createElement("p");
    descricaoElemento.classList.add("text-description");
    descricaoElemento.textContent = filme.descricao;

    // Adicionando os elementos ao DOM
    rateElemento.appendChild(starElemento);
    containerElemento.appendChild(rateElemento);
    containerElemento.appendChild(favElemento);
    filmeBox.appendChild(imagemElemento);
    filmeBox.appendChild(containerElemento);
    filmeElemento.appendChild(filmeBox);
    filmeElemento.appendChild(descricaoElemento);

    // Adicionando o filme ao container de filmes
    moviesContainer.appendChild(filmeElemento);
  });
}

// Chamando a função para adicionar os filmes ao container
adicionarFilmesAoContainer();
