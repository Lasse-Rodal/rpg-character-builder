# RPG Character Builder

A fantasy-themed character creator app built with React. Choose race and class, assign a name, view a pixel-art avatar, and customize the character's base stats. Built to resemble a parchment-style RPG sheet.

Users can:
- Select a race and class for their character
- Assign a name and preview a matching fantasy avatar
- View stats that change based on class and race
- Allocate extra stat points manually via interactive UI

![Badge](https://img.shields.io/badge/made%20with-🧙%20React%20JS-61dafb?logo=react)

---

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Credits](#credits)
- [Author](#author)
- [Next Steps](#next-steps)

---

## Overview

### Screenshot

Preview of the character builder app:

<img src="./public/media/rpg_demo.gif" alt="RPG Character Builder Demo" width="600"/>

---

### Links

- [GitHub Repo](https://github.com/Lasse-Rodal/rpg-character-builder)
- [Live Demo](https://lasse-rodal.github.io/rpg-character-builder)

---

## My Process

### Built With

- **React**
  - State management with `useState`
  - Conditional rendering and component logic
- **Custom CSS**
  - Fantasy-inspired parchment background
  - Font Awesome icons for class and stat presentation
- **Pixel Art Character Sprites**
  - Image paths tied to class/race selection

---

### What I Learned

In this project, I practiced:

- Using `useState` for layered state like race, class, stats, and points
- Dynamically changing UI content and images based on selections
- Styling React apps without Tailwind to achieve a thematic fantasy look
- Managing reusable base stats and class modifiers
- Displaying icons conditionally based on available points

---

## Credits

### Art & Design
- Pixel art character sprites generated via AI
- Fantasy parchment texture generated via AI

### Icons
- [Font Awesome](https://fontawesome.com/) for RPG-themed stat icons

---

## Author

- GitHub – [Lasse Rodal Pedersen](https://github.com/Lasse-Rodal)

---

## Next Steps

Future improvements and features for the RPG Character Builder:

- [ ] **Export to PDF** – Let users download a printable version of their character sheet
- [ ] **Character Backstory Input** – Add a text area for users to write and save character lore
- [ ] **Save to Local Storage** – Persist characters between sessions
- [ ] **Class-specific Perks or Skills** – Show unique traits or bonuses for each class
- [ ] **Dark Mode Toggle** – Fantasy-styled dark parchment theme
- [ ] **More Races & Classes** – Expand with new fantasy options like Dwarf, Demon, Paladin, etc.
- [ ] **Shareable Link or Code** – Generate a shareable link or code for character builds
