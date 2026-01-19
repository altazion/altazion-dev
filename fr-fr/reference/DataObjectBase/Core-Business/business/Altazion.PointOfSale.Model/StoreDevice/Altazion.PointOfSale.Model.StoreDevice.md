## StoreDevice

La classe StoreDevice représente un équipement (device) en magasin tel qu'une borne, une tablette ou un terminal de paiement.

Propriétés publiques :

- Guid : Identifiant unique du device.
- DeviceType : Type de device codé sur 3 caractères.
- StoreId : Identifiant du magasin auquel appartient le device (nullable).
- Label : Libellé descriptif du device.
- IpAddress : Adresse IP du device.
- CashRegisterId : Identifiant de la caisse associée au device (nullable).
- Status : Statut du device codé sur 1 caractère.
- ParentDeviceId : Identifiant du device parent pour hiérarchie (nullable).
- LastUpdateTimestamp : Horodatage de la dernière mise à jour du device.
- CallbackUrl : URL de callback pour les notifications du device.
- IsMovable : Indique si le device est déplaçable.
- DepartmentId : Identifiant du rayon où se trouve le device (nullable).
- IsInUse : Indique si le device est actuellement utilisé.
- Code : Code court du device.
- ConfigurationJson : Configuration du device au format JSON.
- Description : Description détaillée du device.
- Orientation : Orientation du device (par exemple "portrait" ou "landscape").

### D�claration TypeScript
```typescript
interface StoreDevice {
  Guid: string; // Unique identifier (UUID) of the device
  DeviceType: string | null; // Type of device (3-char code)
  StoreId?: string | null; // Store identifier (UUID)
  Label: string | null; // Descriptive label
  IpAddress: string | null; // IP address
  CashRegisterId?: string | null; // Cash register ID (UUID)
  Status: string | null; // Status code (1 char)
  ParentDeviceId?: string | null; // Parent device ID (UUID)
  LastUpdateTimestamp: string; // Last update timestamp (ISO 8601 string)
  CallbackUrl: string | null; // Callback URL
  IsMovable: boolean; // Whether the device is movable
  DepartmentId?: string | null; // Department ID (UUID)
  IsInUse: boolean; // Whether the device is in use
  Code: string | null; // Short code
  ConfigurationJson: string | null; // JSON configuration
  Description: string | null; // Detailed description
  Orientation: string | null; // Orientation (eg. "portrait", "landscape")
}
```