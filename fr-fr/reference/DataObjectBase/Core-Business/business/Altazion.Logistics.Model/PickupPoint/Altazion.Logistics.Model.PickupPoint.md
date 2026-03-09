## PickupPoint

La classe PickupPoint représente un point de livraison (comme un point relais, locker ou consigne) où les clients peuvent récupérer leurs colis. Elle contient les propriétés suivantes :

- Id : Identifiant unique du point de livraison (type Guid).
- CarrierId : Identifiant du prestataire de transport associé (clé primaire legacy, type int).
- Name : Nom du point de livraison (string).
- Address : Adresse complète du point de livraison (string).
- PostalCode : Code postal (string).
- City : Ville (string).
- CountryCode : Code pays ISO 3 lettres (string).
- PlatformLevel1 à PlatformLevel5 : Codes des plateformes logistiques niveaux 1 à 5 (string).
- IsPrimary : Indique si ce point est le point principal de la zone (bool).
- ExternalCode : Code externe du point de livraison, identifiant transporteur (string).
- StartDate : Date de début de validité du point de livraison (DateTimeOffset).
- EndDate : Date de fin de validité du point de livraison (DateTimeOffset).
- AccessIndications : Indications d'accès ou informations complémentaires (string).
- AvailableServices : Services disponibles, séparés par des virgules (string).
- Longitude : Longitude GPS (decimal? nullable).
- Latitude : Latitude GPS (decimal? nullable).
- PhoneNumber : Numéro de téléphone du point de livraison (string).
- IsActive : Propriété calculée indiquant si le point est actif (date actuelle entre StartDate et EndDate).

Cette classe gère aussi la validation des données, notamment la présence et la longueur maximale de certaines propriétés.

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
  PlatformLevel1: string | null;
  PlatformLevel2: string | null;
  PlatformLevel3: string | null;
  PlatformLevel4: string | null;
  PlatformLevel5: string | null;
  IsPrimary: boolean;
  ExternalCode: string | null;
  StartDate: string; // DateTimeOffset ISO string
  EndDate: string;   // DateTimeOffset ISO string
  AccessIndications: string | null;
  AvailableServices: string | null;
  Longitude: number | null;
  Latitude: number | null;
  PhoneNumber: string | null;
  readonly IsActive: boolean;
}
```