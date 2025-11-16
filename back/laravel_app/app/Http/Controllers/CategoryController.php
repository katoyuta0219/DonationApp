<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    public function index(){
        try {
            $categories = Category::all();
            return response()->json($categories);
        } catch (ValidationException $e){
            return response()->json([
                'success' => false,
                'message' => 'バリデーションエラー',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => '取得に失敗しました'
            ]);
        }
    }
}
