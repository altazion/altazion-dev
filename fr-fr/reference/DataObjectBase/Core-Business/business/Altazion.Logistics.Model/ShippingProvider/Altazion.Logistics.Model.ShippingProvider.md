## ShippingProvider

La classe ShippingProvider représente un prestataire de transport avec ses informations associées.

Propriétés publiques:
- Id (int) : Identifiant unique du prestataire de transport.
- Label (string) : Libellé du prestataire de transport.
- ManagerClass (string) : Classe de gestion associée au prestataire.
- FixedDeliveryDate (DateTimeOffset?) : Date de livraison fixe si applicable.
- ManifestType (char) : Type de bordereau associé au prestataire.
- IsArchived (bool) : Indique si le prestataire est archivé.
- PickupDays (string) : Jours d'enlèvement associés au prestataire.
- TransitDays (string) : Jours de transit associés au prestataire.
- DeliveryDays (string) : Jours de livraison associés au prestataire.
- FixedPreparationDays (int?) : Nombre de jours fixes de préparation, si applicable.
- TrackingUrl (string) : URL de suivi des livraisons.
- IsExceptional (bool) : Indique si le prestataire est exceptionnel.
- FulfillmentTypeCode (string) : Code du type de préparation logistique associé.
- Info (ShippingProviderInfo) : Informations supplémentaires sur le prestataire de transport.

Méthodes importantes:
- FromDataRow(DataRow dr) : Initialise les propriétés à partir d'une ligne de données.
- GetKey() : Obtient la clé unique de l'objet, ici l'Id du prestataire.

### D�claration TypeScript
```typescript
interface ShippingProvider {
  Id: number;
  Label: string | null;
  ManagerClass: string | null;
  FixedDeliveryDate?: string | null; // ISO date string or null
  ManifestType: string; // char as string
  IsArchived: boolean;
  PickupDays: string | null;
  TransitDays: string | null;
  DeliveryDays: string | null;
  FixedPreparationDays?: number | null;
  TrackingUrl: string | null;
  IsExceptional: boolean;
  FulfillmentTypeCode: string | null;
  Info?: ShippingProviderInfo | null;
}
```