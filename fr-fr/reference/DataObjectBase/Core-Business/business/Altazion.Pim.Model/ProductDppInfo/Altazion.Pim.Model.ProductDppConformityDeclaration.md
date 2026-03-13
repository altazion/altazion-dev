## ProductDppConformityDeclaration

Classe représentant une déclaration de conformité réglementaire associée à un snapshot DPP (Passeport Numérique Produit).

Propriétés :
- Standard : Norme ou directive concernée (exemples : "CE", "RoHS", "WEEE").
- ReferenceNumber : Numéro de référence de la déclaration de conformité.
- IssuedDate : Date d'émission de la déclaration (type nullable DateOnly).
- DocumentUrl : URL optionnelle vers le document de déclaration.
- NotifiedBodyId : Identifiant de l'organisme notifié (Notified Body) ayant délivré la déclaration, au format européen NB XXXX (exemple : "NB 0080" pour TÜV Rheinland).
- ExpiryDate : Date d'expiration de la déclaration (nullable, null signifie pas de date limite).

### D�claration TypeScript
```typescript
interface ProductDppConformityDeclaration {
  standard: string;
  referenceNumber: string;
  issuedDate?: string; // ISO date string or undefined
  documentUrl?: string;
  notifiedBodyId?: string;
  expiryDate?: string; // ISO date string or undefined
}
```