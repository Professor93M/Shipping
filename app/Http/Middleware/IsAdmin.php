<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class IsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        $users = User::first();
        if ((Auth::user() &&  (Auth::user()->pos == 'مدير' || Auth::user()->pos == 'موظف')) || $users == null) {
            return $next($request);
        }
        return Redirect::route('login');
    }
}
