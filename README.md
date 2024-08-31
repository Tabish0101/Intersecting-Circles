# Intersecting Circles

This project is a simple web application that allows users to draw circles on the screen by clicking. If two circles intersect, the application will indicate this by updating the status on the page.

## Features

- Draw circles on the webpage by clicking anywhere on the screen.
- Circles are randomly sized with a minimum radius of 25px and a maximum of 125px.
- The circles are removed after two have been drawn, allowing for continuous interaction.
- The intersection of two circles is detected and displayed on the screen.

## How It Works

1. **Click Event**: Each time you click on the screen, a circle is drawn at the click position. The circle's size is randomized.
2. **Intersection Check**: If two circles are drawn, the application checks if they intersect. If they do, the status text changes to "TRUE." If not, it remains "FALSE."
3. **Circle Removal**: Once two circles have been drawn, they are removed from the screen, and you can start the process again.

## Project Structure

- **index.html**: The main HTML file that includes the structure of the webpage.
- **script.js**: The JavaScript file containing the logic for drawing circles and checking their intersection.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/intersecting-circles.git
    ```
2. Navigate to the project directory:
    ```bash
    cd intersecting-circles
    ```
3. Open `index.html` in your preferred web browser.

## Usage

- Click anywhere on the webpage to draw a circle.
- The status at the top will update to show whether the two drawn circles are intersecting.

## Contributing

If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License.
