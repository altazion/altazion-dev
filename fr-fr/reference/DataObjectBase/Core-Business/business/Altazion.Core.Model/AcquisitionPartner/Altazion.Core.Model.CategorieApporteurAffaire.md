## CategorieApporteurAffaire

La classe CategorieApporteurAffaire représente une catégorie d'apporteurs d'affaires dans le domaine du commerce.

Propriétés publiques:
- Guid : Identifiant unique de la catégorie d'apporteur d'affaires, de type Guid.
- Label : Libellé de la catégorie, de type string.
- Kind : Type ou nature de la catégorie, de type string.

Méthodes principales:
- La classe permet d'initialiser ses propriétés à partir d'une ligne de données (DataRow).
- La clé unique de l'objet est le Guid.
- La méthode ToString retourne le Label de la catégorie.

### D�claration TypeScript
```json
interface CategorieApporteurAffaire {
  Guid: string; // Unique identifier
  Label: string | null; // Label of the category
  Kind: string; // Kind/type of the category
}
```