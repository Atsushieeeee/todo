<header>
  <div class="header-wrap">
    <div class="header-left">
      <div class="site_title_header">
        <img src="img/36todo.png" alt="" width="150px" height="60px">
      </div>
    </div>
    <div class="header-right">
      <div class="header-right-info">
        @if(Auth::check())
        <span class="header-right-info-item">ようこそ, {{ Auth::user()->name }}さん</span>
        ｜
        <a href="#" id="logout" class="header-right-info-item">ログアウト</a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
        </form>
        @else
          <a class="header-right-info-item" href="{{ route('login') }}">ログインして利用する → ログイン</a>
          ｜
          <a class="header-right-info-item" href="{{ route('register') }}">会員登録</a>
        @endif
    </div>
  </div>
</header>
