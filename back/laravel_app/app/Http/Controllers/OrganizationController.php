<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class OrganizationController extends Controller
{
    public function show($id)
    {
        try {
            // $show = Organization::with(['donationRequests:organization_id,degree_of_necessity,deadline',
            //                             'donationRequest.requestCategories:id,name'
            // ])->find($id);
            $show = Organization::with([
                'donationRequests',
                'donationRequests.requestCategories'
            ])->find($id);
            return response($show);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => '取得に失敗しました'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'バリデーションエラー',
                'errors' => $e->errors()
            ], 422);
        }
    }
}
