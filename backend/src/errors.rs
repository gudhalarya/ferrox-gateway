use thiserror::Error;
use actix_web::HttpResponse;

#[derive(Debug, Error)]
pub enum AppError {
    #[error("Email already exists")]
    DuplicateEmail,

    #[error("Failed to process password")]
    HashingFailed,

    #[error("Invalid email or password")]
    InvalidCredentials,

    #[error("Database error: {0}")]
    DatabaseError(#[from] sqlx::Error),
}

impl actix_web::ResponseError for AppError {
    fn error_response(&self) -> HttpResponse {
        match self {
            AppError::DuplicateEmail => HttpResponse::Conflict().json(
                serde_json::json!({ "error": self.to_string() })
            ),
            AppError::InvalidCredentials => HttpResponse::Unauthorized().json(
                serde_json::json!({ "error": self.to_string() })
            ),
            AppError::HashingFailed |
            AppError::DatabaseError(_) => HttpResponse::InternalServerError().json(
                serde_json::json!({ "error": self.to_string() })
            ),
        }
    }
}