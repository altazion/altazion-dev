## Parcel

La classe Parcel représente un colis dans le système logistique avec toutes ses informations associées. Voici ses propriétés publiques :

- Id : Identifiant unique du colis (Guid).
- CreationDate : Date de création du colis (DateTimeOffset).
- ParcelNumber : Numéro du colis (string).
- Barcode : Code-barres du colis (string).
- CarrierId : Identifiant du prestataire de transport (clé primaire legacy), nullable (int?).
- FulfillmentOrderGuid : Identifiant unique du bon de préparation associé, nullable (Guid?).
- AfterSalesServiceGuid : Identifiant unique du dossier SAV associé, nullable (Guid?).
- PickupDate : Date de prélèvement par le transporteur, nullable (DateTimeOffset?).
- CarrierPickupBatchGuid : Identifiant unique du bordereau d'enlèvement associé, nullable (Guid?).
- WeightInGrams : Poids du colis en grammes (decimal).
- IsInError : Indique si le colis est en erreur (bool).
- IsAcknowledged : Indique si le colis a été pris en compte par le transporteur (bool).
- IsInDelivery : Indique si le colis est en cours de livraison (bool).
- IsDelivered : Indique si le colis a été livré (bool).
- IsReturning : Indique si le colis est en retour (bool).
- InformativeValue : Valeur informative du colis, nullable (decimal?).
- InsuredValue : Valeur assurée du colis, nullable (decimal?).
- CashOnDeliveryAmount : Montant du contre-remboursement, nullable (decimal?).
- RecipientTitle : Civilité du destinataire (string).
- RecipientName : Nom du destinataire (string).
- RecipientAddress : Adresse du destinataire (string).
- RecipientZipCode : Code postal du destinataire (string).
- RecipientCity : Ville du destinataire (string).
- RecipientCountryCode : Code pays du destinataire (ISO 3, string).
- PickupPointGuid : Identifiant unique du point de livraison, nullable (Guid?).
- PreparationZoneGuid : Identifiant unique de la zone de préparation, nullable (Guid?).
- LogisticsSessionGuid : Identifiant unique de la session logistique, nullable (Guid?).
- ShippingCost : Coût TTC du transport, nullable (decimal?).
- ShippingCostWOTax : Coût HT du transport, nullable (decimal?).
- ReceptionDate : Date de réception du colis, nullable (DateTimeOffset?).
- ReceptionGuid : Identifiant unique de la réception associée, nullable (Guid?).
- TrackingUrl : URL de suivi du colis (string).
- LabelUrl : URL de l'étiquette du colis (string).
- ParcelTypeGuid : Identifiant unique du type de colis, nullable (Guid?).
- LastVerificationDate : Date de la dernière vérification du statut, nullable (DateTimeOffset?).
- CarrierStatus : État du colis selon le transporteur (string).
- LastStatusMessage : Dernier message d'état du transporteur (string).
- AnomalyType : Type d'anomalie détectée (string).
- DeliveryDate : Date de livraison effective du colis, nullable (DateTimeOffset?).

Cette classe permet de modéliser un colis complet avec son suivi, ses informations tarifaires, ses statuts de livraison et les données du destinataire.

### D�claration TypeScript
```typescript
interface Parcel {
  Id: string; // Guid
  CreationDate: string; // DateTimeOffset ISO string
  ParcelNumber: string | null;
  Barcode: string | null;
  CarrierId?: number;
  FulfillmentOrderGuid?: string;
  AfterSalesServiceGuid?: string;
  PickupDate?: string;
  CarrierPickupBatchGuid?: string;
  WeightInGrams: number;
  IsInError: boolean;
  IsAcknowledged: boolean;
  IsInDelivery: boolean;
  IsDelivered: boolean;
  IsReturning: boolean;
  InformativeValue?: number;
  InsuredValue?: number;
  CashOnDeliveryAmount?: number;
  RecipientTitle: string | null;
  RecipientName: string | null;
  RecipientAddress: string | null;
  RecipientZipCode: string | null;
  RecipientCity: string | null;
  RecipientCountryCode: string | null;
  PickupPointGuid?: string;
  PreparationZoneGuid?: string;
  LogisticsSessionGuid?: string;
  ShippingCost?: number;
  ShippingCostWOTax?: number;
  ReceptionDate?: string;
  ReceptionGuid?: string;
  TrackingUrl: string | null;
  LabelUrl: string | null;
  ParcelTypeGuid?: string;
  LastVerificationDate?: string;
  CarrierStatus: string | null;
  LastStatusMessage: string | null;
  AnomalyType: string | null;
  DeliveryDate?: string;
}
```