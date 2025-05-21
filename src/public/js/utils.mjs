// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      console.log(`No data found in localStorage for key: ${key}`);
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error getting data from localStorage (key: ${key}):`, error);
    return null;
  }
}

// save data to local storage
export function setLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`Data saved to localStorage (key: ${key}):`, data);
  } catch (error) {
    console.error(`Error saving data to localStorage (key: ${key}):`, error);
  }
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  try {
    const element = qs(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
      return;
    }
    
    element.addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    element.addEventListener("click", callback);
  } catch (error) {
    console.error(`Error setting click listener on ${selector}:`, error);
  }
}

export function getParam(param) {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get(param);
    console.log(`URL parameter ${param}:`, value);
    return value;
  } catch (error) {
    console.error(`Error getting URL parameter ${param}:`, error);
    return null;
  }
}

export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  try {
    if (!parentElement) {
      console.error("Parent element is null or undefined");
      return;
    }
    
    if (!list || !Array.isArray(list)) {
      console.error("List is null, undefined, or not an array:", list);
      return;
    }
    
    console.log(`Rendering list of ${list.length} items`);
    
    const htmlStrings = list.map(item => {
      try {
        return template(item);
      } catch (e) {
        console.error("Error rendering template for item:", item, e);
        return "";
      }
    });
    
    if (clear) {
      parentElement.innerHTML = "";
    }
    
    parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
    console.log("List rendering complete");
  } catch (error) {
    console.error("Error in renderListWithTemplate:", error);
  }
}

// Keep all your existing functions here...

// New functions to add:

// This function gets HTML from a file
// Think of it like asking a friend to bring you a document
export async function loadTemplate(path) {
  // Go to the file location (path)
  const res = await fetch(path);
  // Convert the response to text (HTML)
  const template = await res.text();
  // Return the HTML
  return template;
}

// This function puts the template into the page
// Like pasting the content onto the page
export function renderWithTemplate(template, parentElement, data, callback) {
  // Put the template inside the parent element
  parentElement.innerHTML = template;
  
  // If there's a callback function, run it
  // This is optional - for special things we might need to do after inserting the template
  if(callback) {
    callback(data);
  }
}

// This function loads both header and footer
// Think of it as our main helper that puts everything together
export async function loadHeaderFooter() {
  try {
    // 1. Load the header template
    const headerTemplate = await loadTemplate("/partials/header.html");
    
    // 2. Find where to put the header on the page
    const headerElement = document.getElementById("main-header");
    
    // 3. Insert the header
    renderWithTemplate(headerTemplate, headerElement);
    
    // 4. Load the footer template
    const footerTemplate = await loadTemplate("/partials/footer.html");
    
    // 5. Find where to put the footer
    const footerElement = document.getElementById("main-footer");
    
    // 6. Insert the footer
    renderWithTemplate(footerTemplate, footerElement);
    
    // 7. Tell the page we're done loading header and footer
    // This is like announcing "dinner is ready!" so other parts of the code know they can start
    const event = new CustomEvent("headerfooterloaded");
    document.dispatchEvent(event);
  } catch (error) {
    console.error("Error loading header and footer:", error);
  }
}