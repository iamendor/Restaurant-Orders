CREATE USER IF NOT EXISTS 'analytics'@'%' IDENTIFIED WITH caching_sha2_password BY '';
CREATE USER IF NOT EXISTS 'main'@'%' IDENTIFIED WITH caching_sha2_password BY '';
CREATE USER IF NOT EXISTS 'static'@'%' IDENTIFIED WITH caching_sha2_password BY '';

-- Create databases
CREATE DATABASE IF NOT EXISTS analytics;
CREATE DATABASE IF NOT EXISTS main;
CREATE DATABASE IF NOT EXISTS static;
CREATE DATABASE IF NOT EXISTS analytics_shadow;
CREATE DATABASE IF NOT EXISTS shadow;
CREATE DATABASE IF NOT EXISTS static_shadow;
-- Grant users to database
GRANT ALL PRIVILEGES ON analytics.* TO 'analytics'@'%';
GRANT ALL PRIVILEGES ON analytics_shadow.* TO 'analytics'@'%';
GRANT ALL PRIVILEGES ON main.* TO 'main'@'%';
GRANT ALL PRIVILEGES ON shadow.* TO 'main'@'%';
GRANT ALL PRIVILEGES ON static.* TO 'static'@'%';
GRANT ALL PRIVILEGES ON static_shadow.* TO 'static'@'%';

