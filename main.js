
//create arrays of objects where each array is a category and each object is a recipe within that category
const breakfastRecipes = [
    {
        title: "pancakes 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com'
    },
    
    {
        title: "pancakes 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link'
    },
    
    {
        title: "pancakes 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link'
    }
]

    
//build up html function to be called for each array of recipes so I won't have to rewrite code for each category

let htmlRecipes = ""; //set to empty string and for scope purposes declare outside of function 

function buildUpHtml(recipeCategory) {
            htmlRecipes+= `<div class="html-recipes">`;
            htmlRecipes += `<h2>${recipeCategory.title}</h2>`;
            htmlRecipes += `<img src= "${recipeCategory.image}">`;
            htmlRecipes += `<h3>${recipeCategory.time}</h3>`;
            htmlRecipes += `<h4>${recipeCategory.ingredients.join(', ')}</h4>`;
            htmlRecipes += `<button href=${recipeCategory.recipe}>See Recipe</button>`;
            htmlRecipes += `</div>`;
}

// for loop to iterate through array/category of objects/recipes
    for (let i =0; i<breakfastRecipes.length; i+=1) { //for this array iterate through it
        let breakfastRecc = breakfastRecipes[i]; //define constant for each iteration
        buildUpHtml(breakfastRecc);
    }

//display to page
const recipesDiv = document.querySelector('.recipes');
recipesDiv.innerHTML = htmlRecipes;

