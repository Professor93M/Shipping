<?php

namespace App\Http\Controllers;

use App\Models\Inovice;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InoviceController extends Controller
{
    public function index(){
        if(request('date_from') > request('date_to')){
            $query = Orders::query();
            $query->whereBetween('created_at', [request('date_to'), request('date_from')]);
        }else{
            $query = Orders::query();
            $query->whereBetween('created_at', [request('date_from'), request('date_to')]);
        }
        if(request('id')){
            $query = Orders::query();
            $query = $query->where('users_id', request('id'));
        }

        if(auth()->user()->pos == "عميل"){
            $invoice = (request('date_from') && request('date_to')) || request('id') ? $query->with('users')->where('users_id', auth()->user()->id)->get() : Orders::with('users')->where('users_id', auth()->user()->id)->orderBy('created_at', 'desc')->get();
        }else{
            $invoice = (request('date_from') && request('date_to')) || request('id') ? $query->with('users')->get() : Orders::with('users')->orderBy('created_at', 'desc')->get();
        }
        return Inertia::render('Invoice/Index', [
            'invoice' => $invoice,
            'columns' => [
                'id' => 'رقم الفاتورة',
                'totalprice' => 'مبلغ الفاتورة',
                'users_id' => 'العميل',
                'status' => 'حالة الفاتورة',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function create(){
        return Inertia::render('Invoice/Create',['agents' => User::where('pos', 'عميل')->get()]);
    }

    public function store(Request $request){
        $order = Orders::latest()->first('id');
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
            'users_id' => $request->agent_id,
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

    public function return(){
        return Inertia::render('Invoice/Return', [
            'invocie' => Orders::with('users')->where('status', 'مرتجع')->get(),
            'columns' => [
                'id' => 'رقم الفاتورة',
                'totalprice' => 'مبلغ الفاتورة',
                'users_id' => 'رقم العميل',
                'status' => 'حالة الفاتورة',
                'created_at' => 'تاريخ الاضافة',
                'updated_at' => 'تاريخ الارجاع',
            ]
        ]);
    }
}