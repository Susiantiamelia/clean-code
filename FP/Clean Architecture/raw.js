// penjadwalan.js
const activities = [];

function addActivity(title, date) {
    const activity = { id: Date.now(), title, date, completed: false };
    activities.push(activity);
    console.log(`Activity "${title}" added.`);
    sendReminderEmail(activity);
}

function editActivity(id, newTitle, newDate) {
    const activity = activities.find(a => a.id === id);
    if (activity) {
        activity.title = newTitle || activity.title;
        activity.date = newDate || activity.date;
        console.log(`Activity "${id}" updated.`);
    } else {
        console.log('Activity not found.');
    }
}

function deleteActivity(id) {
    const index = activities.findIndex(a => a.id === id);
    if (index !== -1) {
        activities.splice(index, 1);
        console.log(`Activity "${id}" deleted.`);
    } else {
        console.log('Activity not found.');
    }
}

function markAsCompleted(id) {
    const activity = activities.find(a => a.id === id);
    if (activity) {
        activity.completed = true;
        console.log(`Activity "${id}" marked as completed.`);
    } else {
        console.log('Activity not found.');
    }
}

function sendReminderEmail(activity) {
    console.log(`Sending reminder for activity: ${activity.title}`);
}

// Example usage
addActivity('Meeting', '2024-09-05');
editActivity(1, 'Updated Meeting', '2024-09-06');
deleteActivity(1);
markAsCompleted(1);
