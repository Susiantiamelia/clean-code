// src/adapters/repositories/InMemoryActivityRepository.js
const Activity = require('../../entity/Activity');

class InMemoryActivityRepository {
    constructor() {
        this.activities = [];
    }

    createActivityEntity(activityData) {
        return new Activity(activityData);
    }

    save(activity) {
        const existingIndex = this.activities.findIndex(a => a.id === activity.id);
        if (existingIndex !== -1) {
            this.activities[existingIndex] = activity;
        } else {
            this.activities.push(activity);
        }
        return activity;
    }

    findById(id) {
        return this.activities.find(a => a.id === id);
    }

    delete(id) {
        const index = this.activities.findIndex(a => a.id === id);
        if (index !== -1) {
            this.activities.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = InMemoryActivityRepository;
