<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => ['required', 'confirmed'],
            'name' => 'required',
        ],[
            'email.required' => 'يجب ادخال البريد الالكتروني',
            'email.email' => 'البريد الالكتروني المدخل غير صحيح',
            'email.unique' => 'البريد الالكتروني مسجل من قبل',
            'password.required' => 'يجب ادخال كلمة المرور',
            'password.confirmed' => 'كلمة المرور غير متطابقة',
            'name.required' => 'يجب ادخال الاسم الاول',
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'name' => $request->name,
            'note' => $request->note,
            'phone' => $request->phone,
            'address' => $request->address,
            'country' => $request->country,
            'pos' => $request->pos,
        ]);

        event(new Registered($user));

        // Auth::login($user);

        return redirect()->route('login');
    }
}
