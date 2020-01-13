// Changes color of "The Smiths Fan Page"
function titleColor(event) {
let test = document.getElementById('title');

test.addEventListener('mouseover', function(event) {
    event.target.style.color = 'cyan';

    setTimeout(function() {
        event.target.style.color = ''; 
    }, 1000); 

    });  
}

// Hides the image of the band
function imageHidden() {
    let test = document.getElementById('image');
    test.style.display = 'none'; 
} 


// Changes the color of the text with button element
function changeColor(text) {
    let test = document.getElementById('button');
    test.style.color = text; 
}

