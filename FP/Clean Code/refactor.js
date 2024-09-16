// penjadwalan.js
class Activity {
    constructor(title, date) {
        if (!title) throw new Error('Title is required');
        if (!date) throw new Error('Date is required');

        this.id = Date.now();
        this.title = title;
        this.date = new Date(date);
        this.completed = false;
    }
}

class ActivityManager {
    constructor() {
        this.activities = [];
    }

    addActivity(title, date) {
        const activity = new Activity(title, date);
        this.activities.push(activity);
        this._log(`Activity "${activity.title}" added.`);
        this._sendReminderEmail(activity);
    }

    editActivity(id, newTitle, newDate) {
        const activity = this._findActivityById(id);
        if (!activity) return this._log('Activity not found.');

        activity.title = newTitle || activity.title;
        activity.date = newDate ? new Date(newDate) : activity.date;
        this._log(`Activity "${activity.id}" updated.`);
    }

    deleteActivity(id) {
        const index = this.activities.findIndex(activity => activity.id === id);
        if (index === -1) return this._log('Activity not found.');

        const [deletedActivity] = this.activities.splice(index, 1);
        this._log(`Activity "${deletedActivity.title}" deleted.`);
    }

    markAsCompleted(id) {
        const activity = this._findActivityById(id);
        if (!activity) return this._log('Activity not found.');

        activity.completed = true;
        this._log(`Activity "${activity.title}" marked as completed.`);
    }

    _findActivityById(id) {
        return this.activities.find(activity => activity.id === id);
    }

    _sendReminderEmail(activity) {
        // Simulasi pengiriman email pengingat
        this._log(`Reminder sent for activity: "${activity.title}"`);
    }

    _log(message) {
        console.log(message);
    }
}

// Example usage:
const manager = new ActivityManager();

manager.addActivity('Meeting', '2024-09-05');
manager.editActivity(1, 'Updated Meeting', '2024-09-06');
manager.deleteActivity(1);
manager.markAsCompleted(1);
