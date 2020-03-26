@extends('layouts.common')
@include('head')
@include('header')

@section('content')
<main>
  <div class="main-wrap">
    <div class="main-left">
      <div class="main-content">
        <div class="main-folder">
          <!-- <div class="main-folder-header">
            <h2>フォルダ</h2>
          </div> -->
          <div class="main-folder-btn">
            <a href="{{ route('folders.create') }}" class="folder-add-btn">
              フォルダを追加する
            </a>
          </div>
          <div class="main-folder-list">
            @foreach($folders as $folder)
              <a href="{{ route('tasks.index', ['id' => $folder->id]) }}" class="main-folder-add {{ $current_folder_id === $folder->id ? 'active' : '' }}">
                <p class="main-folder-add-title  ">{{ $folder->title }}</p>
                <i class="far fa-trash-alt"></i>
                <i class="fas fa-cog"></i>
              </a>
            @endforeach
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="main-content">
        <div class="main-task">
          <!-- <div class="main-task-header">
            <h2>タスク</h2>
          </div> -->
          <div class="main-task-btn">
            <a href="{{ route('tasks.create', ['id' => $current_folder_id]) }}" class="task-add-btn">
              タスクを追加する
            </a>
          </div>
          <div class="main-task-info">
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
                    <form action="{{ action('TaskController@destroy', $task->id) }}" id="form_{{ $task->id }}" method="post" style="display:inline">
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
        </div>
      </div>
    </div>
  </div>
</main>
<script>
function deletePost(e) {
  'use strict';

  if (confirm('are you sure?')) {
    document.getElementById('form_' + e.dataset.id).submit();
  }
}
</script>

<!-- @include('footer') -->
@endsection

