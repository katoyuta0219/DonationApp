<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function profile()
    {
        $authUser = request()->user();

        $authUser->load([
            'historyRequest.organization:id,donation_organization_name',
            'historyRequest.requestCategories:id,name'
        ]);

        return response()->json([
            "id" => $authUser->id,
            "name" => $authUser->name,
            "histories" => $authUser->historyRequest
        ]);
    }
}
