$(document).ready(function () {
    window.document = document;
});

window.numberArray = [];
window.index = -1;

var render = function (template, node) {
	node.innerHTML = template;
};

function getTiles(customTiles){
    if(window.numberOfTiles){
        customTiles = window.numberOfTiles;
    }
    switch(customTiles){
        case 3:
            getThreeTiles(customTiles);
            break;
        case 4:
            getFourTiles(customTiles);
            break;
        case 10:
            getTenTiles(customTiles);
            break;
        default:
            getThreeTiles(customTiles);
            break;
    }
}

function selectDifficultyLevel(numberOfTiles){
    window.numberOfTiles = numberOfTiles;
    console.log(numberOfTiles)
}

(function pushRandomNumber(){
    var customTiles = 3;
    if(window.numberOfTiles){
        customTiles = window.numberOfTiles;
    }
    var limit = (customTiles*customTiles) - 1;
    while(window.numberArray.length < limit){
        var randomNumber = Math.floor(Math.random() * limit) + 1;
        if(window.numberArray.includes(randomNumber)){
            continue;
        }
        else{
            window.numberArray.push(randomNumber);
        }
    }
}) ();

function getRandomNumber(){
    window.index++;
    if(window.numberArray[window.index]){
        return window.numberArray[window.index];
    }
    else{
        return '';
    }
}

function moveTile(e){
    var selectedNumber = e.target.innerText;
    var selectedId = e.target.id.split(',');
    var selectedIdX = selectedId[0];
    var selectedIdY = selectedId[1];
    var document = window.document;
    if(document.getElementById(`${selectedIdX-1},${selectedIdY}`) && document.getElementById(`${selectedIdX-1},${selectedIdY}`).getAttribute('value') == ''){
        document.getElementById(`${selectedIdX-1},${selectedIdY}`).innerHTML = (selectedNumber);
        document.getElementById(`${selectedIdX-1},${selectedIdY}`).setAttribute('value',selectedNumber);
        document.getElementById(e.target.id).innerHTML = ('');
        document.getElementById(e.target.id).setAttribute('value', '');
    } 
    else if(document.getElementById(`${selectedIdX},${parseInt(selectedIdY)+1}`) && document.getElementById(`${selectedIdX},${parseInt(selectedIdY)+1}`).getAttribute('value') == ''){
        document.getElementById(`${selectedIdX},${parseInt(selectedIdY)+1}`).innerHTML = (selectedNumber);
        document.getElementById(`${selectedIdX},${parseInt(selectedIdY)+1}`).setAttribute('value',selectedNumber);
        document.getElementById(e.target.id).innerHTML = ('');
        document.getElementById(e.target.id).setAttribute('value','');
    }
    else if(document.getElementById(`${selectedIdX},${selectedIdY-1}`) && document.getElementById(`${selectedIdX},${parseInt(selectedIdY)-1}`).getAttribute('value') == ''){
        document.getElementById(`${selectedIdX},${selectedIdY-1}`).innerHTML = (selectedNumber);
        document.getElementById(`${selectedIdX},${selectedIdY-1}`).setAttribute('value',selectedNumber);
        document.getElementById(e.target.id).innerHTML = ('');
        document.getElementById(e.target.id).setAttribute('value','');
    }
    else if(document.getElementById(`${parseInt(selectedIdX)+1},${selectedIdY}`) && document.getElementById(`${parseInt(selectedIdX)+1},${selectedIdY}`).getAttribute('value') == ''){
        document.getElementById(`${parseInt(selectedIdX)+1},${selectedIdY}`).setAttribute('value', selectedNumber);
        document.getElementById(`${parseInt(selectedIdX)+1},${selectedIdY}`).innerHTML = selectedNumber;
        document.getElementById(e.target.id).setAttribute('value', '');
        document.getElementById(e.target.id).innerHTML = '';
    }
}

function getThreeTiles(customTiles){
    var template = ''
    for(var i=0; i < customTiles; i++){
        for(var j=0; j< customTiles; j++){
            var number = getRandomNumber();
            template = template + `<div class="col-sm border border-secondary p-2 bg-light">
            <div class="container">
                <h1 class="display-4" id=${i + ','+ j} onclick=moveTile(event) value=${number}>${number}</h1>
              </div>
        </div>`
        }
    }
    render(template, document.querySelector('#tile-box'));
}