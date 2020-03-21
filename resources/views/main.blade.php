@extends('layouts.common')
@include('head')
<div class="overlay">
  <div class="btn_area">
    <div class="site_title">
      <img src="img/36todo.png" alt="">
    </div>
    <div class="site_info">
      <div class="site_info_text">
        <li>このサイトではCookieを利用しています。</li>
        <li>ブラウザでCookieの使用、保存期間などを個人で設定している場合<br>正常に機能しない場合がございます。</li>
      </div>
    </div>
    <div class="site_use">
      <button>利用する</button>
    </div>
  </div>
</div>
@section('content')
@csrf
<main>
  <div class="main36-wrap">
    @include('header')
    <div class="main-up">
      <div class="main-content">
        <div class="main-folder">
          <!-- <div class="main-folder-header">
            <h2>フォルダ</h2>
          </div> -->
          <div class="main36-folder-btn">
            <input type="text" name="name" id="folder36-name" value="" placeholder="フォルダを追加する">
            <input type="submit" value="追加" id="submit36-folder">
          </div>
          <div class="main-folder-list">
          </div>
        </div>
      </div>
    </div>
    <div class="main-down">
      <div class="tabs">
      <input id="tab_content1" type="radio" name="tab_item" checked>
      <label class="tab_item" id="tab1" for="tab_content1"><div id="tab_name1"></div></label>
      <input id="tab_content2" type="radio" name="tab_item">
      <label class="tab_item" id="tab2" for="tab_content2"><div id="tab_name2"></div></label>
      <input id="tab_content3" type="radio" name="tab_item">
      <label class="tab_item" id="tab3" for="tab_content3"><div id="tab_name3"></div></label>
      <div class="tab_content" id="tab_content1_sub">
      <div class="main-content" id="content1">
        <div class="main-task">
          <div class="main36-task-add">
            <input type="text" name="name" class="task36-name" id="task-name1" value="" placeholder="タスクを追加する">
            <div class="main36-task-add-down">
              <div class="select_time" id="time1">
                <input type="radio" name="hr" id="select1" value="1.5" checked="">
                <label for="select1">36hr</label>
                <input type="radio" name="hr" id="select2" value="1">
                <label for="select2">24hr</label>
                <input type="radio" name="hr" id="select3" value="0.5">
                <label for="select3">12hr</label>
              </div>
              <input type="submit" value="追加" class="task36-submit" id="submit-task1" class="set">
            </div>
          </div>
          <div class="main-task-info">
            <div class="main36-task-info-header">
              <div class="main-task-info-header-title">
                <h3>タイトル</h3>
              </div>
              <div class="main-task-info-header-settime">
                <h3>期限</h3>
              </div>
              <div class="main-task-info-header-delete">
                <h3>削除</h3>
              </div>
            </div>
            <div class="main36-task-info-list">
              <div id="main_task_info_add">
                <div id="cookieTask1" class="hide"></div>
                <div id="cookieTask2" class="hide"></div>
                <div id="cookieTask3" class="hide"></div>
                <div id="cookieTask4" class="hide"></div>
                <div id="cookieTask5" class="hide"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    <div class="tab_content" id="tab_content2_sub">
      <div class="main-content" id="content2">
          <div class="main-task">
          <div class="main36-task-add">
            <input type="text" name="name" class="task36-name" id="task-name2" value="" placeholder="タスクを追加する">
            <div class="main36-task-add-down">
              <div class="select_time" id="time2">
                <input type="radio" name="hr" id="select4" value="1.5" checked="">
                <label for="select4">36hr</label>
                <input type="radio" name="hr" id="select5" value="1">
                <label for="select5">24hr</label>
                <input type="radio" name="hr" id="select6" value="0.5">
                <label for="select6">12hr</label>
              </div>
              <input type="submit" value="追加" class="task36-submit" id="submit-task2" class="set">
            </div>
          </div>
            <div class="main-task-info">
            <div class="main36-task-info-header">
              <div class="main-task-info-header-title">
                <h3>タイトル</h3>
              </div>
              <div class="main-task-info-header-settime">
                <h3>期限</h3>
              </div>
              <div class="main-task-info-header-delete">
                <h3>削除</h3>
              </div>
            </div>
              <div class="main36-task-info-list">
                <div id="main_task_info_add">
                  <div id="cookieTask6" class="hide"></div>
                  <div id="cookieTask7" class="hide"></div>
                  <div id="cookieTask8" class="hide"></div>
                  <div id="cookieTask9" class="hide"></div>
                  <div id="cookieTask10" class="hide"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="tab_content" id="tab_content3_sub">
      <div class="main-content" id="content3">
          <div class="main-task">
          <div class="main36-task-add">
            <input type="text" name="name" class="task36-name" id="task-name3" value="" placeholder="タスクを追加する">
            <div class="main36-task-add-down">
              <div class="select_time" id="time3">
                <input type="radio" name="hr" id="select7" value="1.5" checked="">
                <label for="select7">36hr</label>
                <input type="radio" name="hr" id="select8" value="1">
                <label for="select8">24hr</label>
                <input type="radio" name="hr" id="select9" value="0.5">
                <label for="select9">12hr</label>
              </div>
              <input type="submit" value="追加" class="task36-submit" id="submit-task3" class="set">
            </div>
          </div>
            <div class="main-task-info">
            <div class="main36-task-info-header">
              <div class="main-task-info-header-title">
                <h3>タイトル</h3>
              </div>
              <div class="main-task-info-header-settime">
                <h3>期限</h3>
              </div>
              <div class="main-task-info-header-delete">
                <h3>削除</h3>
              </div>
            </div>
              <div class="main36-task-info-list">
                <div id="main_task_info_add">
                  <div id="cookieTask11" class="hide"></div>
                  <div id="cookieTask12" class="hide"></div>
                  <div id="cookieTask13" class="hide"></div>
                  <div id="cookieTask14" class="hide"></div>
                  <div id="cookieTask15" class="hide"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
@include('footer')
</div>
</main>

@endsection

