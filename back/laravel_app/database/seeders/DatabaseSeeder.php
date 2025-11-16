<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        DB::transaction(function () {
            DB::table('users')->insert([
                [
                    'id' => 1,
                    'name' => 'jyunpei',
                    'password' => Hash::make('yamamoto1234'),
                    'remember_token' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 2,
                    'name' => 'ruka',
                    'password' => Hash::make('yamasaki1234'),
                    'remember_token' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 3,
                    'name' => 'yuuma',
                    'password' => Hash::make('kanou1234'),
                    'remember_token' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);

            DB::table('organizations')->insert([
                [
                    'id' => 1,
                    'admin_id' => 1,
                    'donation_organization_name' => 'おも寄付',
                    'icon_image' => 'icons/donation1.png',
                    'representative_name' => '山田太朗',
                    'address' => '東京都渋谷区代々木4-202-3',
                    'activity_description' => '子供のおもちゃを中心に、恵まれない子供たちへ、喜びを届けています！',
                    'contact_information' => 'info@gmail.com',
                    'organization_images' => json_encode(["icons/donation1_1.png"]),
                    'delivery_method' => '配送・直接受け取り',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 2,
                    'admin_id' => 2,
                    'donation_organization_name' => '服をみんなに',
                    'icon_image' => 'icons/donation2.png',
                    'representative_name' => '山本純平',
                    'address' => '愛知県名古屋市緑区5-245-9',
                    'activity_description' => '衣服を海外の貧しい国へ届けるボランティアをしています。',
                    'contact_information' => 'sample@gmail.com',
                    'organization_images' => json_encode(["icons/donation2_1.png"]),
                    'delivery_method' => '配送',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 3,
                    'admin_id' => 3,
                    'donation_organization_name' => '食届団体',
                    'icon_image' => 'icons/donation3.png',
                    'representative_name' => '加納ゆうま',
                    'address' => '愛知県昭和区5-339-1',
                    'activity_description' => '国内の貧家庭に食物を届ける団体です。',
                    'contact_information' => 'test@gmail.com',
                    'organization_images' => json_encode(["icons/donation3_1.png"]),
                    'delivery_method' => '直接受け取り',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);

            DB::table('donation_requests')->insert([
                [
                    'id' => 1,
                    'degree_of_necessity' => 3,
                    'recruitment_details' => '子供のおもちゃを募集しています。',
                    'deadline' => '2025-10-25',
                    'organization_id' => 1,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 2,
                    'degree_of_necessity' => 5,
                    'recruitment_details' => '20〜30代の衣服を集めています。',
                    'deadline' => '2026-09-04',
                    'organization_id' => 2,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'id' => 3,
                    'degree_of_necessity' => 4,
                    'recruitment_details' => '食物を集めています。九州に配送します。',
                    'deadline' => '2027-06-23',
                    'organization_id' => 3,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);

            DB::table('categories')->insert([
                [
                    'id' => 1,
                    'name' => '衣服',
                ],
                [
                    'id' => 2,
                    'name' => '家具・家電'
                ],
                [
                    'id' => 3,
                    'name' => '書籍・学用品',
                ],
                [
                    'id' => 4,
                    'name' => '食品・日用品',
                ],
                [
                    'id' => 5,
                    'name' => '防災用具',
                ],
                [
                    'id' => 6,
                    'name' => 'ペット用品',
                ],
                [
                    'id' => 7,
                    'name' => 'おもちゃ・ベビー用品',
                ],
            ]);

            DB::table('donation_request_categories')->insert([
                [
                    'donation_request_id' => 1,
                    'category_id' => 7
                ],
                [
                    'donation_request_id' => 2,
                    'category_id' => 1
                ],
                [
                    'donation_request_id' => 3,
                    'category_id' => 4
                ],
            ]);

            DB::table('donation_histories')->insert([
                [
                    'user_id' => 1,
                    'donation_request_id' => 1
                ],
                [
                    'user_id' => 2,
                    'donation_request_id' => 2
                ],
                [
                    'user_id' => 3,
                    'donation_request_id' => 3
                ],
            ]);

            DB::table('admins')->insert([
                [
                    'id' => 1,
                    'account_code' => 'dantai1',
                    'password' => Hash::make('dantai1111')
                ],
                [
                    'id' => 2,
                    'account_code' => 'dantai2',
                    'password' => Hash::make('dantai2222')
                ],
                [
                    'id' => 3,
                    'account_code' => 'dantai3',
                    'password' => Hash::make('dantai3333')
                ],
            ]);
        });
    }
}
