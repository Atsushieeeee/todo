@extends('layouts.common')
@include('head')
<div class="container">
@include('header')
@section('content')
<main>
  <div class="reset-pass-wrap">
    <div class="reset-pass-content">
      <div class="reset-pass-header">
        <h2>パスワード再発行</h2>
      </div>
        @if($errors->any())
          <div class="alert alert-danger">
            @foreach($errors->all() as $message)
              <p>{{ $message }}</p>
            @endforeach
          </div>
        @endif
      <form action="{{ route('password.update') }}" method="POST">
              @csrf
        <input type="hidden" name="token" value="{{ $token }}" >
        <h3>メールアドレス</h3>
        <div class="reset-pass-address-wrap">
          <input type="text" class="reset-pass-address" name="email" value="{{ old('email') }}">
        </div>
        <h3>新しいパスワード</h3>
        <div class="reset-pass-password-wrap">
          <input type="text" class="reset-pass-password" name="password">
        </div>
        <h3>新しいパスワード (確認)</h3>
        <div class="reset-pass-password-wrap">
          <input type="text" class="reset-pass-password" name="password_confirmation">
        </div>
        <div class="reset-pass-add-btn-wrap">
          <button type="submit" class="reset-pass-add-btn">送信</button>
        </div>
      </form>
    </div>
  </div>
</main>
@include('footer')
</div>
@endsection
