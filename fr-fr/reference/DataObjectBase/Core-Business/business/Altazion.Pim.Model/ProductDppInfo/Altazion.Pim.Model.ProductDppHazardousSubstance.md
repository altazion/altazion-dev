## ProductDppHazardousSubstance

Classe représentant une substance dangereuse présente dans un produit, en accord avec les obligations SCIP et REACH article 33.

Propriétés publiques :
- Name : Nom de la substance dangereuse.
- CasNumber : Numéro CAS identifiant la substance chimique.
- MaxConcentrationPercent : Concentration maximale de la substance dans le produit, exprimée en pourcentage massique (%).
- EcNumber : Numéro CE (EINECS/ELINCS) identifiant la substance dans l'inventaire européen (par exemple : "200-001-8").
- IsSvhc : Indique si la substance est inscrite sur la liste SVHC (Substances extrêmement préoccupantes) de l'ECHA.


### D�claration TypeScript
```typescript
interface ProductDppHazardousSubstance {
  /** Name of the hazardous substance */
  Name: string;
  /** CAS number identifying the chemical substance */
  CasNumber: string;
  /** Maximum concentration of the substance in the product (mass %) */
  MaxConcentrationPercent: number;
  /** EC number identifying the substance in the European inventory */
  EcNumber: string;
  /** Indicates if the substance is listed as SVHC by ECHA */
  IsSvhc: boolean;
}
```