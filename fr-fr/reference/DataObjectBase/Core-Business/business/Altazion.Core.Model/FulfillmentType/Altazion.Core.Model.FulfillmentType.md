## FulfillmentType

La classe FulfillmentType représente un type de traitement ou de réalisation des commandes dans le système.

Propriétés publiques :

- Id (int) : Identifiant unique du type de traitement.
- Code (string) : Code du type de traitement.
- Label (string) : Libellé du type de traitement.
- IsInternal (bool) : Indique si le type de traitement est interne.
- IsArchived (bool) : Indique si le type de traitement est archivé.
- Kind (string) : Type ou catégorie du traitement (métadonnée).
- Priority (int) : Priorité du type de traitement.
- Description (string) : Description du type de traitement.
- FulfillmentDelayInDays (int) : Délai standard de réalisation en jours.
- DescriptionForCustomers (string) : Description publique du type de traitement, destinée aux clients.

### D�claration TypeScript
```json
export interface FulfillmentType {
  Id: number;
  Code: string;
  Label: string;
  IsInternal: boolean;
  IsArchived: boolean;
  Kind: string;
  Priority: number;
  Description: string;
  FulfillmentDelayInDays: number;
  DescriptionForCustomers: string;
}
```