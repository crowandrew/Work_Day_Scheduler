


function renderTimeBlocks() {
    for (let i = 0; i < 9; i++) {
        let newRow = $("<form>").addClass("row");
        let newTimeBox = $("<label>").addClass("col-2 hour time-block").attr("for", i);
        let newDescription = $("<textarea>").addClass("col-9 description past").attr("id", i);
        let newButton = $("<button>").addClass("col saveBtn d-flex justify-content-center align-items-center");
        let newSaveIcon = $("<i>").addClass("fas fa-save");
        $(newRow).append(newTimeBox).append(newDescription).append(newButton);
        $(newButton).append(newSaveIcon);
        $(".container").append(newRow);
    };
}

renderTimeBlocks();