@extends('layouts.common')
@include('head')
<div class="container">
@include('header')
@section('content')
<main>
  <div class="edit-wrap">
    <div class="edit-content-folder">
      <div class="edit-header">
        <h2>フォルダ名を変更する</h2>
      </div>
        @if($errors->any())
          <div class="alert alert-danger">
            @foreach($errors->all() as $message)
              <p>{{ $message }}</p>
            @endforeach
          </div>
        @endif
    <form action="{{ route('folders.edit', ['id' => $folder_id, 'folder_id' => $folder->id]) }}" method="POST">
      @csrf
      <h3>タイトル</h3>
      <div class="edit-name-wrap">
        <input type="text" class="edit-name" name="title" id="title" value="{{ old('title') ?? $folder->title }}" >
      </div>
      <div class="edit-add-btn-wrap">
        <input type="submit", value="送信", class="edit-add-btn">
      </div>
    </form>
    </div>
  </div>
</main>
@include('footer')
</div>
@endsection
