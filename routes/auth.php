<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;



Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');

    Route::get('invoice/index', [RegisteredUserController::class, 'index'])
                ->name('invoice.index');
    Route::get('invoice/create', [RegisteredUserController::class, 'create'])
                ->name('invoice.create');
    Route::post('invoice/store', [RegisteredUserController::class, 'store']);
    Route::get('invoice/edit/{id}', [RegisteredUserController::class, 'edit'])
                ->name('invoice.edit');
    Route::put('invoice/update/{id}', [RegisteredUserController::class, 'update']);
    Route::delete('invoice/destroy/{id}', [RegisteredUserController::class, 'destroy']);
});

Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');

Route::post('register', [RegisteredUserController::class, 'store']);