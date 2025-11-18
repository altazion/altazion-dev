## Store

Représente un magasin (point de vente physique).

Propriétés publiques :
- Guid : Identifiant unique du magasin (GUID).
- Code : Code du magasin.
- Label : Libellé du magasin.
- StreetAddress : Adresse postale du magasin.
- PostalCode : Code postal du magasin.
- City : Ville du magasin.
- CountryIso3LettersCode : Code ISO à 3 lettres du pays du magasin.
- Latitude : Latitude géographique du magasin (nullable).
- Longitude : Longitude géographique du magasin (nullable).
- GeoZone : Zone géographique du magasin.
- Phone : Numéro de téléphone du magasin.
- MessageForClients : Message destiné aux clients.
- IsClickNMortarEnable : Indique si le magasin est activé pour Click'n'Mortar.
- IsShippingDestination : Indique si le magasin est une destination de livraison.
- StoreType : Type de magasin (intégré, affilié, franchisé).
- OpeningDate : Date d'ouverture du magasin (nullable).
- ClosingDate : Date de fermeture du magasin (nullable).
- IsArchived : Indique si le magasin est archivé.

Constantes :
- StoreTypeInternal : "INTEG" (type de magasin intégré).
- StoreTypeAffiliate : "AFFIL" (type de magasin affilié).
- StoreTypeFranchise : "FRANC" (type de magasin franchisé).

### D�claration TypeScript
```typescript
interface Store {
  Guid: string; // UUID
  Code?: string | null;
  Label: string;
  StreetAddress?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  CountryIso3LettersCode?: string | null;
  Latitude?: number | null;
  Longitude?: number | null;
  GeoZone?: string | null;
  Phone?: string | null;
  MessageForClients?: string | null;
  IsClickNMortarEnable: boolean;
  IsShippingDestination: boolean;
  StoreType?: string | null;
  OpeningDate?: string | null; // ISO 8601 string for DateTimeOffset
  ClosingDate?: string | null; // ISO 8601 string for DateTimeOffset
  IsArchived: boolean;
}

// Constants
const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```