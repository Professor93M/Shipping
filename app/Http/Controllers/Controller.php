<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index(){
        return Inertia::render('Auth/Index', [
            'users' => User::where('pos', '!=', 'عميل')->get(),
            'columns' => [
                'id' => '#',
                'name' => 'الاسم الكامل',
                'pos' => 'المسمي',
                'email' => 'البريد الالكتروني',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }
}
