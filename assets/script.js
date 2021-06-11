// Set current date using moment format.

currentDay = $("#currentDay")
     .text(moment().format("dddd, MMMM D, YYYY"));       
// 
function getCurrentClass(rowHour) {
    var currentTime = moment();
    var rowTime = moment(currentTime);
    
    rowTime.set({hour: rowHour});

    if (currentTime.isSame(rowTime, "hour")) {
        return "present";
    }
    else if (currentTime.isAfter(rowTime, "hour")) {
        return "past";
    }
    else {
        return "future";
    }
}
// For entry to see if it's 
function setColor(hour) {
    var row = $("#" + hour);
    var className = getCurrentClass(hour);
    row.attr("class", "col-9 time-block " + className);
}

// Allowed the scheduler to have different time blocks. 
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hours.length; i++) {
    setColor(hours[i]);
    loadBlock(hours[i]);
}

function saveBlock(id) {
    var blockContent = $("#" + id).val();
    localStorage.setItem("blockContent" + id, blockContent);
}

function loadBlock(id) {
    var blockContent = localStorage.getItem("blockContent" + id);
    $("#" + id).val(blockContent);
}
