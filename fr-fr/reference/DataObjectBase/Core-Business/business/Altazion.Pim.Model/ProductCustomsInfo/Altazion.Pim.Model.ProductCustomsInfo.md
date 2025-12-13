## ProductCustomsInfo

La classe ProductCustomsInfo représente les informations douanières associées à un article pour l'export international. Elle inclut les codes et données nécessaires aux déclarations douanières.

Propriétés publiques:

- ProductId : Guid. Identifiant unique de l'article concerné (clé primaire).
- DeclarationCodes : string. Codes de déclaration douanière, séparés par des virgules si plusieurs.
- NomenclatureCode : string. Code de la nomenclature douanière (code SH/HS - Système Harmonisé).
- PucCode : string. Code PUC (Procurement Unit Code).
- PrimaryCountryCode : string. Code ISO 3 lettres du pays d'origine principal.
- SecondaryCountryCodes : string. Codes ISO 3 lettres des pays d'origine secondaires, séparés par des virgules.
- IsSubjectToDes : bool. Indique si l'article est soumis à la DES (Déclaration d'Échanges de Services).
- NomenclatureDocumentId : Guid? (nullable). Identifiant optionnel du document de données de nomenclature associé.

La classe valide notamment la longueur des codes et requiert que ProductId soit spécifié.

### D�claration TypeScript
```typescript
interface ProductCustomsInfo {
  ProductId: string; // GUID
  DeclarationCodes?: string;
  NomenclatureCode?: string;
  PucCode?: string;
  PrimaryCountryCode?: string;
  SecondaryCountryCodes?: string;
  IsSubjectToDes: boolean;
  NomenclatureDocumentId?: string | null; // Nullable GUID
}
```