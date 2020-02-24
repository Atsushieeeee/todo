
$(function(){  

  $("#submit-task").click(function(){  
    
    // const test = document.getElementById("task-name").value
    const set = $('#time option:selected').val();
    const time = Number(set);
    // Cookies.set("name",test,{ expires: time });  
    // num1.innerHTML = Cookies.get("name");

    // Cookies.set("time",getLast(),{expires : time});

    // settime.innerHTML = Cookies.get("time");

    if (Cookies.get("setTime1") == null){
      Cookies.set("setTime1", getLast(),{ expires: time })
      settime1.innerHTML = Cookies.get("setTime1")
      $("#settime1").show();
      // const html1 = '<p id=settime1">' + Cookies.get("setTime1") + '<button id="delete" value="削除">削除</button></p>';
      // $('.main-task-info-time').append(html1);
    }else if(Cookies.get("setTime2") == null){
      Cookies.set("setTime2", getLast(),{ expires: time })
      settime2.innerHTML = Cookies.get("setTime2")
      $("#settime2").show();
      // const html2 = '<p id="settime2">' + Cookies.get("setTime2") + '<button id="delete" value="削除">削除</button></p>';
      // $('.main-task-info-time').append(html2);
    }else{
      Cookies.set("setTime3", getLast(),{ expires: time })
      settime3.innerHTML = Cookies.get("setTime3")
      $("#settime3").show();
      // const html3 = '<p id="settime3">' + Cookies.get("setTime3") + '<button id="delete" value="削除">削除</button></p>';
      // $('.main-task-info-time').append(html3);
    }

    function getLast() {
      var now = new Date();
      var year = now.getFullYear();
      var mon = now.getMonth()+1;
      if (now.getHours() < "12" && time == 0.5){
        var hour = now.getHours() + 12
        var day = now.getDate()
      }else if (now.getHours() < "12" && time == 1){
        var hour = now.getHours()
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
      }else if (now.getHours() < "12" && time == 1.5){
        var hour = now.getHours() +  12
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "2"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 2
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "2"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 2
          }
        }
      }else if (now.getHours() > "12" && time == 0.5){
        var hour = now.getHours() - 12
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }
      }else if (now.getHours() > "12" && time == 1){
        var hour = now.getHours()
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 1
          }
        }
      }else if (now.getHours() > "12" && time == 1.5){
        var hour = now.getHours() - 12
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "2"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 2
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "2"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "1"
          }else{
            var day = now.getDate() + 2
          }
        }
      }
      var min = now.getMinutes();

      var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" ; 
      return s;
    }
    const task = document.getElementById("task-name").value
    if (Cookies.get("taskName1") == null){
      Cookies.set("taskName1", task,{ expires: time })
      const html1 = '<p id="cookieTask1">' + Cookies.get("taskName1") + '<button id="delete" value="削除">削除</button></p>';
      $('.main-task-info-add').append(html1);
    }else if(Cookies.get("taskName2") == null){
      Cookies.set("taskName2", task,{ expires: time })
      const html2 = '<p id="cookieTask2">' + Cookies.get("taskName2") + '<button id="delete" value="削除">削除</button></p>';
      $('.main-task-info-add').append(html2);
    }else{
      Cookies.set("taskName3", task,{ expires: time })
      const html3 = '<p id="cookieTask3">' + Cookies.get("taskName3") + '<button id="delete" value="削除">削除</button></p>';
      $('.main-task-info-add').append(html3);
    }
    
    
  })  
      if (Cookies.get("taskName1") != null){
        cookieTask1.innerHTML = '<p id="cookieTask-text1">' + Cookies.get("taskName1") + '</p>' + '<button class="delete-task1" id="delete" value="削除">削除</button>';
        $("#cookieTask1").show();
      }else{
          $("#cookieTask1").hide();
      }
      if (Cookies.get("taskName2") != null){
          cookieTask2.innerHTML = '<p id="cookieTask-text2">' + Cookies.get("taskName2") + '</p>' + '<button class="delete-task2" id="delete" value="削除">削除</button>';
          $("#cookieTask2").show()
      }else{
          $("#cookieTask2").hide();
      }
      if (Cookies.get("taskName3") != null){
          cookieTask3.innerHTML = '<p id="cookieTask-text3">' + Cookies.get("taskName3") + '</p>' + '<button class="delete-task3" id="delete" value="削除">削除</button>';
          $("#cookieTask3").show();
      }else{
          $("#cookieTask3").hide();
      }

      if (Cookies.get("setTime1") != null){
        settime1.innerHTML = Cookies.get("setTime1")
        $("#settime1").show();
      }else{
          $("#settime1").hide();
      }
      if (Cookies.get("setTime2") != null){
        settime2.innerHTML = Cookies.get("setTime2")
        $("#settime2").show()
      }else{
          $("#settime2").hide();
      }
      if (Cookies.get("setTime3") != null){
        settime3.innerHTML = Cookies.get("setTime3")
        $("#settime3").show();
      }else{
          $("#settime3").hide();
      }

  // if (Cookies.get("taskName1") != null){
  //     settime.innerHTML = Cookies.get("time");
  // }else{
  //     $("settime").hide();
  // }


  $('#delete').click(function(){
    Cookies.remove("name");
    Cookies.remove("time");
    num1.innerHTML = "";
    settime.innerHTML = "";
    location.reload();
  })
  // if (Cookies.get("name") != null){
  //   $(".main-task-info-add-left").remove();
  //   $("#time").remove();
  // }

  
})

// フォルダ追加機能
$(function(){
  // フォルダ追加を押した場合にCookieが保存される
  $("#submit-folder").click(function(){
    const folder = document.getElementById("folder-name").value
    // フォルダ追加部分
    if (Cookies.get("folderName1") == null){
      Cookies.set("folderName1", folder)
      const html1 = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder1").show();
      $('#cookieFolder1').append(html1);
    }else if(Cookies.get("folderName2") == null){
      Cookies.set("folderName2", folder)
      const html2 = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder2").show();
      $('#cookieFolder2').append(html2);
    }else{
      Cookies.set("folderName3", folder)
      const html3 = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder3").show();
      $('#cookieFolder3').append(html3);
    } 
    // フォルダ追加終わり

    // フォルダ追加後にページ更新せずに削除する場合
    $('.delete-folder1').click(function(){
      Cookies.remove("folderName1");
      cookieFolder1.innerHTML = "";
      $("#cookieFolder1").hide();
    });
    $('.delete-folder2').click(function(){
      Cookies.remove("folderName2");
      cookieFolder2.innerHTML = "";
      $("#cookieFolder2").hide();
    });
    $('.delete-folder3').click(function(){
      Cookies.remove("folderName3");
      cookieFolder3.innerHTML = "";
      $("#cookieFolder3").hide();
    });
    // 削除部分終わり

  })
  // 終わり

  // フォルダ追加を押さない場合でもCookieがあれば表示される
  if (Cookies.get("folderName1") != null){
      cookieFolder1.innerHTML = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder1").show();
  }else{
      $("#cookieFolder1").hide();
  }
  if (Cookies.get("folderName2") != null){
      cookieFolder2.innerHTML = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder2").show();
  }else{
      $("#cookieFolder2").hide();
  }
  if (Cookies.get("folderName3") != null){
      cookieFolder3.innerHTML = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除">削除</button>';
      $("#cookieFolder3").show();
  }else{
      $("#cookieFolder3").hide();
  }
  // フォルダ追加終わり

  // フォルダ削除部
  $('.delete-folder1').click(function(){
    Cookies.remove("folderName1");
    location.reload();
  })
  $('.delete-folder2').click(function(){
    Cookies.remove("folderName2");
    location.reload();
  });
  $('.delete-folder3').click(function(){
    Cookies.remove("folderName3");
    location.reload();
  });
  // フォルダ追加機能終わり
  
})