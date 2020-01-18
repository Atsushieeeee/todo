@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-header">
        <h2>ログイン</h2>
      </div>
      <h3>メールアドレス</h3>
      <div class="login-address-wrap">
        <input type="text" class="login-address">
      </div>
      <h3>パスワード</h3>
      <div class="login-password-wrap">
        <input type="text" class="login-password">
      </div>
      <div class="login-add-btn-wrap">
        <input type="button", value="送信", class="login-add-btn">
      </div>
    </div>
    <div class="change-password">
      <a href="{{url('/reset-password')}}">パスワードの変更はこちらから</a>
    </div>
    <div class="forget-password">
      <a href="{{url('/forget-password')}}">パスワードを忘れた方はこちらから</a>
    </div>
  </div>
</main>
@include('footer')
@endsection
