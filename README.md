# Sunnyside Agency Landing Page

This project involved creating a replica of a agency landing page, adhering strictly to a provided design. The challenge was to match the design 1:1 without any additional guidance on the code or frameworks to be used. The primary technologies leveraged for this project were ReactJS, JavaScript, TailwindCSS, and Vite.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

The project's scope involved developing a agency landing page using ReactJS, Tailwind CSS, JavaScript, and Vite. I was provided with a collection of assets, including design examples, images, logos, and fonts. The design assets were primarily bright colored images, fonts, and fun images. The fonts used were Fraunces and Barlow. The website featured a logo in the top left corner, a desktop and mobile navigation bar, several distinct sections, a 'LEARN MORE' link button, a footer with social media and several other functional features. The project required a precise understanding of color combinations, styling, and grid container layouts.

### The challenge

The website was designed to be responsive, providing an optimal layout for any device's screen size. 

### Screenshot

Website Screenshot:
![Laura's Landing Page](./src/assets/images-readme/sunnysidelandingpage-netlify.png)

Brand Section Website Screenshot:
![Laura's Transform Brand](./src/assets/images-readme/transformbrand-netlify.png)

Client Testimonials Website Screenshot:
![Laura's Client Testimonials](./src/assets/images-readme/testimonials-netlify.png)

Footer Website Screenshot:
![Laura's Footer](./src/assets/images-readme/footer-netlify.png)

Project Design Requested:
![Landing Page](./src/assets/images-readme/desktop-design.jpg)

### Links

- Github Repo URL: [Sunnyside Landing Page Github Repo](https://github.com/lavollmer/sunnyside-agency-landingpage)
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Sunnyside Landing Page](https://sunnyside-landing-page-lauradev.netlify.app/)

## My process

My process for building this website involved planning, building and refractoring code. This project took me about 2-4 business days to complete start to finish.

Project planning:
1. I began by opening the project to look through all the project images, fonts, and README. Based on this I decided what was the best way to approach this project to be the most efficient.
2. I created Github Repo and connected to my localhost/terminal. I did my first commit to make sure that everything was connected.
3. Installed ReactJS, TailwindCSS, and Vite.
4. Ran on localhost to determine everything was functioning correctly. Clean up code given from React to have a clean slate for building. 
5. Downloaded all the images in the assets folder - separated icons, images for desktop and images for mobile in folders in assets.
6. Planned build - look at designs given. Planned out reusable pieces of content.
7. Wrote out all my components and named them logically. Created my App.js and imported all the components to make sure the page would run smoothly.
8. Worked on the Icon Sunnyside Logo component to have the icon available for reuse in header and footer.
9. Worked on navigation bar. Started by working on useState hook for the mobile menu. I had to add react-router-dom to my main.jsx page to allow all the child components of App to have access to the routing context.
10. Worked on the splash page (main landing page) - Learned the spacing of the words and arrow image to have it land on the orange image as the design was shown.
11. Worked on 2 content sections - brand and audience components. 
12. Created grid container for content and 2 images on App.jsx to fill whole page.
13. Deleted LearnMore component - I realized it was easier to style and import everything into each component separately than have another component.
14. Added 2 more images to App.jsx for cherry and orange with the text overlayed based on design given.
15. Started working on client testimonials section. Added inline custom styling to the words Client Testimonials.
15. Added four images to bottom of page using grid container which quick to do.
16. worked on Footer component which included reusable Clickables component, the icon and the social media links.
17. After finishing the desktop, I started working on stylizing mobile responsive piece of the application. This took some rearranging and adding specifications for sizing for medium size screens and above.
18. I imported Google Fonts from design package given and imported into Tailwind CSS. After this, I updated all fonts within each component to match the design.
20. The final day, I worked on cleaning up mobile responsiveness and small design tweaks such as the Learn More link on mobile being centered.
21. Wrote my README and deployed to Netlify.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

1. Setting up Tailwind CSS - the config file has updated terminology - purge is now content. Also app.css should have the tailwind CSS utilities.
2. Work on the Icon Sunnyside Logo component. The icon file I received wasn't working. I used snipping clipper to take an image of the design layout. Took the logo and ran it through a website to remove the background of the image. I got a usable image for the website. Realized the logo icon did work - just wasn't showing up when using.
3. Declare the useState in React. I need to declare the state variable and the function to update it inside an array. I forgot to add const to the beginning of my useState.
4. Understanding react-router-dom and how it works within all the files
5. React-router-dom Link component doesn't support the className prop directly - need to wrap it with div or span
6. Custome inline styles - inline styles are used to apply CSS directly to component or element. Written as Javacript objects with properties. May need specific style that isn't covered by framework.
7. Manipulating a SVG file to change color with CSS
8. Text Color Props for Clickables component -  Pass a color prop to the component and ust that to set the text color. Color is a prop that defaults to text-white if not provided. The className for each component Link is set to color which means it will use the color prop value as it's text color.
9. Underline of the learn more - challenging
10. Importing Google fonts in tailwind CSS
11. Custom colors for fonts in tailwind CSS

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Remove bg](https://www.remove.bg/) - This helped me to remove the background off a screenshot from the sunnyside icon. The file I got didn't have a sunny icon appear. I had to create my own with the design layout.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
