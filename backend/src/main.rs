mod errors;
mod helpers;
mod models;
mod handlers;

use tracing_subscriber::EnvFilter;
use actix_web::{web, App, HttpServer};
use sqlx::postgres::PgPoolOptions;
use dotenv::dotenv;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    //This is the code for the logger -----------> 
   tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env()
            .add_directive("ferrox=debug".parse().unwrap())
            .add_directive("actix_web=info".parse().unwrap()))
        .with_target(false)   // cleaner output
        .init();

    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("Server running at http://localhost:8080");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .wrap(tracing_actix_web::TracingLogger::default())
            .service(handlers::registration)
            .service(handlers::login)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}