## BlackListRiskAssessment

Classe abstraite représentant une évaluation du risque liée à une liste noire. Elle possède une propriété publique Guid de type Guid qui identifie de manière unique une instance de l'évaluation du risque. Cette classe hérite de DataObjectBase et inclut une méthode protégée FromDataRow pour initialiser l'objet à partir d'une ligne de données, ainsi qu'une méthode GetKey qui retourne la clé principale de l'objet, ici le Guid.

### D�claration TypeScript
```typescript
interface BlackListRiskAssessment {
  Guid: string; // Unique identifier (GUID) of the risk assessment
}
```