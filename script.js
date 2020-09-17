


function renderTimeBlocks() {
    for (let i = 1; i < 9; i++) {
        let button = "button";
        let textArea = "textArea";
        let newRow = $("<form>").addClass("row");
        let newTimeBox = $("<label>").addClass("col-2 hour time-block").attr("for", textArea + i);
        let newDescription = $("<textarea>").addClass("col-9 description past").attr("id", textArea + i).attr("type", "text");
        let newButton = $("<button>").addClass("col saveBtn d-flex justify-content-center align-items-center").attr("id", button + i).attr("type", "submit");
        let newSaveIcon = $("<i>").addClass("fas fa-save");
        $(newRow).append(newTimeBox).append(newDescription).append(newButton);
        $(newButton).append(newSaveIcon);
        $(".container").append(newRow);
    };
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        let buttonId;
        if (event.target.id === "") {
            buttonId = event.target.parentElement.id;
        } else {
            buttonId = event.target.id;
        }
        storeTask(buttonId)
    })
}

function storeTask(buttonId) {

    console.log(buttonId);
}



renderTimeBlocks();