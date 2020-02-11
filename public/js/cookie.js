
$(function(){  

  $("#submit-task").click(function(){  
    
    const test = document.getElementById("name").value
    const set = $('#time option:selected').val();
    const time = Number(set);
    Cookies.set("name",test,{ expires: time });  
    num1.innerHTML = Cookies.get("name");

    Cookies.set("time",getLast(),{expires : time});

    settime.innerHTML = Cookies.get("time");
    location.reload();
    function getLast() {
      var now = new Date();
      var year = now.getFullYear();
      var mon = now.getMonth()+1;
      var day = now.getDate();
      var hour = now.getHours() + time;
      var min = now.getMinutes();

      var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" ; 
      return s;
    }
    
  })  
  if (Cookies.get("name") != null){
      num1.innerHTML = Cookies.get("name");
      settime.innerHTML = Cookies.get("time");
  }else{
      $("num1").hide();
      $("settime").hide();
  }
  
  $('#delete').click(function(){
    Cookies.remove("name");
    Cookies.remove("time");
    num1.innerHTML = "";
    settime.innerHTML = "";
    location.reload();
  })
  if (Cookies.get("name") != null){
    $(".main-task-info-add-left").remove();
    $("#time").remove();
  }

  
})

// フォルダ追加機能
$(function(){
  // フォルダ追加を押した場合にCookieが保存される
  $("#submit-folder").click(function(){
    const folder = document.getElementById("folder-name").value
    if (Cookies.get("folderName1") == null){
      Cookies.set("folderName1", folder)
      const html1 = '<p id="cookieFolder1">' + Cookies.get("folderName1") + '<button class="delete-folder" value="削除">削除</button></p>';
      $('.main-folder-list').append(html1);
      location.reload();
    }else if(Cookies.get("folderName2") == null){
      Cookies.set("folderName2", folder)
      const html2 = '<p id="cookieFolder2">' + Cookies.get("folderName2") + '<button class="delete-folder" value="削除">削除</button></p>';
      $('.main-folder-list').append(html2);
      location.reload();
    }else{
      Cookies.set("folderName3", folder)
      const html3 = '<p id="cookieFolder3">' + Cookies.get("folderName3") + '<button class="delete-folder" value="削除">削除</button></p>';
      $('.main-folder-list').append(html3);
      location.reload();
    } 
  })
  // 終わり

  // フォルダ追加を押さない場合でもCookieがあれば表示される
  if (Cookies.get("folderName1") != null){
      cookieFolder1.innerHTML = '<p id="cookieFolder1">' + Cookies.get("folderName1") + '<button class="delete-folder1" id="delete-folder" value="削除">削除</button></p>';
      $("#cookieFolder1").show();
  }else{
      $("#cookieFolder1").hide();
  }
  if (Cookies.get("folderName2") != null){
      cookieFolder2.innerHTML = '<p id="cookieFolder2">' + Cookies.get("folderName2") + '<button class="delete-folder2" id="delete-folder" value="削除">削除</button></p>';
      $("#cookieFolder2").show();
  }else{
      $("#cookieFolder2").hide();
  }
  if (Cookies.get("folderName3") != null){
      cookieFolder3.innerHTML = '<p id="cookieFolder3">' + Cookies.get("folderName3") + '<button class="delete-folder3" id="delete-folder" value="削除">削除</button></p>';
      $("#cookieFolder3").show();
  }else{
      $("#cookieFolder3").hide();
  }
  // 終わり

  // 削除部
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
})
// フォルダ追加機能終わり