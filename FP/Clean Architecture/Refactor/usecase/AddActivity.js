// src/usecase/AddActivity.js
class AddActivity {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }

    execute(activityData) {
        const activity = new this.activityRepository.createActivityEntity(activityData);
        return this.activityRepository.save(activity);
    }
}

module.exports = AddActivity;
