<?php

use App\Http\Controllers\AgentsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\InoviceController;
use App\Http\Controllers\ShippingController;
use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;



Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');

    Route::get('/users', [Controller::class, 'index'])
                ->name('users.index');

    // InvoiceController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('invoice', [InoviceController::class, 'index'])
                ->name('invoice.index');
    Route::get('invoice/create', [InoviceController::class, 'create'])
                ->name('invoice.create');
    Route::post('invoice/store', [InoviceController::class, 'store']);
    Route::get('invoice/show/{id}', [InoviceController::class, 'show'])
                ->name('invoice.show');
    // Route::put('invoice/update/{id}', [InoviceController::class, 'update']);
    Route::delete('invoice/destroy/{id}', [InoviceController::class, 'destroy']);

    // AgentsController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('agents', [AgentsController::class, 'index'])
                ->name('agents.index');
    Route::get('agents/create', [AgentsController::class, 'create']);
    Route::post('agents/store', [AgentsController::class, 'store']);
    Route::get('agents/edit/{id}', [AgentsController::class, 'edit']);
    Route::put('agents/update/{id}', [AgentsController::class, 'update']);
    Route::delete('agents/destroy/{id}', [AgentsController::class, 'destroy']);

    // ShippingController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('shipping', [ShippingController::class, 'index'])
                ->name('shippings.index');
    Route::get('shipping/create', [ShippingController::class, 'create']);
    Route::post('shipping/store', [ShippingController::class, 'store']);
    Route::get('shipping/edit/{id}', [ShippingController::class, 'edit']);
    Route::put('shipping/update/{id}', [ShippingController::class, 'update']);
    Route::delete('shipping/destroy/{id}', [ShippingController::class, 'destroy']);

    // StatusController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('status');
    Route::get('status/create', [StatusController::class, 'create']);
    Route::post('status/store', [StatusController::class, 'store']);
    Route::get('status/edit/{id}', [StatusController::class, 'edit']);
    Route::put('status/update/{id}', [StatusController::class, 'update']);
    Route::delete('status/destroy/{id}', [StatusController::class, 'destroy']); 
    Route::get('status/settings', [StatusController::class, 'index'])
                ->name('status.index');
});

Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');

Route::post('register', [RegisteredUserController::class, 'store']);