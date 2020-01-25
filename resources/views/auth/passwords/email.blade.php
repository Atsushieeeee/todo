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
      @if (session('status'))
              <div class="alert alert-success" role="alert">
                {{ session('status') }}
              </div>
            @endif
            @if($errors->any())
              <div class="alert alert-danger">
                @foreach($errors->all() as $message)
                  <p>{{ $message }}</p>
                @endforeach
              </div>
            @endif
        <form action="{{ route('password.email') }}" method="POST">
          @csrf
          <h3>メールアドレス</h3>
          <div class="forget-password-address-wrap">
            <input type="text" class="forget-password-address" id="email" name="email">
          </div>
          <div class="forget-password-add-btn-wrap">
            <button type="submit" class="forget-password-add-btn">再発行リンクを送る</button>
          </div>
      </form>
    </div>
  </div>
</main>
@include('footer')
@endsection
