window.onload = function () {
    generateCalendar();
};

function generateCalendar(){
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lasttDayOfMonth = new Date(year, month + 1, 0);
}