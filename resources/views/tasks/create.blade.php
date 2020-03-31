@extends('layouts.common')
@include('head')
<div class="container">
@include('header')
@section('content')
<main>
  <div class="task-wrap">
    <div class="task-content">
      <div class="task-header">
        <h2>タスクを追加する</h2>
      </div>
        @if($errors->any())
          <div class="alert alert-danger">
            @foreach($errors->all() as $message)
              <p>{{ $message }}</p>
            @endforeach
          </div>
        @endif
      <form action="{{ route('tasks.create', ['id' => $folder_id]) }}" method="POST"> 
        @csrf     
        <h3>タイトル</h3>
        <div class="task-name-wrap">
          <input type="text" class="task-name" name="title" id="title" value="{{ old('title') }}">
        </div>
        <h3>期限</h3>
        <div class="task-limit-wrap">
          <input type="text" class="task-limit" name="due_date" id="due_date" value="{{ old('due_date') }}">
        </div>
        <div class="task-add-btn-wrap">
          <input type="submit", value="送信", class="task-add-btn">
        </div>
      </form>
    </div>
  </div>
</main>
@include('footer')
</div>
@endsection
