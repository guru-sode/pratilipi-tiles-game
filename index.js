var render = function (template, node) {
	node.innerHTML = template;
};

function getTiles(customTiles){
    if(window.numberOfTiles){
        customTiles = window.numberOfTiles;
    }
    for(var i=0; i<customTiles; i++){
        var template = `<div class="row">
        <div class="col-sm-4 jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">1</h1>
              </div>
        </div>
    </div>`
    render(template, document.querySelector('#tile-box'));
    }
}

function selectDifficultyLevel(numberOfTiles){
    window.numberOfTiles = numberOfTiles
    console.log(numberOfTiles)
}