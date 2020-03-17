$(function(){
  $(".overlay").show();
  Cookies.get('btnFlg') == 'on'?$(".overlay").hide():$(".overlay").show();
  $(".btn_area button").click(function(){
      $(".overlay").fadeOut();
      Cookies.set('btnFlg', 'on', { expires: 30,path: '/' }); //cookieの保存
  });
});

// ==========================================タスク追加機能==========================================
$(function(){  

  $("#submit-task1").click(function(){  

    const set = $('#time1 input[name="hr"]:checked').val();
    const time = Number(set);
    
    if (Cookies.get("setTime1") == null){
      Cookies.set("setTime1", getLast(),{ expires: time })
    }else if(Cookies.get("setTime2") == null){
      Cookies.set("setTime2", getLast(),{ expires: time })
    }else if(Cookies.get("setTime3") == null){
      Cookies.set("setTime3", getLast(),{ expires: time })
    }else if(Cookies.get("setTime4") == null){
      Cookies.set("setTime4", getLast(),{ expires: time })
    }else{
      Cookies.set("setTime5", getLast(),{ expires: time })
    }

    function getLast(){
  
        var now = new Date();
        var year = now.getFullYear();
        var mon = ("0" + (now.getMonth()+1)).slice(-2);
        if (now.getHours() < "12" && time == 0.5){
          var hour = ("0" + (now.getHours() + 12)).slice(-2);
          var day = ("0" + now.getDate()).slice(-2);
        }else if (now.getHours() < "12" && time == 1){
          var hour = ("0" + now.getHours()).slice(-2);
          if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
            if (now.getDate() == "30"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }else{
            if (now.getDate() == "31"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }
          // if もし月末日付だった場合に月を変える
          // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        }else if (now.getHours() < "12" && time == 1.5){
          var hour = ("0" + (now.getHours() +  12)).slice(-2);
          // if もし月末前日だった場合に月を変える
          // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
          if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
            if (now.getDate() == "30"){
              var day = now.getDate() == "02"
            }else if(now.getDate() == "29"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 2)).slice(-2);
            }
          }else{
            if (now.getDate() == "31"){
              var day = now.getDate() == "02"
            }else if(now.getDate() == "30"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 2)).slice(-2);
            }
          }
        }else if (now.getHours() > "12" && time == 0.5){
          var hour = ("0" + (now.getHours() - 12)).slice(-2);
          // if もし月末日付だった場合に月を変える
          // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
          if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
            if (now.getDate() == "30"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }else{
            if (now.getDate() == "31"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }
        }else if (now.getHours() > "12" && time == 1){
          var hour = ("0" + now.getHours()).slice(-2);
          // if もし月末日付だった場合に月を変える
          // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
          if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
            if (now.getDate() == "30"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }else{
            if (now.getDate() == "31"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 1)).slice(-2);
            }
          }
        }else if (now.getHours() > "12" && time == 1.5){
          var hour = ("0" + (now.getHours() - 12)).slice(-2);
          // if もし月末前日だった場合に月を変える
          // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
          if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
            if (now.getDate() == "30"){
              var day = now.getDate() == "02"
            }else if(now.getDate() == "29"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 2)).slice(-2);
            }
          }else{
            if (now.getDate() == "31"){
              var day = now.getDate() == "02"
            }else if(now.getDate() == "30"){
              var day = now.getDate() == "01"
            }else{
              var day = ("0" + (now.getDate() + 2)).slice(-2);
            }
          }
        }
        var min = ("0" + now.getMinutes()).slice(-2);
  
        var s = year + "-" + mon + "-" + day + " " + hour + ":" + min ; 
        return s;
    }

    function getLimit(){
      var mTime = limitTime.substring( 0, 4 ) + "-"  + limitTime.substring( 4, 6) + "-" + limitTime.substring( 6, 8 ) + " " + limitTime.substring( 8, 10 ) + ":" + limitTime.substring( 10, 12 );
      var m_now = moment()
      var m_limit = moment(mTime)
      var limit = "残り" + m_limit.diff(m_now,'hours') + "時間"
      return limit
    }

    const task = document.getElementById("task-name1").value
    if (Cookies.get("taskName1") == null){
      Cookies.set("taskName1", task,{ expires: time })
      var limitTime = (Cookies.get("setTime1")).replace(/[^0-9]/g, '');
      const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName1") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime1") +'</p><button class="delete-task1" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';  
      $("#cookieTask1").show();
      $('#cookieTask1').append(html1);
    }else if(Cookies.get("taskName2") == null){
      Cookies.set("taskName2", task,{ expires: time })
      var limitTime = (Cookies.get("setTime2")).replace(/[^0-9]/g, '');
      const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName2") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime2") +'</p><button class="delete-task2" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask2").show();
      $('#cookieTask2').append(html2);
    }else if(Cookies.get("taskName3") == null){
      Cookies.set("taskName3", task,{ expires: time })
      var limitTime = (Cookies.get("setTime3")).replace(/[^0-9]/g, '');
      const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName3") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime3") +'</p><button class="delete-task3" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask3").show();
      $('#cookieTask3').append(html3);
    }else if(Cookies.get("taskName4") == null){
      Cookies.set("taskName4", task,{ expires: time })
      var limitTime = (Cookies.get("setTime4")).replace(/[^0-9]/g, '');
      const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName4") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime4") +'</p><button class="delete-task4" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask4").show();
      $('#cookieTask4').append(html4);
    }else if(Cookies.get("taskName5") == null){
      Cookies.set("taskName5", task,{ expires: time })
      var limitTime = (Cookies.get("setTime5")).replace(/[^0-9]/g, '');
      const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName5") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime5") +'</p><button class="delete-task5" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask5").show();
      $('#cookieTask5').append(html5);
    }else{
      !confirm("これ以上タスクを追加出来ません")
    }
    
    // タスク追加後にページ更新せずに削除する場合
    $('.delete-task1').click(function(){
      Cookies.remove("taskName1");
      Cookies.remove("setTime1");
      cookieTask1.innerHTML = "";
      $("#cookieTask1").hide();
    });
    $('.delete-task2').click(function(){
      Cookies.remove("taskName2");
      Cookies.remove("setTime2");
      cookieTask2.innerHTML = "";
      $("#cookieTask2").hide();
    });
    $('.delete-task3').click(function(){
      Cookies.remove("taskName3");
      Cookies.remove("setTime3");
      cookieTask3.innerHTML = "";
      $("#cookieTask3").hide();
    });
    $('.delete-task4').click(function(){
      Cookies.remove("taskName4");
      Cookies.remove("setTime4");
      cookieTask4.innerHTML = "";
      $("#cookieTask4").hide();
    });
    $('.delete-task5').click(function(){
      Cookies.remove("taskName5");
      Cookies.remove("setTime5");
      cookieTask5.innerHTML = "";
      $("#cookieTask5").hide();
    });

    // 削除部分終わり
    
  })  

  // *****************************************タスク2*****************************************
  $("#submit-task2").click(function(){  

    const set = $('#time2 input[name="hr"]:checked').val();
    const time = Number(set);
    
    if (Cookies.get("setTime6") == null){
      Cookies.set("setTime6", getLast(),{ expires: time })
    }else if(Cookies.get("setTime7") == null){
      Cookies.set("setTime7", getLast(),{ expires: time })
    }else if(Cookies.get("setTime8") == null){
      Cookies.set("setTime8", getLast(),{ expires: time })
    }else if(Cookies.get("setTime9") == null){
      Cookies.set("setTime9", getLast(),{ expires: time })
    }else{
      Cookies.set("setTime10", getLast(),{ expires: time })
    }

    function getLast(){
  
      var now = new Date();
      var year = now.getFullYear();
      var mon = ("0" + (now.getMonth()+1)).slice(-2);
      if (now.getHours() < "12" && time == 0.5){
        var hour = ("0" + (now.getHours() + 12)).slice(-2);
        var day = ("0" + now.getDate()).slice(-2);
      }else if (now.getHours() < "12" && time == 1){
        var hour = ("0" + now.getHours()).slice(-2);
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
      }else if (now.getHours() < "12" && time == 1.5){
        var hour = ("0" + (now.getHours() +  12)).slice(-2);
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 0.5){
        var hour = ("0" + (now.getHours() - 12)).slice(-2);
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 1){
        var hour = ("0" + now.getHours()).slice(-2);
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 1.5){
        var hour = ("0" + (now.getHours() - 12)).slice(-2);
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }
      }
      var min = ("0" + now.getMinutes()).slice(-2);

      var s = year + "-" + mon + "-" + day + " " + hour + ":" + min ; 
      return s;
  }

  function getLimit(){
    var mTime = limitTime.substring( 0, 4 ) + "-"  + limitTime.substring( 4, 6) + "-" + limitTime.substring( 6, 8 ) + " " + limitTime.substring( 8, 10 ) + ":" + limitTime.substring( 10, 12 );
    var m_now = moment()
    var m_limit = moment(mTime)
    var limit = "残り" + m_limit.diff(m_now,'hours') + "時間"
    return limit
  }

    // ---------------------------------日付の取得終わり---------------------------------

    const task = document.getElementById("task-name2").value
    if (Cookies.get("taskName6") == null){
      Cookies.set("taskName6", task,{ expires: time })
      var limitTime = (Cookies.get("setTime6")).replace(/[^0-9]/g, '');
      const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName6") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime6") +'</p><button class="delete-task6" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask6").show();
      $('#cookieTask6').append(html1);
    }else if(Cookies.get("taskName7") == null){
      Cookies.set("taskName7", task,{ expires: time })
      var limitTime = (Cookies.get("setTime7")).replace(/[^0-9]/g, '');
      const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName7") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime7") +'</p><button class="delete-task7" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask7").show();
      $('#cookieTask7').append(html2);
    }else if(Cookies.get("taskName8") == null){
      Cookies.set("taskName8", task,{ expires: time })
      var limitTime = (Cookies.get("setTime8")).replace(/[^0-9]/g, '');
      const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName8") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime8") +'</p><button class="delete-task8" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask8").show();
      $('#cookieTask8').append(html3);
    }else if(Cookies.get("taskName9") == null){
      Cookies.set("taskName9", task,{ expires: time })
      var limitTime = (Cookies.get("setTime9")).replace(/[^0-9]/g, '');
      const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName9") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime9") +'</p><button class="delete-task9" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask9").show();
      $('#cookieTask9').append(html4);
    }else if(Cookies.get("taskName10") == null){
      Cookies.set("taskName10", task,{ expires: time })
      var limitTime = (Cookies.get("setTime10")).replace(/[^0-9]/g, '');
      const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName10") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime10") +'</p><button class="delete-task10" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask10").show();
      $('#cookieTask10').append(html5);
    }else{
    !confirm("これ以上タスクを追加出来ません")
  }

    
    // タスク追加後にページ更新せずに削除する場合
    $('.delete-task6').click(function(){
      Cookies.remove("taskName6");
      Cookies.remove("setTime6");
      cookieTask6.innerHTML = "";
      $("#cookieTask6").hide();
    });
    $('.delete-task7').click(function(){
      Cookies.remove("taskName7");
      Cookies.remove("setTime7");
      cookieTask7.innerHTML = "";
      $("#cookieTask7").hide();
    });
    $('.delete-task8').click(function(){
      Cookies.remove("taskName8");
      Cookies.remove("setTime8");
      cookieTask8.innerHTML = "";
      $("#cookieTask8").hide();
    });
    $('.delete-task9').click(function(){
      Cookies.remove("taskName9");
      Cookies.remove("setTime9");
      cookieTask9.innerHTML = "";
      $("#cookieTask9").hide();
    });
    $('.delete-task10').click(function(){
      Cookies.remove("taskName10");
      Cookies.remove("setTime10");
      cookieTask10.innerHTML = "";
      $("#cookieTask10").hide();
    });

    // 削除部分終わり
  })  

    // *****************************************タスク2*****************************************

    // *****************************************タスク3*****************************************


  $("#submit-task3").click(function(){  

    const set = $('#time3 input[name="hr"]:checked').val();
    const time = Number(set);
    
    if (Cookies.get("setTime11") == null){
      Cookies.set("setTime11", getLast(),{ expires: time })
    }else if(Cookies.get("setTime12") == null){
      Cookies.set("setTime12", getLast(),{ expires: time })
    }else if(Cookies.get("setTime13") == null){
      Cookies.set("setTime13", getLast(),{ expires: time })
    }else if(Cookies.get("setTime14") == null){
      Cookies.set("setTime14", getLast(),{ expires: time })
    }else{
      Cookies.set("setTime15", getLast(),{ expires: time })
    }

    function getLast(){
  
      var now = new Date();
      var year = now.getFullYear();
      var mon = ("0" + (now.getMonth()+1)).slice(-2);
      if (now.getHours() < "12" && time == 0.5){
        var hour = ("0" + (now.getHours() + 12)).slice(-2);
        var day = ("0" + now.getDate()).slice(-2);
      }else if (now.getHours() < "12" && time == 1){
        var hour = ("0" + now.getHours()).slice(-2);
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
      }else if (now.getHours() < "12" && time == 1.5){
        var hour = ("0" + (now.getHours() +  12)).slice(-2);
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 0.5){
        var hour = ("0" + (now.getHours() - 12)).slice(-2);
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 1){
        var hour = ("0" + now.getHours()).slice(-2);
        // if もし月末日付だった場合に月を変える
        // 2月4月6月9月11月は30日で+1されると次の月に切り替え　それ以外は31日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 1)).slice(-2);
          }
        }
      }else if (now.getHours() > "12" && time == 1.5){
        var hour = ("0" + (now.getHours() - 12)).slice(-2);
        // if もし月末前日だった場合に月を変える
        // 2月4月6月9月11月は29日で+1されると次の月に切り替え　それ以外は30日で切り替え
        if (now.getMonth()+1 == "2"||"4"||"6"||"9"||"11"){
          if (now.getDate() == "30"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "29"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }else{
          if (now.getDate() == "31"){
            var day = now.getDate() == "02"
          }else if(now.getDate() == "30"){
            var day = now.getDate() == "01"
          }else{
            var day = ("0" + (now.getDate() + 2)).slice(-2);
          }
        }
      }
      var min = ("0" + now.getMinutes()).slice(-2);

      var s = year + "-" + mon + "-" + day + " " + hour + ":" + min ; 
      return s;
  }

  function getLimit(){
    var mTime = limitTime.substring( 0, 4 ) + "-"  + limitTime.substring( 4, 6) + "-" + limitTime.substring( 6, 8 ) + " " + limitTime.substring( 8, 10 ) + ":" + limitTime.substring( 10, 12 );
    var m_now = moment()
    var m_limit = moment(mTime)
    var limit = "残り" + m_limit.diff(m_now,'hours') + "時間"
    return limit
  }

    // ---------------------------------日付の取得終わり---------------------------------

    const task = document.getElementById("task-name3").value
    if (Cookies.get("taskName11") == null){
      Cookies.set("taskName11", task,{ expires: time })
      var limitTime = (Cookies.get("setTime11")).replace(/[^0-9]/g, '');
      const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName11") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime11") +'</p><button class="delete-task11" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask11").show();
      $('#cookieTask11').append(html1);
    }else if(Cookies.get("taskName12") == null){
      Cookies.set("taskName12", task,{ expires: time })
      var limitTime = (Cookies.get("setTime12")).replace(/[^0-9]/g, '');
      const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName12") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime12") +'</p><button class="delete-task12" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask12").show();
      $('#cookieTask12').append(html2);
    }else if(Cookies.get("taskName13") == null){
      Cookies.set("taskName13", task,{ expires: time })
      var limitTime = (Cookies.get("setTime13")).replace(/[^0-9]/g, '');
      const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName13") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime13") +'</p><button class="delete-task13" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask13").show();
      $('#cookieTask13').append(html3);
    }else if(Cookies.get("taskName14") == null){
      Cookies.set("taskName14", task,{ expires: time })
      var limitTime = (Cookies.get("setTime14")).replace(/[^0-9]/g, '');
      const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName14") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime14") +'</p><button class="delete-task14" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask14").show();
      $('#cookieTask14').append(html4);
    }else if(Cookies.get("taskName15") == null){
      Cookies.set("taskName15", task,{ expires: time })
      var limitTime = (Cookies.get("setTime15")).replace(/[^0-9]/g, '');
      const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName15") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime15") +'</p><button class="delete-task15" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask15").show();
      $('#cookieTask15').append(html5);
    }else{
      !confirm("これ以上タスクを追加出来ません")
    }

    
    // タスク追加後にページ更新せずに削除する場合
    $('.delete-task11').click(function(){
      Cookies.remove("taskName11");
      Cookies.remove("setTime11");
      cookieTask11.innerHTML = "";
      $("#cookieTask11").hide();
    });
    $('.delete-task12').click(function(){
      Cookies.remove("taskName12");
      Cookies.remove("setTime12");
      cookieTask12.innerHTML = "";
      $("#cookieTask12").hide();
    });
    $('.delete-task13').click(function(){
      Cookies.remove("taskName13");
      Cookies.remove("setTime13");
      cookieTask13.innerHTML = "";
      $("#cookieTask13").hide();
    });
    $('.delete-task14').click(function(){
      Cookies.remove("taskName14");
      Cookies.remove("setTime14");
      cookieTask14.innerHTML = "";
      $("#cookieTask14").hide();
    });
    $('.delete-task15').click(function(){
      Cookies.remove("taskName15");
      Cookies.remove("setTime15");
      cookieTask15.innerHTML = "";
      $("#cookieTask15").hide();
    });

    // 削除部分終わり
  })  

    // *****************************************タスク3*****************************************




// タスク追加を押さない場合でもタスクが表示されるようにする
    function getLimit(){
      var mTime = limitTime.substring( 0, 4 ) + "-"  + limitTime.substring( 4, 6) + "-" + limitTime.substring( 6, 8 ) + " " + limitTime.substring( 8, 10 ) + ":" + limitTime.substring( 10, 12 );
      var m_now = moment()
      var m_limit = moment(mTime)
      var limit = "残り" + m_limit.diff(m_now,'hours') + "時間"
      return limit
    }

    if (Cookies.get("taskName1") != null){
      var limitTime = (Cookies.get("setTime1")).replace(/[^0-9]/g, '');
      const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName1") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime1") +'</p><button class="delete-task1" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';  
      $("#cookieTask1").show();
      $("#cookieTask1").append(html1);
    }else{
        $("#cookieTask1").hide();
    }
    if (Cookies.get("taskName2") != null){
      var limitTime = (Cookies.get("setTime2")).replace(/[^0-9]/g, '');
      const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName2") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime2") +'</p><button class="delete-task2" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
        $("#cookieTask2").show()
        $("#cookieTask2").append(html2);

    }else{
        $("#cookieTask2").hide();
    }
    if (Cookies.get("taskName3") != null){
      var limitTime = (Cookies.get("setTime3")).replace(/[^0-9]/g, '');
      const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName3") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime3") +'</p><button class="delete-task3" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
        $("#cookieTask3").show();
        $("#cookieTask3").append(html3);

    }else{
        $("#cookieTask3").hide();
    }
    if (Cookies.get("taskName4") != null){
      var limitTime = (Cookies.get("setTime4")).replace(/[^0-9]/g, '');
      const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName4") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime4") +'</p><button class="delete-task4" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask4").show();
      $("#cookieTask4").append(html4);

    }else{
        $("#cookieTask4").hide();
    }
    if (Cookies.get("taskName5") != null){
      var limitTime = (Cookies.get("setTime5")).replace(/[^0-9]/g, '');
      const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName5") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime5") +'</p><button class="delete-task5" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask5").show();
      $("#cookieTask5").append(html5);

    }else{
        $("#cookieTask5").hide();
    }
  
  // タスク削除部
  $('.delete-task1').click(function(){
    Cookies.remove("taskName1");
    Cookies.remove("setTime1");
    location.reload();
  })
  $('.delete-task2').click(function(){
    Cookies.remove("taskName2");
    Cookies.remove("setTime2");
    location.reload();
  });
  $('.delete-task3').click(function(){
    Cookies.remove("taskName3");
    Cookies.remove("setTime3");
    location.reload();
  });
  $('.delete-task4').click(function(){
    Cookies.remove("taskName4");
    Cookies.remove("setTime4");
    location.reload();
  });
  $('.delete-task5').click(function(){
    Cookies.remove("taskName5");
    Cookies.remove("setTime5");
    location.reload();
  });
  // タスク削除機能終わり

  // タスク追加を押さない場合でもタスクが表示されるようにする
  if (Cookies.get("taskName6") != null){
    var limitTime = (Cookies.get("setTime6")).replace(/[^0-9]/g, '');
    const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName6") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime6") +'</p><button class="delete-task6" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask6").show();
    $("#cookieTask6").append(html1)
  }else{
      $("#cookieTask6").hide();
  }
  if (Cookies.get("taskName7") != null){
    var limitTime = (Cookies.get("setTime7")).replace(/[^0-9]/g, '');
    const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName7") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime7") +'</p><button class="delete-task7" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask7").show()
      $("#cookieTask7").append(html2)

  }else{
      $("#cookieTask7").hide();
  }
  if (Cookies.get("taskName8") != null){
    var limitTime = (Cookies.get("setTime8")).replace(/[^0-9]/g, '');
    const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName8") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime8") +'</p><button class="delete-task8" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask8").show();
      $("#cookieTask8").append(html3)

  }else{
      $("#cookieTask8").hide();
  }
  if (Cookies.get("taskName9") != null){
    var limitTime = (Cookies.get("setTime9")).replace(/[^0-9]/g, '');
    const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName9") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime9") +'</p><button class="delete-task9" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask9").show();
    $("#cookieTask9").append(html4)

  }else{
      $("#cookieTask9").hide();
  }
  if (Cookies.get("taskName10") != null){
    var limitTime = (Cookies.get("setTime10")).replace(/[^0-9]/g, '');
    const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName10") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime10") +'</p><button class="delete-task10" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask10").show();
    $("#cookieTask10").append(html5)

  }else{
      $("#cookieTask10").hide();
  }

// タスク削除部
$('.delete-task6').click(function(){
  Cookies.remove("taskName6");
  Cookies.remove("setTime6");
  location.reload();
})
$('.delete-task7').click(function(){
  Cookies.remove("taskName7");
  Cookies.remove("setTime7");
  location.reload();
});
$('.delete-task8').click(function(){
  Cookies.remove("taskName8");
  Cookies.remove("setTime8");
  location.reload();
});
$('.delete-task9').click(function(){
  Cookies.remove("taskName9");
  Cookies.remove("setTime9");
  location.reload();
});
$('.delete-task10').click(function(){
  Cookies.remove("taskName10");
  Cookies.remove("setTime10");
  location.reload();
});
// タスク削除機能終わり

  // タスク追加を押さない場合でもタスクが表示されるようにする
  if (Cookies.get("taskName11") != null){
    var limitTime = (Cookies.get("setTime11")).replace(/[^0-9]/g, '');
    const html1 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName11") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime11") +'</p><button class="delete-task11" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask11").show();
    $("#cookieTask11").append(html1);
  }else{
      $("#cookieTask11").hide();
  }
  if (Cookies.get("taskName12") != null){
      var limitTime = (Cookies.get("setTime12")).replace(/[^0-9]/g, '');
      const html2 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName12") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime12") +'</p><button class="delete-task12" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask12").show();
      $("#cookieTask12").append(html2);
    }else{
      $("#cookieTask12").hide();
  }
  if (Cookies.get("taskName13") != null){
      var limitTime = (Cookies.get("setTime13")).replace(/[^0-9]/g, '');
      const html3 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName13") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime13") +'</p><button class="delete-task13" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
      $("#cookieTask13").show();
      $("#cookieTask13").append(html3);

  }else{
      $("#cookieTask13").hide();
  }
  if (Cookies.get("taskName14") != null){
    var limitTime = (Cookies.get("setTime14")).replace(/[^0-9]/g, '');
    const html4 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName14") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime14") +'</p><button class="delete-task14" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask14").show();
    $("#cookieTask14").append(html4);

  }else{
      $("#cookieTask14").hide();
  }
  if (Cookies.get("taskName15") != null){
    var limitTime = (Cookies.get("setTime15")).replace(/[^0-9]/g, '');
    const html5 = '<div class="cookieTask-add"><p class="cookieTask-text">' + Cookies.get("taskName15") + '</p>' + '<div class=task36limit>' + getLimit() + '</div>' + '<p class="cookieTask_limit">' +  Cookies.get("setTime15") +'</p><button class="delete-task15" id="delete" value="削除"><i class="fas fa-trash-alt"></i></button> </div>';
    $("#cookieTask15").show();
    $("#cookieTask15").append(html5);

  }else{
      $("#cookieTask15").hide();
  }

// タスク削除部
$('.delete-task11').click(function(){
  Cookies.remove("taskName11");
  Cookies.remove("setTime11");
  location.reload();
})
$('.delete-task12').click(function(){
  Cookies.remove("taskName12");
  Cookies.remove("setTime12");
  location.reload();
});
$('.delete-task13').click(function(){
  Cookies.remove("taskName13");
  Cookies.remove("setTime13");
  location.reload();
});
$('.delete-task14').click(function(){
  Cookies.remove("taskName14");
  Cookies.remove("setTime14");
  location.reload();
});
$('.delete-task15').click(function(){
  Cookies.remove("taskName15");
  Cookies.remove("setTime15");
  location.reload();
});
// タスク削除機能終わり


})


// ==========================================タスク追加機能==========================================




// ==========================================フォルダ追加機能==========================================
$(function(){
  // フォルダ追加を押した場合にCookieが保存される
  $("#submit36-folder").click(function(){
    if ((document.getElementById("folder36-name").value) == ""){
      !confirm("フォルダ名を入力、選択してください")
    }else{

    const folder = document.getElementById("folder36-name").value
    // フォルダ追加部分
    if (Cookies.get("folderName1") == null){
      Cookies.set("folderName1", folder)
      tab_name1.innerHTML = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab1").show();
      $("#content1").show();
    }else if(Cookies.get("folderName2") == null){
      Cookies.set("folderName2", folder)
      tab_name2.innerHTML = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab2").show();
      $("#content2").show();
    }else if(Cookies.get("folderName3") == null){
      Cookies.set("folderName3", folder)
      tab_name3.innerHTML = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab3").show();
      $("#content3").show();
    }else{
      !confirm("これ以上フォルダを追加出来ません")
    } 
  }
    // フォルダ追加終わり

    // フォルダ追加後にページ更新せずに削除する場合
    $('.delete-folder1').click(function(){
      Cookies.remove("folderName1");
      Cookies.remove("setTime1");
      Cookies.remove("setTime2");
      Cookies.remove("setTime3");
      Cookies.remove("setTime4");
      Cookies.remove("setTime5");
      Cookies.remove("taskName1");
      Cookies.remove("taskName2");
      Cookies.remove("taskName3");
      Cookies.remove("taskName4");
      Cookies.remove("taskName5");  
      tab_name1.innerHTML = "";
      cookieTask1.innerHTML = "";
      cookieTask2.innerHTML = "";
      cookieTask3.innerHTML = "";
      cookieTask4.innerHTML = "";
      cookieTask5.innerHTML = "";
      $("#tab1").hide();
      $("#content1").hide();
    });
    $('.delete-folder2').click(function(){
      Cookies.remove("folderName2");
      Cookies.remove("setTime6");
      Cookies.remove("setTime7");
      Cookies.remove("setTime8");
      Cookies.remove("setTime9");
      Cookies.remove("setTime10");
      Cookies.remove("taskName6");
      Cookies.remove("taskName7");
      Cookies.remove("taskName8");
      Cookies.remove("taskName9");
      Cookies.remove("taskName10");  
      tab_name2.innerHTML = "";
      cookieTask6.innerHTML = "";
      cookieTask7.innerHTML = "";
      cookieTask8.innerHTML = "";
      cookieTask9.innerHTML = "";
      cookieTask10.innerHTML = "";
      $("#tab2").hide();
      $("#content2").hide();
    });
    $('.delete-folder3').click(function(){
      Cookies.remove("folderName3");
      Cookies.remove("setTime11");
      Cookies.remove("setTime12");
      Cookies.remove("setTime13");
      Cookies.remove("setTime14");
      Cookies.remove("setTime15");
      Cookies.remove("taskName11");
      Cookies.remove("taskName12");
      Cookies.remove("taskName13");
      Cookies.remove("taskName14");
      Cookies.remove("taskName15");  
      tab_name3.innerHTML = "";
      cookieTask11.innerHTML = "";
      cookieTask12.innerHTML = "";
      cookieTask13.innerHTML = "";
      cookieTask14.innerHTML = "";
      cookieTask15.innerHTML = "";
      $("#tab3").hide();
      $("#content3").hide();
    });
    // 削除部分終わり

  })
  // 終わり

  // フォルダ追加を押さない場合でもCookieがあれば表示される
  if (Cookies.get("folderName1") != null){
      tab_name1.innerHTML = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab1").show();
      $("#content1").show();
  }else{
      $("#tab1").hide();
      $("#content1").hide();

  }
  if (Cookies.get("folderName2") != null){
      tab_name2.innerHTML = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab2").show();
      $("#content2").show();

  }else{
      $("#tab2").hide();
      $("#content2").hide();

  }
  if (Cookies.get("folderName3") != null){
      tab_name3.innerHTML = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除"><i class="fas fa-trash-alt"></i></button>';
      $("#tab3").show();
      $("#content3").show();

  }else{
      $("#tab3").hide();
      $("#content3").hide();

  }
  // フォルダ追加終わり

  // フォルダ削除部
  $('.delete-folder1').click(function(){
    Cookies.remove("folderName1");
    Cookies.remove("setTime1");
    Cookies.remove("setTime2");
    Cookies.remove("setTime3");
    Cookies.remove("setTime4");
    Cookies.remove("setTime5");
    Cookies.remove("taskName1");
    Cookies.remove("taskName2");
    Cookies.remove("taskName3");
    Cookies.remove("taskName4");
    Cookies.remove("taskName5");
    location.reload();
  })
  $('.delete-folder2').click(function(){
    Cookies.remove("folderName2");
    Cookies.remove("setTime6");
    Cookies.remove("setTime7");
    Cookies.remove("setTime8");
    Cookies.remove("setTime9");
    Cookies.remove("setTime10");
    Cookies.remove("taskName6");
    Cookies.remove("taskName7");
    Cookies.remove("taskName8");
    Cookies.remove("taskName9");
    Cookies.remove("taskName10");  
    location.reload();
  });
  $('.delete-folder3').click(function(){
    Cookies.remove("folderName3");
    Cookies.remove("setTime11");
    Cookies.remove("setTime12");
    Cookies.remove("setTime13");
    Cookies.remove("setTime14");
    Cookies.remove("setTime15");
    Cookies.remove("taskName11");
    Cookies.remove("taskName12");
    Cookies.remove("taskName13");
    Cookies.remove("taskName14");
    Cookies.remove("taskName15");  
    location.reload();
  });
  // フォルダ削除機能終わり
})
// ==========================================フォルダ追加機能終わり==========================================


