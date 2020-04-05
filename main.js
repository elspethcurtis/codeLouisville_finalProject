
//create arrays of objects where each array is a category and each object is a recipe within that category
const breakfastRecipes = [
    {
        title: "pancakes 1",
        image: "img/pancakes.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com'
    },
    
    {
        title: "pancakes 2",
        image: "img/pancakes.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link'
    },
    
    {
        title: "pancakes 3",
        image: "img/pancakes.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link'
    }
]

    
    let htmlBreakfastRecipes = ""; //set to empty string

// for loop to iterate through array of objects also adding HTML to be able to style
    for (let i =0; i<breakfastRecipes.length; i+=1) { //for this array iterate through it
        let breakfastRecc = breakfastRecipes[i]; //define constant for each iteration
//        for (let prop in breakfastRecc) { //for each object in the array let prop = the key
            htmlBreakfastRecipes+= `<div class="breakfast-recipes">`;
            htmlBreakfastRecipes += `<h2>${breakfastRecipes[i].title}</h2>`;
            htmlBreakfastRecipes += `<img src= "${breakfastRecc.image}">`;
            htmlBreakfastRecipes += `<h3>${breakfastRecc.time}</h3>`;
            htmlBreakfastRecipes += `<h4>${breakfastRecc.ingredients.join(', ')}</h4>`;
            htmlBreakfastRecipes += `<button href=${breakfastRecc.recipe}>See Recipe</button>`;
            htmlBreakfastRecipes += `</div>`;
//        }
    }

//display to page
const recipesDiv = document.querySelector('.recipes');
recipesDiv.innerHTML = htmlBreakfastRecipes;

