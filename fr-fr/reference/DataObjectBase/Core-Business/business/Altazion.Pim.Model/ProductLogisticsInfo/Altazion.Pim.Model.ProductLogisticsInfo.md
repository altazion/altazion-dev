## ProductLogisticsInfo

La classe ProductLogisticsInfo représente les informations logistiques détaillées d'un produit dans le système Altazion.

Propriétés publiques :

- ProductGuid : Identifiant unique du produit associé aux informations logistiques.
- FulfillmentTypeCode : Code indiquant le type de préparation logistique (optionnel, maximum 3 caractères).
- FulFillmentMandatoryZoneGuid : Identifiant unique optionnel d'une zone logistique obligatoire.

Description :
Cette classe hérite de ProductLogisticsInfoBase, qui contient déjà FulfillmentTypeCode et FulFillmentMandatoryZoneGuid. ProductLogisticsInfo ajoute une propriété ProductGuid, utilisée comme clé unique de l'objet. La validation interne garantit que FulfillmentTypeCode ne dépasse pas 3 caractères. La méthode GetKey() retourne ProductGuid pour identifier cette instance.

Elle est annotée avec l'attribut SqlDataConcept indiquant la table et la notion liée en base de données.

### D�claration TypeScript
```typescript
interface ProductLogisticsInfo {
  /** Unique identifier of the product associated with logistics info. */
  ProductGuid: string; // GUID represented as string
  /** Code representing the type of logistics preparation (optional, max length 3). */
  FulfillmentTypeCode?: string | null;
  /** Optional unique identifier of a mandatory logistics zone. */
  FulFillmentMandatoryZoneGuid?: string | null; // GUID as string or null
}
```