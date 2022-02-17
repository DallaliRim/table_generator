'use strict';
const select = document.querySelector.bind(document);
//Defining the textContent here so that it can be accessed by more than one functiont
let textContent = ""; 

//This function generates a table in respect to the provided input from the form
function generateTable() {
    let rowCount = select("#row-count").value;
    let colCount = select("#col-count").value;
    let table = select("#table");
    let backgroundColor = select("#background-color").value;
    let textColor = select("#text-color").value;
    let borderColor = select("#border-color").value;
    let borderWidth = select("#border-width").value;
    let tableWidth = select("#table-width").value;

    //"Resetting" my table so that it does not accumulate after every change
    document.getElementById("table").innerHTML ="";
    textContent = "<table>\n";
    //looping through the rows and columns to create the cells
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        row.innerHTML += "\n";
        textContent += "\n   <tr>\n\t";

        for (let j = 0; j < colCount; j++) {
            const column = document.createElement('td');
            row.appendChild(column);
            let cellContent = "cell" + i + j;
            column.innerHTML = cellContent;
            textContent += " <td> " + cellContent + " </td> ";
        }
        textContent += "\n   </tr>\n";
    }
    textContent += "\n </table>"
    //Calling utility functions to handle the styling provided by the inputs from the form
    changeTagBackground(table, backgroundColor);
    changeTagBorderColor(table, borderColor);
    changeTagTextColor(table, textColor);
    changeTagWidth(table, borderWidth);
    changeTableWidth(table, `${tableWidth}%`);
}

//Generates the Inner HTML of the table and puts it into the text area
function generateHtml() {
    let textArea = select("#text-area");
    textArea.value = textContent;
}

addEventListener("load", () => {
    generateTable();
    generateHtml();
    document.querySelector("#form").addEventListener("change", generateTable);
    document.querySelector("#form").addEventListener("change", generateHtml);
})



