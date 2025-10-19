## WebSite

La classe WebSite représente un site web avec ses différentes propriétés et configurations. Elle dérive de DataObjectBase et est annotée avec l'attribut SqlDataConcept indiquant la table SQL associée.

Propriétés publiques :

- Code : Code court du site web (string).
- Id : Identifiant unique du site web (int).
- Label : Libellé ou nom du site web (string).
- Theme : Thème du site web (string).
- CssTheme : Thème CSS utilisé par le site web (string).
- MasterPage : Page maître utilisée par le site web (string).
- RjsId : Identifiant RJS du site web (int).
- MainCategoryId : Identifiant de la catégorie principale du site web (int).
- DefaultNewsletterId : Identifiant de la newsletter par défaut (nullable int).
- MainUrl : URL principale du site web (string).
- CustomerServicePhone : Numéro de téléphone du service client (string).
- EmailServiceClient : Email du service client (string).
- HorairesServiceClient : Horaires du service client (string).
- DefaultPostalCode : Code postal par défaut (string).
- DefaultCountryPk : Code pays par défaut (string).
- DefaultCulture : Culture par défaut du site web (string).
- DefaultCurrency : Devise par défaut du site web (nullable Guid).
- SiteParentId : Identifiant du site parent (nullable int).
- IsECommerce : Indique si le site est un site e-commerce (bool).
- IsInProduction : Indique si le site est en production (bool).
- Description : Description du site web (string).
- Title : Titre du site web (string).
- IsPrivate : Indique si le site est privé (bool).
- RootSearchPath : Chemin racine pour les recherches (string).
- RootProductPath : Chemin racine pour les produits (string).
- RootPath : Chemin racine du site web (string).
- ThemeGuid : Identifiant du thème (nullable Guid).
- WebOmsSourceGuid : GUID de la source OMS pour le web (nullable Guid).
- StoreOmsSourceGuid : GUID de la source OMS pour le magasin (nullable Guid).

Cette classe permet de gérer la configuration de base et les informations essentielles d'un site web dans le contexte d'une solution Altazion.

### D�claration TypeScript
```typescript
interface WebSite {
  Code: string;
  Id: number;
  Label: string;
  Theme: string;
  CssTheme: string;
  MasterPage: string;
  RjsId: number;
  MainCategoryId: number;
  DefaultNewsletterId?: number | null;
  MainUrl: string;
  CustomerServicePhone: string;
  EmailServiceClient: string;
  HorairesServiceClient: string;
  DefaultPostalCode: string;
  DefaultCountryPk: string;
  DefaultCulture: string;
  DefaultCurrency?: string | null; // Guid as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null; // Guid as string
  WebOmsSourceGuid?: string | null; // Guid as string
  StoreOmsSourceGuid?: string | null; // Guid as string
}
```