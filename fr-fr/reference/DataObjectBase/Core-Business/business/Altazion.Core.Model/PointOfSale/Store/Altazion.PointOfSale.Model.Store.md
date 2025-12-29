## Store

Représente un magasin (point de vente physique).

Propriétés :
- Guid : Identifiant unique du magasin.
- Code : Code du magasin.
- Label : Libellé du magasin.
- StreetAddress : Adresse postale du magasin.
- PostalCode : Code postal du magasin.
- City : Ville du magasin.
- CountryIso3LettersCode : Code ISO à 3 lettres du pays du magasin.
- Latitude : Latitude géographique du magasin.
- Longitude : Longitude géographique du magasin.
- GeoZone : Zone géographique du magasin.
- Phone : Numéro de téléphone du magasin.
- Email : Adresse email du magasin.
- MessageForClients : Message destiné aux clients.
- IsClickNMortarEnable : Indique si le magasin est activé pour Click'n'Mortar.
- IsShippingDestination : Indique si le magasin est une destination de livraison.
- AcceptsPickup : Indique si le magasin accepte le retrait en magasin (Click & Collect).
- AcceptsShipFromStore : Indique si le magasin accepte le Ship-From-Store (expédition depuis le magasin).
- StoreType : Type du magasin (intégré, affilié, franchisé).
- OpeningDate : Date d'ouverture du magasin.
- ClosingDate : Date de fermeture du magasin.
- IsArchived : Indique si le magasin est archivé.
- StoreChainId : Identifiant de l'enseigne à laquelle appartient le magasin.
- ManagerName : Nom du responsable du magasin.
- ManagerEmail : Adresse email du responsable du magasin.
- ManagerPhone : Numéro de téléphone du responsable du magasin.

Constantes :
- StoreTypeInternal : Constante pour le type de magasin intégré.
- StoreTypeAffiliate : Constante pour le type de magasin affilié.
- StoreTypeFranchise : Constante pour le type de magasin franchisé.

### D�claration TypeScript
```typescript
interface Store {
  Guid: string; // Unique identifier of the store (GUID)
  Code?: string; // Store code
  Label: string; // Store label
  StreetAddress?: string; // Postal address of the store
  PostalCode?: string; // Postal code of the store
  City?: string; // City of the store
  CountryIso3LettersCode?: string; // 3-letter ISO country code
  Latitude?: number | null; // Geographical latitude
  Longitude?: number | null; // Geographical longitude
  GeoZone?: string; // Geographical zone
  Phone?: string; // Phone number
  Email?: string; // Email address
  MessageForClients?: string; // Message intended for clients
  IsClickNMortarEnable: boolean; // Enabled for Click'n'Mortar
  IsShippingDestination: boolean; // Is a shipping destination
  AcceptsPickup: boolean; // Accepts in-store pickup (Click & Collect)
  AcceptsShipFromStore: boolean; // Accepts Ship-From-Store
  StoreType?: string; // Store type (internal, affiliate, franchise)
  OpeningDate?: string | null; // Opening date in ISO format
  ClosingDate?: string | null; // Closing date in ISO format
  IsArchived: boolean; // Is archived
  StoreChainId?: string | null; // Identifier of the store chain
  ManagerName?: string; // Name of the store manager
  ManagerEmail?: string; // Email of the store manager
  ManagerPhone?: string; // Phone of the store manager
}

const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```