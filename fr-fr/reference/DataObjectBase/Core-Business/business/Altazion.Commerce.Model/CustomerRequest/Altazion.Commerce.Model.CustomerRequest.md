## CustomerRequest

La classe CustomerRequest représente une demande ou un contact client dans le système.

Propriétés :
- Guid : Identifiant unique du contact.
- SessionId : Identifiant de la session associée à la demande.
- CustomerGuid : Identifiant unique du client auquel la demande est liée.
- Email : Adresse e-mail du contact.
- PhoneNumber : Numéro de téléphone du contact.
- Name : Nom du contact.
- Message : Message ou contenu de la demande du client.
- IsClosed : Indique si la demande est clôturée (booléen).
- IsSuccess : Indique si la demande a été traitée avec succès (booléen).
- UpdateDate : Date de la dernière mise à jour de la demande.

### D�claration TypeScript
```typescript
interface CustomerRequest {
  Guid: string; // Unique identifier (UUID)
  SessionId: string; // Session identifier (UUID)
  CustomerGuid: string; // Customer identifier (UUID)
  Email: string; // Contact email address
  PhoneNumber: string; // Contact phone number
  Name: string; // Contact name
  Message: string; // Request or message content
  IsClosed: boolean; // Whether the request is closed
  IsSuccess: boolean; // Whether the request was successful
  UpdateDate: Date; // Date of last update
}
```