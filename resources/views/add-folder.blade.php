@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="folder-wrap">
    <div class="folder-content">
      <div class="folder-header">
        <h2>フォルダを追加する</h2>
      </div>
      <h3>フォルダ名</h3>
      <div class="folder-name-wrap">
        <input type="text" class="folder-name">
      </div>
      <div class="folder-add-btn-wrap">
        <input type="button", value="送信", class="folder-add-btn">
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection
