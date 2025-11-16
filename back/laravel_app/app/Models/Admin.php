<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Admin extends Model
{
    protected $fillable = [
        'account_code',
        'password'
    ];

    public function organization(): HasOne
    {
        return $this->hasOne(Organization::class);
    }
}
