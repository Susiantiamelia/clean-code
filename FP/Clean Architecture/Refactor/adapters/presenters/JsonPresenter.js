// src/adapters/presenters/JsonPresenter.js
class JsonPresenter {
    static present(res, data) {
        res.json(data);
    }
}

module.exports = JsonPresenter;
