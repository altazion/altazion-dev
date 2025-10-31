## CustomerType

La classe CustomerType représente un type de client avec ses spécifications et métadonnées. Elle possède les propriétés suivantes :

- Id (int) : Identifiant unique du type de client.
- Label (string) : Libellé du type de client.
- MetaType (string) : Métadonnée indiquant le type de client (par exemple, consommateur ou entreprise).
- CanUseInvoicableElements (bool) : Indique si le type de client peut utiliser des éléments préfacturables.
- IsActive (bool) : Indique si le type de client est actif.
- EUSpecifics (CustomerType.EUSpecifications) : Spécifications spécifiques à l'Union Européenne pour le type de client.

La classe définit aussi les constantes suivantes pour MetaType :

- MetaUndefined = "N" : Type de client non défini.
- MetaTypeConsumer = "I" : Type de client consommateur.
- MetaTypeEntreprise = "E" : Type de client entreprise.

La classe imbriquée EUSpecifications représente des spécifications spécifiques à l'Union Européenne et contient :

- SalesAccountId (string) : Identifiant du compte de vente associé.

Cette classe permet de gérer les types de clients avec des validations sur les principales propriétés et la prise en charge de métadonnées spécifiques.

### D�claration TypeScript
```typescript
interface CustomerType {
  Id: number;
  Label: string;
  MetaType: string;
  CanUseInvoicableElements: boolean;
  IsActive: boolean;
  EUSpecifics?: CustomerTypeEUSpecifications;
}

interface CustomerTypeEUSpecifications {
  SalesAccountId?: string;
}

// Constants representing MetaType values
const MetaUndefined = "N";
const MetaTypeConsumer = "I";
const MetaTypeEntreprise = "E";
```