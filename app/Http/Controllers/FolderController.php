<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Folder;
use App\Http\Requests\CreateFolder;
// use App\Http\Requests\EditFolder;
use Illuminate\Support\Facades\Auth;

class FolderController extends Controller
{
    public function showCreateForm()
    {
        return view('folders/create');
    }

    public function create(CreateFolder $request)
    {
    // フォルダモデルのインスタンスを作成する
    $folder = new Folder();
    // タイトルに入力値を代入する
    $folder->title = $request->title;
    // インスタンスの状態をデータベースに書き込む
    Auth::user()->folders()->save($folder);

    return redirect()->route('tasks.index', [
        'id' => $folder->id,
    ]);
    }

    /**
     * フォルダ編集フォーム
     * @param Folder $folder
     * @return \Illuminate\View\View
     */
    public function showEditForm(Folder $folder)
    {
        // $this->checkRelation($folder);

        return view('folders/edit', [
        'folder' => $folder,
        'id' => $folder->folder_id,
        'folder_id' => $folder->id
    ]);
    }

    /**
     * フォルダ編集
     * @param Folder $folder
     * @return \Illuminate\Http\RedirectResponse
     */
    public function edit(Folder $folder ,CreateFolder $request)
    {
        // $this->checkRelation($folder, $task);

        $folder->title = $request->title;
        $folder->save();

        return redirect()->route('tasks.index', [
            'folder' => $folder,
            'id' => $folder->folder_id,
            'folder_id' => $folder->id
            ]);
    }


    #フォルダの削除
    public function destroy($id)
    {
    #削除処理
    $folder = Folder::findOrFail($id);
    $folder->delete();

    return redirect('/')->with('flash_message', 'Post Deleted!');
    
    }
    
}