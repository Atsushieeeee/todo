@extends('layouts.common')
@include('head')
@include('header')
@section('content')
<main>
  <div class="reset-pass-wrap">
    <div class="reset-pass-content">
      <div class="reset-pass-header">
        <h2>パスワード再発行</h2>
      </div>
      <h3>メールアドレス</h3>
      <div class="reset-pass-address-wrap">
        <input type="text" class="reset-pass-address">
      </div>
      <h3>新しいパスワード</h3>
      <div class="reset-pass-password-wrap">
        <input type="text" class="reset-pass-password">
      </div>
      <h3>新しいパスワード (確認)</h3>
      <div class="reset-pass-password-wrap">
        <input type="text" class="reset-pass-password">
      </div>
      <div class="reset-pass-add-btn-wrap">
        <input type="button", value="送信", class="reset-pass-add-btn">
      </div>
    </div>
  </div>
</main>
@include('footer')
@endsection
