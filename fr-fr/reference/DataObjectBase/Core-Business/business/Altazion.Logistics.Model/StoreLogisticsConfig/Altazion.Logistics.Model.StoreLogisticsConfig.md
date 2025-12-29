## StoreLogisticsConfig

La classe StoreLogisticsConfig représente la configuration logistique d'un magasin, notamment pour la fonctionnalité Ship-From-Store.

Elle contient les propriétés publiques suivantes :

- StoreGuid : Identifiant unique du magasin (GUID).
- IsActiveForShipFromStore : Indique si le magasin est actif pour le Ship-From-Store (booléen).
- ShipFromStorePreparationRate : Taux de préparation lié au Ship-From-Store, exprimé en pourcentage entre 0 et 100 (décimal nullable).
- ShipFromStorePoints : Points attribués pour le Ship-From-Store, utilisés dans l'algorithme de sélection ou la capacité (entier nullable).
- ShipFromStorePriority : Priorité du magasin pour le Ship-From-Store, un nombre plus élevé signifie une priorité plus importante (entier nullable).
- WarehouseRackingTemplateGuid : Identifiant du template de rayonnages d'entrepôt associé (GUID nullable), utilisé pour faciliter le picking en entrepôt.

Cette classe permet de configurer les paramètres logistiques spécifiques à chaque magasin en rapport avec le traitement des commandes Ship-From-Store.

### D�claration TypeScript
```typescript
interface StoreLogisticsConfig {
  StoreGuid: string; // GUID of the store
  IsActiveForShipFromStore: boolean;
  ShipFromStorePreparationRate?: number | null; // Preparation rate percentage (0-100)
  ShipFromStorePoints?: number | null; // Points for selection/capacity
  ShipFromStorePriority?: number | null; // Priority of the store
  WarehouseRackingTemplateGuid?: string | null; // GUID of warehouse racking template
}
```