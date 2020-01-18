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
          <!-- ユーザーのログイン状態によって変更 -->
          <a href="{{url('/login')}}">
            <p>ログイン</p>
          </a>  
        </div>
          <!-- ユーザーのログイン状態によって変更 -->
        <div class="header-logout">
          <p>ログアウト</p>
        </div>
      </div>
    </div>
  </div>
</header>
