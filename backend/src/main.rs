use std::env;
mod handlers;
mod helpers;
use actix_web::{App, HttpServer, web};
use sqlx::postgres::PgPoolOptions;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenvy::dotenv().ok();
    let db_url =
        env::var("DATABASE_URL").expect("Could not find the database url in the env file ");

    let pool = PgPoolOptions::new()
        .max_connections(10)
        .min_connections(2)
        .acquire_timeout(std::time::Duration::from_secs(5))
        .connect(&db_url)
        .await
        .expect("Could noy connect to the database");

    HttpServer::new(move || App::new().app_data(web::Data::new(pool.clone())))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
