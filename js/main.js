

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
}

g = new grandeGrille();

initGrille();

//initialisation de la grille de jeu
function initGrille() {
    var i;
    var j;
    var k;
    var l;

    //initialisation du tableau de cases
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            g.caseGGrille.push(new petiteGrille(i, j, "rien"));

        }
    }

    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            for (k=0;k<9;k++){
                g.caseGGrille[i*3+j].casePGrille.push(new caseGrille("rien", i, j));
            }
        }
    }

    //initialisation de la grille
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
                    g.caseGGrille[i].casePGrille[k].posx = k;
                    g.caseGGrille[i].casePGrille[k].posy = l;
                }
                txt += "</tr>";
            }
            txt += "</table>";
            txt += "</td>";


        }
        txt += "</tr>";
    }
    txt += "</table>";
    document.getElementById("plateau").innerHTML += txt;
}

// retourne 0 si pas de victoire, 1 si victoire des croix et 2 si victoire des ronds
function testVictoirePetiteGrille (grille) {

    /*console.log(grille.casePGrille[0].jetonCase);
    console.log(grille.casePGrille[1].jetonCase);
    console.log(grille.casePGrille[2].jetonCase);
    console.log(grille.casePGrille[3].jetonCase);
    console.log(grille.casePGrille[4].jetonCase);
    console.log(grille.casePGrille[5].jetonCase);
    console.log(grille.casePGrille[6].jetonCase);
    console.log(grille.casePGrille[7].jetonCase);
    console.log(grille.casePGrille[8].jetonCase);*/
    //xxx
    //...
    //...
    if (grille.casePGrille[0].jetonCase == grille.casePGrille[1].jetonCase && grille.casePGrille[0].jetonCase == grille.casePGrille[2].jetonCase && grille.casePGrille[0].jetonCase != "rien"){
        if (grille.casePGrille[0].jetonCase == "croix"){

            return 1;
        }
        else
            return 2;
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

function setJeton (div) {




    if (tour%2 === 0){
        var className = div.getAttribute("class");
        div.className="croix";

        var idName = div.getAttribute("id");
        var x = idName.substr(1, 1);
        var y = idName.substr(4, 1);
        var numTable = idName.substr(7, 1);
        var xy = parseInt(x*3)+parseInt(y);

        console.log(xy);
        g.caseGGrille[numTable].casePGrille[xy].jetonCase = "croix";
    }

    else {
        var className = div.getAttribute("class");
        div.className="rond";

        var idName = div.getAttribute("id");
        var x = idName.substr(1, 1);
        var y = idName.substr(4, 1);
        var numTable = idName.substr(7, 1);
        var xy = parseInt(x*3)+parseInt(y);

        g.caseGGrille[numTable].casePGrille[xy].jetonCase = "rond";
    }

    tour++;

    if (testVictoirePetiteGrille(g.caseGGrille[0]) === 1){
        var className = div.getAttribute("class");
        var numTable = idName.substr(7, 1);

        console.log("victoire j1");

        document.getElementById(numTable).className = "croixGagne";
        console.log (document.getElementById(numTable).className);
    }
    else if (testVictoirePetiteGrille(g.caseGGrille[0]) === 2){
        var className = div.getAttribute("class");
        var numTable = idName.substr(7, 1);

        console.log("victoire j2");

        document.getElementById(numTable).className = "rondGagne";
    }
}


