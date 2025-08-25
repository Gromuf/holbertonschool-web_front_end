## Resources

**Read or watch**:

- [The building blocks of responsive design - Progressive web apps | MDN](/rltoken/KSvjaakl4Hg1diG0E4w6ww "The building blocks of responsive design - Progressive web apps | MDN")
- [A pragmatic guide to designing and building responsive web applications | developerlife.com](/rltoken/_Jp3-ZZgmx9YAnGzz7XQDg "A pragmatic guide to designing and building responsive web applications | developerlife.com")
- [Understanding the difference between mobile-first, adaptive and responsive design](/rltoken/XiOywP-X7cmzuDSbuCOdhw "Understanding the difference between mobile-first, adaptive and responsive design")
- [LukeW | Mobile First](/rltoken/yzm7hmicxyzT60TdFfMT7w "LukeW | Mobile First")
- [Media Queries | A collection of inspirational websites using media queries and responsive web design](/rltoken/PqArRPtHixQ9AXlqHFYz7g "Media Queries | A collection of inspirational websites using media queries and responsive web design")
- [Responsive Design Newsletter](/rltoken/TQGuGWkJRQ9EUaV-AkLIyQ "Responsive Design Newsletter")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/Kjxo6XLgeTLFxVgeGIxhQA "explain to anyone"), **without the help of Google**:

- Mobile-first design
- Media-queries
- Sizes to use for responsive web design
- How to make a website responsive
- The differences between responsive and adaptive design
- CSS units that are used to make elements flexible

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- A `README.md` at the root of the project directory is mandatory
- HTML and CSS have been rendered on Chrome 78 or more.

## Tasks

### 1.

Because we did some changes with the `article.html` page in the previous project, our hero banner background is no more visible. Let’s fix it!

But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.

In your `01-styles.css` file

- Inside the `hero-homepage` class selector, update some values:
  - Property: `background-position`, Value: `65% 8rem`
  - Property: `background-size`, Value: `90rem auto`
- Inside the selector that targets `section-inner` class inside `section-hero` class
  - Update the `min-height` to `35vh`

**Final rendering of the Hero section should look something like this**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f4e823d90bb150b36affc41e60864d00125b15cdee0e11292c48f752d2d0e14e)

### 2.

Using the previous file as the base, in your `02-styles.css` file update the `.container` selector by changing `width` to `max-width`

If you resize your browser, you should see that the content is resizing.

**Wide screen:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/5356d9d9b1de3ef692a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4e983ba745992ddaa1029ce349bc34b5921622e20565c17fa6ebf3c55240e18d)

**Narrow screen:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/9aeb51d5b4c9586ea05a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cec8d345e7c1502a6bcdfeb7a22f66a9a0052a7aa8bdc5898dc978d4ba0bd4d6)

### 3.

Whatever the browser you use, it’s a good idea from now on, to [toggle the device view](/rltoken/89H86kRqTJXkvIrweF9ADw "toggle the device view").

In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.

- For extra large devices (no media queries)
- For desktop / large devices (`max-width: 992px`)
- For tablet / medium styles (`max-width: 767px`)
- For mobile styles (`max-width: 480px`)

**We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.In your `02-1-styles.css` file:**

- inside the `/* Helpers` section target all images inside the main section

  - Property: `width`, Value: `100%`
  - Property: `height`, Value: `auto`

- inside the `/* Section Latest news` section, add a new media query (`max-width: 767px`)

  - Target the `row` inside `section-latest-news`
    - Property: `flex-direction`, Value: `column`

- inside the `/* Grid` section, at the end, add a new media query (`max-width: 767px`)

  - First, redefine the variable `section-padding` and give that value: `5rem 1.5rem`. And redefine the variable `section-body-padding` with `2rem 0 0`
  - Target the `ul.row` and the `row` class
    - Property: `flex-direction`, Value: `column`
    - Property: `margin`, Value: `0`
  - Target all the classes that started with `col-`
    - Property: `margin`, Value: `0 0 3rem 0`
  - Target the `col-1-3` and `col-1-2` classes
    - Property: `width`, Value: `100%`

The `navbar` is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.

- inside the `/* Navbar` section, at the end, add a new media query (`max-width: 767px`)
  - Target the `navbar-menu` class
    - Property: `display`, Value: `none`

You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!

**Rendering on wide screen**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/ec686cf75a8788a04bd5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4cf019b510ef0e8a5bb390d7d37600f677a964230cd4e07967d3f1ffa85deaf2)

**Rendering on screen with max-width: 767px**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/741a7a68af4e92b5c286.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9006430b0fbbf6a40a8faf1f9783669427e01144ebd60f5f91402558a5a11243)

**Rendering on screen with max-width: 767px, you can see the navbar is hidden**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/3ee548024a868f4ce695.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3d7c06cae9b756c52ab2c9de9f98ec9fa2072c3b95343796c75bacd869e78d81)

### 4.

Go to [Responsive Breakpoints](/rltoken/YBjP76f0R6AUNeY9dWB1yw "Responsive Breakpoints")

In Breakpoints generation settings:

- Resolution: From `380` to `1200`
- Size step: `25`
- Maximum images: `3`
- Art-direction: `Desktops`
- Upload your images one at a time:
  - `pic-about-01.jpg`
  - `pic-article-01.jpg`
  - `pic-article-02.jpg`
  - `pic-article-03.jpg`
- Copy the markup for the `<img>` tags and replace your current `<img>` tags with it.
- Download the images and place them into the `images` directory

Here’s an example on how to add different resolutions of the same image

```
<img
    sizes="(max-width: 3000px) 40vw, 1200px"
    srcset="
      about-us\_icoxoo\_c\_scale,w\_380.jpg 380w,
      about-us\_icoxoo\_c\_scale,w\_853.jpg 853w,
      about-us\_icoxoo\_c\_scale,w\_1200.jpg 1200w"
    src="about-us\_icoxoo\_c\_scale,w\_1200.jpg"
    alt="">
```

### 5.

We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.

Using the previous files as the base for this project

**Changes to the HTML**

Just before the `<nav class="navbar-menu">`

- Create an input (which will be not visible)

  - Class: `menu-btn`
  - Type: `checkbox`
  - Id: `menu-btn`

- Create a label

  - Class: `menu-icon`
  - For: `menu-btn`
  - In the label create an empty `span` with the `navicon` class.

**Changes to the CSS**

Inside the `/* Navbar` section, and inside the `767px` media query

- Create the `root` global selector. We want to override a CSS variable:

  - Variable name: `nav-item-margin`, Value: `0`

- In the selector for the `navbar-menu` class

  - Property: `flex`, Value: `1`

- Target the `nav` class in `header` class

  - Property: `flex-direction`, Value: `column` (for the element of the menu be below each other)
  - Property: `overflow`, Value: `hidden`
  - Property: `max-height`, Value: `0` (the display property can’t be animated, so we use the height that can be animated)
  - Property: `transition`, Value: `max-height .2s ease-out`

**Rendering on screen with max-width: 767px, the check box is the input**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/17e4ace4fe8c91201e0a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e8b21788907da74b647ad0de8d817dc4ed8d996354a7e09d9d209fab4594749f)

### 6.

Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.

Using the previous files as the base for this task:

- Target the `menu-icon` class inside the `header` class

  - Property: `cursor`, Value: `pointer`
  - Property: `padding`, Value: `2.5rem`
  - Property: `position`, Value: `relative`
  - Property: `user-select`, Value: `none`

- Target the `navicon` class inside the`menu-icon` class which is inside the `header` class

  - Property: `background`, Value: point to the `color-white` variable
  - Property: `display`, Value: `block`
  - Property: `width`, Value: `2rem`
  - Property: `height`, Value: `.2rem`
  - Property: `position`, Value: `relative`
  - Property: `transition`, Value: `background .2s ease-out`

- Target the `before` and `after` pseudo elements of the `navicon` class inside the `menu-icon` class which is inside the `header` class

  - Property: `content`, Value: empty string
  - Property: `display`, Value: `block`
  - Property: `width`, Value: `100%`
  - Property: `height`, Value: `100%`
  - Property: `position`, Value: `absolute`
  - Property: `background`, Value: point to the `color-white` variable
  - Property: `transition`, Value: `all .2s ease-out`

- Target only the `before` pseudo element of the `navicon` class inside the `menu-icon` class which is inside the `header` class

  - Property: `top`, Value: `.7rem`

- Target only the `after` pseudo element of the `navicon` class inside the `menu-icon` class which is inside the `header` class

  - Property: `top`, Value: `-.7rem`

**Rendering of the hamburger on max-width: 767px**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/87f845e172312626e0fc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080559Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=97c3ccda845ace8e45321a758312d0df0218dcaffda3cd42ec1a104a70175c18)

### 7.

**in your CSS file:**

- Create a new comment section `/* menu btn */`
- Target `menu-btn` class inside `header` class
  - Property: `display`, Value: `none`
- Target `navbar-menu` class when the `menu-btn` class element is checked
  - Property: `display`, Value: `block`
- Target `nav` class inside `navbar-menu` class when the `menu-btn` class element is checked

  - Property: `max-height`, Value: `100%`
  - Property: `overflow`, Value: `inherit`

- At the end of the `/* Section HERO` section, create a new media query for `max-width: 767px`

  - Target the `section-hero` class
    - Property: `margin`, Value: `-0.1rem 0`
  - Target the `hero-homepage` class
    - Property: `background-position`, Value: `85% 0`
  - Target the `section-body` class inside `section-hero` class
    - Property: `padding`, Value: `2rem`

Going back to the `/* menu btn */` section

- Target the `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class
  - Property: `background`, Value: `transparent`
- Target the before state of `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class element
  - Property: `transform`, Value: `rotate(-45deg)`
- Target the after state of `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class element
  - Property: `transform`, Value: `rotate(45deg)`
- Target the before and after states of `navicon` class when inside `menu-icon` class sibling to the `menu-btn` class when it is checked and inside `header` class

  - Property: `top`, Value: `0`

- Create a new media query for `max-width: 767px`

  - Target the root and redefine the `header-padding` variable with `2rem 0 0`
  - Target `header` class
    - Property: `background`, Value: point to the `color-black` variable
  - Target the `header-container` class
    - Property: `flex-wrap`, Value: `wrap`
    - Property: `padding`, Value: `0 1.5rem`
  - Target the `menu-icon` class inside the `header` class
    - Property: `display`, Value: `block`

- Create a new media query for `max-width: 480px`

  - Target the `header-logo` class
    - Property: `flex-basis`, Value: `70%`

- Create a new media query with `min-width: 481px` and `max-width: 767px`

  - Target the `header-logo` class
    - Property: `flex-basis`, Value: `79%`

- Find the `.header .menu-icon` selector and add `display: none;` to hide the menu icon when we are on desktop mode.

**Rendering on screen with max-width: 767px, when the input is unchecked the menu is not displayed**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/b9f67a5f3bdfdbd4cd88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ba6751eb568d936ca7685286b38277b7f0d4db840a6c0018835c44bd36922a59)

**Rendering on screen with max-width: 767 px, when input is checked the menu block is displayed**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/fe0ae0bfb739a19ae933.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3e965cc5b5f1d87caa702444ce5e81abdbbcec3f42f7364b255f6491d38df114)

**Rendering on desktop screen, menu icon is not visible**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/aa52c972d075f360f8bc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=234bf7b9fbc4ffa709f8a02e09d51710afb591db34fee9934185c667ad0ebdd3)

### 8.

We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.

In your CSS file at the end of the `/* Base` section

- Create a new media query for `max-width: 480px`
  - Target the `html` element
    - Property: `font-size`, Value: `57%`
- Create a new media query for `min-width: 481px` and `max-width: 767px`
  - Target the `html` element
    - Property: `font-size`, Value `60%`

This is a simple way to achieve responsive typography. More complex options can also be used to have a more granular control over the font sizes.

### 9.

in `08-styles.css`, at the end of the `/* Card WORK`

- Create a new media query of `max-width: 767px`
  - Target the `card-inner` class inside the `card-work` class
    - Property: variable called `text-color`, Value: point to `color-white` variable
    - Property: `position`, Value: `relative`
  - Target the `card-title` class inside the `card-work` class
    - Property: `opacity`, Value: `1`
  - Target all `a` tags inside `.card-work .card-title` class:
    - Property: `padding`, Value: `2rem 1rem 0 1rem`

**Rendering on screen of max-width: 767px**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/bd8d10a18201a8796172.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=11b435701679279f87e01556d93fc80369fefd89330faf0cdae64cd92a8d4cdb)

### 10.

in `09-styles.css`, in the `/* Footer` section

- Create a new media query of `max-width: 767px`.
  - Create the `root` global selector. We want to override a CSS variable:
    - Variable name: `footer-padding`, Value: `5rem 2rem 1rem`
  - Target `.social.nav` inside the `footer` class and the `footer-nav` class inside the `footer` class
    - Property: `text-align`, Value: `center`
  - Target the adjacent `li`to the `li` inside the `.social.nav` and the adjacent `li` to the `li` inside `.footer-nav` (to easily add a left padding starting on the second `li`)
    - Property: `padding-left`, Value:`2rem`

**Rendering on screen of max-width: 767px**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/a12e272db34a9c4e47e9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3141854c3385bee8314d4aaf778f20002ed77eb0e2d30f736257b7902fc8704d)

### 11.

In `10-index.html`, in the `body` tag, add the class `article-page`

In `10-styles.css`, in the `/* Section HERO` section, just before the media query:

- Target `section-hero` class inside `article-page` class
  - Property: `margin-top`, Value: `-8.5rem`
  - Property: `padding-top`, Value: `5rem`

**Rendering of `header` and `section-hero` class elements**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/7a38d40512c0c6edb211.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250825%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250825T080600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fe9c3f67391ddaeee62608395b56fd92a77214c4dc791b23652a1b7aac3fc667)
