export interface KnowledgeEntry {
  id: string
  keywords: string[]
  question: string
  answer: string
}

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: 'what-is-bendjo',
    keywords: ['qu\'est-ce', 'c\'est quoi', 'présentation', 'qui est', 'ben djo', 'bendjo', 'marque', 'entreprise'],
    question: 'Qu\'est-ce que BenDjo ?',
    answer: 'BenDjo est une marque béninoise d\'infusions 100% naturelles, créée à partir des plantes de notre terroir. Nous cultivons, récoltons et conditionnons nos infusions au Bénin. Notre nom est une contraction de « Bénin » et « Djo » — l\'énergie, la joie.',
  },
  {
    id: 'products',
    keywords: ['produit', 'produits', 'infusion', 'infusions', 'saveur', 'saveurs', 'goût', 'gout', 'variété', 'variete'],
    question: 'Quelles infusions proposez-vous ?',
    answer: 'Nous proposons trois infusions naturelles :\n\n• Infusion Hibiscus — une boisson rubis, légèrement acidulée, riche en vitamine C (2 500 FCFA la boîte de 10 sachets)\n• Infusion Basilic — douce et digestive, riche en vitamines A, E et C (2 500 FCFA)\n• Infusion Citronnelle — tonique aux vertus antioxydantes, avec un soupçon de clou de girofle (2 500 FCFA)',
  },
  {
    id: 'hibiscus',
    keywords: ['hibiscus', 'bissap', 'kinkéliba'],
    question: 'Parlez-moi de l\'infusion Hibiscus',
    answer: 'Notre infusion Hibiscus est faite à partir de fleurs d\'hibiscus séchées. Elle donne une boisson rubis, légèrement acidulée, riche en vitamine C, calcium, magnésium et potassium. Elle est vendue en boîte de 10 sachets à 2 500 FCFA.',
  },
  {
    id: 'basilic',
    keywords: ['basilic', 'feuille', 'digestion'],
    question: 'Parlez-moi de l\'infusion Basilic',
    answer: 'Notre infusion Basilic est faite de feuilles de basilic du terroir béninois. Elle est douce, facilite la digestion et est riche en vitamines A, E et C. Vendue en boîte de 10 sachets à 2 500 FCFA.',
  },
  {
    id: 'citronnelle',
    keywords: ['citronnelle', 'girofle', 'tonique', 'antioxydant'],
    question: 'Parlez-moi de l\'infusion Citronnelle',
    answer: 'Notre infusion Citronnelle combine citronnelle et clou de girofle pour une boisson tonique aux vertus antioxydantes. Elle contient de la vitamine E, du magnésium et des enzymes digestives. Vendue en boîte de 10 sachets à 2 500 FCFA.',
  },
  {
    id: 'price',
    keywords: ['prix', 'combien', 'coût', 'cout', 'tarif', 'tarifs', 'cher', 'pas cher'],
    question: 'Combien coûtent vos infusions ?',
    answer: 'Toutes nos infusions sont vendues au même prix : 2 500 FCFA la boîte de 10 sachets. La livraison est gratuite à Cotonou dès 5 000 FCFA d\'achat (soit deux boîtes).',
  },
  {
    id: 'order',
    keywords: ['commander', 'commande', 'acheter', 'achat', 'panier', 'whatsapp'],
    question: 'Comment passer une commande ?',
    answer: 'C\'est très simple ! Rendez-vous sur la page « Nos infusions », ajoutez vos saveurs au panier, puis cliquez sur « Commander via WhatsApp ». Votre commande s\'ouvre directement dans WhatsApp avec le récapitulatif. Nous confirmons la disponibilité et organisons la livraison.',
  },
  {
    id: 'delivery',
    keywords: ['livraison', 'livrer', 'délai', 'delai', 'cotonou', 'expedition', 'expédition', 'envoi'],
    question: 'Comment fonctionne la livraison ?',
    answer: 'Nous livrons dans tout Cotonou. La livraison est gratuite dès 5 000 FCFA d\'achat. Le paiement se fait à la livraison ou via WhatsApp. Nous confirmons chaque commande par message avant l\'envoi.',
  },
  {
    id: 'payment',
    keywords: ['paiement', 'payer', 'paye', 'mobile money', 'mtn', 'moov', 'cash', 'espèces', 'especes'],
    question: 'Comment puis-je payer ?',
    answer: 'Vous pouvez payer à la livraison (en espèces) ou via WhatsApp. Nous acceptons le paiement Mobile Money (MTN, Moov) sur confirmation de commande.',
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'petit-déjeuner', 'petit dejeuner', 'evenement', 'événement', 'séminaire', 'seminaire', 'entreprise', 'bar à infusion'],
    question: 'Quels services proposez-vous ?',
    answer: 'Nous proposons trois services :\n\n• Petit-déjeuner en entreprise — infusions, pâtisseries locales et fruits frais livrés le matin à votre bureau\n• Livraison à domicile — commandez en ligne, payez à la livraison à Cotonou\n• Événements & séminaires — bar à infusions personnalisé avec dégustation guidée\n\nContactez-nous pour un devis sur-mesure.',
  },
  {
    id: 'breakfast',
    keywords: ['petit-déjeuner', 'petit dejeuner', 'bureau', 'collaborateur', 'matin'],
    question: 'Comment fonctionne le petit-déjeuner en entreprise ?',
    answer: 'Notre service de petit-déjeuner en entreprise inclut des infusions, pâtisseries locales et fruits frais, livrés le matin à votre bureau. Les formules sont personnalisables selon le nombre de collaborateurs. Contactez-nous pour un devis.',
  },
  {
    id: 'events',
    keywords: ['événement', 'evenement', 'séminaire', 'seminaire', 'atelier', 'bar à infusion', 'dégustation', 'degustation'],
    question: 'Proposez-vous un service pour les événements ?',
    answer: 'Oui ! Pour vos séminaires, ateliers et événements, nous proposons des pauses infusion sur-mesure avec un bar à infusions personnalisé et une dégustation guidée des saveurs béninoises. Contactez-nous pour un devis adapté à vos besoins.',
  },
  {
    id: 'natural',
    keywords: ['naturel', 'naturelle', 'additif', 'coloration', 'chimique', 'bio', 'biologique', 'santé', 'sante'],
    question: 'Vos infusions sont-elles vraiment naturelles ?',
    answer: 'Absolument ! Nos infusions sont 100% naturelles : aucun additif, aucune coloration, aucun conservateur. Juste les plantes de notre terroir, cultivées sans pesticides, séchées naturellement et conditionnées à Cotonou.',
  },
  {
    id: 'origin',
    keywords: ['origine', 'terroir', 'bénin', 'benin', 'cotonou', 'local', 'savoir-faire', 'histoire'],
    question: 'D\'où viennent vos plantes ?',
    answer: 'Toutes nos plantes sont cultivées sur le terroir béninois, récoltées manuellement au moment optimal, séchées naturellement et conditionnées à notre atelier de Cotonou. Nous perpétuons un savoir-faire ancestral combiné aux standards de qualité modernes.',
  },
  {
    id: 'benefits',
    keywords: ['bienfait', 'bienfaits', 'vertu', 'vertus', 'santé', 'sante', 'vitamine', 'minéraux', 'mineraux', 'digestion', 'énergie', 'energie'],
    question: 'Quels sont les bienfaits de vos infusions ?',
    answer: 'Nos infusions sont riches en vitamines et minéraux :\n\n• Hibiscus : vitamine C, calcium, magnésium, potassium — vitalité\n• Basilic : vitamines A, E, C — digestion facilitée\n• Citronnelle : vitamine E, magnésium, antioxydants — tonus et digestion',
  },
  {
    id: 'contact',
    keywords: ['contact', 'contacter', 'joindre', 'email', 'mail', 'téléphone', 'telephone', 'appeler', 'adresse'],
    question: 'Comment vous contacter ?',
    answer: 'Vous pouvez nous contacter de plusieurs façons :\n\n• Par téléphone : +229 00 00 00 00\n• Par email : contact@bendjo.bj\n• Via le formulaire sur la page Contact\n• Par WhatsApp au +229 00 00 00 00\n\nNous sommes basés à Cotonou, Bénin.',
  },
  {
    id: 'hours',
    keywords: ['horaire', 'horaires', 'ouvert', 'fermé', 'ferme', 'jour', 'disponible', 'temps'],
    question: 'Quels sont vos horaires ?',
    answer: 'Nous sommes disponibles du lundi au samedi, de 8h à 18h. Les commandes via WhatsApp sont traitées dans la journée. Les livraisons à Cotonou sont effectuées sous 24 à 48h.',
  },
  {
    id: 'format',
    keywords: ['format', 'sachet', 'boîte', 'boite', 'quantité', 'quantite', 'poids', 'gramme'],
    question: 'Quel est le format des boîtes ?',
    answer: 'Chaque boîte contient 10 sachets d\'infusion, soit 10 tasses à savourer. Le format est pratique et hermétique pour préserver toutes les saveurs et vertus des plantes.',
  },
  {
    id: 'partnership',
    keywords: ['partenariat', 'partenaire', 'collaboration', 'revendeur', 'distribuer', 'grossiste', 'boutique'],
    question: 'Puis-je devenir partenaire ou revendeur ?',
    answer: 'Oui, nous sommes ouverts aux partenariats ! Que vous soyez boutique, revendeur ou entreprise souhaitant proposer nos infusions, contactez-nous via le formulaire de contact ou par WhatsApp pour en discuter.',
  },
]

export const FALLBACK_RESPONSE =
  'Je ne suis pas sûr de bien comprendre votre question. Vous pouvez me demander des informations sur nos infusions (hibiscus, basilic, citronnelle), nos prix, la livraison, nos services en entreprise, ou comment nous contacter. Essayez par exemple : « Quelles infusions proposez-vous ? »'

export const GREETING_RESPONSE =
  'Bonjour et bienvenue chez BenDjo ! Je suis votre assistant virtuel. Posez-moi vos questions sur nos infusions, nos services, nos prix ou la livraison. Comment puis-je vous aider aujourd\'hui ?'
