@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="forget-password-wrap">
    <div class="forget-password-content">
      <div class="forget-password-header">
        <h2>パスワード再発行</h2>
      </div>
      <h3>メールアドレス</h3>
      <div class="forget-password-address-wrap">
        <input type="text" class="forget-password-address">
      </div>
      <div class="forget-password-add-btn-wrap">
        <input type="button", value="送信", class="forget-password-add-btn">
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection
