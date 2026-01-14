## ProductReview

La classe ProductReview représente un avis client sur un produit dans le système Altazion. Elle dérive de DataObjectBase.

Propriétés :
- Guid : Identifiant unique de l'avis.
- ProductGuid : Identifiant unique du produit concerné par l'avis.
- ReviewerName : Nom de la personne ayant laissé l'avis.
- Message : Contenu textuel de l'avis.
- CustomerGuid : Identifiant unique optionnel du client qui a laissé l'avis (peut être null).
- Email : Adresse email de la personne ayant laissé l'avis.
- HasBeenValidated : Indique si l'avis a été validé (booléen).
- Date : Date et heure à laquelle l'avis a été enregistré.
- Note : Note numérique (décimale) attribuée par le client au produit.

Méthodes notables :
- ToString() retourne une représentation textuelle simple de l'avis en utilisant l'email.

Cette classe est principalement un conteneur de données avec gestion interne de la conversion depuis une ligne de données (FromDataRow) pour chaque propriété correspondant aux colonnes d'une base de données.

### D�claration TypeScript
```typescript
interface ProductReview {
  Guid: string; // Unique identifier (GUID)
  ProductGuid: string; // Product unique identifier (GUID)
  ReviewerName: string; // Name of the reviewer
  Message: string; // Review message content
  CustomerGuid?: string | null; // Optional customer unique identifier
  Email: string; // Email of the reviewer
  HasBeenValidated: boolean; // Review validation status
  Date: string; // Date in ISO 8601 format
  Note: number; // Numeric rating
}
```