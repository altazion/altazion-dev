## TextType

La classe TextType représente un type de texte complémentaire pouvant être associé à des éléments du système PIM.

Propriétés publiques :
- Id : Identifiant unique du type de texte (Guid).
- CompanyId : Identifiant de la raison juridique associée (int).
- Code : Code unique du type de texte, limité à 20 caractères (string).
- Type : Type d'élément auquel ce texte peut être associé, sur 3 caractères (exemple : "ART" pour Article) (string).
- IsEditableFromBackoffice : Indique si ce type de texte est saisissable depuis le backoffice (bool).
- MaxLength : Longueur maximale autorisée pour ce type de texte (int).
- IsUnique : Indique si ce type de texte doit être unique par élément (bool).
- ProcessingClass : Nom de la classe de traitement personnalisée (optionnel, max 500 caractères) (string).
- ProcessingClassParameters : Paramètres de la classe de traitement en format JSON ou XML (optionnel) (string).

### D�claration TypeScript
```typescript
interface TextType {
  Id: string; // Guid
  CompanyId: number;
  Code: string | null;
  Type: string | null;
  IsEditableFromBackoffice: boolean;
  MaxLength: number;
  IsUnique: boolean;
  ProcessingClass: string | null;
  ProcessingClassParameters: string | null;
}
```