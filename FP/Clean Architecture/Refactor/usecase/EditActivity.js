// src/usecase/EditActivity.js
class EditActivity {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }

    execute(id, updatedData) {
        const activity = this.activityRepository.findById(id);
        if (!activity) throw new Error('Activity not found');

        activity.title = updatedData.title || activity.title;
        activity.date = updatedData.date ? new Date(updatedData.date) : activity.date;

        return this.activityRepository.save(activity);
    }
}

module.exports = EditActivity;
