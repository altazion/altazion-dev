## DeliveryModeGroupMember

La classe DeliveryModeGroupMember représente l'appartenance d'un mode de livraison à un groupe de modes. Elle permet d'associer plusieurs modes de livraison (par exemple : Colissimo, Chronopost, DPD) à un même groupe (par exemple : "Livraison à domicile").

Propriétés publiques :
- Id : Guid, identifiant unique du membre.
- GroupId : Guid, identifiant du groupe de modes de livraison.
- DeliveryModeId : Guid, identifiant du mode de livraison membre du groupe.

### D�claration TypeScript
```typescript
interface DeliveryModeGroupMember {
  Id: string; // Unique identifier of the member
  GroupId: string; // Identifier of the delivery mode group
  DeliveryModeId: string; // Identifier of the delivery mode member of the group
}
```