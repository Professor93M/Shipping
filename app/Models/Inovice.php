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
