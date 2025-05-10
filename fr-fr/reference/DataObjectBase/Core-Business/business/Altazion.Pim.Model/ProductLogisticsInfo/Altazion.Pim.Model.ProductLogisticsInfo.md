## ProductLogisticsInfo

Cette classe représente les informations logistiques d'un produit, incluant un identifiant unique pour le produit.

Propriétés :
- ProductGuid : Identifiant unique (GUID) du produit associé aux informations logistiques.
- FulfillmentTypeCode : Code du type de préparation logistique.
- FulFillmentMandatoryZoneGuid : Identifiant unique (GUID) de la zone logistique obligatoire.

### D�claration TypeScript
```typescript
interface ProductLogisticsInfo {
  ProductGuid: string; // GUID
  FulfillmentTypeCode: string | null;
  FulFillmentMandatoryZoneGuid: string | null; // GUID
}
```