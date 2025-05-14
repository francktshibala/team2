/**
 * Convert the response from a fetch call to JSON and handle errors
 * @param {Response} res - The Response object from a fetch call
 * @returns {Object} The JSON data from the response
 */
export function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

/**
 * Utility function for rendering a list with a template
 * @param {Function} templateFn - The template function to use
 * @param {Element} parentElement - The parent element to insert the HTML into
 * @param {Array} list - The list of items to render
 * @param {String} position - The position to insert the HTML (default: "afterbegin")
 * @param {Boolean} clear - Whether to clear the parent element first (default: false)
 */
export function renderListWithTemplate(
  templateFn, 
  parentElement, 
  list, 
  position = "afterbegin", 
  clear = false
) {
  // Clear the parent element if requested
  if (clear) {
    parentElement.innerHTML = "";
  }
  
  // Map each item in the list to an HTML string using the template function
  const htmlStrings = list.map(templateFn);
  
  // Insert the HTML into the parent element
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}