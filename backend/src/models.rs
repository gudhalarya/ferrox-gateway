use sqlx::PgPool;
use serde::Serialize;
use crate::errors::AppError;

// ── Structs ───────────────────────────────────────────────────────────────────

#[derive(Serialize)]
pub struct CreatedUser {
    pub id: uuid::Uuid,
}

pub struct UserRow {
    pub id:       uuid::Uuid,
    pub name:     String,
    pub email:    String,
    pub password: String,
}

// ── DB Functions ──────────────────────────────────────────────────────────────

pub async fn create_user(
    pool: &PgPool,
    name: &str,
    email: &str,
    password_hash: &str,
) -> Result<CreatedUser, AppError> {

    let row = sqlx::query!(
        "INSERT INTO users (name, email, password)
         VALUES ($1, $2, $3)
         RETURNING id",
        name,
        email,
        password_hash
    )
    .fetch_one(pool)
    .await
    .map_err(|e| {
        // check specifically for duplicate email constraint
        if let sqlx::Error::Database(ref db_err) = e {
            if db_err.constraint() == Some("users_email_key") {
                return AppError::DuplicateEmail;
            }
        }
        AppError::DatabaseError(e)
    })?;

    Ok(CreatedUser { id: row.id })
}

pub async fn find_user_by_email(
    pool: &PgPool,
    email: &str,
) -> Result<UserRow, AppError> {

    sqlx::query_as!(
        UserRow,
        "SELECT id, name, email, password
         FROM users
         WHERE email = $1",
        email
    )
    .fetch_one(pool)
    .await
    .map_err(|_| AppError::InvalidCredentials)
}