## TP 4 -  Les boucles

### A faire sur un environnement en ligne JS (jsbin ou codepen)

#### -  Exercice 1

A l'aide d'une boucle for, écrire dans la console la suite de nombres qui va de 50 à 59.


#### -  Exercice 2

A l'aide d'une boucle for, écrire dans la console la suite de chiffres qui va de 0 à 9 mais stopper le programme à 5.


#### -  Exercice 3

A l'aide d'une boucle while, écrire dans la console la suite de nombres qui va de 20 à 39.


#### -  Exercice 4

A l'aide d'une boucle while, écrire dans la console la suite de nombres qui va de 20 à 39 tout en sautant les multiples de 3.


#### -  Exercice 5

Ecrire une boucle for qui itérera de 1 à 15. Pour chaque itération, il vérifiera si le nombre actuel est impair ou pair, et affichera un message à l'écran via la fonction document.write().

Le resultat devra ressembler à
```
1 est impair
2 est pair
ect..
```

Documentation: https://developer.mozilla.org/fr/docs/Web/API/Document/write

#### -  Exercice 6

Écrire un programme qui itère les nombres entiers de 1 à 100. Mais pour les multiples de trois, affichez à l'écran "Fizz" au lieu du nombre et pour les multiples de cinq, affichez "Buzz". Pour les nombres qui sont des multiples de trois et cinq, affichez "FizzBuzz".

Documentation: https://developer.mozilla.org/fr/docs/Web/API/Document/write

#### -  Exercice 7

Écrire un programme qui additionne les multiples de 3 et 5 entre 0 et 1000 et afficher le resultat dans la console.


#### -  Exercice 8

Completer le programme suivant qui doit permettre de saisir un nombre entre 1 et 10 qui pourrait être un multiple du nombre aléatoire
compris entre 0 et 100.
Les 4 mentions A completer doivent être complété

```javascript
const INFORMATION = 
      'Merci de saisir un nombre entre 1 et 10' + 
      ' qui pourrait être multiple' + 
      ' du nombre aléatoire';

let random = Math.floor(Math.random() * // A completer 1);

let operande = prompt(INFORMATION);
operande = Number(operande); 

if (// A completer 2) {
  while(// A completer 3) {
    alert(random + ' non multiple de ' + operande);
    operande = prompt(INFORMATION);
    operande = Number(operande);
    random = Math.floor(Math.random() * // A completer 4);
  }
  document.write(random + ' multiple de ' + operande);
} else {
  alert('Merci de saisir un nombre entre 1 et 10');
}
``` 

Une fois completé, vous devez écrire le même programme avec un do...while


#### -  Exercice 9

Completer la fonction puissance qui prend deux arguments qui réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS. `.

Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois

```
function puissance(nombre, exposant) {
  
}

console.log(puissance(2,2)); // Doit afficher 4
console.log(puissance(3,4)); // Doit afficher 81
```

#### - Exercice 10

Ecrire un programme qui construit le schema suivant à l'écran en utiilisant les boucles.

```
1  
1 1  
1 1 1  
1 1 1 1  
1 1 1 1 1
``` 
Indice : une boucle imbriqué devra être utilisé

##### Exemple
```javascript
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  console.log(product);
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
``` 
Documentation: https://developer.mozilla.org/fr/docs/Web/API/Document/write
