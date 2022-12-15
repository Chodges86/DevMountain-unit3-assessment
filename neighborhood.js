
const recBtn = document.querySelector("#rec-btn")
recBtn.addEventListener("click", recRestaraunt)
const recSection = document.querySelector("#recommendation")
const pElement = document.createElement("p")
recSection.appendChild(pElement)

const restaraunts = [
    "AC Steakhouse",
    "Thai Hut", 
    "Blue Agave", 
    "Taco Felix", 
    "Windy City Grille", 
    "Underground Cafe", 
    "The Burger Shop",
    "Crossroads Seafood", 
    "The Parish Oyster Bar",
    "Yellowfin Sushi & Hibatchi Grill"
]

function recRestaraunt(event) {
    pElement.textContent = ""
    const randNum = Math.floor(Math.random()*restaraunts.length)

    pElement.textContent = restaraunts[randNum]

}