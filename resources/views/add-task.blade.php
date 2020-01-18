@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="task-wrap">
    <div class="task-content">
      <div class="task-header">
        <h2>タスクを追加する</h2>
      </div>
      <h3>タイトル</h3>
      <div class="task-name-wrap">
        <input type="text" class="task-name">
      </div>
      <h3>期限</h3>
      <div class="task-limit-wrap">
        <input type="text" class="task-limit">
      </div>
      <div class="task-add-btn-wrap">
        <input type="button", value="送信", class="task-add-btn">
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection
