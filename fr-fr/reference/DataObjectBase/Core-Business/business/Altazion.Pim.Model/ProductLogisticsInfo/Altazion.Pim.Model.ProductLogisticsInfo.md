## ProductLogisticsInfo

La classe ProductLogisticsInfo représente les informations logistiques spécifiques d'un produit, incluant un identifiant unique du produit.

Propriétés publiques:
- ProductGuid : Identifiant unique (Guid) du produit associé aux informations logistiques.
- FulfillmentTypeCode : Code (string) optionnel du type de préparation logistique, limité à 3 caractères.
- FulFillmentMandatoryZoneGuid : Identifiant unique (Guid?) de la zone logistique obligatoire associée, optionnel.
- IsHighDemand : Booléen indiquant si le produit est à forte demande (exemples : cartes pokémons, consoles de jeu, éditions limitées).

Cette classe dérive de ProductLogisticsInfoBase et ajoute la gestion d'un identifiant unique produit. Elle valide principalement la longueur du code de type de préparation logistique et fournit une clé unique basée sur ProductGuid.

Commentaires XML et méthodes importantes:
- GetKey() : retourne la clé unique du produit (ProductGuid).
- OnValidate() : valide que le FulfillmentTypeCode ne dépasse pas 3 caractères si renseigné.
- FromDataRow(DataRow dr) : initialise les propriétés à partir d'une ligne de données, notamment ProductGuid puis appelle la classe de base.

Héritage:
- Hérite de ProductLogisticsInfoBase, qui contient FulfillmentTypeCode, FulFillmentMandatoryZoneGuid et IsHighDemand.

### D�claration TypeScript
```typescript
interface ProductLogisticsInfo {
  ProductGuid: string; // GUID identifying the product uniquely
  FulfillmentTypeCode?: string | null; // Optional logistic preparation type code, max 3 chars
  FulFillmentMandatoryZoneGuid?: string | null; // Optional GUID for mandatory logistic zone
  IsHighDemand: boolean; // Whether the product is in high demand
}
```