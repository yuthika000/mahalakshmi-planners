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
  },
  {
    id: 'dtcp',
    en: { title: 'DTCP approval', text: 'Layout and building approvals through Cuddalore DTCP.' },
  },
  {
    id: '2d',
    en: { title: '2D drawing', text: 'Floor plans, sections and site plans to scale.' },
  },
  {
    id: 'elevation',
    en: { title: 'Elevation designs', text: 'Front elevation options to choose from before you build.' },
  },
  {
    id: 'estimate',
    en: { title: 'Construction estimates', text: 'Itemised cost of materials and labour.' },
  },
  {
    id: 'bank-loan',
    en: { title: 'Bank loan estimate', text: 'Estimate and plan copies in the format banks ask for.' },
  },
  {
    id: 'vastu',
    en: { title: 'Vastu plan', text: 'Rooms, entrance and pooja placed according to Vastu.' },
  },
  {
    id: 'site-measurement',
    en: { title: 'Site measurement & layout plan', text: 'On-site measurement and a layout drawing of your land.' },
  },
  {
    id: 'regularisation',
    en: { title: 'Single plot regularisation', text: 'Regularise an unapproved plot so you can build and sell.' },
  },
  {
    id: 'consultancy',
    en: { title: 'Planning & consultancy', text: 'Advice before you buy land or start building.' },
  },
];

export const categories = [
  {
    key: 'approvals',
    ids: ['building-plan', 'dtcp', 'regularisation', 'site-measurement'],
    en: { title: 'Approvals', text: 'Plans prepared to the rules and followed through until the approval is issued.' },
  },
  {
    key: 'design',
    ids: ['2d', 'elevation', 'vastu'],
    en: { title: 'Design & drawings', text: 'Floor plans and elevations that suit your plot, your family and Vastu.' },
  },
  {
    key: 'estimates',
    ids: ['estimate', 'bank-loan', 'consultancy'],
    en: { title: 'Estimates & advice', text: 'Clear costs before you build, and documents your bank will accept.' },
  },
];

export const steps = [
  {
    en: { title: 'Consultation', text: 'Tell us about your plot and what you want to build. Bring your patta and land documents.' },
  },
  {
    en: { title: 'Site measurement', text: 'We measure the site and check road width, setbacks and the rules that apply to it.' },
  },
  {
    en: { title: 'Drawings & estimate', text: 'Plan, elevation and estimate, revised with you until they are right.' },
  },
  {
    en: { title: 'Submission & approval', text: 'We file with the local body or DTCP and follow up until the approval is issued.' },
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
};

export const faqs = [
  {
    en: {
      q: 'Do I need DTCP approval, or local body approval?',
      a: 'It depends on where your plot is and what you are building. Layouts and some buildings need DTCP approval, while many individual houses are approved by the panchayat or municipality. We check your plot and tell you which approval applies.',
    },
  },
  {
    en: {
      q: 'How long does a building plan approval take?',
      a: 'The time depends on the local body, the type of building and whether all documents are complete. After we check your plot and papers, we give you the expected timeline and keep you updated until the approval is issued.',
    },
  },
  {
    en: {
      q: 'My plot is not approved. Can I still build on it?',
      a: 'An unapproved plot usually has to be regularised before a building plan can be approved. We handle single plot regularisation and then prepare your building plan.',
    },
  },
  {
    en: {
      q: 'Can you prepare documents for my home loan?',
      a: 'Yes. We prepare the plan copies and a detailed construction estimate in the format banks ask for, so you can submit them with your loan application.',
    },
  },
  {
    en: {
      q: 'Do you design homes according to Vastu?',
      a: 'Yes. We place the entrance, pooja room, kitchen and bedrooms according to Vastu while keeping the plan within the building rules for your plot.',
    },
  },
  {
    en: {
      q: 'Which areas do you work in?',
      a: 'Neyveli, Vadakuthu, Kurinjipadi and across Cuddalore District. Call us if your plot is nearby and you are not sure.',
    },
  },
];

export const t = {
  en: {
    nav: { services: 'Services', process: 'Process', about: 'Engineer', contact: 'Contact' },
    navCta: 'Book a consultation',
    call: 'Call',
    tagline: 'உங்கள் நிலத்துக்கு ஏற்ற திட்டம், உங்கள் கனவுக்கு ஏற்ற இல்லம்!',
    heroTitle: 'Plan smart.\nBuild right.\nWe handle the approvals.',
    heroText:
      'Building plans, DTCP approvals, elevations and estimates for homes and plots across Neyveli, from a registered engineer.',
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
    footerAbout: 'Plan smart.\nBuild right.\nWe handle the approvals.',
    footerReg: 'Registered engineer',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};
