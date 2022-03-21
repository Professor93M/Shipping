<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'num',
        'shipdate',
        'arvdate',
        'desc',
        'nameto',
        'address',
        'mobile',
        'shipname',
        'shipdesc',
        'weight',
        'agents_id',
    ];
}
