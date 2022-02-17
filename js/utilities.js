//This function changes the text color of any tag given a tag and color
function changeTagTextColor (tag, color) {
    tag.style.color = color;
}

//This function changes the background color of any tag, given its tag and color
function changeTagBackground(tag, color) {
    tag.style.backgroundColor = color;
}   

//This function changes the border width of any tag
function changeTagWidth(tag, width) {
    var innerCells = document.querySelectorAll('table tr td');

    for(var i = 0; i < innerCells.length; i++) {
        innerCells[i].style.borderWidth = width;
    }
    tag.style.borderWidth = width;
}

//This funciton changes the width of the table, more specifically the cells given a tag and a width
function changeTableWidth(tag, width) {
    tag.style.width = width;
}

//This function changes the border color given a tag and a color
function changeTagBorderColor (table, color) {
    var innerCells = document.querySelectorAll('table tr td');

    for(var i = 0; i < innerCells.length; i++) {
        innerCells[i].style.borderColor = color;
    }
    table.style.borderColor = color;
}
