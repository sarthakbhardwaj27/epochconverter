function convertEpochToHumanReadable(epoch){
    const date = new Date(epoch*1000);
    return date.toString();
}

function helper(){
    const selection = window.getSelection().toString().trim();
    const epochValue = parseInt(selection,10);

    if(!isNaN(epochValue)){
        alert( `Human readable: ${convertEpochToHumanReadable(epochValue)}`);
    }else{
        alert("Selected text is not a valid epoch value.");
    }
}

document.addEventListener("mouseup", helper);
