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
    window.numberOfTiles = numberOfTiles
    console.log(numberOfTiles)
}

function getThreeTiles(customTiles){
    var template = ''
    for(var i=0; i < customTiles*customTiles; i++){
        template = template + `<div class="col-sm border border-secondary p-2 bg-light">
            <div class="container">
                <h1 class="display-4">${ i+1 === (customTiles*customTiles) ? '': i+1}</h1>
              </div>
        </div>`
    }
    render(template, document.querySelector('#tile-box'));
}