## ProductDimensionsBase

La classe ProductDimensionsBase représente les dimensions d'un produit, incluant à la fois ses dimensions nettes (optionnelles) et brutes (obligatoires).

Propriétés publiques :
- NetHeight : Hauteur nette du produit (type décimal nullable).
- NetWidth : Largeur nette du produit (type décimal nullable).
- NetLength : Longueur nette du produit (type décimal nullable).
- NetWeight : Poids net du produit (type décimal nullable).
- NetVolume : Volume net du produit (type décimal nullable).
- GrossHeight : Hauteur brute du produit (type décimal).
- GrossWidth : Largeur brute du produit (type décimal).
- GrossLength : Longueur brute du produit (type décimal).
- GrossWeight : Poids brut du produit (type décimal).
- GrossVolume : Volume brut du produit (type décimal).

Cette classe hérite de DataObjectBase et fournit une méthode pour initialiser ses propriétés à partir d'une ligne de données (DataRow). La clé unique retournée par défaut est une chaîne vide.

### D�claration TypeScript
```typescript
interface ProductDimensionsBase {
  NetHeight?: number;  // Hauteur nette du produit
  NetWidth?: number;   // Largeur nette du produit
  NetLength?: number;  // Longueur nette du produit
  NetWeight?: number;  // Poids net du produit
  NetVolume?: number;  // Volume net du produit
  GrossHeight: number; // Hauteur brute du produit
  GrossWidth: number;  // Largeur brute du produit
  GrossLength: number; // Longueur brute du produit
  GrossWeight: number; // Poids brut du produit
  GrossVolume: number; // Volume brut du produit
}
```