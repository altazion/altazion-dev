## StoreDevice

La classe StoreDevice représente un équipement (device) en magasin, tel qu'une borne, une tablette, ou un terminal de paiement. Elle contient les propriétés suivantes :

- Guid : Identifiant unique du device.
- DeviceType : Type du device (code sur 3 caractères).
- StoreId : Identifiant du magasin auquel le device appartient (nullable).
- Label : Libellé descriptif du device.
- IpAddress : Adresse IP du device.
- CashRegisterId : Identifiant de la caisse associée au device (nullable).
- Status : Statut du device (code sur 1 caractère).
- ParentDeviceId : Identifiant du device parent pour hiérarchie (nullable).
- LastUpdateTimestamp : Horodatage de la dernière mise à jour du device.
- CallbackUrl : URL de callback pour notifications.
- IsMovable : Indique si le device est déplaçable.
- DepartmentId : Identifiant du rayon où se trouve le device (nullable).
- IsInUse : Indique si le device est actuellement utilisé.
- Code : Code court du device.
- ConfigurationJson : Configuration JSON du device.
- Description : Description détaillée du device.
- Orientation : Orientation du device (ex: portrait, landscape).

Cette classe hérite de DataObjectBase et permet de stocker les informations essentielles pour gérer les équipements en magasin lié au point de vente.

### D�claration TypeScript
```typescript
interface StoreDevice {
  Guid: string; // Unique identifier of the device
  DeviceType: string; // Device type code (3 characters)
  StoreId?: string | null; // Store identifier (nullable)
  Label: string; // Descriptive label
  IpAddress: string; // IP address
  CashRegisterId?: string | null; // Associated cash register identifier (nullable)
  Status: string; // Status code (1 character)
  ParentDeviceId?: string | null; // Parent device identifier (nullable)
  LastUpdateTimestamp: Date; // Timestamp of last update
  CallbackUrl: string; // Callback URL
  IsMovable: boolean; // Is device movable
  DepartmentId?: string | null; // Department identifier (nullable)
  IsInUse: boolean; // Is currently in use
  Code: string; // Short code
  ConfigurationJson: string; // JSON configuration
  Description: string; // Detailed description
  Orientation: string; // Orientation (e.g., portrait, landscape)
}
```