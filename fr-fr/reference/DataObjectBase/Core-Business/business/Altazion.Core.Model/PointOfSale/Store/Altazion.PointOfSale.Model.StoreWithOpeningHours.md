## StoreWithOpeningHours

La classe StoreWithOpeningHours représente un magasin incluant ses horaires d'ouverture. Elle hérite de la classe Store et ajoute une propriété :

- OpeningHours : une liste d'objets StoreOpeningHours représentant les horaires d'ouverture du magasin.

Héritée de Store, cette classe possède également toutes les propriétés suivantes :
- Guid : identifiant unique du magasin (Guid).
- Code : code du magasin (string).
- Label : libellé ou nom du magasin (string).
- StreetAddress : adresse postale (string).
- PostalCode : code postal (string).
- City : ville (string).
- CountryIso3LettersCode : code pays ISO 3 lettres (string).
- Latitude : latitude géographique (decimal?).
- Longitude : longitude géographique (decimal?).
- GeoZone : zone géographique (string).
- Phone : numéro de téléphone (string).
- MessageForClients : message à destination des clients (string).
- IsClickNMortarEnable : booléen indiquant si le magasin supporte le click and mortar (bool).
- IsShippingDestination : booléen indiquant si le magasin est un point de livraison (bool).
- StoreType : type de magasin (string), par exemple interne, affilié, franchise.
- OpeningDate : date d'ouverture du magasin (DateTimeOffset?).
- ClosingDate : date de fermeture du magasin (DateTimeOffset?).
- IsArchived : booléen indiquant si le magasin est archivé (bool).

### D�claration TypeScript
```typescript
interface StoreWithOpeningHours {
  Guid: string; // unique identifier (UUID)
  Code: string | null;
  Label: string;
  StreetAddress: string | null;
  PostalCode: string | null;
  City: string | null;
  CountryIso3LettersCode: string | null;
  Latitude: number | null;
  Longitude: number | null;
  GeoZone: string | null;
  Phone: string | null;
  MessageForClients: string | null;
  IsClickNMortarEnable: boolean;
  IsShippingDestination: boolean;
  StoreType: string | null;
  OpeningDate: string | null; // ISO 8601 date string
  ClosingDate: string | null; // ISO 8601 date string
  IsArchived: boolean;
  OpeningHours: StoreOpeningHours[];
}

// Note: StoreOpeningHours interface needs to be defined separately.
```