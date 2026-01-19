## ProductLogisticsInfoBase

La classe ProductLogisticsInfoBase représente les informations logistiques de base d'un produit.

Propriétés publiques :
- FulfillmentTypeCode (string) : Code du type de préparation logistique.
- FulFillmentMandatoryZoneGuid (Guid?) : Identifiant unique de la zone logistique obligatoire.
- IsHighDemand (bool) : Indique si le produit est à forte demande (exemple : cartes pokémons, consoles de jeu, éditions limitées, etc.).

### D�claration TypeScript
```typescript
interface ProductLogisticsInfoBase {
  FulfillmentTypeCode: string | null;
  FulFillmentMandatoryZoneGuid: string | null; // Guid represented as string or null
  IsHighDemand: boolean;
}
```