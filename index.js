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
        var template = `<div class="row">
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
            <div class="container">
                <h1 class="display-4">${1}</h1>
              </div>
        </div>
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
        <div class="container">
            <h1 class="display-4">${2}</h1>
          </div>
    </div>
    <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
    <div class="container">
        <h1 class="display-4">${3}</h1>
      </div>
</div>
    </div>
    <div class="row">
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
            <div class="container">
                <h1 class="display-4">${1}</h1>
              </div>
        </div>
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
        <div class="container">
            <h1 class="display-4">${2}</h1>
          </div>
    </div>
    <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
    <div class="container">
        <h1 class="display-4">${3}</h1>
      </div>
</div>
    </div>
    <div class="row">
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
            <div class="container">
                <h1 class="display-4">${1}</h1>
              </div>
        </div>
        <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
        <div class="container">
            <h1 class="display-4">${2}</h1>
          </div>
    </div>
    <div class="col-sm-4 jumbotron jumbotron-fluid m-2">
    <div class="container">
        <h1 class="display-4">${3}</h1>
      </div>
</div>
    </div>`
    render(template, document.querySelector('#tile-box'));
}