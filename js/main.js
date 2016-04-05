                                                                /*###########################################*/
                                                                /*              SUPER MORPION                */
                                                                /*  créé par                                 */
                                                                /*      Sloan FARDELE                        */
                                                                /*      Johan CROCHEMORE                     */
                                                                /*      Antonin CHATELET                     */
                                                                /*###########################################*/


/*---------------*/
/*  DEFINITIONS  */
/*---------------*/

//Nous appelerons "grande grille" la grille contenant toutes les petites grilles
//Nous appelerons "petites grilles" les grilles contenus dans les cases de la grande grille
//Nous appelerons "case" les cases contenus dans les petites grilles (et non dans les grandes)

//Croix = bleu
//Rond  = Jaune



/*----------*/
/*  OBJETS  */
/*----------*/

//cases composant les petites grilles
function caseGrille (jetonCase, posx, posy){
    this.jetonCase = jetonCase; //ce que contient la case ('rien', 'croix' ou 'rond')
    this.posx = posx; //position en x
    this.posy = posy; //position en y
}

//grilles composant les grandes grilles
//chaque case de la petite grille comporte une instance de caseGrille
function petiteGrille (posx, posy, jetonCase){
    this.caseGrille = new Array(); //tableau de caseGrille
    this.posx = posx; //position en x
    this.posy = posy; //position en y
    this.jetonCase = jetonCase; //contient le vainqueur de la grille ('rien', 'croix' ou 'rond'), permet de connaitre le gagnant de la grille
}

//chaque case de la grande grille contient une petite grille
function grandeGrille (){
    this.caseGrille = new Array(); //tableau de petiteGrille
    this.jetonCase = "rien"; //contient le vainqueur de la grande grille ('rien', 'croix' ou 'rond')
}

/*---------------------*/
/*  VARIABLES GLOBALES */
/*---------------------*/

//indique le tour de jeu
tour = 0;

//création de la grande grille du jeu
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



/*--------------------*/
/*  LANCEMENT DU JEU  */
/*--------------------*/

initGrille();



/*--------------------------------*/
/*  FONCTIONS/DEROULEMENT DU JEU  */
/*--------------------------------*/

//initialisation de la grille de jeu
function initGrille() {
    autorisationGrille = -1; // au début du jeu, le premier joueur joue où il veut
    tour = 0; //réinitialisation du tour à 0

    //initialisation de la grande grille
    for (var i=0;i<3;i++)
        for (var j=0;j<3;j++)
            g.caseGrille.push(new petiteGrille(i, j, "rien")); //création des petites grilles dans la grande grille


    //initialisation de la petite grille
    for (var i=0;i<3;i++){
        for (var j=0;j<3;j++)
            for (var k=0;k<9;k++)
                g.caseGrille[i*3+j].caseGrille.push(new caseGrille("rien", i, j)); //création des cases dans les petites grilles
    }

    //initialisation de l'affichage des grilles
    var txt = ""; //variable contenant le code html qui sera envoyé à la fin de la boucle
    txt += "<table align=\"center\" class='grandTableau' id='grandTab'>"; //création du grand tableau
    for (var i=0; i<3; i++){
        txt += "<tr>";
        for (var j=0; j<3; j++){
            g.caseGrille[i].posx = i; //initialisation de la position de la grille en x
            g.caseGrille[i].posy = j; //initialisation de la position de la grille en y
            txt += "<td id='x"+g.caseGrille[i].posx+"-y"+g.caseGrille[i].posy+"' class=noir>"; //création d'un petit tableau avec pour id xi-yj

            txt += "<table id="+(i*3+j)+"   >";//création d'un tableau dans une petite grille avec pour id son numéro de création
            for (var k=0;k<3;k++){
                txt += "<tr>";
                for (var l=0;l<3;l++){
                    g.caseGrille[i*3+j].caseGrille[k*3+l].posx = k;//initialisation de la position de la case en x
                    g.caseGrille[i*3+j].caseGrille[k*3+l].posy = l;//initialisation de la position de la case en y
                    txt += "<td id='x"+g.caseGrille[i].caseGrille[k*3+l].posx+"-y"+g.caseGrille[i].caseGrille[k*3+l].posy+"-t"+(i*3+j)+"' onclick=setJeton(this) class=vide></td>"; //création d'une case avec pour id par exemple x2-y3-t5, t étant le numéro de création de son tableau
                }
                txt += "</tr>";
            }
            txt += "</table>";
            txt += "</td>";


        }
        txt += "</tr>";
    }
    txt += "</table>";
    document.getElementById("plateau").innerHTML = txt; //envoi de tout le code html généré
}

// retourne 0 si pas de victoire, 1 si victoire des croix, 2 si victoire des ronds, 3 si égalité
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

    //si la grille n'a pas déjà été remportée
    if (testVictoire(grille)===0) {
        //et que le joueur peut jouer où il veut alors il peut jouer
        if (autorisationGrille === -1)
                return 1;

        //sinon si la grille autorisée pour jouer est différente de celle cliquée par le joueur alors il ne peut pas jouer
        else if (numTable != autorisationGrille)
            return 0;
    }

    //si la grille est gagnée par les croix ou les ronds alors il ne peut pas jouer
    if (testVictoire(grille) === 1 || testVictoire(grille) === 2)
        return 0;

    //si aucune de ces conditions n'est remplie, il peut jouer
    return 1;
}

//change la variable autorisationGrille et indique graphiquement la grille jouable
function setAutorisation (grille, xy){

    //si il y a égalité sur la grille (toutes les cases sont prises)
    var tmpAutorisation = 0; //variable temporaire permettant de savoir si toutes les cases de la grille sont prises (0 si toutes les cases sont prises, 1 si il reste au moins une case vide)
    for (var i=0; i<9; i++){
        //si au moins une case est vide alors tmpAutorisation passe à 1
        if (grille.caseGrille[i].jetonCase === "rien")
            tmpAutorisation = 1;
    }
    //si aucune case n'est vide alors l'autorisation passe à -1
    if (tmpAutorisation === 0){
        document.getElementById("grandTab").className = "jouable";
        autorisationGrille = -1;
        return 1;
    }

    // si la grille est déjà prise alors l'autorisation passe à -1
    if (testVictoire(grille) === 1 || testVictoire(grille) === 2){
        document.getElementById("grandTab").className = "jouable";
        autorisationGrille = -1;
        return 1;
    }
    //si la grille est libre alors l'autorisation correspond à la case cliquée
    else {
        autorisationGrille = xy;
        document.getElementById(xy).className = "jouable";
        return 1;
    }
}

//place le jeton de la couleur correspondant au tour (tour pair = croix, tour impair = rond) et vérifie si la grille est gagnée.
//si la grille est gagnée, la grille indique le gagnant
//puis test si la grande grille est gagnée
function setJeton (div) {

    var className = div.getAttribute("class"); // récupère la classe de l'élément cliqué
    var idName = div.getAttribute("id"); // récupère l'id de l'élément cliqué
    var numTable = idName.substr(7, 1); // récupère le numéro de la petite grille cliquée
    var x = idName.substr(1, 1); // récupère la position en x de la case cliquée
    var y = idName.substr(4, 1); // récupère la position en y de la case cliquée
    var xy = parseInt(x*3)+parseInt(y); // converti x et y en un seul nombre permettant de le réutiliser plus tard

    //si la case n'est pas déjà prise
    if (div.className != "croix" && div.className != "rond" && coupAutorise(g.caseGrille[numTable], numTable) === 1){

        //si le tour est impair -> tour de la croix
        if (tour%2 === 0){
            //remplacement de la case vide par une croix
            div.className="croix";
            g.caseGrille[numTable].caseGrille[xy].jetonCase = "croix";
        }

        //si le tour est impair -> tour du rond
        else {
            //remplacement de la case vide par un rond
            div.className="rond";
            g.caseGrille[numTable].caseGrille[xy].jetonCase = "rond";
        }

        //enlève les contours verts
        document.getElementById(numTable).className = "";
        document.getElementById('grandTab').className = "";

        setAutorisation(g.caseGrille[xy], xy); //change l'autorisation

        tour++; //le nombre de tours s'incrémente

        //test de la victoire des croix sur la petite grille
        if (testVictoire(g.caseGrille[numTable]) === 1){
            document.getElementById(numTable).className = "croixGagne";
            g.caseGrille[numTable].jetonCase = "croix";
        }

        //test de la victoire des ronds sur la grille
        else if (testVictoire(g.caseGrille[numTable]) === 2){
            document.getElementById(numTable).className = "rondGagne";
            g.caseGrille[numTable].jetonCase = "rond";
        }

        //test de la victoire des croix sur la grande grille
        if (testVictoire(g) === 1){
            document.getElementById('grandTab').className = "croixGagne";
            alert("Les bleus ont gagné au bout de "+tour+" tours !");
        }
        //test de la victoire des ronds sur la grille
        else if (testVictoire(g) === 2){
            document.getElementById('grandTab').className = "rondGagne";
            alert("Les jaunes ont gagné au bout de "+tour+" tours !");
        }
    }
}
