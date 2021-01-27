# Responsive website «Sedona». 
(non-commercial project)

* Author: [Ivan Kleimenov](https://github.com/kleimenov).

---
### Description
This is the city of Sedona, AZ website. The main idea is to introduce advertisement of the city and to provide useful information about the city and region attractions and services. Sedona's website has three webpages:
- main (home) page;
- photos page;
- reviews page.

All pages contain the website header (aka navigation block) with the links to other pages (photos page, reviews form page) and the footer block with city hashtag, social networking sites links, and link to HTML Academy website (frontend Bootcamp).

1) _The main page_ is the landing page, where you can find a local weather widget (that fetches data from a weather API), the main hero section, a features list, an accommodation search pop-up, and a map.

2) _The photo page_ is the photos and videos host page. On this page, you can find popular photos, explore users attitude (amount of likes), and show your respect that photos and authors that attracts your attention. 

3) _The reviews page_ includes forms with different types of interactive elements such as radio buttons, checkboxes, text inputs, etc.

Above was provided a brief description of the Sedona project.
[You can explore this website detailed here (link on github pages)](https://kleimenov.github.io/SEDONA-HTML-CSS-project/source/index.html)

---
### Tech descripton and specification

This website includes three web pages. All pages are responsive, work with a broad variety of screens in range from mobile devices (screen width 320px) to desktops (screen width 1200px and higher). This cross-devices website affords users to feel comfortable interacting with content whether the size of the screen their device has.

This project is build with the following technologies:
```
- HTML;
- CSS;
- JavaScript;
- SASS;
- weather API (fetch data from weather API);
```
Semantic HTML is used for all webpages markup with the elements of block - element - modifier system in class naming. All elements are styled with CSS using the inheritance and cascading rules, and selectors specificity. CSS rules are contained in a separate .scss files for easier maitenance and then compiled with the Sass preprocessor into a CSS style master file to reduce the number of interactions with a server. Responsiveness is provided by the usage of media queries and sass variables.
All algorithms  were implemented with JavaScript. This includes DOM manipulation (DOM elements creation and modification) and API fetching.

---
### Descriptions of JavaScript features 
1) _Weather API_ implemented on vanilla JavaScript (I use my personal KEY from api.openweathermap.org because of that in open source at Github I use place holder 'password', it means if you want to see real weather please use your personal KEY). Weather API architecture includes following functions: 
Function `displayWeather()` creates DOM elements that contains weather data. Function `getWeather()` fetches weather API from outer resource. Functions `celsiusToFahrenheit()` and `fahrenheitToCelsius()` calculate and transition data to the measurement sistem convenient for user.
2) _Modal hotel booking form_. Implemented algorithm allows to show and hide modal booking form. Algorithm includes follow steps: find modal element inside HTML markup, listen for the event `a user click on the button`, show the modal booking form, get user's data, hide modal form when user click on a particular button. 
3) _Likes toggle_ with the toggle algorithm.


