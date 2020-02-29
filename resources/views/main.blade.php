@extends('layouts.common')
@include('head')
@include('header')
@section('content')
@csrf
<main>
  <div class="main36-wrap">
    <div class="main-up">
      <div class="main-content">
        <div class="main-folder">
          <div class="main-folder-header">
            <h2>フォルダ</h2>
          </div>
          <div class="main36-folder-btn">
            <input type="text" name="name" id="folder36-name" value="" placeholder="フォルダを追加する">
            <input type="submit" value="追加" id="submit36-folder">
          </div>
          <div class="main-folder-list">
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="cookie36test"></div> -->

    <div class="main-down">
      <div class="tabs">
      <input id="all" type="radio" name="tab_item" checked>
      <label class="tab_item" id="tab1" for="all"><div id="tab_name1"></div></label>
      <input id="programming" type="radio" name="tab_item">
      <label class="tab_item" id="tab2" for="programming"><div id="tab_name2"></div></label>
      <input id="design" type="radio" name="tab_item">
      <label class="tab_item" id="tab3" for="design"><div id="tab_name3"></div></label>
      <div class="tab_content" id="all_content">
      <div class="main-content" id="content1">
        <div class="main-task">
          <div class="main36-task-add">
            <input type="text" name="name" id="task-name1" value="" placeholder="タスクを追加する">
            <input type="submit" value="追加" id="submit-task1" class="set">
          </div>
          <div class="date">
            <select name="" id="time1">
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
                <div id="settime4" class="hide"></div>
                <div id="settime5" class="hide"></div>
              </div>
            <div class="main-task-info-list">
              <div class="main-task-info-add">
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
    <div class="tab_content" id="programming_content">
      <div class="main-content" id="content2">
          <div class="main-task">
            <div class="main36-task-add">
              <input type="text" name="name" id="task-name2" value="" placeholder="タスクを追加する">
              <input type="submit" value="追加" id="submit-task2" class="set">
            </div>
            <div class="date">
              <select name="" id="time2">
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
                  <div id="settime6" class="hide"></div>
                  <div id="settime7" class="hide"></div>
                  <div id="settime8" class="hide"></div>
                  <div id="settime9" class="hide"></div>
                  <div id="settime10" class="hide"></div>
                </div>
              <div class="main-task-info-list">
                <div class="main-task-info-add">
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
    <div class="tab_content" id="design_content">
      <div class="main-content" id="content3">
          <div class="main-task">
            <div class="main36-task-add">
              <input type="text" name="name" id="task-name3" value="" placeholder="タスクを追加する">
              <input type="submit" value="追加" id="submit-task3" class="set">
            </div>
            <div class="date">
              <select name="" id="time3">
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
                  <div id="settime11" class="hide"></div>
                  <div id="settime12" class="hide"></div>
                  <div id="settime13" class="hide"></div>
                  <div id="settime14" class="hide"></div>
                  <div id="settime15" class="hide"></div>
                </div>
              <div class="main-task-info-list">
                <div class="main-task-info-add">
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
</main>

@include('footer')
@endsection

