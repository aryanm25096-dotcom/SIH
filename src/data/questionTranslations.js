/**
 * Question Translations for Clinical Intake (General Medicine & AYUSH)
 * Supports all 11 Indian Languages + English
 */

export const questionTranslations = {
  // ── General Medicine ───────────────────────────────────────────────
  cc1: {
    hi: {
      text: 'आज आपकी मुख्य स्वास्थ्य समस्या क्या है?',
      narration: 'आज आपकी मुख्य स्वास्थ्य समस्या क्या है? कृपया बोलकर या लिखकर बताएं।',
    },
    mr: {
      text: 'आज तुमची मुख्य आरोग्य समस्या काय आहे?',
      narration: 'आज तुमची मुख्य आरोग्य समस्या काय आहे? कृपया बोलून किंवा टाईप करून सांगा.',
    },
    bn: {
      text: 'আজ আপনার প্রধান স্বাস্থ্য সমস্যা কী?',
      narration: 'আজ আপনার প্রধান স্বাস্থ্য সমস্যা কী? দয়া করে বলুন বা লিখে জানান।',
    },
    ta: {
      text: 'இன்று உங்கள் முக்கிய உடல்நலப் பிரச்சனை என்ன?',
      narration: 'இன்று உங்கள் முக்கிய உடல்நலப் பிரச்சனை என்ன? பேசவும் அல்லது தட்டச்சு செய்யவும்.',
    },
    te: {
      text: 'ఈ రోజు మీ ప్రధాన ఆరోగ్య సమస్య ఏమిటి?',
      narration: 'ఈ రోజు మీ ప్రధాన ఆరోగ్య సమస్య ఏమిటి? మాట్లాడండి లేదా టైప్ చేయండి.',
    },
    gu: {
      text: 'આજે તમારી મુખ્ય આરોગ્ય સમસ્યા શું છે?',
      narration: 'આજે તમારી મુખ્ય આરોગ્ય સમસ્યા શું છે? કૃપા કરીને બોલો અથવા ટાઈપ કરો.',
    },
    kn: {
      text: 'ಇಂದು ನಿಮ್ಮ ಮುಖ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆ ಏನು?',
      narration: 'ಇಂದು ನಿಮ್ಮ ಮುಖ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆ ಏನು? ದಯವಿಟ್ಟು ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.',
    },
    ml: {
      text: 'ഇന്ന് നിങ്ങളുടെ പ്രധാന ആരോഗ്യ പ്രശ്നം എന്താണ്?',
      narration: 'ഇന്ന് നിങ്ങളുടെ പ്രധാന ആരോഗ്യ പ്രശ്നം എന്താണ്? പറയുക അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യുക.',
    },
    pa: {
      text: 'ਅੱਜ ਤੁਹਾਡੀ ਮੁੱਖ ਸਿਹਤ ਸਮੱਸਿਆ ਕੀ ਹੈ?',
      narration: 'ਅੱਜ ਤੁਹਾਡੀ ਮੁੱਖ ਸਿਹਤ ਸਮੱਸਿਆ ਕੀ ਹੈ? ਕਿਰਪਾ ਕਰਕੇ ਬੋਲੋ ਜਾਂ ਟਾਈਪ ਕਰੋ।',
    },
    or: {
      text: 'ଆଜି ଆପଣଙ୍କର ମୁଖ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା କ’ଣ?',
      narration: 'ଆଜି ଆପଣଙ୍କର ମୁଖ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା କ’ଣ? ଦୟାକରି କୁହନ୍ତୁ କିମ୍ବା ଟାଇପ୍ କରନ୍ତୁ।',
    },
    ur: {
      text: 'آج آپ کا بنیادی صحت کا مسئلہ کیا ہے؟',
      narration: 'آج آپ کا بنیادی صحت کا مسئلہ کیا ہے؟ براہ کرم بولیں یا لکھیں۔',
    },
    en: {
      text: 'What is your main health concern today?',
      narration: 'What is your main health concern today?',
    },
  },

  hpi_onset: {
    hi: {
      text: 'यह समस्या कब शुरू हुई?',
      choices: ['आज', 'कुछ दिन पहले', 'लगभग एक सप्ताह पहले', 'एक महीने से अधिक पहले', 'अन्य'],
      narration: 'यह समस्या कब शुरू हुई? नीचे दिए गए विकल्पों में से चुनें।',
    },
    mr: {
      text: 'ही समस्या कधी सुरू झाली?',
      choices: ['आज', 'काही दिवसांपूर्वी', 'सुमारे आठवड्यापूर्वी', 'एका महिन्याहून अधिक पूर्वी', 'इतर'],
      narration: 'ही समस्या कधी सुरू झाली? खालील पर्यायांमधून निवडा.',
    },
    bn: {
      text: 'এই সমস্যাটি কখন শুরু হয়েছিল?',
      choices: ['আজ', 'কয়েক দিন আগে', 'প্রায় এক সপ্তাহ আগে', 'এক মাসেরও বেশি আগে', 'অন্যান্য'],
      narration: 'এই সমস্যাটি কখন শুরু হয়েছিল? নিচের বিকল্পগুলি থেকে বেছে নিন।',
    },
    ta: {
      text: 'இந்தப் பிரச்சனை எப்போது தொடங்கியது?',
      choices: ['இன்று', 'சில நாட்களுக்கு முன்பு', 'சுமார் ஒரு வாரம் முன்பு', 'ஒரு மாதத்திற்கும் மேல்', 'மற்றவை'],
      narration: 'இந்தப் பிரச்சனை எப்போது தொடங்கியது? விருப்பங்களிலிருந்து தேர்வு செய்யவும்.',
    },
    te: {
      text: 'ఈ సమస్య ఎప్పుడు ప్రారంభమైంది?',
      choices: ['ఈ రోజు', 'కొన్ని రోజుల క్రితం', 'సుమారు వారం క్రితం', 'నెల కంటే ఎక్కువ క్రితం', 'ఇతర'],
      narration: 'ఈ సమస్య ఎప్పుడు ప్రారంభమైంది? కింద ఉన్న ఎంపికల నుండి ఎంచుకోండి.',
    },
    gu: {
      text: 'આ સમસ્યા ક્યારે શરૂ થઈ?',
      choices: ['આજે', 'થોડા દિવસ પહેલા', 'આશરે એક અઠવાડિયા પહેલા', 'એક મહિના કરતાં વધુ પહેલા', 'અન્ય'],
      narration: 'આ સમસ્યા ક્યારે શરૂ થઈ? આપેલા વિકલ્પોમાંથી પસંદ કરો.',
    },
    en: {
      text: 'When did this problem start?',
      choices: ['Today', 'A few days ago', 'About a week ago', 'More than a month ago', 'Other'],
      narration: 'When did this problem start?',
    },
  },

  hpi_severity_generic: {
    hi: {
      text: '1 से 10 के पैमाने पर आपकी समस्या कितनी गंभीर है?',
      choices: ['1-3 (हल्की)', '4-6 (मध्यम)', '7-9 (गंभीर)', '10 (अत्यधिक गंभीर)'],
      narration: '1 से 10 के पैमाने पर आपकी समस्या कितनी गंभीर है?',
    },
    mr: {
      text: '1 ते 10 च्या स्केलवर तुमची समस्या किती तीव्र आहे?',
      choices: ['1-3 (सौम्य)', '4-6 (मध्यम)', '7-9 (तीव्र)', '10 (अत्यंत तीव्र)'],
      narration: '1 ते 10 च्या स्केलवर तुमची समस्या किती तीव्र आहे?',
    },
    bn: {
      text: '১ থেকে ১০ স্কেলে সমস্যাটি কতটা তীব্র?',
      choices: ['১-৩ (মৃদু)', '৪-৬ (মাঝারি)', '৭-৯ (তীব্র)', '১০ (চরম তীব্র)'],
      narration: '১ থেকে ১০ স্কেলে সমস্যাটি কতটা তীব্র?',
    },
    en: {
      text: 'How severe is the problem on a scale of 1 to 10?',
      choices: ['1-3 (Mild)', '4-6 (Moderate)', '7-9 (Severe)', '10 (Worst possible)'],
      narration: 'How severe is the problem on a scale of 1 to 10?',
    },
  },

  hpi_associated_generic: {
    hi: {
      text: 'क्या इसके साथ आपको कोई अन्य लक्षण भी हैं? (जैसे बुखार, उल्टी, कमजोरी)',
      narration: 'क्या इसके साथ आपको कोई अन्य लक्षण भी हैं, जैसे बुखार, उल्टी, या कमजोरी?',
    },
    mr: {
      text: 'यासोबत तुम्हाला इतर काही लक्षणे आहेत का? (उदा. ताप, मळमळ, अशक्तपणा)',
      narration: 'यासोबत तुम्हाला इतर काही लक्षणे आहेत का? जसे की ताप, मळमळ किंवा अशक्तपणा.',
    },
    bn: {
      text: 'এর সাথে আপনার অন্য কোনো লক্ষণ আছে কি? (যেমন জ্বর, বমি ভাব, দুর্বলতা)',
      narration: 'এর সাথে আপনার অন্য কোনো লক্ষণ আছে কি? যেমন জ্বর, বমি বা দুর্বলতা?',
    },
    en: {
      text: 'Do you have any other symptoms along with this? (e.g., fever, nausea, weakness)',
      narration: 'Do you have any other symptoms along with this? Such as fever, nausea, or weakness.',
    },
  },

  // ── SOCRATES Pain Assessment ───────────────────────────────────────
  socrates_onset: {
    hi: {
      text: 'दर्द कब और कैसे शुरू हुआ था?',
      choices: ['अचानक शुरू हुआ', 'धीरे-धीरे शुरू हुआ', 'आज', 'कुछ दिन पहले', 'एक सप्ताह से अधिक पहले'],
      narration: 'दर्द कब और कैसे शुरू हुआ था?',
    },
    mr: {
      text: 'वेदना कधी आणि कशा सुरू झाल्या?',
      choices: ['अचानक सुरू', 'हळूहळू सुरू', 'आज', 'काही दिवसांपूर्वी', 'आठवड्याहून अधिक पूर्वी'],
      narration: 'वेदना कधी आणि कशा सुरू झाल्या?',
    },
    bn: {
      text: 'ব্যথা কখন এবং কীভাবে শুরু হয়েছিল?',
      choices: ['হঠাৎ শুরু', 'ধীরে ধীরে শুরু', 'আজ', 'কয়েক দিন আগে', 'এক সপ্তাহেরও বেশি আগে'],
      narration: 'ব্যথা কখন এবং কীভাবে শুরু হয়েছিল?',
    },
    en: {
      text: 'When did the pain start?',
      choices: ['Sudden onset', 'Gradual onset', 'Today', 'A few days ago', 'More than a week ago'],
      narration: 'When did the pain start?',
    },
  },

  socrates_location: {
    hi: {
      text: 'दर्द शरीर में ठीक किस जगह पर हो रहा है?',
      narration: 'दर्द शरीर में ठीक किस जगह पर हो रहा है? कृपया बोलकर या लिखकर बताएं।',
    },
    mr: {
      text: 'वेदना नक्की शरीराच्या कोणत्या भागात होत आहे?',
      narration: 'वेदना नक्की शरीराच्या कोणत्या भागात होत आहे?',
    },
    bn: {
      text: 'ব্যথা ঠিক কোথায় হচ্ছে?',
      narration: 'ব্যথা ঠিক কোথায় হচ্ছে? দয়া করে বলুন বা লিখুন।',
    },
    en: {
      text: 'Where exactly is the pain located?',
      narration: 'Where exactly is the pain located?',
    },
  },

  socrates_character: {
    hi: {
      text: 'दर्द किस प्रकार का महसूस होता है?',
      choices: ['तेज़ / चुभने जैसा', 'हल्का / लगातार मीठा दर्द', 'जलन जैसा', 'ऐंठन / मरोड़', 'दबाव / भारीपन', 'धड़कने जैसा'],
      narration: 'दर्द किस प्रकार का महसूस होता है? नीचे दिए गए विकल्पों में से चुनें।',
    },
    mr: {
      text: 'वेदना कशा प्रकारच्या वाटतात?',
      choices: ['तीव्र / टोचल्यासारख्या', 'मंद / सतत दुखणे', 'जळजळ', 'गोळा येणे / पेटके', 'दबाव / जडपणा', 'ठोकल्यासारख्या'],
      narration: 'वेदना कशा प्रकारच्या वाटतात?',
    },
    bn: {
      text: 'ব্যথার ধরণ কেমন?',
      choices: ['তীব্র / খোঁচা মারা', 'মৃদু / একটানা ব্যথা', 'জ্বালাপোড়া', 'খিমচে ধরা', 'চাপ / আঁটসাঁট', 'দপদপ করা'],
      narration: 'ব্যথার ধরণ কেমন? নিচের বিকল্প থেকে বেছে নিন।',
    },
    en: {
      text: 'How would you describe the pain?',
      choices: ['Sharp/Stabbing', 'Dull/Aching', 'Burning', 'Cramping', 'Pressure/Tightness', 'Throbbing'],
      narration: 'How would you describe the pain?',
    },
  },

  socrates_radiation: {
    hi: {
      text: 'क्या यह दर्द शरीर के किसी अन्य हिस्से में भी फैलता है?',
      choices: ['नहीं', 'बायां हाथ या कंधा', 'जबड़ा या गर्दन', 'पीठ में', 'अन्य क्षेत्र'],
      narration: 'क्या यह दर्द शरीर के किसी अन्य हिस्से में भी फैलता है?',
    },
    mr: {
      text: 'ही वेदना शरीराच्या इतर भागात पसरते का?',
      choices: ['नाही', 'डावा हात किंवा खांदा', 'दाढ किंवा मान', 'पाठीत', 'इतर भाग'],
      narration: 'ही वेदना शरीराच्या इतर भागात पसरते का?',
    },
    bn: {
      text: 'ব্যথা কি শরীরের অন্য অংশে ছড়িয়ে পড়ে?',
      choices: ['না', 'বাম হাত বা কাঁধ', 'চোয়াল বা ঘাড়', 'পিঠ', 'অন্যান্য অংশ'],
      narration: 'ব্যথা কি শরীরের অন্য অংশে ছড়িয়ে পড়ে?',
    },
    en: {
      text: 'Does the pain spread to any other part of your body?',
      choices: ['No', 'Left arm or shoulder', 'Jaw or neck', 'Back', 'Other area'],
      narration: 'Does the pain spread to any other part of your body?',
    },
  },

  socrates_duration: {
    hi: {
      text: 'दर्द का दौरा कितनी देर तक रहता है?',
      choices: ['कुछ सेकंड', 'कुछ मिनट', 'कई घंटे', 'लगातार / रुकता नहीं'],
      narration: 'दर्द का दौरा कितनी देर तक रहता है?',
    },
    mr: {
      text: 'वेदनेचा त्रास किती वेळ टिकतो?',
      choices: ['काही सेकंद', 'काही मिनिटे', 'काही तास', 'सतत / थांबत नाही'],
      narration: 'वेदनेचा त्रास किती वेळ टिकतो?',
    },
    bn: {
      text: 'ব্যথা কতক্ষণ স্থায়ী হয়?',
      choices: ['কয়েক সেকেন্ড', 'কয়েক মিনিট', 'কয়েক ঘণ্টা', 'একটানা / থামে না'],
      narration: 'ব্যথা কতক্ষণ স্থায়ী হয়?',
    },
    en: {
      text: 'How long does each episode of pain last?',
      choices: ['Seconds', 'Minutes', 'Hours', 'Constant / does not stop'],
      narration: 'How long does each episode of pain last?',
    },
  },

  socrates_severity: {
    hi: {
      text: '1 से 10 के पैमाने पर दर्द कितना तीव्र है?',
      choices: ['1-3 (हल्का दर्द)', '4-6 (मध्यम दर्द)', '7-9 (तेज़ दर्द)', '10 (असहनीय दर्द)'],
      narration: '1 से 10 के पैमाने पर दर्द कितना तीव्र है?',
    },
    mr: {
      text: '1 ते 10 च्या स्केलवर वेदना किती तीव्र आहेत?',
      choices: ['1-3 (कमी वेदना)', '4-6 (मध्यम वेदना)', '7-9 (तीव्र वेदना)', '10 (असह्य वेदना)'],
      narration: '1 ते 10 च्या स्केलवर वेदना किती तीव्र आहेत?',
    },
    bn: {
      text: '১ থেকে ১০ স্কেলে ব্যথা কতটা তীব্র?',
      choices: ['১-৩ (মৃদু ব্যথা)', '৪-৬ (মাঝারি ব্যথা)', '৭-৯ (তীব্র ব্যথা)', '১০ (চরম অসহ্য)'],
      narration: '১ থেকে ১০ স্কেলে ব্যথা কতটা তীব্র?',
    },
    en: {
      text: 'On a scale of 1 to 10, how severe is the pain?',
      choices: ['1-3 (Mild)', '4-6 (Moderate)', '7-9 (Severe)', '10 (Worst possible)'],
      narration: 'On a scale of 1 to 10, how severe is the pain?',
    },
  },

  socrates_aggravating: {
    hi: {
      text: 'किस चीज़ से दर्द और बढ़ जाता है?',
      choices: ['शारीरिक परिश्रम / चलने-फिरने से', 'खाने या पीने से', 'लेटने पर', 'गहरी सांस लेने से', 'कुछ खास नहीं', 'अन्य'],
      narration: 'किस चीज़ से दर्द और बढ़ जाता है?',
    },
    mr: {
      text: 'कशाने वेदना अधिक वाढतात?',
      choices: ['शारीरिक हालचालींनी', 'खाण्या-पिण्याने', 'झोपल्यावर', 'दीर्घ श्वास घेतल्याने', 'काही विशेष नाही', 'इतर'],
      narration: 'कशाने वेदना अधिक वाढतात?',
    },
    bn: {
      text: 'কী কারণে ব্যথা বাড়ে?',
      choices: ['পরিশ্রম করলে', 'খাওয়া বা পানের পর', 'শুয়ে থাকলে', 'গভীর শ্বাস নিলে', 'নির্দিষ্ট কিছু নয়', 'অন্যান্য'],
      narration: 'কী কারণে ব্যথা বাড়ে?',
    },
    en: {
      text: 'What makes the pain worse?',
      choices: ['Physical exertion', 'Eating or drinking', 'Lying down', 'Deep breathing', 'Nothing specific', 'Other'],
      narration: 'What makes the pain worse?',
    },
  },

  socrates_relieving: {
    hi: {
      text: 'किस चीज़ से दर्द में आराम मिलता है?',
      choices: ['आराम करने से', 'दवा लेने से', 'बैठने/लेटने की स्थिति बदलने से', 'किसी चीज़ से नहीं', 'अन्य'],
      narration: 'किस चीज़ से दर्द में आराम मिलता है?',
    },
    mr: {
      text: 'कशाने वेदना कमी होतात?',
      choices: ['विश्रांतीने', 'औषधाने', 'स्थिती बदलल्याने', 'कशानेही फरक पडत नाही', 'इतर'],
      narration: 'कशाने वेदना कमी होतात?',
    },
    bn: {
      text: 'কীসে ব্যথা কমে?',
      choices: ['বিশ্রামে', 'ওষুধে', 'অবস্থান পরিবর্তনে', 'কিছুতেই কমে না', 'অন্যান্য'],
      narration: 'কীসে ব্যথা কমে?',
    },
    en: {
      text: 'What makes the pain better?',
      choices: ['Rest', 'Medication', 'Change of position', 'Nothing helps', 'Other'],
      narration: 'What makes the pain better?',
    },
  },

  socrates_associated: {
    hi: {
      text: 'क्या दर्द के साथ इनमें से कोई अन्य लक्षण भी हैं?',
      choices: ['सांस लेने में कठिनाई', 'उल्टी या जी मिचलाना', 'पसीना आना', 'चक्कर आना', 'बुखार', 'इनमें से कोई नहीं'],
      narration: 'क्या दर्द के साथ इनमें से कोई अन्य लक्षण भी हैं?',
    },
    mr: {
      text: 'वेदनेसोबत खालीलपैकी काही लक्षणे आहेत का?',
      choices: ['श्वास घेण्यास त्रास', 'मळमळ किंवा उलट्या', 'घाम येणे', 'चक्कर येणे', 'ताप', 'यापैकी काहीही नाही'],
      narration: 'वेदनेसोबत खालीलपैकी काही लक्षणे आहेत का?',
    },
    bn: {
      text: 'ব্যথার সাথে কি এই লক্ষণগুলির কোনোটি আছে?',
      choices: ['শ্বাসকষ্ট', 'বমি বা বমি বমি ভাব', 'ঘাম হওয়া', 'মাথা ঘোরা', 'জ্বর', 'এর কোনোটিই নয়'],
      narration: 'ব্যথার সাথে কি এই লক্ষণগুলির কোনোটি আছে?',
    },
    en: {
      text: 'Do you have any of these symptoms along with the pain?',
      choices: ['Difficulty breathing', 'Nausea or vomiting', 'Sweating', 'Dizziness', 'Fever', 'None of these'],
      narration: 'Do you have any of these symptoms along with the pain?',
    },
  },

  pmh1: {
    hi: {
      text: 'क्या आपको पहले से कोई बीमारी है? (जैसे शुगर, बीपी, दमा/अस्थमा)',
      narration: 'क्या आपको पहले से कोई बीमारी है? जैसे शुगर, हाई बीपी या अस्थमा।',
    },
    mr: {
      text: 'तुम्हाला आधीपासून काही आजार आहेत का? (उदा. मधुमेह, उच्च रक्तदाब, दमा)',
      narration: 'तुम्हाला आधीपासून काही आजार आहेत का? जसे की मधुमेह किंवा उच्च रक्तदाब.',
    },
    bn: {
      text: 'আপনার কি কোনো চলমান রোগ আছে? (যেমন ডায়াবেটিস, উচ্চ রক্তচাপ, হাঁপানি)',
      narration: 'আপনার কি কোনো চলমান রোগ আছে? যেমন ডায়াবেটিস বা উচ্চ রক্তচাপ?',
    },
    en: {
      text: 'Do you have any ongoing medical conditions? (e.g., diabetes, hypertension, asthma)',
      narration: 'Do you have any ongoing medical conditions, such as diabetes, hypertension, or asthma?',
    },
  },

  psh1: {
    hi: {
      text: 'क्या अतीत में आपकी कोई सर्जरी या ऑपरेशन हुआ है?',
      choices: ['नहीं', 'हाँ — मैं बताऊंगा'],
      narration: 'क्या अतीत में आपकी कोई सर्जरी या ऑपरेशन हुआ है?',
    },
    mr: {
      text: 'भूतकाळात तुमची कोणती शस्त्रक्रिया झाली आहे का?',
      choices: ['नाही', 'हो — मी सांगेन'],
      narration: 'भूतकाळात तुमची कोणती शस्त्रक्रिया झाली आहे का?',
    },
    bn: {
      text: 'অতীতে আপনার কি কোনো সার্জারি বা অস্ত্রোপচার হয়েছে?',
      choices: ['না', 'হ্যাঁ — আমি বলব'],
      narration: 'অতীতে আপনার কি কোনো সার্জারি বা অস্ত্রোপচার হয়েছে?',
    },
    en: {
      text: 'Have you had any surgeries in the past?',
      choices: ['No', 'Yes — I will describe'],
      narration: 'Have you had any surgeries in the past?',
    },
  },

  psh2: {
    hi: {
      text: 'कृपया पूर्व सर्जरी का विवरण दें (ऑपरेशन का प्रकार, लगभग वर्ष)।',
      narration: 'कृपया पूर्व सर्जरी का विवरण दें। ऑपरेशन का प्रकार और वर्ष बताएं।',
    },
    mr: {
      text: 'कृपया मागील शस्त्रक्रियेची माहिती द्या (प्रकार, अंदाजे वर्ष).',
      narration: 'कृपया मागील शस्त्रक्रियेची माहिती द्या.',
    },
    bn: {
      text: 'অনুগ্রহ করে পূর্ববর্তী সার্জারির বিবরণ দিন (ধরন, আনুমানিক বছর)।',
      narration: 'অনুগ্রহ করে পূর্ববর্তী সার্জারির বিবরণ দিন।',
    },
    en: {
      text: 'Please describe any past surgeries (type, approximate year).',
      narration: 'Please describe any past surgeries, including type and approximate year.',
    },
  },

  drug1: {
    hi: {
      text: 'क्या आप वर्तमान में कोई दवा ले रहे हैं? यदि हाँ, तो कृपया नाम बताएं।',
      narration: 'क्या आप वर्तमान में कोई दवा ले रहे हैं? यदि हाँ, तो कृपया नाम बताएं।',
    },
    mr: {
      text: 'सध्या तुम्ही कोणती औषधे घेत आहात का? असल्यास कृपया नावे सांगा.',
      narration: 'सध्या तुम्ही कोणती औषधे घेत आहात का?',
    },
    bn: {
      text: 'আপনি কি বর্তমানে কোনো ওষুধ খাচ্ছেন? যদি হ্যাঁ হয়, দয়া করে নাম বলুন।',
      narration: 'আপনি কি বর্তমানে কোনো ওষুধ খাচ্ছেন? দয়া করে নাম বলুন।',
    },
    en: {
      text: 'Are you currently taking any medications? If yes, please list them.',
      narration: 'Are you currently taking any medications? If yes, please list them.',
    },
  },

  allergy1: {
    hi: {
      text: 'क्या आपको किसी दवा, भोजन या अन्य चीज़ से कोई एलर्जी है?',
      narration: 'क्या आपको किसी दवा, भोजन या अन्य चीज़ से कोई एलर्जी है?',
    },
    mr: {
      text: 'तुम्हाला कोणत्याही औषध, अन्न किंवा घटकाची ॲलर्जी आहे का?',
      narration: 'तुम्हाला कोणत्याही औषध किंवा अन्नाची ॲलर्जी आहे का?',
    },
    bn: {
      text: 'আপনার কি কোনো ওষুধ, খাবার বা অন্য কোনো জিনিসে অ্যালার্জি আছে?',
      narration: 'আপনার কি কোনো ওষুধ বা খাবারে অ্যালার্জি আছে?',
    },
    en: {
      text: 'Do you have any known allergies to medications, food, or other substances?',
      narration: 'Do you have any known allergies to medications, food, or other substances?',
    },
  },

  fhx1: {
    hi: {
      text: 'क्या आपके परिवार के करीबी सदस्यों (माता-पिता, भाई-बहन) को कोई गंभीर बीमारी है?',
      narration: 'क्या आपके परिवार के करीबी सदस्यों को कोई गंभीर बीमारी है?',
    },
    mr: {
      text: 'तुमच्या जवळच्या नातेवाईकांना (आई-वडील, भावंडे) काही गंभीर आजार आहेत का?',
      narration: 'तुमच्या जवळच्या नातेवाईकांना काही गंभीर आजार आहेत का?',
    },
    bn: {
      text: 'আপনার পরিবারের ঘনিষ্ঠ সদস্যদের (পিতা-মাতা, ভাই-বোন) কি কোনো গুরুতর রোগ আছে?',
      narration: 'আপনার পরিবারের সদস্যদের কি কোনো গুরুতর রোগ আছে?',
    },
    en: {
      text: 'Do any of your close family members (parents, siblings) have any major medical conditions?',
      narration: 'Do any of your close family members have any major medical conditions?',
    },
  },

  phx1: {
    hi: {
      text: 'क्या आप धूम्रपान, शराब या किसी भी रूप में तंबाकू का सेवन करते हैं?',
      choices: ['कोई नहीं', 'धूम्रपान (बीड़ी/सिगरेट)', 'शराब', 'तंबाकू (गुटखा/खैनी)', 'एक से अधिक — मैं बताऊंगा'],
      narration: 'क्या आप धूम्रपान, शराब या तंबाकू का सेवन करते हैं?',
    },
    mr: {
      text: 'तुम्ही धुम्रपान, मद्यपान किंवा कोणत्याही स्वरूपात तंबाखूचे सेवन करता का?',
      choices: ['काहीही नाही', 'धूम्रपान', 'मद्यपान', 'तंबाखू सेवन', 'एकाहून अधिक — मी सांगेन'],
      narration: 'तुम्ही धुम्रपान, मद्यपान किंवा तंबाखूचे सेवन करता का?',
    },
    bn: {
      text: 'আপনি কি ধূমপান, মদ্যপান বা কোনো তামাকজাত দ্রব্য ব্যবহার করেন?',
      choices: ['কোনোটি নয়', 'ধূমপান', 'মদ্যপান', 'তামাক', 'একাধিক — আমি বলব'],
      narration: 'আপনি কি ধূমপান, মদ্যপান বা তামাকজাত দ্রব্য ব্যবহার করেন?',
    },
    en: {
      text: 'Do you smoke, consume alcohol, or use tobacco in any form?',
      choices: ['None', 'Smoking', 'Alcohol', 'Tobacco (chewing)', 'Multiple — I will describe'],
      narration: 'Do you smoke, consume alcohol, or use tobacco in any form?',
    },
  },

  phx2: {
    hi: {
      text: 'आप अपने खान-पान और नींद की दिनचर्या का वर्णन कैसे करेंगे?',
      narration: 'आप अपने खान-पान और नींद की दिनचर्या का वर्णन कैसे करेंगे?',
    },
    mr: {
      text: 'तुम्ही तुमचे खाणेपिणे आणि झोपेची पद्धत कशी सांगाल?',
      narration: 'तुम्ही तुमचे खाणेपिणे आणि झोपेची पद्धत कशी सांगाल?',
    },
    bn: {
      text: 'আপনার খাদ্যাভ্যাস ও ঘুমের ধরণ কেমন?',
      narration: 'আপনার খাদ্যাভ্যাস ও ঘুমের ধরণ কেমন?',
    },
    en: {
      text: 'How would you describe your diet and sleep pattern?',
      narration: 'How would you describe your diet and sleep pattern?',
    },
  },

  ros1: {
    hi: {
      text: 'पिछले कुछ हफ्तों में, क्या आपने इनमें से किसी का अनुभव किया है?',
      choices: ['अकारण वजन कम होना', 'लगातार थकान', 'बुखार या रात को पसीना', 'भूख में बदलाव', 'उपरोक्त में से कोई नहीं'],
      narration: 'पिछले कुछ हफ्तों में, क्या आपने इनमें से किसी लक्षण का अनुभव किया है?',
    },
    mr: {
      text: 'गेल्या काही आठवड्यांत तुम्हाला यापैकी काही अनुभव आला आहे का?',
      choices: ['विनाकारण वजन कमी होणे', 'सतत थकवा', 'ताप किंवा रात्री घाम', 'भुकेमध्ये बदल', 'वरीलपैकी काहीही नाही'],
      narration: 'गेल्या काही आठवड्यांत तुम्हाला यापैकी काही अनुभव आला आहे का?',
    },
    bn: {
      text: 'গত কয়েক সপ্তাহে আপনি কি এগুলির কোনোটি অনুভব করেছেন?',
      choices: ['অকারণে ওজন হ্রাস', 'একটানা ক্লান্তি', 'জ্বর বা রাতে ঘাম', 'ক্ষুধার পরিবর্তন', 'উপরের কোনোটিই নয়'],
      narration: 'গত কয়েক সপ্তাহে আপনি কি এগুলির কোনোটি অনুভব করেছেন?',
    },
    en: {
      text: 'In the last few weeks, have you experienced any of these?',
      choices: ['Unexplained weight loss', 'Persistent fatigue', 'Fever or night sweats', 'Changes in appetite', 'None of the above'],
      narration: 'In the last few weeks, have you experienced any of these?',
    },
  },

  // ── AYUSH Questions ────────────────────────────────────────────────
  ayush_cc: {
    hi: {
      text: 'आज आपकी मुख्य स्वास्थ्य समस्या क्या है?',
      narration: 'आज आपकी मुख्य स्वास्थ्य समस्या क्या है? कृपया बताएं।',
    },
    mr: {
      text: 'आज तुमची मुख्य आरोग्य समस्या काय आहे?',
      narration: 'आज तुमची मुख्य आरोग्य समस्या काय आहे?',
    },
    bn: {
      text: 'আজ আপনার প্রধান স্বাস্থ্য সমস্যা কী?',
      narration: 'আজ আপনার প্রধান স্বাস্থ্য समस्या কী?',
    },
    en: {
      text: 'What is your main health concern today?',
      narration: 'What is your main health concern today?',
    },
  },

  prakriti: {
    hi: {
      term: 'प्रकृति (Prakriti)',
      plainExplanation: 'आपकी स्वाभाविक शारीरिक प्रकृति — जन्मजात वात, पित्त और कफ का संतुलन।',
      text: 'आप अपने स्वाभाविक शरीर प्रकार का वर्णन कैसे करेंगे?',
      choices: [
        'दुबला शरीर, रूखी त्वचा, सक्रिय मन (वात प्रधान)',
        'मध्यम शरीर, गर्म शरीर, तीव्र बुद्धि (पित्त प्रधान)',
        'भारी शरीर, तैलीय त्वचा, शांत स्वभाव (कफ प्रधान)',
        'मिश्रित / मुझे निश्चित नहीं पता',
      ],
      narration: 'प्रकृति परीक्षा: आप अपने स्वाभाविक शरीर प्रकार का वर्णन कैसे करेंगे?',
    },
    mr: {
      term: 'प्रकृती (Prakriti)',
      plainExplanation: 'तुमची नैसर्गिक शारीरिक प्रकृती — वात, पित्त आणि कफ यांचे जन्मजात संतुलन.',
      text: 'तुम्ही तुमच्या नैसर्गिक शरीरयष्टीचे वर्णन कसे कराल?',
      choices: [
        'सडपातळ शरीर, कोरडी त्वचा, चंचल मन (वात प्रधान)',
        'मध्यम शरीर, उष्ण शरीर, तीक्ष्ण बुद्धी (पित्त प्रधान)',
        'जड शरीर, तेलकट त्वचा, शांत स्वभाव (कफ प्रधान)',
        'मिश्रित / नक्की माहित नाही',
      ],
      narration: 'प्रकृती परीक्षा: तुम्ही तुमच्या नैसर्गिक शरीरयष्टीचे वर्णन कसे कराल?',
    },
    bn: {
      term: 'প্রকৃতি (Prakriti)',
      plainExplanation: 'আপনার স্বাভাবিক শারীরিক গঠন — বাত, পিত্ত ও কফের ভারসাম্য।',
      text: 'আপনার স্বাভাবিক শারীরিক গঠন কেমন?',
      choices: [
        'পাতলা শরীর, শুষ্ক ত্বক (বাত প্রধান)',
        'মাঝারি শরীর, উষ্ণ দেহ (পিত্ত প্রধান)',
        'ভারী শরীর, তৈলাক্ত ত্বক (কফ প্রধান)',
        'মিশ্র / নিশ্চিত নই',
      ],
      narration: 'প্রকৃতি পরীক্ষা: আপনার স্বাভাবিক শারীরিক গঠন কেমন?',
    },
    en: {
      term: 'Prakriti',
      plainExplanation: 'Your natural body constitution — the inherent balance of Vata, Pitta, and Kapha you were born with.',
      text: 'How would you describe your natural body type?',
      choices: [
        'Thin build, dry skin, active mind (Vata-predominant)',
        'Medium build, warm body, sharp intellect (Pitta-predominant)',
        'Heavy build, oily skin, calm temperament (Kapha-predominant)',
        'Mixed / I am not sure',
      ],
      narration: 'Prakriti assessment. How would you describe your natural body type?',
    },
  },

  vikriti: {
    hi: {
      term: 'विकृति (Vikriti)',
      plainExplanation: 'असंतुलन की वर्तमान स्थिति — इस समय आपका शरीर स्वाभाविक संतुलन से कैसे अलग है।',
      text: 'हाल ही में आपने अपने शरीर में क्या बदलाव महसूस किए हैं?',
      choices: [
        'रूखापन, गैस, चिंता या जोड़ों में दर्द (वात असंतुलन)',
        'अधिक गर्मी, एसिडिटी, चिड़चिड़ापन या त्वचा पर दाने (पित्त असंतुलन)',
        'भारीपन, कफ/जकड़न, सुस्ती या सूजन (कफ असंतुलन)',
        'कोई बड़ा बदलाव नहीं',
      ],
      narration: 'विकृति परीक्षा: हाल ही में आपने अपने शरीर में क्या असंतुलन महसूस किया है?',
    },
    mr: {
      term: 'विकृती (Vikriti)',
      plainExplanation: 'असंतुलनाची सद्यस्थिती — या वेळी तुमचे शरीर नैसर्गिक संतुलनापासून कसे विचलित झाले आहे.',
      text: 'नुकतेच तुमच्या शरीरात काय बदल जाणवले आहेत?',
      choices: [
        'कोरडेपणा, गॅस, चिंता किंवा सांधेदुखी (वात असंतुलन)',
        'उष्णता, ॲसिडिटी किंवा त्वचेवर पुरळ (पित्त असंतुलन)',
        'जडपणा, कफ, आळस किंवा सूज (कफ असंतुलन)',
        'फारसा बदल नाही',
      ],
      narration: 'विकृती परीक्षा: शरीरात काय असंतुलन जाणवले आहे?',
    },
    en: {
      term: 'Vikriti',
      plainExplanation: 'Your current state of imbalance — how your body deviates from your natural constitution right now.',
      text: 'What changes have you noticed in your body recently?',
      choices: [
        'Increased dryness, gas, anxiety, or joint pain (Vata aggravation)',
        'Increased heat, acidity, irritability, or skin rashes (Pitta aggravation)',
        'Increased heaviness, congestion, lethargy, or swelling (Kapha aggravation)',
        'No major change',
      ],
      narration: 'Vikriti assessment. What changes have you noticed in your body recently?',
    },
  },

  sara: {
    hi: {
      term: 'सार (Sara)',
      plainExplanation: 'आपके शरीर के धातुओं की गुणवत्ता और शुद्धता।',
      text: 'आप अपनी त्वचा, बाल और समग्र शारीरिक ताकत का वर्णन कैसे करेंगे?',
      choices: [
        'चिकनी त्वचा, घने बाल, मजबूत नाखून',
        'कोमल त्वचा, पतले बाल, मध्यम ताकत',
        'रूखी या सूखी त्वचा, पतले या कमजोर बाल',
        'मिश्रित विशेषताएं',
      ],
      narration: 'सार परीक्षा: आप अपनी त्वचा, बाल और शारीरिक ताकत का वर्णन कैसे करेंगे?',
    },
    en: {
      term: 'Sara',
      plainExplanation: 'The quality and purity of your body tissues — assessed through skin texture, hair, bone strength, etc.',
      text: 'How would you describe your skin, hair, and overall tissue quality?',
      choices: [
        'Smooth skin, thick hair, strong nails',
        'Soft skin, fine hair, moderate strength',
        'Rough or dry skin, thin or brittle hair',
        'Mixed characteristics',
      ],
      narration: 'Sara assessment. How would you describe your skin, hair, and overall tissue quality?',
    },
  },

  samhanana: {
    hi: {
      term: 'संहनन (Samhanana)',
      plainExplanation: 'शारीरिक बनावट और गठन — आपका शरीर कितना सुगठित और मजबूत है।',
      text: 'आप अपनी शारीरिक बनावट और ढांचे का वर्णन कैसे करेंगे?',
      choices: [
        'मजबूत और सुगठित',
        'औसत बनावट',
        'पतला या कमजोर ढांचा',
        'अधिक वजन या भारी ढांचा',
      ],
      narration: 'संहनन परीक्षा: आप अपनी शारीरिक बनावट और ढांचे का वर्णन कैसे करेंगे?',
    },
    en: {
      term: 'Samhanana',
      plainExplanation: 'Your body compactness and structural build — how well-proportioned and sturdy your frame is.',
      text: 'How would you describe your physical build and structure?',
      choices: [
        'Well-built and compact',
        'Average build',
        'Thin or fragile frame',
        'Overweight or heavy frame',
      ],
      narration: 'Samhanana assessment. How would you describe your physical build and structure?',
    },
  },

  pramana: {
    hi: {
      term: 'प्रमाण (Pramana)',
      plainExplanation: 'शरीर का अनुपात और माप।',
      text: 'आप अपने शरीर के अनुपात का वर्णन कैसे करेंगे?',
      choices: [
        'संतुलित ऊंचाई और हाथ-पैर',
        'लंबे हाथ-पैर और अधिक ऊंचाई',
        'छोटे हाथ-पैर और कम ऊंचाई',
        'निश्चित नहीं / सामान्य',
      ],
      narration: 'प्रमाण परीक्षा: आप अपने शरीर के अनुपात का वर्णन कैसे करेंगे?',
    },
    en: {
      term: 'Pramana',
      plainExplanation: 'Your body proportions and measurements — height, limb length, overall symmetry.',
      text: 'How would you describe your body proportions?',
      choices: [
        'Well-proportioned height and limbs',
        'Tall with long limbs',
        'Short with compact limbs',
        'Not sure / average',
      ],
      narration: 'Pramana assessment. How would you describe your body proportions?',
    },
  },

  satmya: {
    hi: {
      term: 'सात्म्य (Satmya)',
      plainExplanation: 'शरीर की अनुकूलन क्षमता और सहनशीलता।',
      text: 'आहार, मौसम या दिनचर्या में बदलाव पर आपका शरीर कैसी प्रतिक्रिया देता है?',
      choices: [
        'आसानी से ढल जाता है, कम बीमार पड़ता है',
        'मध्यम अनुकूलन',
        'जल्दी बीमार या असहज हो जाता है',
        'निश्चित नहीं',
      ],
      narration: 'सात्म्य परीक्षा: आहार या मौसम में बदलाव पर आपका शरीर कैसी प्रतिक्रिया देता है?',
    },
    en: {
      term: 'Satmya',
      plainExplanation: "Your body's adaptability and tolerance — what foods, climates, and substances suit you naturally.",
      text: 'How does your body react to changes in diet, weather, or routine?',
      choices: [
        'Adapts easily, rarely falls ill',
        'Moderate adaptability',
        'Easily disturbed or falls ill with small changes',
        'Not sure',
      ],
      narration: 'Satmya assessment. How does your body react to changes in diet, weather, or routine?',
    },
  },

  ahara_shakti: {
    hi: {
      term: 'आहार शक्ति (Ahara Shakti)',
      plainExplanation: 'पाचन अग्नि और भूख की क्षमता।',
      text: 'आपकी भूख और पाचन क्रिया कैसी है?',
      choices: [
        'तीव्र भूख और अच्छा पाचन (तीक्ष्णाग्नि)',
        'अनियमित भूख और गैस/कब्ज (विषमाग्नि)',
        'धीमी भूख और भारीपन (मंदाग्नि)',
        'संतुलित और नियमित पाचन (समाग्नि)',
      ],
      narration: 'आहार शक्ति परीक्षा: आपकी भूख और पाचन क्रिया कैसी है?',
    },
    en: {
      term: 'Ahara Shakti',
      plainExplanation: 'Your digestive capacity and appetite strength.',
      text: 'How is your appetite and digestion?',
      choices: [
        'Strong appetite and rapid digestion (Tikshnagni)',
        'Irregular appetite with gas or bloating (Vishamagni)',
        'Low appetite, slow digestion with heaviness (Mandagni)',
        'Balanced, regular appetite and smooth digestion (Samagni)',
      ],
      narration: 'Ahara Shakti assessment. How is your appetite and digestion?',
    },
  },

  vyayama_shakti: {
    hi: {
      term: 'व्यायाम शक्ति (Vyayama Shakti)',
      plainExplanation: 'शारीरिक सहनशक्ति और श्रम करने की क्षमता।',
      text: 'आपकी शारीरिक सहनशक्ति और व्यायाम करने की क्षमता कैसी है?',
      choices: [
        'उत्कृष्ट — आसानी से भारी काम कर सकते हैं',
        'मध्यम — सामान्य दैनिक काम ठीक रहता है',
        'कम — जल्दी थक जाते हैं',
      ],
      narration: 'व्यायाम शक्ति परीक्षा: आपकी शारीरिक सहनशक्ति कैसी है?',
    },
    en: {
      term: 'Vyayama Shakti',
      plainExplanation: 'Your physical endurance, stamina, and capacity for physical exertion.',
      text: 'How is your physical stamina and capacity for exercise?',
      choices: [
        'High stamina — can do strenuous work easily',
        'Moderate stamina — manage normal daily activities well',
        'Low stamina — get tired very quickly',
      ],
      narration: 'Vyayama Shakti assessment. How is your physical stamina and capacity for exercise?',
    },
  },

  vaya: {
    hi: {
      term: 'वय (Vaya)',
      plainExplanation: 'आपकी आयु वर्ग का मूल्यांकन।',
      text: 'आपकी वर्तमान आयु वर्ग क्या है?',
      choices: [
        'बाल्यावस्था / युवा (16 से कम)',
        'युवावस्था (16 - 35 वर्ष)',
        'मध्यमावस्था (36 - 60 वर्ष)',
        'वृद्धावस्था (60 वर्ष से अधिक)',
      ],
      narration: 'वय परीक्षा: आपकी वर्तमान आयु वर्ग क्या है?',
    },
    en: {
      term: 'Vaya',
      plainExplanation: 'Your age category and developmental life stage.',
      text: 'What is your current age category?',
      choices: [
        'Under 16 (Balya / Youth)',
        '16 to 35 (Yuva / Young adult)',
        '36 to 60 (Madhya / Middle age)',
        'Above 60 (Vriddha / Senior)',
      ],
      narration: 'Vaya assessment. What is your current age category?',
    },
  },

  sattva: {
    hi: {
      term: 'सत्व (Sattva)',
      plainExplanation: 'मानसिक दृढ़ता और तनाव सहने की क्षमता।',
      text: 'आप तनाव या मानसिक दबाव का सामना कैसे करते हैं?',
      choices: [
        'शांत और तनाव को आसानी से संभालते हैं',
        'कुछ समय बाद संभाल लेते हैं',
        'जल्दी घबरा जाते हैं या चिंता होती है',
      ],
      narration: 'सत्व परीक्षा: आप तनाव या मानसिक दबाव का सामना कैसे करते हैं?',
    },
    en: {
      term: 'Sattva',
      plainExplanation: 'Mental strength, emotional stability, and resilience under stress.',
      text: 'How do you handle stress or mental pressure?',
      choices: [
        'Calm and handle stress easily (Pravara Sattva)',
        'Manage with some effort (Madhya Sattva)',
        'Easily overwhelmed or anxious (Avara Sattva)',
      ],
      narration: 'Sattva assessment. How do you handle stress or mental pressure?',
    },
  },

  vihara: {
    hi: {
      term: 'विहार (Vihara)',
      plainExplanation: 'दिनचर्या, जीवनशैली और निद्रा का मूल्यांकन।',
      text: 'आपकी दैनिक दिनचर्या और नींद कैसी है?',
      choices: [
        'नियमित समय पर सोना और ताज़ा उठना',
        'देर से सोना या टूटी-फूटी नींद',
        'अत्यधिक नींद या दिन में सुस्ती',
        'अनिद्रा / नींद न आने की समस्या',
      ],
      narration: 'विहार परीक्षा: आपकी दैनिक दिनचर्या और नींद कैसी है?',
    },
    en: {
      term: 'Vihara',
      plainExplanation: 'Your lifestyle, daily routine, physical habits, and sleep quality.',
      text: 'How would you describe your daily routine, work-life balance, and sleep?',
      choices: [
        'Regular routine, sound restful sleep',
        'Irregular schedule, disturbed or light sleep',
        'Sedentary lifestyle, excessive daytime sleepiness',
        'High stress, poor sleep (insomnia)',
      ],
      narration: 'Vihara assessment. How would you describe your daily routine, work-life balance, and sleep?',
    },
  },
};

/**
 * Returns localized question object with translated text, choices, and narration string.
 * Falls back to English if the translation key or language is not available.
 *
 * @param {Object} rawQuestion
 * @param {string} lang - 'hi', 'mr', 'bn', etc.
 * @returns {Object}
 */
export function getLocalizedQuestion(rawQuestion, lang = 'en') {
  if (!rawQuestion) return null;

  const translationEntry = questionTranslations[rawQuestion.id];
  const langData = translationEntry?.[lang] || translationEntry?.en;

  const localizedText = langData?.text || rawQuestion.text;
  const localizedChoices = langData?.choices || rawQuestion.choices;
  const localizedTerm = langData?.term || rawQuestion.term;
  const localizedPlainExplanation = langData?.plainExplanation || rawQuestion.plainExplanation;

  // Build natural, speakable narration string
  let narrationText = langData?.narration;
  if (!narrationText) {
    if (localizedTerm && localizedPlainExplanation) {
      narrationText = `${localizedTerm}. ${localizedPlainExplanation} ${localizedText}`;
    } else {
      narrationText = localizedText;
    }
  }

  return {
    ...rawQuestion,
    text: localizedText,
    choices: localizedChoices,
    term: localizedTerm,
    plainExplanation: localizedPlainExplanation,
    narrationText,
    originalText: rawQuestion.text,
    originalChoices: rawQuestion.choices,
  };
}
