let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allCards = document.getElementById("allCards")

function totalCount(){
    const allCardsCount = allCards.children.length;
    total.innerText = allCardsCount;
}

totalCount()
