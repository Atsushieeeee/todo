@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="edit-wrap">
    <div class="edit-content">
      <div class="edit-header">
        <h2>タスクを編集する</h2>
      </div>
        @if($errors->any())
          <div class="alert alert-danger">
            @foreach($errors->all() as $message)
              <p>{{ $message }}</p>
            @endforeach
          </div>
        @endif
    <form action="{{ route('tasks.edit', ['id' => $task->folder_id, 'task_id' => $task->id]) }}" method="POST">
      @csrf
      <h3>タイトル</h3>
      <div class="edit-name-wrap">
        <input type="text" class="edit-name" name="title" id="title" value="{{ old('title') ?? $task->title }}" >
      </div>
      <h3>状態</h3>
      <div class="edit-status-wrap">
      <select name="status" class="edit-status">
        @foreach(\App\Task::STATUS as $key => $val)
          <option value="{{ $key }}" {{ $key == old('status', $task->status) ? 'selected' : '' }} >
            {{ $val['label'] }}
          </option>
        @endforeach
      </select>
      </div>
      <h3>期限</h3>
      <div class="edit-limit-wrap">
        <input type="text" class="edit-limit" name="due_date" id="due_date" value="{{ old('due_date') ?? $task->formatted_due_date }}">
      </div>
      <div class="edit-add-btn-wrap">
        <input type="submit", value="送信", class="edit-add-btn">
      </div>
    </form>
    </div>
  </div>
</main>
@include('footer')
@endsection
