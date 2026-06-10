use argon2::{
    Argon2, PasswordVerifier,
    password_hash::{PasswordHasher, SaltString, rand_core::OsRng},
};

pub fn hash_password(password: &str) -> Result<String, argon2::password_hash::Error> {
    let argon2 = Argon2::default();
    let salt = SaltString::generate(&mut OsRng);
    let hashed_password = argon2
        .hash_password(&password.as_bytes(), &salt)?
        .to_string();
    Ok(hashed_password)
}

pub fn verify_password(password: &str, hash: &str) -> bool {
    let parsed_hash = match argon2::PasswordHash::new(&hash) {
        Ok(h) => h,
        Err(_) => return false,
    };
    Argon2::default()
        .verify_password(&password.as_bytes(), &parsed_hash)
        .is_ok()
}
