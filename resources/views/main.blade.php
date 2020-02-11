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
          <div class="main-folder-btn">
            <a href="test" class="folder-add-btn">
              フォルダを追加する
            </a>
            <input type="text" name="name" id="folder-name" value="" placeholder="フォルダを追加する">
            <input type="submit" value="追加" id="submit-folder">
          </div>
          <div class="main-folder-list">
              <!-- <a href="" class="main-folder-add">
                <p class="main-folder-add-title">TEST</p>
              </a> -->
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
          <div class="main-task-btn">
            
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
            <div class="main-task-info-list">
              <div class="main-task-info-add">
                  <div class="main-task-info-add-left">
                    <input type="text" name="name" id="name" value="">
                    <input type="submit" value="決定" id="submit-task">
                  </div>
                  <div id="num1"></div>
                  <div class="main-task-info-add-right">
                    <div class="status">
                      </div>
                      <div class="date">
                        <select name="" id="time">
                          <option value="36">36</option>
                          <option value="24">24</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <input type="submit" value="削除" id="delete">
                    </div>
                  </div>
                  <div id="settime"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

@include('footer')
@endsection

