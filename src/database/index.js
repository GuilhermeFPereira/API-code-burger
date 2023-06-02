import  Sequelize  from "sequelize";
import mongoose from "mongoose";


import Product from "../app/models/Product";
import Category from "../app/models/Category";
import User from '../app/models/User'

import configDatabase from '../config/database'



const models = [ User, Product, Category ]

class Database {
    constructor(){
        this.init()
        this.mongo()
        
    }

    init(){
       this.connection = new Sequelize('postgresql://postgres:vrB9DgYidkXHwmjj4Ky6@containers-us-west-107.railway.app:6847/railway') 
       models.map( (model) => model.init(this.connection))
       .map( (model) => model.associate && model.associate(this.connection.models))    
    }

    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:2C0pOWue8IAzpzI5Yrrw@containers-us-west-134.railway.app:7064',
            {
                useNewUrlParser:true,
                useUnifiedTopology: true,
            }
        
        )
    }
}

export default new Database()