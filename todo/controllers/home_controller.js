const User = require('../model/todoData');


module.exports.home = (req, res) =>{
    User.find({}, (err, user) => {
        if(err){
            console.log("Error in fetching todo list from database");
            return;
        }
        console.log(user);
        return res.render("home", {
        title: "todo app",
        todo_list: user
    });
});
}
   

module.exports.create = (req, res) => {
    User.create({
        description: req.body.description,
        category:req.body.category,
        dueDate: req.body.dueDate
    },  (err, user) => {
    if(err){
     console.log("error in creating todo list");
     return;
     }
     console.log('*****', user);
     return res.redirect('back');
    });
}

module.exports.delete = (req, res) => {
if(req.body.listItem == undefined){
    return res.redirect('back');
    }
    if(typeof(req.body.listItem) === 'string'){
    let id = req.body.listItem;
    User.findByIdAndDelete(id , function(err){
    if(err){
    console.log('error in deleting list item' , err);
    return;
    }
    });
    }
    if(typeof(req.body.listItem) === 'object' ){
    for(i of req.body.listItem){
    let id = i;
    User.findByIdAndDelete(id , function(err){
    if(err){
    console.log('error in deleting list item' , err);
    return;
    }
    });
    }
    }
    return res.redirect('back');
    }
    
