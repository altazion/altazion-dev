## OrderProgressConfig

La classe OrderProgressConfig représente une configuration d'étape de progression des commandes, appelées "rails". Ces rails définissent les différentes étapes du workflow de traitement des commandes.

Propriétés publiques :

- Id : Identifiant unique de la configuration (Guid).
- Label : Libellé descriptif de l'étape de progression.
- ConfigType : Type de configuration, par exemple CDE (commande), BPR, etc.
- RailNumber : Numéro du rail dans le workflow, indique l'ordre général de l'étape (exemple : 1, 2, 3). C'est une chaîne, mais limitée à 1 caractère.
- ExecutionOrder : Ordre d'exécution au sein du même rail.
- HandlerClassName : Le nom complet de la classe (AssemblyQualifiedName) qui gère le traitement de cette étape.
- Origin : Origine de la commande concernée (filtre optionnel, chaîne limitée à 3 caractères).
- PreparationType : Type de préparation concerné (filtre optionnel, chaîne limitée à 3 caractères).
- ArticleType : Type d'article concerné (filtre optionnel, chaîne limitée à 3 caractères).
- Parameter1 : Premier paramètre de configuration, peut contenir du JSON ou du texte libre.
- Parameter2 : Second paramètre de configuration, pareillement JSON ou texte.
- InitScript : Script ou données d'initialisation spécifiques pour cette config.
- IsCustom : Indique si cette configuration est personnalisée, ajoutée par le client (booléen).

Cette classe sert à modéliser une étape dans un processus de traitement des commandes, avec des filtres possibles selon l'origine, le type de préparation ou d'article, et une gestion dynamique via un handler possiblement spécifié par une classe .NET.


### D�claration TypeScript
```typescript
interface OrderProgressConfig {
  Id: string; // Guid
  Label: string;
  ConfigType: string;
  RailNumber: string;
  ExecutionOrder: number;
  HandlerClassName: string;
  Origin?: string | null;
  PreparationType?: string | null;
  ArticleType?: string | null;
  Parameter1?: string | null;
  Parameter2?: string | null;
  InitScript?: string | null;
  IsCustom: boolean;
}
```