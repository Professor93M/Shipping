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
        return $this->belongsTo(Users::class);
    }

    public function orders()
    {
        return $this->belongsTo(Orders::class);
    }

    public function statuses()
    {
        return $this->belongsTo(Statuses::class);
    }

    public function actions()
    {
        return $this->belongsTo(Actions::class);
    }
}
