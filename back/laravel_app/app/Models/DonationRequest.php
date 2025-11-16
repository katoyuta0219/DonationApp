<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DonationRequest extends Model
{
    protected $fillable = [
        'degree_of_necessity',
        'recruitment_details',
        'deadline',
        'organization_id'
    ];

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function requestCategories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'donation_request_categories');
    }

    public function historyUser(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'donation_histories')->withTimestamps();
    }
}