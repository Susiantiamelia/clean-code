// src/usecase/DeleteActivity.js
class DeleteActivity {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }

    execute(id) {
        const activity = this.activityRepository.findById(id);
        if (!activity) throw new Error('Activity not found');

        return this.activityRepository.delete(id);
    }
}

module.exports = DeleteActivity;
