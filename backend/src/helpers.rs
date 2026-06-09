//This is the helper functions here ------> 
use argon2::{Argon2, PasswordHasher, PasswordVerifier, password_hash::{SaltString, rand_core::OsRng}};

//This is the fn for hashing the fn used the argn2 here -----> 
pub fn hash_password(password:&str)->Result<String,argon2::password_hash::Error>{
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let password_hash = argon2.hash_password(&password.as_bytes(), &salt)?.to_string();
    Ok(password_hash)
}

//This is the fn for verifying the password here -------> 
pub fn verify_password(password:&str,password_hash:&str)->bool{
    let parsed_hash =  match argon2::PasswordHash::new(password_hash){
        Ok(h)=>h,
        Err(_)=>return false,
    };
    let argon2 = Argon2::default();
    argon2.verify_password(password.as_bytes(), &parsed_hash).is_ok()
}