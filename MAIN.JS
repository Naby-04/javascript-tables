// exo-1 : déclarer trois variables et afficher le resultat de leurs somme au niveau de la console.
// Pour se faire nous allons utiliser les operateurs de calcul
// declarons les variables
let a = 5;
let b = 10;
let c = 15;
// afficher le resultat de la somme au niveau de la console.
console.log(a + b + c);

// -----------------------------------------------------------------------------------------

// exo-2 :afficher le resultat de la multiplication des trois variables par alert.
// alert(a * b * c);

// -----------------------------------------------------------------------------------------

// exo-3 : Faire la somme de a et b puis diviser la somme par c.
console.log((a + b) / c);

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
