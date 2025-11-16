<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('admin_id'); // 主キー（PK）

            $table->string('donation_organization_name');
            $table->string('icon_image');
            $table->string('representative_name');
            $table->string('address');
            $table->text('activity_description');
            $table->string('contact_information');
            $table->json('organization_images');
            $table->string('delivery_method');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
