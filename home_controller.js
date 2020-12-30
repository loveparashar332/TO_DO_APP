const Info=require('../models/todo');
module.exports.home=function(req,res){
    Info.find({},function(err,todo){
        if(err){
            console.log('error in fetching contacts');
            return;
        }
        return res.render('home',{
            title:'To-do list',
            todo_list:todo
        });
    });
}
module.exports.create=function(req,res){
    Info.create({
        name:req.body.name,
        options:req.body.options,
        dates:req.body.dates
    },function(err,newInfo){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('***********',newInfo);
        res.redirect('back');
    });
}
module.exports.delete=function (req,res){
        // to get the query from url
       //now after using databases to get id from query in url
       let id=req.query.id;
        // find the contact in the database using id and delete
        Info.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting an object');
            }
            return res.redirect('back');
        });   
}