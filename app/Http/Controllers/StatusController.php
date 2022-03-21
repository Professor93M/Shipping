<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function index()
    {
        $statuses = Status::all();
        return Inertia::render('Statuses/Index', ['statuses' => $statuses]);
    }

    public function create()
    {
        return Inertia::render('Statuses/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'country' => 'required',
        ],[
            'type.required' => 'يجب ادخال نوع الحالة',
            'name.required' => 'يجب ادخال اسم الحالة',
            'phone.required' => 'يجب ادخال رقم الهاتف',
            'address.required' => 'يجب ادخال العنوان',
            'country.required' => 'يجب ادخال الدولة',
        ]);

        $status = new Status();
        $status->type = $request->type;
        $status->name = $request->name;
        $status->phone = $request->phone;
        $status->address = $request->address;
        $status->country = $request->country;
        $status->users_id = Auth::user()->id;
        $status->save();

        return redirect()->route('statuses.index');
    }

    public function edit($id)
    {
        $status = Status::find($id);
        return Inertia::render('Statuses/Edit', ['status' => $status]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'type' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'country' => 'required',
        ],[
            'type.required' => 'يجب ادخال نوع الحالة',
            'name.required' => 'يجب ادخال اسم الحالة',
            'phone.required' => 'يجب ادخال رقم الهاتف',
            'address.required' => 'يجب ادخال العنوان',
            'country.required' => 'يجب ادخال الدولة',
        ]);

        $status = Status::find($id);
        $status->type = $request->type;
        $status->name = $request->name;
        $status->phone = $request->phone;
        $status->address = $request->address;
        $status->country = $request->country;
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
