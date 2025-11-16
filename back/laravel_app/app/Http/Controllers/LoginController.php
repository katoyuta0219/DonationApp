<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index(Request $request){
        $name = $request->input('name');
        $password = $request->input('password');

        $user = User::where('name', $name)->first();
        if(!$user || !Hash::check($password, $user->password)){
            return response()->json([
                'success' => false,
                'message' => "ログインできませんでした。"
            ]);
        }
        // Auth::login($user);
        return response()->json([
            'success' => true,
            'message' => 'ログイン成功',
            'token' => $user->createToken('access_token')->plainTextToken
        ]);
    }
}
