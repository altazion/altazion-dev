## TaxDefinition

La classe TaxDefinition représente une définition de taxe. Elle est utilisée pour définir les propriétés d'une taxe telles que si c'est un montant fixe, son taux, et si elle est incluse dans le prix.

Propriétés publiques :
- Guid : Identifiant unique de la taxe de type Guid.
- Label : Libellé ou nom de la taxe de type string.
- IsFixedAmount : Indique si la taxe est un montant fixe (true) ou un pourcentage (false).
- Rate : Taux ou montant de la taxe de type decimal.
- IsIncludedInPrice : Indique si la taxe est incluse dans le prix (true) ou non.

### D�claration TypeScript
```json
interface TaxDefinition {
  Guid: string; // GUID as string
  Label: string;
  IsFixedAmount: boolean;
  Rate: number;
  IsIncludedInPrice: boolean;
}
```