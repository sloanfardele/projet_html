

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
    txt += "<table align=\"center\">";
    for (i=0; i<3; i++){
        txt += "<tr>";
        for (j=0; j<3; j++){
            g.caseGGrille[i].posx = i;
            g.caseGGrille[i].posy = j;
            txt += "<td id='x"+g.caseGGrille[i].posx+"-y"+g.caseGGrille[i].posy+"' class=noir>";



            txt += "<table>";
            for (k=0;k<3;k++){
                txt += "<tr>";
                for (l=0;l<3;l++){
                    g.caseGGrille[i*3+j].casePGrille[k*3+l].posx = k;
                    g.caseGGrille[i*3+j].casePGrille[k*3+l].posy = l;
                    txt += "<td id='x"+g.caseGGrille[i].casePGrille[k].posx+"-y"+g.caseGGrille[i].casePGrille[k].posy+"' class=noir></td>";
                    g.caseGGrille[i].casePGrille[k].posx = k;
                    g.caseGGrille[i].casePGrille[k].posy = l;
                    txt += "<td id='x"+g.caseGGrille[i].casePGrille[k].posx+"-y"+g.caseGGrille[i].casePGrille[k].posy+"' class=rouge></td>";
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








    g.caseGGrille[0].casePGrille[0].jetonCase = "croix";
    g.caseGGrille[0].casePGrille[1].jetonCase = "croix";
    g.caseGGrille[0].casePGrille[2].jetonCase = "croix";

}

// retourne 0 si pas de victoire, 1 si victoire des croix et 2 si victoire des ronds
function testVictoirePetiteGrille (grille) {
    //xxx
    //...
    //...
    if (grille.casePGrille[0].jetonCase == grille.casePGrille[1].jetonCase && grille.casePGrille[0].jetonCase == grille.casePGrille[2].jetonCase && grille.casePGrille[0].jetonCase != "rien"){
        if (grille.casePGrille[0].jetonCase == "croix")
            return 1;
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

}


