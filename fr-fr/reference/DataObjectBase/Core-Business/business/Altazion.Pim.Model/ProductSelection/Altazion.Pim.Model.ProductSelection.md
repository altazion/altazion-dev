## ProductSelection

La classe ProductSelection représente une sélection de produits avec ses informations associées.

Propriétés publiques :
- Guid : Identifiant unique de la sélection de produits.
- Code : Code technique de la sélection de produits.
- Label : Libellé (nom descriptif) de la sélection.
- SiteId : Identifiant facultatif du site associé à la sélection (nullable).
- IsRuleBased : Indique si la sélection est basée sur des règles automatiques.
- IsActive : Indique si la sélection est active.
- Rules : Chaîne représentant les règles d'automatisation de la sélection.
- CustomUrlPart : Partie personnalisée de l'URL associée à la sélection.
- Group : Groupe auquel appartient la sélection.
- CreationDate : Date de création de la sélection.

Cette classe hérite de DataObjectBase et surcharge des méthodes internes pour initialiser ses propriétés à partir d'une ligne de données ainsi que pour obtenir la clé unique (qui est le Guid) et retourner une représentation string (le label).

### D�claration TypeScript
```typescript
interface ProductSelection {
  Guid: string; // Unique identifier (UUID) of the product selection
  Code: string | null; // Code of the product selection
  Label: string | null; // Label of the product selection
  SiteId?: number | null; // Optional site identifier associated to the selection
  IsRuleBased: boolean; // Indicates whether the selection is rule based
  IsActive: boolean; // Indicates whether the selection is active
  Rules: string | null; // Automation rules associated with the selection
  CustomUrlPart: string | null; // Custom URL part associated with the selection
  Group: string | null; // Group to which the selection belongs
  CreationDate: string; // Creation date of the selection in ISO string format
}
```