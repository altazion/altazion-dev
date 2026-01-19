## ProductEventLog

La classe ProductEventLog représente un événement enregistré dans l'historique d'un produit (article). Elle contient les propriétés suivantes :

- EventId : Identifiant unique de l'événement, de type Guid.
- ProductId : Identifiant unique du produit concerné par l'événement, de type Guid.
- EventDate : Date et heure de l'événement, de type DateTimeOffset.
- EventType : Type ou code de l'événement (par exemple "CREATION", "MODIFICATION", "VALIDATION"), de type string.
- Message : Message ou description détaillée de l'événement, de type string.
- UserId : Identifiant unique de l'utilisateur ayant déclenché l'événement, de type Guid?, nullable.

### D�claration TypeScript
```typescript
interface ProductEventLog {
  EventId: string; // Guid
  ProductId: string; // Guid
  EventDate: string; // DateTimeOffset as ISO string
  EventType: string;
  Message: string;
  UserId?: string; // Guid nullable
}
```