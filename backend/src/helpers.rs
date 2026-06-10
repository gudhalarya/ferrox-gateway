use argon2::{Argon2, PasswordHasher, PasswordVerifier, password_hash::{SaltString, rand_core::OsRng}};

use crate::errors::AppError;

pub fn hash_password(password:&str)->Result<String,AppError>{
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let hashed_password = argon2.hash_password(&password.as_bytes(), &salt)?.to_string();
    Ok(hashed_password)
}


pub fn verify_password(password:&str,hash:&str)->bool{
    let parsed_hash = match argon2::PasswordHash::new(&hash){
        Ok(hash)=>hash,
        Err(_)=>return false
    };
    argon2::Argon2::default().verify_password(&password.as_bytes(), &parsed_hash).is_ok()
}