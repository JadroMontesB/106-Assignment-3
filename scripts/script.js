let isImportant = false;
var isAsideVisible = true;

function toggleImportant(){

    let icon = $(".iImportant")

    if(isImportant)
    {
      icon.removeClass("fas").addClass("far");
      isImportant = false;

    }
    else
    {
        icon.removeClass("far").addClass("fas");
        isImportant = true;
    }


}

function toggleDetails(){

    let aside = $("aside");
    
    if(isAsideVisible)
    {
        aside.hide();
        isAsideVisible = false;
    }
    else
    {
        aside.show();
        isAsideVisible = true;
    }

}

function saveTask(){

    let tittle = $("#txtTitle").val();
    let dueDate = $("#txtdueDate").val();
    let location = $("#txtLocation").val();
    let description = $("#txtDes").val();
    let participants = $("#txtPar").val();
    let color = $("#txtColor").val();

    let theTask = new Task(isImportant,tittle, dueDate, location, description, participants, color );

    console.log(theTask);


    displayTask(theTask);
    ClearForm();

}

function ClearForm(){

    $("#txtTitle").val("");
    $("#txtdueDate").val("");
    $("#txtLocation").val("");
    $("#txtDes").val("");
    $("#txtPar").val("");
    $("#txtColor").val("");

}

function displayTask(task){

    let syntax = `

    <div class="task">
    
        <div class="task-title">

            <h5 class = h5-title> Tittle: ${task.tittle}</h5>
            <p> Description: ${task.description}</p>
            <p> Participants: ${task.participants}</p>
    
        </div>

        <div class="task-middle">

            <h5 class="h5-title"> Location: ${task.location}</h5>
            <p> Date: ${task.dueDate}</p>
            <p> Color: ${task.color}</p>

            
        </div> 
        
        
    </div>


    `;

    $(".task-container").append(syntax);
        
}



function init(){

    console.log("Calendar");


    $("#btnSave").click(saveTask);
    $(".iImportant").click(toggleImportant);
    $("#btnToggleDetails").click(toggleDetails);

}

window.onload = init;