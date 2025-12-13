## PickupPoint

La classe `PickupPoint` représente un point de livraison (comme un point relais, un locker ou une consigne) où les clients peuvent récupérer leurs colis.

Propriétés :
- `Id` : Identifiant unique du point de livraison (GUID).
- `CarrierId` : Identifiant du prestataire de transport associé (clé primaire legacy).
- `Name` : Nom du point de livraison.
- `Address` : Adresse complète du point de livraison.
- `PostalCode` : Code postal.
- `City` : Ville.
- `CountryCode` : Code pays ISO à 3 lettres.
- `PlatformLevel1` à `PlatformLevel5` : Codes des plateformes selon la hiérarchie logistique du transporteur.
- `IsPrimary` : Indique si ce point est le point principal de la zone.
- `ExternalCode` : Code externe du point de livraison (identifiant propre au transporteur).
- `StartDate` : Date de début de validité du point.
- `EndDate` : Date de fin de validité du point.
- `AccessIndications` : Indications d'accès ou informations complémentaires.
- `AvailableServices` : Services disponibles au point (séparés par des virgules).
- `Longitude` : Longitude GPS (optionnelle).
- `Latitude` : Latitude GPS (optionnelle).
- `PhoneNumber` : Numéro de téléphone du point.
- `IsActive` : Propriété calculée indiquant si le point est actif actuellement (date du jour entre StartDate et EndDate).

### D�claration TypeScript
```typescript
interface PickupPoint {
  Id: string; // GUID
  CarrierId: number;
  Name: string;
  Address: string;
  PostalCode: string;
  City: string;
  CountryCode: string;
  PlatformLevel1: string;
  PlatformLevel2: string;
  PlatformLevel3: string;
  PlatformLevel4: string;
  PlatformLevel5: string;
  IsPrimary: boolean;
  ExternalCode: string;
  StartDate: Date;
  EndDate: Date;
  AccessIndications: string;
  AvailableServices: string;
  Longitude?: number | null;
  Latitude?: number | null;
  PhoneNumber: string;
  IsActive: boolean; // Readonly computed property
}
```