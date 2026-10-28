import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, 
  ShoppingBag, 
  Search, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowUpRight,
  CheckCircle,
  Cake,
  Clapperboard,
  Sparkles,
  Ticket,
  Heart
} from 'lucide-react';

// --- BONTIS CINEMA LOGO (CONTI'S BAKESHOP INSPIRED EMBLEM) ---
function BontisLogo({ className = "h-12" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Oval Crest Icon in Conti's Green & White with Gold Trim */}
      <svg 
        viewBox="0 0 200 130" 
        className="h-full w-auto drop-shadow-[0_2px_10px_rgba(0,106,78,0.4)]"
      >
        <defs>
          <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00523C" />
            <stop offset="50%" stopColor="#006A4E" />
            <stop offset="100%" stopColor="#003D2B" />
          </linearGradient>
          <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="100%" stopColor="#C59B27" />
          </linearGradient>
        </defs>

        {/* Outer Gold Ring */}
        <ellipse cx="100" cy="65" rx="95" ry="60" fill="url(#goldBorder)" />
        {/* Inner Emerald Oval */}
        <ellipse cx="100" cy="65" rx="90" ry="55" fill="url(#emeraldGrad)" stroke="#FFFFFF" strokeWidth="3" />
        {/* Decorative Scallop Dots */}
        <circle cx="20" cy="65" r="2.5" fill="#F5D061" />
        <circle cx="180" cy="65" r="2.5" fill="#F5D061" />

        {/* Cursive "Bontis" Script */}
        <text 
          x="100" 
          y="72" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontFamily="Georgia, 'Times New Roman', serif" 
          fontStyle="italic" 
          fontWeight="bold" 
          fontSize="46"
          letterSpacing="-1"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
        >
          Bontis
        </text>

        {/* Decorative Ribbon/Line under Script */}
        <path d="M 45 80 Q 100 95 155 80" stroke="#F5D061" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <polygon points="100,89 95,95 105,95" fill="#F5D061" />
      </svg>

      {/* Typography side */}
      <div className="flex flex-col">
        <span className="font-serif italic font-extrabold text-2xl sm:text-3xl text-emerald-400 leading-none tracking-tight">
          Bontis
        </span>
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-amber-200/90 font-bold uppercase mt-0.5">
          CINEMA & BAKERY
        </span>
      </div>
    </div>
  );
}

// --- MOCK DATA FOR BONTIS FILMS ---
const FILMS_DATA = [
  {
    id: 'bf1',
    title: 'How To Lose Your Blues',
    director: 'Bontis Studio / Majika Studios',
    year: '2026',
    genre: 'Documentary / Friendship / Love / Happy',
    rating: 'PG',
    runtime: '1h 42m',
    featured: true,
    tagline: 'Happy Birthday Josh!',
    synopsis: '',
    cast: ['Joshua Roda', 'Margaret Fermin', 'Isla Ang', 'Harry Pascual', 'Noel Nebres'],
    poster: 'https://media.discordapp.net/attachments/805698030783299605/1564915340952207430/Pink_Cityscape_Buildings_Movie_Poster_1.png?ex=6ae3007c&is=6ae1aefc&hm=ab7087029d8ce6f94b5f89eb19aef4ed8ae6d7c08fd4eade582dc576999f5c8e&=&format=webp&quality=lossless&width=724&height=1024',
    banner: 'https://media.discordapp.net/attachments/805698030783299605/1564915340952207430/Pink_Cityscape_Buildings_Movie_Poster_1.png?ex=6ae3007c&is=6ae1aefc&hm=ab7087029d8ce6f94b5f89eb19aef4ed8ae6d7c08fd4eade582dc576999f5c8e&=&format=webp&quality=lossless&width=724&height=1024',
    trailerUrl: 'https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1',
    accolades: 'Official Selection - Majika Studios',
    merchIds: ['bm1', 'bm5']
  },
  {
    id: 'bf2',
    title: 'CHIIKAWA THE MOVIE: THE SECRET OF MERMAID ISLAND',
    director: 'Tomohiro Kawamura',
    year: '2025',
    genre: 'Anime / Fantasy / Suspense',
    rating: 'PG',
    runtime: '1h 42m',
    featured: true,
    tagline: 'Small heroes. Deep sea secrets.',
    synopsis: 'Chiikawa, Hachiware, and Usagi embark on a tropical expedition to a mysterious island in search of a legendary mermaid cake recipe, only to uncover dark culinary horrors and ancient sea guardians lurking in the shadows.',
    cast: ['Yuka Shinto', 'Makoto Tanaka', 'Ari Ozawa', 'Armor-san'],
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZciqha-SSybAXne3cfUHor4e08VQF2Dq-cG06dmlC2vsZOR9JEVoT50Y&s=10',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZciqha-SSybAXne3cfUHor4e08VQF2Dq-cG06dmlC2vsZOR9JEVoT50Y&s=10',
    trailerUrl: 'https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1',
    accolades: 'Official Selection - Tokyo Anime Film Festival',
    merchIds: ['bm1', 'bm5']
  },
  {
    id: 'bf3',
    title: 'ETERNITY',
    director: 'David Freyne',
    year: '2025',
    genre: 'Romance / Fantasy / Drama',
    rating: 'PG-13',
    runtime: '1h 58m',
    featured: true,
    tagline: 'In the afterlife, love is a permanent decision.',
    synopsis: 'In an ethereal afterlife where everyone must choose a single age to spend for eternity, two soulmates face an impossible decision: remain forever in their youth or choose to age together through endless lifetimes.',
    cast: ['Elizabeth Olsen', 'Miles Teller', 'Callum Turner'],
    poster: 'https://m.media-amazon.com/images/M/MV5BNzlmZTNiOTAtNzhlOC00ZTA1LWJhNTgtMDQ4YmY4NWIyNTA4XkEyXkFqcGc@._V1_.jpg',
    banner: 'https://m.media-amazon.com/images/M/MV5BNzlmZTNiOTAtNzhlOC00ZTA1LWJhNTgtMDQ4YmY4NWIyNTA4XkEyXkFqcGc@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/V6wWKNij_fc?autoplay=1',
    accolades: 'A24 & Bontis Studio Premiere Co-Production',
    merchIds: ['bm2', 'bm4']
  },
  {
    id: 'bf4',
    title: 'WICKED & WICKED: FOR GOOD',
    director: 'Jon M. Chu',
    year: '2024 - 2025',
    genre: 'Musical / Epic Fantasy',
    rating: 'PG',
    runtime: '2h 40m',
    featured: true,
    tagline: 'Every story has a beginning. Every legend has a destiny.',
    synopsis: 'The untold story of the witches of Oz: Elphaba, a misunderstood young woman born with emerald-green skin, and Glinda, a popular blonde royal. Their unlikely friendship transforms into an epic journey across Oz, standing against the Wizard’s corruption.',
    cast: ['Cynthia Erivo', 'Ariana Grande', 'Jonathan Bailey', 'Jeff Goldblum'],
    poster: 'https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_.jpg',
    banner: 'https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/6COmYeLsz4c?autoplay=1',
    accolades: 'Academy Award® Nominee for Best Visual Effects & Costume Design',
    merchIds: ['bm4', 'bm6']
  },
  {
    id: 'bf5',
    title: 'EVERYTHING EVERYWHERE ALL AT ONCE',
    director: 'Daniel Kwan, Daniel Scheinert',
    year: '2022',
    genre: 'Sci-Fi / Action / Comedy',
    rating: 'R',
    runtime: '2h 19m',
    featured: true,
    tagline: 'The universe is bigger than you think.',
    synopsis: 'An overworked Chinese-American laundromat owner is swept into an insane multiversal adventure where she must channel powers from parallel universe versions of herself to save reality from an all-consuming bagel.',
    cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu', 'Jamie Lee Curtis'],
    poster: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    banner: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1',
    accolades: '7 Academy Awards® Winner Including Best Picture',
    merchIds: ['bm1', 'bm5']
  },
  {
    id: 'bf6',
    title: 'CRAZY RICH ASIANS',
    director: 'Jon M. Chu',
    year: '2018',
    genre: 'Romantic Comedy / Drama',
    rating: 'PG-13',
    runtime: '2h 00m',
    featured: false,
    tagline: 'The only thing craziness than their love is her family.',
    synopsis: 'An Asian-American professor travels to Singapore with her boyfriend to attend his best friend\'s wedding, only to discover that her partner comes from an extremely wealthy family and is one of the country\'s most eligible bachelors.',
    cast: ['Constance Wu', 'Henry Golding', 'Michelle Yeoh', 'Gemma Chan', 'Awkwafina'],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg',
    banner: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/ZQ-YX-5bAs0?autoplay=1',
    accolades: 'Golden Globe Nominee for Best Motion Picture - Musical or Comedy',
    merchIds: ['bm1']
  },
];

// --- MERCH & PASTRY DATA ---
const MERCH_DATA = [
  
  {
    id: 'bm1',
    title: 'Prince Charming and His Wives',
    film: 'Magi Josh: The Musical',
    category: 'Merch & Accessories',
    price: 34,
    image: 'https://media.discordapp.net/attachments/805698030783299605/1564905115524010105/869616521_1112465454524941_5287965298442416341_n.png?ex=6ae2f6f6&is=6ae1a576&hm=297285bec91fc7ed9cbaa12952a14be24cf57d04e7d3f29263b825423307c93e&=&format=webp&quality=lossless&width=576&height=768',
    description: 'The perfect boy for a girl.',
    stock: 'In Stock',
    limited: true
  },
  {
    id: 'bm2',
    title: 'Gaming Pair',
    film: 'Marvel Rivals: The Duo',
    category: 'Home & Collectibles',
    price: 29,
    image: 'https://media.discordapp.net/attachments/805698030783299605/1564905712268869663/867630179_1462154639368578_7220710600999146258_n.png?ex=6ae2f784&is=6ae1a604&hm=4e39a3bee5d39f4b8c7239c710a11060191671e7a535ba3607db1304e8da39be&=&format=webp&quality=lossless&width=200&height=384',
    description: 'Settphel: Talks alot and muted.',
    stock: 'Low Stock',
    limited: false
  },
  {
    id: 'bm3',
    title: 'The Empanada CEO',
    film: 'True North: Empanada',
    category: 'Books & Screenplays',
    price: 58,
    image: 'https://media.discordapp.net/attachments/805698030783299605/1564905316943138856/IMG_6257.jpg?ex=6ae2f726&is=6ae1a5a6&hm=2297f15f6964668622009cb2de12f223ff88c357ffc82cdb47eb30bef1c5d2cb&=&format=webp&width=216&height=384',
    description: 'Ang sarap ng True North Empanada, bili na kayo!',
    stock: 'In Stock',
    limited: true
  },
  {
    id: 'bm4',
    title: 'The Model and The Managers',
    film: 'BONTIS STUDIO ORIGINALS',
    category: 'Apparel',
    price: 88,
    image: 'https://media.discordapp.net/attachments/805698030783299605/1564906228524650536/867336388_2089402725017138_5411506997388870141_n.png?ex=6ae2f7ff&is=6ae1a67f&hm=b762010aee8dad4dd255847bacc8df583caaea116a17edbd77cee77299a10d77&=&format=webp&quality=lossless&width=258&height=384',
    description: 'ANG GANDA ANG POGI',
    stock: 'In Stock',
    limited: false
  },
];

// --- JOURNAL ARTICLES ---
const JOURNAL_ARTICLES = [
  {
    id: 'bj1',
    title: 'From Gru-Po to Bontis Bakeshop & Cinema: How Did The Company Marketed Their Successful Rebranding?',
    author: 'Maggie',
    date: 'OCTOBER 28, 2026',
    category: 'Behind The Lens',
    snippet: 'How the minds think.',
    readTime: '7 min read'
  },
  {
    id: 'bj2',
    title: 'Bontis Bakeshop Fighting Against The Rise Of AI',
    author: 'Harry',
    date: 'OCTOBER 28, 2026',
    category: 'Film & Food Analysis',
    snippet: 'In this modern world with the rise of technology, Bontis Bakeshop is fighting against the rise of AI in the industry.',
    readTime: '9 min read'
  },
  {
    id: 'bj3',
    title: 'THE RISE OF BONTIS ORIGINALS',
    author: 'Kael',
    date: 'OCTOBER 28, 2026',
    category: 'Director Interviews',
    snippet: 'An exclusive conversation on tension building, eerie silence, and symbolist confectionery in Bontis Bakeshop.',
    readTime: '12 min read'
  },
  {
    id: 'bj4',
    title: 'From Singing to Gaming: How is it Done Right?',
    author: 'Noel',
    date: 'OCTOBER 28, 2026',
    category: 'Bontis Originals',
    snippet: 'The creative journey of Bontis Studio\'s multi-talented artists and their transition from singing to gaming.',
    readTime: '6 min read'
  }
];

export default function App() {
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState('ALL'); // ALL, FILMS, SHOP, JOURNAL
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  // Hero Carousel logic
  const featuredFilms = useMemo(() => FILMS_DATA.filter(f => f.featured), []);
  const [heroIndex, setHeroIndex] = useState(0);

  // Modals & Drawers
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [activeTrailerUrl, setActiveTrailerUrl] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Cart State
  const [cartItems, setCartItems] = useState([
    { ...MERCH_DATA[0], quantity: 1 },
    { ...MERCH_DATA[3], quantity: 1 }
  ]);

  // Auto Hero Slider
  useEffect(() => {
    if (activeTrailerUrl || selectedFilm) return;
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % featuredFilms.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [featuredFilms.length, activeTrailerUrl, selectedFilm]);

  // Cart Actions
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Filter Logic
  const filteredFilms = useMemo(() => {
    return FILMS_DATA.filter(film => {
      const matchesSearch = film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            film.genre.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'ALL' || film.genre.toLowerCase().includes(selectedGenre.toLowerCase());
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  const filteredMerch = useMemo(() => {
    return MERCH_DATA.filter(item => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.film.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.category.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const activeHero = featuredFilms[heroIndex] || featuredFilms[0];

  return (
    <div className="min-h-screen bg-[#070c0a] text-stone-100 font-sans selection:bg-[#006A4E] selection:text-white antialiased">
      
      {/* --- TOP BRAND ANNOUNCEMENT BAR --- */}
      <div className="bg-[#003d2d] border-b border-[#005740] px-4 py-2 text-xs font-mono tracking-widest text-center uppercase flex justify-center items-center gap-3 text-amber-200">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>BONTIS CINEMA & BAKERY — EXCLUSIVE SCREENINGS & PASTRY MERCH</span>
        <span className="hidden sm:inline text-[#006A4E]">|</span>
        <button 
          onClick={() => { setActiveTab('SHOP'); }}
          className="underline hover:text-white transition-colors uppercase hidden sm:inline"
        >
          Browse Limited Bakery Drops
        </button>
      </div>

      {/* --- HEADER / NAVIGATION WITH CONTI'S EMBLEM --- */}
      <header className="sticky top-0 z-40 bg-[#070c0a]/95 backdrop-blur-md border-b border-[#004e39]/60 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-4">
          
          {/* Brand Logo Header */}
          <div className="flex items-center gap-10">
            <button 
              onClick={() => { setActiveTab('ALL'); setSearchQuery(''); }} 
              className="text-left group focus:outline-none flex items-center"
            >
              <BontisLogo className="h-14 sm:h-16" />
            </button>

            {/* Navigation Bar */}
            <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-widest uppercase">
              {['ALL', 'FILMS', 'SHOP', 'JOURNAL'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSelectedGenre('ALL'); }}
                  className={`relative py-2 transition-all ${
                    activeTab === tab 
                      ? 'text-amber-300 font-bold' 
                      : 'text-stone-400 hover:text-emerald-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-emerald-400 rounded-full shadow-[0_0_8px_#006A4E]"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3 text-emerald-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies, merch, directors..."
                className="w-36 sm:w-64 bg-[#0d1613] border border-[#005740] focus:border-emerald-400 rounded-none pl-9 pr-8 py-2 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 text-stone-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 bg-[#004e39] border border-emerald-600/60 hover:bg-[#006A4E] transition-all text-white shadow-md flex items-center justify-center group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform text-amber-200" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-stone-950 font-mono font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-around border-t border-[#004e39]/60 py-2.5 bg-[#09120e] px-2 text-[11px] font-mono uppercase tracking-wider">
          {['ALL', 'FILMS', 'SHOP', 'JOURNAL'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedGenre('ALL'); }}
              className={`px-3 py-1 ${activeTab === tab ? 'bg-[#006A4E] text-amber-200 font-bold border border-emerald-500' : 'text-stone-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* --- HERO CAROUSEL SECTION --- */}
      {activeTab === 'ALL' && !searchQuery && (
        <section className="relative w-full h-[70vh] sm:h-[80vh] min-h-[520px] bg-[#070c0a] overflow-hidden border-b border-[#004e39]">
          {/* Background Image Banner */}
          <div className="absolute inset-0 transition-opacity duration-1000">
            <img 
              src={activeHero.banner} 
              alt={activeHero.title} 
              className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-90 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c0a] via-[#070c0a]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#070c0a] via-transparent to-[#070c0a]/50"></div>
          </div>

          {/* Hero Content Overlay */}
          <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20">
            <div className="max-w-3xl space-y-4">
              
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-widest text-emerald-300">
                <span className="px-2.5 py-0.5 bg-[#004e39] text-amber-200 border border-emerald-500 font-bold uppercase">
                  BONTIS PREMIERE
                </span>
                <span>•</span>
                <span>{activeHero.genre}</span>
                <span>•</span>
                <span>{activeHero.year}</span>
              </div>

              {/* Title with Serif/Cursive Aesthetic */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-extrabold tracking-tight text-white uppercase leading-none text-shadow">
                {activeHero.title}
              </h1>

              <p className="text-amber-200/90 text-sm sm:text-base font-serif italic max-w-xl">
                "{activeHero.tagline}"
              </p>

              <p className="text-xs sm:text-sm text-stone-300 font-sans font-light line-clamp-2 max-w-2xl leading-relaxed">
                Directed by <span className="text-emerald-300 font-semibold">{activeHero.director}</span>. {activeHero.synopsis}
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTrailerUrl(activeHero.trailerUrl)}
                  className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-[#006A4E] hover:from-emerald-500 hover:to-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-widest border border-emerald-400/50 shadow-lg flex items-center gap-2.5 group transition-all"
                >
                  <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  Watch Trailer
                </button>

                <button
                  onClick={() => setSelectedFilm(activeHero)}
                  className="px-6 py-3.5 bg-[#0d1613] border border-[#005740] hover:border-emerald-400 text-stone-200 font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  View Details
                </button>
              </div>

            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-6 right-4 sm:right-8 flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 mr-2">
                0{heroIndex + 1} / 0{featuredFilms.length}
              </span>
              <button
                onClick={() => setHeroIndex((prev) => (prev - 1 + featuredFilms.length) % featuredFilms.length)}
                className="p-2.5 bg-[#0d1613] border border-[#005740] text-stone-300 hover:text-white hover:border-emerald-400 transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setHeroIndex((prev) => (prev + 1) % featuredFilms.length)}
                className="p-2.5 bg-[#0d1613] border border-[#005740] text-stone-300 hover:text-white hover:border-emerald-400 transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* --- MAIN CONTENT SECTION --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* --- FILMS GALLERY SECTION --- */}
        {(activeTab === 'ALL' || activeTab === 'FILMS') && (
          <section className="space-y-8">
            {/* Header & Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#004e39] pb-4 gap-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-1">
                  FILM RELEASES ({filteredFilms.length})
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif italic font-bold text-white tracking-tight uppercase flex items-center gap-3">
                  <Clapperboard className="w-7 h-7 text-emerald-500" />
                  CINEMA ARCHIVE
                </h2>
              </div>

              {/* Genre Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['ALL', 'Sci-Fi', 'Horror', 'Drama', 'Thriller'].map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-3 py-1.5 border transition-all uppercase ${
                      selectedGenre === genre
                        ? 'bg-[#006A4E] text-amber-200 font-bold border-emerald-400 shadow-md'
                        : 'bg-[#0d1613] text-stone-400 border-[#004e39] hover:border-emerald-500 hover:text-stone-200'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Films Grid */}
            {filteredFilms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFilms.map((film) => (
                  <div 
                    key={film.id}
                    className="group bg-[#0d1613] border border-[#004e39] hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg"
                    onClick={() => setSelectedFilm(film)}
                  >
                    {/* Film Poster Box */}
                    <div className="relative aspect-[2/3] overflow-hidden bg-stone-900">
                      <img 
                        src={film.poster} 
                        alt={film.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale-[15%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                        <button className="w-full py-3 bg-white text-stone-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg">
                          <Play className="w-4 h-4 fill-stone-950" />
                          View Preview & Info
                        </button>
                      </div>
                      <div className="absolute top-3 left-3 bg-[#070c0a]/90 backdrop-blur-sm border border-[#005740] px-2.5 py-1 text-[10px] font-mono tracking-widest text-amber-200">
                        {film.year}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-5 space-y-3 flex-grow flex flex-col justify-between border-t border-[#004e39]">
                      <div>
                        <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1">
                          {film.genre}
                        </div>
                        <h3 className="font-serif italic font-bold text-lg text-white group-hover:text-amber-200 transition-colors uppercase leading-tight">
                          {film.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[#003d2d] flex items-center justify-between text-xs font-mono text-stone-400">
                        <span className="truncate max-w-[170px]">Dir. {film.director}</span>
                        <ArrowUpRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-[#004e39] text-stone-500 font-mono text-sm">
                NO BONTIS FILMS FOUND MATCHING YOUR SEARCH.
              </div>
            )}
          </section>
        )}

        {/* --- SHOP / MERCH & PASTRY SECTION --- */}
        {(activeTab === 'ALL' || activeTab === 'SHOP') && (
          <section className="space-y-8 pt-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#004e39] pb-4 gap-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-1">
                  BONTIS STORE & EDITIONS ({filteredMerch.length})
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif italic font-bold text-white tracking-tight uppercase flex items-center gap-3">
                  <Cake className="w-7 h-7 text-amber-400" />
                  MERCH & BAKERY DROPS
                </h2>
              </div>
              <p className="text-xs font-mono text-stone-400 max-w-xs">
                Limited screenplay books, film gear, and cinema-inspired pastry merchandise.
              </p>
            </div>

            {/* Merch Grid */}
            {filteredMerch.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMerch.map((item) => (
                  <div 
                    key={item.id}
                    className="group bg-[#0d1613] border border-[#004e39] hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div className="relative aspect-square bg-stone-900 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.limited && (
                        <span className="absolute top-3 left-3 bg-amber-400 text-stone-950 font-mono text-[9px] font-bold px-2.5 py-0.5 uppercase tracking-widest shadow">
                          LIMITED DROPS
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-3 flex-grow flex flex-col justify-between border-t border-[#004e39]">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase">
                          {item.film} — {item.category}
                        </div>
                        <h3 className="font-serif italic font-bold text-lg text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-400 font-sans line-clamp-2 pt-1 font-light">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#003d2d] flex items-center justify-between">
                        <span className="text-xl font-mono font-bold text-amber-200">
                          ${item.price}.00
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2.5 bg-[#004e39] border border-emerald-500 hover:bg-[#006A4E] hover:text-amber-200 transition-colors text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 text-white shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-[#004e39] text-stone-500 font-mono text-sm">
                NO SHOP MERCHANDISE MATCHES YOUR SEARCH.
              </div>
            )}
          </section>
        )}

        {/* --- JOURNAL SECTION --- */}
        {(activeTab === 'ALL' || activeTab === 'JOURNAL') && (
          <section className="space-y-8 pt-6">
            <div className="border-b border-[#004e39] pb-4">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-1">
                EDITORIAL & ESSAYS
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic font-bold text-white tracking-tight uppercase">
                THE BONTIS JOURNAL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JOURNAL_ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  className="bg-[#0d1613] border border-[#004e39] p-6 flex flex-col justify-between hover:border-emerald-400 transition-all group shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg font-serif italic font-bold text-white group-hover:text-amber-200 transition-colors uppercase leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-sans leading-relaxed font-light">
                      {article.snippet}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between text-xs font-mono text-stone-500 border-t border-[#003d2d] mt-6">
                    <span>{article.readTime}</span>
                    <span className="text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Piece <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* --- MOVIE DETAIL MODAL --- */}
      {selectedFilm && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative bg-[#0d1613] border border-[#005740] max-w-4xl w-full my-8 overflow-hidden shadow-2xl">
            
            <button 
              onClick={() => setSelectedFilm(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-stone-950/80 border border-[#004e39] text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              <div className="md:col-span-5 bg-stone-900 relative">
                <img 
                  src={selectedFilm.poster} 
                  alt={selectedFilm.title} 
                  className="w-full h-full object-cover min-h-[380px]"
                />
              </div>

              <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-emerald-400">
                    <span className="px-2 py-0.5 bg-[#004e39] text-amber-200">{selectedFilm.rating}</span>
                    <span>•</span>
                    <span>{selectedFilm.year}</span>
                    <span>•</span>
                    <span>{selectedFilm.runtime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-serif italic font-extrabold uppercase text-white leading-none">
                    {selectedFilm.title}
                  </h2>

                  <p className="text-xs font-mono text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> {selectedFilm.accolades}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                    {selectedFilm.synopsis}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#003d2d]">
                    <div className="text-xs font-mono text-stone-400">
                      <span className="text-emerald-400 uppercase block mb-0.5">DIRECTOR</span>
                      <span className="text-stone-200">{selectedFilm.director}</span>
                    </div>

                    <div className="text-xs font-mono text-stone-400">
                      <span className="text-emerald-400 uppercase block mb-0.5">CAST</span>
                      <span className="text-stone-200">{selectedFilm.cast.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#003d2d] flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setActiveTrailerUrl(selectedFilm.trailerUrl);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-[#006A4E] hover:from-emerald-500 hover:to-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    Watch Trailer
                  </button>

                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="px-6 py-3 bg-[#070c0a] border border-[#004e39] text-stone-300 font-mono text-xs uppercase hover:border-emerald-400"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TRAILER VIDEO PLAYER MODAL --- */}
      {activeTrailerUrl && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black border border-[#004e39] shadow-2xl">
            <button
              onClick={() => setActiveTrailerUrl(null)}
              className="absolute -top-10 right-0 text-amber-200 hover:text-white font-mono text-xs uppercase tracking-widest flex items-center gap-1"
            >
              <X className="w-4 h-4" /> Close Video
            </button>
            <iframe
              src={activeTrailerUrl}
              title="Bontis Cinema Trailer"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- SHOPPING CART DRAWER --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          ></div>

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#09120e] border-l border-[#005740] p-6 flex flex-col justify-between shadow-2xl">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#004e39] pb-4">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-amber-300" />
                    <h2 className="text-lg font-serif italic font-bold uppercase tracking-wider text-white">
                      YOUR BONTIS BAG ({totalCartCount})
                    </h2>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 text-stone-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items */}
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-3 bg-[#0d1613] border border-[#004e39]">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-20 h-20 object-cover bg-stone-900 flex-shrink-0"
                        />
                        <div className="flex-grow space-y-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-serif italic font-bold text-white uppercase leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[10px] font-mono text-amber-200">
                              ${item.price}.00
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center border border-[#004e39] bg-[#070c0a]">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-2 py-0.5 text-stone-400 hover:text-white"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-mono text-white">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-2 py-0.5 text-stone-400 hover:text-white"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button 
                              onClick={() => updateQuantity(item.id, -item.quantity)}
                              className="text-stone-500 hover:text-rose-400 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-stone-500 font-mono text-xs uppercase tracking-wider">
                      YOUR SHOPPING BAG IS EMPTY.
                    </div>
                  )}
                </div>
              </div>

              {/* Checkout */}
              <div className="border-t border-[#004e39] pt-4 space-y-4">
                {checkoutSuccess ? (
                  <div className="p-4 bg-[#003d2d] border border-emerald-500 text-amber-200 font-mono text-xs text-center space-y-2">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto" />
                    <p className="font-bold">ORDER CONFIRMED!</p>
                    <p className="text-[10px] text-stone-300">
                      Thank you for supporting Bontis Cinema & Bakery drops.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between text-stone-400">
                        <span>SUBTOTAL</span>
                        <span>${cartTotal}.00</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span>ESTIMATED TAX</span>
                        <span>CALCULATED AT CHECKOUT</span>
                      </div>
                      <div className="flex justify-between text-amber-300 font-bold text-sm pt-2 border-t border-[#003d2d]">
                        <span>TOTAL</span>
                        <span>${cartTotal}.00</span>
                      </div>
                    </div>

                    <button
                      disabled={cartItems.length === 0}
                      onClick={() => {
                        setCheckoutSuccess(true);
                        setTimeout(() => {
                          setCartItems([]);
                          setCheckoutSuccess(false);
                          setIsCartOpen(false);
                        }, 3000);
                      }}
                      className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-[#006A4E] hover:from-emerald-500 hover:to-emerald-700 disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-widest shadow"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-[#050907] border-t border-[#004e39] py-16 px-4 sm:px-6 lg:px-8 font-mono text-xs text-stone-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <BontisLogo className="h-12" />
            <p className="text-stone-500 text-[11px] font-sans">
              Bontis Cinema & Bakery is an independent film distribution studio blending cinematic artistry with iconic pastry culture.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-amber-200 font-bold tracking-widest uppercase mb-3">NAVIGATION</h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => setActiveTab('FILMS')} className="hover:text-white transition-colors">FILM CATALOG</button></li>
              <li><button onClick={() => setActiveTab('SHOP')} className="hover:text-white transition-colors">SHOP PASTRY MERCH</button></li>
              <li><button onClick={() => setActiveTab('JOURNAL')} className="hover:text-white transition-colors">THE JOURNAL</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-amber-200 font-bold tracking-widest uppercase mb-3">DIRECTORY & LEGAL</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#privacy" className="hover:text-white transition-colors">PRIVACY & COOKIES</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">PRESS INQUIRIES</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-amber-200 font-bold tracking-widest uppercase mb-1">JOIN THE BONTIS CLUB</h4>
            <p className="text-stone-500 text-[11px] font-sans">
              Subscribe for exclusive ticket drops, film screenings, and limited bakery merch releases.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-[#0d1613] border border-[#004e39] px-3 py-2 text-xs text-white placeholder-stone-600 focus:outline-none w-full"
              />
              <button className="bg-[#006A4E] text-white px-4 font-bold hover:bg-emerald-500 transition-colors">
                →
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-[#003d2d] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-stone-600 text-[10px]">
          <p>© {new Date().getFullYear()} BONTIS CINEMA & BAKERY INC. ALL RIGHTS RESERVED. DEPLOYABLE READY FOR VERCEL.</p>
          <p>INSPIRED BY A24 CINEMA & CONTI'S BAKESHOP PHILIPPINES BRANDING.</p>
        </div>
      </footer>

    </div>
  );
}
