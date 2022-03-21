<?php

namespace App\Http\Controllers;

use App\Models\Shipping;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ShippingController extends Controller
{
    public function index()
    {
        $shippings = Shipping::all();
        return Inertia::render('Shippings/Index', ['shippings' => $shippings]);
    }

    public function create()
    {
        return Inertia::render('Shippings/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'num' => 'required',
            'shipdate' => 'required',
            'agents_id' => 'required',
        ],[
            'name.required' => 'يجب ادخال اسم الشحن',
            'num.required' => 'يجب ادخال رقم الشحن',
            'shipdate.required' => 'يجب ادخال تاريخ الشحن',
            'agents_id.required' => 'يجب تحديد العميل',
        ]);
    
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
        $shipping->agents_id = $request->agents_id;
        $shipping->users_id = Auth::user()->id;
        $shipping->save();
        return redirect()->route('shippings.index');
    }

    public function edit($id)
    {
        $shipping = Shipping::find($id);
        return Inertia::render('Shippings/Edit', ['shipping' => $shipping]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'num' => 'required',
            'shipdate' => 'required',
            'agents_id' => 'required',
        ],[
            'name.required' => 'يجب ادخال اسم الشحن',
            'num.required' => 'يجب ادخال رقم الشحن',
            'shipdate.required' => 'يجب ادخال تاريخ الشحن',
            'agents_id.required' => 'يجب تحديد العميل',
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
        $shipping->agents_id = $request->agents_id;
        $shipping->users_id = Auth::user()->id;
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