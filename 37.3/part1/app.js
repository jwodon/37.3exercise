async function getFact(number) {
    const response = await fetch(`http://numbersapi.com/${number}?json`);
    const data = await response.json();
    return data.text;
}

async function getMultipleFacts(numbers) {
    const promises = numbers.map((number) => getFact(number));
    return await Promise.all(promises);
}

async function displayFacts() {
    const favoriteNumber = 13; 
    const numbers = [favoriteNumber, favoriteNumber, favoriteNumber, favoriteNumber]; // Requesting 4 facts on favorite number

    const facts = await getMultipleFacts(numbers);

    const factsContainer = document.getElementById('facts');
    facts.forEach((fact) => {
        const factElement = document.createElement('p');
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
}

displayFacts();
