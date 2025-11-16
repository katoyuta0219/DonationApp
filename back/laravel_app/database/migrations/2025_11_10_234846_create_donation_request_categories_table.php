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
        Schema::create('donation_request_categories', function (Blueprint $table) {
            // 外部キーとして user_id と blog_id のみを持ちます
            $table->foreignId('donation_request_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            //複合主キーを設定し、同じ組み合わせの重複を禁止 
            //あったほうが良いか
            $table->primary(['donation_request_id', 'category_id']); //uniquと同じ
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_request_categories');
    }
};
