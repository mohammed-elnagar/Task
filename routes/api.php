<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//  Get All Articles
Route::get('articles', 'ArticlesController@index');
// Find article by id
Route::get('articles/{id}', 'ArticlesController@show');
// Create new article
Route::post('article', 'ArticlesController@store');
// Update Article by id
Route::put('article', 'ArticlesController@store');
// Delete Article
Route::delete('article/{id}', 'ArticlesController@destroy');
