use actix_web::web;
//This is for the user login and all ------> 
use serde::{Deserialize};
use sqlx::{FromRow, PgPool};

use crate::errors::AppError;

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

//implemeting the proxy server -------> 

#[derive(Debug,FromRow)]
pub struct Route{
    id:uuid::Uuid,
    name:String,
    path_prefix:String,
    upstream_url:String,
    auth_required:bool,
    rate_limit:i32,
    timeout_ms:i32,
    is_active:bool,
}


//This is for finding the matching route here ------> 
pub async fn find_matching_route(pool:web::Data<PgPool>,path:&str)->Result<Route,AppError>{
    sqlx::query_as!(Route,r#"SELECT id,name,path_prefix,upstream_url, auth_required, rate_limit, timeout_ms, is_active
    FROM routes
    WHERE $1 LIKE path_prefix || '%'
    AND is_active = true
    ORDER BY LENGTH(path_prefix) DESC
    LIMIT 1"#,path).fetch_one(pool).await.map_err(|_|AppError::NoMatchError)
}


