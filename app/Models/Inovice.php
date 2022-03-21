<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inovice extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'desc',
        'price',
        'qty',
        'discount',
        'status',
        'agents_id',
    ];
}
