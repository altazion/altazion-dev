## StoreDevice

La classe StoreDevice représente un équipement en magasin comme une borne, une tablette, un terminal de paiement, etc. Elle contient les propriétés suivantes :

- Guid : Identifiant unique du device.
- DeviceType : Type de device (code sur 3 caractères).
- StoreId : Identifiant du magasin auquel appartient le device.
- Label : Libellé descriptif du device.
- IpAddress : Adresse IP du device.
- CashRegisterId : Identifiant de la caisse associée au device.
- Status : Statut du device (code sur 1 caractère).
- ParentDeviceId : Identifiant du device parent pour la hiérarchie d'équipements.
- LastUpdateTimestamp : Horodatage de la dernière mise à jour.
- CallbackUrl : URL de callback pour les notifications du device.
- IsMovable : Indique si le device est déplaçable.
- DepartmentId : Identifiant du rayon où se trouve le device.
- IsInUse : Indique si le device est actuellement utilisé.
- Code : Code court du device.
- ConfigurationJson : Configuration JSON du device.
- Description : Description détaillée du device.
- Orientation : Orientation du device (ex: "portrait", "landscape").

### D�claration TypeScript
```typescript
interface StoreDevice {
  Guid: string;
  DeviceType: string | null;
  StoreId?: string | null;
  Label: string | null;
  IpAddress: string | null;
  CashRegisterId?: string | null;
  Status: string | null;
  ParentDeviceId?: string | null;
  LastUpdateTimestamp: Date;
  CallbackUrl: string | null;
  IsMovable: boolean;
  DepartmentId?: string | null;
  IsInUse: boolean;
  Code: string | null;
  ConfigurationJson: string | null;
  Description: string | null;
  Orientation: string | null;
}
```