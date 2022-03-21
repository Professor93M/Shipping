<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agents extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'phone',
        'address',
        'country',
        'users_id',
    ];

    public function shipping()
    {
        return $this->hasMany(Shipping::class);
    }

    public function inovice()
    {
        return $this->hasMany(Inovice::class);
    }

    public function users()
    {
        return $this->belongsTo(Users::class);
    }
}
