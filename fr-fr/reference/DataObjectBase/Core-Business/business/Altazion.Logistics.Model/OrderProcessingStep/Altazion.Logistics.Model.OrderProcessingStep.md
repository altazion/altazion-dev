## OrderProcessingStep

Cette classe représente une étape de traitement d'un bon de commande dans le workflow de préparation.

- Id : Identifiant unique de l'étape de traitement de type Guid.
- OrderId : Identifiant unique du bon de commande associé de type Guid.
- RailCode : Code du rail ou workflow (exemple : P pour Préparation, E pour Expédition) de type string.
- Status : État courant dans le rail, de type string.
- StartDate : Date de début de l'étape, de type DateTimeOffset.
- EndDate : Date de fin de l'étape, optionnelle (nullable), de type DateTimeOffset?.
- IsInError : Indique si l'étape est en erreur, de type bool.
- Message : Message d'erreur ou d'information associé à l'étape, de type string.
- IsProcessed : Indique si l'étape a été traitée ou complétée, de type bool.

### D�claration TypeScript
```typescript
interface OrderProcessingStep {
  Id: string; // Guid
  OrderId: string; // Guid
  RailCode: string | null;
  Status: string | null;
  StartDate: string; // ISO String for DateTimeOffset
  EndDate?: string | null; // Nullable DateTimeOffset
  IsInError: boolean;
  Message: string | null;
  IsProcessed: boolean;
}
```