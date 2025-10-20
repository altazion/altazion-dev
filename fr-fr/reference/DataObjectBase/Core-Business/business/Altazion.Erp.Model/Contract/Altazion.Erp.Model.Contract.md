## Contract

La classe Contract représente un contrat dans le système ERP. 

Propriétés publiques :
- Guid : Identifiant unique du contrat.
- Type : Type du contrat (par exemple abonnement, licence, réserve, forfait), représenté par une chaîne.
- CustomerGuid : Identifiant unique du client associé au contrat.
- CreationDate : Date de création du contrat.
- ValidationDate : Date de validation du contrat, nullable.
- ValidationContractUxid : Identifiant de l'utilisateur ayant validé le contrat, nullable.
- IsDeleted : Booléen indiquant si le contrat est archivé.
- Label : Libellé du contrat.
- PartnerGuid : Identifiant unique d'un partenaire associé au contrat, nullable.
- ManagementClass : Classe de gestion associée au contrat.
- ManagementClassInit : Chaîne d'initialisation pour la classe de gestion.
- NextUpdate : Date du prochain update par la classe de gestion, nullable.
- EndForecast : Date prévisionnelle de fin du contrat, nullable.

Constantes de classe :
- TypeSubscription = "A" : représente un contrat type abonnement.
- TypeLicences = "C" : représente un contrat type licences.
- TypeReserve = "R" : représente un contrat type réserve.
- TypeForfait = "F" : représente un contrat type forfait.

### D�claration TypeScript
```typescript
interface Contract {
  Guid: string; // UUID unique identifier
  Type: string | null;
  CustomerGuid: string; // UUID of associated customer
  CreationDate: Date;
  ValidationDate?: Date | null;
  ValidationContractUxid?: string | null; // UUID of user who validated contract
  IsDeleted: boolean;
  Label: string | null;
  PartnerGuid?: string | null; // UUID of associated partner
  ManagementClass: string | null;
  ManagementClassInit: string | null;
  NextUpdate?: Date | null;
  EndForecast?: Date | null;
}

// Constants for contract types
const TypeSubscription = "A";
const TypeLicences = "C";
const TypeReserve = "R";
const TypeForfait = "F";
```