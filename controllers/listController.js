var mongoose = require('mongoose');
Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res){
    Task.find({}, function(err, task) {
        if(err)
            res.send(err);
        res.send(task);    
    });
};

exports.create_a_task = function(req, res){
    var newTask = new Task(req.body);
    newTask.save(function(err, task){
        if(err)
            res.send(err);
        res.json(task);    
    });
};

exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task){
        if(err)
            res.send(err);
        res.json(task);    
    });
};

exports.update_a_task = function(req, res){
    Task.findOneAndUpdate({_id: req.params.taskid}, req.body, {new: true}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);    
    });
};

exports.delete_a_task = function(req, res){
    Task.remove({_id: req.params.taskId}, function(err,task){
        if(err)
            res.send(err);
        res.json({message: 'task deleted'});    
    });
};

