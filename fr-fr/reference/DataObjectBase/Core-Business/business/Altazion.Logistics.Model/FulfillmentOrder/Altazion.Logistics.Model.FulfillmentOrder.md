## FulfillmentOrder

La classe FulfillmentOrder représente un bon de préparation dans le cadre logistique. Elle contient les informations nécessaires au suivi et à la gestion du processus de préparation des commandes.

Propriétés publiques :
- Id : Identifiant unique du bon de préparation (Guid).
- PreparationType : Type de préparation sous forme de code (string).
- OrderId : Identifiant unique du bon de commande associé (Guid).
- Number : Numéro du bon de préparation (string).
- CreationDate : Date de création du bon de préparation (DateTimeOffset).
- IsValidated : Indique si le bon est validé (bool).
- IsPreparationTriggered : Indique si la préparation est déclenchée (bool).
- IsPreparationInProgress : Indique si la préparation est en cours (bool).
- IsCompleted : Indique si la préparation est terminée (bool).
- PreparationBinInfo : Informations sur le bac de préparation (string).
- PreparationZoneGuid : Identifiant unique de la zone de préparation (Guid?, nullable).
- RailsState : État du traitement dans le workflow (string).
- ReplenishmentRequestGuid : Identifiant unique de la demande de réapprovisionnement associée (Guid?, nullable).
- CompletionDate : Date de fin de préparation (DateTimeOffset?, nullable).
- ParentFulfillmentOrderGuid : Identifiant du bon de préparation parent si fractionné (Guid?, nullable).
- InterStorePackageGuid : Identifiant unique du colis inter-magasins associé (Guid?, nullable).
- OriginStoreGuid : Identifiant unique du magasin d'origine (Guid?, nullable).
- DestinationStoreGuid : Identifiant unique du magasin de destination (Guid?, nullable).
- PartnerGuid : Identifiant unique du partenaire associé (Guid?, nullable).
- ProcessingDeadline : Date limite de traitement (DateTimeOffset?, nullable).

### D�claration TypeScript
```typescript
export interface FulfillmentOrder {
  Id: string;  // Guid
  PreparationType: string | null;
  OrderId: string;  // Guid
  Number: string | null;
  CreationDate: string;  // ISO 8601 date string
  IsValidated: boolean;
  IsPreparationTriggered: boolean;
  IsPreparationInProgress: boolean;
  IsCompleted: boolean;
  PreparationBinInfo: string | null;
  PreparationZoneGuid?: string | null;
  RailsState: string | null;
  ReplenishmentRequestGuid?: string | null;
  CompletionDate?: string | null;
  ParentFulfillmentOrderGuid?: string | null;
  InterStorePackageGuid?: string | null;
  OriginStoreGuid?: string | null;
  DestinationStoreGuid?: string | null;
  PartnerGuid?: string | null;
  ProcessingDeadline?: string | null;
}
```