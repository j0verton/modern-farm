export const catalog = (harvestArray) => {
    const foodTarget = document.querySelector(".container")
    harvestArray.sort();
    console.log("sorted?",harvestArray)
    for (const food of harvestArray) {
        foodTarget.innerHTML += `<section class="plant">${food.type}</section>`

    }

}