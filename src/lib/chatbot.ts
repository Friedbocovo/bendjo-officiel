import type { Language } from '../context/PreferencesContext'

export interface KnowledgeEntry {
  id: string
  keywords: string[]
  answer: string
}

const KNOWLEDGE_BASE: Record<Language, KnowledgeEntry[]> = {
  fr: [
    {
      id: 'what-is-bendjo',
      keywords: ['qu\'est-ce', 'c\'est quoi', 'présentation', 'qui est', 'ben djo', 'bendjo', 'marque', 'entreprise'],
      answer: 'BenDjo est une marque béninoise d\'infusions 100% naturelles, créée à partir des plantes de notre terroir. Nous cultivons, récoltons et conditionnons nos infusions au Bénin. Notre nom est une contraction de « Bénin » et « Djo » — l\'énergie, la joie.',
    },
    {
      id: 'products',
      keywords: ['produit', 'produits', 'infusion', 'infusions', 'saveur', 'saveurs', 'goût', 'gout', 'variété', 'variete'],
      answer: 'Nous proposons trois infusions naturelles :\n\n• Infusion Hibiscus — une boisson rubis, légèrement acidulée, riche en vitamine C (2 500 FCFA la boîte de 10 sachets)\n• Infusion Basilic — douce et digestive, riche en vitamines A, E et C (2 500 FCFA)\n• Infusion Citronnelle — tonique aux vertus antioxydantes, avec un soupçon de clou de girofle (2 500 FCFA)',
    },
    {
      id: 'hibiscus',
      keywords: ['hibiscus', 'bissap'],
      answer: 'Notre infusion Hibiscus est faite à partir de fleurs d\'hibiscus séchées. Elle donne une boisson rubis, légèrement acidulée, riche en vitamine C, calcium, magnésium et potassium. Elle est vendue en boîte de 10 sachets à 2 500 FCFA.',
    },
    {
      id: 'basilic',
      keywords: ['basilic', 'feuille', 'digestion'],
      answer: 'Notre infusion Basilic est faite de feuilles de basilic du terroir béninois. Elle est douce, facilite la digestion et est riche en vitamines A, E et C. Vendue en boîte de 10 sachets à 2 500 FCFA.',
    },
    {
      id: 'citronnelle',
      keywords: ['citronnelle', 'girofle', 'tonique', 'antioxydant'],
      answer: 'Notre infusion Citronnelle combine citronnelle et clou de girofle pour une boisson tonique aux vertus antioxydantes. Elle contient de la vitamine E, du magnésium et des enzymes digestives. Vendue en boîte de 10 sachets à 2 500 FCFA.',
    },
    {
      id: 'price',
      keywords: ['prix', 'combien', 'coût', 'cout', 'tarif', 'tarifs', 'cher'],
      answer: 'Toutes nos infusions sont vendues au même prix : 2 500 FCFA la boîte de 10 sachets. La livraison est gratuite à Cotonou dès 5 000 FCFA d\'achat (soit deux boîtes).',
    },
    {
      id: 'order',
      keywords: ['commander', 'commande', 'acheter', 'achat', 'panier', 'whatsapp'],
      answer: 'C\'est très simple ! Rendez-vous sur la page « Nos infusions », ajoutez vos saveurs au panier, puis cliquez sur « Commander via WhatsApp ». Votre commande s\'ouvre directement dans WhatsApp avec le récapitulatif.',
    },
    {
      id: 'delivery',
      keywords: ['livraison', 'livrer', 'délai', 'delai', 'cotonou', 'expedition', 'expédition', 'envoi'],
      answer: 'Nous livrons dans tout Cotonou. La livraison est gratuite dès 5 000 FCFA d\'achat. Le paiement se fait à la livraison ou via WhatsApp. Nous confirmons chaque commande par message avant l\'envoi.',
    },
    {
      id: 'payment',
      keywords: ['paiement', 'payer', 'paye', 'mobile money', 'mtn', 'moov', 'cash', 'espèces', 'especes'],
      answer: 'Vous pouvez payer à la livraison (en espèces) ou via WhatsApp. Nous acceptons le paiement Mobile Money (MTN, Moov) sur confirmation de commande.',
    },
    {
      id: 'services',
      keywords: ['service', 'services', 'petit-déjeuner', 'petit dejeuner', 'evenement', 'événement', 'séminaire', 'seminaire', 'entreprise', 'bar à infusion'],
      answer: 'Nous proposons trois services :\n\n• Petit-déjeuner en entreprise — infusions, pâtisseries locales et fruits frais livrés le matin à votre bureau\n• Livraison à domicile — commandez en ligne, payez à la livraison à Cotonou\n• Événements & séminaires — bar à infusions personnalisé avec dégustation guidée\n\nContactez-nous pour un devis sur-mesure.',
    },
    {
      id: 'breakfast',
      keywords: ['petit-déjeuner', 'petit dejeuner', 'bureau', 'collaborateur', 'matin'],
      answer: 'Notre service de petit-déjeuner en entreprise inclut des infusions, pâtisseries locales et fruits frais, livrés le matin à votre bureau. Les formules sont personnalisables selon le nombre de collaborateurs. Contactez-nous pour un devis.',
    },
    {
      id: 'events',
      keywords: ['événement', 'evenement', 'séminaire', 'seminaire', 'atelier', 'bar à infusion', 'dégustation', 'degustation'],
      answer: 'Oui ! Pour vos séminaires, ateliers et événements, nous proposons des pauses infusion sur-mesure avec un bar à infusions personnalisé et une dégustation guidée des saveurs béninoises. Contactez-nous pour un devis.',
    },
    {
      id: 'natural',
      keywords: ['naturel', 'naturelle', 'additif', 'coloration', 'chimique', 'bio', 'biologique', 'santé', 'sante'],
      answer: 'Absolument ! Nos infusions sont 100% naturelles : aucun additif, aucune coloration, aucun conservateur. Juste les plantes de notre terroir, cultivées sans pesticides, séchées naturellement et conditionnées à Cotonou.',
    },
    {
      id: 'origin',
      keywords: ['origine', 'terroir', 'bénin', 'benin', 'cotonou', 'local', 'savoir-faire', 'histoire'],
      answer: 'Toutes nos plantes sont cultivées sur le terroir béninois, récoltées manuellement au moment optimal, séchées naturellement et conditionnées à notre atelier de Cotonou. Nous perpétuons un savoir-faire ancestral combiné aux standards de qualité modernes.',
    },
    {
      id: 'benefits',
      keywords: ['bienfait', 'bienfaits', 'vertu', 'vertus', 'santé', 'sante', 'vitamine', 'minéraux', 'mineraux', 'digestion', 'énergie', 'energie'],
      answer: 'Nos infusions sont riches en vitamines et minéraux :\n\n• Hibiscus : vitamine C, calcium, magnésium, potassium — vitalité\n• Basilic : vitamines A, E, C — digestion facilitée\n• Citronnelle : vitamine E, magnésium, antioxydants — tonus et digestion',
    },
    {
      id: 'contact',
      keywords: ['contact', 'contacter', 'joindre', 'email', 'mail', 'téléphone', 'telephone', 'appeler', 'adresse'],
      answer: 'Vous pouvez nous contacter de plusieurs façons :\n\n• Par téléphone : +229 00 00 00 00\n• Par email : contact@bendjo.bj\n• Via le formulaire sur la page Contact\n• Par WhatsApp au +229 00 00 00 00\n\nNous sommes basés à Cotonou, Bénin.',
    },
    {
      id: 'hours',
      keywords: ['horaire', 'horaires', 'ouvert', 'fermé', 'ferme', 'jour', 'disponible', 'temps'],
      answer: 'Nous sommes disponibles du lundi au samedi, de 8h à 18h. Les commandes via WhatsApp sont traitées dans la journée. Les livraisons à Cotonou sont effectuées sous 24 à 48h.',
    },
    {
      id: 'format',
      keywords: ['format', 'sachet', 'boîte', 'boite', 'quantité', 'quantite', 'poids', 'gramme'],
      answer: 'Chaque boîte contient 10 sachets d\'infusion, soit 10 tasses à savourer. Le format est pratique et hermétique pour préserver toutes les saveurs et vertus des plantes.',
    },
    {
      id: 'partnership',
      keywords: ['partenariat', 'partenaire', 'collaboration', 'revendeur', 'distribuer', 'grossiste', 'boutique'],
      answer: 'Oui, nous sommes ouverts aux partenariats ! Que vous soyez boutique, revendeur ou entreprise souhaitant proposer nos infusions, contactez-nous via le formulaire de contact ou par WhatsApp pour en discuter.',
    },
  ],
  en: [
    {
      id: 'what-is-bendjo',
      keywords: ['what is', 'who is', 'presentation', 'ben djo', 'bendjo', 'brand', 'company'],
      answer: 'BenDjo is a Beninese brand of 100% natural infusions, created from the plants of our terroir. We grow, harvest and package our infusions in Benin. Our name is a contraction of "Benin" and "Djo" — energy, joy.',
    },
    {
      id: 'products',
      keywords: ['product', 'products', 'infusion', 'infusions', 'flavor', 'flavors', 'taste', 'variety', 'varieties'],
      answer: 'We offer three natural infusions:\n\n• Hibiscus Infusion — a ruby-red drink, slightly tangy, rich in vitamin C (2,500 FCFA per box of 10 sachets)\n• Basil Infusion — smooth and digestive, rich in vitamins A, E and C (2,500 FCFA)\n• Lemongrass Infusion — tonic with antioxidant properties, with a hint of clove (2,500 FCFA)',
    },
    {
      id: 'hibiscus',
      keywords: ['hibiscus', 'bissap'],
      answer: 'Our Hibiscus Infusion is made from dried hibiscus flowers. It gives a ruby-red drink, slightly tangy, rich in vitamin C, calcium, magnesium and potassium. Sold in a box of 10 sachets at 2,500 FCFA.',
    },
    {
      id: 'basilic',
      keywords: ['basil', 'leaf', 'digestion'],
      answer: 'Our Basil Infusion is made from basil leaves from the Beninese terroir. It is smooth, aids digestion and is rich in vitamins A, E and C. Sold in a box of 10 sachets at 2,500 FCFA.',
    },
    {
      id: 'citronnelle',
      keywords: ['lemongrass', 'clove', 'tonic', 'antioxidant'],
      answer: 'Our Lemongrass Infusion combines lemongrass and clove for a tonic drink with antioxidant properties. It contains vitamin E, magnesium and digestive enzymes. Sold in a box of 10 sachets at 2,500 FCFA.',
    },
    {
      id: 'price',
      keywords: ['price', 'how much', 'cost', 'tariff', 'tariffs', 'expensive', 'cheap'],
      answer: 'All our infusions are sold at the same price: 2,500 FCFA per box of 10 sachets. Delivery is free in Cotonou for orders over 5,000 FCFA (two boxes).',
    },
    {
      id: 'order',
      keywords: ['order', 'buy', 'purchase', 'cart', 'whatsapp'],
      answer: 'It\'s very simple! Go to the "Our infusions" page, add your flavors to the cart, then click "Order via WhatsApp". Your order opens directly in WhatsApp with the summary.',
    },
    {
      id: 'delivery',
      keywords: ['delivery', 'deliver', 'delay', 'cotonou', 'shipping', 'send'],
      answer: 'We deliver throughout Cotonou. Delivery is free for orders over 5,000 FCFA. Payment is made on delivery or via WhatsApp. We confirm each order by message before shipping.',
    },
    {
      id: 'payment',
      keywords: ['payment', 'pay', 'mobile money', 'mtn', 'moov', 'cash'],
      answer: 'You can pay on delivery (cash) or via WhatsApp. We accept Mobile Money payments (MTN, Moov) upon order confirmation.',
    },
    {
      id: 'services',
      keywords: ['service', 'services', 'breakfast', 'event', 'events', 'seminar', 'company', 'infusion bar'],
      answer: 'We offer three services:\n\n• Corporate breakfast — infusions, local pastries and fresh fruit delivered to your office in the morning\n• Home delivery — order online, pay on delivery in Cotonou\n• Events & seminars — custom infusion bar with guided tasting\n\nContact us for a custom quote.',
    },
    {
      id: 'breakfast',
      keywords: ['breakfast', 'office', 'collaborator', 'morning'],
      answer: 'Our corporate breakfast service includes infusions, local pastries and fresh fruit, delivered to your office in the morning. Formulas are customizable based on the number of employees. Contact us for a quote.',
    },
    {
      id: 'events',
      keywords: ['event', 'events', 'seminar', 'workshop', 'infusion bar', 'tasting'],
      answer: 'Yes! For your seminars, workshops and events, we offer tailor-made infusion breaks with a custom infusion bar and guided tasting of Beninese flavors. Contact us for a quote.',
    },
    {
      id: 'natural',
      keywords: ['natural', 'additive', 'coloring', 'chemical', 'organic', 'health'],
      answer: 'Absolutely! Our infusions are 100% natural: no additives, no coloring, no preservatives. Just plants from our terroir, grown without pesticides, dried naturally and packaged in Cotonou.',
    },
    {
      id: 'origin',
      keywords: ['origin', 'terroir', 'benin', 'cotonou', 'local', 'know-how', 'story', 'history'],
      answer: 'All our plants are grown on Beninese terroir, harvested manually at the optimal time, dried naturally and packaged at our Cotonou workshop. We carry on ancestral know-how combined with modern quality standards.',
    },
    {
      id: 'benefits',
      keywords: ['benefit', 'benefits', 'virtue', 'virtues', 'health', 'vitamin', 'minerals', 'digestion', 'energy'],
      answer: 'Our infusions are rich in vitamins and minerals:\n\n• Hibiscus: vitamin C, calcium, magnesium, potassium — vitality\n• Basil: vitamins A, E, C — improved digestion\n• Lemongrass: vitamin E, magnesium, antioxidants — energy and digestion',
    },
    {
      id: 'contact',
      keywords: ['contact', 'email', 'mail', 'phone', 'call', 'address', 'reach'],
      answer: 'You can contact us in several ways:\n\n• By phone: +229 00 00 00 00\n• By email: contact@bendjo.bj\n• Via the form on the Contact page\n• By WhatsApp at +229 00 00 00 00\n\nWe are based in Cotonou, Benin.',
    },
    {
      id: 'hours',
      keywords: ['hours', 'open', 'closed', 'day', 'available', 'time'],
      answer: 'We are available Monday to Saturday, from 8am to 6pm. WhatsApp orders are processed the same day. Deliveries in Cotonou are made within 24 to 48 hours.',
    },
    {
      id: 'format',
      keywords: ['format', 'sachet', 'box', 'quantity', 'weight', 'gram'],
      answer: 'Each box contains 10 infusion sachets, that\'s 10 cups to enjoy. The format is practical and airtight to preserve all the flavors and virtues of the plants.',
    },
    {
      id: 'partnership',
      keywords: ['partnership', 'partner', 'collaboration', 'reseller', 'distribute', 'wholesaler', 'shop'],
      answer: 'Yes, we are open to partnerships! Whether you\'re a shop, reseller or company wanting to offer our infusions, contact us via the contact form or WhatsApp to discuss it.',
    },
  ],
}

const GREETING_WORDS: Record<Language, string[]> = {
  fr: ['bonjour', 'salut', 'hello', 'hi', 'bonsoir', 'coucou', 'hey'],
  en: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon'],
}

const THANKS_WORDS: Record<Language, string[]> = {
  fr: ['merci', 'thanks', 'thank you', 'super merci', 'parfait merci'],
  en: ['thanks', 'thank you', 'great thanks', 'perfect thanks'],
}

const BYE_WORDS: Record<Language, string[]> = {
  fr: ['au revoir', 'bye', 'à bientôt', 'a bientot', 'ciao', 'bonne journée'],
  en: ['goodbye', 'bye', 'see you', 'see you soon', 'ciao', 'have a good day'],
}

const FALLBACK: Record<Language, string> = {
  fr: 'Je ne suis pas sûr de bien comprendre votre question. Vous pouvez me demander des informations sur nos infusions (hibiscus, basilic, citronnelle), nos prix, la livraison, nos services en entreprise, ou comment nous contacter. Essayez par exemple : « Quelles infusions proposez-vous ? »',
  en: 'I\'m not sure I understand your question. You can ask me about our infusions (hibiscus, basil, lemongrass), our prices, delivery, our corporate services, or how to contact us. Try for example: "What infusions do you offer?"',
}

const GREETING: Record<Language, string> = {
  fr: 'Bonjour et bienvenue chez BenDjo ! Je suis votre assistant virtuel. Posez-moi vos questions sur nos infusions, nos services, nos prix ou la livraison. Comment puis-je vous aider aujourd\'hui ?',
  en: 'Hello and welcome to BenDjo! I am your virtual assistant. Ask me your questions about our infusions, services, prices or delivery. How can I help you today?',
}

const THANKS: Record<Language, string> = {
  fr: 'Avec plaisir ! Y a-t-il autre chose que vous aimeriez savoir sur BenDjo ?',
  en: 'You\'re welcome! Is there anything else you\'d like to know about BenDjo?',
}

const BYE: Record<Language, string> = {
  fr: 'Merci pour votre visite ! N\'hésitez pas à revenir si vous avez d\'autres questions. À bientôt chez BenDjo !',
  en: 'Thank you for visiting! Feel free to come back if you have more questions. See you soon at BenDjo!',
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function scoreEntry(query: string, entry: KnowledgeEntry): number {
  const normalizedQuery = normalize(query)
  let score = 0

  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword)
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.length > 4 ? 3 : 2
    }
  }

  return score
}

export function getBotResponse(userMessage: string, language: Language): string {
  const normalized = normalize(userMessage)
  const kb = KNOWLEDGE_BASE[language]

  if (GREETING_WORDS[language].some(g => normalized === g || normalized.startsWith(g + ' '))) {
    return GREETING[language]
  }

  if (THANKS_WORDS[language].some(t => normalized.includes(t))) {
    return THANKS[language]
  }

  if (BYE_WORDS[language].some(b => normalized.includes(b))) {
    return BYE[language]
  }

  const scored = kb
    .map(entry => ({ entry, score: scoreEntry(userMessage, entry) }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length === 0 || scored[0].score < 2) {
    return FALLBACK[language]
  }

  return scored[0].entry.answer
}

export interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
  time: number
}
