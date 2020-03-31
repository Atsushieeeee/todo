@extends('layouts.common')
@include('head')
<div class="container">
@include('header')
@section('content')
<main>
  <div class="error-wrap">
    <div class="error-content">
      <div class="error-content-text">
        <p>サーバーエラーにつきページが表示されません。</p>
        <a href="{{ route('home') }}" class="error-content-btn">
          ホームへ戻る
        </a>
      </div>
    </div>
  </div>
</main>
@include('footer')
</div>
@endsection
