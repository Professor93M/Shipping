<?php

namespace App\Http\Controllers;

use App\Models\Inovice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InoviceController extends Controller
{
    public function index(){
        return Inertia::render('Invoice/Index',[
            'invoice' => Inovice::all(),
        ]);
    }

    public function create(){
        return Inertia::render('Invoice/Create');
    }

    public function store(Request $request){
        $request->validate([
            'type' => 'required',
            'price' => 'required',
            'agents_id' => 'required',
        ]);

        Inovice::create($request->all());
        return Redirect::route('dashboard');
    }

    public function edit($id){
        return Inertia::render('Invoice/Edit',[
            'invoice' => Inovice::findOrFail($id),
        ]);
    }

    public function update(Request $request, $id){
        $request->validate([
            'type' => 'required',
            'price' => 'required',
            'agents_id' => 'required',
        ]);

        Inovice::findOrFail($id)->update($request->all());
        return Redirect::route('dashboard');
    }

    public function destroy($id){
        Inovice::findOrFail($id)->delete();
        return Redirect::route('dashboard');
    }
}