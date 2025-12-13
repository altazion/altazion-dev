## DeliveryModeZoneLink

La classe DeliveryModeZoneLink représente l'association entre un mode de livraison et une zone de livraison. Cette table de liaison définit quels modes de livraison sont disponibles pour quelles zones. 

Propriétés :
- Id : Identifiant unique de l'association (type Guid).
- DeliveryModeGuid : Identifiant du mode de livraison (type Guid).
- DeliveryZoneId : Identifiant de la zone de livraison (type Guid).

Cette classe assure également la validation des identifiants (Id, DeliveryModeGuid, DeliveryZoneId) qui ne doivent pas être vides.

### D�claration TypeScript
```typescript
interface DeliveryModeZoneLink {
  /** Unique identifier of the association */
  Id: string; // Guid
  /** Identifier of the delivery mode */
  DeliveryModeGuid: string; // Guid
  /** Identifier of the delivery zone */
  DeliveryZoneId: string; // Guid
}

```