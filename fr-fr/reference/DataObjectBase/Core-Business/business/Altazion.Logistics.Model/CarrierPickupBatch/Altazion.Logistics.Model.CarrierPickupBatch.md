## CarrierPickupBatch

Cette classe représente un bordereau d'enlèvement de colis par un transporteur.

Propriétés publiques :
- Id : Identifiant unique du bordereau.
- CreationDate : Date de création du bordereau.
- CarrierId : Identifiant du prestataire de transport (clé primaire legacy).
- IsTransmitted : Indique si le bordereau a été transmis au transporteur.
- ErrorCode : Code d'erreur en cas de problème de transmission.
- ErrorMessage : Message d'erreur en cas de problème de transmission.
- Number : Numéro du bordereau.
- PickupDate : Date d'enlèvement prévue ou effective par le transporteur.
- PreparationZoneGuid : Identifiant unique de la zone de préparation.

### D�claration TypeScript
```typescript
interface CarrierPickupBatch {
  Id: string; // Guid
  CreationDate: string; // DateTimeOffset
  CarrierId: number;
  IsTransmitted: boolean;
  ErrorCode: string | null;
  ErrorMessage: string | null;
  Number: string | null;
  PickupDate?: string | null; // DateTimeOffset nullable
  PreparationZoneGuid?: string | null; // Guid nullable
}
```