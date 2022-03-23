<?php

use App\Http\Controllers\ActionsController;
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

    // AgentsController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('agents', [AgentsController::class, 'index'])
                ->name('agents.index');

    // ActionsController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('actions', [ActionsController::class, 'index'])
                ->name('actions.index');
    Route::get('actions/create', [ActionsController::class, 'create']);
    Route::post('actions/store', [ActionsController::class, 'store']);

    // ShippingController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('shipping', [ShippingController::class, 'index'])
                ->name('shippings.index');
    Route::get('shipping/create', [ShippingController::class, 'create']);
    Route::post('shipping/store', [ShippingController::class, 'store']);
    Route::get('shipping/edit/{id}', [ShippingController::class, 'edit']);
    Route::put('shipping/update/{id}', [ShippingController::class, 'update']);
    Route::put('shipping/return/{id}', [ShippingController::class, 'return']);
    Route::put('shipping/back/{id}', [ShippingController::class, 'back']);
    Route::get('shipping/return', [ShippingController::class, 'rindex']);

    // StatusController +++++++++++++++++++++++++++++++++++++++++++
    Route::get('status', [StatusController::class, 'status'])
                ->name('statuses.status');
    Route::get('status/create', [StatusController::class, 'create']);
    Route::post('status/store', [StatusController::class, 'store']); 
    Route::get('status/settings', [StatusController::class, 'index'])
                ->name('statuses.index');
});

Route::middleware('admin')->group(function (){
    Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);
});