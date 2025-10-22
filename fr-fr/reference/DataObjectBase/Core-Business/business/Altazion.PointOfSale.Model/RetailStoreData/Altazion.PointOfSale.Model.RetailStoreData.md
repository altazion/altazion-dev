## RetailStoreData

La classe RetailStoreData représente les données spécifiques au retail d'un magasin, incluant des informations techniques importantes comme les identifiants, les données réseau et WiFi.

Propriétés publiques :
- StoreId (Guid) : Identifiant unique du magasin (correspond au mag_guid dans la base pos_magasins).
- RangeId (Guid?) : Identifiant facultatif de la gamme associée au magasin.
- StoreRegionId (Guid?) : Identifiant facultatif de la zone de magasins à laquelle appartient ce magasin.
- PublicIpAddress (string) : Adresse IP publique du magasin.
- LocalCentralUrl (string) : URL du serveur local centralisé du magasin.
- WifiSsid (string) : SSID (nom) du réseau WiFi du magasin.
- WifiSecurityType (string) : Type de sécurité du réseau WiFi (exemple : "WPA2", "WPA3").
- WifiCertificate (string) : Certificat de sécurité associé au réseau WiFi.

Cette classe dérive de DataObjectBase et utilise un attribut de concept SQL spécifiant la table pos_magasins.

### D�claration TypeScript
```typescript
interface RetailStoreData {
  StoreId: string; // Guid representing the unique store identifier
  RangeId?: string | null; // Optional Guid for the associated product range
  StoreRegionId?: string | null; // Optional Guid for the store region
  PublicIpAddress?: string | null; // Public IP address of the store
  LocalCentralUrl?: string | null; // URL of the local central server
  WifiSsid?: string | null; // SSID of the WiFi network
  WifiSecurityType?: string | null; // Security type of the WiFi (e.g. WPA2, WPA3)
  WifiCertificate?: string | null; // Security certificate for the WiFi
}
```