## BankAccount

Classe représentant un compte bancaire avec les propriétés suivantes :

- Id : Identifiant unique du compte bancaire.
- Label : Libellé ou nom du compte bancaire.
- AccountNumber : Numéro du compte bancaire.
- AccountingAccount : Compte comptable associé au compte bancaire.
- BankCode : Code de la banque.
- AgencyCode : Code de l'agence bancaire.
- RibKey : Clé RIB (Relevé d'Identité Bancaire) du compte.
- Iban : IBAN (International Bank Account Number) du compte.
- IsCurrent : Indique si le compte est un compte courant (booléen).
- IsPrimary : Indique si le compte est le compte principal (booléen).
- AccountType : Type de compte bancaire, indiqué par un octet.

Cette classe inclut une énumération interne "BankAccountType" définissant les types possibles de compte bancaire :
  - Current : Compte courant,
  - CreditCard : Compte d'une carte de paiement différé,
  - Savings : Compte d'épargne,
  - Pledge : Compte de nantissement,
  - Shares : Compte en action,
  - Others : Autres types de comptes.

Les propriétés sont validées notamment le format et la cohérence du RIB et de l'IBAN. La validation cherche à s'assurer que les codes banques, agences, numéro de compte et clés respectent les formats attendus et que les clés RIB et IBAN soient correctes.

La classe est dérivée de DataObjectBase, et surcharge la méthode FromDataRow pour initialiser ses propriétés à partir d'une DataRow.

### D�claration TypeScript
```typescript
interface BankAccount {
  Id: number; // Identifiant du compte bancaire
  Label: string; // Libellé du compte bancaire
  AccountNumber: string; // Numéro du compte bancaire
  AccountingAccount: string; // Compte comptable associé
  BankCode: string; // Code de la banque
  AgencyCode: string; // Code de l'agence bancaire
  RibKey: string; // Clé RIB du compte bancaire
  Iban: string; // IBAN du compte bancaire
  IsCurrent: boolean; // Indique si le compte est courant
  IsPrimary: boolean; // Indique si le compte est principal
  AccountType: number; // Type du compte bancaire
}

// Enum for BankAccountType
enum BankAccountType {
  Current = 0,
  CreditCard = 1,
  Savings = 2,
  Pledge = 3,
  Shares = 4,
  Others = 100
}
```