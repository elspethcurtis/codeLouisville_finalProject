# theAmateurChef_recipeSite


## Description: 
My project for Code Louisville is the beginning of a website to hold my favorite recipes. I have written recipe categories (breakfast, dinner, dessert, sides and cocktails) in HTML and used JavaScript to store the recipes in each category and display them when a particular category is clicked. 

Currently, I have added one placeholder page link (the coming_soon.html page) for the recipes themselves. Instead of creating numerous HTML pages for every different recipe, I hope to add this feature in the future when I take FullStack JavaScript and can do it in a more efficient manner.

## Custom CSS Classes: 
### General: 
* body: removes margin, adds flex property to create flexbox parent, sets min height and flex direction to help me create a sticky footer, sets font style
* a: removes underline from links
* img: hides recipe images up until 769 px wide, rounds their corners
* .circle: creates a circle which I use on the recipe category images

### header/footer: 
* header/footer: set font to white, background to black, add padding, add flex property to allow them to be both parent and children flex items, use flex-wrap to allow content to move to the next line on smaller width, center content and text to the middle, also give the header a box shadow on the bottom
* header a: set font of links in header to white
* .nav icon: allow title (The Amateur Chef) to take up a whole line

### Welcome paragraph: 
* .welcome (paragraph div)
* .welcome h2
* .welcome p

### Recipe Categories Section: 
* .recipe-categories
* .item 
* .breakfast
* .dinner
* .desert
* .side
* .cocktail
* .item h2
* .jump-button
* .button

### Recipe Div Section: 
* #recipesHTML
* #recipesHTML a
* .recipeHeader
* .recipeJS 

### About/Coming Soon pages: 
* .about

## Custom JavaScript Functions: 
-buildUpHtml: this function builds up HTML for a category of recipes (since my recipe categories are stored in arrays in JavaScript, building up the content up as HTML allows me to style it easily with CSS)
-display: this function displays a category of recipes to my webpage
