const Task = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('task/create');
    }
};