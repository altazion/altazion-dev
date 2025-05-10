## ShippingProvider

La classe ShippingProvider représente un prestataire de transport avec ses informations associées.

Propriétés publiques :

- Id : Identifiant unique du prestataire de transport.
- Label : Libellé du prestataire de transport.
- ManagerClass : Classe de gestion associée au prestataire.
- FixedDeliveryDate : Date de livraison fixe, si applicable.
- ManifestType : Type de bordereau associé au prestataire.
- IsArchived : Indique si le prestataire est archivé.
- PickupDays : Jours d'enlèvement associés au prestataire.
- TransitDays : Jours de transit associés au prestataire.
- DeliveryDays : Jours de livraison associés au prestataire.
- FixedPreparationDays : Nombre de jours fixes de préparation, si applicable.
- TrackingUrl : URL de suivi des livraisons.
- IsExceptional : Indique si le prestataire est exceptionnel.
- FulfillmentTypeCode : Code du type de préparation logistique associé au prestataire.
- Info : Informations supplémentaires sur le prestataire de transport (objet de type ShippingProviderInfo).

### D�claration TypeScript
```typescript
interface ShippingProvider {
  Id: number;
  Label: string | null;
  ManagerClass: string | null;
  FixedDeliveryDate: Date | null;
  ManifestType: string; // single character
  IsArchived: boolean;
  PickupDays: string | null;
  TransitDays: string | null;
  DeliveryDays: string | null;
  FixedPreparationDays: number | null;
  TrackingUrl: string | null;
  IsExceptional: boolean;
  FulfillmentTypeCode: string | null;
  Info?: ShippingProviderInfo | null;
}
```