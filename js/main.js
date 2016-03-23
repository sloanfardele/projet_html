

tour = 0; //indique le tour de jeu

function caseGrille (jetonCase, posx, posy){
    this.jetonCase = jetonCase;
    this.posx = posx;
    this.posy = posy;
}

function petiteGrille (posx, posy, gagnée){
    this.casePGrille = new Array();
    this.posx = posx;
    this.posy = posy;
    this.gagnée = false;
}

function grandeGrille (){
    this.caseGGrille = new Array();
}

g = new grandeGrille();

initGrille();


function initGrille() {
    var i;
    var j;
    var k;
    var l;

    //initialisation du tableau de cases
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            g.caseGGrille.push(new petiteGrille(i, j, false));
        }
    }

    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            g.caseGGrille[i].casePGrille.push(new caseGrille("rien", i, j, false));
        }
    }

    //initialisation de la grille
    var txt = "";
    txt += "<table>";
    idtmp=0;
    for (i=0; i<3; i++){
        txt += "<tr>";
        for (j=0; j<3; j++){
            g.caseGGrille[i].posx = i;
            g.caseGGrille[i].posy = j;
            var id="x"+g.caseGGrille[i].posx+"y"+g.caseGGrille[i].posy;
            txt += "<td id='"+id+"' class=blanc>";


            idtmp++;
            txt += "<table id='"+idtmp+"' onclick='choixCasePetiteGrillle("+idtmp+")'>";
            for (k=0;k<3;k++){
                txt += "<tr>";
                for (l=0;l<3;l++){
                    g.caseGGrille[i].casePGrille[k].posx = k;
                    g.caseGGrille[i].casePGrille[k].posy = l;
                    txt += "<td id='px"+g.caseGGrille[i].casePGrille[k].posx+"-y"+g.caseGGrille[i].casePGrille[k].posy+"' class=noir></td>";
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

function choixCasePetiteGrillle(identif)
{
    console.log(identif);
    var grille = document.getElementById(identif);
    grille.className+=".grandirGrille";
    
}
