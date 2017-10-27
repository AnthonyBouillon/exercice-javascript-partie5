// Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"
var CreationTableauLangages = function () {
    //CreationTableauLangages = array('Html', 'Css', 'Java', 'PHP');
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
  RemplacementElement = ['Html', 'CSS', 'Java', 'PHP'];
    RemplacementElement.splice(2, 1, 'Javascript');
  return RemplacementElement;
}
//Ajouter "Ruby" et "Python" à la fin du tableau
var AjoutElementLangages = function (langages) {
    AjoutElementLangages = ['Html', 'CSS', 'Javascript', 'PHP'];
    AjoutElementLangages.push('Ruby', 'Python');
    return AjoutElementLangages;
}
 //Ajouter "-2" et "-1" au début du tableau nombres
var AjoutElementNombres = function (nombres) {
    AjoutElementNombres = [0, 1, 2, 3, 4, 5 ];
    AjoutElementNombres.unshift(-2, -1);
  return AjoutElementNombres;
}
//Supprimer le premier élément du tableau langages
var SuppressionPremierElement = function (langages) {
    SuppressionPremierElement = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    SuppressionPremierElement.splice(0, 0);
  return SuppressionPremierElement;
}
//Supprimer le dernier élément du tableau langages
var SuppressionDernierElement = function (langages) {
    SuppressionDernierElement = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    SuppressionDernierElement.splice(4,1);
  return SuppressionDernierElement;
}
//Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"
var ConversionChaineTableau = function (réseaux_sociaux_chaine) {
    ConversionChaineTableau = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
  return ConversionChaineTableau;
}
//Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule
var ConversionTableauChaine = function (langages) {
    ConversionTableauChaine= ('CSS,Javascript,PHP,Ruby');
  return ConversionTableauChaine;
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
