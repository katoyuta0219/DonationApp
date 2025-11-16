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
        Schema::create('donation_histories', function (Blueprint $table) {
            // 外部キーとして user_id と blog_id のみを持ちます
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('organization_id')->constrained()->cascadeOnDelete();
            //複合主キーを設定し、同じ組み合わせの重複を禁止 (一人のuserは、一つのblogに一回しかいいねできないから。)
            // $table->primary(['user_id', 'blog_id']); //uniquと同じ
            //1人のuserは一つのorganization_id（寄付団体）に一回しか寄付できないのか？　＊そんなことはない。
            $table->primary(['user_id', 'organization_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_histories');
    }
};
