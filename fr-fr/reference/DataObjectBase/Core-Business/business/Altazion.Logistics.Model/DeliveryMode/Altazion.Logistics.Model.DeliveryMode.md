## DeliveryMode

La classe DeliveryMode représente un mode de livraison associé à un fournisseur. Elle contient les propriétés suivantes :

- Guid : Identifiant unique du mode de livraison.
- ProviderId : Identifiant du fournisseur associé.
- Order : Ordre de priorité ou classement du mode de livraison.
- ProductGuid : Identifiant facultatif du produit associé.
- MaxVolume : Volume maximal autorisé pour la livraison.
- MaxWeight : Poids maximal autorisé.
- MaxValue : Valeur maximale autorisée du colis.
- MaxHeight : Hauteur maximale autorisée.
- MaxWidth : Largeur maximale autorisée.
- MaxDepth : Profondeur maximale autorisée.
- AllowsMultiplePackages : Indique si plusieurs colis sont autorisés.
- IsExceptional : Indique si ce mode est exceptionnel.
- IsActive : Indique si ce mode est actif.
- VolumeMargin : Marge de volume autorisée.
- MaxDeveloped : Longueur maximale développée autorisée.
- AverageDelay : Délai moyen de livraison en jours.
- IsDeliveryPoints : Indique si c'est un point de livraison.
- MinWeight : Poids minimum accepté.
- MaxNumberPerPeriod : Nombre maximal de livraisons autorisé par période.
- PeriodType : Type de période (ex : jour, semaine).
- PeriodDuration : Durée de la période associée.
- SiteId : Identifiant du site associé.
- SiteValidationUrl : URL de validation liée au site.
- MinValue : Valeur minimale acceptée.
- Label : Libellé du mode de livraison.
- AverageCostTtc : Coût moyen TTC.
- AverageCostHt : Coût moyen HT.
- IsAvailableEcommerce : Disponibilité pour l'e-commerce.
- IsAvailablePos : Disponibilité au point de vente.
- IsAvailableClickAndMortar : Disponibilité pour le modèle "click and mortar".
- Priority : Priorité du mode de livraison.
- DeliveryType : Type de livraison (ex : DOMI, PTRL) sous forme de chaîne.
- IsArchived : Indique si ce mode est archivé.
- PublicHtml : Contenu HTML public associé.

Constantes définies :
- DeliveryTypeHome : "DOMI"
- DeliveryTypeRelayPoint : "PTRL"
- DeliveryTypeStoreDelivery : "LMAG"
- DeliveryTypePickup : "RETR"

### D�claration TypeScript
```typescript
interface DeliveryMode {
  Guid: string;
  ProviderId: number;
  Order: number;
  ProductGuid?: string;
  MaxVolume?: number;
  MaxWeight?: number;
  MaxValue?: number;
  MaxHeight?: number;
  MaxWidth?: number;
  MaxDepth?: number;
  AllowsMultiplePackages: boolean;
  IsExceptional: boolean;
  IsActive: boolean;
  VolumeMargin?: number;
  MaxDeveloped?: number;
  AverageDelay?: number;
  IsDeliveryPoints: boolean;
  MinWeight: number;
  MaxNumberPerPeriod?: number;
  PeriodType?: string;
  PeriodDuration?: number;
  SiteId?: number;
  SiteValidationUrl?: string;
  MinValue: number;
  Label?: string;
  AverageCostTtc?: number;
  AverageCostHt?: number;
  IsAvailableEcommerce: boolean;
  IsAvailablePos: boolean;
  IsAvailableClickAndMortar: boolean;
  Priority: number;
  DeliveryType?: string;
  IsArchived: boolean;
  PublicHtml?: string;
}

const DeliveryTypeHome = "DOMI";
const DeliveryTypeRelayPoint = "PTRL";
const DeliveryTypeStoreDelivery = "LMAG";
const DeliveryTypePickup = "RETR";
```