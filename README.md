# Exercice

Je veux une api NodeJS avec Express.js capable de réponde à un formulaire réalisé sur un front Nuxt.js.

Lorsque j'envoie le formulaire en POST depuis l'URL /reverso sur le endpoint du même nom, contenant un champ pour le prénom/nom, l'API me retourne un JSON avec 2 clés (prénom/nom en anglais of course, séparé à l'espace). Les valeurs doivent être inversées : "Gaëtan Simon" devient "Natëag Nomis". Le retour de l'API sera affiché en dessous.

Je veux que les valeurs saisies dans le formulaire soient dans l'URL. Exemple : si je saisie "Gaëtan Simon", je veux dans mon URL 1 paramètre de query, avec la valeur "Gaëtan Simon".

Lorque je charge la page, si j'ai dans l'URL mon paramètre de query précédent, je veux que le formulaire soit pré-rempli avec.

Pour effectuer les requêtes vers l'API je veux que soit utilisé Axios pour Nuxt.js.

Je veux des commentaires lorsque c'est nécessaire.

Le gestionnaire de packages doit être YARN 1.

Je veux la documentation sur le format attendu et la réponse du endpoint API.

La branche master est interdite. Je veux que le travail soit fait dans une branche différente. Je veux qu'une PR soit faite lorsque c'est bon avec moi en reviewer. C'est moi qui valide ou qui décline.

Je veux des commits différents entre api/front lorsque c'est possible. Le message doit être court, en anglais.

Si y a des questions, je veux une issue avec le label "question" sur laquelle je suis assigné.
