## Frontend-Starter-React

Task requirements:
https://github.com/recruit-case/Frontend-Starter

[Howie Andersen](mailto:howieandersen@gmail.com)

## Assumptions

    -Wireframe is very minimal => I assume that I have creative freedom over the rest
    -Mock REST API backend => I assume that backend complexities should be avoided in this case
    -No specific use mentioned for the news/product banner => I assume that it's ok to have a static banner
    -Wireframe does not mention anything regarding login => I can choose how and when to differentiate between customers and admins
    -Although React is technically mobile-first, the fireframe heavily indicates usage of a pad / pc screen, so optimizing for mobile is not prioritized
    -Although I utilize Git in a much better way normally, I have not kept track of this project in a structured Git way, as a lot of it was fail forward through trial and error

## Proposed Solution

-I decided to use create-react-app to scaffold a react project, with a typescript template
-I decided to use Material UI as my component library, as it is one of the better known and most used libraries
-I kept it non-mobile for this use-case, but as a senior dev, I would probably be managing a few junior devs, and I would delegate the mobile view task to them while focusing on further component development.
-I did encapsulate my layout components (splitlayout and discoverproductslayout, and shoppingcartlayout) so that they are easily maintainable, especially if I were to mentor a junior developer to take care of mobile first.
-I followed ( https://reactpatterns.com/#layout-component ) design patterns as much as possible while designing components

-Data from Mock Rest API JSON server can be easily obtained through a FETCH call, with no complexity added in the first iteration

-Pick components from Material UI that represents the different parts of the wireframe
    Navigation Bar = AppBar (with text, login button, and Avatar component for pictures of user)
    News/product Banner = AppBar (with no interaction, only for showing text) (this might be a good place to put the 10 recommended products in the future)
    SplitLayout views = Grid (ProductviewLayout and shoppingcart layout split in one grid, and internals within each also split up into their own grid)
    Search text = Text Field
    Product = Card
    List of products = List (or Stack, if we use experimental version of Material UI) that lists out all the product Card components
    Shopping list = Table with a fixed Table Header (with another "header" at bottom to show price total) 


-First I wanted to create the Navbar. I kept it simple because there are no complex routing requirements. Added the avatar because each user has an avatar property in the json server. If i do need routing, I would add React Router
-I prefer to start from the top down, so I wanted to create a layout component that doesn't unnecessarily re-render.
-I ensured that the outermost elements (html body #root rootlayoutnode) all had height='100%'

-
-

## Conclusions

-I have not written a react project from scratch in 2 years, and it shows. I spent most of the 5 recommended hours polishing off the rust on my front-end skills, not much time for actual productive development.
-I utilized a depth-first approach, so I thought through many decisions before starting actual development, and went through each individual component I made in detail, instead of e.g. mocking up every component first and then making sure they fit together.
-I did not get nearly as far as I thought I would, especially not getting to the of showing data from the JSON server was very disappointing.
-If you guys read through this project and cancel the interview on Tuesday, I would understand completely.


## Libraries / Tools Used

- React.js
- Create React App for project setup
- Material UI
- Mock REST API JSON server provided by the git repo

## Setup

To install the dependencies run:

`npm install`

To build the project:

'npm run build'

And to run the app:

`npm run start`