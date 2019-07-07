<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{path}', function () {
    return view('app');
})->where('path', '(.*)');

Route::post('/auth/login','Auth\ApiAuthController@login');
Route::post('/auth/register','Auth\ApiAuthController@register');
Route::post('/auth/logout','Auth\ApiAuthController@logout');
