# dataViz

## FirstPage
C’est le point d’entrée de l’application. Nous avons mis des explications par rapport aux  informations que notre application propose et un bouton qui affiche la map. 
## Container 
C’est le component qui contient la map des stations d’une part et les données d’autre (DataContainer). 
## Map 
Le component Map interroge notre api créée en utilisant node.js pour les données de « Baromètre de satisfaction » et une fois les données récupérées il crée la map en utilisant le component MapVisual2
## MapVisual2
Nous avons créé cette component qui regroupe la requête auprès de l’API et l’affichage de la carte. Pour créer la Map on utilise vue2-leaflet. Pour afficher les maps nous avons interrogé une autre API (liste-des-gares) qui contient entre autre les coordonnées de chaque gare. Nous avons choisit d’afficher les maps qui sont présents dans les données du Barometre.
## Histogrammes
C’est le component qui affiche les informations du baromètre de satisfaction en utilisant des histogrammes. Pour créer les histogrammes nous avons utilisé ChartJs. C’est une bibliothèque JavaScript open-source gratuite pour la visualisation de données. Cette component contient une méthode fillData qui récupère les donnes pour une station sélectionnée . On crée des nouveaux histogrammes à chaque fois que l’utilisateur clique sur une station. 
## Fréquentation
À part les informations pour la satisfaction des gens, nous proposons aussi une visualisation des fréquentations des gens dans les gares pour les dernière 5 ans. Pour cela nous avons utilisé e une autre API. Pour la visualisation de données nous avons utilisé ChartJs aussi mais ici nous avons intégré un graphique en ligne.
## NotAvailable
C’est un component qu’on affiche à chaque fois que les informations pour une station sont pas présentes . 
## DataContainer
Il représente la partie qui affiche les graphiques.
