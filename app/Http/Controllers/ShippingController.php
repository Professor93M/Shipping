<?php

namespace App\Http\Controllers;

use App\Models\Shipping;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ShippingController extends Controller
{
    public function index()
    {
        $shippings = Shipping::with('users')->get();
        // $agents = User::where('pos', 'عميل')->get();
        return Inertia::render('Shippings/Index', [
            'shippings' => $shippings,
            // 'agents' => $agents,
            'columns' => [
                'id' => '#',
                'name' => 'الاسم',
                'num' => 'رقم الامر',
                'users_id' => 'العميل',
                'shipdate' => 'تاريخ الشحن',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Shippings/Create', ['agents' => User::where('pos', 'عميل')->get()]);
    }

    public function store(Request $request)
    {
        $shipping = new Shipping();
        $shipping->name = $request->name;
        $shipping->num = $request->num;
        $shipping->shipdate = $request->shipdate;
        $shipping->arvdate = $request->arvdate;
        $shipping->desc = $request->desc;
        $shipping->nameto = $request->nameto;
        $shipping->address = $request->address;
        $shipping->mobile = $request->mobile;
        $shipping->shipname = $request->shipname;
        $shipping->shipdesc = $request->shipdesc;
        $shipping->weight = $request->weight;
        $shipping->users_id = $request->agents_id;
        $shipping->save();
        return redirect()->route('shippings.index');
    }

    public function edit($id)
    {
        $shipping = Shipping::find($id);
        return Inertia::render('Shippings/Edit', ['shipping' => $shipping,'agents' => User::where('pos', 'عميل')->get()]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'num' => 'required',
            'shipdate' => 'required',
            'users_id' => 'required',
        ],[
            'name.required' => 'يجب ادخال اسم الشحن',
            'num.required' => 'يجب ادخال رقم الشحن',
            'shipdate.required' => 'يجب ادخال تاريخ الشحن',
            'users_id.required' => 'يجب تحديد العميل',
        ]);
    
        $shipping = Shipping::find($id);
        $shipping->name = $request->name;
        $shipping->num = $request->num;
        $shipping->shipdate = $request->shipdate;
        $shiping->arvdate = $request->arvdate;
        $shipping->desc = $request->desc;
        $shipping->nameto = $request->nameto;
        $shipping->address = $request->address;
        $shipping->mobile = $request->mobile;
        $shipping->shipname = $request->shipname;
        $shipping->shipdesc = $request->shipdesc;
        $shipping->weight = $request->weight;
        $shipping->users_id = $request->agents_id;
        $shipping->save();

        return redirect()->route('shippings.index');
    }

    public function destroy($id)
    {
        $shipping = Shipping::find($id);
        $shipping->delete();
        return redirect()->route('shippings.index');
    }
}