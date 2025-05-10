## ShippingProviderInfo

La classe ShippingProviderInfo représente les informations détaillées d'un prestataire de transport.

- Id : Identifiant unique des informations du prestataire de transport (GUID).
- TransportProviderId : Identifiant du prestataire de transport associé (entier).
- Origin : Origine des informations du prestataire (chaîne de caractères).
- ExpeditorName : Nom de l'expéditeur (chaîne de caractères).
- ExpeditorAddress : Adresse de l'expéditeur (chaîne de caractères).
- ExpeditorPostalCode : Code postal de l'expéditeur (chaîne de caractères).
- ExpeditorCity : Ville de l'expéditeur (chaîne de caractères).
- ExpeditorCountryCode : Code pays de l'expéditeur (chaîne de caractères).
- ExpeditorNumber : Numéro de l'expéditeur (chaîne de caractères).
- PlateformCode : Code de la plateforme associée au prestataire (chaîne de caractères).
- LocationCode : Code du dépôt associé au prestataire (chaîne de caractères).

### D�claration TypeScript
```typescript
interface ShippingProviderInfo {
  Id: string; // GUID (unique identifier)
  TransportProviderId: number;
  Origin?: string | null;
  ExpeditorName?: string | null;
  ExpeditorAddress?: string | null;
  ExpeditorPostalCode?: string | null;
  ExpeditorCity?: string | null;
  ExpeditorCountryCode?: string | null;
  ExpeditorNumber?: string | null;
  PlateformCode?: string | null;
  LocationCode?: string | null;
}
```