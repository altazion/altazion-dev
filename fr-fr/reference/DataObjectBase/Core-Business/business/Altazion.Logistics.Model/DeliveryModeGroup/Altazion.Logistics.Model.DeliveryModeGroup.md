## DeliveryModeGroup

La classe DeliveryModeGroup représente un groupe de modes de livraison qui permet de regrouper plusieurs modes (par exemple, tous les modes « à domicile ») afin de définir un mode de livraison à présenter au client.

Propriétés publiques :
- Id : Identifiant unique du groupe de modes de livraison (type Guid).
- Label : Libellé du groupe, par exemple « Livraison à domicile » ou « Points relais » (type string).
- IsArchived : Booléen indiquant si le groupe est archivé (n'est plus utilisé).
- JsonConfig : Configuration JSON du groupe contenant des paramètres spécifiques (type string).

La classe effectue également une validation pour s'assurer que l'identifiant n'est pas vide, que le libellé est renseigné et ne dépasse pas 250 caractères, et que la configuration JSON est fournie.

### D�claration TypeScript
```typescript
interface DeliveryModeGroup {
  /** Unique identifier of the delivery mode group */
  Id: string; // Guid represented as string
  /** Label of the group (e.g., "Home Delivery", "Relay Points") */
  Label: string;
  /** Indicates if the group is archived (no longer used) */
  IsArchived: boolean;
  /** JSON configuration of the group (specific parameters) */
  JsonConfig: string;
}
```