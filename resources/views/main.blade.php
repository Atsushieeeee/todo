@extends('layouts.common')
@include('head')
@include('header')
@section('content')
@csrf
<main>
  <div class="main-wrap">
    <div class="main-left">
      <div class="main-content">
        <div class="main-folder">
          <div class="main-folder-header">
            <h2>フォルダ</h2>
          </div>
          <div class="main36-folder-btn">
            <input type="text" name="name" id="folder-name" value="" placeholder="フォルダを追加する">
            <input type="submit" value="追加" id="submit-folder">
          </div>
          <div class="main-folder-list">
              <div id="cookieFolder1" class="hide"></div>
              <div id="cookieFolder2" class="hide"></div>
              <div id="cookieFolder3" class="hide"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="main-content">
        <div class="main-task">
          <div class="main-task-header">
            <h2>タスク</h2>
          </div>
          <div class="main36-task-add">
            <input type="text" name="name" id="task-name" value="" placeholder="タスクを追加する">
            <input type="submit" value="追加" id="submit-task">
        </div>
          <div class="date">
            <select name="" id="time">
              <option value="1.5">36</option>
              <option value="1">24</option>
              <option value="0.5">12</option>
            </select>
          </div>
          <div class="main-task-info">
            <div class="main-task-info-header">
              <div class="main-task-info-header-left">
                <h3>タイトル</h3>
              </div>
              <div class="main-task-info-header-right">
                <h3>状態</h3>
                <h3>期限</h3>
              </div>
            </div>
              <div class="main-task-info-time">
                <div id="settime1" class="hide"></div>
                <div id="settime2" class="hide"></div>
                <div id="settime3" class="hide"></div>
              </div>
            <div class="main-task-info-list">
              <div class="main-task-info-add">
                <div id="cookieTask1" class="hide"></div>
                <div id="cookieTask2" class="hide"></div>
                <div id="cookieTask3" class="hide"></div>

                  <!-- <div class="main-task-info-add-left">
                  </div>
                  <div id="num1"></div>
                  <div class="main-task-info-add-right">
                    <div class="status">
                      </div>
                      <div id="settime"></div>
                      <input type="submit" value="削除" id="delete">
                    </div>
                  </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

@include('footer')
@endsection

