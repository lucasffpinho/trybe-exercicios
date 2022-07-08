// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click',
    function (event) {
        event.preventDefault()
    });

INPUT_CHECKBOX.addEventListener('click',
    function (event) {
        event.preventDefault()
    });

INPUT_TEXT.addEventListener('keypress',
    function (event) {
        if (event.key !== 'a') {
            event.preventDefault()
        }
    }
);


// HREF_LINK.addEventListener('click', (e) => {
//     e.preventDefault();
// });

// INPUT_CHECKBOX.addEventListener('click', (e) => {
//     e.preventDefault();
// });

// INPUT_TEXT.addEventListener('keypress', (e) => {
//     if (e.key !== 'a') {
//         e.preventDefault();
//     }
// });