

export const catalog = (harvestArray) => {
    const foodTarget = document.querySelector(".container")
    harvestArray.sort(function(a, b) {
        let typeA = a.type
        let typeB = b.type
        if (typeA < typeB) {
          return -1;
        }
        if (typeA > typeB) {
          return 1;
        }
        return 0;
      });
    console.log("sorted?",harvestArray)
    for (const food of harvestArray) {
        foodTarget.innerHTML += `<section class="plant">${food.type}</section>`

    }

}