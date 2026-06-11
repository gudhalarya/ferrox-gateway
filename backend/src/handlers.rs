use actix_web::{HttpResponse, Responder, get, post, web};
use sqlx::PgPool;

use crate::{errors::AppError, helpers::{hash_password, verify_password}, models::{UserLogin, UserRegister}};

//This is for the handlers --->
#[post("/register")]
pub async fn register(pool:web::Data<PgPool>,payload:web::Json<UserRegister>)->Result<impl Responder,AppError>{
    let password = hash_password(&payload.password)?;
    let result= sqlx::query!("INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id",payload.name,payload.email,password).fetch_one(pool.get_ref()).await?;

    Ok(HttpResponse::Created().json(serde_json::json!({"Message":"User created successfully","id":result.id})))
}


#[post("/login")]
pub async fn login(
    pool: web::Data<PgPool>,
    payload: web::Json<UserLogin>,
) -> Result<impl Responder, AppError> {

    let password_hash = match sqlx::query_scalar!(
        "SELECT password FROM users WHERE email = $1",
        payload.email
    )
    .fetch_one(pool.get_ref())
    .await
    {
        Ok(hash) => hash,

        Err(sqlx::Error::RowNotFound) => {
            return Err(AppError::InvalidCredentials);
        }

        Err(e) => {
            return Err(AppError::DatabaseError(e));
        }
    };

    let valid = verify_password(
        &payload.password,
        &password_hash,
    );

    if !valid {
        return Err(AppError::InvalidCredentials);
    }

    Ok(
        HttpResponse::Ok().json(
            serde_json::json!({
                "message": "Login successful"
            })
        )
    )
}