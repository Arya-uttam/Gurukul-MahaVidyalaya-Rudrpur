export interface WorldRecord {
  id: number;
  recordNo: number;
  holderName: string;
  age: string;
  recordTitle: string;
  achievement: string;
  parents: string;
  date: string;
  category: string;
  certificateUrl: string;
  details: string;
}

export const WORLD_RECORDS: WorldRecord[] = [
  {
    id: 1,
    recordNo: 1,
    holderName: "अक्ष शर्मा",
    age: "12 वर्ष 10 दिन",
    recordTitle: "Most Back Flips in One Minute",
    achievement: "25 बैक फ्लिप (25 Flips in 1 Min)",
    parents: "श्रीमती सोनी एवं श्री मनमोहन शर्मा",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9LKBZxAlHDbVAVmUgEzv_PCc5eGhxJlMXki3lf7GVIjlY2_xF3TYZ6Smxh2kBfyCJX30d-4z-cXrR_Lpes9fLtdg7YMra0g-cl5YA5TIKUAIsM4mMZQXvrDIeK-19FtOIwPCobXbhuAW7gaPqRk8x5EJDBT3NgnejGiedx6-t5lfudxNLzFKmJpIhCmapmy5nm1mqNTafCEfmjFwfQ0btxGalGZUCjjvTQ5F_hSfbrTp_Vs3TCBVc",
    details: "गुरुकुल के 12 वर्षीय ब्रह्मचारी अक्ष शर्मा ने मात्र 1 मिनट में 25 पूर्ण बैक फ्लिप लगाकर नया विश्व कीर्तिमान स्थापित किया।"
  },
  {
    id: 2,
    recordNo: 2,
    holderName: "आयुष",
    age: "08 वर्ष 05 माह 08 दिन",
    recordTitle: "Longest Kapalbhati Pranayam",
    achievement: "06 घंटे 02 मिनट (06H:02M)",
    parents: "श्रीमती पूजा देवी एवं श्री रवि सिंह",
    date: "09 जून 2024",
    category: "Junior Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYOahEUmBl3LsQtRojeeqdYsi82Mmb8nDVKkwUhDvssjjYLzk-FMiaslRGI2q_DPygictyqxcB1CmOgtTXtjbSCl6-Q_tpiSxj4bmE-kmdV7Zcxx4DQhyP9gRCXc0ubxkTUNCRmZOyr9M5fWThxy6MmEAQNGHedo7_LGtykPoaeP5Ssi3A_hOYVKj-zaLkkwgYWVL1cE2vkKjE3e_xbuPe_uTkBRA-ysST1_ltbzypLGT0pOSoxkrR",
    details: "8 वर्षीय बालक आयुष ने अखंड 6 घंटे 2 मिनट तक अनवरत कपालभाति प्राणायाम कर विश्व को अचंभित कर दिया।"
  },
  {
    id: 3,
    recordNo: 3,
    holderName: "दिव्यांश आर्य",
    age: "11 वर्ष 29 दिन",
    recordTitle: "Longest Shirshasana Yoga",
    achievement: "अखंड 3 घंटे (03 Hours Headstand)",
    parents: "श्रीमती वेदमती एवं श्री सुनील आर्य",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANWRTpx0tBOLgIfr7pxb_JajZc-8RpgVsWljm5Vr8GP59o_6gp3mX_Mp7zsu5w4hYWYyyYNNcpXizoqzqvZUM1OHVPTwe-bMupC7R9zxDyF7PuGjlj9-GSYqO7gAKQbCfkQbZaJ420v25n7k0vCFzOSI9NkNMz8cufb5400MEbWe53S6Kz8aevzXyjAnEEend_XujOCD76lBxmyOQuxbg8Hpv881CVgk2co3FSZ97ET8F0OlJ42tzA",
    details: "11 वर्षीय ब्रह्मचारी दिव्यांश आर्य ने लगातार 3 घंटे तक शीर्षासन की कठिन मुद्रा में रहकर कीर्तिमान रचा।"
  },
  {
    id: 4,
    recordNo: 4,
    holderName: "अनमोल कुमार",
    age: "12 वर्ष 08 माह 03 दिन",
    recordTitle: "Mayur Chal Distance in 1 Min",
    achievement: "64 मीटर (Handstand Walk in 1 Min)",
    parents: "श्रीमती शेष कुमारी एवं श्री विजय सिंह",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJeb8O5Whe_ndwRufqEsmZzWevmmuK_KQuOeErA3X0CYbXVrDIby6F2wr-kNtUxe4fRkWazz2nLGej2jmGAwUloiaIVVxef2LWBDHg5SI8QwIG8GNDaCESqKsOtvKzKbdf8cwNjQRgc9DXKrtZ3e2301H_zVoYnRRgC6l-2V9uoSi4Oh5NYgwE6g4ezqgwVEzIJEJ0N2s3YziwZ8OlT13TR1ncfzsc_-nAaJ7FxLoTOQedvr2FMYUQ",
    details: "हाथों के बल मयूर चाल (Handstand walk) में 1 मिनट में 64 मीटर की तेज गति से दूरी तय कर रिकॉर्ड बनाया।"
  },
  {
    id: 5,
    recordNo: 5,
    holderName: "विकास कुमार",
    age: "11 वर्ष 05 माह 08 दिन",
    recordTitle: "Most Sit-ups in Six Hours",
    achievement: "7,068 सिट-अप्स (मात्र 4h 24m)",
    parents: "श्रीमती पूजा देवी एवं श्री रवि सिंह",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvr3ilWYUmoGyZWvT57EZucaTEPrFjrqn77hr1Dg2FlIRLjHEbmTlKeIcC13iFO2briV78G589ah5bBMvwziy8l9Mm_-P4L4GCttXR4_blfr02VyxIJMgNT1Gs8HLWGPIuFOh02m1Y2LXMbWaYusPsgf9grGPuK6BsqsWpAmEr7kxHE1ddNTNYhadUwmt7c95edTAcZ--CjHXdm6YhbJyHK5lE1k1q-EVhPQWYk7BwoV8yPdQ6S-Zp",
    details: "6 घंटे की समय-सीमा में मात्र 4 घंटे 24 मिनट में 7,068 सिट-अप्स लगाकर अद्भुत शारीरिक सहनशक्ति का परिचय दिया।"
  },
  {
    id: 6,
    recordNo: 6,
    holderName: "सन्नी",
    age: "15 वर्ष 04 माह 07 दिन",
    recordTitle: "Longest Surya Namaskar Yoga",
    achievement: "11 घंटे 13 मिनट 50 सेकंड",
    parents: "श्रीमती कंचन एवं श्री सतीश",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgJ-M7cWNBwMsmKq4M52MmrgQD2NSg68u8Q2wvuhb4vYgD4Zpxj78uxVedeLkCKEGksHyYaRe1GutfXGWH40VuXGGXEb_c_n-xeYx0IyUfOjFq6GDrCyCpGIW4JUsXhuyd7vq0xJYIMGKPXiIadlluczC_zllMA9rlUR1gMX77cRmXfr1V-19oF_JDWcQXrTJvctUKNs2yaTi1GRtxdNuCDtLvYt2uqHclSqEE_fb9y8gk-YZHRMQR",
    details: "अखंड 11 घंटे 13 मिनट 50 सेकंड तक अनवरत सूर्य नमस्कार कर संपूर्ण भारत में अनूठा कीर्तिमान स्थापित किया।"
  },
  {
    id: 7,
    recordNo: 7,
    holderName: "आदित्य थापा",
    age: "09 वर्ष 03 माह 30 दिन",
    recordTitle: "Longest Surya Namaskar Yoga",
    achievement: "06 घंटे 13 मिनट 20 सेकंड",
    parents: "श्रीमती सालू एवं श्री सानी थापा",
    date: "09 जून 2024",
    category: "Junior Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqiJtIkGD-pMiyQrpXcIb6d4VD1kBe4PXiZ7S5dVCDuqhDEXvcCLLqWo13Khbugq6ID61TOedlQEHEj3yRQ4fQjbfoyoUIP2Sv_L9q7yVd-ucgvKGvL-FK_H7ju6fx-cPQEHBTzMjfwHuTYzpl9V4UW3qA6ExrXXiwJmiPymK_dNm7tJ3M2i71xlyEiTIjRgZFN1QZLO1MH7IqZLSYNbmhsoMG-Nx_r5Rquu8IKhJeslY1-endWNs",
    details: "9 वर्षीय ब्रह्मचारी आदित्य थापा ने लगातार 6 घंटे 13 मिनट तक सूर्य नमस्कार के चक्र पूरे किए।"
  },
  {
    id: 8,
    recordNo: 8,
    holderName: "चन्द्र शेखर",
    age: "09 वर्ष 07 माह 08 दिन",
    recordTitle: "Most Back Flips in One Minute",
    achievement: "30 बैक फ्लिप (30 Flips in 1 Min)",
    parents: "श्रीमती तारावती एवं श्री अशोक कुमार",
    date: "09 जून 2024",
    category: "Junior Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi_UC9J0pFheEOYWQWxQIZ6x5__QYSdaR7QxlzWPAJtZEWC59QPJvM7EaDhPvKgCUePKcRJjp8v_6ixndkS7YF38hbl3UlESlZDRDD0zF5kjK2rrFFwJikRk-qpaNWgx5YfSZIZ68RIMWE8KacbyPSFxuMHr9W3MmKQ6haZ9ORLHyUCRYL6Tzows7RslWiI88chFD7BDmbN_iOAkMUV_W4i9LcF7XhleYrSyt4L8YtR1YSIljCox7q",
    details: "9 वर्षीय चन्द्र शेखर ने बिजली की गति से 1 मिनट में 30 बैक फ्लिप लगाकर अंतरराष्ट्रीय रिकॉर्ड बनाया।"
  },
  {
    id: 9,
    recordNo: 9,
    holderName: "आदित्य थापा",
    age: "09 वर्ष 03 माह 30 दिन",
    recordTitle: "Most Surya Namaskar Sets in 1 Hr",
    achievement: "568 सेट्स (568 Yoga Sets in 1 Hr)",
    parents: "श्रीमती सालू एवं श्री सानी थापा",
    date: "09 जून 2024",
    category: "Junior Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwq1wmeMtTWUqi12YfeS85V7cYt5TaWFV3mSxqPTcLSHLCT75j4cpjxU7S4sDfxheBVDutkVwMziU9COrKEkzcm3e03FaJ3g7SLuIqKFtaczRtMLKkgPsVwdbJuiSm__cix7wFq--IumN8rmVmFO7NNnoiLZaOKlRBOLfWEoadlb06t_aEX0NqOM6yh7B5u5mJVj30dBemp736SdC-gs7DHUF-7XHCgaS_0iuq9YXgyeeB3xNpFiMv",
    details: "मात्र 1 घंटे में 568 सम्पूर्ण सूर्य नमस्कार सेट्स का कीर्तिमान स्थापित किया।"
  },
  {
    id: 10,
    recordNo: 10,
    holderName: "अनमोल कुमार",
    age: "12 वर्ष 08 माह 03 दिन",
    recordTitle: "Longest Distance Mayur Chal",
    achievement: "155 मीटर (3 मिनट 48 सेकंड में)",
    parents: "श्रीमती शेष कुमारी एवं श्री विजय सिंह",
    date: "09 जून 2024",
    category: "Young Achiever",
    certificateUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Js_wTy2wEjR0E-uEDMkVQZHfkZboGgvQ3wHgD0zGWMSVLHOkKmal8lAXebq4f9KqoBB4m-dFzyWb01B-0Ez7nm1pRnGN6dA0Ym0nCElBNlQxSjmSPq6TJrSMwEvHNGFufSvLccKoJ0lLcks4HwHigutHsG6cLSw3ybeBXSDz-7IXg8ogn2A_Wf9jLtfs9ZWoZasppzKyBoxSjmNmB0h_5Xjcvx0mK5QjGXPlPxmwt2F17lpn5eUh",
    details: "हाथों के बल 155 मीटर की दूरी बिना रुके 3 मिनट 48 सेकंड में नापकर कीर्तिमान रचा।"
  }
];

export interface NeedItem {
  id: number;
  title: string;
  amount: string;
  category: string;
  icon: string;
}

export const GURUKUL_NEEDS: NeedItem[] = [
  { id: 1, title: "200 विद्यार्थियों की क्षमता वाली भोजनशाला", amount: "30 लाख रूपये", category: "आवास एवं भोजन", icon: "restaurant" },
  { id: 2, title: "यज्ञशाला निर्माण एवं जीर्णोद्धार", amount: "25 लाख रूपये", category: "धार्मिक स्थल", icon: "local_fire_department" },
  { id: 3, title: "आधुनिक उपकरणों से सुसज्जित पाठशाला", amount: "25 लाख रूपये", category: "शिक्षा", icon: "school" },
  { id: 4, title: "व्यायामशाला (अखाड़ा व मल्लखम्ब शेड)", amount: "20 लाख रूपये", category: "शारीरिक सौष्ठव", icon: "sports_martial_arts" },
  { id: 5, title: "अतिथिशाला (आगंतुकों हेतु कक्ष)", amount: "20 लाख रूपये", category: "आवास", icon: "hotel" },
  { id: 6, title: "विज्ञान एवं कंप्यूटर प्रयोगशाला", amount: "15 लाख रूपये", category: "STEM शिक्षा", icon: "science" },
  { id: 7, title: "पुस्तकालय एवं वाचनालय", amount: "15 लाख रूपये", category: "ज्ञान सम्पदा", icon: "local_library" },
  { id: 8, title: "संगीत उपकरण एवं कक्ष", amount: "15 लाख रूपये", category: "कला व संस्कृति", icon: "music_note" },
  { id: 9, title: "सौर ऊर्जा पैनल संयंत्र (Green Energy)", amount: "15 लाख रूपये", category: "पर्यावरण व विद्युत", icon: "solar_power" },
  { id: 10, title: "गौशाला विस्तार (120+ देशी गौवंश)", amount: "15 लाख रूपये", category: "गौ सेवा", icon: "cruelty_free" },
  { id: 11, title: "कम्प्यूटर लैब (30 नए सिस्टम)", amount: "10 लाख रूपये", category: "डिजिटल साक्षरता", icon: "computer" },
  { id: 12, title: "प्रचार एवं चिकित्सा वाहन", amount: "07 लाख रूपये", category: "परिवहन", icon: "directions_car" },
  { id: 13, title: "भोजन हेतु अन्न एवं राशन (वार्षिक)", amount: "07 लाख रूपये", category: "अन्नदान", icon: "grain" },
  { id: 14, title: "सभी ब्रह्मचारियों के लिए वस्त्र (वार्षिक)", amount: "1.50 लाख रूपये", category: "छात्र कल्याण", icon: "checkroom" },
  { id: 15, title: "सभी ब्रह्मचारियों के लिए कॉपी-पुस्तकें (वार्षिक)", amount: "1.25 लाख रूपये", category: "अध्ययन सामग्री", icon: "menu_book" },
  { id: 16, title: "1 ब्रह्मचारी की संपूर्ण वार्षिक छात्रवृत्ति", amount: "30 हजार रूपये", category: "दत्तक छात्रवृत्ति", icon: "person_celebrate" }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  imageUrl: string;
  session: string;
  date: string;
  location: string;
  uploader: string;
  caption: string;
}

export const INITIAL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "गुरुकुल के संस्कारित ब्रह्मचारी - प्रार्थना, संयम और अखण्ड अनुशासन",
    category: "yagya",
    categoryLabel: "दैनिक देवयज्ञ",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXoma51UUIFX9atLVCJ3FvhfR1QbBofhjcfQG2qqUfVLI7Ee3VhuAlVFp9ejE4iUN8WzQXs7eX7RBFfsiisIYHYzQSVCLaUsmH06nUvKAssKaO9_7tKaDQPadNeg9iQEHMqyrzAvdw4rtW2VbeFJSlEXHf_lTBA8Pxhe30CW7M6yjrn9P8p2BwJco1Aa3-Xm2it6dI8MsJn9ETyBDFzSEpWLl1oXjoH9PNVxLsJ6qW0S3ybCK3KZk-k4vRp7tHqaBGr47f3xhuzwJjw",
    session: "2025-2026",
    date: "10 मई 2025",
    location: "मुख्य प्रार्थना प्रांगण, रुद्रपुर",
    uploader: "आचार्य उत्तम आर्य",
    caption: "परम पावन प्रातःकालीन वेदमंत्रों के सस्वर पाठ से आलोकित होता दिव्य गुरुकुल प्रांगण।"
  },
  {
    id: "photo-2",
    title: "प्रातःकालीन कुश्ती, दंड-बैठक व मल्लखम्ब साधना",
    category: "akhada",
    categoryLabel: "अखाड़ा व व्यायाम",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1W3kluIF4WBNkWyfVOottg6cjihdiSEghJN47zkNq6xW4xUZipNGiDW2CmNz4PoO2xEHxNTj28DEre88USlhl-Lh22A-Fbe9g0wRX_J8ybf-7Q9m7elPAjfy6jRP4YUBUkCSRIYFO-9Xi0atB0th66bBXfS1ZBNNAfCdQZj1I28INI4RzquSUVO4TCVUJdBY4icl3FhCOIieSx7YAPCZwX6r7c4FmjQ1zg1cKejo6Q",
    session: "2025-2026",
    date: "08 जून 2025",
    location: "वीर हनुमान अखाड़ा, रुद्रपुर",
    uploader: "आचार्य प्रणव आर्य",
    caption: "मिट्टी के पवित्र अखाड़े में ब्रह्मचारियों की प्रातःकालीन मल्लविद्या व शक्ति साधना।"
  },
  {
    id: "photo-3",
    title: "दैनिक देवयज्ञ में गायत्री मंत्रोच्चार व सुगंधित औषधीय आहुतियां",
    category: "yagya",
    categoryLabel: "दैनिक देवयज्ञ",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WqpOSx2QHHjO8JHnwsvZB9gll8h35MoGcrFTcwLRrsTnB1rAw-5nin0H3rUCOtbdJ1opO_cvweP97LPQViOLfBObUW8xC2VeZczX6ZvmtKZOwtdMrJh79_M9PEeEGlJfisVtFXLZa9CxIa4Y9fEUgTBfKYJPLPQ86ddTUmymbLUxwmd2Z-6mdQsVZeK5mHxUykTsUDbabDRE1-CEBpyhgSbUh-YxoL7g4XTADtCP4",
    session: "2025-2026",
    date: "15 जुलाई 2025",
    location: "गुरुकुल यज्ञशाला, रुद्रपुर",
    uploader: "आचार्य उत्तम आर्य",
    caption: "अग्निहोत्र में औषधीय जड़ी-बूटियों एवं शुद्ध देशी गौघृत की आहुति से वातावरण शुद्धिकरण।"
  },
  {
    id: "photo-4",
    title: "पूज्य आचार्य जी द्वारा ऋषि-तुल्य पावन सत्संग व चरित्र निर्माण प्रवचन",
    category: "acharyas",
    categoryLabel: "आचार्य उद्बोधन",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1X3minq1zkDMsZMggr5_m4vWF9dkEBzbxit71ipCVxxblpUSPxD1c2Kw0J9mtX7hXng6-q1CzhWqyCNPkR48ZVCKPUytuyg5Ew4gRt-O5MTtgx_9NlVPktefp-6AUcUYbK1Ln51FfH03aSeS5Gv53rLyms6G23YCXmGmDwaOlpxLAjrUKbgyeT4j7wCz-5GU5gZNq6L72CxQ3Zmf0czEM7QZfNiAXwVJak8bN7qQMjK",
    session: "2025-2026",
    date: "20 अगस्त 2025",
    location: "सत्संग भवन",
    uploader: "मीडिया प्रभारी",
    caption: "छात्रों को ब्रह्मचर्य रक्षा, मातृभूमि सेवा और आदर्श आचरण की दीक्षा।"
  },
  {
    id: "photo-5",
    title: "21वीं सदी के विज्ञान, STEM एवं आधुनिक कंप्यूटर शिक्षा प्रयोगशाला",
    category: "classes",
    categoryLabel: "कम्प्यूटर व विज्ञान",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WSzEgvto_TXXZO_-FkeZTNIFUDicgwGe0q6F2Y9tGWOktf_Vl4N7Fw1tUNpvY-zEloKaYaV0iTsGgqzK2eanf9H4u3JDm6hcrpVk9g4Ef_Gb3d-B7dVhcpU4ceukYjpzmTG0heQkNQ6MilWEXAivZXiFPUdJdd4M2mY23kWQLBIMZjjxr5r8gOSinya_l-QhOLlNVrV6jDLjZ64h_zMiWextSAZIGmxakyKYVv1Qo",
    session: "2025-2026",
    date: "05 सितंबर 2025",
    location: "स्वामी दयानन्द कंप्यूटर लैब",
    uploader: "आईटी समन्वयक",
    caption: "संस्कृत व्याकरण के साथ-साथ कोडिंग, डेटा विश्लेषण और आधुनिक विज्ञान का समन्वय।"
  },
  {
    id: "photo-6",
    title: "पवित्र माटी सेवा, दण्ड बैठक एवं पारंपरिक अखाड़ा व्यायाम",
    category: "akhada",
    categoryLabel: "अखाड़ा व व्यायाम",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XCCgcVjyktmRRA0LBsna4_dIFyeTqEhoolAJ_r8DfQsn8cgDUKq42hfHmLv2Cswx3OluCkUVtOjVIhzKCtxnQGJxbhdFmPN7riHNaGBT_8yabEoRK7OJDIkLMtucDw3oF5YFCe0E9nlFEeHsZ0BtDHpcldu1ALq27jFIAsqTty-hJ0RL01NQq-VMJYhORtXNLKwqjGYN--gaYkwwTH7SSdYfGZ--MFy6dNtweIymHP",
    session: "2025-2026",
    date: "12 अक्टूबर 2025",
    location: "अखाड़ा प्रांगण",
    uploader: "व्यायाम शिक्षक",
    caption: "वज्र के समान बलिष्ठ शरीर और ओजस्वी मस्तिष्क निर्माण हेतु कठोर पारंपरिक अभ्यास।"
  }
];
