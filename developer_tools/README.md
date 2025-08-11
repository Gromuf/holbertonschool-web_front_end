## Resources

**Read or watch**:

- [Chrome DevTools | Tools for Web Developers | Google Developers](/rltoken/xQgGyibNbpXFBYkiw5Yaxg "Chrome DevTools  |  Tools for Web Developers  |  Google Developers")
- [Introduction | Down and Dirty with Chrome Developer Tools](/rltoken/G_mzqm_oYdNwGPKZge4_rA "Introduction | Down and Dirty with Chrome Developer Tools")
- [Firefox Developer Tools | MDN](/rltoken/9JR3CXVFNue4C_6820Mv4Q "Firefox Developer Tools | MDN")
- [Dev Tips - Developer Tips by Umar Hansa](/rltoken/FVe-zSoqr8JFWCSb_MIlnA "Dev Tips - Developer Tips by Umar Hansa")
- [Get Started With Viewing And Changing CSS | Tools for Web Developers](/rltoken/pFrF6Ec17k1fwgBrefnNKg "Get Started With Viewing And Changing CSS  |  Tools for Web Developers")
- [Keeping it simple with the JavaScript console - LogRocket Blog](/rltoken/sRc9bRtc24PgU7UH6Rso2Q "Keeping it simple with the JavaScript console - LogRocket Blog")
- [Inspect Network Activity - Chrome DevTools 101](/rltoken/MBiNxagRKiRQwW7jcloO_g "Inspect Network Activity - Chrome DevTools 101")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/JtuJ8tzZqLIvF3KRXsVBaA "explain to anyone"), **without the help of Google**:

### General

- What Developer Tools in your browser are
- How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
- How to use the elements tab to edit HTML and CSS
- How to audit a page according to the tips suggested by Lighthouse
- How to create and run snippets on a page
- How to get information about files and server configurations
- How to block requests
- How to know how much JavaScript or CSS is used on a page
- How to detect 404 issues
- How to move elements on a webpage

## Requirements

### General

- A `README.md` file, at the root of the folder of the project, is mandatory
- Use the newest version of Google Chrome browser (`78.0.3904.70` or later).
- Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.

## Tasks

### 1.

Go to `https://dev-tools.hbtn.info/`

Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)

### 2.

Go to `https://dev-tools.hbtn.info/`

Change the background-color of the body to use `#4233bd` Take a screenshot of the `PORTFOLIO` section

### 3.

Go to `https://dev-tools.hbtn.info/`

Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it

### 4.

Go to `https://dev-tools.hbtn.info/`

Select the `Download me!` and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:

```
$ head -2 3-button\_styles
border-radius: 1px;
color: #FF00FF;
$
```

### 5.

Go to `https://dev-tools.hbtn.info/`

- All primary buttons (`btn-primary`) should have the `#0080ee` color as a background color
- All outlined buttons light (`btn-outline-light`) should have `#0020aa` for the text color
- Screenshot all buttons that changed and merge it to one image

### 6.

Go to `https://dev-tools.hbtn.info/`

Remove the `div` of the “cake” box in the section Portfolio

Take a screenshot of it

### 7.

Go to `https://dev-tools.hbtn.info/`

- On the right panel, click on the `Computed tab`
- Then, select the `h2` with the text `ABOUT`
- Search for `margin-bottom`

Which file is that declaration coming from?

### 8.

Go to `https://dev-tools.hbtn.info/`

How many times click events are referenced in JavaScript files?

### 9.

Go to `https://dev-tools.hbtn.info/`

Select the primary button “Send”

What is the equivalent value of the hexadecimal background-color, in HSL?

(format of your answer should be: `hsl(<VALUES>);`, example: `hsl(241, 23%, 24%);` following by a new line)

### 10.

Go to `https://dev-tools.hbtn.info/`

What is the `max-width` for the first `.container` in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)

(format of your answer should be `max-width: <VALUE>;`, example: `max-width: 670px`)

### 11.

Go to `https://dev-tools.hbtn.info/`

Switch the sections of “About” and “Portfolio”

Take a screenshot of it

### 12.

Go to `https://dev-tools.hbtn.info/`

How big, in bytes, is the `freelancer.css` file?

Answer file must contain the value in Byte (example: `6144` for 6KB)

### 13.

Go to `https://dev-tools.hbtn.info/`

Under Rendering, change the CSS media type emulation to “print” and take a screenshot of the home page.

### 14.

Go to `https://dev-tools.hbtn.info/`

Select the Avatar image in the header and type `$0` in the console. Enter.

What does it return?

### 15.

Go to `https://dev-tools.hbtn.info/`

Write in the console `console.log(document.title)`, what is returned?

### 16.

Go to `https://dev-tools.hbtn.info/`

Which front-end framework could we guess this page is using?

In your answer file only put the letter of the multiple choice answer from below:

- A. React JS
- B. Material Design
- C. Bootstrap
- D. Angular

### 17.

Go to `https://dev-tools.hbtn.info/`

What is the total weight of the page (with all the elements)?

Take a screenshot of it

### 18.

Go to `https://dev-tools.hbtn.info/`

What is the number of requests done when accessing this page?

Take a screenshot of it

### 19.

Go to `https://dev-tools.hbtn.info/`

How many CSS resources are loaded on this page?

### 20.

Go to `https://dev-tools.hbtn.info/`

How many image resources are loaded on this page?

### 21.

Go to `https://dev-tools.hbtn.info/`

What is the `type` value of the favicon image?

### 22.

Go to `https://dev-tools.hbtn.info/`

Holberton School website uses a font library for their icons, which one is it?

### 23.

Go to `https://dev-tools.hbtn.info/`

What is the name of the resource that generates 1 XHR calls?

### 24.

Go to `https://dev-tools.hbtn.info/`

What is the notation for `Performance` (for desktop mode and no throttling - also called Lighthouse)?

Take a screenshot of it

### 25.

Go to `https://dev-tools.hbtn.info/`

How many static assets need a better cache policy?

Take a screenshot of it

### 26.

Go to `https://dev-tools.hbtn.info/`

When you run an accessibility audit, what is the contrast issue?

In your answer file only put the letter of the multiple choice answer from below:

- A. Image elements do not have \[alt\] attributes
- B. Links do not have a discernible name
- C. Background and foreground colors do not have a sufficient contrast ratio.

### 27.

Go to `https://dev-tools.hbtn.info/`

Which classes are on the images that have no `alt` attribute?

Your answer file must contains all classes, example: `.my_class.my_second` if 2 classes

### 28.

Go to `https://dev-tools.hbtn.info/`

Which attribute is missing on all the links with the target `_blank`?

In your answer file only put the letter of the multiple choice answer from below:

- A. `rel="noopener"`
- B. `rel="noreferrer"`
- C. A and B

### 29.

Go to `https://dev-tools.hbtn.info/`

Which `<a>` links don’t have enough text description?

Take a screenshot of it

### 30.

Go to `https://dev-tools.hbtn.info/`

The `sources` panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.

- Create a new snippet called `allcolors.js`
- Copy-paste the code on [this page](/rltoken/GtDwHzoJafYiYdu7b8RA4Q "this page")
- Run the code
- Take a screenshot of the result in your console

### 31.

Go to `https://dev-tools.hbtn.info/`

Block all CSS requests

Take a screenshot of it

### 32.

Go to `https://dev-tools.hbtn.info/`

The `application` panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.

What is the only key present in the session storage for this page?

### 33.

Go to `https://dev-tools.hbtn.info/`

Does this page have any service workers? `Yes` or `No`

### 34.

Go to `https://dev-tools.hbtn.info/`

The `security` panel allows you to make sure HTTPS is properly implement on a webpage.

Which organization issued the SSL certificate for this page?

### 35.

Go to `https://dev-tools.hbtn.info/`

When does the SSL certificate expire?

Take a screenshot of it
