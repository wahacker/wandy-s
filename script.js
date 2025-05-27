
const words = [
  { id: 0, img: "acoes.png", label: "Ações" },
  { id: 1, img: "avancando.png", label: "Avançando" },
  { id: 2, img: "fronteiras.png", label: "Fronteiras" },
  { id: 3, img: "construir.png", label: "Construir" },
  { id: 4, img: "urbano.png", label: "Urbano" },
  { id: 5, img: "ameacadas.png", label: "Ameaçadas" },
  { id: 6, img: "civilizacao.png", label: "Civilização" },
  { id: 7, img: "classe_media.png", label: "Classe Média" },
  { id: 8, img: "ecologico.png", label: "Ecológico" },
  { id: 9, img: "energia_renovavel.png", label: "Energia Renovável" }
];

const memoryGrid = document.getElementById("memoryGrid");
let cards = [];

words.forEach(word => {
  cards.push({ id: word.id, img: word.img });
  cards.push({ id: word.id, img: word.img });
});

cards = cards.sort(() => 0.5 - Math.random());

cards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("memory-card");
  cardElement.dataset.id = card.id;

  cardElement.innerHTML = `
    <div class="front"></div>
    <div class="back">
      <img src="images/${card.img}" alt="Card image" style="max-width: 100%; max-height: 100%; border-radius: 10px;" />
    </div>
  `;

  cardElement.addEventListener("click", () => {
    if (!cardElement.classList.contains("flip")) {
      cardElement.classList.add("flip");
      const flippedCards = document.querySelectorAll(".memory-card.flip:not(.matched)");
      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.dataset.id === second.dataset.id) {
          first.classList.add("matched");
          second.classList.add("matched");
        } else {
          setTimeout(() => {
            first.classList.remove("flip");
            second.classList.remove("flip");
          }, 1000);
        }
      }
    }
  });

  memoryGrid.appendChild(cardElement);
});
