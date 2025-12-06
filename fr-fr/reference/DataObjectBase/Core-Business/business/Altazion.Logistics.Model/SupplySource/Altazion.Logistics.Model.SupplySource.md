## SupplySource

La classe SupplySource représente une source d'approvisionnement qui définit comment les stocks sont consolidés pour la disponibilité. Elle contient plusieurs propriétés publiques décrivant les détails de la source :
- Id : Identifiant unique de la source d'approvisionnement (type Guid).
- Icon : Icône associée à la source (type string).
- Label : Libellé de la source d'approvisionnement (type string).
- IsArchived : Indique si la source est archivée (type bool).
- OrderType : Type de commande associé à cette source (type string).
- SourceTypes : Types de sources supportées, peut être une liste séparée par des virgules ou du JSON (type string).
- ModuleUrl : URL du module externe associé (type string).
- ModuleConfig : Configuration du module au format JSON (type string).
- ModuleOmsCredentials : Credentials pour l'accès OMS du module (type string).
- ModuleCommerceCredentials : Credentials pour l'accès Commerce du module (type string).

Cette classe dérive de DataObjectBase et redéfinit la méthode GetKey() pour retourner la clé unique qui est l'Id de la source. Elle dispose également d'une méthode FromDataRow pour initialiser ses propriétés depuis une ligne de données (DataRow).

### D�claration TypeScript
```typescript
interface SupplySource {
  Id: string; // Guid unique identifier
  Icon?: string | null;
  Label?: string | null;
  IsArchived: boolean;
  OrderType?: string | null;
  SourceTypes?: string | null;
  ModuleUrl?: string | null;
  ModuleConfig?: string | null;
  ModuleOmsCredentials?: string | null;
  ModuleCommerceCredentials?: string | null;
}
```