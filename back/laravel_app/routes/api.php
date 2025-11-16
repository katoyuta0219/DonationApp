<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DonationsController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SignUpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/signup', [SignUpController::class, 'sign_up']);
Route::post('/login', [LoginController::class, 'index']);

Route::get('/donations', [DonationsController::class, 'index']);

Route::get('/organizations/{id}', [OrganizationController::class, 'show']);

Route::get('/category', [CategoryController::class, 'index']);

Route::get('/account/profile', [AccountController::class, 'profile'])->middleware('auth:sanctum');