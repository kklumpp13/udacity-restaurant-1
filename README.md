# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Responsive Updates
* Units were switched to rem to be more responsive
* CSS grid was used to create a responsive layout
* The viewport meta tag was added to allow for pinch and zoom

### Accessibility Updates
The following updates were made to make this app more accessible:
* The `lang` attribute was added to the `<html>` tag
* All caps text was removed to improve legibility
* Colors were updated to meet color contrast requirements
* Units were switched to rem accomodate text resizing
* `line-height` was set to 1.5 to improve legibility
* links were underlined to add a secondary indicator besides color 
* It was confirmed with the aXe Chrome extension that no errors were found on the page
* Alt text was added to the images
* Text was set to be at least 16px
* Missing labels were added to both `<select>` elements 
* Link buttons expanded to 100%
* Hover - `text-decoration` is removed on hover 
* A custom focus style was added to ensure consistency across browsers

### To Do
* test on screen reaader
* keyboard
* focus styles - box shadow selects
* hover styles
* test rotor
* test heading levels
* semantic html tags
* regions
* fix map on detail view
* update SW
* text resizing
* skip link
* map doesn't work with keyboard
* test safari and ff
* spacing needs to be consistent between rules
* map focus styles





