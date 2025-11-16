<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    protected $fillable = [
        'clothing',
        'furniture_appliances',
        'books_supplies',
        'food_daily',
        'disaster_supplies',
        'pet_supplies',
        'toys_baby'
    ];

    public function categoryRequest(): BelongsToMany
    {
        return $this->belongsToMany(DonationRequest::class, 'donation_request_categories');
    }
}
