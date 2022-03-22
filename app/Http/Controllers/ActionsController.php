<?php

namespace App\Http\Controllers;

use App\Models\Actions;
use App\Models\User;
use Illuminate\Http\Request;
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
                'created_at' => 'تاريخ الاضافة',
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
        $action->users_id = auth()->user()->id;
        $action->save();

        return redirect()->route('actions.index');
    }
}
