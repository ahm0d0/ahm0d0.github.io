# Memory Game

Memory Game is a simple card-matching game where the player needs to find matching pairs.

## Getting Started

1. Open the `index.html` file in your web browser.
2. Click the "Start Game" button to begin playing.

## Technologies Used

- HTML
- CSS
- JavaScript

## Used Images

The following character images are used in the game:
- Master Yi
- Jhin
- Irelia
- Vi
- Lissandra
- Hecarim
- Swain
- Akali
- Hwe

## Additions

- Font Awesome icons are used.
- SweetAlert library is used for interactive messages.

## Notes

- The game was developed by Ahmed Hassan Ismail.
- You can restart the game using the "Restart Game" button.
- Time remaining and wrong tries are displayed during the game.

## Licenses

- Please refer to the `LICENSE` file for license details.

## Future Improvements

- Add additional difficulty levels.
- Improve user interface design.
- Add more images and characters.

---

**Note:**
Make sure you have provided the images used in the `img` folder and that they correspond to the paths in the `index.html` file.

## Styling

The game features a simple and clean design, utilizing the following CSS styles:

- **Global Styles:**
  - All elements inherit the 'Segoe UI' font family with a fallback to sans-serif.
  - Zero margins and paddings are applied globally.

- **Body:**
  - The background is set using a wallpaper image centered with no-repeat and cover properties.

- **Button Controls:**
  - A transparent overlay with Start Game button and Restart Game button is added.
  - Stylish hover effects are applied to enhance the user experience.

- **Information Display:**
  - A flex container displays player information with a bold and larger font.
  - A subtle box-shadow and border are applied for visual appeal.

- **Game Blocks:**
  - The game board is a flex container with a responsive design.
  - Cards are styled with a flip animation using CSS transitions and transformations.
  - Responsive adjustments are made for smaller screens using media queries.

- **Responsive Design:**
  - Media queries are used to adjust styles for screens with a maximum width of 800px.

- **Footer:**
  - The game is credited to Ahmed Hassan Ismail.

---

**Note:**
Make sure you have included the necessary images and sound files in the respective folders ('img' and 'sound').
 
 **JS:**

 -Start Game Button:

-The game starts when the user clicks the "Start Game" button.
A prompt is used to collect the player's name.
Timer:

-The makeIteration function updates the timer every second.
The game ends if the timer reaches zero.
Restart Button:

-The "Restart Game" button reloads the page to reset the game.
Card Flipping:

-Cards are flipped when clicked, and the flibBlock function handles the logic.
-The game checks for matching pairs and plays corresponding audio.
Game Completion:

-When all pairs are matched, a success prompt is displayed using SweetAlert.
Shuffling:

-The suffle function shuffles the order of the cards.
Prompt for Success:

--The promptSucss function shows a success message using SweetAlert.
Time Out Handling:

-If the time runs out, a confirmation prompt is displayed, and the page is reloaded.