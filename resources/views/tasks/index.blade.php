@extends('layouts.common')
@include('head')
@include('header')

@section('content')

<main>
  <div id="nav-drawer">
        <input id="nav-input" type="checkbox" class="nav-unshown">
          <label id="nav-open" for="nav-input">
            <i class="far fa-folder-open"></i>
            <p>フォルダ一覧</p>
          </label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <div id="nav-content">
        <div class="main-left">
        <div class="main-content">
          <div class="main-folder">
            <div class="main-folder-btn">
              <a href="{{ route('folders.create') }}" class="folder-add-btn">
                <i class="fas fa-folder-plus"></i>
                <p>フォルダを追加する</p>
              </a>
            </div>
            <div class="main-folder-list">
              @foreach($folders as $folder)
              <div class="main-folder-select {{ $current_folder_id === $folder->id ? 'active' : '' }}">
                <a href="{{ route('tasks.index', ['id' => $folder->id]) }}" class="main-folder-add {{ $current_folder_id === $folder->id ? 'active' : '' }}">
                  <i class="fas fa-angle-right"></i>
                  <p class="main-folder-add-title  ">{{ $folder->title }}</p>
                </a>
                <form class="main-folder-delete" action="{{ action('FolderController@destroy', $folder->id) }}" id="form_{{ $folder->id }}" method="post">
                  {{ csrf_field() }}
                  {{ method_field('delete') }}
                  <a href="#" data-id="{{ $folder->id }}" onclick="deletePost(this);" class="fs12">
                    <i class="far fa-trash-alt"></i>
                  </a>
                </form>
                <a class="edit" href="{{ route('folders.edit',['folder' => $folder]) }}">
                  <i class="fas fa-cog"></i>
                </a>
              </div>
              @endforeach
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  <div class="main-wrap">
    <div class="main-right">
    @foreach($folders as $folder)
    <div class="folder-title">
      <div class="main-folder-select {{ $current_folder_id === $folder->id ? 'active' : '' }}">
          <i class="far fa-folder"></i>
          <p class="main-folder-add-title  ">{{ $folder->title }}</p>
      </div>
    </div>
    @endforeach
      <div class="main-content">
        <div class="main-task">
          <div class="main-task-btn">
            <a href="{{ route('tasks.create', ['id' => $current_folder_id]) }}" class="task-add-btn">
              <i class="fas fa-plus"></i>
              <p>タスクを追加する</p> 
            </a>
          </div>
          <table>
            <tr>
              <th class="main-task-title">タイトル</th>
              <th class="main-task-status">状態</th>
              <th class="main-task-limit">期限</th>
              <th class="main-task-delete"></th>
              <th class="main-task-edit"></th>
            </tr>
          @foreach($tasks as $task)
            <tr>
              <th class="main-task-title">{{ $task->title }}</th>
              <th class="main-task-status"><div class="status {{ $task->status_class }}">{{ $task->status_label }}</div></th>
              <th class="main-task-limit">{{ $task->formatted_due_date }}</th>
              <th class="main-task-delete">
                <form action="{{ action('TaskController@destroy', $task->id) }}" id="form_{{ $task->id }}" method="post">
                  {{ csrf_field() }}
                  {{ method_field('delete') }}
                  <a href="#" data-id="{{ $task->id }}" onclick="deletePost(this);" class="fs12">
                    <i class="far fa-trash-alt"></i>
                  </a>
                </form>
              </th>
              <th class="main-task-edit">
                <a class="edit" href="{{ route('tasks.edit', ['id' => $task->folder_id, 'task_id' => $task->id]) }}">
                  <i class="fas fa-cog"></i>
                </a>
              </th>
            </tr>
          @endforeach
          </table>
          <!-- <div class="main-task-info">
            <div class="main-task-info-header">
              <div class="main-task-info-header-left">
                <h3>タイトル</h3>
              </div>
              <div class="main-task-info-header-right">
                <h3>状態</h3>
                <h3>期限</h3>
              </div>
            </div>
            <div class="main-task-info-list">
            @foreach($tasks as $task)
              <div class="main-task-info-add">
                  <div class="main-task-info-add-left">
                    <p>{{ $task->title }}</p>
                  </div>
                  <div class="main-task-info-add-right">
                    <div class="status {{ $task->status_class }}">
                      <p>{{ $task->status_label }}</p>
                    </div>
                    <div class="date">
                      <p>{{ $task->formatted_due_date }}</p>
                    </div>
                    <form action="{{ action('TaskController@destroy', $task->id) }}" id="form_{{ $task->id }}" method="post">
                    {{ csrf_field() }}
                    {{ method_field('delete') }}
                      <a href="#" data-id="{{ $task->id }}" onclick="deletePost(this);" class="fs12">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </form>
                      <a class="edit" href="{{ route('tasks.edit', ['id' => $task->folder_id, 'task_id' => $task->id]) }}">
                        <i class="fas fa-cog"></i>
                    </a>
                  </div>
              </div>
              @endforeach
          </div>
        </div> -->
      </div>
    </div>
  </div>
</main>
<script>
function deletePost(e) {
  'use strict';
  if (confirm('削除しますか？')) {
    document.getElementById('form_' + e.dataset.id).submit();
  }
}
</script>

<!-- @include('footer') -->
@endsection

