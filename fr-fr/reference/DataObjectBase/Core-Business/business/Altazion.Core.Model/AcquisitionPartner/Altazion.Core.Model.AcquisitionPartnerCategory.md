## AcquisitionPartnerCategory

La classe `AcquisitionPartnerCategory` représente une catégorie de partenaires d'acquisition dans le système de commerce. 

- `Guid` : Identifiant unique de la catégorie d'acquisition de type `Guid`.
- `Label` : Libellé ou nom de la catégorie, de type `string`. Il est obligatoire et ne doit pas excéder 100 caractères.
- `Kind` : Type ou nature de la catégorie d'acquisition, de type `string`. Il est obligatoire et ne doit pas excéder 50 caractères.

La classe inclut des validations pour s'assurer que le `Label` et le `Kind` soient renseignés et respectent les contraintes de longueur.

### D�claration TypeScript
```typescript
interface AcquisitionPartnerCategory {
  Guid: string; // Unique identifier (UUID)
  Label: string; // Category label (max 100 chars)
  Kind: string; // Category type (max 50 chars)
}
```