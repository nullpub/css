# Minimal CSS Utility Classes

This project exists because I found other "atomic" or "functional" css libraries to be lacking. The goals of this project are as follows:

- Provide themeable and highly reusable classes for layout and themes
- Provide a sensible api that follows a simple pattern

Please note that this project is still unstable and the api, dist targets, and class prefixes are constantly shifting.

## Utility Classes

- [Borders](#Borders)
- [Colors](#Colors)
- [Display](#Display)
- [Flex](#Flex)
- [Font](#Font)
- [Margin](#Margin)
- [Padding](#Padding)
- [Text](#Text)

## Installation

Install via npm:

`npm i @nll/css`

Include the full library in your build:

`@import './node_modules/@nll/css/dist/main';`

Or only include the parts you need:

```css
@import './node_modules/@nll/css/dist/margin';
@import './node_modules/@nll/css/dist/padding';
```

## Use

The classes follow the following patterns:

`.<PREFIX>[SELECTOR][-BREAKPOINT]-[VALUE]`

For example,`.pl-sm-2` will apply left padding after the small breakpoint of value 2.

All values are defined by custom `:root` properties. Care has been taken to scale both padding, margins, borders, and font size together.

### Borders

- Prefix: **b**
- Selectors: **a** all, **t** top, **r** right, **b** bottom, **l** left, **x** direction, **y** direction, **s** style, **c** color, **cr** color contrast
- Breakpoints: **sm** small, **md** medium, **lg** large
- Values: **0** - **7**

#### Border Size `.b[a,t,r,b,l,x,y]-[0-7]` and `.b[a,t,r,b,l,x,y]-[sm,md,lg]-[0-7]`

_Border style defaults to solid if not set_

Border size has the following selectors: **a** all **t** top, **r** right, **b** bottom, **l** left, **x** left and right, **y** top and bottom.

Border size has the following breakpoints: `sm` small, `md`, medium, `lg` large.

Border size has sizes from **0** to **7**.

Examples:

- Border size 2 - `.bs-2`
- Border size 4 after medium breakpoint - `.bs-md-4`

#### Border Style `.bs-[none,hidden,dotted,dashed,solid,double,groove,ridge,inset,outset]`

Examples:

- Border style: none - `.bs-none`
- Border style: hidden - `.bs-hidden`
- Border style: dotted - `.bs-dotted`
- Border style: dashed - `.bs-dashed`
- Border style: solid - `.bs-solid`
- Border style: double - `.bs-double`
- Border style: groove - `.bs-groove`
- Border style: ridge - `.bs-ridge`
- Border style: inset - `.bs-inset`
- Border style: outset - `.bs-outset`

#### Border Color `.bc[,r]-[THEME]` and `.bc[,r]-[THEME]-[PSUEDO CLASS]`

_Border color is also set when the elements `.ct-[theme]` and `.ctr-[theme]` is set._

Border color themes are: **base**, **light**, **dark**, **link**, **primary**, **secondary**, **accent**, **info**, **warning**, **error**

Examples:

- Border color: base - `.bc-base` - Reversed - `.bcr-base`
- Border color: light - `.bc-light` - Reversed - `.bcr-light`
- Border color: dark - `.bc-dark` - Reversed - `.bcr-dark`
- Border color: link - `.bc-link` - Reversed - `.bcr-link`
- Border color: primary - `.bc-primary` - Reversed - `.bcr-primary`
- Border color: secondary - `.bc-secondary` - Reversed - `.bcr-secondary`
- Border color: accent - `.bc-accent` - Reversed - `.bcr-accent`
- Border color: info - `.bc-info` - Reversed - `.bcr-info`
- Border color: warning - `.bc-warning` - Reversed - `.bcr-warning`
- Border color: error - `.bc-error` - Reversed - `.bcr-error`

_There are also classes to change border color for the following psuedo classes._

Border psuedo classes - **hover**, **active**, **focus**, **required**, **valid**, **invalid**, **read-only**.

Examples:

- Border color on hover: .bc-base:hover - `.bc-base-hover`
- Border color on active: .bc-light:active - `.bc-light-active`
- Border color on focus: .bc-dark:focus - `.bc-dark-focus`
- Border color on required: .bc-link:required - `.bc-link-required`
- Border color on valid: .bc-primary:valid - `.bc-primary-valid`
- Border color on invalid: .bc-secondary:invalid - `.bc-secondary-invalid`
- Border color on read-only: .bc-accent:read-only - `.bc-accent-read-only`

#### Border Radius

The pattern here is `.br[a,r,t,b,l,tr,tl,br,bl]-[0-3]`

Border radius has the following selectors: **a** all, **tl** top left, **tr** top right, **bl** bottom left, **br** bottom right, **t** top left and top right, **b** bottom left and bottom right, **l** top left and bottom left, **r** top right and bottom right.

Thats - **a**, **t**, **r**, **b**, **l**, **tr**, **tl**, **br**, **bl**.

Border radius has sizes **0** - **3**.

Examples:

- Border radius 1 (approx 0.25rem by default) on top left and top right - `.brt-1`
- Border radius 2 on top left and bottom right - `.brtl-2 .brbr-2`

#### Border Custom Properties

Border classes use the following `:root` custom properties:

```css
:root {
  --border-size-base: var(--fill-size); /* calc(var(--size) / 18) => calc(1.2rem / 18) */
  --border-size-0: calc(var(--border-size-base) * 0);
  --border-size-1: calc(var(--border-size-base) * 1);
  --border-size-2: calc(var(--border-size-base) * 2);
  --border-size-3: calc(var(--border-size-base) * 4);
  --border-size-4: calc(var(--border-size-base) * 8);
  --border-size-5: calc(var(--border-size-base) * 16);
  --border-size-6: calc(var(--border-size-base) * 32);
  --border-size-7: calc(var(--border-size-base) * 64);
}

:root {
  --border-radius-circle: 50%;
  --border-radius-base: var(--radius-size); /* calc(var(--size) / 6) => calc(1.2rem / 6) */
  --border-radius-0: calc(var(--border-radius-base) * 0);
  --border-radius-1: calc(var(--border-radius-base) * 1);
  --border-radius-2: calc(var(--border-radius-base) * 2);
  --border-radius-3: calc(var(--border-radius-base) * 4);
}
```

### Colors

- Prefix: **c**
- Selectors: **t** theme, **tr** theme reverse, **f** foreground, **fr** foreground reverse, **b** background, **br** background reverse.
- Values: **base**, **light**, **dark**, **link**, **primary**, **secondary**, **accent**, **info**, **warning**, **error**.

Colors in @nll/css rely on color pairings of a color and its contrast.

Each color pairing is referred to as a theme. The themes are: **base**, **light**, **dark**, **link**, **primary**, **secondary**, **accent**, **info**, **warning**, **error**.

Here are the `:root` custom properties for color.

```css
:root {
  --color-base: #111111;
  --color-base-contrast: #ffffff;
  --color-light: #111111;
  --color-light-contrast: #f4f4f4;
  --color-dark: #f4f4f4;
  --color-dark-contrast: #111111;
  --color-link: #357edd;
  --color-link-contrast: #ffffff;
  --color-primary: #eeeeee;
  --color-primary-contrast: #5e2ca5;
  --color-secondary: #eeeeee;
  --color-secondary-contrast: #a463f2;
  --color-accent: #555555;
  --color-accent-contrast: #ffb700;
  --color-info: #f4f4f4;
  --color-info-contrast: #357edd;
  --color-warning: #ff4136;
  --color-warning-contrast: #ffd700;
  --color-error: #ff4136;
  --color-error-contrast: #ffdfdf;
}
```

#### Themes `.ct[,r]-[base,light,dark,link,primary,secondary,accent,info,warning,error]`

Theme classes for `.ct-[THEME]` will set **color**, **background-color**, and **border-color** for the element it is applied to. The properties are set as follows for `.ct-primary`:

```css
.ct-primary {
  color: var(--color-primary);
  background-color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}
```

Theme classes for `.ctr-[THEME]` reverse the colors of the corresponding `.ct-[THEME]` class. ie.

```css
.ctr-primary {
  color: var(--color-primary-contrast);
  background-color: var(--color-primary);
  border-color: var(--color-primary-contrast);
}
```

Examples:

- Base theme - `.ct-base`
- Light theme - `.ct-light`
- Dark theme - `.ct-dark`
- Link theme - `.ct-link`
- Primary theme - `.ct-primary`
- Secondary theme - `.ct-secondary`
- Accent theme - `.ct-accent`
- Info theme - `.ct-info`
- Warning theme - `.ct-warning`
- Error theme - `.ct-error`

#### Foreground Color `.cf[,r]-[base,light,dark,link,primary,secondary,accent,info,warning,error]`

Foreground colors can be set independently of a theme using `.cf-[THEME]`.

Examples:

- Base color - `.cf-base`
- Light color - `.cf-light`
- Dark color - `.cf-dark`
- Link color - `.cf-link`
- Primary color - `.cf-primary`
- Secondary color - `.cf-secondary`
- Accent color - `.cf-accent`
- Info color - `.cf-info`
- Warning color - `.cf-warning`
- Error color - `.cf-error`

#### Background Color `.cb[,r]-[base,light,dark,link,primary,secondary,accent,info,warning,error]`

Background colors can be set independently of a theme using `.cf-[THEME]`.

Examples:

- Base background color - `.cb-base`
- Light background color - `.cb-light`
- Dark background color - `.cb-dark`
- Link background color - `.cb-link`
- Primary background color - `.cb-primary`
- Secondary background color - `.cb-secondary`
- Accent background color - `.cb-accent`
- Info background color - `.cb-info`
- Warning background color - `.cb-warning`
- Error background color - `.cb-error`

### Display **To Do**

### Flex **To Do**

### Font **To Do**

### Margin **To Do**

### Padding **To Do**

### Text **To Do**
