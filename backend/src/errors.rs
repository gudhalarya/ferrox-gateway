//This is for the custom errors ->
use thiserror::Error;
#[derive(Debug,Error)]
pub enum AppError{
    #[error("Database error : {0}")]
    DatabaseError(#[from]sqlx::Error),

    #[error("Invalid credentials")]
    InvalidCredentials,

    #[error("Hashing failed :{0}")]
    HashingError(#[from]argon2::password_hash::Error),

    #[error("Upstream service not found ")]
    UpstreamServiceNotFound,

    #[error("No match error found")]
    NoMatchError,
}