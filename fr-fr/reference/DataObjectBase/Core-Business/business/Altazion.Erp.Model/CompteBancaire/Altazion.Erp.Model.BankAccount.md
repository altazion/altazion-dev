## BankAccount

Représente un compte bancaire avec ses informations essentielles.

Propriétés publiques :
- Id : Identifiant unique du compte bancaire.
- Label : Libellé ou nom du compte bancaire.
- AccountNumber : Numéro du compte bancaire.
- AccountingAccount : Le compte comptable associé au compte bancaire.
- BankCode : Code identifiant la banque.
- AgencyCode : Code identifiant l'agence bancaire.
- RibKey : Clé RIB pour vérification du compte.
- Iban : Numéro IBAN international du compte.
- IsCurrent : Indique si le compte est un compte courant.
- IsPrimary : Indique si c'est le compte principal.
- AccountType : Type du compte bancaire, codé en byte.

Enumération imbriquée : BankAccountType
- Current : Compte courant (valeur 0).
- CreditCard : Compte pour carte de crédit différée (1).
- Savings : Compte d'épargne (2).
- Pledge : Compte de nantissement (3).
- Shares : Compte en actions (4).
- Others : Autres types de comptes (100).

### D�claration TypeScript
```typescript
interface BankAccount {
  Id: number;
  Label: string | null;
  AccountNumber: string | null;
  AccountingAccount: string | null;
  BankCode: string | null;
  AgencyCode: string | null;
  RibKey: string | null;
  Iban: string | null;
  IsCurrent: boolean;
  IsPrimary: boolean;
  AccountType: number;
}

enum BankAccountType {
  Current = 0,
  CreditCard = 1,
  Savings = 2,
  Pledge = 3,
  Shares = 4,
  Others = 100
}
```