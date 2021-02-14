# Build Your Portfolio (株式会社PPFパートナーズの技術試験)

このプロジェクトの目的は、データベースからポートフォリオを作成することです。
3つのパートに分かれています。
- API (Laravel)
- バックオフィス（Angular)
- 顧客インターフェース（Angular)

Laravelを使うのは初めてなので、もっと良い方法があるかもしれません。

第一バージョンですから、 最終的なポートフォリオデザインを見るには、私の他のプロジェクトの一つを訪問することができます：https://nifty-bhaskara-c1a7ba.netlify.app/  

## Required

  Docker, npm, composer

## Installation

  * API

    **Update library**
      `cd ./byp-api
      composer update
      ./vendor/bin/sail up
      `

    **Configure env and create db**
      create .env `cp .env.example .env` and modify "$$LOCAL_PATH$$" in this file  
      create database/database.sql `touch database/database.sqlite`  
      generate a database `php artisan migrate --seed`  
      generate a passport for login `php artisan passport:install`

  * Back Office
    
    `cd ./byp-bo`  
    `npm i`
    
  * Client
  
    `cd ./byp-client`  
    `npm i`


## Launch

  * API  
    `cd ./byp-api`  
    `./vendor/bin/sail up`    
    `php artisan serve`  
  
  
  * Back Office
    
    `cd ./byp-bo`  
    `npm i`  
    Access: http://localhost:4200/
    
  * Client
  
    `cd ./byp-client`  
    `npm i`  
    Access: http://localhost:4201/
  
  
