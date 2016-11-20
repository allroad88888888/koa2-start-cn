//var  mongodb = require('mongodb');
import mongodb from "mongodb";
import {database} from "./../server.config.json";
const  server  = new mongodb.Server(database.ip, database.port, {auto_reconnect:database["auto_reconnect"]});
const  db = new mongodb.Db('temp', server, {safe:true});




class DB {
	constructor(databaseName="temp"){
		console.log("db  初始化");
		db.open(function(err, db){
			console.log("----------------------数据库  开始----------------")
			if(err){
				console.log(err,db);
			}			
			console.log("----------------------数据库  结束----------------")
		});
		this.createCollection = this.createCollection.bind(this);
		this.add = this.add.bind(this);
		this.updata = this.updata.bind(this);
		this.remove = this.remove.bind(this);
		this.find = this.find.bind(this);
		this.databaseName = databaseName;
	}
	createCollection(callBack){
		var databaseName = this.databaseName;
        var p = new Promise(function(resolve, reject) {
            //做一些异步操作
            db.createCollection(databaseName, {
                safe: true
            }, function(err, collection) {
                if (err) {
                    console.log("链接数据库 报错", err);
                } else {
                	resolve(collection);
                	//console.log("是最后结束的吗？")
                    //this.collection = collection;
                    //callBack && callBack(collection);
                }
            });
        });
		return p;
	}
	add(data = 	{id:'22',title:'gggg',number:333,"sdfds":{"A":"a"}}){
		console.log("--------------------新增开始----------",data);
		return this.createCollection().then((collection)=>{
				return new Promise(function (resolve, reject) {
					collection.insert(data,{safe:true},function(err, result){
			            console.log("数据 新增结果为:",result);
			            resolve(result);
			            console.log("--------------------新增结束----------");
			        }); 
				})
		})
		

	}
	updata(data={title:'hello'},data1={$set:{number:3}}){
		console.log("--------------------更新开始----------",data,data1);
		return this.createCollection().then((collection)=>{
				return new Promise(function (resolve, reject) {
					collection.update(data,data1,{safe:true},function(err, result){
			            console.log("数据 更新结果为:",result);
			            resolve(result);
			            console.log("--------------------更新结束----------");
			        }); 
				})
		});
	}
	remove(data={title:'hello'}){
		console.log("--------------------删除开始----------",data);
		return this.createCollection().then((collection)=>{
				return new Promise(function (resolve, reject) {
					collection.remove(data,{safe:true},function(err, result){
			            console.log("数据 删除结果为:",result);
			            resolve(result);
			            console.log("--------------------删除结束----------");
			        }); 
				})
		});
	}
	find(data={id:"1"}){
		console.log("--------------------查询开始----------");
		return this.createCollection().then((collection)=>{
				return new Promise(function (resolve, reject) {
					collection.find(data).toArray(function(err, result) {
					//collection.find({},{safe:true},function(err, result){
						console.log("error",err)
						if(err){
							console.log("数据 查询结果异常为:",err);
						}else{
							//console.log("数据 查询结果为:",result);
							console.dir(result);
						}
			            
			            resolve(result);
			            console.log("--------------------查询结束----------");
			        }); 
				})
		});
	}
	getCollection(todo="find",data,data1){
		console.log("--------------------"+todo+"开始----------");
		return this.createCollection();/*.then((collection)=>{
				return new Promise(function (resolve, reject) {
					collection[todo](data,{safe:true},function(err, result){
			            console.log(todo+"结果为:",result);
			            resolve(result);
			            console.log("--------------------查询结束----------");
			        }); 
				})
		});*/
	}
	close(){

	}
}


module.exports = {DB};