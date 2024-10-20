document.getElementById('submit-datetime').addEventListener('click', function(event) {
    const useDate = document.getElementById('use-date').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (!useDate || !startTime || !endTime) {
        alert("Please fill in all date and time fields.");
    } else {
        alert(`You have selected the following: \nDate: ${useDate}\nFrom: ${startTime}\nTo: ${endTime}`);
        
    }
});
