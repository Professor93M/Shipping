<?php

namespace App\Http\Controllers;

use App\Models\Actions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ActionsController extends Controller
{
    public function index()
    {
        $actions = Actions::all();
        return Inertia::render('Actions/Index', [
            'actions' => $actions,
            'columns' => [
                'id' => '#',
                'name' => 'الاسم',
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Actions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'يجب ادخال الاسم',
        ]);

        $action = new Actions();
        $action->name = $request->name;
        $action->users_id = Auth::user()->id;
        $action->save();

        return redirect()->route('actions.index');
    }
}
