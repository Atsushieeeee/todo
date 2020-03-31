@extends('layouts.common')
@include('head')
<div class="container">
@include('header')
@section('content')
<main>
  <div class="register-pass-wrap">
    <div class="register-pass-content">
      <div class="register-pass-header">
        <h2>会員登録</h2>
      </div>
      @if($errors->any())
        <div class="alert alert-danger">
          @foreach($errors->all() as $message)
            <p>{{ $message }}</p>
          @endforeach
        </div>
      @endif
      <form action="{{ route('register') }}" method="POST">
      @csrf
        <h3>メールアドレス</h3>
        <div class="register-pass-address-wrap">
          <input type="text" class="register-pass-address" id="email" name="email" value="{{ old('email') }}">
        </div>
        <h3>ユーザー名</h3>
        <div class="register-pass-password-wrap">
          <input type="text" class="register-pass-password" id="name" name="name" value="{{ old('name') }}">
        </div>
        <h3>パスワード</h3>
        <div class="register-pass-password-wrap">
          <input type="password" class="register-pass-password" id="password" name="password">
        </div>
        <h3>パスワード (確認)</h3>
        <div class="register-pass-password-wrap">
          <input type="password" class="register-pass-password" id="password-confirm" name="password_confirmation">
        </div>
        <div class="register-pass-add-btn-wrap">
          <input type="submit", value="送信", class="register-pass-add-btn">
        </div>
      </form>
    </div>
  </div>
</main>
@include('footer')
</div>
@endsection
