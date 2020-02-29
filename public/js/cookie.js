// ==========================================タスク追加機能==========================================
$(function(){  

  $("#submit-task1").click(function(){  

    const set = $('#time1 option:selected').val();
    const time = Number(set);
    
    if (Cookies.get("setTime1") == null){
      Cookies.set("setTime1", getLast(),{ expires: time })
      settime1.innerHTML = Cookies.get("setTime1")
      $("#settime1").show();
    }else if(Cookies.get("setTime2") == null){
      Cookies.set("setTime2", getLast(),{ expires: time })
      settime2.innerHTML = Cookies.get("setTime2")
      $("#settime2").show();
    }else if(Cookies.get("setTime3") == null){
      Cookies.set("setTime3", getLast(),{ expires: time })
      settime3.innerHTML = Cookies.get("setTime3")
      $("#settime3").show();
    }else if(Cookies.get("setTime4") == null){
      Cookies.set("setTime4", getLast(),{ expires: time })
      settime4.innerHTML = Cookies.get("setTime4")
      $("#settime4").show();
    }else{
      Cookies.set("setTime5", getLast(),{ expires: time })
      settime5.innerHTML = Cookies.get("setTime5")
      $("#settime5").show();
    }

    function getLast(){
  
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

    // var cookieTime = (Cookies.get("setTime1")).replace(/[^0-9]/g, '')
    // cookie36test.innerHTML = cookieTime
  
    const task = document.getElementById("task-name1").value
    if (Cookies.get("taskName1") == null){
      Cookies.set("taskName1", task,{ expires: time })
      const html1 = '<p id="cookieTask-text1">' + Cookies.get("taskName1") + '<button class="delete-task1" id="delete" value="削除">削除</button></p>';
      $("#cookieTask1").show();
      $('#cookieTask1').append(html1);
    }else if(Cookies.get("taskName2") == null){
      Cookies.set("taskName2", task,{ expires: time })
      const html2 = '<p id="cookieTask-text2">' + Cookies.get("taskName2") + '<button class="delete-task2" id="delete" value="削除">削除</button></p>';
      $("#cookieTask2").show();
      $('#cookieTask2').append(html2);
    }else if(Cookies.get("taskName3") == null){
      Cookies.set("taskName3", task,{ expires: time })
      const html3 = '<p id="cookieTask-text3">' + Cookies.get("taskName3") + '<button class="delete-task3" id="delete" value="削除">削除</button></p>';
      $("#cookieTask3").show();
      $('#cookieTask3').append(html3);
    }else if(Cookies.get("taskName4") == null){
      Cookies.set("taskName4", task,{ expires: time })
      const html4 = '<p id="cookieTask-text4">' + Cookies.get("taskName4") + '<button class="delete-task4" id="delete" value="削除">削除</button></p>';
      $("#cookieTask4").show();
      $('#cookieTask4').append(html4);
    }else if(Cookies.get("taskName5") == null){
      Cookies.set("taskName5", task,{ expires: time })
      const html5 = '<p id="cookieTask-text5">' + Cookies.get("taskName5") + '<button class="delete-task5" id="delete" value="削除">削除</button></p>';
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
      settime1.innerHTML = "";
      $("#cookieTask1").hide();
    });
    $('.delete-task2').click(function(){
      Cookies.remove("taskName2");
      Cookies.remove("setTime2");
      cookieTask2.innerHTML = "";
      settime2.innerHTML = "";
      $("#cookieTask2").hide();
    });
    $('.delete-task3').click(function(){
      Cookies.remove("taskName3");
      Cookies.remove("setTime3");
      cookieTask3.innerHTML = "";
      settime3.innerHTML = "";
      $("#cookieTask3").hide();
    });
    $('.delete-task4').click(function(){
      Cookies.remove("taskName4");
      Cookies.remove("setTime4");
      cookieTask4.innerHTML = "";
      settime4.innerHTML = "";
      $("#cookieTask4").hide();
    });
    $('.delete-task5').click(function(){
      Cookies.remove("taskName5");
      Cookies.remove("setTime5");
      cookieTask5.innerHTML = "";
      settime5.innerHTML = "";
      $("#cookieTask5").hide();
    });

    // 削除部分終わり
    
  })  

  // *****************************************タスク2*****************************************
  $("#submit-task2").click(function(){  

    const set = $('#time2 option:selected').val();
    const time = Number(set);
    
    if (Cookies.get("setTime6") == null){
      Cookies.set("setTime6", getLast(),{ expires: time })
      settime6.innerHTML = Cookies.get("setTime6")
      $("#settime6").show();
    }else if(Cookies.get("setTime7") == null){
      Cookies.set("setTime7", getLast(),{ expires: time })
      settime7.innerHTML = Cookies.get("setTime7")
      $("#settime7").show();
    }else if(Cookies.get("setTime8") == null){
      Cookies.set("setTime8", getLast(),{ expires: time })
      settime8.innerHTML = Cookies.get("setTime8")
      $("#settime8").show();
    }else if(Cookies.get("setTime9") == null){
      Cookies.set("setTime9", getLast(),{ expires: time })
      settime9.innerHTML = Cookies.get("setTime9")
      $("#settime9").show();
    }else{
      Cookies.set("setTime10", getLast(),{ expires: time })
      settime10.innerHTML = Cookies.get("setTime10")
      $("#settime10").show();
    }

    function getLast(){
  
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
  

    // ---------------------------------日付の取得終わり---------------------------------

    const task = document.getElementById("task-name2").value
    if (Cookies.get("taskName6") == null){
      Cookies.set("taskName6", task,{ expires: time })
      const html1 = '<p id="cookieTask-text6">' + Cookies.get("taskName6") + '<button class="delete-task6" id="delete" value="削除">削除</button></p>';
      $("#cookieTask6").show();
      $('#cookieTask6').append(html1);
    }else if(Cookies.get("taskName7") == null){
      Cookies.set("taskName7", task,{ expires: time })
      const html2 = '<p id="cookieTask-text7">' + Cookies.get("taskName7") + '<button class="delete-task7" id="delete" value="削除">削除</button></p>';
      $("#cookieTask7").show();
      $('#cookieTask7').append(html2);
    }else if(Cookies.get("taskName8") == null){
      Cookies.set("taskName8", task,{ expires: time })
      const html3 = '<p id="cookieTask-text8">' + Cookies.get("taskName8") + '<button class="delete-task8" id="delete" value="削除">削除</button></p>';
      $("#cookieTask8").show();
      $('#cookieTask8').append(html3);
    }else if(Cookies.get("taskName9") == null){
      Cookies.set("taskName9", task,{ expires: time })
      const html4 = '<p id="cookieTask-text9">' + Cookies.get("taskName9") + '<button class="delete-task9" id="delete" value="削除">削除</button></p>';
      $("#cookieTask9").show();
      $('#cookieTask9').append(html4);
    }else if(Cookies.get("taskName10") == null){
      Cookies.set("taskName10", task,{ expires: time })
      const html5 = '<p id="cookieTask-text10">' + Cookies.get("taskName10") + '<button class="delete-task10" id="delete" value="削除">削除</button></p>';
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
      settime6.innerHTML = "";
      $("#cookieTask6").hide();
    });
    $('.delete-task7').click(function(){
      Cookies.remove("taskName7");
      Cookies.remove("setTime7");
      cookieTask7.innerHTML = "";
      settime7.innerHTML = "";
      $("#cookieTask7").hide();
    });
    $('.delete-task8').click(function(){
      Cookies.remove("taskName8");
      Cookies.remove("setTime8");
      cookieTask8.innerHTML = "";
      settime8.innerHTML = "";
      $("#cookieTask8").hide();
    });
    $('.delete-task9').click(function(){
      Cookies.remove("taskName9");
      Cookies.remove("setTime9");
      cookieTask9.innerHTML = "";
      settime9.innerHTML = "";
      $("#cookieTask9").hide();
    });
    $('.delete-task10').click(function(){
      Cookies.remove("taskName10");
      Cookies.remove("setTime10");
      cookieTask10.innerHTML = "";
      settime10.innerHTML = "";
      $("#cookieTask10").hide();
    });

    // 削除部分終わり
    
  })  

    // *****************************************タスク2*****************************************

    // *****************************************タスク3*****************************************


  $("#submit-task3").click(function(){  

    const set = $('#time3 option:selected').val();
    const time = Number(set);
    
    if (Cookies.get("setTime11") == null){
      Cookies.set("setTime11", getLast(),{ expires: time })
      settime11.innerHTML = Cookies.get("setTime11")
      $("#settime11").show();
    }else if(Cookies.get("setTime12") == null){
      Cookies.set("setTime12", getLast(),{ expires: time })
      settime12.innerHTML = Cookies.get("setTime12")
      $("#settime12").show();
    }else if(Cookies.get("setTime13") == null){
      Cookies.set("setTime13", getLast(),{ expires: time })
      settime13.innerHTML = Cookies.get("setTime13")
      $("#settime13").show();
    }else if(Cookies.get("setTime14") == null){
      Cookies.set("setTime14", getLast(),{ expires: time })
      settime14.innerHTML = Cookies.get("setTime14")
      $("#settime14").show();
    }else{
      Cookies.set("setTime15", getLast(),{ expires: time })
      settime15.innerHTML = Cookies.get("setTime15")
      $("#settime15").show();
    }

    function getLast(){
  
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
  

    // ---------------------------------日付の取得終わり---------------------------------

    const task = document.getElementById("task-name3").value
    if (Cookies.get("taskName11") == null){
      Cookies.set("taskName11", task,{ expires: time })
      const html1 = '<p id="cookieTask-text11">' + Cookies.get("taskName11") + '<button class="delete-task11" id="delete" value="削除">削除</button></p>';
      $("#cookieTask11").show();
      $('#cookieTask11').append(html1);
    }else if(Cookies.get("taskName12") == null){
      Cookies.set("taskName12", task,{ expires: time })
      const html2 = '<p id="cookieTask-text12">' + Cookies.get("taskName12") + '<button class="delete-task12" id="delete" value="削除">削除</button></p>';
      $("#cookieTask12").show();
      $('#cookieTask12').append(html2);
    }else if(Cookies.get("taskName13") == null){
      Cookies.set("taskName13", task,{ expires: time })
      const html3 = '<p id="cookieTask-text13">' + Cookies.get("taskName13") + '<button class="delete-task13" id="delete" value="削除">削除</button></p>';
      $("#cookieTask13").show();
      $('#cookieTask13').append(html3);
    }else if(Cookies.get("taskName14") == null){
      Cookies.set("taskName14", task,{ expires: time })
      const html4 = '<p id="cookieTask-text14">' + Cookies.get("taskName14") + '<button class="delete-task14" id="delete" value="削除">削除</button></p>';
      $("#cookieTask14").show();
      $('#cookieTask14').append(html4);
    }else if(Cookies.get("taskName15") == null){
      Cookies.set("taskName15", task,{ expires: time })
      const html5 = '<p id="cookieTask-text15">' + Cookies.get("taskName15") + '<button class="delete-task15" id="delete" value="削除">削除</button></p>';
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
      settime11.innerHTML = "";
      $("#cookieTask11").hide();
    });
    $('.delete-task12').click(function(){
      Cookies.remove("taskName12");
      Cookies.remove("setTime12");
      cookieTask12.innerHTML = "";
      settime12.innerHTML = "";
      $("#cookieTask12").hide();
    });
    $('.delete-task13').click(function(){
      Cookies.remove("taskName13");
      Cookies.remove("setTime13");
      cookieTask13.innerHTML = "";
      settime13.innerHTML = "";
      $("#cookieTask13").hide();
    });
    $('.delete-task14').click(function(){
      Cookies.remove("taskName14");
      Cookies.remove("setTime14");
      cookieTask14.innerHTML = "";
      settime14.innerHTML = "";
      $("#cookieTask14").hide();
    });
    $('.delete-task15').click(function(){
      Cookies.remove("taskName15");
      Cookies.remove("setTime15");
      cookieTask15.innerHTML = "";
      settime15.innerHTML = "";
      $("#cookieTask15").hide();
    });

    // 削除部分終わり
    
  })  

    // *****************************************タスク3*****************************************




// タスク追加を押さない場合でもタスクが表示されるようにする
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
    if (Cookies.get("taskName4") != null){
      cookieTask4.innerHTML = '<p id="cookieTask-text4">' + Cookies.get("taskName4") + '</p>' + '<button class="delete-task4" id="delete" value="削除">削除</button>';
      $("#cookieTask4").show();
    }else{
        $("#cookieTask4").hide();
    }
    if (Cookies.get("taskName5") != null){
      cookieTask5.innerHTML = '<p id="cookieTask-text5">' + Cookies.get("taskName5") + '</p>' + '<button class="delete-task5" id="delete" value="削除">削除</button>';
      $("#cookieTask5").show();
    }else{
        $("#cookieTask5").hide();
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
    if (Cookies.get("setTime4") != null){
      settime4.innerHTML = Cookies.get("setTime4")
      $("#settime4").show();
    }else{
        $("#settime4").hide();
    }
    if (Cookies.get("setTime5") != null){
      settime5.innerHTML = Cookies.get("setTime5")
      $("#settime5").show();
    }else{
        $("#settime5").hide();
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
    cookieTask6.innerHTML = '<p id="cookieTask-text6">' + Cookies.get("taskName6") + '</p>' + '<button class="delete-task6" id="delete" value="削除">削除</button>';
    $("#cookieTask6").show();
  }else{
      $("#cookieTask6").hide();
  }
  if (Cookies.get("taskName7") != null){
      cookieTask7.innerHTML = '<p id="cookieTask-text7">' + Cookies.get("taskName7") + '</p>' + '<button class="delete-task7" id="delete" value="削除">削除</button>';
      $("#cookieTask7").show()
  }else{
      $("#cookieTask7").hide();
  }
  if (Cookies.get("taskName8") != null){
      cookieTask8.innerHTML = '<p id="cookieTask-text8">' + Cookies.get("taskName8") + '</p>' + '<button class="delete-task8" id="delete" value="削除">削除</button>';
      $("#cookieTask8").show();
  }else{
      $("#cookieTask8").hide();
  }
  if (Cookies.get("taskName9") != null){
    cookieTask9.innerHTML = '<p id="cookieTask-text9">' + Cookies.get("taskName9") + '</p>' + '<button class="delete-task9" id="delete" value="削除">削除</button>';
    $("#cookieTask9").show();
  }else{
      $("#cookieTask9").hide();
  }
  if (Cookies.get("taskName10") != null){
    cookieTask10.innerHTML = '<p id="cookieTask-text10">' + Cookies.get("taskName10") + '</p>' + '<button class="delete-task10" id="delete" value="削除">削除</button>';
    $("#cookieTask10").show();
  }else{
      $("#cookieTask10").hide();
  }

  if (Cookies.get("setTime6") != null){
    settime6.innerHTML = Cookies.get("setTime6")
    $("#settime6").show();
  }else{
      $("#settime6").hide();
  }
  if (Cookies.get("setTime7") != null){
    settime7.innerHTML = Cookies.get("setTime7")
    $("#settime7").show()
  }else{
      $("#settime7").hide();
  }
  if (Cookies.get("setTime8") != null){
    settime8.innerHTML = Cookies.get("setTime8")
    $("#settime8").show();
  }else{
      $("#settime8").hide();
  }
  if (Cookies.get("setTime9") != null){
    settime9.innerHTML = Cookies.get("setTime9")
    $("#settime9").show();
  }else{
      $("#settime9").hide();
  }
  if (Cookies.get("setTime10") != null){
    settime10.innerHTML = Cookies.get("setTime10")
    $("#settime10").show();
  }else{
      $("#settime10").hide();
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
    cookieTask11.innerHTML = '<p id="cookieTask-text11">' + Cookies.get("taskName11") + '</p>' + '<button class="delete-task11" id="delete" value="削除">削除</button>';
    $("#cookieTask11").show();
  }else{
      $("#cookieTask11").hide();
  }
  if (Cookies.get("taskName12") != null){
      cookieTask12.innerHTML = '<p id="cookieTask-text12">' + Cookies.get("taskName12") + '</p>' + '<button class="delete-task12" id="delete" value="削除">削除</button>';
      $("#cookieTask12").show()
  }else{
      $("#cookieTask12").hide();
  }
  if (Cookies.get("taskName13") != null){
      cookieTask13.innerHTML = '<p id="cookieTask-text13">' + Cookies.get("taskName13") + '</p>' + '<button class="delete-task13" id="delete" value="削除">削除</button>';
      $("#cookieTask13").show();
  }else{
      $("#cookieTask13").hide();
  }
  if (Cookies.get("taskName14") != null){
    cookieTask14.innerHTML = '<p id="cookieTask-text14">' + Cookies.get("taskName14") + '</p>' + '<button class="delete-task14" id="delete" value="削除">削除</button>';
    $("#cookieTask14").show();
  }else{
      $("#cookieTask14").hide();
  }
  if (Cookies.get("taskName15") != null){
    cookieTask15.innerHTML = '<p id="cookieTask-text15">' + Cookies.get("taskName15") + '</p>' + '<button class="delete-task15" id="delete" value="削除">削除</button>';
    $("#cookieTask15").show();
  }else{
      $("#cookieTask15").hide();
  }

  if (Cookies.get("setTime11") != null){
    settime11.innerHTML = Cookies.get("setTime11")
    $("#settime11").show();
  }else{
      $("#settime11").hide();
  }
  if (Cookies.get("setTime12") != null){
    settime12.innerHTML = Cookies.get("setTime12")
    $("#settime12").show()
  }else{
      $("#settime12").hide();
  }
  if (Cookies.get("setTime13") != null){
    settime13.innerHTML = Cookies.get("setTime13")
    $("#settime13").show();
  }else{
      $("#settime13").hide();
  }
  if (Cookies.get("setTime14") != null){
    settime14.innerHTML = Cookies.get("setTime14")
    $("#settime14").show();
  }else{
      $("#settime14").hide();
  }
  if (Cookies.get("setTime15") != null){
    settime15.innerHTML = Cookies.get("setTime15")
    $("#settime15").show();
  }else{
      $("#settime15").hide();
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
    const folder = document.getElementById("folder36-name").value
    // フォルダ追加部分
    if (Cookies.get("folderName1") == null){
      Cookies.set("folderName1", folder)
      tab_name1.innerHTML = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除">削除</button>';
      $("#tab1").show();
      $("#content1").show();
    }else if(Cookies.get("folderName2") == null){
      Cookies.set("folderName2", folder)
      tab_name2.innerHTML = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除">削除</button>';
      $("#tab2").show();
      $("#content2").show();

    }else{
      Cookies.set("folderName3", folder)
      tab_name3.innerHTML = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除">削除</button>';
      $("#tab3").show();
      $("#content3").show();

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
      settime1.innerHTML = "";
      settime2.innerHTML = "";
      settime3.innerHTML = "";
      settime4.innerHTML = "";
      settime5.innerHTML = "";
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
      settime6.innerHTML = "";
      settime7.innerHTML = "";
      settime8.innerHTML = "";
      settime9.innerHTML = "";
      settime10.innerHTML = "";
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
      settime11.innerHTML = "";
      settime12.innerHTML = "";
      settime13.innerHTML = "";
      settime14.innerHTML = "";
      settime15.innerHTML = "";
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
      tab_name1.innerHTML = '<p id="cookieFolder-text1">' + Cookies.get("folderName1") + '</p>' + '<button class="delete-folder1" id="delete-folder" value="削除">削除</button>';
      $("#tab1").show();
      $("#content1").show();
  }else{
      $("#tab1").hide();
      $("#content1").hide();

  }
  if (Cookies.get("folderName2") != null){
      tab_name2.innerHTML = '<p id="cookieFolder-text2">' + Cookies.get("folderName2") + '</p>' + '<button class="delete-folder2" id="delete-folder" value="削除">削除</button>';
      $("#tab2").show();
      $("#content2").show();

  }else{
      $("#tab2").hide();
      $("#content2").hide();

  }
  if (Cookies.get("folderName3") != null){
      tab_name3.innerHTML = '<p id="cookieFolder-text3">' + Cookies.get("folderName3") + '</p>' + '<button class="delete-folder3" id="delete-folder" value="削除">削除</button>';
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


