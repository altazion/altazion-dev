## DeliveryMode

La classe DeliveryMode représente un mode de livraison dans le système logistique. Elle contient diverses propriétés permettant de définir ses caractéristiques, contraintes et disponibilités.

Propriétés publiques:

- Guid : Identifiant unique du mode de livraison.
- ProviderId : Identifiant du prestataire associé.
- Order : Ordre de priorité ou d'affichage.
- ProductGuid : Identifiant optionnel du produit lié.
- MaxVolume : Volume maximum autorisé pour la livraison.
- MaxWeight : Poids maximum autorisé.
- MaxValue : Valeur maximale autorisée pour la livraison.
- MaxHeight, MaxWidth, MaxDepth : Dimensions maximales (hauteur, largeur, profondeur) autorisées.
- AllowsMultiplePackages : Indique si plusieurs colis sont autorisés.
- IsExceptional : Indique si le mode est exceptionnel.
- IsActive : Indique si le mode est actif.
- VolumeMargin : Marge de volume à considérer.
- MaxDeveloped : Dimension maximale développée.
- AverageDelay : Délai moyen de livraison en jours.
- IsDeliveryPoints : Indique si ce mode concerne des points de livraison.
- MinWeight : Poids minimum accepté.
- MaxNumberPerPeriod : Nombre maximum de livraisons autorisées par période.
- PeriodType : Type de période (ex: jour, semaine) pour la limitation.
- PeriodDuration : Durée de la période.
- SiteId : Identifiant du site associé.
- SiteValidationUrl : URL de validation sur le site.
- MinValue : Valeur minimum requise pour utiliser ce mode.
- Label : Libellé affiché pour ce mode.
- AverageCostTtc : Coût moyen TTC.
- AverageCostHt : Coût moyen hors taxes.
- IsAvailableEcommerce : Disponibilité sur e-commerce.
- IsAvailablePos : Disponibilité sur point de vente physique.
- IsAvailableClickAndMortar : Disponibilité en click and mortar.
- Priority : Priorité numérique.
- DeliveryType : Type de livraison exprimé en chaîne (remplace l'énumération TypeLivraison).
- IsArchived : Indique si ce mode est archivé.
- PublicHtml : Contenu HTML public associé.

Constantes définies dans la classe (pour les types de livraison) :
- DeliveryTypeHome = "DOMI" (livraison domicile)
- DeliveryTypeRelayPoint = "PTRL" (point relais)
- DeliveryTypeStoreDelivery = "LMAG" (livraison magasin)
- DeliveryTypePickup = "RETR" (retrait)

L'énumération liée TypeLivraison définit les mêmes types que les constantes avec les valeurs:
DOMI, PTRL, LMAG, RETR.

### D�claration TypeScript
```typescript
interface DeliveryMode {
    Guid: string;
    ProviderId: number;
    Order: number;
    ProductGuid?: string | null;
    MaxVolume?: number | null;
    MaxWeight?: number | null;
    MaxValue?: number | null;
    MaxHeight?: number | null;
    MaxWidth?: number | null;
    MaxDepth?: number | null;
    AllowsMultiplePackages: boolean;
    IsExceptional: boolean;
    IsActive: boolean;
    VolumeMargin?: number | null;
    MaxDeveloped?: number | null;
    AverageDelay?: number | null;
    IsDeliveryPoints: boolean;
    MinWeight: number;
    MaxNumberPerPeriod?: number | null;
    PeriodType?: string | null;
    PeriodDuration?: number | null;
    SiteId?: number | null;
    SiteValidationUrl?: string | null;
    MinValue: number;
    Label?: string | null;
    AverageCostTtc?: number | null;
    AverageCostHt?: number | null;
    IsAvailableEcommerce: boolean;
    IsAvailablePos: boolean;
    IsAvailableClickAndMortar: boolean;
    Priority: number;
    DeliveryType?: string | null;
    IsArchived: boolean;
    PublicHtml?: string | null;
}

// Constants for DeliveryType
const DeliveryTypeHome = "DOMI";
const DeliveryTypeRelayPoint = "PTRL";
const DeliveryTypeStoreDelivery = "LMAG";
const DeliveryTypePickup = "RETR";

// Enum equivalent in TypeScript
enum TypeLivraison {
    DOMI = "DOMI",
    PTRL = "PTRL",
    LMAG = "LMAG",
    RETR = "RETR"
}
```