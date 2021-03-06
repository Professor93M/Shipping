<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'totalprice',
        'status',
        'users_id',
    ];
    
    public function invoice()
    {
        return $this->hasMany(Inovice::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
