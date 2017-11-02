// Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"
var CreationTableauLangages = function () {
    CreationTableauLangages = ['Html', 'CSS', 'Java', 'PHP'];
    return CreationTableauLangages;
}
// Créer un tableau "nombres" contenant les nombres de 0 à 5
var CreationTableauNombres = function () {
    CreationTableauNombres = [0, 1, 2 ,3 ,4, 5];
    return CreationTableauNombres;
}
//Remplacer le troisième élément du tableau par "Javascript"
var RemplacementElement = function (langages) {
    langages[2] = 'Javascript';
    return langages;
}
//Ajouter "Ruby" et "Python" à la fin du tableau
var AjoutElementLangages = function (langages) {
    langages.push('Ruby', 'Python');
    return langages;
}
 //Ajouter "-2" et "-1" au début du tableau nombres
var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1);
    return nombres;
}
//Supprimer le premier élément du tableau langages
var SuppressionPremierElement = function (langages) {
    langages.shift();
    return langages;
}
//Supprimer le dernier élément du tableau langages
var SuppressionDernierElement = function (langages) {
    langages.pop();
    return langages;
}
//Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"
var ConversionChaineTableau = function (réseaux_sociaux_chaine) {
    réseaux_sociaux = réseaux_sociaux_chaine.split(',');
    return réseaux_sociaux;
}
//Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule
var ConversionTableauChaine = function (langages) {
    langages_chaine = langages.join(',');
    return langages_chaine;
}
//Trier le tableau "reseaux_sociaux"
var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}
//Inverser le tableau "langages"
var InversionTableau = function (reseaux_sociaux){
    InversionTableau = reseaux_sociaux.reverse();
    return InversionTableau;
}
