var express=require('express')
var app=express()
var bodyParser=require('body-parser');
app.use(bodyParser.json());// support json encoded body
app.use(bodyParser.urlencoded({extended:true}));// support encoded bodies
app.use(function (req,res,next)){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Methods","GET,POST,DELETE,PUT");
    res.header("Access-control-Allow-Header","Origin,x-requested with,content-type,Accept");
    next();

});
let cricketer=[];
/** Get the player list  */
app.get('/api/getPlayerType',function(req,res)){
    res.json([{
        id:1,
        type:'Batsman'
    },
    {
        id:1,
        type:'Bowler'
    },
    {
        id:1,
        type:'WeeketKeeper'
    }
    }]);

})
/** Post the data for Cricket */
app.post('/api/addPlayers',function(req,res){
    let cricketerObject={
        firstName:req.body.cricketerDetail.firstName,
        lastName:req.body.cricketerDetail.lastName,
        favshot:req.body.cricketerDetail.favshot,
        playerType:req.body.cricketerDetail.playerType,
        yearlyIncome:req.body.cricketerDetail.yearlyIncome,
        dob:req.body.cricketerDetail.dob,
    }
    cricketer.unshift(cricketerObject);
    res.json(`${cricketer.length} Successfully added`);

})
/**Get the player list */
app.get('/api/getPlayer',function(req,res){
    res.json(cricketer)
})
/** Delete the data */
app.delete('/api/deletePlayer/:id',function(req,res){
    cricketer.splice(req.params.id,1);
    res.json(`${req.params.id} Deleted successfully`);

})
app.listen(4200,function(){
    console.log('App listening on port 4200!')
})