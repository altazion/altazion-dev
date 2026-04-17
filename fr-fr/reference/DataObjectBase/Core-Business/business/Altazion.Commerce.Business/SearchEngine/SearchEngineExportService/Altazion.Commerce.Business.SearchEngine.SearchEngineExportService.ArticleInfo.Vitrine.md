## Vitrine

La classe `Vitrine` représente une vitrine liée à un article dans le cadre du service d'export pour moteur de recherche.

Propriétés publiques :
- `vit_guid` (Guid) : Identifiant unique de la vitrine, sous forme de GUID. Cette propriété sert à identifier chaque vitrine de manière unique.

### D�claration TypeScript
```typescript
interface Vitrine {
  vit_guid: string; // GUID string representing the unique identifier of the showcase
}
```