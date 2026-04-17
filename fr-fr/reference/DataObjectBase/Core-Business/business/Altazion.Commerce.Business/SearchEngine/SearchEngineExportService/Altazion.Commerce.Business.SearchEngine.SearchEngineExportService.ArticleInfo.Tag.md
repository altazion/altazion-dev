## Tag

Classe représentant un tag d'article dans le contexte de l'exportation du moteur de recherche.

Propriétés publiques :
- tgv_html : chaîne de caractères représentant le contenu HTML du tag.
- tag_ordre : entier nullable indiquant l'ordre du tag, potentiellement utilisé pour trier ou prioriser les tags.

### D�claration TypeScript
```typescript
interface Tag {
  tgv_html: string;
  tag_ordre?: number | null;
}
```