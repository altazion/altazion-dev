## ShippingProviderInfo

La classe ShippingProviderInfo représente les informations détaillées d'un prestataire de transport.

Propriétés publiques :
- Id : Identifiant unique des informations du prestataire de transport (Guid).
- ProviderId : Identifiant du prestataire de transport associé (int).
- Origin : Origine des informations du prestataire (string).
- ExpeditorName : Nom de l'expéditeur (string).
- ExpeditorAddress : Adresse de l'expéditeur (string).
- ExpeditorPostalCode : Code postal de l'expéditeur (string).
- ExpeditorCity : Ville de l'expéditeur (string).
- ExpeditorCountryCode : Code pays de l'expéditeur (string).
- ExpeditorNumber : Numéro de l'expéditeur (string).
- PlateformCode : Code de la plateforme associée au prestataire (string).
- LocationCode : Code du dépôt associé au prestataire (string).

### D�claration TypeScript
```typescript
interface ShippingProviderInfo {
  Id: string; // Guid as string
  ProviderId: number;
  Origin: string | null;
  ExpeditorName: string | null;
  ExpeditorAddress: string | null;
  ExpeditorPostalCode: string | null;
  ExpeditorCity: string | null;
  ExpeditorCountryCode: string | null;
  ExpeditorNumber: string | null;
  PlateformCode: string | null;
  LocationCode: string | null;
}
```