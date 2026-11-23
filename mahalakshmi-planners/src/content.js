// All business details and page text live here.
// Edit this file to change phone numbers, address, wording or photos.

export const business = {
  name: 'Mahalakshmi Planners',
  engineer: 'Er. R. Manonmani',
  qualification: 'DCE (Civil)',
  regNo: 'RE/GR-III/003/2025',
  authority: 'Cuddalore DTCP',
  phoneDisplay: '87601 19242',
  phoneRaw: '+918760119242',
  whatsapp: '918760119242',
  addressLines: [
    '161, Thillai Nagar, Gandhi Nagar (PO)',
    'Vadakuthu, near Neyveli Arch',
    'Kurinjipadi Taluk, Cuddalore District',
  ],
  mapQuery: 'Thillai Nagar, Vadakuthu, Neyveli, Tamil Nadu',
};

// Photos: put your own images in /public/images and set the paths here,
// e.g. hero: './images/hero.jpg'. Leave as null to show the illustrations.
export const photos = {
  hero: null,
  intro: '/images/floorplan.jpeg',
  engineer: null, // e.g. './images/engineer.jpg' (portrait, 4:5, at least 800 x 1000 px)
};

export const services = [
  {
    id: 'building-plan',
    en: { title: 'Building plan approval', text: 'Drawings prepared to local body rules and filed for approval.' },
    ta: { title: 'கட்டட வரைபட அனுமதி', text: 'உள்ளாட்சி விதிகளின்படி வரைபடம் தயாரித்து அனுமதிக்குச் சமர்ப்பிப்பு.' },
  },
  {
    id: 'dtcp',
    en: { title: 'DTCP approval', text: 'Layout and building approvals through Cuddalore DTCP.' },
    ta: { title: 'DTCP அனுமதி', text: 'கடலூர் DTCP மூலம் மனைப்பிரிவு மற்றும் கட்டட அனுமதி.' },
  },
  {
    id: '2d',
    en: { title: '2D drawing', text: 'Floor plans, sections and site plans to scale.' },
    ta: { title: '2D வரைபடம்', text: 'அளவுப்படி தளவரைபடம், குறுக்குவெட்டு மற்றும் மனை வரைபடம்.' },
  },
  {
    id: 'elevation',
    en: { title: 'Elevation designs', text: 'Front elevation options to choose from before you build.' },
    ta: { title: 'முகப்பு வடிவமைப்பு', text: 'கட்டுவதற்கு முன் தேர்வு செய்ய முகப்புத் தோற்ற வடிவமைப்புகள்.' },
  },
  {
    id: 'estimate',
    en: { title: 'Construction estimates', text: 'Itemised cost of materials and labour.' },
    ta: { title: 'கட்டுமான மதிப்பீடு', text: 'பொருள் மற்றும் கூலிச் செலவின் விவரமான மதிப்பீடு.' },
  },
  {
    id: 'bank-loan',
    en: { title: 'Bank loan estimate', text: 'Estimate and plan copies in the format banks ask for.' },
    ta: { title: 'வங்கிக் கடன் மதிப்பீடு', text: 'வங்கிகள் கேட்கும் வடிவில் மதிப்பீடு மற்றும் வரைபட நகல்கள்.' },
  },
  {
    id: 'vastu',
    en: { title: 'Vastu plan', text: 'Rooms, entrance and pooja placed according to Vastu.' },
    ta: { title: 'வாஸ்து வரைபடம்', text: 'வாஸ்து முறைப்படி அறைகள், வாசல் மற்றும் பூஜை அறை அமைப்பு.' },
  },
  {
    id: 'site-measurement',
    en: { title: 'Site measurement & layout plan', text: 'On-site measurement and a layout drawing of your land.' },
    ta: { title: 'மனை அளவீடு & மனைப்பிரிவு வரைபடம்', text: 'இடத்திலேயே அளவீடு செய்து உங்கள் நிலத்தின் மனைப்பிரிவு வரைபடம்.' },
  },
  {
    id: 'regularisation',
    en: { title: 'Single plot regularisation', text: 'Regularise an unapproved plot so you can build and sell.' },
    ta: { title: 'தனிமனை வரன்முறை', text: 'அனுமதி பெறாத மனையை வரன்முறைப்படுத்தி, கட்டவும் விற்கவும் வழி.' },
  },
  {
    id: 'consultancy',
    en: { title: 'Planning & consultancy', text: 'Advice before you buy land or start building.' },
    ta: { title: 'திட்டமிடல் & ஆலோசனை', text: 'நிலம் வாங்கும் முன் அல்லது கட்டத் தொடங்கும் முன் ஆலோசனை.' },
  },
];

export const categories = [
  {
    key: 'approvals',
    ids: ['building-plan', 'dtcp', 'regularisation', 'site-measurement'],
    en: { title: 'Approvals', text: 'Plans prepared to the rules and followed through until the approval is issued.' },
    ta: { title: 'அனுமதிகள்', text: 'விதிகளின்படி வரைபடம் தயாரித்து, அனுமதி கிடைக்கும் வரை தொடர்ந்து கவனிப்பு.' },
  },
  {
    key: 'design',
    ids: ['2d', 'elevation', 'vastu'],
    en: { title: 'Design & drawings', text: 'Floor plans and elevations that suit your plot, your family and Vastu.' },
    ta: { title: 'வடிவமைப்பு & வரைபடங்கள்', text: 'உங்கள் மனை, குடும்பம் மற்றும் வாஸ்துவுக்கு ஏற்ற தளவரைபடமும் முகப்பும்.' },
  },
  {
    key: 'estimates',
    ids: ['estimate', 'bank-loan', 'consultancy'],
    en: { title: 'Estimates & advice', text: 'Clear costs before you build, and documents your bank will accept.' },
    ta: { title: 'மதிப்பீடு & ஆலோசனை', text: 'கட்டுவதற்கு முன் தெளிவான செலவு விவரம், வங்கி ஏற்கும் ஆவணங்கள்.' },
  },
];

export const steps = [
  {
    en: { title: 'Consultation', text: 'Tell us about your plot and what you want to build. Bring your patta and land documents.' },
    ta: { title: 'ஆலோசனை', text: 'உங்கள் மனை மற்றும் கட்டத் திட்டம் பற்றிச் சொல்லுங்கள். பட்டா மற்றும் நில ஆவணங்களைக் கொண்டு வாருங்கள்.' },
  },
  {
    en: { title: 'Site measurement', text: 'We measure the site and check road width, setbacks and the rules that apply to it.' },
    ta: { title: 'மனை அளவீடு', text: 'மனையை அளந்து, சாலை அகலம், இடைவெளி மற்றும் பொருந்தும் விதிகளைச் சரிபார்க்கிறோம்.' },
  },
  {
    en: { title: 'Drawings & estimate', text: 'Plan, elevation and estimate, revised with you until they are right.' },
    ta: { title: 'வரைபடம் & மதிப்பீடு', text: 'வரைபடம், முகப்பு மற்றும் மதிப்பீடு; உங்களுக்குச் சரியாகும் வரை திருத்தம்.' },
  },
  {
    en: { title: 'Submission & approval', text: 'We file with the local body or DTCP and follow up until the approval is issued.' },
    ta: { title: 'சமர்ப்பிப்பு & அனுமதி', text: 'உள்ளாட்சி அல்லது DTCP-யில் சமர்ப்பித்து, அனுமதி கிடைக்கும் வரை தொடர்ந்து கவனிக்கிறோம்.' },
  },
];

export const documents = {
  en: [
    'Pathiram',
    'Patta',
    'Chitta',
    'FMB (Field Measurement Book)',
    'Adangal',
    'Aadhaar Card',
    'PAN Card',
    'Passport-Size Photographs',
  ],
  ta: [
    'Pathiram',
    'பட்டா',
    'சிட்டா',
    'FMB (Field Measurement Book)',
    'அடங்கல்',
    'ஆதார் அட்டை',
    'PAN அட்டை',
    'பாஸ்போர்ட் அளவு புகைப்படங்கள்',
  ],
};

export const faqs = [
  {
    en: {
      q: 'Do I need DTCP approval, or local body approval?',
      a: 'It depends on where your plot is and what you are building. Layouts and some buildings need DTCP approval, while many individual houses are approved by the panchayat or municipality. We check your plot and tell you which approval applies.',
    },
    ta: {
      q: 'எனக்கு DTCP அனுமதி தேவையா, உள்ளாட்சி அனுமதி தேவையா?',
      a: 'உங்கள் மனை இருக்கும் இடம் மற்றும் கட்டும் கட்டடத்தைப் பொறுத்தது. மனைப்பிரிவுகள் மற்றும் சில கட்டடங்களுக்கு DTCP அனுமதி தேவை; பல தனி வீடுகளுக்கு ஊராட்சி அல்லது நகராட்சி அனுமதி வழங்கும். உங்கள் மனையைச் சரிபார்த்து எந்த அனுமதி பொருந்தும் என்று சொல்வோம்.',
    },
  },
  {
    en: {
      q: 'How long does a building plan approval take?',
      a: 'The time depends on the local body, the type of building and whether all documents are complete. After we check your plot and papers, we give you the expected timeline and keep you updated until the approval is issued.',
    },
    ta: {
      q: 'கட்டட வரைபட அனுமதிக்கு எவ்வளவு காலம் ஆகும்?',
      a: 'உள்ளாட்சி, கட்டட வகை மற்றும் ஆவணங்கள் முழுமையாக உள்ளனவா என்பதைப் பொறுத்தது. உங்கள் மனை மற்றும் ஆவணங்களைச் சரிபார்த்த பின் எதிர்பார்க்கும் காலத்தைச் சொல்லி, அனுமதி கிடைக்கும் வரை தகவல் தருவோம்.',
    },
  },
  {
    en: {
      q: 'My plot is not approved. Can I still build on it?',
      a: 'An unapproved plot usually has to be regularised before a building plan can be approved. We handle single plot regularisation and then prepare your building plan.',
    },
    ta: {
      q: 'என் மனை அனுமதி பெறாதது. அதில் கட்ட முடியுமா?',
      a: 'அனுமதி பெறாத மனையை, கட்டட வரைபட அனுமதிக்கு முன் வரன்முறைப்படுத்த வேண்டும். தனிமனை வரன்முறையை நாங்களே செய்து, பின் உங்கள் கட்டட வரைபடத்தைத் தயாரிக்கிறோம்.',
    },
  },
  {
    en: {
      q: 'Can you prepare documents for my home loan?',
      a: 'Yes. We prepare the plan copies and a detailed construction estimate in the format banks ask for, so you can submit them with your loan application.',
    },
    ta: {
      q: 'வீட்டுக் கடனுக்கான ஆவணங்களைத் தயாரித்துத் தருவீர்களா?',
      a: 'ஆம். வங்கிகள் கேட்கும் வடிவில் வரைபட நகல்கள் மற்றும் விவரமான கட்டுமான மதிப்பீட்டைத் தயாரித்துத் தருகிறோம்; அவற்றை உங்கள் கடன் விண்ணப்பத்துடன் சமர்ப்பிக்கலாம்.',
    },
  },
  {
    en: {
      q: 'Do you design homes according to Vastu?',
      a: 'Yes. We place the entrance, pooja room, kitchen and bedrooms according to Vastu while keeping the plan within the building rules for your plot.',
    },
    ta: {
      q: 'வாஸ்து முறைப்படி வீடு வடிவமைப்பீர்களா?',
      a: 'ஆம். உங்கள் மனைக்கான கட்டட விதிகளுக்குள், வாசல், பூஜை அறை, சமையலறை மற்றும் படுக்கை அறைகளை வாஸ்து முறைப்படி அமைக்கிறோம்.',
    },
  },
  {
    en: {
      q: 'Which areas do you work in?',
      a: 'Neyveli, Vadakuthu, Kurinjipadi and across Cuddalore District. Call us if your plot is nearby and you are not sure.',
    },
    ta: {
      q: 'எந்தப் பகுதிகளில் சேவை செய்கிறீர்கள்?',
      a: 'நெய்வேலி, வடக்குத்து, குறிஞ்சிப்பாடி மற்றும் கடலூர் மாவட்டம் முழுவதும். உங்கள் மனை அருகில் இருந்து உறுதியாகத் தெரியவில்லை என்றால் அழையுங்கள்.',
    },
  },
];

export const t = {
  en: {
    langLabel: 'தமிழ்',
    langAria: 'Switch to Tamil',
    nav: { services: 'Services', process: 'Process', about: 'Engineer', contact: 'Contact' },
    navCta: 'Book a consultation',
    call: 'Call',
    tagline: 'உங்கள் நிலத்துக்கு ஏற்ற திட்டம், உங்கள் கனவுக்கு ஏற்ற இல்லம்!',
    heroTitle: 'Plan smart.\nBuild right.\nWe handle the approvals.',
    heroText:
      'Building plans, DTCP approvals, elevations and estimates for homes and plots across Cuddalore district, from a registered engineer.',
    heroCall: 'Call 87601 19242',
    heroWhatsapp: 'WhatsApp us',
    factReg: 'DTCP Reg. No.',
    factQual: 'Qualification',
    factArea: 'Serving',
    factAreaValue: 'Neyveli',
    introTitle: 'We design accurate building plans\nand manage your approval process\nfrom first site visit\nto the final signed permit.',
    introText:
      'You focus on building your dream home; Mahalakshmi Planners takes care of the rest. We prepare precise plans and manage the entire DTCP approval process from start to finish with complete transparency.',
    introPoint1: 'Authorized Engineering Sign-Off',
    introPoint2: 'Complete End-to-End Ownership',
    introPoint3: 'First-Pass Bank Loan Approval',
    servicesTitle: 'Services',
    servicesText: 'Everything you need from the first measurement of your plot to the approval letter.',
    processTitle: 'From your plot to an approved plan',
    elevTitle: 'Elevation styles we design',
    elevNote: 'Illustrations show the style. Your elevation is designed for your own plot.',
    bandTitle: 'Every home begins as a drawing.',
    bandText: 'உங்கள் கனவு இல்லத்திற்கான முதல் படி... எங்களுடன் தொடங்குங்கள்!',
    bandCta: 'Start your plan',
    bandHint: 'Drag the slider to see the drawing become a home.',
    compareDrawing: 'Drawing',
    compareBuilt: 'Built',
    cardTitle: 'How every file moves',
    faqTitle: 'Common questions',
    faqText: 'Answers to what people usually ask before starting. For anything about your own plot, call us.',
    fabLabel: 'Chat on WhatsApp',
    docsTitle: 'Documents to keep ready',
    docsText: 'Bring copies of these to your first visit so we can check your plot and start the file.',
    docsNote: 'The exact list depends on the local body and the type of approval. We will tell you what applies to your plot.',
    aboutTitle: 'Your approval handled by',
    aboutText:
      'Er. R. Manonmani prepares your building plan, uploads it to the Single Window Portal for approval, and officially signs the final sanctioned PDF. You deal directly with the engineer at every step—no middlemen, no confusion.',
    regLabel: 'Registration',
    qualLabel: 'Qualification',
    officeLabel: 'Office',
    contactTitle: 'The first step to your dream home',
    contactText: 'Call, send a WhatsApp message or visit the office in Vadakuthu.',
    formTitle: 'Send an enquiry',
    formName: 'Your name',
    formPhone: 'Phone number',
    formService: 'What do you need?',
    formServicePlaceholder: 'Choose a service',
    formMessage: 'Plot location and details (optional)',
    formSubmit: 'Send on WhatsApp',
    formNote: 'This opens WhatsApp with your details filled in. Nothing is sent until you press send there.',
    formErrorName: 'Enter your name.',
    formErrorPhone: 'Enter a 10-digit mobile number.',
    phoneLabel: 'Phone',
    addressLabel: 'Office',
    directions: 'Get directions',
    mapTitle: 'Map showing Mahalakshmi Planners, Vadakuthu',
    footerAbout: 'Building plan approval, DTCP approval, drawings and estimates for homes and plots across Cuddalore district.',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerReg: 'Registered engineer',
    rights: 'All rights reserved.',
  },
  ta: {
    langLabel: 'English',
    langAria: 'Switch to English',
    nav: { services: 'சேவைகள்', process: 'செயல்முறை', about: 'பொறியாளர்', contact: 'தொடர்பு' },
    navCta: 'ஆலோசனைக்கு அழைக்க',
    call: 'அழைக்க',
    tagline: 'உங்கள் நிலத்துக்கு ஏற்ற திட்டம், உங்கள் கனவுக்கு ஏற்ற இல்லம்!',
    heroTitle: 'கவனத்துடன் திட்டமிட்ட இல்லம். அனுமதி முழுவதும் எங்கள் பொறுப்பு.',
    heroText:
      'நெய்வேலியில் பதிவு பெற்ற பொறியாளரிடமிருந்து, கடலூர் மாவட்டம் முழுவதும் வீடுகள் மற்றும் மனைகளுக்கான கட்டட வரைபடம், DTCP அனுமதி, முகப்பு வடிவமைப்பு மற்றும் மதிப்பீடு.',
    heroCall: 'அழைக்க 87601 19242',
    heroWhatsapp: 'வாட்ஸ்அப்',
    factReg: 'DTCP பதிவு எண்',
    factQual: 'கல்வித் தகுதி',
    factArea: 'சேவைப் பகுதி',
    factAreaValue: 'நெய்வேலி',
    introTitle: 'துல்லியமான கட்டடத் திட்டங்களை வடிவமைத்து\nஉங்கள் அனுமதி செயல்முறையை நிர்வகிக்கிறோம்\nமுதல் தள ஆய்விலிருந்து\nஇறுதி கையொப்பமிட்ட அனுமதிவரை.',
    introText:
      'உங்கள் கனவு வீட்டைக் கட்டுவதில் நீங்கள் கவனம் செலுத்துங்கள்; மீதமுள்ளதை மகாலட்சுமி பிளானர்ஸ் கவனிக்கும். துல்லியமான திட்டங்களைத் தயாரித்து, முழு வெளிப்பாட்டுடன் தொடக்கம் முதல் முடிவு வரை முழு DTCP அனுமதி செயல்முறையையும் நிர்வகிக்கிறோம்.',
    introPoint1: 'அங்கீகரிக்கப்பட்ட பொறியியல் ஒப்புதல்',
    introPoint2: 'முழுமையான தொடக்கம் முதல் முடிவு வரை பொறுப்பு',
    introPoint3: 'முதல் முயற்சியிலேயே வங்கி கடன் ஒப்புதல்',
    servicesTitle: 'எங்கள் சேவைகள்',
    servicesText: 'மனையின் முதல் அளவீட்டிலிருந்து அனுமதிக் கடிதம் வரை உங்களுக்குத் தேவையான அனைத்தும்.',
    processTitle: 'உங்கள் மனையிலிருந்து அனுமதி பெற்ற வரைபடம் வரை',
    elevTitle: 'நாங்கள் வடிவமைக்கும் முகப்புப் பாணிகள்',
    elevNote: 'படங்கள் பாணியைக் காட்டுகின்றன. உங்கள் முகப்பு உங்கள் மனைக்கென தனியாக வடிவமைக்கப்படும்.',
    bandTitle: 'ஒவ்வொரு இல்லமும் ஒரு வரைபடத்தில் தொடங்குகிறது.',
    bandText: 'உங்கள் கனவு இல்லத்திற்கான முதல் படி... எங்களுடன் தொடங்குங்கள்!',
    bandCta: 'உங்கள் திட்டத்தைத் தொடங்குங்கள்',
    bandHint: 'வரைபடம் இல்லமாக மாறுவதைக் காண ஸ்லைடரை இழுக்கவும்.',
    compareDrawing: 'வரைபடம்',
    compareBuilt: 'கட்டடம்',
    cardTitle: 'ஒவ்வொரு கோப்பின் பயணம்',
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    faqText: 'தொடங்கும் முன் பொதுவாகக் கேட்கப்படும் கேள்விகளுக்கான பதில்கள். உங்கள் மனை பற்றி அறிய எங்களை அழையுங்கள்.',
    fabLabel: 'வாட்ஸ்அப்பில் பேச',
    docsTitle: 'தயாராக வைக்க வேண்டிய ஆவணங்கள்',
    docsText: 'முதல் சந்திப்பின்போது இவற்றின் நகல்களைக் கொண்டு வாருங்கள். உங்கள் மனையைச் சரிபார்த்து கோப்பைத் தொடங்குவோம்.',
    docsNote: 'தேவையான ஆவணங்கள் உள்ளாட்சி மற்றும் அனுமதி வகையைப் பொறுத்து மாறும். உங்கள் மனைக்கு எது தேவை என்று நாங்கள் சொல்வோம்.',
    aboutTitle: 'உங்கள் கோப்பை பொறியாளரே நேரடியாகக் கவனிக்கிறார்',
    aboutText:
      'Er. R. மனோன்மணி உங்கள் கட்டடத் திட்டத்தைத் தயாரித்து, Single Window Portal-ல் அனுமதிக்காகப் பதிவேற்றி, இறுதியான அனுமதிச் சான்றிதழில் அதிகாரப்பூர்வமாகக் கையொப்பமிடுகிறார். ஒவ்வொரு படியிலும் நேரடியாகப் பொறியாளரிடம் பேசுவீர்கள்—இடைத்தரகர் இல்லை, குழப்பம் இல்லை.',
    regLabel: 'பதிவு எண்',
    qualLabel: 'கல்வித் தகுதி',
    officeLabel: 'அலுவலகம்',
    contactTitle: 'உங்கள் கனவு இல்லத்திற்கான முதல் படி',
    contactText: 'அழையுங்கள், வாட்ஸ்அப்பில் செய்தி அனுப்புங்கள், அல்லது வடக்குத்து அலுவலகத்திற்கு நேரில் வாருங்கள்.',
    formTitle: 'விசாரணை அனுப்ப',
    formName: 'உங்கள் பெயர்',
    formPhone: 'கைப்பேசி எண்',
    formService: 'என்ன சேவை தேவை?',
    formServicePlaceholder: 'சேவையைத் தேர்ந்தெடுக்கவும்',
    formMessage: 'மனை இருப்பிடம் மற்றும் விவரம் (விருப்பம்)',
    formSubmit: 'வாட்ஸ்அப்பில் அனுப்ப',
    formNote: 'உங்கள் விவரங்களுடன் வாட்ஸ்அப் திறக்கும். அங்கே அனுப்பு அழுத்தும் வரை எதுவும் அனுப்பப்படாது.',
    formErrorName: 'உங்கள் பெயரை உள்ளிடவும்.',
    formErrorPhone: '10 இலக்க கைப்பேசி எண்ணை உள்ளிடவும்.',
    phoneLabel: 'தொலைபேசி',
    addressLabel: 'அலுவலகம்',
    directions: 'வழி காட்டு',
    mapTitle: 'மகாலட்சுமி பிளானர்ஸ், வடக்குத்து வரைபடம்',
    footerAbout: 'கடலூர் மாவட்டம் முழுவதும் வீடுகள் மற்றும் மனைகளுக்கான கட்டட வரைபட அனுமதி, DTCP அனுமதி, வரைபடங்கள் மற்றும் மதிப்பீடுகள்.',
    footerServices: 'சேவைகள்',
    footerContact: 'தொடர்பு',
    footerReg: 'பதிவு பெற்ற பொறியாளர்',
    rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  },
};
