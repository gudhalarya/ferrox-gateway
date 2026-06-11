use std::env;

use actix_web::{App, HttpServer, middleware::Logger, web};
use sqlx::postgres::PgPoolOptions;
use tracing::info;
use crate::handlers::{login,register};

mod errors;
mod helpers;
mod models;
mod handlers;

#[actix_web::main]
async fn main ()->std::io::Result<()>{

    dotenv::dotenv().ok();

    tracing_subscriber::fmt().init();

    info!("Server is started");

    let db_url = env::var("DATABASE_URL").expect("Could not find the database url in the env file ");
    let pool = PgPoolOptions::new()
    .max_connections(20)
    .min_connections(2)
    .acquire_timeout(std::time::Duration::from_secs(5))
    .connect_lazy(&db_url)
    .expect("Could not create the pool");

    HttpServer::new(move||{
        App::new()
        .wrap(Logger::default())
        .app_data(web::Data::new(pool.clone()))
        .service(login)
        .service(register)
    })
    .bind(("127.0.0.1",8080))?
    .run()
    .await
}