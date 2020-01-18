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
      <h3>タイトル</h3>
      <div class="edit-name-wrap">
        <input type="text" class="edit-name">
      </div>
      <h3>状態</h3>
      <div class="edit-status-wrap">
      <select name="status" class="edit-status">
        <option value="0">着手中</option>
        <option value="1">未着手</option>
        <option value="2">完了</option>
      </select>
      </div>
      <h3>期限</h3>
      <div class="edit-limit-wrap">
        <input type="text" class="edit-limit">
      </div>
      <div class="edit-add-btn-wrap">
        <input type="button", value="送信", class="edit-add-btn">
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection
