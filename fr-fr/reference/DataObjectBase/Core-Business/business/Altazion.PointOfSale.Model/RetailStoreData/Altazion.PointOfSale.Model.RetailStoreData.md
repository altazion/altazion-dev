## RetailStoreData

La classe RetailStoreData représente les données spécifiques au retail d'un magasin, notamment des informations techniques comme le réseau WiFi.

Liste des propriétés publiques :
- StoreId : Guid unique identifiant le magasin (correspond au mag_guid dans la table pos_magasins).
- RangeId : Guid? identifiant optionnel de la gamme associée au magasin.
- StoreRegionId : Guid? identifiant optionnel de la zone de magasins à laquelle appartient le magasin.
- PublicIpAddress : string contenant l'adresse IP publique du magasin.
- LocalCentralUrl : string contenant l'URL du serveur local central du magasin.
- WifiSsid : string indiquant le SSID du réseau WiFi du magasin.
- WifiSecurityType : string indiquant le type de sécurité du WiFi (exemple : WPA2, WPA3).
- WifiCertificate : string contenant le certificat de sécurité du réseau WiFi.

Cette classe hérite de DataObjectBase et fournit également une méthode d'accès à la clé unique de l'objet, ici StoreId.

### D�claration TypeScript
```typescript
interface RetailStoreData {
  StoreId: string; // Guid in string format
  RangeId?: string | null; // Optional Guid
  StoreRegionId?: string | null; // Optional Guid
  PublicIpAddress?: string | null;
  LocalCentralUrl?: string | null;
  WifiSsid?: string | null;
  WifiSecurityType?: string | null;
  WifiCertificate?: string | null;
}
```