<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
        'status',
        'users_id',
    ];

    public function users()
    {
        return $this->belongsTo(Users::class);
    }
}
