## CustomerPeople

La classe CustomerPeople représente une personne de contact liée à un client dans le système ERP.

Propriétés publiques :
- Guid : identifiant unique de la personne de contact.
- CustomerGuid : identifiant unique du client auquel cette personne est associée.
- Name : nom de la personne de contact.
- StreetAddress : adresse postale complète.
- PostalCode : code postal de l'adresse.
- City : ville de l'adresse.
- CountryIso3Letters : code ISO à 3 lettres du pays.
- Phone : numéro de téléphone fixe.
- MobilePhone : numéro de téléphone mobile.
- Email : adresse e-mail.
- Roles : liste des rôles attribués à cette personne, par exemple "Billing" si elle est un contact pour la relance facture.

Cette classe hérite de DataObjectBase et surcharge la méthode FromDataRow pour charger les données depuis une ligne DataRow d'une source de données.

### D�claration TypeScript
```typescript
interface CustomerPeople {
  Guid: string; // UUID
  CustomerGuid: string; // UUID
  Name: string | null;
  StreetAddress: string | null;
  PostalCode: string | null;
  City: string | null;
  CountryIso3Letters: string | null;
  Phone: string | null;
  MobilePhone: string | null;
  Email: string | null;
  Roles: string[];
}
```