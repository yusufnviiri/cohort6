const selectionButtons = document.querySelectorAll('[data-selection]')

const finalColumn=documen.querySelectorAll('[data-final-column]')
const computerScoreSpan=documenr.querySelectorAll('[data-computer-score]')
const yourScoreSpan=documenr.querySelectorAll('[data-your-score]')
const SELECTIONS = [{
    name: 'rock',
    sym: 'FIST',
    beats:'scissors'

},
{

name: 'rock',
sym: 'PALM',
beats:'paper'

},
{
name: 'paper',
sym: 'PEACE',
beats:'scissors'

},  

]
selectionButtons.forEach(selectionButtons => {
    selectionButton.addEventListner('click',e => {
    const selectionName = selectionButton.dataset.selectionButton
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
    })
})
function makeSelection(selection){
    const computerSelection = randomSelection()
    const youWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)
    addSelectionResult(computerSelection,computerWinner)
    addSelectionResult(Selection,yourWinner)
    if (youWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
  
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) 
    + 1
}

function addSelectionResult(selection,winner){ 
    const div=document.createElement('div')
    div.innerText=selection.sym
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
   
    finalColumn.after(div)

}
function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}



function randomSelection() {
    const randomIndex = Math.floor(Math.random() )* SELECTIONS.length
    return SELECTIONS[randomIndex]
}