// src/entity/Activity.js
class Activity {
    constructor({ id, title, date, completed = false }) {
        if (!title) throw new Error('Title is required');
        if (!date) throw new Error('Date is required');

        this.id = id || Date.now();
        this.title = title;
        this.date = new Date(date);
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

module.exports = Activity;
