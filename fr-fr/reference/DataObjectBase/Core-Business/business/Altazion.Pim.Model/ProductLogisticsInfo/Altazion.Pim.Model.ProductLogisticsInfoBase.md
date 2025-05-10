## ProductLogisticsInfoBase

La classe ProductLogisticsInfoBase représente les informations logistiques de base d'un produit.

Propriétés publiques :
- FulfillmentTypeCode : code du type de préparation logistique, de type chaîne de caractères.
- FulFillmentMandatoryZoneGuid : identifiant unique optionnel (GUID) de la zone logistique obligatoire.

Cette classe permet d'initialiser ses propriétés à partir d'une ligne de données (DataRow) typique d'une base de données, où les colonnes "log_type_prepa" et "log_zpr_guid_obligatoire" correspondent respectivement au code du type de préparation logistique et à la zone logistique obligatoire.

### D�claration TypeScript
```typescript
interface ProductLogisticsInfoBase {
  /** Code of the logistic preparation type */
  FulfillmentTypeCode: string | null;
  /** Optional unique identifier (GUID) of the mandatory logistic zone */
  FulFillmentMandatoryZoneGuid: string | null; // GUID represented as string
}
```