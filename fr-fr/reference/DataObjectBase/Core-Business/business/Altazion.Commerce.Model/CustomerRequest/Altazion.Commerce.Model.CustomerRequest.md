## CustomerRequest

La classe CustomerRequest représente une demande ou un contact client dans le système.

Propriétés publiques :

- Guid : Identifiant unique du contact.
- SessionId : Identifiant unique de la session associée.
- CustomerGuid : Identifiant unique du client.
- Email : Adresse e-mail du contact.
- PhoneNumber : Numéro de téléphone du contact.
- Name : Nom du contact.
- Message : Message associé au contact.
- IsClosed : Indique si la demande est fermée (booléen).
- IsSuccess : Indique si la demande a été traitée avec succès (booléen).
- UpdateDate : Date et heure de la dernière mise à jour de la demande.

### D�claration TypeScript
```typescript
interface CustomerRequest {
  Guid: string; // Unique identifier of the contact (GUID)
  SessionId: string; // Unique identifier of the session (GUID)
  CustomerGuid: string; // Unique identifier of the customer (GUID)
  Email: string; // Email address of the contact
  PhoneNumber: string; // Phone number of the contact
  Name: string; // Name of the contact
  Message: string; // Message associated with the contact
  IsClosed: boolean; // Indicates if the contact request is closed
  IsSuccess: boolean; // Indicates if the contact request was successful
  UpdateDate: string; // Date and time of the last update (ISO 8601 string)
}
```