# Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

JavaScript provides multiple ways to select elements from the DOM.

## 1. getElementById()

```javascript
document.getElementById("idName");
```

- Selects a single element by id  
- Returns one element or null  
- ID must be unique  

---

## 2. getElementsByClassName()

```javascript
document.getElementsByClassName("className");
```

- Selects all elements with a class  
- Returns an HTMLCollection  
- Live collection (updates automatically)  

---

## 3. querySelector()

```javascript
document.querySelector("cssSelector");
```

- Returns the first matching element  
- Uses full CSS selector syntax  

---

## 4. querySelectorAll()

```javascript
document.querySelectorAll("cssSelector");
```

- Returns all matching elements  
- Returns a static NodeList  
- Supports forEach()  

---

---
# Q2. How do you create and insert a new element into the DOM?
  How do you create and insert a new element into the DOM?
## 1. createElement()
``` javascript
document.createElement("tagName");
```
- Creates a new HTML element
- Does not insert it into the DOM automatically
#### Example:
``` javascript
const newDiv = document.createElement("div");
```
---
## 2. Add Content
``` javascript
element.textContent = "Text";
```
- Adds text inside the element

### OR

``` javascript
element.innerHTML = "<strong>Text</strong>";
```
- Adds HTML content inside the element
---
## 3. appendChild()
``` javascript
parent.appendChild(element);
```
- Inserts the element as the last child
- Returns the inserted element
---
## 4. append()
``` javascript
parent.append(element);
```
- Inserts element as the last child
- Can insert multiple nodes
- Can insert text directly
---

---
# Q3. What is Event Bubbling? And how does it work?
## Event Bubbling in JavaScript
### Event bubbling is the default behavior where an event starts from the target (child) element and then propagates upward to its parent elements up to the document
- Fires on the target element first
- Then moves to parent → grandparent → document
- Default event flow
### HTML
``` html
<div id="grandparent">
  Grandparent
  <div id="parent">
    Parent
    <button id="child">Click Me</button>
  </div>
</div>
```
### JS
``` javascript
document.getElementById("grandparent").addEventListener("click", function () {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked");
});
```
### output 
``` code
Child clicked
Parent clicked
Grandparent clicked
```
## Why This Happens?
- Event triggers on the child (button) first
- Then bubbles up to parent
- Then to grandparent
- Then continues up to document
---

---
# Q4. What is Event Delegation in JavaScript? Why is it useful?
## What is Event Delegation in JavaScript?
- Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements. It works because of event bubbling.
---
## Why is it Useful?
- Improves performance (fewer event listeners)
- Works for dynamically added elements
- Makes code cleaner and easier to manage
---

---
# Q5. What is the difference between preventDefault() and stopPropagation() methods?
### preventDefault()
- Stops the browser’s default action
- Example: Prevents form submission or link navigation
---
### stopPropagation()
- Stops the event from bubbling (or capturing) to parent elements
- Prevents the event from moving up the DOM tree
