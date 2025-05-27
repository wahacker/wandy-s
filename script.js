
const words = [
  { en: "Actions", pt: "Ações" },
  { en: "Advancing", pt: "Avançando" },
  { en: "Borders", pt: "Fronteiras" },
  { en: "Build", pt: "Construir" },
  { en: "Urban", pt: "Urbano" },
  { en: "Endangered species", pt: "Espécies ameaçadas" },
  { en: "Civilisation", pt: "Civilização" },
  { en: "Middle class", pt: "Classe média" },
  { en: "Eco-friendly", pt: "Ecológico" },
  { en: "Renewable energy", pt: "Energia renovável" }
];
const memoryGrid = document.getElementById("memoryGrid");
let cards = [];

words.forEach((word, index) => {
  cards.push({ id: index, text: word.en, lang: "en" });
  cards.push({ id: index, text: word.pt, lang: "pt" });
});

cards = cards.sort(() => 0.5 - Math.random());

cards.forEach((card, i) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("memory-card");
  cardElement.dataset.id = card.id;

  cardElement.innerHTML = `
    <div class="front">${card.lang === "en" ? "EN" : "PT"}</div>
    <div class="back">${card.text}</div>
  `;

  cardElement.addEventListener("click", () => {
    cardElement.classList.add("flip");
    const flippedCards = document.querySelectorAll(".memory-card.flip:not(.matched)");
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.dataset.id === second.dataset.id && first !== second) {
        first.classList.add("matched");
        second.classList.add("matched");
      } else {
        setTimeout(() => {
          first.classList.remove("flip");
          second.classList.remove("flip");
        }, 1000);
      }
    }
  });

  memoryGrid.appendChild(cardElement);
});
