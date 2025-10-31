## ProductLogisticsInfoBase

La classe `ProductLogisticsInfoBase` représente les informations logistiques de base d'un produit.

Propriétés publiques :
- `FulfillmentTypeCode` (string) : Code du type de préparation logistique.
- `FulFillmentMandatoryZoneGuid` (Guid?) : Identifiant unique optionnel de la zone logistique obligatoire.

Méthodes importantes (non détaillées ici car héritage ou override) :
- `GetKey()` retourne par défaut une chaîne vide, représentant la clé unique de l'objet.
- `FromDataRow(DataRow dr)` Initialise les propriétés de l'objet à partir d'une ligne de données, récupérant "log_type_prepa" pour `FulfillmentTypeCode` et "log_zpr_guid_obligatoire" pour `FulFillmentMandatoryZoneGuid`.

### D�claration TypeScript
```typescript
interface ProductLogisticsInfoBase {
  FulfillmentTypeCode?: string;
  FulFillmentMandatoryZoneGuid?: string; // GUID represented as string or null
}
```