function hideAll(){
  var elems = document.getElementsByClassName('divTables');
  elems.classList.add("hidden");
}

function revealRecipe(){
  hideAll();
  var elem = document.getElementById("recipediv");
  elem.classList.remove("hidden");
}

function revealEquipment(){
  hideAll();
  var elem = document.getElementById("equipmentdiv");
  elem.classList.remove("hidden");
}

function revealIngredients(){
  hideAll();
  var elem = document.getElementById("ingredientdiv");
  elem.classList.remove("hidden");
}

console.log("hi");

document.getElementById("recipesButton").addEventListener("click",revealRecipe);
document.getElementById("equipmentButton").addEventListener("click",revealEquipment);
document.getElementById("ingredientsButton").addEventListener("click",revealIngredients);
