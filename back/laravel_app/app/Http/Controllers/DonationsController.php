<?php

namespace App\Http\Controllers;

use App\Models\DonationRequest;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator;

class DonationsController extends Controller
{
    function index(Request $request)
    {
        try {
            $categoryIds = $request->get('categoryIds');
            $necessity = $request->get('necessity');
            $donations = DonationRequest::query();
            if ($categoryIds) {
                $donations = $donations->whereHas('requestCategories', function ($query) use ($categoryIds) {
                    $query->whereIn('id', $categoryIds);
                });
            }
            if($necessity){
                $donations = $donations->where('degree_of_necessity', $necessity);
            }
            return response()->json($donations->get());
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'バリデーションエラー',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => '取得に失敗しました'
            ]);
        }
    }
}
