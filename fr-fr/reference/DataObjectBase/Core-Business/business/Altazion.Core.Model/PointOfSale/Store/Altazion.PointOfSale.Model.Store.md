## Store

Classe représentant un magasin dans le système Altazion.

Propriétés :
- Guid : Identifiant unique du magasin (Guid).
- Code : Code d'identification du magasin (string).
- Label : Nom ou libellé du magasin (string).
- StreetAddress : Adresse de la rue du magasin (string).
- PostalCode : Code postal du magasin (string).
- City : Ville où se situe le magasin (string).
- CountryIso3LettersCode : Code pays ISO à 3 lettres indiquant le pays du magasin (string).
- Latitude : Latitude géographique du magasin (decimal nullable).
- Longitude : Longitude géographique du magasin (decimal nullable).
- GeoZone : Zone géographique ou zone de chalandise du magasin (string).
- Phone : Numéro de téléphone du magasin (string).
- MessageForClients : Message ou note destinée aux clients du magasin (string).
- IsClickNMortarEnable : Booléen indiquant si le magasin supporte le Click & Mortar (true/false).
- IsShippingDestination : Booléen indiquant si le magasin est un point de livraison (true/false).
- StoreType : Type de magasin, avec des constantes définies :
    - StoreTypeInternal = "INTEG" (magasin interne)
    - StoreTypeAffiliate = "AFFIL" (magasin affilié)
    - StoreTypeFranchise = "FRANC" (magasin en franchise)
- OpeningDate : Date d'ouverture du magasin (DateTimeOffset nullable).
- ClosingDate : Date de fermeture du magasin (DateTimeOffset nullable).
- IsArchived : Indique si le magasin est archivé (true/false).

### D�claration TypeScript
```typescript
interface Store {
  Guid: string; // GUID unique identifier
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
  StoreType?: string | null; // Expected values: "INTEG", "AFFIL", "FRANC"
  OpeningDate?: string | null; // ISO 8601 date string
  ClosingDate?: string | null; // ISO 8601 date string
  IsArchived: boolean;
}

// Constants representing store types
const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```