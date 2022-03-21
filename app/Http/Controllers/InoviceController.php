<?php

namespace App\Http\Controllers;

use App\Models\Agents;
use App\Models\Inovice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InoviceController extends Controller
{
    public function index(){
        return Inertia::render('Invoice/Index',[
            'invoice' => Inovice::all(),
            'columns' => [
                'type' => 'البند',
                'desc' => 'الوصف',
                'price' => 'السعر',
                'qty' => 'الكمية',
                'discount' => 'الخصم',
                'status' => 'حالة الفاتورة',
                'created_at' => 'تاريخ الاضافة',
            ],
        ]);
    }

    public function create(){
        return Inertia::render('Invoice/Create',['agents' => Agents::all()]);
    }

    public function store(Request $request){
        // for ($i = 0; $i < count($request->all()) ; $i++){
        foreach($request->all() as $key => $req){
            $req->validate([
                'type' => 'required',
                'price' => 'required',
                'agents_id' => 'required',
            ]);
            Inovice::create($req->all());
        }

        return Redirect::route('dashboard');
    }

    public function edit($id){
        return Inertia::render('Invoice/Show',[
            'invoice' => Inovice::findOrFail($id),
            'agents' => Agents::all()
        ]);
    }

    // public function update(Request $request, $id){
    //     $request->validate([
    //         'type' => 'required',
    //         'price' => 'required',
    //         'agents_id' => 'required',
    //     ]);

    //     Inovice::findOrFail($id)->update($request->all());
    //     return Redirect::route('dashboard');
    // }

    public function destroy($id){
        Inovice::findOrFail($id)->delete();
        return Redirect::route('dashboard');
    }
}