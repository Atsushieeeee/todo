<!DOCTYPE html>
<html lang="ja">
  @yield('head')
  @if(Auth::check())
  <script>
    document.getElementById('logout').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('logout-form').submit();
    });
  </script>
  @endif
<body>
  @yield('header')
  @yield('content')
  @yield('footer')
</body>
</html>