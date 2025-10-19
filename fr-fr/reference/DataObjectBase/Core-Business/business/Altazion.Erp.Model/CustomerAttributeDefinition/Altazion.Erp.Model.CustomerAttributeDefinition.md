## CustomerAttributeDefinition

Cette classe représente la définition d'un attribut commercial, correspondant à la table `commercial_attributsdefinitions`.

Propriétés publiques :
- `AttributeGuid` (Guid) : Identifiant unique (GUID) de la définition d'attribut.
- `Label` (string) : Libellé ou nom de l'attribut.
- `TypeCode` (string) : Code du type d'attribut.
- `HasEnumeratedValues` (bool) : Indique si l'attribut dispose d'une liste de valeurs énumérées possibles.
- `MinItems` (int?) : Nombre minimum d'éléments sélectionnables pour cet attribut.
- `MaxItems` (int?) : Nombre maximum d'éléments sélectionnables pour cet attribut.
- `ForCustomer` (bool) : Indique si l'attribut est destiné aux clients.
- `ForProspect` (bool) : Indique si l'attribut est destiné aux prospects.
- `ForList` (bool) : Indique si l'attribut est destiné aux listes.

Méthode clé :
- `GetKey()` retourne l'identifiant `AttributeGuid` comme clé unique de la définition.

### D�claration TypeScript
```typescript
interface CustomerAttributeDefinition {
  AttributeGuid: string; // GUID string
  Label: string | null;
  TypeCode: string | null;
  HasEnumeratedValues: boolean;
  MinItems?: number | null;
  MaxItems?: number | null;
  ForCustomer: boolean;
  ForProspect: boolean;
  ForList: boolean;
}
```