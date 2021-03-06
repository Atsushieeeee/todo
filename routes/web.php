<?php

use App\Http\Controllers\TaskController;

Route::group(['middleware' => 'auth'], function() {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/folders/create', 'FolderController@showCreateForm')->name('folders.create');
    Route::post('/folders/create', 'FolderController@create');

    Route::get('/folders/{folder}/edit', 'FolderController@showEditForm')->name('folders.edit');
    Route::post('/folders/{folder}/edit', 'FolderController@edit');
    
    Route::group(['middleware' => 'can:view,folder'], function() {
        Route::get('/folders/{folder}/tasks', 'TaskController@index')->name('tasks.index');

        Route::get('/folders/{folder}/tasks/create', 'TaskController@showCreateForm')->name('tasks.create');
        Route::post('/folders/{folder}/tasks/create', 'TaskController@create');

        Route::get('/folders/{folder}/tasks/{task}/edit', 'TaskController@showEditForm')->name('tasks.edit');
        Route::post('/folders/{folder}/tasks/{task}/edit', 'TaskController@edit');

    });

    Route::delete('/folders/{folder}', 'FolderController@destroy');
    Route::delete('/folders/{folder}/tasks', 'TaskController@destroy');
});

Auth::routes();

Route::view('/main',"main");
