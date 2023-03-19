## <span id='listelesservicesmagasin'>Récupérer les services magasin</span>

Récupère les services magasin

Url :`[GET] app/magasins/services`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `ServiceMagasin[]`

Type(s) de données :

```csharp
class ServiceMagasin
{
	int Pk { get; set; }
	string Libelle { get; set; }
	string UrlIcone { get; set; }
	string UrlDescription { get; set; }
	string TypeService { get; set; }
}

```

