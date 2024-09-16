// src/usecase/MarkActivityAsCompleted.js
class MarkActivityAsCompleted {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }

    execute(id) {
        const activity = this.activityRepository.findById(id);
        if (!activity) throw new Error('Activity not found');

        activity.markAsCompleted();
        return this.activityRepository.save(activity);
    }
}

module.exports = MarkActivityAsCompleted;
