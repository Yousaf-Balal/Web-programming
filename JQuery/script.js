$(document).ready(function () {
    // Add a new task
    $("#add-task").click(function () {
        var taskText = $("#new-task").val();

        if (taskText) {
            var listItem = $("<li>").text(taskText);
            var deleteButton = $("<button>").addClass("delete-task").text("Delete");

            listItem.append(deleteButton);
            $("#task-list").append(listItem);
            $("#new-task").val(""); // Clear the input field
        }
    });

    // Delete a task
    $("#task-list").on("click", ".delete-task", function () {
        $(this).parent().remove();
    });
});