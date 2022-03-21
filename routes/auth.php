<?php

use App\Http\Controllers\AgentsController;
use App\Http\Controllers\InvoiceController;
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

    // InvoiceController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('invoice/index', [InvoiceController::class, 'index'])
                ->name('invoice.index');
    Route::get('invoice/create', [InoviceController::class, 'create'])
                ->name('invoice.create');
    Route::post('invoice/store', [InoviceController::class, 'store']);
    Route::get('invoice/edit/{id}', [InoviceController::class, 'edit'])
                ->name('invoice.edit');
    Route::put('invoice/update/{id}', [InoviceController::class, 'update']);
    Route::delete('invoice/destroy/{id}', [InoviceController::class, 'destroy']);

    // AgentsController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('agents/index', [AgentsController::class, 'index'])
                ->name('agents.index');
    Route::get('agents/create', [AgentsController::class, 'create']);
    Route::post('agents/store', [AgentsController::class, 'store']);
    Route::get('agents/edit/{id}', [AgentsController::class, 'edit']);
    Route::put('agents/update/{id}', [AgentsController::class, 'update']);
    Route::delete('agents/destroy/{id}', [AgentsController::class, 'destroy']);

    // ShippingController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('shipping/index', [ShippingController::class, 'index'])
                ->name('shipping.index');
    Route::get('shipping/create', [ShippingController::class, 'create']);
    Route::post('shipping/store', [ShippingController::class, 'store']);
    Route::get('shipping/edit/{id}', [ShippingController::class, 'edit']);
    Route::put('shipping/update/{id}', [ShippingController::class, 'update']);
    Route::delete('shipping/destroy/{id}', [ShippingController::class, 'destroy']);

    // StatusController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('status/index', [StatusController::class, 'index'])
                ->name('status.index');
    Route::get('status/create', [StatusController::class, 'create']);
    Route::post('status/store', [StatusController::class, 'store']);
    Route::get('status/edit/{id}', [StatusController::class, 'edit']);
    Route::put('status/update/{id}', [StatusController::class, 'update']);
    Route::delete('status/destroy/{id}', [StatusController::class, 'destroy']); 
});

Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');

Route::post('register', [RegisteredUserController::class, 'store']);