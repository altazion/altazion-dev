## Contract

La classe Contract représente un contrat commercial avec ses informations de gestion, dates et état.

Constantes définies pour les types de contrats :
- TypeSubscription : contrat de type abonnement (souscription récurrente).
- TypeLicences : contrat de type licences (droits d'utilisation).
- TypeReserve : contrat de type réserve (montant prépayé à consommer).
- TypeForfait : contrat de type forfait (prestation à montant fixe).

Propriétés publiques :
- Guid (Guid) : Identifiant unique du contrat.
- Type (string) : Type de contrat (abonnement, licence, réserve, forfait).
- CustomerGuid (Guid) : Identifiant unique du client associé au contrat.
- CreationDate (DateTimeOffset) : Date de création du contrat.
- ValidationDate (DateTimeOffset?) : Date de validation du contrat (peut être nulle si non validé).
- ValidationContractUxid (Guid?) : Identifiant de l'utilisateur ayant validé le contrat (peut être nul).
- IsDeleted (Boolean) : Indique si le contrat est archivé ou supprimé.
- Label (string) : Libellé ou titre du contrat.
- PartnerGuid (Guid?) : Identifiant du partenaire associé au contrat (peut être nul).
- ManagementClass (string) : Nom de la classe de gestion pour l'automatisation du contrat.
- ManagementClassInit (string) : Chaîne d'initialisation pour la classe de gestion.
- NextUpdate (DateTimeOffset?) : Date de la prochaine mise à jour automatique (peut être nulle).
- EndForecast (DateTimeOffset?) : Date de fin prévisionnelle du contrat (peut être nulle pour les contrats sans échéance).

### D�claration TypeScript
```typescript
interface Contract {
  Guid: string; // Unique identifier (GUID) of the contract
  Type: string; // Type of contract ('A', 'C', 'R', 'F')
  CustomerGuid: string; // Unique identifier (GUID) of the customer
  CreationDate: string; // Creation date (ISO 8601 string)
  ValidationDate?: string | null; // Nullable validation date
  ValidationContractUxid?: string | null; // Nullable GUID of user who validated
  IsDeleted: boolean; // Indicates if the contract is archived or deleted
  Label: string; // Contract label or title
  PartnerGuid?: string | null; // Nullable partner GUID
  ManagementClass: string; // Name of the management class
  ManagementClassInit: string; // Initialization string for management class
  NextUpdate?: string | null; // Nullable next automatic update date
  EndForecast?: string | null; // Nullable expected end date
}

// Constants for contract types
const ContractType = {
  Subscription: 'A',
  Licences: 'C',
  Reserve: 'R',
  Forfait: 'F'
};
```