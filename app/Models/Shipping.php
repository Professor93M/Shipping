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
        'users_id',
        'statuses_id',
        'actions_id',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function statuses()
    {
        return $this->belongsTo(Status::class);
    }

    public function actions()
    {
        return $this->belongsTo(Actions::class);
    }
}
