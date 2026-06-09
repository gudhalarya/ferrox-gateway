use actix_web::{post, web, HttpResponse};
use sqlx::PgPool;
use serde::Deserialize;
use crate::{errors::AppError, models, helpers};

// ── Request Structs ───────────────────────────────────────────────────────────

#[derive(Deserialize)]
pub struct UserRegister {
    pub name:     String,
    pub email:    String,
    pub password: String,
}

#[derive(Deserialize)]
pub struct UserLogin {
    pub email:    String,
    pub password: String,
}

// ── Handlers ──────────────────────────────────────────────────────────────────

#[post("/signup")]
pub async fn registration(
    pool:    web::Data<PgPool>,
    payload: web::Json<UserRegister>,
) -> Result<HttpResponse, AppError> {

    let password_hash = helpers::hash_password(&payload.password)
        .map_err(|_| AppError::HashingFailed)?;

    let user = models::create_user(
        pool.get_ref(),
        &payload.name,
        &payload.email,
        &password_hash,
    ).await?;

    Ok(HttpResponse::Created().json(serde_json::json!({
        "message": "User registered successfully",
        "user_id": user.id.to_string()
    })))
}

#[post("/login")]
pub async fn login(
    pool:    web::Data<PgPool>,
    payload: web::Json<UserLogin>,
) -> Result<HttpResponse, AppError> {

    // 1. Find user by email
    let user = models::find_user_by_email(
        pool.get_ref(),
        &payload.email,
    ).await?;

    // 2. Verify password
    if !helpers::verify_password(&payload.password, &user.password) {
        return Err(AppError::InvalidCredentials);
    }

    // 3. Return success (JWT goes here next)
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": "Login successful",
        "user_id": user.id.to_string()
    })))
}