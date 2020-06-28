const mongoose = require('mongoose');
const TodoModel = mongoose.model('Todo');

class Todo {
    constructor(model) {
        this.model = model
    }
    
    find() {
        return this.model.find();
    }

    async findById(id) {
        try {
            const todo = await this.model.findById(id);
            return todo;
        } catch(err) {
            return err;
        }
    }

    create(obj, cb) {
        new this.model(obj).save(cb);
    }

    update(id, obj, cb) {
        this.model.findOneAndUpdate({_id: id}, { $set: obj }, { new: true }, cb);
    }

}

module.exports = new Todo(TodoModel);