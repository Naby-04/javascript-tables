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

let eleveData = [
  { prenom: "JEAN", nom: "DUPONT", age: 20, note: 12 }, //  ceci est un objet
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
console.log(eleveData);

// Cibler l'élément <tbody> où on va insérer les lignes de données
let tableBody = document.getElementById("table-body");

// Parcourir chaque élève et créer une ligne pour chaque
eleveData.forEach(function (eleve) {
  // Créer une nouvelle ligne
  let row = document.createElement("tr");

  // Créer et ajouter les cellules pour chaque propriété (prenom, nom, age, note)
  let prenomCell = document.createElement("td");
  prenomCell.textContent = eleve.prenom;
  row.appendChild(prenomCell);

  let nomCell = document.createElement("td");
  nomCell.textContent = eleve.nom;
  row.appendChild(nomCell);

  let ageCell = document.createElement("td");
  ageCell.textContent = eleve.age;
  row.appendChild(ageCell);

  let noteCell = document.createElement("td");
  noteCell.textContent = eleve.note;
  row.appendChild(noteCell);

  // Ajouter la ligne complète au tableau
  tableBody.appendChild(row);
});

eleveData.forEach(function (eleve) {
  console.log("Ajout de l'élève :", eleve); // Cela affichera chaque élève dans la console
});
