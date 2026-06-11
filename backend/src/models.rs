//This is for the user login and all ------> 
use serde::{Deserialize,Serialize};

#[derive(Debug,Deserialize)]
pub struct UserRegister{
   pub name:String,
   pub email:String,
   pub password:String,
}

#[derive(Debug,Deserialize)]
pub struct UserLogin{
   pub  email:String,
   pub  password:String,
}

