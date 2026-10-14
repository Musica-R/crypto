const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "token", label: "Token" },
  { id: "roadmap", label: "Roadmap" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  tag: "ICO platform, live now",
  title: "Take Control Of Your Money",
  subtitle: "Best Platform For ICO Crypto Currency",
  text: "There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.",
  features: [
    { icon: "zap", title: "Real Time Update", text: "It is a long established fact that a reader will be distracted by the readable content." },
    { icon: "chart", title: "Advanced Analytics", text: "It is a long established fact that a reader will be distracted by the readable content." },
    { icon: "cpu", title: "Blockchain Technology", text: "It is a long established fact that a reader will be distracted by the readable content." },
  ],
};

export const about = {
  tag: "About us",
  title: "We Offer Best ICO Crypto Solutions For You",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
  points: [
    "Take a look at our round up of the best shows",
    "It has survived not only five centuries",
    "Lorem Ipsum has been the industry standard dummy text",
  ],
  image: img("photo-1621761191319-c6fb62004040"),
  cta: "Learn more",
};

export const why = {
  tag: "Why choose us",
  title: "We Translate Your Future Dream Into Reality",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
  image: img("photo-1642104704074-907c0698cbd9"),
  items: [
    { icon: "shield", title: "Data Protection", text: "It is a long established fact that a reader." },
    { icon: "support", title: "24/7 Support", text: "It is a long established fact that a reader." },
    { icon: "exchange", title: "Live Exchange Rate", text: "It is a long established fact that a reader." },
    { icon: "lock", title: "Security Protection", text: "It is a long established fact that a reader." },
  ],
};

const serviceText =
  "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words.";

export const services = {
  tag: "Services",
  title: "Our Best Solutions",
  items: [
    { icon: "share", title: "Social Assistant", text: serviceText },
    { icon: "wallet", title: "Secure Wallet", text: serviceText },
    { icon: "list", title: "Order Management", text: serviceText },
    { icon: "trend", title: "Trading Platform", text: serviceText },
    { icon: "bell", title: "Price Notifications", text: serviceText },
    { icon: "repeat", title: "Buy And Sell Coin", text: serviceText },
  ],
};

export const sale = {
  tag: "Token",
  title: "Token Sale",
  infoTitle: "Sales Information",
  // Change this date to your real sale end.
  endDate: "2027-03-01T00:00:00",
  info: [
    ["Public Sale Start", "April 10, 2024 - 24.00 PM GMT"],
    ["Public Sale End", "May 15, 2024 - 24.00 PM GMT"],
    ["Total Token Amount", "700,000,000 ICC"],
    ["Tokens Allocated For ICO", "250,000,000 ICC"],
    ["Maximum Target", "$150.64 M"],
    ["Minimum Target", "$20.64 M"],
    ["Exchange Rate", "1 ETH = 2000 ICC | 1 BTC = 3000 ICC"],
    ["Token Currencies", "ETH, BTC, LTC"],
    ["Minimum Amount", "20 ETH/BTC/LTC"],
  ],
  progress: { title: "Sales Progress", raised: 1100000, percent: 65, min: "$20.64 M", max: "$150.64 M" },
  buy: { title: "Buy Your Token Now", min: "Minimum Buy: 20.00 BTC" },
  discounts: [
    { label: "Running Discount", value: 30, note: "End - April 10, 2024" },
    { label: "Upcoming Discount", value: 45, note: "Start - May 15, 2024" },
  ],
};

export const tokenDetails = {
  tag: "Token details",
  title: "Token Distribution",
  colors: ["#e0245e", "#0aa574", "#f2683f", "#a21caf", "#6d9a0e"],
  charts: [
    {
      title: "Token Distribution",
      items: [
        { label: "Top Community", value: 20 },
        { label: "Reserved Fund", value: 12 },
        { label: "Advisor Team", value: 8 },
        { label: "Sold Globally", value: 50 },
        { label: "Financial", value: 10 },
      ],
    },
    {
      title: "Sale Contribution",
      items: [
        { label: "Top Community", value: 15 },
        { label: "Reserved Fund", value: 50 },
        { label: "Advisor Team", value: 10 },
        { label: "Sold Globally", value: 20 },
        { label: "Financial", value: 5 },
      ],
    },
  ],
};

const roadText = "There are many variations of passages available but the majority have suffered alteration injected.";

export const roadmap = {
  tag: "Road map",
  title: "Cryptox Road Map",
  items: [
    { date: "January 15, 2024", title: "Idea Generation", text: roadText },
    { date: "February 20, 2024", title: "Market Research", text: roadText },
    { date: "March 12, 2024", title: "Business Plan", text: roadText },
    { date: "April 29, 2024", title: "Start Development", text: roadText },
    { date: "May 18, 2024", title: "Pre Sale Launch", text: roadText },
    { date: "June 14, 2024", title: "Launch The Platform", text: roadText },
  ],
};

export const profit = {
  tag: "Profit",
  title: "Your Profit With Cryptox",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  cta: "Get Started",
};

export const app = {
  tag: "Cryptox app",
  title: "Download Our App",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
  text2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

export const team = {
  tag: "Team",
  title: "Meet Our Experts",
  members: [
    { name: "Malissa Fierro", role: "Developer", image: img("photo-1573496359142-b8d87734a5a2", 700) },
    { name: "Arron Rodri", role: "Senior Designer", image: img("photo-1507003211169-0a1dd7228f2d", 700) },
    { name: "Chad Smith", role: "Digital Marketer", image: img("photo-1560250097-0b93528c311a", 700) },
    { name: "Tony Pinto", role: "CEO & Founder", image: img("photo-1472099645785-5658abf4ff4e", 700) },
  ],
};

/*
 * Each document opens the "Download PDF" dialog. The PDF is generated in the browser from `sections`.
 * To ship a real file instead, drop it in /public/docs and add  file: "/docs/white-paper.pdf"  to the item.
 */
export const documents = {
  tag: "Document",
  title: "Download Document",
  items: [
    {
      icon: "wallet", title: "Wallet",
      desc: "A short guide to the Cryptox wallet: supported coins, security and first steps.",
      sections: [
        { heading: "Overview", text: "The Cryptox wallet lets you hold, send and receive ICC alongside BTC, ETH and LTC in one place. Your private keys stay on your device and are never stored on our servers." },
        { heading: "Supported assets", bullets: ["ICC, the Cryptox platform token", "Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)"] },
        { heading: "Security", bullets: ["Multi-layer protection for every account", "Optional two-factor authentication", "Encrypted backup phrase that only you control"] },
        { heading: "Getting started", bullets: ["Download the Cryptox app and create a wallet", "Write down your backup phrase and keep it offline", "Fund the wallet and join the token sale"] },
      ],
    },
    {
      icon: "book", title: "White Papers",
      desc: "The vision, technology and token model behind the Cryptox ICO platform.",
      sections: [
        { heading: "Abstract", text: "Cryptox is a platform for launching and joining initial coin offerings with transparent rules, clear token details and tools that keep contributors informed at every stage." },
        { heading: "The problem", text: "Many token sales are hard to follow. Terms are scattered, progress is unclear and contributors have little visibility into how funds and tokens are handled." },
        { heading: "Our solution", bullets: ["One dashboard for sale progress, token supply and discounts", "Live exchange rates: 1 BTC = 3000 ICC", "Real time updates and advanced analytics", "Blockchain technology for verifiable records"] },
        { heading: "Token model", text: "ICC has a total supply of 700M tokens. The distribution and the use of funds are published in the Token Details section of the website." },
      ],
    },
    {
      icon: "chart", title: "Reports",
      desc: "Platform progress, sale status and what comes next, in plain language.",
      sections: [
        { heading: "Highlights", bullets: ["The token sale is live and accepts BTC, ETH and LTC", "Minimum contribution is 20 ETH, BTC or LTC", "Early contributors receive tiered discounts"] },
        { heading: "Platform progress", text: "Core wallet and exchange features are in place. Work continues on the mobile app, partner exchange listings and price alerts." },
        { heading: "Next milestones", bullets: ["Mobile app release on Google Play and the App Store", "Listing of ICC on partner exchanges", "Expansion of the analytics dashboard"] },
      ],
    },
    {
      icon: "layers", title: "ICO Structure",
      desc: "How the Cryptox token sale is organised, from phases to distribution.",
      sections: [
        { heading: "Sale phases", bullets: ["Pre-sale for early supporters with the highest discount", "Main sale with a reduced discount", "Final phase at the standard rate"] },
        { heading: "Contribution rules", bullets: ["Accepted currencies: BTC, ETH and LTC", "Minimum purchase: 20 ETH, BTC or LTC per contribution", "Tokens are delivered after the sale closes"] },
        { heading: "Distribution", text: "The 700M ICC supply is divided between the public sale, platform development, the team, partners and reserves. Exact percentages are shown in the Token Details charts." },
      ],
    },
    {
      icon: "file", title: "One Papers",
      desc: "Everything about Cryptox on a single page: what it is, why it matters, how to join.",
      sections: [
        { heading: "What is Cryptox?", text: "A smarter platform for ICO crypto currency, built around clear information, secure wallets and live sale data." },
        { heading: "Why it matters", bullets: ["Transparent token sale details", "Secure and easy to use", "Support when you need it"] },
        { heading: "How to join", bullets: ["Create a Cryptox wallet", "Choose BTC, ETH or LTC", "Buy ICC tokens in the sale panel"] },
      ],
    },
    {
      icon: "award", title: "Certificate",
      desc: "Compliance and security credentials held by the Cryptox platform.",
      sections: [
        { heading: "Platform credentials", text: "Cryptox follows industry practice for protecting user funds and personal data, and publishes the results of independent reviews." },
        { heading: "Covered areas", bullets: ["Smart contract and wallet security review", "Data protection and privacy practices", "Know-your-customer and anti-money-laundering checks"] },
        { heading: "Verification", text: "Contact support@example.com to request the full certificate pack or to verify a credential." },
      ],
    },
  ],
};

export const partners = {
  tag: "Partners",
  title: "Our Awesome Partners",
  // Placeholder names - swap for real partner logos in /public.
  names: ["Nexora", "Vaultly", "Hashline", "Orbitex", "Blockwave", "Minted", "Ledgerly", "Coinforge"],
};

export const faq = {
  tag: "FAQ's",
  title: "General Asked Questions",
  tabs: {
    General: [
      { q: "Do I Need A Business Plan ?", a: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire." },
      { q: "How Long Should A Business Plan Be ?", a: "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour." },
      { q: "What Payment Gateway You Support ?", a: "We accept ETH, BTC and LTC. More payment options will be added after the public sale begins." },
    ],
    Token: [
      { q: "How Many Tokens Are Available ?", a: "The total supply is 700,000,000 ICC, and 250,000,000 ICC are allocated for the ICO." },
      { q: "What Is The Minimum Purchase ?", a: "The minimum amount is 20 ETH, BTC or LTC per contribution." },
      { q: "Which Currencies Can I Pay With ?", a: "You can pay with ETH, BTC or LTC at the live exchange rate shown in the sale panel." },
    ],
    Bitcoin: [
      { q: "What Is The Bitcoin Rate ?", a: "At the moment 1 BTC = 3000 ICC. The rate is shown on the token sale panel." },
      { q: "Can I Buy With Bitcoin Only ?", a: "No. Ethereum and Litecoin are also supported for every purchase." },
      { q: "How Long Does A Transfer Take ?", a: "Transfers confirm after the network completes its block confirmations." },
    ],
    Crypto: [
      { q: "Is My Wallet Safe ?", a: "Your wallet is protected by multi-layer security, and we never store your private keys." },
      { q: "Where Can I Trade ICC ?", a: "ICC will be listed on partner exchanges after the platform launch." },
      { q: "Do You Offer Price Alerts ?", a: "Yes. Turn on price notifications inside the Cryptox app." },
    ],
  },
};

export const ratings = {
  tag: "Our rating",
  title: "Check Our Popularity",
  items: [
    { name: "Coin Mart", score: 5.0 },
    { name: "ICO Mart", score: 4.0 },
    { name: "Crypto Box", score: 5.0 },
    { name: "Bit Max", score: 4.5 },
    { name: "ICO Rater", score: 5.0 },
    { name: "Coin Rank", score: 4.5 },
  ],
};

export const contact = {
  tag: "Get in touch",
  title: "Send Message",
  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  address: "25/B Milford Road, New York, USA",
  phone: "+2 123 654 7898",
  phoneHref: "tel:+21236547898",
  email: "support@example.com",
};

export const footer = {
  text: "We are many variations of passages available but the majority have suffered alteration in some form by injected humour.",
  company: ["About Us", "Latest Blog", "Terms Of Service", "Privacy Policy", "Team Members"],
  quick: ["Contact Us", "FAQ's", "Token Sale", "Help Center", "Live Chat"],
  newsletter: "Subscribe Our Newsletter To Get Latest Update And News, Stay Connected With Us.",
};
