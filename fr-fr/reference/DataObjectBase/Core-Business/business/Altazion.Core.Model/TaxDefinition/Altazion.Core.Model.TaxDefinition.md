La classe TaxDefinition représente une définition de taxe. Elle est utilisée pour définir les propriétés d'une taxe, telles que si elle est un montant fixe, son taux, et si elle est incluse dans le prix.

Propriétés publiques :
- Guid : identifiant unique de la taxe (type Guid).
- Label : libellé ou nom de la taxe (type string).
- IsFixedAmount : indique si la taxe est un montant fixe (type bool).
- Rate : taux de la taxe exprimé en décimal (type decimal).
- IsIncludedInPrice : indique si la taxe est incluse dans le prix (type bool).