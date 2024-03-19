async function drawCard(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
    return data.cards[0];
}

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    return data.deck_id;
}

async function displayCard() {
    const deckId = await createDeck();
    const cardsContainer = document.getElementById('cards');
    const drawButton = document.getElementById('drawButton');

    drawButton.addEventListener('click', async () => {
        const card = await drawCard(deckId);
        if (card) {
            const cardElement = document.createElement('p');
            cardElement.textContent = `${card.value} of ${card.suit}`;
            cardsContainer.appendChild(cardElement);
        } else {
            drawButton.disabled = true;
            drawButton.textContent = 'No cards left';
        }
    });
}

displayCard();
