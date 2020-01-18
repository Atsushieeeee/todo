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

Route::get('/', function () {
    return view('index');
});

Route::get('/add-folder', function () {
    return view('add-folder');
});

Route::get('/add-task', function () {
    return view('add-task');
});

Route::get('/edit-task', function () {
    return view('edit-task');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/forget-password', function () {
    return view('forget-password');
});

Route::get('/reset-password', function () {
    return view('reset-password');
});