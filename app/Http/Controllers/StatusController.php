<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function status(){
        return Inertia::render('Status/Status');
    }
    public function index()
    {
        $statuses = Status::all();
        return Inertia::render('Status/Index', [
            'statuses' => $statuses,
            'columns' => [
                'name' => 'الاسم',
                'color' => 'اللون',
                'status' => 'الحالة',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Status/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
            'color' => 'required',
        ],[
            'name.required' => 'يجب ادخال الاسم',
            'status.required' => 'يجب ادخال الحالة',
            'color.required' => 'يجب ادخال اللون',
        ]);

        $status = new Status();
        $status->name = $request->name;
        $status->status = $request->status;
        $status->color = $request->color;
        $status->users_id = Auth::user()->id;
        $status->save();

        return redirect()->route('statuses.index');
    }

    public function edit($id)
    {
        $status = Status::find($id);
        return Inertia::render('Status/Edit', ['status' => $status]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
            'color' => 'required',
        ],[
            'name.required' => 'يجب ادخال الاسم',
            'status.required' => 'يجب ادخال الحالة',
            'color.required' => 'يجب ادخال اللون',
        ]);

        $status = Status::find($id);
        $status->name = $request->name;
        $status->status = $request->status;
        $status->color = $request->color;
        $status->users_id = Auth::user()->id;
        $status->save();

        return redirect()->route('statuses.index');
    }

    public function destroy($id)
    {
        $status = Status::find($id);
        $status->delete();
        return redirect()->route('statuses.index');
    }
}
