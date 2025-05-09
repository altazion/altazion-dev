La classe TaxDefinition représente une définition de taxe. Elle permet de définir les propriétés d'une taxe telles que son identifiant unique, son libellé, si elle est un montant fixe, son taux, et si elle est incluse dans le prix.

Propriétés publiques:
- Guid: Identifiant unique de la taxe.
- Label: Le libellé ou nom affiché de la taxe.
- IsFixedAmount: Indique si la taxe est un montant fixe (true) ou non (false).
- Rate: Le taux de la taxe, exprimé en décimal.
- IsIncludedInPrice: Indique si la taxe est incluse dans le prix (true) ou ajoutée en supplément (false).