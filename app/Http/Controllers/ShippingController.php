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
        if(request('date_from') > request('date_to')){
            $query = Shipping::query();
            $query->whereBetween('created_at', [request('date_to'), request('date_from')]);
        }else{
            $query = Shipping::query();
            $query->whereBetween('created_at', [request('date_from'), request('date_to')]);
        }
        if(request('id')){
            $query = Shipping::query();
            $query = $query->where('users_id', request('id'));
        }

        if(auth()->user()->pos == "عميل"){
            $shipping = (request('date_from') && request('date_to')) || request('id') ? $query->with('users')->with('actions')->with('statuses')->where('users_id', auth()->user()->id)->get() : Shipping::with('users')->with('actions')->with('statuses')->where('users_id', auth()->user()->id)->orderBy('created_at', 'desc')->get();
        }else{
            $shipping = (request('date_from') && request('date_to')) || request('id') ? $query->with('users')->with('actions')->with('statuses')->get() : Shipping::with('users')->with('actions')->with('statuses')->orderBy('created_at', 'desc')->get();
        }
        return Inertia::render('Shippings/Index', [
            'shippings' => $shipping,
            'columns' => [
                'id' => 'رقم الشحنة',
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

    public function return($id)
    {
        $shipping = Shipping::find($id);
        $shipping->status = 'مرتجع';
        $shipping->save();
        return redirect()->back();
    }

    public function rindex(){
        $shipping = Shipping::with('users')->where('status', 'مرتجع')->get();
        return Inertia::render('Shippings/Rindex', [
            'shippings' => $shipping,
            'columns' => [
                'id' => 'رقم الشحنة',
                'name' => 'الاسم',
                'num' => 'رقم الامر',
                'users_id' => 'العميل',
                'shipdate' => 'تاريخ الشحن',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }
}