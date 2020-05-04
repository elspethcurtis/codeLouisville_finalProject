# theAmateurChef_recipeSite


## Description: 
My project for Code Louisville is the beginning of a website to hold my favorite recipes. I have written recipe categories (breakfast, dinner, dessert, sides and cocktails) in HTML and used JavaScript to store the recipes in each category and display them when a particular category is clicked. 

Currently, I have added one placeholder page link (the coming_soon.html page) for the recipes themselves. Instead of creating numerous HTML pages for every different recipe, I hope to add this feature in the future when I take FullStack JavaScript and can do it in a more efficient manner.

## Custom CSS Classes: 
### Note: I designed my project using mobile-first so the CSS rules you see below are for the smallest screen size. In styles.css you will also find media queries for a min-width of 769px and min-width of 960 px which set styles for the below rules at wider widths thus making the page responsive. 

### General: 
* body: removes margin, adds flex property to create flexbox parent, sets min height and flex direction to help me create a sticky footer, sets font style
* a: removes underline from links
* img: hides recipe images up until 769 px wide, rounds their corners
* .circle: creates a circle which I use on the recipe category images

### Header/Footer: 
* header/footer: set font to white, background to black, add padding, add flex property to allow them to be both parent and children flex items, use flex-wrap to allow content to move to the next line on smaller width, center content and text to the middle, also give the header a box shadow on the bottom
* header a: set font of links in header to white
* .nav icon: allow title (The Amateur Chef) to take up a whole line

### Welcome paragraph: 
* .welcome (paragraph div): add margin, allow div to be flex and flex-wrap, adjust the content to the center, add bottom black border
* .welcome h2: remove margin from the paragraph header
* .welcome p: add margin to the bottom of the paragraph

### Recipe Categories Section: 
* .recipe-categories: make the recipe categories div flex and flex-wrap, align the content to the center, set the flex property to 1 to create sticky footer, set the font the black
* .item: style each recipe category: remove padding, set the width to 50% at min width, set background image styles to cover and not repeat, set bottom border, align content in the center 
* .breakfast, .dinner, .desert, .side, .cocktail: set specific background photo for each recipe category at min-width
* .item h2: set recipe category header to black, with white background, add padding, remove top-margin, adjust flex-basis to have it take up whole width of background image
* .jump-button/.item a: style the buttons on the page: set the padding/margin, remove underline, round corners, set font to white, background to black, adjust width to have it take up 50% of its parent container, also give the jump to top button a shadow
* .button

### Recipe Div Section: 
* #recipesHTML: stile the div for where the JavaScript will print the recipes of each category: make flexbox, allow to wrap, adjust margin, remove padding, space each child evenly
* #recipesHTML a: set the link in each recipe to black
* .recipeHeader: style the header of each recipe category that JavaScript displays to the page when the category is clicked: make it take up a whole row and align the text to the center
* .recipeJS: style each individual recipe that JS displays to the page: center the content, add margin, padding, and width, add a border and round the corners of it 

### About/Coming Soon pages: 
* .about: add margin and padding to the body content

## Custom JavaScript Functions: 
### buildUpHtml: 
* this function builds up HTML for a category of recipes (since my recipe categories are stored in arrays in JavaScript, building up the content up as HTML allows me to style it easily with CSS)
### display: 
* this function displays a category of recipes (built up in HTML) to my webpage
### click handlers: 
* I selected each recipe category button and added an event listener to it so that when a user clicks the button the related recipes will display to the page. I added jQuery to use prepend to add a header to the recipes displayed
