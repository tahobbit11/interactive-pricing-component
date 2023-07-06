# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./images/Screenshot%202023-07-06%20153808.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use Switch cases in order to store multiple things little things of data that can be used once it gets the id for said case.

To see how you can add code snippets, see below:

```html
<input class="scroll" id="scroll" type="range" min="0" max="4" value="2" checked="false">
```
```css
     input[type="checkbox"].toggle {
      position: absolute;
      left: -9000px;
      top: -9000px;
      display: flex;
    }

     input[type="checkbox"].toggle::before {
      position: absolute;
      left: 9149px;
      top: 9176px;
      content: "";
      width: 42px;
      height: 21px;
      background-color: hsl(223, 50%, 87%);
      border-radius: 1em;
      transition: background-color 200ms ease-in-out;
      cursor: pointer;
     }

     input[type="checkbox"].toggle::after {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      content: "";
      font-size: .5em;
      height: .9em;
      left: 9152px;
      top: 9179px;
      width: 1.8em;
      height: 1.8em;
      background-color: white;
      border-radius: 1em;
      transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
      cursor: pointer;
     }
    
    input[type="checkbox"].toggle:checked::before {
      background-color: hsl(174, 86%, 45%);
    }
    
    input[type="checkbox"].toggle:checked::after {
      transform: translateX(150%);
      background-color: white;
    }
```
```js
const scrollBarChanges = (value) => {
    switch(value){
        case "4":
            costPerMonth = 36;
            document.getElementById("scroll").setAttribute("value", 4);

            views.innerHTML = "1M ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "3":
            costPerMonth = 24;
            document.getElementById("scroll").setAttribute("value", 3);

            views.innerHTML = "500K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "2":
            costPerMonth = 16;
            document.getElementById("scroll").setAttribute("value", 2);

            views.innerHTML = "100K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "1":
            costPerMonth = 12;
            document.getElementById("scroll").setAttribute("value", 1);

            views.innerHTML = "50K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "0":
            costPerMonth = 8;
            document.getElementById("scroll").setAttribute("value", 0);

            views.innerHTML = "10K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        default:
            break;            
    }
}
```

### Continued development

In the future I could add a smoother scroll bar for getting the values as well as maybe add some more options for the user to choose from.

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
