# PixelDraw

PixelDraw is a drawing application that allows the user to paint, pixel by pixel, the artwork they imagine. Moreover, by saving the painting, the application generates a unique URL, which makes the painting publicly available to all users.

This is a fullstack application I built as part of my web dev learning process. In particular, I wanted to strenghten my MongoDb and Express knowledge, so these two technologies are the main building blocks of the app.

## Technologies

The project is created using the following:

- JavaScript
- HTML
- CSS
- Ejs
- Mongoose 
- Express

## Usage

When the application is opened, the user is presented with the edit-painting view. Selecting the appropriate tool the toolkit, the user can start painting on the canvas by clicking on each pixel. Once the painting is finished, click on the save icon to enter title and author. After submission, the user will be redirected to the display-painting view. The unique URL generated can be shared with any other user.

The application is deployed in Heroku at the following link:

https://nameless-fortress-31792.herokuapp.com/

### Gallery
![Edit-Painting View](https://user-images.githubusercontent.com/75866274/143925272-11f8aba4-bfe2-41d7-920f-4dc666555ff6.png)
![Display Painting view](https://user-images.githubusercontent.com/75866274/143925280-7a4f9f7f-e319-44c6-bc45-7d13e7473160.png)

### Features

- Paint pixel by pixel with any color
- Erase unwanted changes
- Save painting to generate unique shareable link
- Responsive layout for mobile, tablets and desktop
- Deployed to Heroku

## Upcoming Features

To continue expanding my web dev and computer science knowledge, I plan to continue working on the following features:

- Fill color tool: implement an algorithm that, given a color and a pixel, fills the surrounding area with the selected color.

- Line tool: implement an algorithm that, given a color and two pixels, draws a line that connects the pixels with a colored line

- Edit painting: add the option to create a copy of an existing painting to continue editing

