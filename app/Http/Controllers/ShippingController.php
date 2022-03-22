<?php

namespace App\Http\Controllers;

use App\Models\Actions;
use App\Models\Shipping;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShippingController extends Controller
{
    public function index()
    {
        $shippings = Shipping::with('users')->with('actions')->with('statuses')->get();
        return Inertia::render('Shippings/Index', [
            'shippings' => $shippings,
            'columns' => [
                'id' => '#',
                'name' => 'الاسم',
                'num' => 'رقم الامر',
                'users_id' => 'العميل',
                'shipdate' => 'تاريخ الشحن',
                'created_at' => 'تاريخ الاضافة',
                'statuses_id' => 'الحالة',
                'actions_id' => 'الاجراء',
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
        return Inertia::render('Shippings/Edit', [
            'shipping' => $shipping,
            'agents' => User::where('pos', 'عميل')->get(),
            'statuses' => Status::all(),
            'actions' => Actions::all(),
        ]);
    }

    public function update(Request $request, $id)
    {
        $shipping = Shipping::find($id);
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
        $shipping->statuses_id = $request->statuses_id;
        $shipping->actions_id = $request->actions_id;
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