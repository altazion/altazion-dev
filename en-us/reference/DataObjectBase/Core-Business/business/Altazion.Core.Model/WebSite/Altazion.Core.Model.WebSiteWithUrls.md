## WebSiteWithUrls

The WebSiteWithUrls class represents a website extended with a list of associated secondary URLs. It inherits from the WebSite class, hence it possesses all the following properties:

- Code: Short code of the website.
- Id: Unique identifier of the website.
- Label: Label or name of the website.
- Theme: Theme of the website.
- CssTheme: CSS theme used by the website.
- MasterPage: Master page used by the website.
- RjsId: RJS identifier of the website.
- MainCategoryId: Identifier of the main category of the website.
- DefaultNewsletterId: Identifier of the default newsletter (nullable).
- MainUrl: Main URL of the website.
- CustomerServicePhone: Customer service phone number.
- EmailServiceClient: Customer service email.
- HorairesServiceClient: Customer service hours.
- DefaultPostalCode: Default postal code.
- DefaultCountryPk: Default country code.
- DefaultCulture: Default culture of the website.
- DefaultCurrency: Default currency (nullable).
- SiteParentId: Identifier of the parent site (nullable).
- IsECommerce: Indicates if the site is an e-commerce site.
- IsInProduction: Indicates if the site is in production.
- Description: Description of the website.
- Title: Title of the website.
- IsPrivate: Indicates if the site is private.
- RootSearchPath: Root path for searches.
- RootProductPath: Root path for products.
- RootPath: Root path of the website.
- ThemeGuid: Identifier of the theme (nullable).
- WebOmsSourceGuid: OMS source GUID for the web (nullable).
- StoreOmsSourceGuid: OMS source GUID for the store (nullable).

It adds the following public property:

- SecondaryUrls: List of secondary URLs (type List<WebSiteUrl>) associated with the website.

This class allows managing a website with its main properties as well as its associated secondary URLs.

### TypeScript class
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