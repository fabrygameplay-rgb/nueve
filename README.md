# Chrysomallon squamiferum — Interactive Web Page

This project is an informational and interactive webpage about the deep-sea gastropod *Chrysomallon squamiferum*, also known as the **scaly-foot snail**.

The page combines **scientific information, responsive design, and Vanilla JavaScript interaction** to present the anatomy and biology of this unique hydrothermal vent species.

The goal of the project was to practice **pure HTML, CSS, and JavaScript** without using frameworks or external libraries.

---

# Scientific Topic

*Chrysomallon squamiferum* is a deep-sea gastropod discovered in hydrothermal vents of the **Indian Ocean**.

It is notable for:

- Having **iron sulfide biomineralization** in its shell and dermal scales.
- Hosting **chemosynthetic bacterial symbionts** inside its esophageal gland.
- Possessing an **unusually large heart** relative to its body size.
- Living in extreme environments near **hydrothermal vents at depths of ~2400–2900 meters**.

The webpage explains:

- Geographic distribution
- Taxonomic classification
- Anatomical adaptations
- Scientific references

---

# Features

## Interactive Anatomy Explorer

Users can click anatomical structures to reveal:

- an image of the structure
- a detailed scientific explanation

The interface highlights the selected item and animates the image appearance.

The interaction is implemented using:

- `data-*` attributes
- DOM event listeners
- dynamic class manipulation
- CSS transitions

---

## Responsive Layout

The page adapts to different devices and orientations.

| Device | Layout |
|------|------|
| Desktop | Two-column layout with taxonomy panel |
| Tablet portrait | Grid-based adaptation |
| Tablet landscape | Grid with side panel |
| Mobile portrait | Vertical stacked layout |
| Mobile landscape | Optimized grid layout |

Key techniques used:

- Flexbox
- CSS Grid
- Media Queries
- Adaptive image sizing
- Overflow control

A major challenge was making the layout responsive **without modifying the HTML structure**, which required careful CSS overrides.

---

# Technical Challenges

During development several layout and responsiveness problems appeared:

- images overflowing containers
- side taxonomy panel interfering with text layout
- mobile landscape layout breaking
- maintaining readable typography across devices
- aligning anatomical images and description panels

Solutions involved:

- switching between **Flexbox and CSS Grid depending on orientation**
- dynamic container resizing
- controlling layout flow with `grid-column`
- preventing image overflow using `object-fit`
- layout overrides using media queries

Three main responsive strategies were implemented:

- mobile portrait
- mobile landscape
- tablet portrait

---

# Technologies Used

- HTML5
- CSS3
  - Flexbox
  - CSS Grid
  - Media Queries
  - Transitions
- Vanilla JavaScript
  - DOM manipulation
  - Event listeners
  - dataset attributes
  - dynamic class handling

No frameworks or external libraries were used.

---

# Project Structure

```
project/
│
├── index.html
├── style.css
├── index.js
└── FotosNeón/
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── foto4.jpg
    └── foto5.jpg
```

---

# JavaScript Interaction

When a user clicks an anatomical structure:

1. The selected element is highlighted.
2. The anatomical image becomes visible.
3. A detailed explanation appears in the text panel.
4. The image fades in using a CSS animation.

Example logic:

```javascript
item.addEventListener("click", () => {

    items.forEach(i => i.classList.remove("activo"));
    item.classList.add("activo");

    visor1.style.display = "block";
    visor2.style.display = "block";

    imagen.src = item.dataset.img;
    texto.value = item.dataset.text;

});
```

---

# Scientific References

The information presented on this page is based on peer-reviewed scientific literature, including:

- Chen et al. (2015) – *Journal of Molluscan Studies*
- Yao et al. (2010) – *Proceedings of the National Academy of Sciences*
- Warén et al. (2003) – *Science*
- Bouchet et al. (2005) – *Malacologia*

Links to the original papers are included on the webpage.

---

# Learning Goals

This project was developed to practice:

- responsive layout engineering
- Vanilla JavaScript DOM interaction
- debugging complex CSS layout problems
- structuring scientific information for the web

---

# Possible Future Improvements

- Add image zoom interaction
- Improve CSS architecture
- Add dark mode
- Improve accessibility (ARIA attributes)
- Add animations for section transitions

---

# Author

Frontend learning project focused on **HTML, CSS, and Vanilla JavaScript fundamentals**.
