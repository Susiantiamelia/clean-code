// src/adapters/controllers/ActivityController.js
const AddActivity = require('../../usecase/AddActivity');
const EditActivity = require('../../usecase/EditActivity');
const DeleteActivity = require('../../usecase/DeleteActivity');
const MarkActivityAsCompleted = require('../../usecase/MarkActivityAsCompleted');
const JsonPresenter = require('../presenters/JsonPresenter');
const InMemoryActivityRepository = require('../repositories/InMemoryActivityRepository');

const activityRepository = new InMemoryActivityRepository();

class ActivityController {
    static add(req, res) {
        const addActivity = new AddActivity(activityRepository);
        const result = addActivity.execute(req.body);
        JsonPresenter.present(res, result);
    }

    static edit(req, res) {
        const editActivity = new EditActivity(activityRepository);
        const result = editActivity.execute(req.params.id, req.body);
        JsonPresenter.present(res, result);
    }

    static delete(req, res) {
        const deleteActivity = new DeleteActivity(activityRepository);
        const result = deleteActivity.execute(req.params.id);
        JsonPresenter.present(res, { success: result });
    }

    static complete(req, res) {
        const markActivityAsCompleted = new MarkActivityAsCompleted(activityRepository);
        const result = markActivityAsCompleted.execute(req.params.id);
        JsonPresenter.present(res, result);
    }
}

module.exports = ActivityController;
