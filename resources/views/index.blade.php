@extends('layouts.common')
@include('head')
@include('header')

@section('content')
<main>
  <div class="main-wrap">
    <div class="main-left">
      <div class="main-content">
        <div class="main-folder">
          <div class="main-folder-header">
            <h2>フォルダ</h2>
          </div>
          <div class="main-folder-btn">
            <a href="{{url('/add-folder')}}">
              <input type="button", value="フォルダを追加する", class="folder-add-btn">
            </a>
          </div>
          <div class="main-folder-list">
            <div class="main-folder-add">
              <p>プライベート</p>
            </div>
            <div class="main-folder-add">
              <p>仕事</p>
            </div>
            <div class="main-folder-add">
              <p>旅行</p>
            </div>
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
            <a href="{{url('/add-task')}}">
              <input type="button", value="タスクを追加する", class="task-add-btn">
            </a>
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
                  <p>サンプルタスクその1</p>
                </div>
                <div class="main-task-info-add-right">
                  <div class="status">
                    <p>着手中</p>
                  </div>
                  <div class="date">
                    <p>2019/1/1</p>
                  </div>
                  <div class="edit">
                    <a href="{{url('/edit-task')}}">編集</a>
                  </div>
                </div>
              </div>
              <div class="main-task-info-add">
                <div class="main-task-info-add-left">
                  <p>サンプルタスクその2</p>
                </div>
                <div class="main-task-info-add-right">
                  <div class="status">
                    <p>未着手</p>
                  </div>
                  <div class="date">
                    <p>2019/1/2</p>
                  </div>
                  <div class="edit">
                    <a href="{{url('/edit-task')}}">編集</a>
                  </div>
                </div>
              </div>  
              <div class="main-task-info-add">
                <div class="main-task-info-add-left">
                  <p>サンプルタスクその3</p>
                </div>
                <div class="main-task-info-add-right">
                  <div class="status">
                    <p>完了</p>
                  </div>
                  <div class="date">
                    <p>2019/1/3</p>
                  </div>
                  <div class="edit">
                    <a href="{{url('/edit-task')}}">編集</a>
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

