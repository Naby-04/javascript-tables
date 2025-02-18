// exo-1 : déclarer trois variables et afficher le resultat de leurs somme au niveau de la console.
// Pour se faire nous allons utiliser les operateurs de calcul
// declarons les variables
let a = 5;
let b = 10;
let c = 15;
// afficher le resultat de la somme au niveau de la console.
// console.log(a + b + c);

// -----------------------------------------------------------------------------------------

// exo-2 :afficher le resultat de la multiplication des trois variables par alert.
// alert(a * b * c);

// -----------------------------------------------------------------------------------------

// exo-3 : Faire la somme de a et b puis diviser la somme par c.
// console.log((a + b) / c);

// -----------------------------------------------------------------------------------------

// exo-4 : Déclarez un tableau de 10 étudiants dont un étudiant a ces informations : Prénom - Nom - Âge - Note

let tableau = document.getElementById("table-body");

if (tableau) {
  let eleveData = [
    { prenom: "JEAN", nom: "DUPONT", age: 20, note: 12 }, //  ceci est un objet contenu dans un tableau
    { prenom: "BENOIT", nom: "Dupont", age: 20, note: 12 },
    { prenom: "ALPHONSE", nom: "DIOUF", age: 20, note: 19 },
    { prenom: "BABA", nom: "FAYE", age: 60, note: 16 },
    { prenom: "OMAR", nom: "FAYE", age: 40, note: 15 },
    { prenom: "WAHAB", nom: "DIOUF", age: 52, note: 12 },
    { prenom: "LISSA", nom: "MENDY", age: 20, note: 7 },
    { prenom: "JOSEPH", nom: "DÉRANT", age: 21, note: 10 },
    { prenom: "STEPHANE", nom: "SAGNA", age: 20, note: 12 },
    { prenom: "JOHN", nom: "DOE", age: 20, note: 13 },
  ];
  eleveData.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${element.prenom}</td><td>${element.nom}</td><td>${element.age}</td><td>${element.note}</td>`;
    tableau?.appendChild(row);
  });
}

// tache-8
// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.

let numTable = [2, 4, 6, 7, 8];
let doubleNum = numTable.map((element) => element * 2);
console.table(doubleNum);

// ---------------------------------------

// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3.

let stringTable = ["salut", "bonjour", "hello", "hi", "hola", "hey"];
let stringTableFilter = stringTable.filter((element) => element.length > 3);
console.table(stringTableFilter);

// --------------------------------------
// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres.

let numTableResume = numTable.reduce((acc, num) => acc + num);
console.log(numTableResume);

// --------------------------------------
// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.
stringTable.sort();
console.table(stringTable);

// --------------------------------------
// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.
stringTable.forEach((element) => console.log(element));

// soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
// Écrire un programme permettant de recopier dans tab3 tous les éléments positifs de tab1, et remplacer les éléments de tab2  par des zéros sans utiliser une boucle, et afficher les resultats dans le DOM

function tableFun(arr) {
  if (!Array.isArray(arr) || !arr.every((item) => typeof item === "number")) {
    throw new Error(
      "Le paramètre doit être un tableau contenant uniquement des nombres !"
    );
  } // gestion des erreurs
  else {
    console.log("Tableau valide :", arr);
  }
  //programme ici
  let tab1 = [];
  let tab2 = [];
  let tab3 = [];
  arr.forEach((element) => {
    tab1.push(element);
    tab2.push(element);
  });
  // console.table(tab1);
  // console.table(tab2);
  tab1.forEach((a) => {
    if (a >= 0) {
      tab3.push(a);
    }
  });
  console.table(tab3);
  let newTab2 = tab2.map((element) => element * -0);
  // console.table(newTab2);
}
tableFun([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
]);

// -------------------------------------- 1
// Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
class Tableau {
  constructor(tab1, tab2) {
    this.tab1 = Array.isArray(tab1) ? tab1 : [];
    this.tab2 = Array.isArray(tab2) ? tab2 : [];
  }
  ajouterElement(element, tableau = "tab1") {
    if (tableau === "tab1") {
      if (this.tab1.length < 5) {
        this.tab1.push(element);
        console.log(`Ajouté à tab1 :`, element);
      } else {
        console.log("Le tableau tab1 est plein !");
      }
    } else if (tableau === "tab2") {
      if (this.tab2.length < 5) {
        this.tab2.push(element);
        console.log(`Ajouté à tab2 :`, element);
      } else {
        console.log("Le tableau tab2 est plein !");
      }
    } else {
      console.log("Tableau inconnu !");
    }
  }
  // Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
  CreateTab3() {
    let tab3 = this.tab1.filter((element) => !this.tab2.includes(element));
    console.log("tab3 :", tab3);
  }
  // Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
  CreateTab4() {
    let tab4 = this.tab1.filter((element) => this.tab2.includes(element));
    console.log("tab4 :", tab4);
  }
}
let tableau1 = new Tableau([], []);
tableau1.ajouterElement(11);
tableau1.ajouterElement(23);
tableau1.ajouterElement(31);
tableau1.ajouterElement(4);
tableau1.ajouterElement(5);
tableau1.ajouterElement(6, "tab2");
tableau1.ajouterElement(4, "tab2");
tableau1.ajouterElement(23, "tab2");
tableau1.ajouterElement(9, "tab2");
tableau1.ajouterElement(10, "tab2");
console.table(tableau1.tab1);
console.table(tableau1.tab2);
tableau1.CreateTab3();
tableau1.CreateTab4();

// -------------------------------------- 2
// Soit un tableau tab1=[5,3,87,1,-4,-99,0]
// Sans utiliser les methodes javascript :
// 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier

let tab1 = [5, 3, 87, 1, -4, -99, 0];
function trierTableau(tab) {
  let temp;
  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[i] > tab[j]) {
        temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
      }
    }
  }
  console.log("Tableau trié :", tab);
}
trierTableau(tab1);

// 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min

function maxMin(tab) {
  let max = tab[0];
  let min = tab[0];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
    if (tab[i] < min) {
      min = tab[i];
    }
  }
  console.log("Max :", max, "Min :", min);
}
maxMin(tab1);
