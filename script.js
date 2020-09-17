// Setting current date and time
const currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
const currentTime = moment().format("h");

// Initializing page
renderTimeBlocks();

// Loading each time block
function renderTimeBlocks() {
    for (let i = 9; i < 18; i++) {
        const button = "button";
        const textArea = "textArea";
        const newRow = $("<form>").addClass("row time-block");
        const newTimeBox = $("<label>").addClass("col-2 hour").attr("for", textArea + i);
        const newDescription = $("<textarea>").addClass("col-9 description").attr("id", textArea + i).attr("type", "text");
        const newButton = $("<button>").addClass("col saveBtn d-flex justify-content-center align-items-center").attr("id", button + i).attr("type", "submit");
        const newSaveIcon = $("<i>").addClass("fas fa-save");
        let areaMod = "#" + textArea + i;
        $(newRow).append(newTimeBox).append(newDescription).append(newButton);
        $(newButton).append(newSaveIcon);
        $(".container").append(newRow);
        renderHour(newTimeBox,i);
        setTimeBlocks(areaMod, i);
    };
}

// Grabs any tasks loaded in local storage
function renderStoredTasks(){
    console.log();
}

// Storing the task in local storage
function storeTask(buttonId) {
    console.log()
    console.log(buttonId);
}

// Sets the hour for each time block
function renderHour(newTimeBox,i){
    if (i < 13){
        newTimeBox.text(i + ":00");
    } else {
        let tempTime = i - 12;
        newTimeBox.text(tempTime + ":00");
    };
}

// Checks the current time and sets a class for past, present or future
function setTimeBlocks(textArea, timeId) {
    if (currentTime == timeId) {
        $(textArea).addClass("present");
    } else if (currentTime > timeId) {
        $(textArea).addClass("past");
    } else {
        $(textArea).addClass("future");
    }
}

// Event listener for the save buttons
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let buttonId;
    if (event.target.id === "") {
        buttonId = event.target.parentElement.id;
    } else {
        buttonId = event.target.id;
    }
    storeTask(buttonId)
})



