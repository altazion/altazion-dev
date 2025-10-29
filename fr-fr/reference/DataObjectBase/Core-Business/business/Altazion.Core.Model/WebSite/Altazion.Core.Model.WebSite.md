## WebSite

La classe WebSite représente un site web avec ses propriétés et configurations associées.

Propriétés publiques :
- Code : code court du site web.
- Id : identifiant unique du site.
- Label : libellé ou nom du site.
- Theme : thème du site web.
- CssTheme : thème CSS utilisé par le site.
- MasterPage : page maître utilisée.
- RjsId : identifiant RJS du site.
- MainCategoryId : identifiant de la catégorie principale du site.
- DefaultNewsletterId : identifiant optionnel de la newsletter par défaut.
- MainUrl : URL principale du site.
- CustomerServicePhone : numéro de téléphone du service client.
- EmailServiceClient : email du service client.
- HorairesServiceClient : horaires du service client.
- DefaultPostalCode : code postal par défaut.
- DefaultCountryPk : code pays par défaut.
- DefaultCulture : culture par défaut du site.
- DefaultCurrency : devise par défaut du site.
- SiteParentId : identifiant optionnel du site parent.
- IsECommerce : indique si le site est un site e-commerce.
- IsInProduction : indique si le site est en production.
- Description : description textuelle du site.
- Title : titre du site.
- IsPrivate : indique si le site est privé.
- RootSearchPath : chemin racine pour les recherches.
- RootProductPath : chemin racine pour les produits.
- RootPath : chemin racine du site.
- ThemeGuid : identifiant unique (GUID) du thème.
- WebOmsSourceGuid : GUID de la source OMS pour le web.
- StoreOmsSourceGuid : GUID de la source OMS pour le magasin.

Cette classe fournit également des constructeurs pour initialiser un site web à partir d'une ligne de données, d'un couple id/libellé, ou sans paramètres. Elle surcharge la méthode GetKey() pour retourner l'identifiant unique. Des validations sont faites notamment sur le format URL.

### D�claration TypeScript
```typescript
export interface WebSite {
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
  DefaultCurrency?: string | null; // GUID represented as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null;
  WebOmsSourceGuid?: string | null;
  StoreOmsSourceGuid?: string | null;
}
```