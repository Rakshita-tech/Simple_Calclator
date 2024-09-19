const display = document.getElementById('display');

// Function to append value to display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
        playSound('='); // Play sound on calculation
    } catch (error) {
        display.value = "Error";
        playSound('='); // Play sound on error
    }
}
//Function to play drum sounds
function playSound(key) {
    let sound;
    switch (key) {
        case '0': // Add sounds for each key
            sound = new Audio('single.wav'); // Change to your sound file path
            break;
        case '1':
            sound = new Audio('single.wav');
            break;
        case '2':
            sound = new Audio('single.wav');
            break;
        case '3':   
            sound = new Audio('single.wav');
            break;
        case '4':
            sound = new Audio('single.wav');
            break;
        case '5':
            sound = new Audio('single.wav');
            break;
        case '6':
            sound = new Audio('single.wav');
            break;
        case '7':
            sound = new Audio('single.wav'); 
            break;
        case '8':
            sound = new Audio('single.wav');
            break;
        case '9':
            sound = new Audio('single.wav');
            break;
        case '+':
            sound = new Audio('single.wav');
            break;
        case '-':
            sound = new Audio('single.wav');
            break;
        case '*':
            sound = new Audio('single.wav');
            break;
        case '/':
            sound = new Audio('single.wav');
            break;
        case '%':
            sound = new Audio('single.wav');
            break;
        case '.':
            sound = new Audio('single.wav');
            break;
        case '=':
            sound = new Audio('correct.wav');
            break;  

        default:
            sound = null; // No sound for this key
    }
    if (sound) {
        sound.play(); // Play the sound if it's defined
    }
}

// Function to append value to display and play sound
function appendValue(value) {
    display.value += value;
    playSound(value); // Play drum sound when a button is clicked
}
// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendValue(event.key); // For numbers
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendValue(event.key); // For operators
    } else if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        calculateResult(); // Calculate result on 'Enter'
        playSound('='); // Play sound on calculation
    } else if (event.key === 'Backspace') {
        deleteLast(); // Delete the last character on 'Backspace'
    } else if (event.key === 'Escape') {
        clearDisplay(); // Clear the display on 'Escape'
    } else if (event.key === '%') {
        appendValue('%'); // Handle percentage key
    } else if (event.key === '.') {
        appendValue('.'); // Handle decimal point
    }
});




// const display = document.getElementById('display');

// // Function to append value to display
// function appendValue(value) {
//     display.value += value;
// }

// // Function to clear the display
// function clearDisplay() {
//     display.value = '';
// }

// // Function to delete the last character
// function deleteLast() {
//     display.value = display.value.slice(0, -1);
// }


// // Function to play drum sounds
// function playSound(key) {
//     let sound;
//     switch (key) {
//         case '7': // Add sounds for each key
//             sound = new Audio('single.wav'); // Change to your sound file path
//             break;
//         case '8':
//             sound = new Audio('single.wav');
//             break;
//         case '9':
//             sound = new Audio('single.wav');
//             break;
//         case '+':
//             sound = new Audio('single.wav');
//             break;
//         // Continue for other keys...
//         default:
//             sound = null; // No sound for this key
//     }
//     if (sound) {
//         sound.play(); // Play the sound if it's defined
//     }
// }

// // Function to append value to display and play sound
// function appendValue(value) {
//     display.value += value;
//     playSound(value); // Play drum sound when a button is clicked
// }

// // Function to handle keyboard input
// document.addEventListener('keydown', function(event) {
//     if (event.key >= '0' && event.key <= '9') {
//         appendValue(event.key); // For numbers
//         playSound(event.key);   // Play sound on key press
//     } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
//         appendValue(event.key); // For operators
//         playSound(event.key);   // Play sound for operators
//     } else if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         calculateResult(); // Calculate result on 'Enter'
//     } else if (event.key === 'Backspace') {
//         deleteLast(); // Delete the last character on 'Backspace'
//     } else if (event.key === 'Escape') {
//         clearDisplay(); // Clear the display on 'Escape'
//     } else if (event.key === '%') {
//         appendValue('%'); // Handle percentage key
//     } else if (event.key === '.') {
//         appendValue('.'); // Handle decimal point
//     }
// });


// // Function to calculate the result
// function calculateResult() {
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = "Error";
//     }
// }

// Function to handle keyboard input
// document.addEventListener('keydown', function(event) {
//     if (event.key >= '0' && event.key <= '9') {
//         insertValue(event.key); // For numbers
//     } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
//         insertValue(event.key); // For operators
//     } else if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         calculateResult(); // Calculate result on 'Enter'
//     } else if (event.key === 'Backspace') {
//         deleteLast(); // Delete the last character on 'Backspace'
//     } else if (event.key === 'Escape') {
//         clearDisplay(); // Clear the display on 'Escape'
//     } else if (event.key === '%') {
//         insertValue('%'); // Handle percentage key
//     } else if (event.key === '.') {
//         insertValue('.'); // Handle decimal point
//     }
// });
