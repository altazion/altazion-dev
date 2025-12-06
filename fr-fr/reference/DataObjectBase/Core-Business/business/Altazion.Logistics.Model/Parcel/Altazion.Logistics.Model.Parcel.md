## Parcel

La classe Parcel représente un colis avec ses informations de livraison, suivi et adresse destinataire.

Propriétés publiques :
- Id : Identifiant unique du colis de type Guid.
- CreationDate : Date de création du colis de type DateTimeOffset.
- ParcelNumber : Numéro du colis de type string.
- Barcode : Code-barres du colis de type string.
- CarrierId : Identifiant du prestataire de transport (clé primaire legacy) de type int?
- FulfillmentOrderGuid : Identifiant unique du bon de préparation associé de type Guid?.
- AfterSalesServiceGuid : Identifiant unique du dossier SAV associé de type Guid?.
- PickupDate : Date de prélèvement par le transporteur de type DateTimeOffset?.
- CarrierPickupBatchGuid : Identifiant unique du bordereau d'enlèvement associé de type Guid?.
- WeightInGrams : Poids du colis en grammes de type decimal.
- IsInError : Indique si le colis est en erreur (bool).
- IsAcknowledged : Indique si le colis a été pris en compte par le transporteur (bool).
- IsInDelivery : Indique si le colis est en cours de livraison (bool).
- IsDelivered : Indique si le colis a été livré (bool).
- IsReturning : Indique si le colis est en retour (bool).
- InformativeValue : Valeur informative du colis de type decimal?.
- InsuredValue : Valeur assurée du colis de type decimal?.
- CashOnDeliveryAmount : Montant du contre-remboursement de type decimal?.
- RecipientTitle : Civilité du destinataire (string).
- RecipientName : Nom du destinataire (string).
- RecipientAddress : Adresse du destinataire (string).
- RecipientZipCode : Code postal du destinataire (string).
- RecipientCity : Ville du destinataire (string).
- RecipientCountryCode : Code pays du destinataire (ISO 3) (string).
- PickupPointGuid : Identifiant unique du point de livraison de type Guid?.
- PreparationZoneGuid : Identifiant unique de la zone de préparation de type Guid?.
- LogisticsSessionGuid : Identifiant unique de la session logistique de type Guid?.
- ShippingCost : Coût TTC du transport de type decimal?.
- ShippingCostWOTax : Coût HT du transport de type decimal?.
- ReceptionDate : Date de réception du colis de type DateTimeOffset?.
- ReceptionGuid : Identifiant unique de la réception associée de type Guid?.
- TrackingUrl : URL de suivi du colis (string).
- LabelUrl : URL de l'étiquette du colis (string).
- ParcelTypeGuid : Identifiant unique du type de colis de type Guid?.
- LastVerificationDate : Date de la dernière vérification du statut de type DateTimeOffset?.
- CarrierStatus : État du colis selon le transporteur (string).
- LastStatusMessage : Dernier message d'état du transporteur (string).
- AnomalyType : Type d'anomalie détectée (string).

### D�claration TypeScript
```typescript
interface Parcel {
  Id: string;
  CreationDate: string;
  ParcelNumber: string | null;
  Barcode: string | null;
  CarrierId?: number | null;
  FulfillmentOrderGuid?: string | null;
  AfterSalesServiceGuid?: string | null;
  PickupDate?: string | null;
  CarrierPickupBatchGuid?: string | null;
  WeightInGrams: number;
  IsInError: boolean;
  IsAcknowledged: boolean;
  IsInDelivery: boolean;
  IsDelivered: boolean;
  IsReturning: boolean;
  InformativeValue?: number | null;
  InsuredValue?: number | null;
  CashOnDeliveryAmount?: number | null;
  RecipientTitle: string | null;
  RecipientName: string | null;
  RecipientAddress: string | null;
  RecipientZipCode: string | null;
  RecipientCity: string | null;
  RecipientCountryCode: string | null;
  PickupPointGuid?: string | null;
  PreparationZoneGuid?: string | null;
  LogisticsSessionGuid?: string | null;
  ShippingCost?: number | null;
  ShippingCostWOTax?: number | null;
  ReceptionDate?: string | null;
  ReceptionGuid?: string | null;
  TrackingUrl: string | null;
  LabelUrl: string | null;
  ParcelTypeGuid?: string | null;
  LastVerificationDate?: string | null;
  CarrierStatus: string | null;
  LastStatusMessage: string | null;
  AnomalyType: string | null;
}
```