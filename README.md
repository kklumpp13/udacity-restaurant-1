# Mobile Web Specialist Certification Course

## Project Overview: Stage 1

For the **Stage One** project we were asked to meet the following requirements:
* The app must be responsive
* The app must be accessible
* The app must use a service worker to render visited pages when there is no network access. 

### Responsive Updates
The following updates were made to make this app more responsive: 
* CSS grid was used to create a responsive layout
* The viewport meta tag was added to allow for pinch and zoom
* Media queries were added to help the content flow as the screen was resized

### Accessibility Updates
The following updates were made to make this app more accessible:
* The `lang` attribute was added to the `<html>` tag
* Alt text was added to the images
* All caps text was removed to improve readability
* Text was set to be at least 16px to improve readability
* `line-height` was set to 1.5 to improve readability
* Colors were updated to meet color contrast requirements
* Units were switched to rem where necessary to accomodate text resizing up to 200%
* `em` was used for media queries to improve the user's experience when text is resized
* Missing labels were added to both `<select>` elements 
* Links were underlined to add a secondary indicator besides color 
* Links styled like buttons were expanded to 100% to increase the touch target area and link text was underlined to help create a visual distinction from actual buttons
* Hover styles were added
* Custom focus styles were added to improve consistency across browsers
* Keyboard users can now 'click' on map markers
* A skip link was added
* It was confirmed with the aXe Chrome extension that no errors were found on the page

### Service Workers
A user can now see pages they have visited even if they are offline. 

### To Do
* Choose an accessible color palette that isn't as painful to look at
* Remove any duplicated CSS








