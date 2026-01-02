## WebSiteModule

La classe WebSiteModule représente un module e-commerce actif sur un site web, tel qu'un widget, une fonctionnalité ou une extension.

Propriétés publiques :
- Guid : Identifiant unique du module (de type Guid).
- ModuleType : Type de module, par exemple "WIDGET", "PAYMENT", "SHIPPING" (string).
- Order : Ordre d'affichage ou de traitement du module (int).
- FullClassName : Nom complet de la classe .NET implémentant le module, incluant le namespace (string).
- InitParameter : Paramètre d'initialisation du module, pouvant être de la configuration au format JSON, XML, etc. (string).
- IsActive : Indique si le module est actif (bool).

Validation :
- Guid ne peut pas être vide.
- ModuleType est requis et limité à 10 caractères.
- FullClassName est requis, maximum 500 caractères.
- InitParameter est requis, maximum 5000 caractères.
- Order ne peut pas être négatif.

### D�claration TypeScript
```typescript
interface WebSiteModule {
  Guid: string; // unique identifier (GUID)
  ModuleType: string; // type of module (e.g. 'WIDGET', 'PAYMENT')
  Order: number; // order of display or processing
  FullClassName: string; // full .NET class name including namespace
  InitParameter: string; // initialization parameters (JSON, XML, etc.)
  IsActive: boolean; // whether the module is active
}
```