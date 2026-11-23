# Mahalakshmi Planners website

React + Vite (JavaScript) website for Er. R. Manonmani, DTCP registered engineer, Vadakuthu, Neyveli.

## Run it

```bash
npm install
npm run dev       # opens at http://localhost:5173
npm run build     # production files go to dist/
npm run preview   # check the production build
```

## Edit content

All text, services, phone number and address are in `src/content.js`, in English (`en`) and Tamil (`ta`).

## Add real photos

The hero and intro use illustrations until you add photos.

1. Put your images in `public/images/` (for example `hero.jpg` and `intro.jpg`).
2. In `src/content.js`, set:

```js
export const photos = {
  hero: './images/hero.jpg',   // wide photo of a completed house, ideally at dusk
  intro: './images/intro.jpg', // drawings, site visit or office
  engineer: './images/engineer.jpg', // Er. Manonmani's portrait
};
```

Use landscape photos at least 2000px wide for the hero.

### Engineer photo

1. Save the photo as `public/images/engineer.jpg`
   (portrait shape, 4:5, at least 800 x 1000 px, face near the top third).
2. In `src/content.js` set `engineer: './images/engineer.jpg'` inside `photos`.

Until then, the Engineer section shows an "RM" placeholder in the same frame.

## Colours and fonts

Colours are at the top of `src/index.css` under `:root`
(forest green, brass, warm white and stone).
Headings use Marcellus, body text uses Manrope, and Tamil uses Anek Tamil / Noto Serif Tamil.

## Structure

```
src/
  content.js            business details, photos, English/Tamil text
  App.jsx               page layout + language switch
  index.css             all styles
  components/
    Header.jsx          transparent header that turns solid on scroll
    Hero.jsx            full-screen hero with house illustration or photo
    HouseScene.jsx      illustrated house at dusk
    Intro.jsx           introduction + floor-plan drawing
    PlanSheet.jsx       floor plan with engineer's title block
    Services.jsx        services in three groups
    ServiceIcons.jsx    line icons for services
    Elevations.jsx      three illustrated elevation styles
    Illustrations.jsx   all custom graphics (service art, houses, step icons, folder)
    Process.jsx         4-step approval process with icons
    Band.jsx            drag slider: line drawing to finished house
    Marquee.jsx         moving strip of services under the hero
    Faq.jsx             FAQ accordion (questions are in content.js)
    FloatingWhatsApp.jsx floating WhatsApp button (desktop)
    HouseLines.jsx      line elevation drawing of the house
    Documents.jsx       documents checklist
    About.jsx           engineer photo, nameplate and details
    Contact.jsx         contact details, map and WhatsApp enquiry form
    Footer.jsx          footer + mobile call/WhatsApp bar
```

## Using the original logo

Put `logo.png` in `public/` and replace `<Logo />` in `Header.jsx` and `Footer.jsx` with
`<img src="./logo.png" alt="Mahalakshmi Planners" height="40" />`.

## Deploy

Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Hostinger, etc.).
