

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
    foodTarget.innerHTML += harvestArray.map(food => `<section class="plant">${food.type}</section>`).join('')


}

export const catalogTable = (harvestArray) => {
    const asparagusArray = harvestArray.filter(function(plant){
        if (plant.type === "Asparagus") {
          return true;
        } else {
          return false;
        }
      });
      const cornArray = harvestArray.filter(function(plant){
        if (plant.type === "Corn") {
          return true;
        } else {
          return false;
        }
      });
      const potatoArray = harvestArray.filter(function(plant){
        if (plant.type === "Potato") {
          return true;
        } else {
          return false;
        }
      });
      const soybeanArray = harvestArray.filter(function(plant){
        if (plant.type === "Soybean") {
          return true;
        } else {
          return false;
        }
      });
      const sunflowerArray = harvestArray.filter(function(plant){
        if (plant.type === "Sunflower") {
          return true;
        } else {
          return false;
        }
      });
      const wheatArray = harvestArray.filter(function(plant){
        if (plant.type === "Wheat") {
          return true;
        } else {
          return false;
        }
      });
    const tableHTML = `
        <table>
        <tr>
            <th>Food</th>
            <th>Quantity</th>
        </tr>
        <tr>
            <td>Asparagus </td>
            <td>${asparagusArray.length}</td>
        </tr>
        <tr>
            <td>Corn</td>
            <td>${cornArray.length}</td>
        </tr>
        <tr>
            <td>Potatoes</td>
            <td>${potatoArray.length} </td>
        </tr>
        <tr>
            <td>Soybeans</td>
            <td>${soybeanArray.length} </td>
        </tr>
        <tr>
            <td>Sunflowers</td>
            <td>${sunflowerArray.length} </td>
        </tr>
        <tr>
            <td>Wheat</td>
            <td>${wheatArray.length} </td>
        </tr>
        </table>`
        const foodTarget = document.querySelector(".container")
        foodTarget.innerHTML += tableHTML

}