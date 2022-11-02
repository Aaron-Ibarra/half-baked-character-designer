// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCounter = 0;
let middleCounter = 0;
let bottomCounter = 0;
// set state for all of the character's catchphrases
let catchphraseList = [];

headDropdown.addEventListener('change', (event) => {
    // get the value of the head dropdown
    const value = event.target.value;
    // increment the head change count state
    headCounter++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', (event) => {
    // get the value of the middle dropdown
    const value = event.target.value;
    // increment the middle change count state
    middleCounter++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', (event) => {
    // get the value of the bottom dropdown
    const value = event.target.value;
    // increment the bottom change count state
    bottomCounter++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', (event) => {
    // get the value of the catchphrase input
    const input = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseList.push(input);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `Head was changed ${headCounter} times. The middle was changed ${middleCounter} times. The bottom was changed ${bottomCounter} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let catchphrase of catchphraseList) {
        const p = document.createElement('p');
        p.textContent = catchphrase;
        catchphrasesEl.append(p);
    }
}
