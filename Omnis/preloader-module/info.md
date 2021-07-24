# Preloader
#### Preloader is a page loading animation during which the site is loaded
## How to use
1. First of all you need to load JavaScript file. At the end of the body tag you need to write:
  ```
  <script src="/Omnis/preloader-module/js/index.js"></script>
  ```
1. Then you need to include the stylesheet. Inside the head tag you need to write:
  ```
  <link rel="stylesheet" href="/Omnis/preloader-module/css/index.css">
  ```
1. For connect you need to add in html file special tag:
```
<preloaderlib s-name="animation-name"></preloaderlib>
```
And also, using the "pbg" attribute, you can change the background color, and using the "s-color" attribute, you can change the color of the animation. As a color, you can use any colors that HTML supports, for example, HEX colors
1. You can choose the preloader style by writing its name in the "s-name" attribute.
For example:
```
<preloaderlib pbg="#FF9A40" s-name="circle-lines" s-color="#35C0CD"></preloaderlib>
```
#### [Result]()
## Preloaders:
- [cube]()
- [default]()
- [circle-lines]()
- [rocket]()
- [ice-cream]()
