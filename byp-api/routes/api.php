<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PortfolioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);

$no_token = ['index', 'show'];

Route::apiResource('portfolio', PortfolioController::class)->only($no_token);
Route::apiResource('portfolio', PortfolioController::class)->except($no_token)->middleware('auth:api');
