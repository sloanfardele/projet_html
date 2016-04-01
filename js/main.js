function caseGrille (jetonCase, posx, posy){
    this.jetonCase = jetonCase;
    this.posx = posx;
    this.posy = posy;
}

function petiteGrille (posx, posy, jetonCase){
    this.caseGrille = new Array();
    this.posx = posx;
    this.posy = posy;
    this.jetonCase = jetonCase;
}

function grandeGrille (){
    //tableau de petiteGrille
    this.caseGrille = new Array();
    this.jetonCase = "rien";
}

//indique le tour de jeu
tour = 0;

//grande grille du jeu
g = new grandeGrille();

//indique la grille imposée pour jouer
// -1 = toutes les grilles                    |0|1|2|
// 0 = ligne du haut à gauche                 |3|4|5|
// 1 = ligne du haut au milieu                |6|7|8|
// 2 = ligne du haut à droite
// 3 = ligne du milieu à gauche
// 4 = ligne du milieu au milieu
// 5 = ligne du milieu à droite
// 6 = ligne du bas à gauche
// 7 = ligne du bas au milieu
// 8 = ligne du bas à droite
autorisationGrille = -1;

initGrille();

//initialisation de la grille de jeu
function initGrille() {
    autorisationGrille = -1;
    tour = 0;


    var i;
    var j;
    var k;
    var l;

    //initialisation de la grande grille
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            g.caseGrille.push(new petiteGrille(i, j, "rien"));

        }
    }

    //initialisation de la petite grille
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            for (k=0;k<9;k++){
                g.caseGrille[i*3+j].caseGrille.push(new caseGrille("rien", i, j));
            }
        }
    }

    //initialisation de l'affichage des grilles
    var txt = "";
    txt += "<table align=\"center\" class='grandTableau' id='grandTab'>";
    for (i=0; i<3; i++){
        txt += "<tr>";
        for (j=0; j<3; j++){
            g.caseGrille[i].posx = i;
            g.caseGrille[i].posy = j;
            txt += "<td id='x"+g.caseGrille[i].posx+"-y"+g.caseGrille[i].posy+"' class=noir>";



            txt += "<table id="+(i*3+j)+"   >";
            for (k=0;k<3;k++){
                txt += "<tr>";
                for (l=0;l<3;l++){
                    g.caseGrille[i*3+j].caseGrille[k*3+l].posx = k;
                    g.caseGrille[i*3+j].caseGrille[k*3+l].posy = l;
                    txt += "<td id='x"+g.caseGrille[i].caseGrille[k*3+l].posx+"-y"+g.caseGrille[i].caseGrille[k*3+l].posy+"-t"+(i*3+j)+"' onclick=setJeton(this) class=vide></td>";
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
function testVictoire (grille) {

    //xxx
    //...
    //...
    if (grille.caseGrille[0].jetonCase === grille.caseGrille[1].jetonCase && grille.caseGrille[0].jetonCase === grille.caseGrille[2].jetonCase && grille.caseGrille[0].jetonCase != "rien"){
        if (grille.caseGrille[0].jetonCase == "croix"){

            return 1;
        }
        else{
            return 2;
        }
    }

    //...
    //xxx
    //...
    if (grille.caseGrille[3].jetonCase == grille.caseGrille[4].jetonCase && grille.caseGrille[3].jetonCase == grille.caseGrille[5].jetonCase && grille.caseGrille[3].jetonCase != "rien"){
        if (grille.caseGrille[3].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //...
    //...
    //xxx
    if (grille.caseGrille[6].jetonCase == grille.caseGrille[7].jetonCase && grille.caseGrille[6].jetonCase == grille.caseGrille[8].jetonCase && grille.caseGrille[6].jetonCase != "rien"){
        if (grille.caseGrille[6].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    x..
    x..
    x..
    */
    if (grille.caseGrille[0].jetonCase == grille.caseGrille[3].jetonCase && grille.caseGrille[0].jetonCase == grille.caseGrille[6].jetonCase && grille.caseGrille[0].jetonCase != "rien"){
        if (grille.caseGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    /*
    .x.
    .x.
    .x.
    */
    if (grille.caseGrille[1].jetonCase == grille.caseGrille[4].jetonCase && grille.caseGrille[1].jetonCase == grille.caseGrille[7].jetonCase && grille.caseGrille[1].jetonCase != "rien"){
        if (grille.caseGrille[1].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //..x
    //..x
    if (grille.caseGrille[2].jetonCase == grille.caseGrille[5].jetonCase && grille.caseGrille[2].jetonCase == grille.caseGrille[8].jetonCase && grille.caseGrille[2].jetonCase != "rien"){
        if (grille.caseGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //x..
    //.x.
    //..x
    if (grille.caseGrille[0].jetonCase == grille.caseGrille[4].jetonCase && grille.caseGrille[0].jetonCase == grille.caseGrille[8].jetonCase && grille.caseGrille[0].jetonCase != "rien"){
        if (grille.caseGrille[0].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    //..x
    //.x.
    //x..
    if (grille.caseGrille[2].jetonCase == grille.caseGrille[4].jetonCase && grille.caseGrille[2].jetonCase == grille.caseGrille[6].jetonCase && grille.caseGrille[2].jetonCase != "rien"){
        if (grille.caseGrille[2].jetonCase == "croix")
            return 1;
        else
            return 2;
    }

    return 0;
}

//vérifie si le coup est autorisé (si le coup est joué sur une grille différente de la grille autorisée ou une grille déjà gagnée, le coup ne sera pas pris en compte)
//0 : coup non autorisé
//1 : coup autorisé
function coupAutorise (grille, numTable) {
    console.log("-");

    if (testVictoire(grille)===0) {
        console.log("je rentre");
        if (autorisationGrille === -1){
            console.log("autor grille = -1");
            if (testVictoire(grille) === 0){
                console.log("testvictoire = 0");
                return 1;
            }
            console.log("test victoire != 0");
            return 0;
        }
        else if (numTable != autorisationGrille){
            console.log("numtable != autorisationgrille");
            return 0;
        }
    }

    if (testVictoire(grille) === 1 || testVictoire(grille) === 2){
        return 0;
    }

    console.log("ressort");
    return 1;
}

//change la variable autorisationGrille et indique graphiquement la grille jouable
function setAutorisation (grille, xy){
    // si la grille est déjà prise
    if (testVictoire(grille) === 1 || testVictoire(grille) === 2){
        console.log("grille déjà prise");


        document.getElementById("grandTab").className = "jouable";
        autorisationGrille = -1;
    }
    //si la grille est libre
    else {
        console.log("grille pas prise");
        autorisationGrille = xy;
        document.getElementById(xy).className = "jouable";
    }
}

//place le jeton de la couleur correspondant au tour (tour pair = croix, tour impair = rond) et vérifie si la grille est gagnée.
//si la grille est gagnée, la grille indique le gagnant
//puis test si la grande grille est gagnée
function setJeton (div) {

    var className = div.getAttribute("class");
    var idName = div.getAttribute("id");
    var numTable = idName.substr(7, 1);
    var x = idName.substr(1, 1);
    var y = idName.substr(4, 1);
    var xy = parseInt(x*3)+parseInt(y);
    //si la case n'est pas déjà prise
    console.log(numTable);
    if (div.className != "croix" && div.className != "rond" && coupAutorise(g.caseGrille[numTable], numTable) === 1){

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
            g.caseGrille[numTable].caseGrille[xy].jetonCase = "croix";

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
            g.caseGrille[numTable].caseGrille[xy].jetonCase = "rond";
        }

        document.getElementById(numTable).className = "";


        setAutorisation(g.caseGrille[xy], xy);


        tour++;



        var className = div.getAttribute("class");
        var numTable = idName.substr(7, 1);

        //test de la victoire des croix sur la petite grille
        if (testVictoire(g.caseGrille[numTable]) === 1){
            var className = div.getAttribute("class");
            var numTable = idName.substr(7, 1);

            document.getElementById(numTable).className = "croixGagne";
            g.caseGrille[numTable].jetonCase = "croix";
        }
        //test de la victoire des ronds sur la grille
        else if (testVictoire(g.caseGrille[numTable]) === 2){
            var className = div.getAttribute("class");
            var numTable = idName.substr(7, 1);

            document.getElementById(numTable).className = "rondGagne";
            g.caseGrille[numTable].jetonCase = "rond";
        }

        //test de la victoire des croix sur la grande grille
        if (testVictoire(g) === 1){
            document.getElementById('grandTab').className = "croixGagne";
        }
        //test de la victoire des ronds sur la grille
        else if (testVictoire(g) === 2){
            document.getElementById('grandTab').className = "rondGagne";
        }
    }
    console.log ("utorisation : "+autorisationGrille);
}
