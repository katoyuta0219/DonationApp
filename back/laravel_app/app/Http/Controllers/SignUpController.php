<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    function sign_up(Request $request)
    {
        try {
            // $name = $request->input('name');
            // $password = $request->input('password');
            $validated = $request->validate([
            'name' => 'required|string|max:255|unique:users', //required -> 入力必須　：　string -> 文字列 : max:255 -> 255文字以内 : unique:users -> 同じ名前はだめ
            'password' => 'required|string|min:7|confirmed' //confirmed -> パスワード再入力と値が同じかどうか
            ]);

            User::create([
                'name' => $validated['name'],
                'password' => Hash::make($validated['password'])
            ]);

            return response()->json([
                'success' => true,
                'message' => '取得に成功しました'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => '取得に失敗しました'
            ]);
        }
    }
}
