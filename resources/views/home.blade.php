@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="home-wrap">
    <div class="home-header">
      <p>まずはフォルダを作成しましょう</p>
    </div>
    <div class="home-body">
      <div class="home-body-btn-wrap">
        <a href="{{ route('folders.create') }}" class="home-body-btn">
          フォルダ作成ページへ
        </a>
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection