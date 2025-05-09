## CustomerType

La classe **CustomerType** représente un type de client avec diverses propriétés et métadonnées.

### Propriétés publiques :
- `Id` (int) : Identifiant unique du type de client.
- `Label` (string) : Libellé du type de client.
- `MetaType` (string) : Métadonnée indiquant le type de client (ex : consommateur, entreprise).
- `IsActive` (bool) : Indique si le type de client est actif.
- `CanUseInvoicableElements` (bool) : Indique si le type de client peut utiliser des éléments préfacturables.
- `EUSpecifics` (EUSpecifications) : Spécifications spécifiques à l'Union Européenne associées au type de client.

### Constantes (métadonnées) :
- `MetaUndefined = "N"` : Type de client non défini.
- `MetaTypeConsumer = "I"` : Type de client consommateur.
- `MetaTypeEntreprise = "E"` : Type de client entreprise.

### Classe imbriquée **EUSpecifications** :
- Représente les spécifications spécifiques à l'Union Européenne pour un type de client.
- Propriété publique :
  - `SalesAccountId` (string) : Identifiant du compte de vente associé.

Cette classe est utilisée pour définir clairement les différents types de clients dans le système avec leurs attributs principaux et permet d'ajouter des spécificités pour l'UE.

### D�claration TypeScript
```json
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId?: string | null;
}

interface CustomerType {
  /** Unique identifier of the customer type */
  Id: number;

  /** Label of the customer type */
  Label: string;

  /** Metadata indicating the customer type (e.g., consumer, company) */
  MetaType: string;

  /** Indicates if the customer type is active */
  IsActive: boolean;

  /** Indicates if the customer type can use invoicable elements */
  CanUseInvoicableElements: boolean;

  /** European Union specific specifications associated with the customer type */
  EUSpecifics?: EUSpecifications;

  /** Constants for metadata */
  MetaUndefined?: string; // "N"
  MetaTypeConsumer?: string; // "I"
  MetaTypeEntreprise?: string; // "E"
}
```