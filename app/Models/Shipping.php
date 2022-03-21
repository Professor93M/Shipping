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
        'users_id',
    ];

    public function agents()
    {
        return $this->belongsTo(Agents::class);
    }

    public function users()
    {
        return $this->belongsTo(Users::class);
    }
}
