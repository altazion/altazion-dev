## WebSiteWithUrls

La classe WebSiteWithUrls représente un site web enrichi d'une liste d'URLs secondaires associées. Elle hérite de la classe WebSite, donc elle possède toutes les propriétés suivantes :

- Code : Code court du site web.
- Id : Identifiant unique du site web.
- Label : Libellé ou nom du site web.
- Theme : Thème du site web.
- CssTheme : Thème CSS utilisé par le site web.
- MasterPage : Page maître utilisée par le site web.
- RjsId : Identifiant RJS du site web.
- MainCategoryId : Identifiant de la catégorie principale du site web.
- DefaultNewsletterId : Identifiant de la newsletter par défaut (nullable).
- MainUrl : URL principale du site web.
- CustomerServicePhone : Numéro de téléphone du service client.
- EmailServiceClient : Email du service client.
- HorairesServiceClient : Horaires du service client.
- DefaultPostalCode : Code postal par défaut.
- DefaultCountryPk : Code pays par défaut.
- DefaultCulture : Culture par défaut du site web.
- DefaultCurrency : Devise par défaut (nullable).
- SiteParentId : Identifiant du site parent (nullable).
- IsECommerce : Indique si le site est un site e-commerce.
- IsInProduction : Indique si le site est en production.
- Description : Description du site web.
- Title : Titre du site web.
- IsPrivate : Indique si le site est privé.
- RootSearchPath : Chemin racine pour les recherches.
- RootProductPath : Chemin racine pour les produits.
- RootPath : Chemin racine du site web.
- ThemeGuid : Identifiant du thème (nullable).
- WebOmsSourceGuid : GUID source OMS pour le web (nullable).
- StoreOmsSourceGuid : GUID source OMS pour le magasin (nullable).

Elle ajoute la propriété publique suivante :

- SecondaryUrls : Liste des URLs secondaires (type List<WebSiteUrl>) associées au site web.

Cette classe permet de gérer un site web avec ses principales propriétés ainsi que ses URLs secondaires associées.

### D�claration TypeScript
```typescript
interface WebSiteWithUrls {
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
  DefaultCurrency?: string | null; // Guid represented as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null; // Guid represented as string
  WebOmsSourceGuid?: string | null; // Guid represented as string
  StoreOmsSourceGuid?: string | null; // Guid represented as string
  SecondaryUrls: WebSiteUrl[];
}

interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string;
  Role: string;
}
```