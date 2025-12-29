## ProductRackingAssignment

La classe ProductRackingAssignment représente l'affectation d'un article à un emplacement de rayonnage pour l'optimisation du picking. Elle possède les propriétés publiques suivantes :

- AssignmentGuid : Identifiant unique de l'affectation (type Guid).
- RackingLocationGuid : Identifiant de l'emplacement de rayonnage (type Guid).
- ProductGuid : Identifiant de l'article affecté (type Guid).
- IsAutomatic : Indique si l'affectation a été faite automatiquement par le système (type bool).
- IsExceptional : Indique si l'affectation est exceptionnelle (temporaire ou hors parcours standard) (type bool).
- Order : Ordre de traitement de l'article dans le rayonnage, utilisé pour la priorisation du picking (type short).

Chaque propriété correspond à un champ de données permettant de définir clairement une affectation de produit dans un emplacement de rayonnage, afin d'améliorer les opérations de préparation de commandes.

### D�claration TypeScript
```typescript
interface ProductRackingAssignment {
  AssignmentGuid: string; // Unique identifier of the assignment (GUID)
  RackingLocationGuid: string; // Identifier of the shelving location (GUID)
  ProductGuid: string; // Identifier of the assigned product (GUID)
  IsAutomatic: boolean; // True if assignment was done automatically
  IsExceptional: boolean; // True if the assignment is exceptional
  Order: number; // Processing order for picking prioritization
}
```