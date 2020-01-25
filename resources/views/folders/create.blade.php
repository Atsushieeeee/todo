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
        @if($errors->any())
        <div class="alert alert-danger">
          <ul>
            @foreach($errors->all() as $message)
              <li>{{ $message }}</li>
            @endforeach
          </ul>
        </div>
        @endif
        <form action="{{ route('folders.create') }}" method="post">
        @csrf
        <h3>フォルダ名</h3>
        <div class="folder-name-wrap">
          <input type="text" class="folder-name" name="title" id="title" value="{{ old('title') }}">
        </div>
        <div class="folder-add-btn-wrap">
          <input type="submit", value="送信", class="folder-add-btn">
        </div>
      </form>
    </div>
  </div>
</main>
@include('footer')
@endsection
