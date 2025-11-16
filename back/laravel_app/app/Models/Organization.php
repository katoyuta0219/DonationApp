<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    protected $fillable = [
        'donation_organization_name',
        'icon_image',
        'representative_name',
        'address',
        'activity_description',
        'contact_information',
        'organization_images',
        'delivery_method'
    ];

    public function admin(): BelongsTo //belongsTo は「自分のテーブルに外部キーがある」ときに使う。
    {
        return $this->belongsTo(Admin::class);
    }

    public function donationRequests(): HasMany
    {
        return $this->hasMany(DonationRequest::class, 'organization_id');
    }
}
