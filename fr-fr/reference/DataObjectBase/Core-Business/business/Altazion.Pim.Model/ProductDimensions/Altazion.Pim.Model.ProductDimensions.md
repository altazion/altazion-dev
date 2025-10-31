## ProductDimensions

La classe `ProductDimensions` représente les dimensions d'un produit avec un identifiant unique. Elle hérite de `ProductDimensionsBase`, qui contient les propriétés liées aux dimensions brutes et nettes.

### Propriétés publiques :

- `ProductGuid` : Identifiant unique de type `Guid` du produit.

- Hérite de `ProductDimensionsBase` qui comprend :
  - `NetHeight` (decimal?) : Hauteur nette du produit, nullable.
  - `NetWidth` (decimal?) : Largeur nette du produit, nullable.
  - `NetLength` (decimal?) : Longueur nette du produit, nullable.
  - `NetWeight` (decimal?) : Poids net du produit, nullable.
  - `NetVolume` (decimal?) : Volume net du produit, nullable.
  - `GrossHeight` (decimal) : Hauteur brute du produit.
  - `GrossWidth` (decimal) : Largeur brute du produit.
  - `GrossLength` (decimal) : Longueur brute du produit.
  - `GrossWeight` (decimal) : Poids brut du produit.
  - `GrossVolume` (decimal) : Volume brut du produit.

### Description :

Cette classe valide que toutes les dimensions brutes sont positives ou nulles, car ce sont des valeurs obligatoires, et les dimensions nettes si elles sont renseignées doivent également être positives ou nulles. La clé unique de l'objet est l'identifiant `ProductGuid`. La méthode `FromDataRow` initialise les valeurs à partir d'une ligne de données, en récupérant d'abord le `ProductGuid` puis en appelant la méthode de base qui remplit les propriétés des dimensions.

### D�claration TypeScript
```typescript
interface ProductDimensions {
  ProductGuid: string; // Guid represented as string
  NetHeight?: number | null;
  NetWidth?: number | null;
  NetLength?: number | null;
  NetWeight?: number | null;
  NetVolume?: number | null;
  GrossHeight: number;
  GrossWidth: number;
  GrossLength: number;
  GrossWeight: number;
  GrossVolume: number;
}
```