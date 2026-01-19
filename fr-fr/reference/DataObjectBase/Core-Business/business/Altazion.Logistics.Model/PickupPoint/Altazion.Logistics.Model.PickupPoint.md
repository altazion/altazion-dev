## PickupPoint

La classe PickupPoint représente un point de livraison (point relais, locker, consigne, etc.) où les clients peuvent récupérer leurs colis.

Propriétés publiques :
- Id : Identifiant unique du point de livraison (Guid).
- CarrierId : Identifiant du prestataire de transport associé (clé primaire legacy) (int).
- Name : Nom du point de livraison (string).
- Address : Adresse complète du point de livraison (string).
- PostalCode : Code postal (string).
- City : Ville (string).
- CountryCode : Code pays ISO 3 lettres (string).
- PlatformLevel1 à PlatformLevel5 : Codes des plateformes logistiques aux niveaux 1 à 5 (string).
- IsPrimary : Indique si ce point est le point principal de la zone (bool).
- ExternalCode : Code externe du point de livraison (identifiant transporteur) (string).
- StartDate : Date de début de validité du point de livraison (DateTimeOffset).
- EndDate : Date de fin de validité du point de livraison (DateTimeOffset).
- AccessIndications : Indications d'accès ou informations complémentaires (string).
- AvailableServices : Services disponibles, séparés par des virgules (string).
- Longitude : Longitude GPS (decimal?).
- Latitude : Latitude GPS (decimal?).
- PhoneNumber : Numéro de téléphone du point de livraison (string).
- IsActive : Indique si le point de livraison est actif actuellement (bool, calcule si la date courante est entre StartDate et EndDate).

### D�claration TypeScript
```typescript
interface PickupPoint {
  Id: string; // Guid
  CarrierId: number;
  Name: string;
  Address: string;
  PostalCode: string;
  City: string;
  CountryCode: string;
  PlatformLevel1?: string;
  PlatformLevel2?: string;
  PlatformLevel3?: string;
  PlatformLevel4?: string;
  PlatformLevel5?: string;
  IsPrimary: boolean;
  ExternalCode?: string;
  StartDate: string; // ISO date string
  EndDate: string; // ISO date string
  AccessIndications?: string;
  AvailableServices?: string;
  Longitude?: number | null;
  Latitude?: number | null;
  PhoneNumber?: string;
  IsActive: boolean;
}
```