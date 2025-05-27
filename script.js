
const words = [
  { en: "Actions", pt: "acoes.png" },
  { en: "Advancing", pt: "avancando.png" },
  { en: "Borders", pt: "fronteiras.png" },
  { en: "Build", pt: "construir.png" },
  { en: "Urban", pt: "urbano.png" },
  { en: "Endangered species", pt: "ameacadas.png" },
  { en: "Civilisation", pt: "civilizacao.png" },
  { en: "Middle class", pt: "classe_media.png" },
  { en: "Eco-friendly", pt: "ecologico.png" },
  { en: "Renewable energy", pt: "energia_renovavel.png" }
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

  const frontText = card.lang === "en" ? "EN" : "PT";
  const backContent = card.lang === "pt"
    ? `<img src="images/${card.text}" alt="Translation" style="max-width:90%; max-height:90%; border-radius:8px;" />`
    : card.text;

  cardElement.innerHTML = `
    <div class="front">${frontText}</div>
    <div class="back">${backContent}</div>
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
