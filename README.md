# Front-end developer capstone project

## Application
 - UX/UI in design _____________________ [Figma file](https://www.figma.com/design/AZFV6rg6yijbfhLKYXrm1n/canvas?node-id=409-259&t=L9e0BNnTFWTClYIj-1)
 - Creating react app
 - Using git to manager code
 - Meta tags and open graph protocol ___ index.html
 - Sematic tags, css ___________________ 
 - States, hooks in react ______________
 - React router ________________________ router.js, components/Header.jsx, components/Footer.jsx
 - Form and validation _________________ components/BookingForm.jsx
 - Fetch and using API _________________ components/Testimonial.jsx, utilities/FakeAPI.js
 - Unit testing ________________________ x

## Accessibility

### Using sematic tags
 - header, main, footer
 - nav, section, h1-6, p
### ARIA:
 - labelledBy for Menu, menu item ____ components/Header.jsx, components/Header.jsx
 - describedby for form ______________ components/Header.jsx, components/Header.jsx, components/BookingForm.jsx, components/Testimonial

## Validation
### HTML:
 - input - range
### Schema:
 - Yup: required, min (date - you can't book a date in the past)

## Testing
 - 

## Dependencies
- Formik and Yup for Form and validation
- react-router-dom
- react-icons
- chakra-ui/react, emotion/react for fast css and basic components<br/>
See the file package.json for details

## Installation
This app works with node 21+. First, install node.
> **nvm install 21.0.0**
>
 with this you install the lastest version. Second, check what is installed

> **nvm list**
>
 Third, choose version to use

> **nvm use 21.0.0**
>
 Then install dependencies

> **npm install**
>
 Last is running app

> **npm start**
>
 Run test cases by following command

> **npm test**