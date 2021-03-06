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
        'users_id',
        'orders_id',
    ];
    
    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function orders()
    {
        return $this->belongsTo(Orders::class);
    }
}
