# Modèle d'architecture

Le modèle d'architecture utilisé est destiné à isoler de façon forte la partie "logique métier" de la partie interface et/ou traitements. L'objectif principal étant de pouvoir réutiliser la logique métier dans différents projets telles que des interfaces graphiques, batchs, API, etc.

Les applications se composent donc de deux ensembles de composants :

- d'un coté, les parties *modèle de données* et *logique métier*, communes à toutes les applications.
- de l'autre, un modèle spécifique au type d'application : Vue/Gestionnaire de vue pour une interface utilisateur, Controleurs pour une API, etc.

## Couches data et logique métier

La partie réutilisable se compose d'un [framework d'accès au données](data-framework.md), et d'une couche logique métier constituée de classes dont chacune regroupe des fonctionnalités par thème. Par exemple, il existe une classe métier pour gérer les clients, une pour les fournisseurs, une pour les devis, etc. 

### Objets métier

On trouvera pour la plupart des objets métier au moins les 4 opérations designées par l'acronyme CRUD (pour create, read, update, delete) que sont
créer, lire, mettre à jour, supprimer une information en base de données.

La création d'une nouvelle couche logique métier consiste en l'écriture d'une classe dérivant de celle de base *EquihiraBaseBll* selon le modèle suivant:

	public class NouvelleCoucheMetierBll : EquihiraBaseBll
	{      
		public NouvelleCoucheMetierBll(int rjs_id): base(rjs_id) // l'argument correspond au numéro de raison juridique
		{
		
		}

		public void Creer()
		{

		}

		public T Lire() // T est un type de classe de retour
		{

		}

		public void MettreAJour()
		{
		}

		public void Supprimer()
		{

		}
	}

On adopte *pour convention* de suffixer le nom de la classe par *Bll*.
Le constructeur appelle celui de base caractérisé par un entier qui lie la couche à son numéro de raison juridique.

### Accès aux données

Dans le cadre des objets métiers (dérivant de EquihiraBaseBll ou de BusinessComponent), un DataManager connecté sur la base principale de l'application est disponible via la propriété *protected MyDatamanager*. Vous devez vous servir prioritairement de ce DataManager et réserver la création d'un nouveau DataManager à des cas exceptionnels.

### Opérations de modification

Pour permettre l'intégration rapide des fonctions mises à dispo par un objet métier dans des batchs ou autre compositions, il est fréquent de mettre à disposition des méthodes *static* réalisant les opération de modification via une connexion / transaction passée en paramètre.

Par exemple, le module de gestion des sélections de produits (VitrinesBll) met à disposition une méthode permettant de définir quels sont les produits dans la sélection :

	public void DefinirArticlesDansVitrine(Guid vit_guid, ArticleGuidEtPertinence[] articles)
    {
		...
	}

Cette méthode est aussi utilisée à l'intérieur de différents batchs, et existe donc aussi sous une forme acceptant une connexion à la base :

    internal static void DefinirArticlesDansVitrine(Guid vit_guid, ArticleGuidEtPertinence[] articles, BaseDataManager ctx)
    {
		...
	}

Le choix de créer ou non cette version statique est laissée à discrétion du développeur, en fonction de ses besoins.

### Tests unitaires

L'application repose sur la fiabilité de la couche logique métier. Il faut donc s'assurer de systématiquement tester de façon unitaire chaque nouvelle fonctionnalité.

> [!note]
> En exception à cette règle : les objets métiers faisant appel à un service extérieur pour lequel il n'est pas possible de s'assurer de la disponibilité et de la fiabilité d'un environnement de test.

Pour des raisons historiques d'intégration avec Visual Studio Team Services, tous les tests sont faits avec le framework MSTest. Un test unitaire est une simple méthode décorée de quelques attributs et utilisant la classe *Assert* pour valider les assertions du test.

	[TestClass]
	public class ClasseDeTests
	{
		[TestMethod]
		public void FonctionTest()
		{
			...

			Assert.AreEqual(ValeurAttendue, ValeurReelle); // La valeur réelle a été obtenue en application de la nouvelle fonctionnalité

			...
		}
	}