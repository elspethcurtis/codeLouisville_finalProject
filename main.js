
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

const lunchRecipes = [
    {
        title: "sandwich 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com'
    },
    
    {
        title: "sandwich 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link'
    },
    
    {
        title: "sandwich 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link'
    }
]

const dinnerRecipes = [
    {
        title: "burger 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com'
    },
    
    {
        title: "burger 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link'
    },
    
    {
        title: "burger 3",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 3 link'
    }
]

const desertRecipes = [
    {
        title: "cake 1",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'https://www.google.com'
    },
    
    {
        title: "cake 2",
        image: "img/pancake.jpeg",
        time: "30 min",
        ingredients: ['item1', 'item2','item3'],
        recipe: 'pancakes 2 link'
    },
    
    {
        title: "cake 3",
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
            htmlRecipes += `<a href=${recipeCategory.recipe}>Recipe Details</a>`;
            htmlRecipes += `</div>`;
}

// define all constants for buttons
    const breakfastButton = document.querySelector('.breakfast-button');
    const lunchButton = document.querySelector('.lunch-button');
    const dinnerButton = document.querySelector('.dinner-button');
    const desertButton = document.querySelector('.desert-button');
    
//if breakfast button is clicked show breakfast recipes 
    breakfastButton.addEventListener('click', () => {
            for (let i =0; i<breakfastRecipes.length; i+=1) { //for this array iterate through it
            let breakfastRecc = breakfastRecipes[i]; //define constant for each iteration
            buildUpHtml(breakfastRecc);
            const recipesDiv = document.querySelector('.recipes');
            recipesDiv.innerHTML = htmlRecipes;
    }
    })

//if lunch button is clicked show lunch recipes 

    lunchButton.addEventListener('click', () => {
            for (let i =0; i<lunchRecipes.length; i+=1) { //for this array iterate through it
            let lunchRecc = lunchRecipes[i]; //define constant for each iteration
            buildUpHtml(lunchRecc);
            const recipesDiv = document.querySelector('.recipes');
            recipesDiv.innerHTML = htmlRecipes;
    }

})
//
////if dinner button is clicked show dinner recipes
//
    dinnerButton.addEventListener('click', () => {
            for (let i =0; i<dinnerRecipes.length; i+=1) { //for this array iterate through it
            let dinnerRecc = dinnerRecipes[i]; //define constant for each iteration
            buildUpHtml(dinnerRecc);
            const recipesDiv = document.querySelector('.recipes');
            recipesDiv.innerHTML = htmlRecipes;
    }

})

//
//
////if desert button is clicked show desert recipes 
//        
    desertButton.addEventListener('click', () => {
            for (let i =0; i<desertRecipes.length; i+=1) { //for this array iterate through it
            let desertRecc = desertRecipes[i]; //define constant for each iteration
            buildUpHtml(desertRecc);
            const recipesDiv = document.querySelector('.recipes');
            recipesDiv.innerHTML = htmlRecipes;
    }

})
