export const catalog = (harvestArray) => {
    const foodTarget = document.querySelector(".container")
    for (const food of harvestArray) {
        foodTarget.innerHTML += `<section class="plant">${food.type}</section>`

    }

}