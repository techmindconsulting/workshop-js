# TD : Créer de nouvelles chaines à partir de morceaux

Le tableau contient un lot de chaînes contenant des informations à propos d'arrêts de train dans le nord de de la France. 

Les chaînes sont des éléments de données contenant: 
- le code en trois lettres de l'arrêt
- des données lisibles par une machine suivi par un point-virgule
- le nom de la station lisible par un humain.

Exemple
```
LIL675847583748sjt567654;Lille Garde du Nord
```

Nous voulons extraire le code de la station et son nom, et les associer dans une chaîne avec la structure suivante :
```
LIL: Lille Gare du Nord
```

### html
```html
<div class="output">
  <ul>
  </ul>
</div>
```

### javascript

```javascript
const list = document.querySelector('.output ul');
list.innerHTML = '';
const stations = ['LIL675847583748sjt567654;Lille Garde du Nord',
                'GRE576746573fhdg4737dh4;Gare de Grenoble',
                'LEN5hg65hd737456236dch46dg4;Gare Lens Stade',
                'PAR4f65hf75f736463;Paris Gare de Lyon',
                'MAR5767ghtyfyr4536dh45dg45dg3;Gare de Saint Charles'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // Etape 1
  // Etape 2
  // Etape 3
  // Etape 4
  // Etape 5

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
```
## Etape 1

Extraire le code de trois lettres de la station et le stocker dans une nouvelle variable.

## Etape 2

Trouver la position du caractère point-virgule.

## Etape 3

Extraire le nom de la station lisible par un humain en utilisant la position du caractère point virgule comme référence, et le stocker dans une nouvelle variable.

## Etape 4
Concaténer les deux nouvelles variables et une chaîne pour fabriquer la chaîne finale.

## Etape 5
Changer la valeur de la variable  `result`  pour qu'elle soit égale à la chaîne finale, plutôt qu'à  `input`.
