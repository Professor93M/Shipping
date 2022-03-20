<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InoviceController extends Controller
{
    public function index(){
        return Inertia::render('Inovice/Index',[
            'invoice' => Invoice::all(),
        ]);
    }

    public function create(){
        return Inertia::render('Inovice/Create');
    }

    public function store(Request $request){
        $request->validate([
            'type' => 'required',
            'price' => 'required',
            'agents_id' => 'required',
        ]);

        Invoice::create($request->all());
        return Redirect::route('dashboard');
    }

    public function edit($id){
        return Inertia::render('Inovice/Edit',[
            'invoice' => Invoice::findOrFail($id),
        ]);
    }

    public function update(Request $request, $id){
        $request->validate([
            'type' => 'required',
            'price' => 'required',
            'agents_id' => 'required',
        ]);

        Invoice::findOrFail($id)->update($request->all());
        return Redirect::route('dashboard');
    }

    public function destroy($id){
        Invoice::findOrFail($id)->delete();
        return Redirect::route('dashboard');
    }
}