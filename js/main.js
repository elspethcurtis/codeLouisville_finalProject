
//create arrays of objects where each array is a category and each object is a recipe within that category
const breakfastRecipes = [
    {
        image: "img//categories/breakfast.jpg",
        title: "Chia Pudding",
        time: "20 min",
        ingredients: ['chia seeds', 'vanilla','coconut milk...'],
        recipe: 'coming_soon.html',
        htmlClass: ' recipeJS'
    },
    
    {
        image: "img//breakfast/blueberry_scone.jpg",
        title: "Blueberry Scones",
        time: "55 min",
        ingredients: ['brown sugar', 'flour','butter...'],
        recipe: 'coming_soon.html',
        htmlClass: ' recipeJS'
    },
    
    {
        image: "img//breakfast/cinnamon_twists.jpg",
        title: "Cinnamon Twists",
        time: "1 hr 30 min",
        ingredients: ['yeast', 'cinnamon','flour...'],
        recipe: 'coming_soon.html',
        htmlClass: ' recipeJS'
    },
        {
        image: "img//breakfast/cinnamon_rolls.jpg",
        title: "Cinnamon Rolls",
        time: "12 hrs",
        ingredients: ['flour', 'sugar','cinnamon...'],
        recipe: 'coming_soon.html',
        htmlClass: ' recipeJS'
    },
        {
        image: "img//breakfast/smoothie.jpg",
        title: "Smoothie",
        time: "5 min",
        ingredients: ['strawberries', 'banana','oranges...'],
        recipe: 'coming_soon.html',
        htmlClass: ' recipeJS'
    }
]

const dinnerRecipes = [
    {
        title: "Fondue",
        image: "img//dinner/fondue.jpg",
        time: "30 min",
        ingredients: ['jarlesburg', 'emmental','bread...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "French Salad",
        image: "img//dinner/french_potato_salad.jpg",
        time: "45 min",
        ingredients: ['green beans', 'potatoes','shallots...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Teriyaki Chicken",
        image: "img//dinner/honey_teriyaki_chicken.jpg",
        time: "1 hr 30 min",
        ingredients: ['chicken', 'honey','soy sauce...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "One-pan Meal",
        image: "img//dinner/sausage_mixed_veggies.jpg",
        time: "50 min",
        ingredients: ['sausage', 'red onion','potatoes...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Stirfry",
        image: "img//dinner/stirfry.jpg",
        time: "55 min",
        ingredients: ['flank steak', 'carrots','noodles...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    }
]

const desertRecipes = [
    {
        title: "Blueberry Lemon",
        image: "img//categories/cake.jpg",
        time: "4 hrs",
        ingredients: ['blueberries', 'lemons','heavy cream...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Apple Rollovers",
        image: "img//desserts/apple_rollovers.jpg",
        time: "45 min",
        ingredients: ['piecrust', 'apples','cinnamon...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Chocolate Brioche",
        image: "img//desserts/chocolate_brioche.jpg",
        time: "6 hrs",
        ingredients: ['flour', 'yeast','butter...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Holiday Cookies",
        image: "img//desserts/holiday_cookies.jpg",
        time: "3 hrs",
        ingredients: ['flour', 'sugar','butter...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Jam Thumbprints",
        image: "img/desserts/jam_thumbprints.jpg",
        time: "1 hr 30 min",
        ingredients: ['flour', 'jam','sugar'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    }
]

const sidesRecipes = [
    {
        title: "Asparagus Salad",
        image: "img//sides/asparagus_salad.jpg",
        time: "1 hr",
        ingredients: ['asparagus', 'shallots','feta...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Brioche",
        image: "img//sides/brioche.jpg",
        time: "6 hrs",
        ingredients: ['flour', 'eggs','yeast...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Pesto Twist",
        image: "img//sides/pesto_twist.jpg",
        time: "6 hrs",
        ingredients: ['flour', 'eggs','pesto...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Pickled Cucumbers",
        image: "img//sides/pickled_cucumbers.jpg",
        time: "1 hr 30 min",
        ingredients: ['cucumbers', 'salt','gochujang...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Pickled Eggs",
        image: "img//sides/pickled_eggs.jpg",
        time: "24 hrs",
        ingredients: ['eggs', 'soy sauce','green onions...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    }
]

const cocktailsRecipes = [
    {
        title: "Bitter Delight",
        image: "img//categories/cocktail.jpg",
        time: "15 min",
        ingredients: ['gin', 'limoncello','aperol...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "Apple Spice",
        image: "img//cocktails/apple_spice.jpg",
        time: "10 min",
        ingredients: ['bourbon', 'bitters','apple butter...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
    
    {
        title: "French 75",
        image: "img//cocktails/french75.jpg",
        time: "30 min",
        ingredients: ['gin', 'prosecco','lemons...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Manhattan",
        image: "img//cocktails/manhattan.jpg",
        time: "10 min",
        ingredients: ['bourbon', 'sweet vermouth','bitters...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    },
        {
        title: "Daquiri",
        image: "img//cocktails/daquiri.jpg",
        time: "15 min",
        ingredients: ['white rum', 'raspberries','limes...'],
        recipe: 'coming_soon.html',
        htmlClass:'recipeJS'
    }
]
    
//build up html function to be called for each array of recipes so I won't have to rewrite code for each category. Note it is important that this function returns a value.This allows me to define constants equal to the function with a particular parameter.

function buildUpHtml(recipeCategory) {
            let htmlRecipes = `<div class="${recipeCategory.htmlClass}">`;
            htmlRecipes += `<img src= "${recipeCategory.image}">`;
            htmlRecipes += `<h3>${recipeCategory.title}</h3>`;
            htmlRecipes += `<h4><i class="far fa-clock"></i> ${recipeCategory.time}</h4>`;
            htmlRecipes += `<h5><i class="fas fa-shopping-basket"></i> ${recipeCategory.ingredients.join(', ')}</h5>`;
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
    const appetizerButton = document.querySelector('.appetizer-button');
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

////if dinner button is clicked show dinner recipes

    dinnerButton.addEventListener('click', () => {
        display(dinnerRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Dinner Recipes</h2>');
})


////if dessert button is clicked show dessert recipes 

    desertButton.addEventListener('click', () => {
        display(desertRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Dessert Recipes</h2>');

})

////if sides button is clicked show sides recipes 

    sidesButton.addEventListener('click', () => {
        display(sidesRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Side Recipes</h2>');

})

////if cocktail button is clicked show cocktail recipes 

    cocktailsButton.addEventListener('click', () => {
        display(cocktailsRecipes);
        $('#recipesHTML').prepend('<h2 class="recipeHeader">Cocktail Recipes</h2>');

})


////if jump button is clicked hide all recipes
    jumpButton.addEventListener('click', () => {
        const recipesDiv = document.querySelector('#recipesHTML');
        recipesDiv.innerHTML = '';
    })