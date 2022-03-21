<?php

namespace App\Http\Controllers;

use App\Models\Agents;
use App\Models\Inovice;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InoviceController extends Controller
{
    public function index(){
        return Inertia::render('Invoice/Index',[
            'invoice' => Orders::all(),
            'columns' => [
                'id' => 'رقم الفاتورة',
                'totalprice' => 'مبلغ الفاتورة',
                'agents_id' => 'العميل',
                'status' => 'حالة الفاتورة',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function create(){
        return Inertia::render('Invoice/Create',['agents' => Agents::all()]);
    }

    public function store(Request $request){
        $order = Orders::latest()->first('id');
        // for ($i = 0; $i < count($request->all()) ; $i++){
        foreach($request->items as $key => $req){
            Inovice::create([
                'type' => $req['type'],
                'desc' => $req['desc'],
                'price' => $req['price'],
                'qty' => $req['qty'],
                'discount' => $req['discount'],
                'status' => $req['status'],
                'users_id' => auth()->user()->id,
                'orders_id' => $order ? $order->id+1 : 1,
            ]);
        }
    
        Orders::create([
            'totalprice' => $request->total,
            'agents_id' => $request->agent_id,
        ]);

        return Redirect::route('invoice.index');
    }

    public function show($id){
        return Inertia::render('Invoice/Show',[
            'order' => Orders::findOrFail($id)->with('inovice')->first(),
            // 'invoice' => Inovice::where('orders_id' ,$id)->get(),
        ]);
    }

    public function destroy($id){
        Orders::findOrFail($id)->delete();
        return Redirect::route('invoice.index');
    }
}