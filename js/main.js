

tour = 0; //indique le tour de jeu

function caseGrille (jetonCase, posx, posy){
    this.jetonCase = jetonCase;
    this.posx = posx;
    this.posy = posy;
}

function petiteGrille (posx, posy, jetonCase){
    this.casePGrille = new Array();
    this.posx = posx;
    this.posy = posy;
    this.jetonCase = jetonCase;
}

function grandeGrille (){
    //tableau de petiteGrille
    this.caseGGrille = new Array();
    this.gagnant = "";
}

//grande grille du jeu
g = new grandeGrille();

initGrille();

//initialisation de la grille de jeu
function initGrille() {
    var i;
    var j;
    var k;
    var l;

    //initialisation de la grande grille
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            g.caseGGrille.push(new petiteGrille(i, j, "rien"));

        }
    }

    //initialisation de la petite grille
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            for (k=0;k<9;k++){
                g.caseGGrille[i*3+j].casePGrille.push(new caseGrille("rien", i, j));
            }
        }
    }

    //initialisation de l'affichage des grilles
    var txt = "";
    txt += "<table align=\"center\" class='grandTableau'>";
    for (i=0; i<3; i++){
        txt += "<tr>";
        for (j=0; j<3; j++){
            g.caseGGrille[i].posx = i;
            g.caseGGrille[i].posy = j;
            txt += "<td id='x"+g.caseGGrille[i].posx+"-y"+g.caseGGrille[i].posy+"' class=noir>";



            txt += "<table id="+(i*3+j)+"   >";
            for (k=0;k<3;k++){
                txt += "<tr>";
                for (l=0;l<3;l++){
                    g.caseGGrille[i*3+j].casePGrille[k*3+l].posx = k;
                    g.caseGGrille[i*3+j].casePGrille[k*3+l].posy = l;
                    txt += "<td id='x"+g.caseGGrille[i].casePGrille[k*3+l].posx+"-y"+g.caseGGrille[i].casePGrille[k*3+l].posy+"-t"+(i*3+j)+"' onclick=setJeton(this) class=rouge></td>";
                }
                txt += "</tr>";
            }
            txt += "</table>";
            txt += "</td>";


        }
        txt += "</tr>";
    }
    txt += "</table>";
    document.getElementById("plateau").innerHTML = txt;
}

// retourne 0 si pas de victoire, 1 si victoire des croix et 2 si victoire des ronds
function testVictoirePetiteGrille (grille) {

    //xxx
    //...
    //...
    if (grille.casePGrille[0].jetonCase == grille.casePGrille[1].jetonCase && grille.casePGrille[0].jetonCase == grille.casePGrille[2].jetonCase && grille.casePGrille[0].jetonCase != "rien"){
        if (grille.casePGrille[0].jetonCase == "croix"){

            return 1;
        }
        else{
            return 2;
        }
    }

    //...
    //xxx
    //...
    if (grille.casePGrille[3].jetonCase == grille.casePGrille[4].jetonCase && grille.casePGrille[3].jetonCase == grille.casePGrille[5].jetonCase && grille.casePGrille[3].jetonCase != "rien"){
        if (grille.casePGrille[3].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //...
    //...
    //xxx
    if (grille.casePGrille[6].jetonCase == grille.casePGrille[7].jetonCase && grille.casePGrille[6].jetonCase == grille.casePGrille[8].jetonCase && grille.casePGrille[6].jetonCase != "rien"){
        if (grille.casePGrille[6].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    x..
    x..
    x..
    */
    if (grille.casePGrille[0].jetonCase == grille.casePGrille[3].jetonCase && grille.casePGrille[0].jetonCase == grille.casePGrille[6].jetonCase && grille.casePGrille[0].jetonCase != "rien"){
        if (grille.casePGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    .x.
    .x.
    .x.
    */
    if (grille.casePGrille[1].jetonCase == grille.casePGrille[4].jetonCase && grille.casePGrille[1].jetonCase == grille.casePGrille[7].jetonCase && grille.casePGrille[1].jetonCase != "rien"){
        if (grille.casePGrille[1].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //..x
    //..x
    if (grille.casePGrille[2].jetonCase == grille.casePGrille[5].jetonCase && grille.casePGrille[2].jetonCase == grille.casePGrille[8].jetonCase && grille.casePGrille[2].jetonCase != "rien"){
        if (grille.casePGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //x..
    //.x.
    //..x
    if (grille.casePGrille[0].jetonCase == grille.casePGrille[4].jetonCase && grille.casePGrille[0].jetonCase == grille.casePGrille[8].jetonCase && grille.casePGrille[0].jetonCase != "rien"){
        if (grille.casePGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //.x.
    //x..
    if (grille.casePGrille[2].jetonCase == grille.casePGrille[4].jetonCase && grille.casePGrille[2].jetonCase == grille.casePGrille[6].jetonCase && grille.casePGrille[2].jetonCase != "rien"){
        if (grille.casePGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    return 0;
}

// retourne 0 si pas de victoire, 1 si victoire des croix et 2 si victoire des ronds
function testVictoireGrandeGrille (grille) {
    //xxx
    //...
    //...
    if (grille.caseGGrille[0].jetonCase == grille.caseGGrille[1].jetonCase && grille.caseGGrille[0].jetonCase == grille.caseGGrille[2].jetonCase && grille.caseGGrille[0].jetonCase != "rien"){
        if (grille.caseGGrille[0].jetonCase == "croix"){

            return 1;
        }
        else{
            return 2;
        }
    }

    //...
    //xxx
    //...
    if (grille.caseGGrille[3].jetonCase == grille.caseGGrille[4].jetonCase && grille.caseGGrille[3].jetonCase == grille.caseGGrille[5].jetonCase && grille.caseGGrille[3].jetonCase != "rien"){
        if (grille.caseGGrille[3].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //...
    //...
    //xxx
    if (grille.caseGGrille[6].jetonCase == grille.caseGGrille[7].jetonCase && grille.caseGGrille[6].jetonCase == grille.caseGGrille[8].jetonCase && grille.caseGGrille[6].jetonCase != "rien"){
        if (grille.caseGGrille[6].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    x..
    x..
    x..
    */
    if (grille.caseGGrille[0].jetonCase == grille.caseGGrille[3].jetonCase && grille.caseGGrille[0].jetonCase == grille.caseGGrille[6].jetonCase && grille.caseGGrille[0].jetonCase != "rien"){
        if (grille.caseGGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    .x.
    .x.
    .x.
    */
    if (grille.caseGGrille[1].jetonCase == grille.caseGGrille[4].jetonCase && grille.caseGGrille[1].jetonCase == grille.caseGGrille[7].jetonCase && grille.caseGGrille[1].jetonCase != "rien"){
        if (grille.caseGGrille[1].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //..x
    //..x
    if (grille.caseGGrille[2].jetonCase == grille.caseGGrille[5].jetonCase && grille.caseGGrille[2].jetonCase == grille.caseGGrille[8].jetonCase && grille.caseGGrille[2].jetonCase != "rien"){
        if (grille.caseGGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //x..
    //.x.
    //..x
    if (grille.caseGGrille[0].jetonCase == grille.caseGGrille[4].jetonCase && grille.caseGGrille[0].jetonCase == grille.caseGGrille[8].jetonCase && grille.caseGGrille[0].jetonCase != "rien"){
        if (grille.caseGGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //.x.
    //x..
    if (grille.caseGGrille[2].jetonCase == grille.caseGGrille[4].jetonCase && grille.caseGGrille[2].jetonCase == grille.caseGGrille[6].jetonCase && grille.caseGGrille[2].jetonCase != "rien"){
        if (grille.caseGGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    return 0;
}

//place le jeton de la couleur correspondant au tour (tour pair = croix, tour impair = rond) et vérifie si la grille est gagnée.
//si la grille est gagnée, la grille indique le gagnant
function setJeton (div) {

    var className = div.getAttribute("class");
    //si la case n'est pas déjà prise
    if (div.className != "croix" && div.className != "rond"){

        //si le tour est impair -> tour de la croix
        if (tour%2 === 0){
            var className = div.getAttribute("class");

            var idName = div.getAttribute("id");
            var x = idName.substr(1, 1);
            var y = idName.substr(4, 1);
            var numTable = idName.substr(7, 1);
            var xy = parseInt(x*3)+parseInt(y);

            //remplacement de la case vide par une croix
            div.className="croix";
            g.caseGGrille[numTable].casePGrille[xy].jetonCase = "croix";

        }

        //si le tour est impair -> tour du rond
        else {
            var className = div.getAttribute("class");

            var idName = div.getAttribute("id");
            var x = idName.substr(1, 1);
            var y = idName.substr(4, 1);
            var numTable = idName.substr(7, 1);
            var xy = parseInt(x*3)+parseInt(y);
             //remplacement de la case vide par un rond
            div.className="rond";
            g.caseGGrille[numTable].casePGrille[xy].jetonCase = "rond";
        }

        tour++;

    }

    var className = div.getAttribute("class");
    var numTable = idName.substr(7, 1);

    //test de la victoire des croix sur la petite grille
    if (testVictoirePetiteGrille(g.caseGGrille[numTable]) === 1){
        var className = div.getAttribute("class");
        var numTable = idName.substr(7, 1);

        document.getElementById(numTable).className = "croixGagne";
    }
    //test de la victoire des ronds sur la grille
    else if (testVictoirePetiteGrille(g.caseGGrille[numTable]) === 2){
        var className = div.getAttribute("class");
        var numTable = idName.substr(7, 1);

        document.getElementById(numTable).className = "rondGagne";
    }


    //test de la victoire des croix sur la grande grille
    if (testVictoireGrandeGrille(g) === 1){
        document.getElementById(g).className = "croixGagne";
        console.log("victoire j1");
    }
    //test de la victoire des ronds sur la grille
    else if (testVictoireGrandeGrille(g) === 2){
        document.getElementById(g).className = "rondGagne";
        console.log("victoire j2");
    }
}


