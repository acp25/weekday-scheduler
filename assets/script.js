  
  
currentDay = $("#currentDay")
.text(moment().format("dddd, MMMM D, YYYY"));
// moment time future tro present current time
// if statement  to convey  which color with the current time
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

function setColor(hour) {
var row = $("#" + hour);
var className = getCurrentClass(hour);
row.attr("class", "col-9 time-block " + className);
}
// for loop to have a update on the time blocks
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hours.length; i++) {
setColor(hours[i]);
loadBlock(hours[i]);
}
// Local storge with the information written in
function saveBlock(id) {
var blockContent = $("#" + id).val();
localStorage.setItem("blockContent" + id, blockContent);
}

function loadBlock(id) {
var blockContent = localStorage.getItem("blockContent" + id);
$("#" + id).val(blockContent);
}