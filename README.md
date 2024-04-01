# Frontend Mentor - Sunnyside agency landing page solution

Frontend Mentor challenges help you improve your coding skills by building realistic projects. This project was to create a landing page for sunnyside agency. It was fun to work through the project.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Github Repo URL: [Github Repo URL](https://github.com/lavollmer/sunnyside-agency-landingpage)
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

My process:
1.  Open the project and look through all the project images, fonts, and README. Determine best course of action.
2. Create Github Repo and connect to localhost/terminal.
3. Install ReactJS, TailwindCSS, Vite.
4. Run on localhost to make sure it is functioning it. Clean up old code from React to get clean slate for building. 
5. Download all the images in the assets folder - separate icons, images for desktop and images for mobile in folders in assets.
6. Plan build - look at designs given. Plan out reusable pieces of content.
7. Wrote out all my components and named them. Created my App.js and imported all the components to make sure the page would run smoothly.
8. Work on the Icon Sunnyside Logo component. The icon file I received wasn't working. I used snipping clipper to take an image of the design layout. Took the logo and ran it through a website to remove the background of the image. I got a usable image for the website. Realized the logo icon did work - just wasn't showing up when using.
9. Work on navigation bar. Start by working on useState hook for the mobile menu. I had to add react-router-dom to my main.jsx page to allow all the child components of App to have access to the routing context.
10. Work on the splash page - understand the spacing of the words and arrow image to have it land on the orange image
11. Work on 2 content sections - brand and audience - use coolors to find right color
12. Create grid container for content and 2 images on app.jsx to fill whole page - import everything
13. Delete LearnMore component - I realized it was easier to style and import everything into things separately
14. Added 2 more images to App.jsx for cherry and orange with writing on top of it
15. Started working on client testimonials - had to remove div from grid container to have it positioned correctly - worked one section the way I wanted it and then replicated it to all three. Added inline custom styling to the words Client Testimonials.
15. Added four images to bottom of page using grid container
16. Footer component
17. Stylizing mobile responsive piece of the application
18. Import Google Fonts from design package and import into Tailwind CSS

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
