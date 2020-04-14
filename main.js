
//create arrays of objects where each array is a category and each object is a recipe within that category
const breakfastRecipes = [
    {
        title: "pancakes 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass: 'breakfast recipeJS'
    },
    
    {
        title: "pancakes 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass: 'breakfast recipeJS'
    },
    
    {
        title: "pancakes 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass: 'breakfast recipeJS'
    }
]

const lunchRecipes = [
    {
        title: "sandwich 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'lunch recipeJS'
    },
    
    {
        title: "sandwich 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'lunch recipeJS'
    },
    
    {
        title: "sandwich 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'lunch recipeJS'
    }
]

const dinnerRecipes = [
    {
        title: "burger 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'dinner recipeJS'
    },
    
    {
        title: "burger 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        htmlClass:'dinner recipeJS'
    },
    
    {
        title: "burger 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'dinner recipeJS'
    }
]

const desertRecipes = [
    {
        title: "cake 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "cake 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "cake 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'desert recipeJS'
    }
]

const sidesRecipes = [
    {
        title: "side 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "side 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "side 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'desert recipeJS'
    }
]

const cocktailsRecipes = [
    {
        title: "cocktail 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "cocktail 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link',
        htmlClass:'desert recipeJS'
    },
    
    {
        title: "cocktail 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link',
        htmlClass:'desert recipeJS'
    }
]
    
//build up html function to be called for each array of recipes so I won't have to rewrite code for each category. Note it is important that this function returns a value.This allows me to define constants equal to the function with a particular parameter.

function buildUpHtml(recipeCategory) {
            let htmlRecipes = `<div class="${recipeCategory.htmlClass}">`;
            htmlRecipes += `<h2>${recipeCategory.title}</h2>`;
            htmlRecipes += `<img src= "${recipeCategory.image}">`;
            htmlRecipes += `<h3>${recipeCategory.time}</h3>`;
            htmlRecipes += `<h4>${recipeCategory.ingredients.join(', ')}</h4>`;
            htmlRecipes += `<a href=${recipeCategory.recipe}>Recipe Details</a>`;
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
    
//if breakfast button is clicked show breakfast recipes 
    breakfastButton.addEventListener('click', () => {
        display(breakfastRecipes);
    })

//if lunch button is clicked show lunch recipes 

    lunchButton.addEventListener('click', () => {
        display(lunchRecipes);
})

////if dinner button is clicked show dinner recipes

    dinnerButton.addEventListener('click', () => {
        display(dinnerRecipes);
})


////if desert button is clicked show desert recipes 

    desertButton.addEventListener('click', () => {
        display(desertRecipes);

})

////if sides button is clicked show sides recipes 

    sidesButton.addEventListener('click', () => {
        display(sidesRecipes);

})

////if desert button is clicked show desert recipes 

    cocktailsButton.addEventListener('click', () => {
        display(cocktailsRecipes);

})