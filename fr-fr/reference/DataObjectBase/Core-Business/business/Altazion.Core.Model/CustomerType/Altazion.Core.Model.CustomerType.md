## CustomerType

La classe CustomerType représente un type de client avec ses spécifications et métadonnées. Elle contient les propriétés suivantes :
- Id (int) : Identifiant unique du type de client.
- Label (string) : Libellé du type de client.
- MetaType (string) : Métadonnée indiquant le type de client, par exemple consommateur ou entreprise.
- CanUseInvoicableElements (bool) : Indique si le type de client peut utiliser des éléments préfacturables.
- IsActive (bool) : Indique si le type de client est actif.
- EUSpecifics (EUSpecifications) : Spécifications spécifiques à l'Union Européenne pour le type de client, encapsulées dans une classe interne.

Cette classe définit également trois constantes représentant des métadonnées de type de client :
- MetaUndefined : valeur "N", type de client non défini.
- MetaTypeConsumer : valeur "I", type de client consommateur.
- MetaTypeEntreprise : valeur "E", type de client entreprise.

La classe interne EUSpecifications contient la propriété :
- SalesAccountId (string) : Identifiant du compte de vente associé, spécifique à l'Union Européenne.

### D�claration TypeScript
```typescript
interface CustomerType {
  Id: number; // Unique identifier of the customer type
  Label: string; // Label of the customer type
  MetaType: string; // Metadata indicating the customer type
  CanUseInvoicableElements: boolean; // Indicates if invoicable elements can be used
  IsActive: boolean; // Indicates if the customer type is active
  EUSpecifics?: CustomerType.EUSpecifications; // EU-specific specifications
}

namespace CustomerType {
  export interface EUSpecifications {
    SalesAccountId?: string; // Associated sales account identifier
  }

  export const MetaUndefined = "N";
  export const MetaTypeConsumer = "I";
  export const MetaTypeEntreprise = "E";
}
```