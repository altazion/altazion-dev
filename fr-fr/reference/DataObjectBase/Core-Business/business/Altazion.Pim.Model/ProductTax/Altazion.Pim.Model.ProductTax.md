## ProductTax

La classe ProductTax représente une taxe associée à un produit dans le système PIM (Product Information Management). Cette classe hérite de ProductTaxBase et ajoute une propriété importante :

- ProductGuid : Identifiant unique (GUID) du produit concerné par la taxe.

Les propriétés héritées de ProductTaxBase comprennent :

- Guid : Identifiant unique de l'objet taxe.
- TaxeDefinitionGuid : Identifiant unique de la définition de la taxe.
- Amount : Montant de la taxe (valeur décimale).

La classe inclut également une méthode de validation (OnValidate) qui vérifie que les identifiants ProductGuid et TaxeDefinitionGuid ne sont pas vides (Guid.Empty), assurant ainsi que la taxe est bien rattachée à un produit et une définition fiscale valides.

Lors de l'initialisation à partir d'une ligne de données (DataRow), la propriété ProductGuid est également initialisée.

En résumé, ProductTax est un objet métier qui modélise une taxe affectée à un produit spécifique avec son montant, utile pour la gestion fiscale liée aux articles dans le catalogue produits.

### D�claration TypeScript
```typescript
interface ProductTax {
  /** Unique identifier of the tax object */
  Guid: string;
  /** Unique identifier of the tax definition */
  TaxeDefinitionGuid: string;
  /** Amount of the tax */
  Amount: number;
  /** Unique identifier of the product associated with the tax */
  ProductGuid: string;
}
```