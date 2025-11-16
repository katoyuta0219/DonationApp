<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    protected $fillable = [
        'name',
    ];

    public function categoryRequest(): BelongsToMany
    {
        return $this->belongsToMany(DonationRequest::class, 'donation_request_categories');
    }
}
