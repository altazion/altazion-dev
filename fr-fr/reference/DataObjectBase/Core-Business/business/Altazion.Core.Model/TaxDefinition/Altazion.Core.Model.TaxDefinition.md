La classe TaxDefinition représente une définition de taxe. Elle permet de définir les propriétés d'une taxe telles que :

- Guid : L'identifiant unique de la taxe (type Guid).
- Label : Le nom ou libellé de la taxe (type string).
- IsFixedAmount : Indique si la taxe est un montant fixe (type bool).
- Rate : Le taux de la taxe (type decimal).
- IsIncludedInPrice : Indique si la taxe est incluse dans le prix (type bool).

Cette classe est marquée par l'attribut DataConcept avec les catégories "Erp" et "Taxes" et hérite de DataObjectBase. Elle est utilisée pour définir les caractéristiques des taxes dans le système.