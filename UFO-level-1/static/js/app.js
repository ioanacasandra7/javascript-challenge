//data.js
var ufoFindings= data;
tbody = d3.select("tbody");

function createTable(ufoFindings) {
    ufoFindings.forEach((ufoFindings) => {
         var row = tbody.append("tr");
        Object.values(ufoFindings).forEach((value) => {
           var cell = row.append("td");
           cell.text(value);
         });
       });   

    }
createTable(ufoFindings);
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select(".filters");
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
// Complete the event handler function for the form
function runEnter() {
    // remove previous data from the list to
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filteredData = ufoFindings.filter(ufoFindings=> ufoFindings.datetime === inputValue);
    createTable(filteredData);
}
