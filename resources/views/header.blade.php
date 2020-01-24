<script>
  document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('logout-form').submit();
  });
</script>

<header>
  <div class="header-wrap">
    <div class="header-left">
      <a href="{{url('/')}}">
        <h1>todo app</h1>
      </a>  
    </div>
    <div class="header-right">
      <div class="header-right-info">
        <div class="header-login">
        @if(Auth::check())
        <span class="my-navbar-item">ようこそ, {{ Auth::user()->name }}さん</span>
        ｜
        <a href="#" id="logout" class="my-navbar-item">ログアウト</a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
        </form>
        @else
          <a class="my-navbar-item" href="{{ route('login') }}">ログイン</a>
          ｜
          <a class="my-navbar-item" href="{{ route('register') }}">会員登録</a>
        @endif
      </div>
    </div>
  </div>
</header>
