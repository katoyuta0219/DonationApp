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
        Schema::create('donation_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('degree_of_necessity'); //必要度
            $table->text('recruitment_details'); //募集内容
            $table->date('deadline'); //締切日
            $table->foreignId('organization_id')->constrained()->cascadeOnDelete(); //FK
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_requests');
    }
};
