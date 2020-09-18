// Setting current date and time
const currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
const currentTime = moment().format("H");


// Initializing page
renderTimeBlocks();

// Loading each time block
function renderTimeBlocks() {
    for (let i = 9; i < 18; i++) {
        const newRow = $("<div>").addClass("row time-block");
        const newTimeBox = $("<div>").addClass("col-2 hour");
        const newDescription = $("<textarea>").addClass("col-8 description").attr("id", "textArea" + i);
        const newButton = $("<button>").addClass("col-2 saveBtn fas fa-save").attr("id", "button" + i);
        let areaMod = "#textArea" + i;
        $(newRow).append(newTimeBox, newDescription, newButton);
        $(".container").append(newRow);
        renderHour(newTimeBox, i);
        setTimeBlocks(areaMod, i);
        renderStoredTasks(areaMod, i);
    };
}

// Grabs any tasks loaded in local storage
function renderStoredTasks(areaMod, i) {
    $(areaMod).text(localStorage.getItem(i));
}

// Storing the task in local storage
function storeTask(buttonId) {
    let num = buttonId.slice(6);
    let inputText = $("#textArea" + num).val();
    localStorage.setItem(num, inputText);
    renderStoredTasks(inputText, num);
}

// Sets the hour for each time block
function renderHour(newTimeBox, i) {
    if (i < 12) {
        newTimeBox.text(i + ":00 AM");
    } else if (i === 12) {
        newTimeBox.text(i + ":00 PM")
    } else {
        let tempTime = i - 12;
        newTimeBox.text(tempTime + ":00 PM");
    };
}

// Checks the current time and sets a class for past, present or future
function setTimeBlocks(areaMod, i) {
    if (currentTime == i) {
        $(areaMod).addClass("present");
    } else if (currentTime > i) {
        $(areaMod).addClass("past");
    } else {
        $(areaMod).addClass("future");
    }
}

// Event listener for the save buttons
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    storeTask(event.target.id)
})