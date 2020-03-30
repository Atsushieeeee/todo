<header>
  <div class="header-wrap">
    <div class="header-left">
      <div class="site_title_header">
        <img src="{{{asset('img/36todo.png')}}}" alt="" width="150px" height="60px">
      </div>
    </div>
    <div class="header-right">
      <div class="header-right-info">
        @if(Auth::check())
        <div id="nav-drawer-user">
          <input id="nav-input-user" type="checkbox" class="nav-unshown">
          <label id="nav-open-user" for="nav-input-user">        
            <i class="fas fa-user-circle"></i>
          </label>
          <label class="nav-unshown" id="nav-close-user" for="nav-input-user"></label>
          <div id="nav-content-user">
            <div class="nav-content-user-top">
              <div class="nav-welcome">
                <p>ようこそ<br>{{ Auth::user()->name }}さん</p>
              </div>
            </div>
            <div class="nav-content-user-bottom">
              <div class="nav-logout">
                <i class="fas fa-door-open"></i>
                <a href="#" id="logout" class="header-right-info-item">ログアウト</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      @else
        <a class="header-right-info-item" href="{{ route('login') }}">ログイン</a>
        <a class="header-right-info-item" href="{{ route('register') }}">会員登録</a>
      @endif
    </div>
</header>
