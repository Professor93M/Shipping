<?php

namespace App\Http\Controllers;

use App\Models\Agents;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AgentsController extends Controller
{
    public function index()
    {
        $agents = User::where('pos', 'عميل')->get();
        return Inertia::render('Agents/Index', [
            'agents' => $agents,
            'columns' => [
                'id' => 'رقم العميل',
                'name' => 'الاسم',
                'phone' => 'رقم الهاتف',
                'address' => 'العنوان',
                'country' => 'الدولة',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function edit($id)
    {
        $agent = Agents::find($id);
        return Inertia::render('Agents/Edit', ['agent' => $agent]);
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
            'type.required' => 'يجب ادخال نوع العميل',
            'name.required' => 'يجب ادخال اسم العميل',
            'phone.required' => 'يجب ادخال رقم الهاتف',
            'address.required' => 'يجب ادخال العنوان',
            'country.required' => 'يجب ادخال الدولة',
        ]);

        $agent = Agents::find($id);
        $agent->type = $request->type;
        $agent->name = $request->name;
        $agent->phone = $request->phone;
        $agent->address = $request->address;
        $agent->country = $request->country;
        $agent->users_id = Auth::user()->id;
        $agent->save();

        return redirect()->route('agents.index');
    }

    public function destroy($id)
    {
        $agent = Agents::find($id);
        $agent->delete();
        return redirect()->route('agents.index');
    }
}
