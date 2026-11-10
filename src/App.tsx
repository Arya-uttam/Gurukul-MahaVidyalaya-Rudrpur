import React, { useState } from 'react';
import {
  Menu, X, Phone, Award, Flame, BookOpen,
  UserCheck, HeartHandshake, UploadCloud, MapPin, Sparkles,
  ChevronRight, CheckCircle2, Shield, QrCode, Copy, Check,
  Share2, Eye, Download, Info
} from 'lucide-react';
import { WORLD_RECORDS, GURUKUL_NEEDS, INITIAL_GALLERY_PHOTOS, WorldRecord, GalleryPhoto } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<WorldRecord | null>(null);
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);

  // Admission Form State
  const [admissions, setAdmissions] = useState({
    studentName: '',
    fatherName: '',
    dob: '',
    desiredClass: '',
    mobile: '',
    state: '',
    prevSchool: '',
    address: '',
    agreeRules: false
  });
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  // Photo Gallery & Upload state
  const [gallery, setGallery] = useState<GalleryPhoto[]>(INITIAL_GALLERY_PHOTOS);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'yagya',
    session: '2025-2026',
    date: new Date().toISOString().split('T')[0],
    location: '',
    caption: '',
    uploader: '',
    imageUrl: ''
  });
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admissions.studentName || !admissions.fatherName || !admissions.mobile || !admissions.desiredClass) {
      return;
    }
    const token = 'GRK-2025-' + Math.floor(1000 + Math.random() * 9000);
    setSubmittedToken(token);
  };

  const handlePhotoUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title) return;

    const categoryLabels: Record<string, string> = {
      yagya: 'दैनिक देवयज्ञ',
      akhada: 'अखाड़ा व व्यायाम',
      classes: 'कम्प्यूटर व विज्ञान',
      gaushala: 'गौशाला सेवा',
      festival: 'वार्षिकोत्सव',
      acharyas: 'आचार्य उद्बोधन',
      campus: 'गुरुकुल परिसर'
    };

    // Default to a beautiful gurukul prayer image if none provided
    const img = newPhoto.imageUrl.trim() || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPXoma51UUIFX9atLVCJ3FvhfR1QbBofhjcfQG2qqUfVLI7Ee3VhuAlVFp9ejE4iUN8WzQXs7eX7RBFfsiisIYHYzQSVCLaUsmH06nUvKAssKaO9_7tKaDQPadNeg9iQEHMqyrzAvdw4rtW2VbeFJSlEXHf_lTBA8Pxhe30CW7M6yjrn9P8p2BwJco1Aa3-Xm2it6dI8MsJn9ETyBDFzSEpWLl1oXjoH9PNVxLsJ6qW0S3ybCK3KZk-k4vRp7tHqaBGr47f3xhuzwJjw';

    const newItem: GalleryPhoto = {
      id: 'photo-' + Date.now(),
      title: newPhoto.title,
      category: newPhoto.category,
      categoryLabel: categoryLabels[newPhoto.category] || 'गुरुकुल संकलन',
      imageUrl: img,
      session: newPhoto.session,
      date: newPhoto.date || 'हाल ही में',
      location: newPhoto.location || 'गुरुकुल परिसर, रुद्रपुर',
      uploader: newPhoto.uploader || 'आश्रम मीडिया',
      caption: newPhoto.caption || 'गुरुकुल पावन जीवन की संस्कारित छवि।'
    };

    setGallery([newItem, ...gallery]);
    setUploadSuccessMsg(true);
    setNewPhoto({
      title: '',
      category: 'yagya',
      session: '2025-2026',
      date: new Date().toISOString().split('T')[0],
      location: '',
      caption: '',
      uploader: '',
      imageUrl: ''
    });
    setTimeout(() => setUploadSuccessMsg(false), 5000);
  };

  const filteredGallery = activeCategoryFilter === 'all'
    ? gallery
    : gallery.filter(p => p.category === activeCategoryFilter);

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#231916] flex flex-col font-sans selection:bg-[#a43700] selection:text-white">
      {/* Top Banner Ticker */}
      <div className="w-full bg-[#a43700] text-white py-2 px-4 md:px-8 text-xs md:text-sm font-medium z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#b51a1b] text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">सूचना</span>
            <span className="truncate">सत्र 2025-26 प्रवेश प्रारम्भ: कक्षा 1 से 12, शास्त्री (B.A.) एवं आचार्य (M.A.) | सीमित सीटें उपलब्ध</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold">
            <a href="tel:+919509538982" className="flex items-center gap-1 hover:text-[#ffe088] transition-colors">
              <Phone className="w-3.5 h-3.5" /> आचार्य उत्तम आर्य: +91 95095 38982
            </a>
            <span className="text-[#ffdbcf]">•</span>
            <a href="tel:+919104062470" className="flex items-center gap-1 hover:text-[#ffe088] transition-colors">
              <Phone className="w-3.5 h-3.5" /> आचार्य प्रणव आर्य: +91 91040 62470
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#fff8f6]/95 backdrop-blur-md border-b border-[#e3bfb2] shadow-[0_1px_8px_rgba(44,34,30,0.06)]">
        {/* Top Affiliations sub-header */}
        <div className="hidden md:block bg-[#f7e4de] border-b border-[#e3bfb2]/60 py-1 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-medium text-[#5a4138]">
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-wider font-bold text-[#8f7066]">मान्यता व सम्बद्धता:</span>
              <span className="text-[#a43700] font-semibold">UP Basic Shiksha Parishad</span>
              <span>•</span>
              <span className="text-[#a43700] font-semibold">UP Sanskrit Shiksha Parishad Lucknow</span>
              <span>•</span>
              <span className="text-[#a43700] font-semibold">Sampurnanand Sanskrit Vishwavidyalaya Varanasi</span>
            </div>
            <div className="flex items-center gap-1 text-[#8f7066]">
              <MapPin className="w-3.5 h-3.5 text-[#a43700]" />
              <span>रुद्रपुर, डाकघर-तिलहर, शाहजहाँपुर (उ.प्र.)</span>
            </div>
          </div>
        </div>

        {/* Primary Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="p-0.5 bg-[#fdeae3] rounded-full border border-[#a43700]/30 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VPl_gMCwZruxfRVQ9w9mzAlde3oSlMDOu70o8Jyug-eAv_3tXiSa1xoJtJQksDTJ9cr8nwxA5ctanWBhNdEGi_UZGzxdAwK72ZiV0SuekJD5IseXsqpDaAFGEvtGZXTOZeel-7LKvIn_rwW6effSBoDXY_rR2jTFJWiCOPJF2ghgnfhpPf9lg2auDzhIDf2xmn4Hlr61BqvrHle0a8I7oP1gKzhdf63AawEGKC0Jfs7afdNDFO1h3IFXY"
                alt="गुरुकुल लोगो"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-devanagari text-lg sm:text-xl font-bold text-[#a43700] leading-tight">
                गुरुकुल स्नातकोत्तर महाविद्यालय
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#5a4138] uppercase">
                Rudrapur, Tilhar • Estd. Vedic Heritage
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 font-medium text-sm text-[#231916]">
            <a href="#home" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] text-[#a43700] font-semibold transition-colors">गृहम्</a>
            <a href="#about" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">परिचय</a>
            <a href="#acharyas" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">आचार्य मण्डल</a>
            <a href="#sports-akhada" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">व्यायाम व अखाड़ा</a>
            <a href="#records" className="px-3 py-1.5 rounded-lg bg-[#fff1ec] text-[#a43700] font-bold border border-[#a43700]/30 flex items-center gap-1 shadow-sm hover:bg-[#fdeae3] transition-colors">
              <Award className="w-4 h-4 text-[#a43700]" /> विश्व कीर्तिमान
            </a>
            <a href="#routine-yagya" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">दिनचर्या व यज्ञ</a>
            <a href="#curriculum" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">पाठ्यक्रम</a>
            <a href="#admissions" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] text-[#b51a1b] font-bold transition-colors">प्रवेश</a>
            <a href="#photo-upload" className="px-3 py-1.5 rounded-lg bg-[#a43700] text-white font-semibold flex items-center gap-1 shadow-sm hover:bg-[#cd4700] transition-colors">
              <UploadCloud className="w-4 h-4" /> फोटो जोड़ें
            </a>
            <a href="#sahyog" className="px-3 py-1.5 rounded-lg bg-[#b51a1b] text-white font-semibold flex items-center gap-1 shadow-sm hover:bg-[#d93630] transition-colors">
              <HeartHandshake className="w-4 h-4" /> सहयोग व दान
            </a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg hover:bg-[#fdeae3] transition-colors">सम्पर्क</a>
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="tel:+919509538982"
              className="px-3.5 py-2 rounded-lg bg-[#b51a1b] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm hover:bg-[#d93630] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Admissions Hotline</span>
            </a>
            <a
              href="#admissions"
              className="px-4 py-2 rounded-lg bg-[#a43700] text-white font-semibold text-xs flex items-center gap-1 shadow-sm hover:bg-[#cd4700] transition-all"
            >
              <span>प्रवेश विवरण</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#231916] hover:bg-[#fdeae3] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#fff8f6] border-b border-[#e3bfb2] px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4">
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#home"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3] text-[#a43700]"
            >
              गृहम् (Home)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#about"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              परिचय (About)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#acharyas"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              आचार्य मण्डल
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#sports-akhada"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              व्यायाम व अखाड़ा
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#records"
              className="block px-3 py-2 rounded-lg font-bold text-[#a43700] bg-[#fff1ec] border border-[#a43700]/30"
            >
              🏆 १० विश्व कीर्तिमान (World Records)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#routine-yagya"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              दिनचर्या व यज्ञ
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#curriculum"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              पाठ्यक्रम (Curriculum)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#admissions"
              className="block px-3 py-2 rounded-lg font-bold text-[#b51a1b] hover:bg-[#fdeae3]"
            >
              प्रवेश आवेदन (Admissions Open)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#photo-upload"
              className="block px-3 py-2 rounded-lg font-semibold bg-[#a43700] text-white"
            >
              📷 छायाचित्र जोड़ें (Photo Studio)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#sahyog"
              className="block px-3 py-2 rounded-lg font-semibold bg-[#b51a1b] text-white"
            >
              सहयोग व दान (80G Tax-Free)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#contact"
              className="block px-3 py-2 rounded-lg font-medium hover:bg-[#fdeae3]"
            >
              सम्पर्क व स्थान
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* SECTION 1: HERO & INSTITUTIONAL IDENTITY (#home) */}
        <section id="home" className="relative w-full bg-gradient-to-b from-[#fff8f6] via-[#fff1ec] to-[#fff8f6] py-12 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#e3bfb2]">
          {/* Subtle Glows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ffe088]/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Sacred Seal */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-[#cca72f]/30 blur-xl animate-pulse" />
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-[#735c00] via-[#a43700] to-[#b51a1b] shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbemSEenyLW4rEAbNcsod8pJu7B3ViB5knhnuDtHdVFeFqOyhEJTYfQDVdzjHdpEx0bcluVSHuvCqrnhllV1AfpZOJ5dpoKWq_sgBkzrsi6wAwDc4B0aECk8lYb7E7QTfljNaNvWTknOlPJ0F2qqIehX2alJ1_vkaQArrTzoAM2S7MNCrgbP_btpnYWdil-3vmAbKUENFqJQudRdLI2rcIPhFeEcrJieBbfchoxRtbYPvMgOdrB5i8"
                  alt="गुरुकुल मुद्रा सील"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover bg-white p-1 shadow-inner cursor-pointer"
                  onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida-public/AB6AXuBbemSEenyLW4rEAbNcsod8pJu7B3ViB5knhnuDtHdVFeFqOyhEJTYfQDVdzjHdpEx0bcluVSHuvCqrnhllV1AfpZOJ5dpoKWq_sgBkzrsi6wAwDc4B0aECk8lYb7E7QTfljNaNvWTknOlPJ0F2qqIehX2alJ1_vkaQArrTzoAM2S7MNCrgbP_btpnYWdil-3vmAbKUENFqJQudRdLI2rcIPhFeEcrJieBbfchoxRtbYPvMgOdrB5i8")}
                />
              </div>
            </div>

            {/* Vedic Motto Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#f7e4de] via-white to-[#f7e4de] border-2 border-[#a43700]/30 text-[#a43700] text-xs sm:text-sm font-bold mb-4 shadow-sm tracking-wider">
              <Sparkles className="w-4 h-4 text-[#cca72f]" />
              <span className="tracking-wide">विद्या ददाति विनयं विनयाद् याति पात्रताम्</span>
              <Sparkles className="w-4 h-4 text-[#cca72f]" />
            </div>

            {/* Main Institutional Heading */}
            <h1 className="font-serif-devanagari text-3xl sm:text-5xl md:text-6xl font-bold text-[#a43700] tracking-tight leading-tight max-w-4xl mb-3">
              गुरुकुल स्नातकोत्तर महाविद्यालय
            </h1>
            <p className="text-base sm:text-xl font-semibold text-[#b51a1b] tracking-wide mb-2">
              रुद्रपुर, डाकघर-तिलहर, जनपद-शाहजहाँपुर (उत्तर प्रदेश)
            </p>
            <p className="text-sm sm:text-base text-[#5a4138] max-w-2xl mb-8 leading-relaxed">
              संस्कार, शास्त्र एवं आधुनिक विज्ञान का संगम | Vedic Wisdom & Modern Academic Excellence
            </p>

            {/* Affiliations Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mb-10 text-center">
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[11px] uppercase tracking-wider text-[#b51a1b] font-bold block mb-1">
                  प्राथमिक विभाग (कक्षा 1-5)
                </span>
                <p className="text-base font-bold text-[#231916]">उत्तर प्रदेश बेसिक शिक्षा परिषद</p>
                <span className="text-xs text-[#5a4138] mt-1 block">प्रयागराज द्वारा मान्यता प्राप्त</span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[11px] uppercase tracking-wider text-[#a43700] font-bold block mb-1">
                  माध्यमिक विभाग (कक्षा 6-12)
                </span>
                <p className="text-base font-bold text-[#231916]">उ.प्र. संस्कृत शिक्षा परिषद</p>
                <span className="text-xs text-[#5a4138] mt-1 block">लखनऊ द्वारा विधिवत सम्बद्ध</span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[11px] uppercase tracking-wider text-[#735c00] font-bold block mb-1">
                  उच्च शिक्षा विभाग (शास्त्री B.A. व आचार्य M.A.)
                </span>
                <p className="text-base font-bold text-[#231916]">सम्पूर्णानन्द संस्कृत विश्वविद्यालय</p>
                <span className="text-xs text-[#5a4138] mt-1 block">वाराणसी द्वारा मान्यता प्राप्त</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
              <a
                href="#admissions"
                className="px-6 py-3 rounded-lg bg-[#a43700] text-white font-bold text-sm shadow-md hover:bg-[#cd4700] hover:shadow-lg transition-all flex items-center gap-2"
              >
                <UserCheck className="w-5 h-5" />
                <span>ऑनलाइन प्रवेश आवेदन 2025-26</span>
              </a>
              <a
                href="#sports-akhada"
                className="px-6 py-3 rounded-lg bg-white border border-[#e3bfb2] text-[#231916] font-semibold text-sm hover:bg-[#fdeae3] transition-all flex items-center gap-2 shadow-sm"
              >
                <Award className="w-5 h-5 text-[#a43700]" />
                <span>व्यायाम, मल्लखम्ब व अखाड़ा</span>
              </a>
              <a
                href="#routine-yagya"
                className="px-6 py-3 rounded-lg bg-white border border-[#e3bfb2] text-[#231916] font-semibold text-sm hover:bg-[#fdeae3] transition-all flex items-center gap-2 shadow-sm"
              >
                <Flame className="w-5 h-5 text-[#b51a1b]" />
                <span>दैनिक दिनचर्या व यज्ञ</span>
              </a>
            </div>

            {/* Featured Visual: Brahmachari Prayer Discipline */}
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-[#e3bfb2]">
              <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida-public/AB6AXuBPXoma51UUIFX9atLVCJ3FvhfR1QbBofhjcfQG2qqUfVLI7Ee3VhuAlVFp9ejE4iUN8WzQXs7eX7RBFfsiisIYHYzQSVCLaUsmH06nUvKAssKaO9_7tKaDQPadNeg9iQEHMqyrzAvdw4rtW2VbeFJSlEXHf_lTBA8Pxhe30CW7M6yjrn9P8p2BwJco1Aa3-Xm2it6dI8MsJn9ETyBDFzSEpWLl1oXjoH9PNVxLsJ6qW0S3ybCK3KZk-k4vRp7tHqaBGr47f3xhuzwJjw")}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPXoma51UUIFX9atLVCJ3FvhfR1QbBofhjcfQG2qqUfVLI7Ee3VhuAlVFp9ejE4iUN8WzQXs7eX7RBFfsiisIYHYzQSVCLaUsmH06nUvKAssKaO9_7tKaDQPadNeg9iQEHMqyrzAvdw4rtW2VbeFJSlEXHf_lTBA8Pxhe30CW7M6yjrn9P8p2BwJco1Aa3-Xm2it6dI8MsJn9ETyBDFzSEpWLl1oXjoH9PNVxLsJ6qW0S3ybCK3KZk-k4vRp7tHqaBGr47f3xhuzwJjw"
                  alt="गुरुकुल के संस्कारित ब्रह्मचारी - ध्यान मुद्रा एवं वैदिक साधना"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 md:p-8">
                  <div className="text-left text-white max-w-3xl">
                    <span className="px-3 py-1 bg-[#a43700] text-white text-[11px] font-bold rounded uppercase tracking-wider inline-block mb-2">
                      दैनिक प्रार्थना व सन्ध्या
                    </span>
                    <h2 className="font-serif-devanagari text-xl md:text-3xl font-bold text-white mb-1">
                      गुरुकुल के संस्कारित ब्रह्मचारी — प्रार्थना, संयम और अखण्ड अनुशासन
                    </h2>
                    <p className="text-xs md:text-sm text-gray-200">
                      परम पावन प्रातःकालीन वेदमंत्रों के सस्वर पाठ से आलोकित होता दिव्य गुरुकुल प्रांगण
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RESPECTED FOUNDERS & FORMER PRINCIPAL (#about) */}
        <section id="about" className="w-full bg-[#fff8f6] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffdad6] text-[#b51a1b] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>अमर प्रेरणापुंज एवं पावन ऋषि परम्परा</span>
              </div>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#a43700]">
                पूज्य संस्थापक एवं पूर्व प्राचार्य जी के पावन विचार एवं दिव्य संकल्प
              </h2>
              <div className="w-24 h-1 bg-[#b51a1b] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                स्वतंत्रता सेनानी पं. श्री सत्यदेव शास्त्री जी एवं प्रकांड संस्कृत विद्वान् स्मृति शेष डॉ. सूर्यदेव शास्त्री जी का पावन संदेश
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="bg-gradient-to-br from-white via-[#fff1ec] to-white rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#b51a1b]/30 border-l-8 border-l-[#b51a1b] flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 pb-6 border-b border-[#e3bfb2]">
                    <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#b51a1b] via-[#cca72f] to-[#a43700] shadow-xl shrink-0 ring-4 ring-[#b51a1b]/20">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6lubos79kPdVG7_sYjXef8KbYwH099NIdQrBhBANaNsitjX5-79pQuR9DgQocyLbin8qwUOYyBiJZ1XSa8g2Sjp1v17VxMKCNOoUwNOaezys7u_03xQh1eNW3If5M500Hr8LjABPVj1ttyi0kcj4g55_XREDHdFHtNUeSuPCLG5UWFZnig5Ho6ZNNOHamNwQW-3gmlTUyow-bNQLdNeztE7Erc-4XiE4gPHda_BpgVwqGCV1s5KpXYRK2o4TaFST3"
                        alt="पं. श्री सत्यदेव शास्त्री जी"
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-[#b51a1b] text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1">
                        <Award className="w-4 h-4" /> पूज्य संस्थापक
                      </div>
                      <h3 className="font-serif-devanagari text-xl sm:text-2xl font-bold text-[#231916]">
                        पं. श्री सत्यदेव शास्त्री जी
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#b51a1b] uppercase tracking-wider mt-0.5">
                        स्वतंत्रता संग्राम सेनानी एवं संस्थापक
                      </p>
                      <p className="text-xs text-[#5a4138] mt-1">
                        आर्य निष्ठा प्रचारक, त्याग व तपस्या के अग्रदूत
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-serif-devanagari text-[#a43700] text-sm sm:text-base italic leading-relaxed pl-4 border-l-4 border-[#b51a1b] bg-white/70 py-3 rounded-r-lg mb-4">
                    "यदि भारत को शाश्वत रूप से स्वतंत्र, स्वावलंबी और नैतिक रूप से अपराजेय रखना है, तो हमारी भावी पीढ़ी के हृदय में वेदों का ज्ञान, देह में ब्रह्मचर्य की वज्र शक्ति और आत्मा में मातृभूमि के प्रति सर्वस्व अर्पण की भावना प्रज्वलित होनी चाहिए। गुरुकुल मात्र विद्यालय नहीं, स्वाधीन राष्ट्र की आत्मा का रक्षा-दुर्ग है।"
                  </blockquote>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    पूज्य पंडित जी ने ब्रिटिश दासता के विरुद्ध स्वतंत्रता आंदोलन में कठोर कारावास सहे। उनका दृढ़ संकल्प था कि वैदिक संस्कृति और ब्रह्मचर्य की नींव पर ही समर्थ व स्वाधीन भारत का नव-निर्माण हो सकता है।
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e3bfb2] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#b51a1b] bg-[#ffdad6] px-3 py-1 rounded-full">
                    त्याग, तपस्या एवं राष्ट्रभक्ति
                  </span>
                  <span className="text-[#5a4138] font-semibold">गुरुकुल प्रतिष्ठापक</span>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-gradient-to-br from-white via-[#fff1ec] to-white rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#a43700]/30 border-l-8 border-l-[#a43700] flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 pb-6 border-b border-[#e3bfb2]">
                    <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#cca72f] via-[#a43700] to-[#b51a1b] shadow-xl shrink-0 ring-4 ring-[#a43700]/20">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSCTrLhpJy7xPNFxBZFtTBT1ym1K4GWh2gVPOy1UDyPvgkLgxu3ArPP31N0KqLwlLHqDnQ6UIo-CS2Al4ctg59TNCSzqnXzYx03GAyCD6NY2gbk43TIm3uxkaw58JDNrL4b0YmqxaWFVZt52muRcrZD5o_Hc1gjkK2tqsPpIbBD9pKvls2-6pfPRxQF37BvRz2t9c7T9Pn9hKduIWg1W_T5eMaFswN0t79bBsI66c"
                        alt="डॉ. सूर्यदेव शास्त्री जी"
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-[#a43700] text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1">
                        <BookOpen className="w-4 h-4" /> स्मृति शेष पूर्व प्राचार्य
                      </div>
                      <h3 className="font-serif-devanagari text-xl sm:text-2xl font-bold text-[#231916]">
                        डॉ. सूर्यदेव शास्त्री जी
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#a43700] uppercase tracking-wider mt-0.5">
                        पूर्व प्राचार्य, संस्कृत मूर्धन्य मनीषी
                      </p>
                      <p className="text-xs text-[#5a4138] mt-1">
                        पूज्य सत्यदेव शास्त्री जी के सुपुत्र एवं विनम्रता की प्रतिमूर्ति
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-serif-devanagari text-[#a43700] text-sm sm:text-base italic leading-relaxed pl-4 border-l-4 border-[#a43700] bg-white/70 py-3 rounded-r-lg mb-4">
                    "संस्कृत केवल भाषा नहीं, अपितु भारतीय आत्मा और ऋषियों के ज्ञान-विज्ञान का शाश्वत स्रोत है। व्याकरण की शुद्धि से वाणी और आचरण दोनों निर्मल होते हैं। गुरुकुल का प्रत्येक विद्यार्थी विद्या, विनम्रता एवं सेवाभाव से समाज का दीपक बने — यही हमारे जीवन का संकल्प है।"
                  </blockquote>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    संस्कृत व्याकरण के प्रकांड विद्वान्, अनन्य समाजसेवी एवं आजीवन गुरुकुलीय शिक्षा के उन्नायक डॉ. सूर्यदेव शास्त्री जी ने अपने पावन आचरण और निस्वार्थ साधना से सहस्रों ब्रह्मचारियों का जीवन संस्कारित किया।
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e3bfb2] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#a43700] bg-[#ffdbcf] px-3 py-1 rounded-full">
                    संस्कृत व्याकरण व सेवाभाव
                  </span>
                  <span className="text-[#5a4138] font-semibold">आदर्श विद्या-साधक</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#b51a1b] text-white flex items-center justify-center mx-auto mb-2 shadow">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231916]">स्वतंत्रता व राष्ट्र-रक्षा</h4>
                <p className="text-xs text-[#5a4138] mt-1">अमर सेनानी पूज्य सत्यदेव शास्त्री जी का पावन ध्येय</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#a43700] text-white flex items-center justify-center mx-auto mb-2 shadow">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231916]">पाणिनीय व्याकरण विद्वत्ता</h4>
                <p className="text-xs text-[#5a4138] mt-1">डॉ. सूर्यदेव शास्त्री जी की आर्ष विद्या-साधना</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#735c00] text-white flex items-center justify-center mx-auto mb-2 shadow">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231916]">विनम्रता व समाज-सेवा</h4>
                <p className="text-xs text-[#5a4138] mt-1">समर्पण, शुचिता एवं सेवाभाव की सजीव प्रतिमूर्ति</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#5a4138] text-white flex items-center justify-center mx-auto mb-2 shadow">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231916]">अखण्ड ब्रह्मचर्य परम्परा</h4>
                <p className="text-xs text-[#5a4138] mt-1">आदर्श वैदिक जीवनमूल्यों का निरंतर संवर्धन</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ACHARYA MANDAL & LEADERSHIP (#acharyas) */}
        <section id="acharyas" className="w-full bg-[#fff1ec] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#a43700] font-bold">
                ऋषि परम्परा के संवाहक
              </span>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#231916] mt-1">
                पूज्य आचार्य मण्डल एवं पावन मार्गदर्शन
              </h2>
              <div className="w-20 h-1 bg-[#cca72f] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                वेदों के प्रामाणिक ज्ञान, ब्रह्मचर्य की अखण्ड दीक्षा, मल्लयुद्ध व आधुनिक विज्ञान के समन्वय से राष्ट्र के श्रेष्ठ नागरिकों का निर्माण
              </p>
            </div>

            {/* Acharya Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Acharya Uttam Arya */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e3bfb2] flex flex-col md:flex-row">
                <div className="md:w-5/12 relative aspect-[3/4] md:aspect-auto">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBauoCjLw_WE3dncY6ALfO5tGaGfFEwWd10_UJ-FexzwoV3sbLbX_haYuYSPZb2HHKBIh9PVsvX1Gbfqat3f1Y4JpJicfBCPrFtWDJQJi6njYnvv8sOC7lIfL7FqstfTfly-jorEsdLpbTf4Y81CSrVTTy5hmav86OHyDUQ15ryJGxqdrdgEYU01q_tM3udvcy0pU5aOp1o1wGeYh_zABB99jytBg24G3aG5CQNfekA0KiT2_hsxW-A"
                    alt="पूज्य आचार्य उत्तम आर्य"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#b51a1b] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
                    विश्वकीर्तिमान धारक
                  </div>
                </div>
                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#a43700] mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[11px] uppercase font-bold tracking-wider">व्यवस्थापक व मुख्य मार्गदर्शक</span>
                    </div>
                    <h3 className="font-serif-devanagari text-xl sm:text-2xl font-bold text-[#231916]">
                      पूज्य आचार्य उत्तम आर्य
                    </h3>
                    <p className="text-xs font-bold text-[#b51a1b] mb-3">
                      राष्ट्रीय तथा विश्वकीर्तिमान धारक | वैदिक मनीषी
                    </p>
                    <blockquote className="bg-[#fff8f6] p-4 rounded-lg text-xs sm:text-sm text-[#5a4138] italic border-l-2 border-[#a43700] mb-3 leading-relaxed">
                      "गुरुकुल केवल एक अध्ययन शाला नहीं, अपितु जीवन निर्माण, ब्रह्मचर्य और आत्म-साधना की पवित्र तपोभूमि है। जब तक हमारी युवा पीढ़ी में वेदों का शाश्वत ज्ञान, अखाड़े का ओजस्वी शारीरिक बल, भारतीय संस्कृति का गौरव और चरित्र की अगाध पवित्रता एक साथ समन्वित नहीं होगी, तब तक न तो राष्ट्र सशक्त बन सकता है और न ही समग्र विश्व का कल्याण संभव है। हमारा परम ध्येय प्रत्येक ब्रह्मचारी को शस्त्र और शास्त्र दोनों में पारंगत बनाकर राष्ट्र व वैदिक धर्म के प्रति समर्पित तेजस्वी योद्धा व विद्वान बनाना है।"
                    </blockquote>
                    <div className="text-right text-xs font-bold text-[#a43700] mb-4">
                      — पूज्य आचार्य उत्तम आर्य <span className="text-[#5a4138] font-normal">(व्यवस्थापक)</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#e3bfb2] flex items-center justify-between">
                    <span className="text-xs text-[#5a4138]">संपर्क सूत्र:</span>
                    <a
                      href="tel:+919509538982"
                      className="text-sm font-bold text-[#a43700] hover:text-[#cd4700] flex items-center gap-1"
                    >
                      <Phone className="w-4 h-4" /> +91 95095 38982
                    </a>
                  </div>
                </div>
              </div>

              {/* Acharya Pranav Arya */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e3bfb2] flex flex-col md:flex-row">
                <div className="md:w-5/12 relative aspect-[3/4] md:aspect-auto">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQx2NaTjAHdq0aolSTSr3UjeP1-XNTqEKySJpxkFg2uS9v8-Vi116cAT-ITZMcrQb7W8S5fCCSJEBmUcw6HOuDuhcmDRj6cwvybZ5Pft6q6PrqQELJ1Ovx4ZPjt1sbNmMnJz4yyEEjAizTB5xqFGbvPSGuNDPBfsLOXUYkPAEnBTmyyuun8_gDnCjceRCk7K0gdlVMvlYmZk_VV9LtDaHvUx5Wf6RkDqohGPqI0Mg0OtrdFiinDKWkhKtdb-aKwumvIOwQyUkz53FCcA"
                    alt="पूज्य आचार्य प्रणव आर्य"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#a43700] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
                    योग-संस्कार प्रेरक
                  </div>
                </div>
                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#a43700] mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-[11px] uppercase font-bold tracking-wider">आचार्य एवं केन्द्र अध्यक्ष</span>
                    </div>
                    <h3 className="font-serif-devanagari text-xl sm:text-2xl font-bold text-[#231916]">
                      पूज्य आचार्य प्रणव आर्य
                    </h3>
                    <p className="text-xs font-bold text-[#a43700] mb-3">
                      वैदिक विद्वान एवं दर्शनाचार्य
                    </p>
                    <blockquote className="bg-[#fff8f6] p-4 rounded-lg text-xs sm:text-sm text-[#5a4138] italic border-l-2 border-[#b51a1b] mb-3 leading-relaxed">
                      "स्वावलम्बन, नम्रता, कठोर तपस्या और राष्ट्र-समर्पण ही सच्चे वैदिक ब्रह्मचारी के वास्तविक आभूषण हैं। हमारे विद्यार्थी सूर्योदय से पूर्व ब्रह्ममुहूर्त में जागकर, वेदमंत्रों के उद्घोष, नियमित योगाभ्यास व अखाड़ा-साधना से शरीर को वज्र-तुल्य फौलाद और मन को शांत, तेजस्वी एवं एकाग्र बनाते हैं। प्राचीन ऋषि-परंपरा का पावन संरक्षण करते हुए 21वीं सदी के विज्ञान, तकनीक और राष्ट्र-निर्माण में अग्रणी रहना ही हमारा पावन ध्येय है।"
                    </blockquote>
                    <div className="text-right text-xs font-bold text-[#a43700] mb-4">
                      — पूज्य आचार्य प्रणव आर्य <span className="text-[#5a4138] font-normal">(संचालक व व्यवस्थापक)</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#e3bfb2] flex items-center justify-between">
                    <span className="text-xs text-[#5a4138]">संपर्क सूत्र:</span>
                    <a
                      href="tel:+919104062470"
                      className="text-sm font-bold text-[#a43700] hover:text-[#cd4700] flex items-center gap-1"
                    >
                      <Phone className="w-4 h-4" /> +91 91040 62470
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="text-2xl sm:text-4xl font-serif-devanagari font-bold text-[#a43700]">लक्ष्य 500+</div>
                <div className="text-sm font-bold text-[#231916] mt-1">अध्येता ब्रह्मचारी</div>
                <div className="text-xs text-[#5a4138]">अनुशासित आवासीय छात्र</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="text-2xl sm:text-4xl font-serif-devanagari font-bold text-[#a43700]">120+</div>
                <div className="text-sm font-bold text-[#231916] mt-1">देशी गौवंश</div>
                <div className="text-xs text-[#5a4138]">गौशाला एवं A2 गोदुग्ध</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="text-2xl sm:text-4xl font-serif-devanagari font-bold text-[#b51a1b]">100%</div>
                <div className="text-sm font-bold text-[#231916] mt-1">नशामुक्त वातावरण</div>
                <div className="text-xs text-[#5a4138]">पूर्णतः सात्विक जीवनचर्या</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#e3bfb2] text-center shadow-sm">
                <div className="text-2xl sm:text-4xl font-serif-devanagari font-bold text-[#a43700]">12 विश्व</div>
                <div className="text-sm font-bold text-[#231916] mt-1">कीर्तिमान प्रतिष्ठा</div>
                <div className="text-xs text-[#5a4138]">योग व मल्लखम्ब में अग्रदूत</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SPORTS, MALLAKHAMBH & AKHADA (#sports-akhada) */}
        <section id="sports-akhada" className="w-full bg-[#fff8f6] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#b51a1b] font-bold">
                शरीरमाद्यं खलु धर्मसाधनम्
              </span>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#231916] mt-1">
                बल, वीर्य और ओज का संवर्धन: व्यायाम व अखाड़ा
              </h2>
              <div className="w-20 h-1 bg-[#b51a1b] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                गुरुकुल में केवल मानसिक ज्ञान ही नहीं, अपितु भारतीय पारंपरिक मल्लयुद्ध, अखाड़ा व्यायाम व मल्लखम्ब द्वारा वज्र-समान बलिष्ठ शरीर का निर्माण किया जाता है।
              </p>
            </div>

            {/* Split Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 border border-[#e3bfb2]">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida/AEtjO1W3kluIF4WBNkWyfVOottg6cjihdiSEghJN47zkNq6xW4xUZipNGiDW2CmNz4PoO2xEHxNTj28DEre88USlhl-Lh22A-Fbe9g0wRX_J8ybf-7Q9m7elPAjfy6jRP4YUBUkCSRIYFO-9Xi0atB0th66bBXfS1ZBNNAfCdQZj1I28INI4RzquSUVO4TCVUJdBY4icl3FhCOIieSx7YAPCZwX6r7c4FmjQ1zg1cKejo6Q")}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W3kluIF4WBNkWyfVOottg6cjihdiSEghJN47zkNq6xW4xUZipNGiDW2CmNz4PoO2xEHxNTj28DEre88USlhl-Lh22A-Fbe9g0wRX_J8ybf-7Q9m7elPAjfy6jRP4YUBUkCSRIYFO-9Xi0atB0th66bBXfS1ZBNNAfCdQZj1I28INI4RzquSUVO4TCVUJdBY4icl3FhCOIieSx7YAPCZwX6r7c4FmjQ1zg1cKejo6Q"
                    alt="प्रातःकालीन कुश्ती व मल्लखम्ब साधना"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-sm sm:text-base">प्रातःकालीन कुश्ती व मल्लखम्ब साधना</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 border border-[#e3bfb2]">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida/AEtjO1XCCgcVjyktmRRA0LBsna4_dIFyeTqEhoolAJ_r8DfQsn8cgDUKq42hfHmLv2Cswx3OluCkUVtOjVIhzKCtxnQGJxbhdFmPN7riHNaGBT_8yabEoRK7OJDIkLMtucDw3oF5YFCe0E9nlFEeHsZ0BtDHpcldu1ALq27jFIAsqTty-hJ0RL01NQq-VMJYhORtXNLKwqjGYN--gaYkwwTH7SSdYfGZ--MFy6dNtweIymHP")}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XCCgcVjyktmRRA0LBsna4_dIFyeTqEhoolAJ_r8DfQsn8cgDUKq42hfHmLv2Cswx3OluCkUVtOjVIhzKCtxnQGJxbhdFmPN7riHNaGBT_8yabEoRK7OJDIkLMtucDw3oF5YFCe0E9nlFEeHsZ0BtDHpcldu1ALq27jFIAsqTty-hJ0RL01NQq-VMJYhORtXNLKwqjGYN--gaYkwwTH7SSdYfGZ--MFy6dNtweIymHP"
                    alt="पवित्र अखाड़ा, माटी सेवा एवं दंड बैठक"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-sm sm:text-base">पवित्र अखाड़ा, माटी सेवा एवं दंड बैठक</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Akhada */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#b51a1b] text-white flex items-center justify-center mb-4 shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-2">मल्लखम्ब साधना</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    काष्ठ स्तंभ पर संतुलन, एकाग्रता और लचीलेपन का अद्वितीय अभ्यास। यह रीढ़ को लोचदार और संपूर्ण स्नायुतंत्र को अपराजेय शक्ति प्रदान करता है।
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#e3bfb2] text-xs font-bold text-[#b51a1b]">
                  दैनिक सायंकालीन सत्र
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#a43700] text-white flex items-center justify-center mb-4 shadow">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-2">देशी अखाड़ा व कुश्ती</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    मिट्टी का पवित्र अखाड़ा, दण्ड-बैठक (500 से 1000 दैनिक), मुगदर संचालन व पारम्परिक मल्लयुद्ध की तकनीकें जिससे वीर्य और ओज का रक्षण होता है।
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#e3bfb2] text-xs font-bold text-[#a43700]">
                  प्रातः 04:30 से 05:30
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#735c00] text-white flex items-center justify-center mb-4 shadow">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-2">अष्टांग योग व प्राणायाम</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    महर्षि पतंजलि प्रतिपादित यम, नियम, आसन और भस्त्रिका, कपालभाति, अनुलोम-विलोम प्राणायाम द्वारा फेफड़ों और मस्तिष्क को असीम ऊर्जा।
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#e3bfb2] text-xs font-bold text-[#735c00]">
                  षट्कर्म एवं सूर्य नमस्कार
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#5a4138] text-white flex items-center justify-center mb-4 shadow">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-2">लाठी व दण्ड-युद्ध</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                    पारंपरिक आत्मरक्षा, लाठी-संचालन और चक्रव्यूह भेदन कौशल। छात्रों में निडरता, त्वरित निर्णय लेने की क्षमता और रक्षात्मक सामर्थ्य का विकास।
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#e3bfb2] text-xs font-bold text-[#5a4138]">
                  आत्मरक्षा प्रशिक्षण
                </div>
              </div>
            </div>

            {/* Gau Seva & Nutrition Callout */}
            <div className="w-full bg-[#fdeae3] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#a43700]/30 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#a43700] text-white flex items-center justify-center shrink-0 shadow">
                  <Flame className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif-devanagari text-lg sm:text-xl font-bold text-[#231916]">
                    शुद्ध A2 देशी गोदुग्ध एवं सात्विक आश्रम आहार
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5a4138] mt-1">
                    गुरुकुल गौशाला में 120+ देशी गौवंश का संरक्षण। विद्यार्थियों को प्रतिदिन निःशुल्क ताजा गोदुग्ध, घृत, ऋतु अनुकूल दलिया एवं मेवे प्रदान किए जाते हैं।
                  </p>
                </div>
              </div>
              <a
                href="#routine-yagya"
                className="px-5 py-2.5 rounded-lg bg-[#a43700] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow hover:bg-[#cd4700] transition-colors"
              >
                दैनिक दिनचर्या देखें
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: 10 WORLD RECORDS (#records) */}
        <section id="records" className="w-full bg-[#fdeae3] py-16 px-4 sm:px-6 lg:px-12 border-t-4 border-[#b51a1b] shadow-inner relative">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#b51a1b] via-[#cd4700] to-[#b51a1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 shadow-lg ring-2 ring-[#b51a1b]/30">
                <Award className="w-4 h-4" />
                <span>गोल्डन बुक ऑफ वर्ल्ड रिकॉर्ड्स (GBWR) आधिकारिक प्रमाणीकरण</span>
                <Award className="w-4 h-4" />
              </div>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl md:text-5xl font-bold text-[#a43700] mt-1 leading-tight">
                स्वर्ण कीर्तिमान धरोहर: 10 ऐतिहासिक विश्व कीर्तिमान
              </h2>
              <div className="w-32 h-1 bg-[#b51a1b] rounded-full my-3" />
              <p className="text-sm sm:text-base text-[#231916] font-medium leading-relaxed max-w-3xl">
                09 जून 2024 | शारीरिक बलम्, आत्मिक शौर्यम्, वैदिक तेजः — गुरुकुल के ब्रह्मचारियों द्वारा योगाभ्यास, सूर्य नमस्कार, मयूर चाल, शीर्षासन, कपालभाति एवं सिट-अप्स में स्थापित 10 विश्व कीर्तिमान।
              </p>

              {/* Mentors Note */}
              <div className="mt-4 p-3 px-6 rounded-xl bg-white border border-[#a43700]/30 shadow-sm flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#231916]">
                <div className="flex items-center gap-1 font-bold text-[#a43700]">
                  <Sparkles className="w-4 h-4 text-[#cca72f]" />
                  <span>संयोजक व मुख्य मार्गदर्शक:</span>
                </div>
                <span className="font-semibold text-[#a43700]">पूज्य आचार्य उत्तम आर्य</span>
                <span className="text-[#8f7066]">•</span>
                <span className="font-semibold text-[#a43700]">पूज्य आचार्य प्रणव आर्य</span>
                <span className="text-[#8f7066]">•</span>
                <span className="text-[#5a4138]">स्थान: गुरुकुल महाविद्यालय, रुद्रपुर (शाहजहाँपुर, उ.प्र.)</span>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mt-6">
                <div className="p-4 rounded-xl bg-white shadow text-center border-t-4 border-[#a43700]">
                  <span className="text-2xl sm:text-4xl font-bold text-[#a43700] block">12</span>
                  <span className="text-[11px] text-[#5a4138] uppercase tracking-wider font-bold">विश्व कीर्तिमान</span>
                  <span className="text-[10px] text-[#a43700] block mt-1 font-bold bg-[#ffdbcf] rounded py-0.5 px-1">एक ही पावन दिवस पर</span>
                </div>
                <div className="p-4 rounded-xl bg-white shadow text-center border-t-4 border-[#b51a1b]">
                  <span className="text-2xl sm:text-4xl font-bold text-[#b51a1b] block">11h 13m</span>
                  <span className="text-[11px] text-[#5a4138] uppercase tracking-wider font-bold">अखंड सूर्य नमस्कार</span>
                  <span className="text-[10px] text-[#b51a1b] block mt-1 font-bold bg-[#ffdad6] rounded py-0.5 px-1">सर्वाधिक अवधि साधना</span>
                </div>
                <div className="p-4 rounded-xl bg-white shadow text-center border-t-4 border-[#735c00]">
                  <span className="text-2xl sm:text-4xl font-bold text-[#735c00] block">7,068</span>
                  <span className="text-[11px] text-[#5a4138] uppercase tracking-wider font-bold">सिट-अप्स महा-साधना</span>
                  <span className="text-[10px] text-[#735c00] block mt-1 font-bold bg-[#ffe088] rounded py-0.5 px-1">मात्र ४ घंटे २४ मिनट</span>
                </div>
                <div className="p-4 rounded-xl bg-white shadow text-center border-t-4 border-[#a43700]">
                  <span className="text-2xl sm:text-4xl font-bold text-[#a43700] block">100%</span>
                  <span className="text-[11px] text-[#5a4138] uppercase tracking-wider font-bold">GBWR अंतरराष्ट्रीय</span>
                  <span className="text-[10px] text-[#a43700] block mt-1 font-bold bg-[#ffdbcf] rounded py-0.5 px-1">सत्यापित एवं पंजीकृत</span>
                </div>
              </div>
            </div>

            {/* 10 Records Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {WORLD_RECORDS.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => setSelectedRecord(rec)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#a43700]/20 flex flex-col justify-between transition-all group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-[#fff1ec] overflow-hidden">
                    <img
                      src={rec.certificateUrl}
                      alt={rec.holderName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-[#b51a1b] text-white px-2 py-0.5 rounded text-[11px] font-bold shadow">
                      कीर्तिमान {rec.recordNo}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                      <Eye className="w-3 h-3" /> प्रमाणपत्र देखें
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <div className="mb-2">
                      <div className="flex items-center justify-between">
                        <span className="font-serif-devanagari text-base font-bold text-[#a43700]">
                          {rec.holderName}
                        </span>
                        <span className="text-[10px] bg-[#ffdbcf] text-[#a43700] px-1.5 py-0.5 rounded font-bold">
                          {rec.age}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#b51a1b] uppercase mt-1 leading-tight line-clamp-1">
                        {rec.recordTitle}
                      </p>
                      <p className="text-xs font-bold text-[#231916] mt-1">
                        {rec.achievement}
                      </p>
                      <p className="text-[10px] text-[#5a4138] mt-1 leading-snug">
                        {rec.parents}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#e3bfb2] flex items-center justify-between text-[10px] text-[#a43700] font-semibold">
                      <span>{rec.date}</span>
                      <span className="bg-[#ffdad6] text-[#b51a1b] px-1.5 py-0.5 rounded">
                        {rec.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: DAILY ROUTINE & SACRED YAGYA (#routine-yagya) */}
        <section id="routine-yagya" className="w-full bg-[#fff1ec] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#a43700] font-bold">
                ऋत एवं सत्य की साधना
              </span>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#231916] mt-1">
                आदर्श गुरुकुल दिनचर्या एवं पावन देवयज्ञ
              </h2>
              <div className="w-20 h-1 bg-[#a43700] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                प्रातः 04:00 बजे ब्राह्ममुहूर्त जागरण से लेकर रात्रि 09:30 बजे शयन तक प्रत्येक पल का सुविचारित, संस्कारमय एवं समयबद्ध नियोजन
              </p>
            </div>

            {/* Split Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-md bg-white p-2 border border-[#e3bfb2]">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida/AEtjO1WqpOSx2QHHjO8JHnwsvZB9gll8h35MoGcrFTcwLRrsTnB1rAw-5nin0H3rUCOtbdJ1opO_cvweP97LPQViOLfBObUW8xC2VeZczX6ZvmtKZOwtdMrJh79_M9PEeEGlJfisVtFXLZa9CxIa4Y9fEUgTBfKYJPLPQ86ddTUmymbLUxwmd2Z-6mdQsVZeK5mHxUykTsUDbabDRE1-CEBpyhgSbUh-YxoL7g4XTADtCP4")}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WqpOSx2QHHjO8JHnwsvZB9gll8h35MoGcrFTcwLRrsTnB1rAw-5nin0H3rUCOtbdJ1opO_cvweP97LPQViOLfBObUW8xC2VeZczX6ZvmtKZOwtdMrJh79_M9PEeEGlJfisVtFXLZa9CxIa4Y9fEUgTBfKYJPLPQ86ddTUmymbLUxwmd2Z-6mdQsVZeK5mHxUykTsUDbabDRE1-CEBpyhgSbUh-YxoL7g4XTADtCP4"
                    alt="दैनिक देवयज्ञ एवं हवन"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-[#a43700] text-white text-xs font-bold uppercase">
                        दैनिक देवयज्ञ
                      </span>
                      <p className="text-white font-serif-devanagari text-lg sm:text-xl font-bold mt-1">
                        गायत्री मंत्रोच्चार व सुगंधित औषधीय आहुतियां
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md bg-white p-2 border border-[#e3bfb2]">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida/AEtjO1X3minq1zkDMsZMggr5_m4vWF9dkEBzbxit71ipCVxxblpUSPxD1c2Kw0J9mtX7hXng6-q1CzhWqyCNPkR48ZVCKPUytuyg5Ew4gRt-O5MTtgx_9NlVPktefp-6AUcUYbK1Ln51FfH03aSeS5Gv53rLyms6G23YCXmGmDwaOlpxLAjrUKbgyeT4j7wCz-5GU5gZNq6L72CxQ3Zmf0czEM7QZfNiAXwVJak8bN7qQMjK")}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1X3minq1zkDMsZMggr5_m4vWF9dkEBzbxit71ipCVxxblpUSPxD1c2Kw0J9mtX7hXng6-q1CzhWqyCNPkR48ZVCKPUytuyg5Ew4gRt-O5MTtgx_9NlVPktefp-6AUcUYbK1Ln51FfH03aSeS5Gv53rLyms6G23YCXmGmDwaOlpxLAjrUKbgyeT4j7wCz-5GU5gZNq6L72CxQ3Zmf0czEM7QZfNiAXwVJak8bN7qQMjK"
                    alt="पूज्य आचार्य जी द्वारा ऋषि-तुल्य पावन सत्संग"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-[#735c00] text-white text-xs font-bold uppercase">
                        आचार्य प्रवचन
                      </span>
                      <p className="text-white font-serif-devanagari text-lg sm:text-xl font-bold mt-1">
                        प्रातःकालीन सत्संग व चरित्र-निर्माण उपदेश
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Schedule Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e3bfb2]">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div>
                  <h3 className="font-serif-devanagari text-xl font-bold text-[#231916]">
                    दैनिक समय-सारिणी (Daily Ashram Routine)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a4138]">सप्ताह के सातों दिन का अनुशासित चक्र</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffdbcf] text-[#a43700] text-xs font-bold">
                  ऋषि दयानन्द सरस्वती परम्परा
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Timeline Left */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#a43700] text-white text-xs font-bold shrink-0">04:00 AM</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">ब्राह्ममुहूर्त जागरण व शौच-स्नान</p>
                      <p className="text-xs text-[#5a4138]">शंखध्वनि के साथ जागरण, उषापान एवं पवित्र गंगा-तुल्य जल से स्नान</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#b51a1b] text-white text-xs font-bold shrink-0">04:30 AM</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">योगासन, प्राणायाम व अखाड़ा व्यायाम</p>
                      <p className="text-xs text-[#5a4138]">दण्ड-बैठक, मल्लखम्ब, सूर्य नमस्कार एवं प्राणायाम अभ्यास</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#735c00] text-white text-xs font-bold shrink-0">05:30 AM</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">दैनिक देवयज्ञ (हवन) व संध्या-उपासना</p>
                      <p className="text-xs text-[#5a4138]">अग्निहोत्र में औषधीय हवन सामग्री की आहुतियां, वैदिक सूक्त पाठ</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#f7e4de] text-[#231916] text-xs font-bold shrink-0">07:30 AM</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">प्रातराश (सात्विक नाश्ता) एवं A2 गोदुग्ध सेवन</p>
                      <p className="text-xs text-[#5a4138]">ऋतु अनुकूल पौष्टिक व स्वास्थ्यवर्धक आहार, देशी गौशाला का शुद्ध A2 दुग्ध, दलिया व भीगे बादाम</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#a43700] text-white text-xs font-bold shrink-0">08:30 - 12:30</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">वेदपाठ, व्याकरण, कम्प्यूटर व विज्ञान कक्षाएं</p>
                      <p className="text-xs text-[#5a4138]">अष्टाध्यायी, उपनिषद्, गणित, अंग्रेजी व कम्प्यूटर प्रयोगशाला</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Right */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#f7e4de] text-[#231916] text-xs font-bold shrink-0">12:30 - 1:30</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">सात्विक मध्याह्न भोजन व विश्राम</p>
                      <p className="text-xs text-[#5a4138]">मंत्रोच्चार उपरांत शुद्ध घी, दाल, चपाती, हरी सब्जी व अल्प विश्राम</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#a43700] text-white text-xs font-bold shrink-0">01:30 - 03:30</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">स्वाध्याय, अंग्रेजी/गणित कक्षाएं व पुस्तकालय</p>
                      <p className="text-xs text-[#5a4138]">पुस्तकालय में अध्ययन, शंका-समाधान एवं गृहकार्य</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#b51a1b] text-white text-xs font-bold shrink-0">05:30 - 07:00</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">सायंकालीन क्रीड़ा, मल्लखम्ब व अखाड़ा</p>
                      <p className="text-xs text-[#5a4138]">पारंपरिक भारतीय खेल, कबड्डी, खो-खो व व्यायाम</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#735c00] text-white text-xs font-bold shrink-0">07:30 PM</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">सायं संध्या, देवयज्ञ व सत्संग</p>
                      <p className="text-xs text-[#5a4138]">आत्मनिरीक्षण, शांत चित्त से सन्ध्या व पूज्य आचार्यों का उद्बोधन</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#fff1ec] flex items-start gap-3 border border-[#e3bfb2]/50">
                    <span className="px-2.5 py-1 rounded bg-[#f7e4de] text-[#231916] text-xs font-bold shrink-0">08:30 / 09:30</span>
                    <div>
                      <p className="text-sm font-bold text-[#231916]">रात्रि भोजन (08:30) एवं शयन (09:30)</p>
                      <p className="text-xs text-[#5a4138]">हल्का सुपाच्य भोजन, दूध सेवन एवं समय पर गहरी विश्रांति</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scientific Note */}
              <div className="mt-6 p-4 rounded-xl bg-[#fdeae3] border-l-4 border-[#735c00]">
                <div className="flex items-center gap-1.5 text-[#735c00] font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>यज्ञ का वैज्ञानिक व आध्यात्मिक महत्व (Scientific & Spiritual Essence)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                  यज्ञ में गाय के घृत एवं औषधीय वनस्पतियों की आहुति से वातावरण में फॉर्मेल्डिहाइड, एथिलीन ऑक्साइड आदि के समान वायु-शोधक तत्व फैलते हैं, जिससे वायुमंडल रोगाणुमुक्त होता है। दैनिक आहुति छात्रों में मस्तिष्क की एकाग्रता, फेफड़ों की कार्यक्षमता और मानसिक शांति को बहुगुणित करती है।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: MODERN STEM EDUCATION & CURRICULUM (#curriculum) */}
        <section id="curriculum" className="w-full bg-[#fff8f6] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            {/* Visual Callout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2 border border-[#e3bfb2]">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedImageModal("https://lh3.googleusercontent.com/aida/AEtjO1WSzEgvto_TXXZO_-FkeZTNIFUDicgwGe0q6F2Y9tGWOktf_Vl4N7Fw1tUNpvY-zEloKaYaV0iTsGgqzK2eanf9H4u3JDm6hcrpVk9g4Ef_Gb3d-B7dVhcpU4ceukYjpzmTG0heQkNQ6MilWEXAivZXiFPUdJdd4M2mY23kWQLBIMZjjxr5r8gOSinya_l-QhOLlNVrV6jDLjZ64h_zMiWextSAZIGmxakyKYVv1Qo")}
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida/AEtjO1WSzEgvto_TXXZO_-FkeZTNIFUDicgwGe0q6F2Y9tGWOktf_Vl4N7Fw1tUNpvY-zEloKaYaV0iTsGgqzK2eanf9H4u3JDm6hcrpVk9g4Ef_Gb3d-B7dVhcpU4ceukYjpzmTG0heQkNQ6MilWEXAivZXiFPUdJdd4M2mY23kWQLBIMZjjxr5r8gOSinya_l-QhOLlNVrV6jDLjZ64h_zMiWextSAZIGmxakyKYVv1Qo"
                      alt="आधुनिक विज्ञान प्रयोगशाला एवं कंप्यूटर शिक्षा"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <span className="px-2.5 py-1 rounded bg-[#a43700] text-white text-xs font-bold uppercase">
                          STEM + वैदिक ज्ञान
                        </span>
                        <p className="text-white font-serif-devanagari text-lg sm:text-xl font-bold mt-1">
                          21वीं सदी के विज्ञान एवं प्राचीन प्रज्ञा का समन्वय
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-[#a43700] font-bold">
                  समन्वित शिक्षा प्रणाली
                </span>
                <h2 className="font-serif-devanagari text-2xl sm:text-3xl md:text-4xl font-bold text-[#231916] mt-1 leading-tight">
                  आधुनिक विज्ञान व कंप्यूटर के साथ वैदिक पाणिनीय व्याकरण
                </h2>
                <div className="w-16 h-1 bg-[#a43700] rounded-full my-3" />
                <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed mb-6">
                  गुरुकुल का उद्देश्य ऐसे युवाओं को तैयार करना है जो संस्कृत के प्रकाण्ड विद्वान होने के साथ-साथ आधुनिक सूचना प्रौद्योगिकी, कंप्यूटर अनुप्रयोग, भौतिकी, रसायन और गणित में भी शीर्षस्थ रहें।
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ffdbcf] text-[#a43700] flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#231916]">अत्याधुनिक कंप्यूटर प्रयोगशाला</h4>
                      <p className="text-xs text-[#5a4138]">कोडिंग, कृत्रिम मेधा (AI) परिचय, डेटा प्रबंधन और इंटरनेट शोध की पूर्ण सुविधा</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#b51a1b] flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#231916]">अंग्रेजी भाषा एवं सम्भाषण दक्षता</h4>
                      <p className="text-xs text-[#5a4138]">धाराप्रवाह अंग्रेजी संभाषण, वाद-विवाद एवं वैश्विक मंचों के अनुकूल व्यक्तित्व विकास</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ffe088] text-[#735c00] flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#231916]">पाणिनीय अष्टाध्यायी एवं षड्दर्शन</h4>
                      <p className="text-xs text-[#5a4138]">मूल सूत्रों की कण्ठस्थीकरण पद्धति एवं तर्कसंगत न्याय-वैशेषिक दर्शन का गहन विमर्श</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Primary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#b51a1b] border-x border-b border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-[#ffdad6] text-[#b51a1b] text-xs font-bold uppercase">
                      प्राथमिक विभाग
                    </span>
                    <BookOpen className="w-5 h-5 text-[#b51a1b]" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-1">
                    कक्षा 1 से 5 (आधारभूत संस्कार)
                  </h3>
                  <p className="text-xs font-semibold text-[#b51a1b] mb-4">
                    उत्तर प्रदेश बेसिक शिक्षा परिषद से सम्बद्ध
                  </p>
                  <div className="space-y-2 text-xs text-[#5a4138] border-t border-[#e3bfb2] pt-4">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b51a1b] shrink-0 mt-0.5" />
                      <span><strong>दैनिक संध्या व प्रार्थना:</strong> गायत्री मंत्र, स्वस्तिवाचन व आचार-व्यवहार संस्कार</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b51a1b] shrink-0 mt-0.5" />
                      <span><strong>भाषा ज्ञान:</strong> देवनागरी लिपि, सरल संस्कृत वर्णमाला, शुद्ध उच्चारण व राष्ट्रभाषा हिंदी</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b51a1b] shrink-0 mt-0.5" />
                      <span><strong>आधुनिक विषय:</strong> अंकगणित, सामान्य विज्ञान, परिवेशीय अध्ययन व प्रारम्भिक अंग्रेजी</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b51a1b] shrink-0 mt-0.5" />
                      <span><strong>जीवन मूल्य:</strong> पंच महायज्ञ परिचय, अनुशासन, सेवाभाव एवं सुलेख अभ्यास</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e3bfb2] text-xs font-bold text-[#b51a1b]">
                  पात्रता: आयु 5 से 10 वर्ष | आवासीय व्यवस्था
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#a43700] border-x border-b border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-[#ffdbcf] text-[#a43700] text-xs font-bold uppercase">
                      माध्यमिक विभाग
                    </span>
                    <BookOpen className="w-5 h-5 text-[#a43700]" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-1">
                    कक्षा 6 से 12 (प्रथमा, पूर्व व उत्तर मध्यमा)
                  </h3>
                  <p className="text-xs font-semibold text-[#a43700] mb-4">
                    उ.प्र. संस्कृत शिक्षा परिषद, लखनऊ से सम्बद्ध
                  </p>
                  <div className="space-y-2 text-xs text-[#5a4138] border-t border-[#e3bfb2] pt-4">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>प्रथमा (कक्षा 6-8):</strong> अष्टाध्यायी प्राथमिक सूत्र, संस्कृत सम्भाषण, अमरकोश व गणित-विज्ञान</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>पूर्व मध्यमा (कक्षा 9-10):</strong> सूत्रपाठ, व्याकरण महाभाष्य, वैदिक सूक्त एवं UP Board समकक्ष</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>उत्तर मध्यमा (कक्षा 11-12 / 10+2):</strong> सिद्धांत कौमुदी, साहित्य, भौतिक-रसायन-गणित</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>प्रौद्योगिकी:</strong> कंप्यूटर अनुप्रयोग, कोडिंग, इंटरनेट व डिजिटल साक्षरता</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e3bfb2] text-xs font-bold text-[#a43700]">
                  मान्यता: माध्यमिक शिक्षा परिषद (UP Board) 10+2 समकक्ष
                </div>
              </div>

              {/* Higher Education */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#735c00] border-x border-b border-[#e3bfb2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-[#ffe088] text-[#735c00] text-xs font-bold uppercase">
                      उच्च शिक्षा विभाग
                    </span>
                    <BookOpen className="w-5 h-5 text-[#735c00]" />
                  </div>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mb-1">
                    शास्त्री (B.A.) एवं आचार्य (M.A.)
                  </h3>
                  <p className="text-xs font-semibold text-[#735c00] mb-4">
                    सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी से सम्बद्ध
                  </p>
                  <div className="space-y-2 text-xs text-[#5a4138] border-t border-[#e3bfb2] pt-4">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#735c00] shrink-0 mt-0.5" />
                      <span><strong>शास्त्री (3 वर्षीय स्नातक):</strong> व्याकरण, न्याय दर्शन, मीमांसा, वेदांत, काव्यशास्त्र</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#735c00] shrink-0 mt-0.5" />
                      <span><strong>आचार्य (2 वर्षीय स्नातकोत्तर):</strong> विशिष्ट वैदिक शोध, संहिता पाठ, धर्मशास्त्र एवं दर्शन</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#735c00] shrink-0 mt-0.5" />
                      <span><strong>व्यावहारिक प्रशिक्षण:</strong> पौरोहित्य, यज्ञ-कर्मकांड, ज्योतिष गणना, शास्त्रार्थ</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#735c00] shrink-0 mt-0.5" />
                      <span><strong>अनुसंधान:</strong> UGC NET / JRF व सिविल सेवा की विशेष तैयारी</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e3bfb2] text-xs font-bold text-[#735c00]">
                  यूजीसी (UGC) व शासकीय सेवाओं हेतु पूर्णतः मान्य
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: DONATION & NEEDS (#sahyog) */}
        <section id="sahyog" className="w-full bg-[#fff1ec] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            {/* Taittiriya Upanishad Header Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-[#b51a1b] border-x border-b border-[#e3bfb2] text-center">
              <div className="max-w-4xl mx-auto mb-4">
                <p className="font-serif-devanagari text-lg sm:text-2xl text-[#a43700] font-bold tracking-wide leading-relaxed">
                  श्रद्धया देयम् । अश्रद्धया देयम् । श्रिया देयम् । ह्रिया देयम् । भिया देयम् । संविदा देयम् ।
                </p>
                <span className="text-xs uppercase tracking-wider text-[#b51a1b] font-bold block mt-1">
                  (तैत्तिरीय उपनिषद् - शिक्षा वल्ली)
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#fff8f6] max-w-4xl mx-auto text-[#5a4138] text-xs sm:text-sm leading-relaxed mb-4 border border-[#e3bfb2]">
                <p className="font-bold text-[#231916] mb-1">भावार्थ:</p>
                "श्रद्धा से देना। अश्रद्धा से भी देना। अपनी बढ़ती श्री में से देना। श्री ना बढ़ रही हो तो भी लोक लाज से देना, भय से देना, प्रेम से भी देना अर्थात् किसी भी रूप में दान अवश्यमेव कर्तव्य है। श्रेष्ठ कार्यों हेतु अवश्य देना चाहिये।"
              </div>
              <p className="max-w-4xl mx-auto text-[#5a4138] text-xs sm:text-sm leading-relaxed text-center">
                गुरुकुल की सारी व्यवस्थायें दान द्वारा ही संचालित की जाती हैं। इस संस्था को कोई भी सरकारी सहायता अथवा अनुदान प्राप्त नहीं होता है। वैदिक संस्कृति, संस्कृत, वेद संरक्षण का गुरुतर दायित्व हम सभी का कर्तव्य है। अतः इसके संरक्षण के लिए उचित स्थान पर यथासामर्थ्य सहयोग अवश्य करें।
              </p>
            </div>

            {/* Needs Table & Bank Details Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 16 Needs */}
              <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl p-6 shadow-md border border-[#e3bfb2]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e3bfb2]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#a43700] text-white text-sm sm:text-base font-bold shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>वर्तमान में गुरुकुल की मूलभूत आवश्यकताएं</span>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#ffdad6] text-[#b51a1b] text-xs font-bold">
                    अनुमानित धनराशि
                  </div>
                </div>

                <div className="divide-y divide-[#e3bfb2]/60">
                  {GURUKUL_NEEDS.map((item) => (
                    <div
                      key={item.id}
                      className="py-3 flex items-center justify-between gap-3 hover:bg-[#fff8f6] px-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#a43700] w-6 shrink-0">{item.id}.</span>
                        <span className="text-xs sm:text-sm font-medium text-[#231916]">{item.title}</span>
                      </div>
                      <span className="font-bold text-[#b51a1b] text-xs sm:text-sm text-right shrink-0 px-2.5 py-0.5 rounded-full bg-[#ffdad6]/80 border border-[#b51a1b]/20">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#fff8f6] border-l-4 border-[#a43700] text-center">
                  <p className="text-xs sm:text-sm text-[#231916] font-semibold mb-2">
                    आपके द्वारा श्रद्धा पूर्वक दिया गया छोटा से छोटा सहयोग इस सनातन गुरुकुलीय परम्परा के उत्थान में अभिन्न अंग सिद्ध होगा।
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b51a1b] text-white text-xs font-bold shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>आपका दिया दान 80G नियम से आयकर मुक्त है।</span>
                  </div>
                </div>
              </div>

              {/* Bank Details & QR */}
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#a43700]/40 relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#e3bfb2]">
                    <div className="flex items-center gap-2 text-[#a43700]">
                      <div className="w-10 h-10 rounded-xl bg-[#a43700] text-white flex items-center justify-center shadow-sm">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif-devanagari text-base font-bold text-[#231916] leading-tight">बैंक विवरण</h3>
                        <span className="text-[11px] text-[#5a4138]">Official Bank Account</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#b51a1b] text-[10px] font-bold">
                      आधिकारिक दान खाता
                    </span>
                  </div>

                  {/* Bank info items */}
                  <div className="space-y-3 mb-4">
                    <div className="bg-[#fff1ec] p-3 rounded-xl border border-[#e3bfb2]">
                      <span className="text-[10px] uppercase tracking-wider text-[#b51a1b] font-bold block">
                        बैंक का नाम (Bank Name)
                      </span>
                      <p className="text-sm font-bold text-[#231916]">भारतीय स्टेट बैंक (State Bank of India)</p>
                      <p className="text-[11px] text-[#5a4138] mt-0.5">शाखा: कपसेड़ा, तिलहर, शाहजहाँपुर (उ.प्र.)</p>
                    </div>

                    <div className="bg-[#fdeae3] p-3 rounded-xl border-2 border-[#a43700]/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#5a4138] font-bold block">
                          खाता संख्या (A/C No) - बचत खाता
                        </span>
                        <p className="text-lg font-bold text-[#a43700] tracking-wider">11575197987</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard('11575197987')}
                        className="px-2.5 py-1 rounded bg-white text-[#a43700] border border-[#a43700]/30 text-xs font-semibold hover:bg-[#fff8f6] flex items-center gap-1 shadow-sm"
                      >
                        {copiedBank ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBank ? 'कॉपी हुआ' : 'कॉपी'}</span>
                      </button>
                    </div>

                    <div className="bg-[#fff1ec] p-3 rounded-xl border border-[#e3bfb2] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#5a4138] font-bold block">
                          IFSC Code
                        </span>
                        <p className="text-base font-bold text-[#231916] tracking-wider">SBIN0004008</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard('SBIN0004008')}
                        className="px-2.5 py-1 rounded bg-white text-[#a43700] border border-[#a43700]/30 text-xs font-semibold hover:bg-[#fff8f6] flex items-center gap-1 shadow-sm"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>कॉपी</span>
                      </button>
                    </div>
                  </div>

                  {/* 80G Certificate Callout */}
                  <div className="p-3.5 rounded-xl bg-[#fff8f6] border border-[#a43700]/40 text-xs space-y-1.5 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 font-bold text-[#a43700]">
                        <CheckCircle2 className="w-4 h-4 text-[#a43700]" />
                        <span>80G आयकर छूट (100% Tax Exemption)</span>
                      </div>
                      <span className="bg-[#a43700] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">प्रमाणित</span>
                    </div>
                    <p className="text-[#5a4138] leading-relaxed">
                      गुरुकुल को दिया गया संपूर्ण दान आयकर अधिनियम की धारा 80G के अंतर्गत कर-मुक्त है।
                    </p>
                    <div className="text-[11px] text-[#231916] pt-1 border-t border-[#e3bfb2]">
                      <span className="font-bold text-[#a43700]">CSR Registration: </span>
                      <span>पंजीकरण संख्या 00102289</span>
                    </div>
                  </div>

                  {/* QR Box */}
                  <div className="p-4 rounded-xl bg-[#fff1ec] border border-dashed border-[#a43700]/40 flex flex-col items-center text-center">
                    <span className="text-xs uppercase tracking-wider text-[#b51a1b] font-bold mb-2 flex items-center gap-1">
                      <QrCode className="w-4 h-4" />
                      इस QR को स्कैन करके भी सहयोग कर सकते हैं
                    </span>
                    <div className="p-3 bg-white rounded-xl shadow-md border border-[#e3bfb2] mb-3">
                      <div className="w-36 h-36 bg-[#fdeae3] flex flex-col items-center justify-center p-2 rounded-lg border border-[#a43700]/30">
                        <QrCode className="w-20 h-20 text-[#a43700]" />
                        <span className="px-2 py-0.5 rounded bg-[#a43700] text-white text-[10px] font-bold mt-1 shadow-sm">
                          SBIN0004008 UPI
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 flex-wrap text-[10px] font-bold text-[#5a4138] uppercase tracking-wider">
                      <span className="px-2 py-0.5 rounded bg-white border border-[#e3bfb2]">Google Pay</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#e3bfb2]">PhonePe</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#e3bfb2]">Paytm</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#e3bfb2]">BHIM UPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: ADMISSIONS & ONLINE FORM (#admissions) */}
        <section id="admissions" className="w-full bg-[#fff8f6] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {/* Banner */}
            <div className="bg-gradient-to-r from-[#a43700] via-[#cd4700] to-[#b51a1b] text-white rounded-2xl p-6 md:p-8 shadow-xl text-center">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs uppercase tracking-wider font-semibold">
                सत्र 2025-2026
              </span>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold mt-2">
                ऑनलाइन प्रवेश पंजीकरण (Online Admission Open)
              </h2>
              <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-2xl mx-auto">
                कक्षा 1 से 12, शास्त्री (B.A. संस्कृत) एवं आचार्य (M.A. दर्शन/साहित्य) हेतु प्रवेश प्रक्रिया जारी है।
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#e3bfb2]">
                <div className="border-b border-[#e3bfb2] pb-4 mb-6">
                  <h3 className="font-serif-devanagari text-xl font-bold text-[#231916]">
                    छात्र प्रवेश आवेदन पत्र (Application Form)
                  </h3>
                  <p className="text-xs text-[#5a4138] mt-0.5">
                    कृपया सभी विवरण सत्य व स्पष्ट भरें। तारांकित (*) प्रविष्टियां अनिवार्य हैं।
                  </p>
                </div>

                {submittedToken ? (
                  <div className="p-6 rounded-xl bg-[#fff1ec] border-2 border-[#a43700] text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#a43700] mx-auto" />
                    <h4 className="font-serif-devanagari text-xl font-bold text-[#a43700]">
                      आवेदन सफलतापूर्वक दर्ज हुआ!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5a4138]">
                      आपका अस्थायी पंजीकरण क्रमांक है: <strong className="text-lg text-[#b51a1b] font-mono">{submittedToken}</strong>
                    </p>
                    <p className="text-xs text-[#5a4138]">
                      गुरुकुल कार्यालय शीघ्र ही दूरभाष <strong className="text-[#231916]">{admissions.mobile}</strong> पर संपर्क कर प्रवेश परीक्षा एवं साक्षात् भेट का समय सूचित करेगा।
                    </p>
                    <button
                      onClick={() => {
                        setSubmittedToken(null);
                        setAdmissions({
                          studentName: '',
                          fatherName: '',
                          dob: '',
                          desiredClass: '',
                          mobile: '',
                          state: '',
                          prevSchool: '',
                          address: '',
                          agreeRules: false
                        });
                      }}
                      className="mt-4 px-6 py-2 rounded-lg bg-[#a43700] text-white text-xs font-bold hover:bg-[#cd4700] transition-colors"
                    >
                      अन्य छात्र का आवेदन भरें
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleAdmissionSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          छात्र का पूरा नाम *
                        </label>
                        <input
                          type="text"
                          required
                          value={admissions.studentName}
                          onChange={(e) => setAdmissions({ ...admissions, studentName: e.target.value })}
                          placeholder="उदा. आदित्य शर्मा"
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          पिता / अभिभावक का नाम *
                        </label>
                        <input
                          type="text"
                          required
                          value={admissions.fatherName}
                          onChange={(e) => setAdmissions({ ...admissions, fatherName: e.target.value })}
                          placeholder="उदा. श्री राजेश शर्मा"
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          जन्म तिथि (Date of Birth) *
                        </label>
                        <input
                          type="date"
                          required
                          value={admissions.dob}
                          onChange={(e) => setAdmissions({ ...admissions, dob: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          वांछित कक्षा / पाठ्यक्रम *
                        </label>
                        <select
                          required
                          value={admissions.desiredClass}
                          onChange={(e) => setAdmissions({ ...admissions, desiredClass: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        >
                          <option value="">-- कक्षा चुनें --</option>
                          <option value="1">कक्षा १ (Class 1st) - प्राथमिक</option>
                          <option value="2">कक्षा २ (Class 2nd) - प्राथमिक</option>
                          <option value="3">कक्षा ३ (Class 3rd) - प्राथमिक</option>
                          <option value="4">कक्षा ४ (Class 4th) - प्राथमिक</option>
                          <option value="5">कक्षा ५ (Class 5th) - प्राथमिक</option>
                          <option value="6">कक्षा ६ (Class 6th) - प्रथमा</option>
                          <option value="7">कक्षा ७ (Class 7th) - प्रथमा</option>
                          <option value="8">कक्षा ८ (Class 8th) - प्रथमा</option>
                          <option value="9">कक्षा ९ - पूर्व मध्यमा प्रथम वर्ष (Class 9th)</option>
                          <option value="10">कक्षा १० - पूर्व मध्यमा द्वितीय वर्ष (Class 10th)</option>
                          <option value="11">कक्षा ११ - उत्तर मध्यमा प्रथम वर्ष (Class 11th)</option>
                          <option value="12">कक्षा १२ - उत्तर मध्यमा द्वितीय वर्ष (Class 12th)</option>
                          <option value="shastri">शास्त्री प्रथम वर्ष - B.A. Sanskrit</option>
                          <option value="acharya">आचार्य प्रथम वर्ष - M.A. Sanskrit/Darshan</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          मोबाइल / व्हाट्सएप नंबर *
                        </label>
                        <input
                          type="tel"
                          required
                          value={admissions.mobile}
                          onChange={(e) => setAdmissions({ ...admissions, mobile: e.target.value })}
                          placeholder="१० अंकों का मोबाइल नंबर"
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                          राज्य (State) *
                        </label>
                        <input
                          type="text"
                          required
                          value={admissions.state}
                          onChange={(e) => setAdmissions({ ...admissions, state: e.target.value })}
                          placeholder="उदा. उत्तर प्रदेश"
                          className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        पूर्व विद्यालय का विवरण (School & Percentage)
                      </label>
                      <input
                        type="text"
                        value={admissions.prevSchool}
                        onChange={(e) => setAdmissions({ ...admissions, prevSchool: e.target.value })}
                        placeholder="पूर्व विद्यालय का नाम, उत्तीर्ण कक्षा एवं प्रतिशत"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        स्थायी डाक पता (Permanent Address) *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={admissions.address}
                        onChange={(e) => setAdmissions({ ...admissions, address: e.target.value })}
                        placeholder="ग्राम/मोहल्ला, पोस्ट, तहसील, जिला एवं पिनकोड"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="agreeRules"
                        required
                        checked={admissions.agreeRules}
                        onChange={(e) => setAdmissions({ ...admissions, agreeRules: e.target.checked })}
                        className="mt-1 rounded text-[#a43700] focus:ring-[#a43700]"
                      />
                      <label htmlFor="agreeRules" className="text-xs text-[#5a4138] leading-tight">
                        मैं और मेरा पाल्य गुरुकुल के ब्रह्मचर्य नियमों, सात्विक आहार, नशामुक्ति संकल्प और दैनिक अनुशासन का पूर्ण पालन करने की शपथ लेते हैं।
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#a43700] text-white font-bold text-sm shadow hover:bg-[#cd4700] transition-colors flex items-center justify-center gap-2"
                    >
                      <UserCheck className="w-5 h-5" />
                      <span>आवेदन पत्र जमा करें (Submit Application)</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Guidelines */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e3bfb2]">
                  <h4 className="font-serif-devanagari text-base font-bold text-[#231916] mb-3">
                    प्रवेश पात्रता एवं नियम
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#5a4138]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>आयु सीमा:</strong> प्राथमिक (1-5) हेतु 5-10 वर्ष, माध्यमिक (6-12) हेतु 10-18 वर्ष।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>परीक्षा:</strong> सरल हिंदी, गणित, सामान्य ज्ञान एवं संस्कार परीक्षण।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>शारीरिक स्वास्थ्य:</strong> छात्र किसी असाध्य रोग से ग्रसित न हो; अखाड़ा व योग हेतु उपयुक्त हो।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                      <span><strong>प्रतिबंधित:</strong> स्मार्टफ़ोन, इलेक्ट्रॉनिक गैजेट्स, नशा, बाहर का भोजन सर्वथा वर्जित है।</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#fff1ec] rounded-2xl p-6 border border-[#e3bfb2]">
                  <div className="flex items-center gap-2 text-[#b51a1b] font-bold text-sm mb-1">
                    <HeartHandshake className="w-5 h-5" />
                    <span>निःशुल्क एवं रियायती शिक्षा व्यवस्था</span>
                  </div>
                  <p className="text-xs text-[#5a4138] leading-relaxed">
                    गुरुकुल की स्थापना वाणिज्यिक लाभ हेतु नहीं, अपितु समाज-सेवा एवं वेद-संरक्षण हेतु हुई है। निर्धन, अनाथ, मेधावी एवं सुपात्र विद्यार्थियों को पूर्णतः निःशुल्क अथवा अत्यधिक न्यूनतम सहयोग शुल्क पर आवास, भोजन और शिक्षा प्रदान की जाती है।
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#e3bfb2]">
                  <span className="text-[11px] uppercase tracking-wider text-[#a43700] font-bold block mb-1">
                    सीधे संपर्क हेतु हेल्पडेस्क
                  </span>
                  <p className="text-xs text-[#5a4138] mb-3">
                    प्रवेश संबंधी किसी भी शंका के लिए पूज्य आचार्यों से सीधे संवाद करें:
                  </p>
                  <div className="space-y-1.5 text-xs font-bold text-[#a43700]">
                    <a href="tel:+919509538982" className="flex items-center gap-1.5 hover:underline">
                      <Phone className="w-4 h-4" /> पूज्य आचार्य उत्तम आर्य: +91 95095 38982
                    </a>
                    <a href="tel:+919104062470" className="flex items-center gap-1.5 hover:underline">
                      <Phone className="w-4 h-4" /> पूज्य आचार्य प्रणव आर्य: +91 91040 62470
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: PHOTO UPLOAD STUDIO & GALLERY ARCHIVE (#photo-upload) */}
        <section id="photo-upload" className="w-full bg-[#fff1ec] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffdad6] text-[#b51a1b] text-xs font-bold uppercase tracking-wider mb-2">
                <UploadCloud className="w-4 h-4" />
                <span>गुरुकुल छायाचित्र संकलन स्टूडियो | Visual Media Archiving Portal</span>
              </div>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#a43700] mt-1">
                छायाचित्र जोड़ें एवं पावन चित्र वीथिका (Photo Studio & Archive)
              </h2>
              <div className="w-24 h-1 bg-[#a43700] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                गुरुकुल परिसर, वैदिक यज्ञ, अखाड़ा, गौशाला एवं पावन आयोजनों की स्मृतियों को संकलित व सुरक्षित करें। आश्रम मर्यादा के अनुकूल चित्र साझा करें।
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6">
                <div className="p-3 rounded-xl bg-white shadow-sm border border-[#e3bfb2] text-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#a43700] block">{450 + gallery.length}</span>
                  <span className="text-[10px] text-[#5a4138] uppercase tracking-wider font-semibold">कुल संकलित चित्र</span>
                </div>
                <div className="p-3 rounded-xl bg-white shadow-sm border border-[#e3bfb2] text-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#b51a1b] block">08</span>
                  <span className="text-[10px] text-[#5a4138] uppercase tracking-wider font-semibold">प्रमुख श्रेणियां</span>
                </div>
                <div className="p-3 rounded-xl bg-white shadow-sm border border-[#e3bfb2] text-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#735c00] block">+{gallery.length}</span>
                  <span className="text-[10px] text-[#5a4138] uppercase tracking-wider font-semibold">सक्रिय गैलरी</span>
                </div>
                <div className="p-3 rounded-xl bg-white shadow-sm border border-[#e3bfb2] text-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#a43700] block">100%</span>
                  <span className="text-[10px] text-[#5a4138] uppercase tracking-wider font-semibold">सुरक्षित संचय</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Upload Form */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-md border-t-4 border-[#a43700] border-x border-b border-[#e3bfb2]">
                <div className="flex items-center justify-between border-b border-[#e3bfb2] pb-3 mb-6">
                  <div>
                    <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] flex items-center gap-2">
                      <UploadCloud className="w-5 h-5 text-[#a43700]" /> नया छायाचित्र अपलोड करें
                    </h3>
                    <p className="text-xs text-[#5a4138]">अभिलेखीय गुणवत्ता में वैदिक छायाचित्र संकलन प्रपत्र</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#ffdbcf] text-[#a43700] text-xs font-bold">
                    स्टूडियो मोड
                  </span>
                </div>

                {uploadSuccessMsg && (
                  <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-300 text-green-800 text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>छायाचित्र सफलतापूर्वक गैलरी में जोड़ दिया गया है!</span>
                  </div>
                )}

                <form onSubmit={handlePhotoUpload} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        छायाचित्र का शीर्षक *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPhoto.title}
                        onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                        placeholder="उदा. प्रातःकालीन देवयज्ञ आहुति"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        श्रेणी चुनें (Category) *
                      </label>
                      <select
                        required
                        value={newPhoto.category}
                        onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      >
                        <option value="yagya">दैनिक देवयज्ञ व हवन</option>
                        <option value="akhada">अखाड़ा, मल्लखम्ब व व्यायाम</option>
                        <option value="classes">कक्षाएं, वेदपाठ व कंप्यूटर लैब</option>
                        <option value="gaushala">गौशाला सेवा व गोदुग्ध</option>
                        <option value="festival">वार्षिकोत्सव व दीक्षांत समारोह</option>
                        <option value="acharyas">पूज्य आचार्य प्रवचन व सत्संग</option>
                        <option value="campus">गुरुकुल पावन परिसर</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                      फोटो का URL (Image URL) - वैकल्पिक
                    </label>
                    <input
                      type="url"
                      value={newPhoto.imageUrl}
                      onChange={(e) => setNewPhoto({ ...newPhoto, imageUrl: e.target.value })}
                      placeholder="https://... (रिक्त छोड़ने पर डिफ़ॉल्ट वैदिक फोटो उपयोग होगी)"
                      className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        सत्र (Session)
                      </label>
                      <select
                        value={newPhoto.session}
                        onChange={(e) => setNewPhoto({ ...newPhoto, session: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      >
                        <option value="2025-2026">2025-2026</option>
                        <option value="2024-2025">2024-2025</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="ऐतिहासिक संकलन">ऐतिहासिक संकलन</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        तिथि (Date)
                      </label>
                      <input
                        type="date"
                        value={newPhoto.date}
                        onChange={(e) => setNewPhoto({ ...newPhoto, date: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        स्थान (Location)
                      </label>
                      <input
                        type="text"
                        value={newPhoto.location}
                        onChange={(e) => setNewPhoto({ ...newPhoto, location: e.target.value })}
                        placeholder="उदा. मुख्य यज्ञशाला"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                      संक्षिप्त संदर्भ व व्याख्या (Caption / Notes)
                    </label>
                    <textarea
                      rows={2}
                      value={newPhoto.caption}
                      onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                      placeholder="छायाचित्र के प्रसंग, उपस्थित आचार्य या छात्रों का विवरण लिखें..."
                      className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        संकलनकर्ता / प्रेषक *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPhoto.uploader}
                        onChange={(e) => setNewPhoto({ ...newPhoto, uploader: e.target.value })}
                        placeholder="उदा. आचार्य उत्तम आर्य / मीडिया प्रभारी"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#5a4138] mb-1">
                        टैग्स (Tags)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. #यज्ञ, #मल्लखम्ब, #रुद्रपुर"
                        className="w-full px-3 py-2 text-sm rounded bg-[#fff8f6] border border-[#e3bfb2] focus:ring-2 focus:ring-[#a43700] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#a43700] text-white font-bold text-sm shadow hover:bg-[#cd4700] transition-colors flex items-center justify-center gap-2"
                  >
                    <UploadCloud className="w-5 h-5" />
                    <span>गैलरी में फोटो जोड़ें (Upload & Publish)</span>
                  </button>
                </form>
              </div>

              {/* Interactive Visual Archive Gallery */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-[#b51a1b] border-x border-b border-[#e3bfb2]">
                  <div className="flex items-center justify-between border-b border-[#e3bfb2] pb-3 mb-4">
                    <div>
                      <h4 className="font-serif-devanagari text-lg font-bold text-[#231916]">
                        पावन चित्र वीथिका (Live Visual Archive)
                      </h4>
                      <p className="text-xs text-[#5a4138]">श्रेणी के अनुसार फोटो देखें</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#b51a1b] text-xs font-bold">
                      {filteredGallery.length} चित्र
                    </span>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-4 text-xs font-semibold">
                    <button
                      onClick={() => setActiveCategoryFilter('all')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCategoryFilter === 'all'
                          ? 'bg-[#a43700] text-white'
                          : 'bg-[#fff1ec] text-[#5a4138] hover:bg-[#fdeae3]'
                      }`}
                    >
                      सभी ({gallery.length})
                    </button>
                    <button
                      onClick={() => setActiveCategoryFilter('yagya')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCategoryFilter === 'yagya'
                          ? 'bg-[#a43700] text-white'
                          : 'bg-[#fff1ec] text-[#5a4138] hover:bg-[#fdeae3]'
                      }`}
                    >
                      यज्ञ व प्रार्थना
                    </button>
                    <button
                      onClick={() => setActiveCategoryFilter('akhada')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCategoryFilter === 'akhada'
                          ? 'bg-[#a43700] text-white'
                          : 'bg-[#fff1ec] text-[#5a4138] hover:bg-[#fdeae3]'
                      }`}
                    >
                      अखाड़ा व मल्लखम्ब
                    </button>
                    <button
                      onClick={() => setActiveCategoryFilter('classes')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        activeCategoryFilter === 'classes'
                          ? 'bg-[#a43700] text-white'
                          : 'bg-[#fff1ec] text-[#5a4138] hover:bg-[#fdeae3]'
                      }`}
                    >
                      कम्प्यूटर व कक्षा
                    </button>
                  </div>

                  {/* Gallery Cards Stack */}
                  <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
                    {filteredGallery.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl overflow-hidden bg-[#fff8f6] border border-[#e3bfb2] flex flex-col sm:flex-row gap-3 p-2.5 hover:shadow-md transition-all group cursor-pointer"
                        onClick={() => setSelectedImageModal(item.imageUrl)}
                      >
                        <div className="sm:w-36 h-28 rounded-lg overflow-hidden shrink-0 relative bg-[#fff1ec]">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-[#a43700] text-white text-[9px] font-bold uppercase">
                            {item.categoryLabel}
                          </span>
                        </div>
                        <div className="flex flex-col justify-between flex-1 py-0.5">
                          <div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-[#b51a1b] font-bold">{item.session}</span>
                              <span className="text-[#5a4138]">{item.date}</span>
                            </div>
                            <h5 className="text-xs sm:text-sm font-bold text-[#231916] mt-0.5 leading-snug line-clamp-1">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-[#5a4138] line-clamp-2 mt-0.5">
                              {item.caption}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-1 border-t border-[#e3bfb2]/60 text-[10px] text-[#5a4138]">
                            <span>प्रेषक: <strong>{item.uploader}</strong></span>
                            <span className="text-[#a43700] font-semibold flex items-center gap-0.5">
                              <Eye className="w-3 h-3" /> बड़ा देखें
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: CONTACT & MAP LOCATION (#contact) */}
        <section id="contact" className="w-full bg-[#fff8f6] py-16 px-4 sm:px-6 lg:px-12 border-b border-[#e3bfb2]">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#a43700] font-bold">
                संपर्क एवं स्थान
              </span>
              <h2 className="font-serif-devanagari text-2xl sm:text-4xl font-bold text-[#231916] mt-1">
                गुरुकुल संपर्क सूत्र एवं आधिकारिक पता
              </h2>
              <div className="w-20 h-1 bg-[#cca72f] rounded-full my-2" />
              <p className="text-sm sm:text-base text-[#5a4138]">
                तीर्थ-तुल्य पावन प्रांगण में पधारें अथवा किसी भी जिज्ञासा हेतु संस्था से संपर्क स्थापित करें।
              </p>
            </div>

            {/* 3 Contact Directory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Acharya 1 */}
              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#a43700] text-white flex items-center justify-center mb-4 shadow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#b51a1b] font-bold">आचार्य मण्डल</span>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mt-1">पूज्य आचार्य उत्तम आर्य</h3>
                  <p className="text-xs text-[#5a4138]">व्यवस्थापक एवं कीर्तिमान मार्गदर्शक</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e3bfb2]">
                  <a
                    href="tel:+919509538982"
                    className="flex items-center gap-2 text-[#a43700] font-bold text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 95095 38982</span>
                  </a>
                </div>
              </div>

              {/* Acharya 2 */}
              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#735c00] text-white flex items-center justify-center mb-4 shadow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#735c00] font-bold">आचार्य मण्डल</span>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mt-1">पूज्य आचार्य प्रणव आर्य</h3>
                  <p className="text-xs text-[#5a4138]">आचार्य, संचालक एवं व्यवस्थापक</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e3bfb2]">
                  <a
                    href="tel:+919104062470"
                    className="flex items-center gap-2 text-[#a43700] font-bold text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 91040 62470</span>
                  </a>
                </div>
              </div>

              {/* Location Address */}
              <div className="p-6 rounded-xl bg-[#fff1ec] border border-[#e3bfb2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#b51a1b] text-white flex items-center justify-center mb-4 shadow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#b51a1b] font-bold">महाविद्यालय परिसर</span>
                  <h3 className="font-serif-devanagari text-lg font-bold text-[#231916] mt-1">स्थायी पता</h3>
                  <p className="text-xs text-[#5a4138] mt-1 leading-relaxed">
                    गुरुकुल स्नातकोत्तर महाविद्यालय, ग्राम रुद्रपुर<br />
                    डाकघर: तिलहर, जनपद: शाहजहाँपुर<br />
                    उत्तर प्रदेश — 242307
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e3bfb2] text-xs text-[#5a4138]">
                  तिलहर रेलवे स्टेशन से मात्र 5 किमी दूरी
                </div>
              </div>
            </div>

            {/* Map Placeholder Container */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white p-2 border border-[#e3bfb2]">
              <div
                className="w-full h-80 bg-cover bg-center rounded-xl relative flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuClLGnqTNclJNMzt1dBiuM5UhSEsL6jWabjGxhuWPeLdP0WZeUUA4gc021r5UMBK52r_xJAQtWgr0FRCF2v8vOWoZnlrfO1Nz1RqGNUwzD4_MdPhAFQp6lbSZ_173mKj-vZ4gbNeu47WTtcbfI_vbiyUzsyDc2cTtZMMblDjTMlHeqaGKzTarSp4WKGlMYj8wMmmTusPe0JAel1rm_4eVq81Lgti_Ft5P0UUY9aM1M")`
                }}
              >
                <div className="absolute inset-0 bg-[#a43700]/25 backdrop-blur-[2px]" />
                <div className="relative bg-white/95 p-6 rounded-xl shadow-2xl max-w-md text-center mx-4 border border-[#e3bfb2]">
                  <MapPin className="w-10 h-10 text-[#a43700] mx-auto mb-2" />
                  <h4 className="font-serif-devanagari text-lg sm:text-xl font-bold text-[#231916]">
                    गुरुकुल स्नातकोत्तर महाविद्यालय रुद्रपुर
                  </h4>
                  <p className="text-xs text-[#5a4138] mt-1">
                    निकटतम मुख्य स्टेशन: तिलहर (Tilhar) एवं शाहजहाँपुर जंक्शन (Shahjahanpur Jn)
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://maps.google.com/?q=Tilhar+Shahjahanpur+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#a43700] text-white rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow hover:bg-[#cd4700] transition-colors"
                    >
                      <MapPin className="w-4 h-4" /> गूगल मैप्स पर दिशा-निर्देश देखें
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#fff1ec] border-t border-[#e3bfb2]">
        {/* Shloka banner */}
        <div className="bg-[#fdeae3] py-6 px-4 text-center border-b border-[#e3bfb2]">
          <p className="font-serif-devanagari text-base sm:text-xl text-[#a43700] font-bold tracking-wide">
            असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥
          </p>
          <p className="text-xs text-[#5a4138] mt-1 italic">
            Lead us from the unreal to the real, from darkness to light, from mortality to immortality.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VPl_gMCwZruxfRVQ9w9mzAlde3oSlMDOu70o8Jyug-eAv_3tXiSa1xoJtJQksDTJ9cr8nwxA5ctanWBhNdEGi_UZGzxdAwK72ZiV0SuekJD5IseXsqpDaAFGEvtGZXTOZeel-7LKvIn_rwW6effSBoDXY_rR2jTFJWiCOPJF2ghgnfhpPf9lg2auDzhIDf2xmn4Hlr61BqvrHle0a8I7oP1gKzhdf63AawEGKC0Jfs7afdNDFO1h3IFXY"
                  alt="गुरुकुल लोगो"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-serif-devanagari text-lg font-bold text-[#a43700]">गुरुकुल महाविद्यालय</span>
              </div>
              <p className="text-xs text-[#5a4138] leading-relaxed">
                An august sanctuary of Sanatana erudition, physical martial mastery (Vyayama & Kushti), and moral discipline located at Rudrapur (Tilhar), Shahjahanpur.
              </p>
              <span className="text-[10px] uppercase px-2.5 py-1 bg-[#f7e4de] rounded text-[#5a4138] inline-block font-semibold">
                Affiliated Vedic Institution
              </span>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h3 className="font-serif-devanagari text-base font-bold text-[#231916]">संस्थानिक मान्यता</h3>
              <ul className="space-y-1.5 text-xs text-[#5a4138]">
                <li>• UP Basic Shiksha Parishad, Prayagraj</li>
                <li>• UP Sanskrit Shiksha Parishad, Lucknow</li>
                <li>• Sampurnanand Sanskrit Vishwavidyalaya, Varanasi</li>
                <li>• All-India Arya Pratinidhi Sabha Lineage</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h3 className="font-serif-devanagari text-base font-bold text-[#231916]">आचार्य मण्डल (Leadership)</h3>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-[#e3bfb2]">
                  <p className="font-bold text-[#a43700]">आचार्य उत्तम आर्य</p>
                  <p className="text-[#5a4138]">व्यवस्थापक व विश्वकीर्तिमान संयोजक</p>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-[#e3bfb2]">
                  <p className="font-bold text-[#a43700]">आचार्य प्रणव आर्य</p>
                  <p className="text-[#5a4138]">संचालक व व्यवस्थापक</p>
                </div>
              </div>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h3 className="font-serif-devanagari text-base font-bold text-[#231916]">पत्राचार व सम्पर्क</h3>
              <div className="space-y-2 text-xs text-[#5a4138]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#a43700] shrink-0 mt-0.5" />
                  <span>गुरुकुल स्नातकोत्तर महाविद्यालय, रुद्रपुर, तिलहर, शाहजहाँपुर, उत्तर प्रदेश - 242307</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#a43700] shrink-0" />
                  <span>+91 95095 38982, +91 91040 62470</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#e3bfb2] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5a4138]">
            <p>© 2025 Gurukul Snatakottar Mahavidyalaya Rudrapur. All Rights Reserved.</p>
            <div className="flex items-center gap-4 font-medium">
              <a href="#home" className="hover:text-[#a43700]">गृहम्</a>
              <a href="#about" className="hover:text-[#a43700]">परिचय</a>
              <a href="#admissions" className="hover:text-[#a43700]">प्रवेश नियम</a>
              <a href="#sahyog" className="hover:text-[#a43700]">सहयोग</a>
              <a href="#contact" className="hover:text-[#a43700]">सम्पर्क</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: World Record Certificate Details */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#a43700] animate-in zoom-in-95">
            <div className="bg-[#a43700] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#ffe088]" />
                <h3 className="font-serif-devanagari text-base sm:text-lg font-bold">
                  गोल्डन बुक ऑफ वर्ल्ड रिकॉर्ड्स - कीर्तिमान {selectedRecord.recordNo}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="text-white hover:text-gray-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[80vh] overflow-y-auto space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#fff1ec] border border-[#e3bfb2]">
                <img
                  src={selectedRecord.certificateUrl}
                  alt={selectedRecord.holderName}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-devanagari text-xl font-bold text-[#a43700]">
                    {selectedRecord.holderName}
                  </h4>
                  <span className="bg-[#ffdbcf] text-[#a43700] px-2.5 py-0.5 rounded text-xs font-bold">
                    {selectedRecord.age}
                  </span>
                </div>
                <p className="text-sm font-bold text-[#b51a1b] uppercase">
                  {selectedRecord.recordTitle}
                </p>
                <p className="text-base font-bold text-[#231916]">
                  उपलब्धि: {selectedRecord.achievement}
                </p>
                <p className="text-xs text-[#5a4138]">
                  माता-पिता: {selectedRecord.parents}
                </p>
                <p className="text-xs text-[#5a4138]">
                  कीर्तिमान तिथि: {selectedRecord.date} | श्रेणी: {selectedRecord.category}
                </p>
                <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed pt-2 border-t border-[#e3bfb2]">
                  {selectedRecord.details}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-5 py-2 rounded-lg bg-[#a43700] text-white text-xs font-bold hover:bg-[#cd4700]"
                >
                  बंद करें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Full Image Viewer Modal */}
      {selectedImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImageModal(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={selectedImageModal}
              alt="विस्तृत छायाचित्र"
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
}
