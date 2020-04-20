
//create arrays of objects where each array is a category and each object is a recipe within that category
const breakfastRecipes = [
    {
        title: "pancakes 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass: ' recipeJS'
    },
    
    {
        title: "pancakes 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass: ' recipeJS'
    },
    
    {
        title: "pancakes 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass: ' recipeJS'
    }
]

const lunchRecipes = [
    {
        title: "sandwich 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'recipeJS'
    },
    
    {
        title: "sandwich 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'recipeJS'
    },
    
    {
        title: "sandwich 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'recipeJS'
    }
]

const dinnerRecipes = [
    {
        title: "burger 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'recipeJS'
    },
    
    {
        title: "burger 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        htmlClass:'recipeJS'
    },
    
    {
        title: "burger 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'recipeJS'
    }
]

const desertRecipes = [
    {
        title: "cake 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'recipeJS'
    },
    
    {
        title: "cake 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'recipeJS'
    },
    
    {
        title: "cake 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'recipeJS'
    }
]

const sidesRecipes = [
    {
        title: "side 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'recipeJS'
    },
    
    {
        title: "side 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'recipeJS'
    },
    
    {
        title: "side 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'recipeJS'
    }
]

const cocktailsRecipes = [
    {
        title: "cocktail 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'recipeJS'
    },
    
    {
        title: "cocktail 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'recipeJS'
    },
    
    {
        title: "cocktail 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'recipeJS'
    }
]
    
//build up html function to be called for each array of recipes so I won't have to rewrite code for each category. Note it is important that this function returns a value.This allows me to define constants equal to the function with a particular parameter.

function buildUpHtml(recipeCategory) {
            let htmlRecipes = `<div class="${recipeCategory.htmlClass}">`;
            htmlRecipes += `<h2>${recipeCategory.title}</h2>`;
            htmlRecipes += `<img src= "${recipeCategory.image}">`;
            htmlRecipes += `<h3><i class="far fa-clock"></i> ${recipeCategory.time}</h3>`;
            htmlRecipes += `<h4><i class="fas fa-shopping-basket"></i> ${recipeCategory.ingredients.join(', ')}</h4>`;
            htmlRecipes += `<a href=${recipeCategory.recipe}> <i class="fas fa-link"></i> Recipe Details</a>`;
            htmlRecipes += `</div>`;
    
    return htmlRecipes
}

//function to display each set of recipes
function display(recipeCategory) {
    const recipesDiv = document.querySelector('#recipesHTML');
    let categoryHTML = '';
    for (let i =0; i<recipeCategory.length; i+=1) { //for this array iterate through it
            let mealRecc = recipeCategory[i]; //define constant for each iteration
            categoryHTML += buildUpHtml(mealRecc);
            recipesDiv.innerHTML = categoryHTML;
}
}
// define all constants for buttons
    const breakfastButton = document.querySelector('.breakfast-button');
    const lunchButton = document.querySelector('.lunch-button');
    const dinnerButton = document.querySelector('.dinner-button');
    const desertButton = document.querySelector('.desert-button');
    const sidesButton = document.querySelector('.sides-button');
    const cocktailsButton = document.querySelector('.cocktails-button');
    const jumpButton = document.querySelector('.jump-button');
    
//if breakfast button is clicked show breakfast recipes 
    breakfastButton.addEventListener('click', () => {
        display(breakfastRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Breakfast Recipes</h2>'); //added jquery to be able to prepend html <h2> tag
    })

//if lunch button is clicked show lunch recipes 

    lunchButton.addEventListener('click', () => {
        display(lunchRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Lunch Recipes</h2>');
})

////if dinner button is clicked show dinner recipes

    dinnerButton.addEventListener('click', () => {
        display(dinnerRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Dinner Recipes</h2>');
})


////if desert button is clicked show desert recipes 

    desertButton.addEventListener('click', () => {
        display(desertRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Desert Recipes</h2>');

})

////if sides button is clicked show sides recipes 

    sidesButton.addEventListener('click', () => {
        display(sidesRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Side Recipes</h2>');

})

////if desert button is clicked show desert recipes 

    cocktailsButton.addEventListener('click', () => {
        display(cocktailsRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Cocktail Recipes</h2>');

})


////if jump button is clicked hide all recipes
    jumpButton.addEventListener('click', () => {
        const recipesDiv = document.querySelector('#recipesHTML');
        recipesDiv.innerHTML = '';
    })