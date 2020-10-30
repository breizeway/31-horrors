  /***************************************
  **** assign variable to movies here ****
  ***************************************/
  var media_mbl = window.matchMedia("(max-width: 420px)")


  var today = new Date();
  var today_local = today.toLocaleDateString();
  var date = /*today_local.substring(6,10)+'-'+today_local.substring(0,2)+'-'+*/'day_'+today_local.substring(3,5);
  /* document.getElementById("date_test").innerHTML = date;*/


  var sun_day =                "&nbspSunday";
  var mon_day =                "&nbspMonday";
  var tue_day =                "&nbspTuesday";
  var wed_day =                "&nbspWednesday";
  var thu_day =                "&nbspThursday";
  var fri_day =                "&nbspFriday";
  var sat_day =                "&nbspSaturday";


  document.getElementById("content_my_txt_year").innerHTML = year;


  document.getElementById("sun_desc").innerHTML = sun_desc;
  document.getElementById("mon_desc").innerHTML = mon_desc;
  document.getElementById("tue_desc").innerHTML = tue_desc;
  document.getElementById("wed_desc").innerHTML = wed_desc;
  document.getElementById("thu_desc").innerHTML = thu_desc;
  document.getElementById("fri_desc").innerHTML = fri_desc;
  document.getElementById("sat_desc").innerHTML = sat_desc;


  document.getElementById("cal_cellXr02c01_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c02_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c03_button").classList.add("hidden_element");
  document.getElementById("cal_cellXr02c04_button").classList.add("hidden_element");


  document.getElementById("cal_rowXr07").classList.add("hidden_element");


  document.getElementById("cal_cellXr02c01_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c02_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c03_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c04_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr02c05_button_div_dayMnth").innerHTML = '1';
  document.getElementById("cal_cellXr02c06_button_div_dayMnth").innerHTML = '2';
  document.getElementById("cal_cellXr02c07_button_div_dayMnth").innerHTML = '3';
  document.getElementById("cal_cellXr03c01_button_div_dayMnth").innerHTML = '4';
  document.getElementById("cal_cellXr03c02_button_div_dayMnth").innerHTML = '5';
  document.getElementById("cal_cellXr03c03_button_div_dayMnth").innerHTML = '6';
  document.getElementById("cal_cellXr03c04_button_div_dayMnth").innerHTML = '7';
  document.getElementById("cal_cellXr03c05_button_div_dayMnth").innerHTML = '8';
  document.getElementById("cal_cellXr03c06_button_div_dayMnth").innerHTML = '9';
  document.getElementById("cal_cellXr03c07_button_div_dayMnth").innerHTML = '10';
  document.getElementById("cal_cellXr04c01_button_div_dayMnth").innerHTML = '11';
  document.getElementById("cal_cellXr04c02_button_div_dayMnth").innerHTML = '12';
  document.getElementById("cal_cellXr04c03_button_div_dayMnth").innerHTML = '13';
  document.getElementById("cal_cellXr04c04_button_div_dayMnth").innerHTML = '14';
  document.getElementById("cal_cellXr04c05_button_div_dayMnth").innerHTML = '15';
  document.getElementById("cal_cellXr04c06_button_div_dayMnth").innerHTML = '16';
  document.getElementById("cal_cellXr04c07_button_div_dayMnth").innerHTML = '17';
  document.getElementById("cal_cellXr05c01_button_div_dayMnth").innerHTML = '18';
  document.getElementById("cal_cellXr05c02_button_div_dayMnth").innerHTML = '19';
  document.getElementById("cal_cellXr05c03_button_div_dayMnth").innerHTML = '20';
  document.getElementById("cal_cellXr05c04_button_div_dayMnth").innerHTML = '21';
  document.getElementById("cal_cellXr05c05_button_div_dayMnth").innerHTML = '22';
  document.getElementById("cal_cellXr05c06_button_div_dayMnth").innerHTML = '23';
  document.getElementById("cal_cellXr05c07_button_div_dayMnth").innerHTML = '24';
  document.getElementById("cal_cellXr06c01_button_div_dayMnth").innerHTML = '25';
  document.getElementById("cal_cellXr06c02_button_div_dayMnth").innerHTML = '26';
  document.getElementById("cal_cellXr06c03_button_div_dayMnth").innerHTML = '27';
  document.getElementById("cal_cellXr06c04_button_div_dayMnth").innerHTML = '28';
  document.getElementById("cal_cellXr06c05_button_div_dayMnth").innerHTML = '29';
  document.getElementById("cal_cellXr06c06_button_div_dayMnth").innerHTML = '30';
  document.getElementById("cal_cellXr06c07_button_div_dayMnth").innerHTML = '31';
  document.getElementById("cal_cellXr07c01_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c02_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c03_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c04_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c05_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c06_button_div_dayMnth").innerHTML = '0';
  document.getElementById("cal_cellXr07c07_button_div_dayMnth").innerHTML = '0';


  document.getElementById("cal_cellXr02c01_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c02_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c03_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c04_button").classList.add("day_00");
  document.getElementById("cal_cellXr02c05_button").classList.add("day_01");
  document.getElementById("cal_cellXr02c06_button").classList.add("day_02");
  document.getElementById("cal_cellXr02c07_button").classList.add("day_03");
  document.getElementById("cal_cellXr03c01_button").classList.add("day_04");
  document.getElementById("cal_cellXr03c02_button").classList.add("day_05");
  document.getElementById("cal_cellXr03c03_button").classList.add("day_06");
  document.getElementById("cal_cellXr03c04_button").classList.add("day_07");
  document.getElementById("cal_cellXr03c05_button").classList.add("day_08");
  document.getElementById("cal_cellXr03c06_button").classList.add("day_09");
  document.getElementById("cal_cellXr03c07_button").classList.add("day_10");
  document.getElementById("cal_cellXr04c01_button").classList.add("day_11");
  document.getElementById("cal_cellXr04c02_button").classList.add("day_12");
  document.getElementById("cal_cellXr04c03_button").classList.add("day_13");
  document.getElementById("cal_cellXr04c04_button").classList.add("day_14");
  document.getElementById("cal_cellXr04c05_button").classList.add("day_15");
  document.getElementById("cal_cellXr04c06_button").classList.add("day_16");
  document.getElementById("cal_cellXr04c07_button").classList.add("day_17");
  document.getElementById("cal_cellXr05c01_button").classList.add("day_18");
  document.getElementById("cal_cellXr05c02_button").classList.add("day_19");
  document.getElementById("cal_cellXr05c03_button").classList.add("day_20");
  document.getElementById("cal_cellXr05c04_button").classList.add("day_21");
  document.getElementById("cal_cellXr05c05_button").classList.add("day_22");
  document.getElementById("cal_cellXr05c06_button").classList.add("day_23");
  document.getElementById("cal_cellXr05c07_button").classList.add("day_24");
  document.getElementById("cal_cellXr06c01_button").classList.add("day_25");
  document.getElementById("cal_cellXr06c02_button").classList.add("day_26");
  document.getElementById("cal_cellXr06c03_button").classList.add("day_27");
  document.getElementById("cal_cellXr06c04_button").classList.add("day_28");
  document.getElementById("cal_cellXr06c05_button").classList.add("day_29");
  document.getElementById("cal_cellXr06c06_button").classList.add("day_30");
  document.getElementById("cal_cellXr06c07_button").classList.add("day_31");
  document.getElementById("cal_cellXr07c01_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c02_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c03_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c04_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c05_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c06_button").classList.add("day_00");
  document.getElementById("cal_cellXr07c07_button").classList.add("day_00");


  document.getElementById("cal_cellXr02c01_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c02_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c03_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c04_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr02c05_button_div_title").innerHTML = film_01_title;
  document.getElementById("cal_cellXr02c06_button_div_title").innerHTML = film_02_title;
  document.getElementById("cal_cellXr02c07_button_div_title").innerHTML = film_03_title;
  document.getElementById("cal_cellXr03c01_button_div_title").innerHTML = film_04_title;
  document.getElementById("cal_cellXr03c02_button_div_title").innerHTML = film_05_title;
  document.getElementById("cal_cellXr03c03_button_div_title").innerHTML = film_06_title;
  document.getElementById("cal_cellXr03c04_button_div_title").innerHTML = film_07_title;
  document.getElementById("cal_cellXr03c05_button_div_title").innerHTML = film_08_title;
  document.getElementById("cal_cellXr03c06_button_div_title").innerHTML = film_09_title;
  document.getElementById("cal_cellXr03c07_button_div_title").innerHTML = film_10_title;
  document.getElementById("cal_cellXr04c01_button_div_title").innerHTML = film_11_title;
  document.getElementById("cal_cellXr04c02_button_div_title").innerHTML = film_12_title;
  document.getElementById("cal_cellXr04c03_button_div_title").innerHTML = film_13_title;
  document.getElementById("cal_cellXr04c04_button_div_title").innerHTML = film_14_title;
  document.getElementById("cal_cellXr04c05_button_div_title").innerHTML = film_15_title;
  document.getElementById("cal_cellXr04c06_button_div_title").innerHTML = film_16_title;
  document.getElementById("cal_cellXr04c07_button_div_title").innerHTML = film_17_title;
  document.getElementById("cal_cellXr05c01_button_div_title").innerHTML = film_18_title;
  document.getElementById("cal_cellXr05c02_button_div_title").innerHTML = film_19_title;
  document.getElementById("cal_cellXr05c03_button_div_title").innerHTML = film_20_title;
  document.getElementById("cal_cellXr05c04_button_div_title").innerHTML = film_21_title;
  document.getElementById("cal_cellXr05c05_button_div_title").innerHTML = film_22_title;
  document.getElementById("cal_cellXr05c06_button_div_title").innerHTML = film_23_title;
  document.getElementById("cal_cellXr05c07_button_div_title").innerHTML = film_24_title;
  document.getElementById("cal_cellXr06c01_button_div_title").innerHTML = film_25_title;
  document.getElementById("cal_cellXr06c02_button_div_title").innerHTML = film_26_title;
  document.getElementById("cal_cellXr06c03_button_div_title").innerHTML = film_27_title;
  document.getElementById("cal_cellXr06c04_button_div_title").innerHTML = film_28_title;
  document.getElementById("cal_cellXr06c05_button_div_title").innerHTML = film_29_title;
  document.getElementById("cal_cellXr06c06_button_div_title").innerHTML = film_30_title;
  document.getElementById("cal_cellXr06c07_button_div_title").innerHTML = film_31_title;
  document.getElementById("cal_cellXr07c01_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c02_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c03_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c04_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c05_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c06_button_div_title").innerHTML = film_00_title;
  document.getElementById("cal_cellXr07c07_button_div_title").innerHTML = film_00_title;


  document.getElementById("cal_dropXr02c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr02c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr02c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr02c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr02c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr02c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr02c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr03c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr03c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr03c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr03c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr03c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr03c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr03c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr04c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr04c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr04c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr04c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr04c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr04c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr04c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr05c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr05c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr05c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr05c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr05c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr05c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr05c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr06c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr06c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr06c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr06c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr06c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr06c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr06c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;
  document.getElementById("cal_dropXr07c01_divXmeta_NS_dayDesc").innerHTML = sun_desc;
  document.getElementById("cal_dropXr07c02_divXmeta_NS_dayDesc").innerHTML = mon_desc;
  document.getElementById("cal_dropXr07c03_divXmeta_NS_dayDesc").innerHTML = tue_desc;
  document.getElementById("cal_dropXr07c04_divXmeta_NS_dayDesc").innerHTML = wed_desc;
  document.getElementById("cal_dropXr07c05_divXmeta_NS_dayDesc").innerHTML = thu_desc;
  document.getElementById("cal_dropXr07c06_divXmeta_NS_dayDesc").innerHTML = fri_desc;
  document.getElementById("cal_dropXr07c07_divXmeta_NS_dayDesc").innerHTML = sat_desc;


  document.getElementById("cal_dropXr02c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr02c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr02c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr02c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr02c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr02c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr02c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr03c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr03c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr03c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr03c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr03c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr03c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr03c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr04c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr04c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr04c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr04c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr04c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr04c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr04c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr05c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr05c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr05c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr05c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr05c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr05c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr05c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr06c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr06c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr06c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr06c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr06c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr06c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr06c07_divXmeta_NS_dayWeek").innerHTML = sat_day;
  document.getElementById("cal_dropXr07c01_divXmeta_NS_dayWeek").innerHTML = sun_day;
  document.getElementById("cal_dropXr07c02_divXmeta_NS_dayWeek").innerHTML = mon_day;
  document.getElementById("cal_dropXr07c03_divXmeta_NS_dayWeek").innerHTML = tue_day;
  document.getElementById("cal_dropXr07c04_divXmeta_NS_dayWeek").innerHTML = wed_day;
  document.getElementById("cal_dropXr07c05_divXmeta_NS_dayWeek").innerHTML = thu_day;
  document.getElementById("cal_dropXr07c06_divXmeta_NS_dayWeek").innerHTML = fri_day;
  document.getElementById("cal_dropXr07c07_divXmeta_NS_dayWeek").innerHTML = sat_day;


  document.getElementById("cal_dropXr02c01_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c02_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c03_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c04_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr02c05_divXmeta_title").innerHTML = film_01_title;
  document.getElementById("cal_dropXr02c06_divXmeta_title").innerHTML = film_02_title;
  document.getElementById("cal_dropXr02c07_divXmeta_title").innerHTML = film_03_title;
  document.getElementById("cal_dropXr03c01_divXmeta_title").innerHTML = film_04_title;
  document.getElementById("cal_dropXr03c02_divXmeta_title").innerHTML = film_05_title;
  document.getElementById("cal_dropXr03c03_divXmeta_title").innerHTML = film_06_title;
  document.getElementById("cal_dropXr03c04_divXmeta_title").innerHTML = film_07_title;
  document.getElementById("cal_dropXr03c05_divXmeta_title").innerHTML = film_08_title;
  document.getElementById("cal_dropXr03c06_divXmeta_title").innerHTML = film_09_title;
  document.getElementById("cal_dropXr03c07_divXmeta_title").innerHTML = film_10_title;
  document.getElementById("cal_dropXr04c01_divXmeta_title").innerHTML = film_11_title;
  document.getElementById("cal_dropXr04c02_divXmeta_title").innerHTML = film_12_title;
  document.getElementById("cal_dropXr04c03_divXmeta_title").innerHTML = film_13_title;
  document.getElementById("cal_dropXr04c04_divXmeta_title").innerHTML = film_14_title;
  document.getElementById("cal_dropXr04c05_divXmeta_title").innerHTML = film_15_title;
  document.getElementById("cal_dropXr04c06_divXmeta_title").innerHTML = film_16_title;
  document.getElementById("cal_dropXr04c07_divXmeta_title").innerHTML = film_17_title;
  document.getElementById("cal_dropXr05c01_divXmeta_title").innerHTML = film_18_title;
  document.getElementById("cal_dropXr05c02_divXmeta_title").innerHTML = film_19_title;
  document.getElementById("cal_dropXr05c03_divXmeta_title").innerHTML = film_20_title;
  document.getElementById("cal_dropXr05c04_divXmeta_title").innerHTML = film_21_title;
  document.getElementById("cal_dropXr05c05_divXmeta_title").innerHTML = film_22_title;
  document.getElementById("cal_dropXr05c06_divXmeta_title").innerHTML = film_23_title;
  document.getElementById("cal_dropXr05c07_divXmeta_title").innerHTML = film_24_title;
  document.getElementById("cal_dropXr06c01_divXmeta_title").innerHTML = film_25_title;
  document.getElementById("cal_dropXr06c02_divXmeta_title").innerHTML = film_26_title;
  document.getElementById("cal_dropXr06c03_divXmeta_title").innerHTML = film_27_title;
  document.getElementById("cal_dropXr06c04_divXmeta_title").innerHTML = film_28_title;
  document.getElementById("cal_dropXr06c05_divXmeta_title").innerHTML = film_29_title;
  document.getElementById("cal_dropXr06c06_divXmeta_title").innerHTML = film_30_title;
  document.getElementById("cal_dropXr06c07_divXmeta_title").innerHTML = film_31_title;
  document.getElementById("cal_dropXr07c01_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c02_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c03_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c04_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c05_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c06_divXmeta_title").innerHTML = film_00_title;
  document.getElementById("cal_dropXr07c07_divXmeta_title").innerHTML = film_00_title;


  document.getElementById("cal_dropXr02c01_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c02_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c03_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c04_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr02c05_divXpostr_img").src = film_01_postr;
  document.getElementById("cal_dropXr02c06_divXpostr_img").src = film_02_postr;
  document.getElementById("cal_dropXr02c07_divXpostr_img").src = film_03_postr;
  document.getElementById("cal_dropXr03c01_divXpostr_img").src = film_04_postr;
  document.getElementById("cal_dropXr03c02_divXpostr_img").src = film_05_postr;
  document.getElementById("cal_dropXr03c03_divXpostr_img").src = film_06_postr;
  document.getElementById("cal_dropXr03c04_divXpostr_img").src = film_07_postr;
  document.getElementById("cal_dropXr03c05_divXpostr_img").src = film_08_postr;
  document.getElementById("cal_dropXr03c06_divXpostr_img").src = film_09_postr;
  document.getElementById("cal_dropXr03c07_divXpostr_img").src = film_10_postr;
  document.getElementById("cal_dropXr04c01_divXpostr_img").src = film_11_postr;
  document.getElementById("cal_dropXr04c02_divXpostr_img").src = film_12_postr;
  document.getElementById("cal_dropXr04c03_divXpostr_img").src = film_13_postr;
  document.getElementById("cal_dropXr04c04_divXpostr_img").src = film_14_postr;
  document.getElementById("cal_dropXr04c05_divXpostr_img").src = film_15_postr;
  document.getElementById("cal_dropXr04c06_divXpostr_img").src = film_16_postr;
  document.getElementById("cal_dropXr04c07_divXpostr_img").src = film_17_postr;
  document.getElementById("cal_dropXr05c01_divXpostr_img").src = film_18_postr;
  document.getElementById("cal_dropXr05c02_divXpostr_img").src = film_19_postr;
  document.getElementById("cal_dropXr05c03_divXpostr_img").src = film_20_postr;
  document.getElementById("cal_dropXr05c04_divXpostr_img").src = film_21_postr;
  document.getElementById("cal_dropXr05c05_divXpostr_img").src = film_22_postr;
  document.getElementById("cal_dropXr05c06_divXpostr_img").src = film_23_postr;
  document.getElementById("cal_dropXr05c07_divXpostr_img").src = film_24_postr;
  document.getElementById("cal_dropXr06c01_divXpostr_img").src = film_25_postr;
  document.getElementById("cal_dropXr06c02_divXpostr_img").src = film_26_postr;
  document.getElementById("cal_dropXr06c03_divXpostr_img").src = film_27_postr;
  document.getElementById("cal_dropXr06c04_divXpostr_img").src = film_28_postr;
  document.getElementById("cal_dropXr06c05_divXpostr_img").src = film_29_postr;
  document.getElementById("cal_dropXr06c06_divXpostr_img").src = film_30_postr;
  document.getElementById("cal_dropXr06c07_divXpostr_img").src = film_31_postr;
  document.getElementById("cal_dropXr07c01_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c02_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c03_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c04_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c05_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c06_divXpostr_img").src = film_00_postr;
  document.getElementById("cal_dropXr07c07_divXpostr_img").src = film_00_postr;


  document.getElementById("cal_dropXr02c01_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c02_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c03_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c04_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr02c05_divXsynop_txt").innerHTML = film_01_synop;
  document.getElementById("cal_dropXr02c06_divXsynop_txt").innerHTML = film_02_synop;
  document.getElementById("cal_dropXr02c07_divXsynop_txt").innerHTML = film_03_synop;
  document.getElementById("cal_dropXr03c01_divXsynop_txt").innerHTML = film_04_synop;
  document.getElementById("cal_dropXr03c02_divXsynop_txt").innerHTML = film_05_synop;
  document.getElementById("cal_dropXr03c03_divXsynop_txt").innerHTML = film_06_synop;
  document.getElementById("cal_dropXr03c04_divXsynop_txt").innerHTML = film_07_synop;
  document.getElementById("cal_dropXr03c05_divXsynop_txt").innerHTML = film_08_synop;
  document.getElementById("cal_dropXr03c06_divXsynop_txt").innerHTML = film_09_synop;
  document.getElementById("cal_dropXr03c07_divXsynop_txt").innerHTML = film_10_synop;
  document.getElementById("cal_dropXr04c01_divXsynop_txt").innerHTML = film_11_synop;
  document.getElementById("cal_dropXr04c02_divXsynop_txt").innerHTML = film_12_synop;
  document.getElementById("cal_dropXr04c03_divXsynop_txt").innerHTML = film_13_synop;
  document.getElementById("cal_dropXr04c04_divXsynop_txt").innerHTML = film_14_synop;
  document.getElementById("cal_dropXr04c05_divXsynop_txt").innerHTML = film_15_synop;
  document.getElementById("cal_dropXr04c06_divXsynop_txt").innerHTML = film_16_synop;
  document.getElementById("cal_dropXr04c07_divXsynop_txt").innerHTML = film_17_synop;
  document.getElementById("cal_dropXr05c01_divXsynop_txt").innerHTML = film_18_synop;
  document.getElementById("cal_dropXr05c02_divXsynop_txt").innerHTML = film_19_synop;
  document.getElementById("cal_dropXr05c03_divXsynop_txt").innerHTML = film_20_synop;
  document.getElementById("cal_dropXr05c04_divXsynop_txt").innerHTML = film_21_synop;
  document.getElementById("cal_dropXr05c05_divXsynop_txt").innerHTML = film_22_synop;
  document.getElementById("cal_dropXr05c06_divXsynop_txt").innerHTML = film_23_synop;
  document.getElementById("cal_dropXr05c07_divXsynop_txt").innerHTML = film_24_synop;
  document.getElementById("cal_dropXr06c01_divXsynop_txt").innerHTML = film_25_synop;
  document.getElementById("cal_dropXr06c02_divXsynop_txt").innerHTML = film_26_synop;
  document.getElementById("cal_dropXr06c03_divXsynop_txt").innerHTML = film_27_synop;
  document.getElementById("cal_dropXr06c04_divXsynop_txt").innerHTML = film_28_synop;
  document.getElementById("cal_dropXr06c05_divXsynop_txt").innerHTML = film_29_synop;
  document.getElementById("cal_dropXr06c06_divXsynop_txt").innerHTML = film_30_synop;
  document.getElementById("cal_dropXr06c07_divXsynop_txt").innerHTML = film_31_synop;
  document.getElementById("cal_dropXr07c01_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c02_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c03_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c04_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c05_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c06_divXsynop_txt").innerHTML = film_00_synop;
  document.getElementById("cal_dropXr07c07_divXsynop_txt").innerHTML = film_00_synop;


  document.getElementById("cal_dropXr02c05_watch_aX01").innerHTML =  film_01_watchLnk_01;
  document.getElementById("cal_dropXr02c05_watch_aX02").innerHTML =  film_01_watchLnk_02;
  document.getElementById("cal_dropXr02c05_watch_aX03").innerHTML =  film_01_watchLnk_03;
  document.getElementById("cal_dropXr02c06_watch_aX01").innerHTML =  film_02_watchLnk_01;
  document.getElementById("cal_dropXr02c06_watch_aX02").innerHTML =  film_02_watchLnk_02;
  document.getElementById("cal_dropXr02c06_watch_aX03").innerHTML =  film_02_watchLnk_03;
  document.getElementById("cal_dropXr02c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr02c07_watch_aX01").innerHTML =  film_03_watchLnk_01;
  document.getElementById("cal_dropXr02c07_watch_aX02").innerHTML =  film_03_watchLnk_02;
  document.getElementById("cal_dropXr02c07_watch_aX03").innerHTML =  film_03_watchLnk_03;
  document.getElementById("cal_dropXr03c01_watch_aX01").innerHTML =  film_04_watchLnk_01;
  document.getElementById("cal_dropXr03c01_watch_aX02").innerHTML =  film_04_watchLnk_02;
  document.getElementById("cal_dropXr03c01_watch_aX03").innerHTML =  film_04_watchLnk_03;
  document.getElementById("cal_dropXr03c01_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c02_watch_aX01").innerHTML =  film_05_watchLnk_01;
  document.getElementById("cal_dropXr03c02_watch_aX02").innerHTML =  film_05_watchLnk_02;
  document.getElementById("cal_dropXr03c02_watch_aX03").innerHTML =  film_05_watchLnk_03;
  document.getElementById("cal_dropXr03c03_watch_aX01").innerHTML =  film_06_watchLnk_01;
  document.getElementById("cal_dropXr03c03_watch_aX02").innerHTML =  film_06_watchLnk_02;
  document.getElementById("cal_dropXr03c03_watch_aX03").innerHTML =  film_06_watchLnk_03;
  document.getElementById("cal_dropXr03c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c04_watch_aX01").innerHTML =  film_07_watchLnk_01;
  document.getElementById("cal_dropXr03c04_watch_aX02").innerHTML =  film_07_watchLnk_02;
  document.getElementById("cal_dropXr03c04_watch_aX03").innerHTML =  film_07_watchLnk_03;
  document.getElementById("cal_dropXr03c05_watch_aX01").innerHTML =  film_08_watchLnk_01;
  document.getElementById("cal_dropXr03c05_watch_aX02").innerHTML =  film_08_watchLnk_02;
  document.getElementById("cal_dropXr03c05_watch_aX03").innerHTML =  film_08_watchLnk_03;
  document.getElementById("cal_dropXr03c05_watch_liX02").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c05_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c06_watch_aX01").innerHTML =  film_09_watchLnk_01;
  document.getElementById("cal_dropXr03c06_watch_aX02").innerHTML =  film_09_watchLnk_02;
  document.getElementById("cal_dropXr03c06_watch_aX03").innerHTML =  film_09_watchLnk_03;
  document.getElementById("cal_dropXr03c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr03c07_watch_aX01").innerHTML =  film_10_watchLnk_01;
  document.getElementById("cal_dropXr03c07_watch_aX02").innerHTML =  film_10_watchLnk_02;
  document.getElementById("cal_dropXr03c07_watch_aX03").innerHTML =  film_10_watchLnk_03;
  document.getElementById("cal_dropXr04c01_watch_aX01").innerHTML =  film_11_watchLnk_01;
  document.getElementById("cal_dropXr04c01_watch_aX02").innerHTML =  film_11_watchLnk_02;
  document.getElementById("cal_dropXr04c01_watch_aX03").innerHTML =  film_11_watchLnk_03;
  document.getElementById("cal_dropXr04c01_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c02_watch_aX01").innerHTML =  film_12_watchLnk_01;
  document.getElementById("cal_dropXr04c02_watch_aX02").innerHTML =  film_12_watchLnk_02;
  document.getElementById("cal_dropXr04c02_watch_aX03").innerHTML =  film_12_watchLnk_03;
  document.getElementById("cal_dropXr04c02_watch_liX02").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c02_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c03_watch_aX01").innerHTML =  film_13_watchLnk_01;
  document.getElementById("cal_dropXr04c03_watch_aX02").innerHTML =  film_13_watchLnk_02;
  document.getElementById("cal_dropXr04c03_watch_aX03").innerHTML =  film_13_watchLnk_03;
  document.getElementById("cal_dropXr04c04_watch_aX01").innerHTML =  film_14_watchLnk_01;
  document.getElementById("cal_dropXr04c04_watch_aX02").innerHTML =  film_14_watchLnk_02;
  document.getElementById("cal_dropXr04c04_watch_aX03").innerHTML =  film_14_watchLnk_03;
  document.getElementById("cal_dropXr04c05_watch_aX01").innerHTML =  film_15_watchLnk_01;
  document.getElementById("cal_dropXr04c05_watch_aX02").innerHTML =  film_15_watchLnk_02;
  document.getElementById("cal_dropXr04c05_watch_aX03").innerHTML =  film_15_watchLnk_03;
  document.getElementById("cal_dropXr04c06_watch_aX01").innerHTML =  film_16_watchLnk_01;
  document.getElementById("cal_dropXr04c06_watch_aX02").innerHTML =  film_16_watchLnk_02;
  document.getElementById("cal_dropXr04c06_watch_aX03").innerHTML =  film_16_watchLnk_03;
  document.getElementById("cal_dropXr04c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr04c07_watch_aX01").innerHTML =  film_17_watchLnk_01;
  document.getElementById("cal_dropXr04c07_watch_aX02").innerHTML =  film_17_watchLnk_02;
  document.getElementById("cal_dropXr04c07_watch_aX03").innerHTML =  film_17_watchLnk_03;
  document.getElementById("cal_dropXr05c01_watch_aX01").innerHTML =  film_18_watchLnk_01;
  document.getElementById("cal_dropXr05c01_watch_aX02").innerHTML =  film_18_watchLnk_02;
  document.getElementById("cal_dropXr05c01_watch_aX03").innerHTML =  film_18_watchLnk_03;
  document.getElementById("cal_dropXr05c02_watch_aX01").innerHTML =  film_19_watchLnk_01;
  document.getElementById("cal_dropXr05c02_watch_aX02").innerHTML =  film_19_watchLnk_02;
  document.getElementById("cal_dropXr05c02_watch_aX03").innerHTML =  film_19_watchLnk_03;
  document.getElementById("cal_dropXr05c03_watch_aX01").innerHTML =  film_20_watchLnk_01;
  document.getElementById("cal_dropXr05c03_watch_aX02").innerHTML =  film_20_watchLnk_02;
  document.getElementById("cal_dropXr05c03_watch_aX03").innerHTML =  film_20_watchLnk_03;
  document.getElementById("cal_dropXr05c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr05c04_watch_aX01").innerHTML =  film_21_watchLnk_01;
  document.getElementById("cal_dropXr05c04_watch_aX02").innerHTML =  film_21_watchLnk_02;
  document.getElementById("cal_dropXr05c04_watch_aX03").innerHTML =  film_21_watchLnk_03;
  document.getElementById("cal_dropXr05c05_watch_aX01").innerHTML =  film_22_watchLnk_01;
  document.getElementById("cal_dropXr05c05_watch_aX02").innerHTML =  film_22_watchLnk_02;
  document.getElementById("cal_dropXr05c05_watch_aX03").innerHTML =  film_22_watchLnk_03;
  document.getElementById("cal_dropXr05c06_watch_aX01").innerHTML =  film_23_watchLnk_01;
  document.getElementById("cal_dropXr05c06_watch_aX02").innerHTML =  film_23_watchLnk_02;
  document.getElementById("cal_dropXr05c06_watch_aX03").innerHTML =  film_23_watchLnk_03;
  document.getElementById("cal_dropXr05c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr05c07_watch_aX01").innerHTML =  film_24_watchLnk_01;
  document.getElementById("cal_dropXr05c07_watch_aX02").innerHTML =  film_24_watchLnk_02;
  document.getElementById("cal_dropXr05c07_watch_aX03").innerHTML =  film_24_watchLnk_03;
  document.getElementById("cal_dropXr06c01_watch_aX01").innerHTML =  film_25_watchLnk_01;
  document.getElementById("cal_dropXr06c01_watch_aX02").innerHTML =  film_25_watchLnk_02;
  document.getElementById("cal_dropXr06c01_watch_aX03").innerHTML =  film_25_watchLnk_03;
  document.getElementById("cal_dropXr06c02_watch_aX01").innerHTML =  film_26_watchLnk_01;
  document.getElementById("cal_dropXr06c02_watch_aX02").innerHTML =  film_26_watchLnk_02;
  document.getElementById("cal_dropXr06c02_watch_aX03").innerHTML =  film_26_watchLnk_03;
  document.getElementById("cal_dropXr06c03_watch_aX01").innerHTML =  film_27_watchLnk_01;
  document.getElementById("cal_dropXr06c03_watch_aX02").innerHTML =  film_27_watchLnk_02;
  document.getElementById("cal_dropXr06c03_watch_aX03").innerHTML =  film_27_watchLnk_03;
  document.getElementById("cal_dropXr06c03_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr06c04_watch_aX01").innerHTML =  film_28_watchLnk_01;
  document.getElementById("cal_dropXr06c04_watch_aX02").innerHTML =  film_28_watchLnk_02;
  document.getElementById("cal_dropXr06c04_watch_aX03").innerHTML =  film_28_watchLnk_03;
  document.getElementById("cal_dropXr06c05_watch_aX01").innerHTML =  film_29_watchLnk_01;
  document.getElementById("cal_dropXr06c05_watch_aX02").innerHTML =  film_29_watchLnk_02;
  document.getElementById("cal_dropXr06c05_watch_aX03").innerHTML =  film_29_watchLnk_03;
  document.getElementById("cal_dropXr06c06_watch_aX01").innerHTML =  film_30_watchLnk_01;
  document.getElementById("cal_dropXr06c06_watch_aX02").innerHTML =  film_30_watchLnk_02;
  document.getElementById("cal_dropXr06c06_watch_aX03").innerHTML =  film_30_watchLnk_03;
  document.getElementById("cal_dropXr06c06_watch_liX03").classList.add("hidden_element");
  document.getElementById("cal_dropXr06c07_watch_aX01").innerHTML =  film_31_watchLnk_01;
  document.getElementById("cal_dropXr06c07_watch_aX02").innerHTML =  film_31_watchLnk_02;
  document.getElementById("cal_dropXr06c07_watch_aX03").innerHTML =  film_31_watchLnk_03;
  document.getElementById("cal_dropXr06c07_watch_liX03").classList.add("hidden_element");


  var cal_dropXr02c05_watchURL_01 =                                  film_01_watchURL_01;
  var cal_dropXr02c05_watchURL_02 =                                  film_01_watchURL_02;
  var cal_dropXr02c05_watchURL_03 =                                  film_01_watchURL_03;
  var cal_dropXr02c06_watchURL_01 =                                  film_02_watchURL_01;
  var cal_dropXr02c06_watchURL_02 =                                  film_02_watchURL_02;
  var cal_dropXr02c06_watchURL_03 =                                  film_02_watchURL_03;
  var cal_dropXr02c07_watchURL_01 =                                  film_03_watchURL_01;
  var cal_dropXr02c07_watchURL_02 =                                  film_03_watchURL_02;
  var cal_dropXr02c07_watchURL_03 =                                  film_03_watchURL_03;
  var cal_dropXr03c01_watchURL_01 =                                  film_04_watchURL_01;
  var cal_dropXr03c01_watchURL_02 =                                  film_04_watchURL_02;
  var cal_dropXr03c01_watchURL_03 =                                  film_04_watchURL_03;
  var cal_dropXr03c02_watchURL_01 =                                  film_05_watchURL_01;
  var cal_dropXr03c02_watchURL_02 =                                  film_05_watchURL_02;
  var cal_dropXr03c02_watchURL_03 =                                  film_05_watchURL_03;
  var cal_dropXr03c03_watchURL_01 =                                  film_06_watchURL_01;
  var cal_dropXr03c03_watchURL_02 =                                  film_06_watchURL_02;
  var cal_dropXr03c03_watchURL_03 =                                  film_06_watchURL_03;
  var cal_dropXr03c04_watchURL_01 =                                  film_07_watchURL_01;
  var cal_dropXr03c04_watchURL_02 =                                  film_07_watchURL_02;
  var cal_dropXr03c04_watchURL_03 =                                  film_07_watchURL_03;
  var cal_dropXr03c05_watchURL_01 =                                  film_08_watchURL_01;
  var cal_dropXr03c05_watchURL_02 =                                  film_08_watchURL_02;
  var cal_dropXr03c05_watchURL_03 =                                  film_08_watchURL_03;
  var cal_dropXr03c06_watchURL_01 =                                  film_09_watchURL_01;
  var cal_dropXr03c06_watchURL_02 =                                  film_09_watchURL_02;
  var cal_dropXr03c06_watchURL_03 =                                  film_09_watchURL_03;
  var cal_dropXr03c07_watchURL_01 =                                  film_10_watchURL_01;
  var cal_dropXr03c07_watchURL_02 =                                  film_10_watchURL_02;
  var cal_dropXr03c07_watchURL_03 =                                  film_10_watchURL_03;
  var cal_dropXr04c01_watchURL_01 =                                  film_11_watchURL_01;
  var cal_dropXr04c01_watchURL_02 =                                  film_11_watchURL_02;
  var cal_dropXr04c01_watchURL_03 =                                  film_11_watchURL_03;
  var cal_dropXr04c02_watchURL_01 =                                  film_12_watchURL_01;
  var cal_dropXr04c02_watchURL_02 =                                  film_12_watchURL_02;
  var cal_dropXr04c02_watchURL_03 =                                  film_12_watchURL_03;
  var cal_dropXr04c03_watchURL_01 =                                  film_13_watchURL_01;
  var cal_dropXr04c03_watchURL_02 =                                  film_13_watchURL_02;
  var cal_dropXr04c03_watchURL_03 =                                  film_13_watchURL_03;
  var cal_dropXr04c04_watchURL_01 =                                  film_14_watchURL_01;
  var cal_dropXr04c04_watchURL_02 =                                  film_14_watchURL_02;
  var cal_dropXr04c04_watchURL_03 =                                  film_14_watchURL_03;
  var cal_dropXr04c05_watchURL_01 =                                  film_15_watchURL_01;
  var cal_dropXr04c05_watchURL_02 =                                  film_15_watchURL_02;
  var cal_dropXr04c05_watchURL_03 =                                  film_15_watchURL_03;
  var cal_dropXr04c06_watchURL_01 =                                  film_16_watchURL_01;
  var cal_dropXr04c06_watchURL_02 =                                  film_16_watchURL_02;
  var cal_dropXr04c06_watchURL_03 =                                  film_16_watchURL_03;
  var cal_dropXr04c07_watchURL_01 =                                  film_17_watchURL_01;
  var cal_dropXr04c07_watchURL_02 =                                  film_17_watchURL_02;
  var cal_dropXr04c07_watchURL_03 =                                  film_17_watchURL_03;
  var cal_dropXr05c01_watchURL_01 =                                  film_18_watchURL_01;
  var cal_dropXr05c01_watchURL_02 =                                  film_18_watchURL_02;
  var cal_dropXr05c01_watchURL_03 =                                  film_18_watchURL_03;
  var cal_dropXr05c02_watchURL_01 =                                  film_19_watchURL_01;
  var cal_dropXr05c02_watchURL_02 =                                  film_19_watchURL_02;
  var cal_dropXr05c02_watchURL_03 =                                  film_19_watchURL_03;
  var cal_dropXr05c03_watchURL_01 =                                  film_20_watchURL_01;
  var cal_dropXr05c03_watchURL_02 =                                  film_20_watchURL_02;
  var cal_dropXr05c03_watchURL_03 =                                  film_20_watchURL_03;
  var cal_dropXr05c04_watchURL_01 =                                  film_21_watchURL_01;
  var cal_dropXr05c04_watchURL_02 =                                  film_21_watchURL_02;
  var cal_dropXr05c04_watchURL_03 =                                  film_21_watchURL_03;
  var cal_dropXr05c05_watchURL_01 =                                  film_22_watchURL_01;
  var cal_dropXr05c05_watchURL_02 =                                  film_22_watchURL_02;
  var cal_dropXr05c05_watchURL_03 =                                  film_22_watchURL_03;
  var cal_dropXr05c06_watchURL_01 =                                  film_23_watchURL_01;
  var cal_dropXr05c06_watchURL_02 =                                  film_23_watchURL_02;
  var cal_dropXr05c06_watchURL_03 =                                  film_23_watchURL_03;
  var cal_dropXr05c07_watchURL_01 =                                  film_24_watchURL_01;
  var cal_dropXr05c07_watchURL_02 =                                  film_24_watchURL_02;
  var cal_dropXr05c07_watchURL_03 =                                  film_24_watchURL_03;
  var cal_dropXr06c01_watchURL_01 =                                  film_25_watchURL_01;
  var cal_dropXr06c01_watchURL_02 =                                  film_25_watchURL_02;
  var cal_dropXr06c01_watchURL_03 =                                  film_25_watchURL_03;
  var cal_dropXr06c02_watchURL_01 =                                  film_26_watchURL_01;
  var cal_dropXr06c02_watchURL_02 =                                  film_26_watchURL_02;
  var cal_dropXr06c02_watchURL_03 =                                  film_26_watchURL_03;
  var cal_dropXr06c03_watchURL_01 =                                  film_27_watchURL_01;
  var cal_dropXr06c03_watchURL_02 =                                  film_27_watchURL_02;
  var cal_dropXr06c03_watchURL_03 =                                  film_27_watchURL_03;
  var cal_dropXr06c04_watchURL_01 =                                  film_28_watchURL_01;
  var cal_dropXr06c04_watchURL_02 =                                  film_28_watchURL_02;
  var cal_dropXr06c04_watchURL_03 =                                  film_28_watchURL_03;
  var cal_dropXr06c05_watchURL_01 =                                  film_29_watchURL_01;
  var cal_dropXr06c05_watchURL_02 =                                  film_29_watchURL_02;
  var cal_dropXr06c05_watchURL_03 =                                  film_29_watchURL_03;
  var cal_dropXr06c06_watchURL_01 =                                  film_30_watchURL_01;
  var cal_dropXr06c06_watchURL_02 =                                  film_30_watchURL_02;
  var cal_dropXr06c06_watchURL_03 =                                  film_30_watchURL_03;
  var cal_dropXr06c07_watchURL_01 =                                  film_13_watchURL_01;
  var cal_dropXr06c07_watchURL_02 =                                  film_31_watchURL_02;
  var cal_dropXr06c07_watchURL_03 =                                  film_31_watchURL_03;


  var cal_dropXr02c05_aboutURL_01 =                                  film_01_aboutURL_01;
  var cal_dropXr02c05_aboutURL_02 =                                  film_01_aboutURL_02;
  var cal_dropXr02c05_aboutURL_03 =                                  film_01_aboutURL_03;
  var cal_dropXr02c06_aboutURL_01 =                                  film_02_aboutURL_01;
  var cal_dropXr02c06_aboutURL_02 =                                  film_02_aboutURL_02;
  var cal_dropXr02c06_aboutURL_03 =                                  film_02_aboutURL_03;
  var cal_dropXr02c07_aboutURL_01 =                                  film_03_aboutURL_01;
  var cal_dropXr02c07_aboutURL_02 =                                  film_03_aboutURL_02;
  var cal_dropXr02c07_aboutURL_03 =                                  film_03_aboutURL_03;
  var cal_dropXr03c01_aboutURL_01 =                                  film_04_aboutURL_01;
  var cal_dropXr03c01_aboutURL_02 =                                  film_04_aboutURL_02;
  var cal_dropXr03c01_aboutURL_03 =                                  film_04_aboutURL_03;
  var cal_dropXr03c02_aboutURL_01 =                                  film_05_aboutURL_01;
  var cal_dropXr03c02_aboutURL_02 =                                  film_05_aboutURL_02;
  var cal_dropXr03c02_aboutURL_03 =                                  film_05_aboutURL_03;
  var cal_dropXr03c03_aboutURL_01 =                                  film_06_aboutURL_01;
  var cal_dropXr03c03_aboutURL_02 =                                  film_06_aboutURL_02;
  var cal_dropXr03c03_aboutURL_03 =                                  film_06_aboutURL_03;
  var cal_dropXr03c04_aboutURL_01 =                                  film_07_aboutURL_01;
  var cal_dropXr03c04_aboutURL_02 =                                  film_07_aboutURL_02;
  var cal_dropXr03c04_aboutURL_03 =                                  film_07_aboutURL_03;
  var cal_dropXr03c05_aboutURL_01 =                                  film_08_aboutURL_01;
  var cal_dropXr03c05_aboutURL_02 =                                  film_08_aboutURL_02;
  var cal_dropXr03c05_aboutURL_03 =                                  film_08_aboutURL_03;
  var cal_dropXr03c06_aboutURL_01 =                                  film_09_aboutURL_01;
  var cal_dropXr03c06_aboutURL_02 =                                  film_09_aboutURL_02;
  var cal_dropXr03c06_aboutURL_03 =                                  film_09_aboutURL_03;
  var cal_dropXr03c07_aboutURL_01 =                                  film_10_aboutURL_01;
  var cal_dropXr03c07_aboutURL_02 =                                  film_10_aboutURL_02;
  var cal_dropXr03c07_aboutURL_03 =                                  film_10_aboutURL_03;
  var cal_dropXr04c01_aboutURL_01 =                                  film_11_aboutURL_01;
  var cal_dropXr04c01_aboutURL_02 =                                  film_11_aboutURL_02;
  var cal_dropXr04c01_aboutURL_03 =                                  film_11_aboutURL_03;
  var cal_dropXr04c02_aboutURL_01 =                                  film_12_aboutURL_01;
  var cal_dropXr04c02_aboutURL_02 =                                  film_12_aboutURL_02;
  var cal_dropXr04c02_aboutURL_03 =                                  film_12_aboutURL_03;
  var cal_dropXr04c03_aboutURL_01 =                                  film_13_aboutURL_01;
  var cal_dropXr04c03_aboutURL_02 =                                  film_13_aboutURL_02;
  var cal_dropXr04c03_aboutURL_03 =                                  film_13_aboutURL_03;
  var cal_dropXr04c04_aboutURL_01 =                                  film_14_aboutURL_01;
  var cal_dropXr04c04_aboutURL_02 =                                  film_14_aboutURL_02;
  var cal_dropXr04c04_aboutURL_03 =                                  film_14_aboutURL_03;
  var cal_dropXr04c05_aboutURL_01 =                                  film_15_aboutURL_01;
  var cal_dropXr04c05_aboutURL_02 =                                  film_15_aboutURL_02;
  var cal_dropXr04c05_aboutURL_03 =                                  film_15_aboutURL_03;
  var cal_dropXr04c06_aboutURL_01 =                                  film_16_aboutURL_01;
  var cal_dropXr04c06_aboutURL_02 =                                  film_16_aboutURL_02;
  var cal_dropXr04c06_aboutURL_03 =                                  film_16_aboutURL_03;
  var cal_dropXr04c07_aboutURL_01 =                                  film_17_aboutURL_01;
  var cal_dropXr04c07_aboutURL_02 =                                  film_17_aboutURL_02;
  var cal_dropXr04c07_aboutURL_03 =                                  film_17_aboutURL_03;
  var cal_dropXr05c01_aboutURL_01 =                                  film_18_aboutURL_01;
  var cal_dropXr05c01_aboutURL_02 =                                  film_18_aboutURL_02;
  var cal_dropXr05c01_aboutURL_03 =                                  film_18_aboutURL_03;
  var cal_dropXr05c02_aboutURL_01 =                                  film_19_aboutURL_01;
  var cal_dropXr05c02_aboutURL_02 =                                  film_19_aboutURL_02;
  var cal_dropXr05c02_aboutURL_03 =                                  film_19_aboutURL_03;
  var cal_dropXr05c03_aboutURL_01 =                                  film_20_aboutURL_01;
  var cal_dropXr05c03_aboutURL_02 =                                  film_20_aboutURL_02;
  var cal_dropXr05c03_aboutURL_03 =                                  film_20_aboutURL_03;
  var cal_dropXr05c04_aboutURL_01 =                                  film_21_aboutURL_01;
  var cal_dropXr05c04_aboutURL_02 =                                  film_21_aboutURL_02;
  var cal_dropXr05c04_aboutURL_03 =                                  film_21_aboutURL_03;
  var cal_dropXr05c05_aboutURL_01 =                                  film_22_aboutURL_01;
  var cal_dropXr05c05_aboutURL_02 =                                  film_22_aboutURL_02;
  var cal_dropXr05c05_aboutURL_03 =                                  film_22_aboutURL_03;
  var cal_dropXr05c06_aboutURL_01 =                                  film_23_aboutURL_01;
  var cal_dropXr05c06_aboutURL_01 =                                  film_23_aboutURL_01;
  var cal_dropXr05c06_aboutURL_02 =                                  film_23_aboutURL_02;
  var cal_dropXr05c07_aboutURL_03 =                                  film_24_aboutURL_03;
  var cal_dropXr05c07_aboutURL_02 =                                  film_24_aboutURL_02;
  var cal_dropXr05c07_aboutURL_03 =                                  film_24_aboutURL_03;
  var cal_dropXr06c01_aboutURL_01 =                                  film_25_aboutURL_01;
  var cal_dropXr06c01_aboutURL_02 =                                  film_25_aboutURL_02;
  var cal_dropXr06c01_aboutURL_03 =                                  film_25_aboutURL_03;
  var cal_dropXr06c02_aboutURL_01 =                                  film_26_aboutURL_01;
  var cal_dropXr06c02_aboutURL_02 =                                  film_26_aboutURL_02;
  var cal_dropXr06c02_aboutURL_03 =                                  film_26_aboutURL_03;
  var cal_dropXr06c03_aboutURL_01 =                                  film_27_aboutURL_01;
  var cal_dropXr06c03_aboutURL_02 =                                  film_27_aboutURL_02;
  var cal_dropXr06c03_aboutURL_03 =                                  film_27_aboutURL_03;
  var cal_dropXr06c04_aboutURL_01 =                                  film_28_aboutURL_01;
  var cal_dropXr06c04_aboutURL_02 =                                  film_28_aboutURL_02;
  var cal_dropXr06c04_aboutURL_03 =                                  film_28_aboutURL_03;
  var cal_dropXr06c05_aboutURL_01 =                                  film_29_aboutURL_01;
  var cal_dropXr06c05_aboutURL_02 =                                  film_29_aboutURL_02;
  var cal_dropXr06c05_aboutURL_03 =                                  film_29_aboutURL_03;
  var cal_dropXr06c06_aboutURL_01 =                                  film_30_aboutURL_01;
  var cal_dropXr06c06_aboutURL_01 =                                  film_30_aboutURL_01;
  var cal_dropXr06c06_aboutURL_02 =                                  film_30_aboutURL_02;
  var cal_dropXr06c07_aboutURL_03 =                                  film_31_aboutURL_03;
  var cal_dropXr06c07_aboutURL_02 =                                  film_31_aboutURL_02;
  var cal_dropXr06c07_aboutURL_03 =                                  film_31_aboutURL_03;

  /**************************************
  ********** functions go here **********
  **************************************/
  function set_text() {
    var all_watch_hdrs = document.querySelectorAll(".cal_drop_watch_hdr");
    var all_about_hdrs = document.querySelectorAll(".cal_drop_about_hdr");
    var all_a1s = document.querySelectorAll(".cal_drop_about_ls_itemX01");
    var all_a2s = document.querySelectorAll(".cal_drop_about_ls_itemX02");
    var all_a3s = document.querySelectorAll(".cal_drop_about_ls_itemX03");
    all_watch_hdrs.forEach(function(watch_hdr) {
      watch_hdr.innerHTML = drop_watch_header_text;
    });
    all_about_hdrs.forEach(function(about_hdr) {
      about_hdr.innerHTML = drop_about_header_text;
    });
    all_a1s.forEach(function(a1) {
      a1.innerHTML = drop_about_a1;
    });
    all_a2s.forEach(function(a2) {
      a2.innerHTML = drop_about_a2;
    });
    all_a3s.forEach(function(a3) {
      a3.innerHTML = drop_about_a3;
    });
  };

  function click__cal_button(button, drop) {
    var all_buttons = document.querySelectorAll(".cal_cell_button");
    var all_drops = document.querySelectorAll(".cal_drop");
    if (
      document.getElementById(drop).style.display === "none" ||
      document.getElementById(drop).style.display === ""
    ) {
      all_buttons.forEach(function(each_button) {
        each_button.style.backgroundColor = "inherit";
      });
      all_drops.forEach(function(each_drop) {
        each_drop.style.display = "none";
      });
      /*
      document.getElementById(button).style.backgroundColor = main_theme_clr_2_slct;
      */
      if (media_mbl.matches) { // If media query matches
        document.getElementById(button).style.backgroundColor = "rgb(12, 12, 12)";
      } else {
        document.getElementById(button).style.backgroundColor = "rgb(65, 40, 77)";
      }
      document.getElementById(drop).style.display = "grid";
    } else {
      document.getElementById(button).style.backgroundColor = "inherit";
      document.getElementById(drop).style.display = "none";
    }
  };

  function watch_link(url) {
    if (
      url.includes("123", 0)
    ) {
      var answer = confirm("123-movies.com is free, but it shows scammy pop-ups and ads. An ad blocker is recommended. Continue?")
      if (answer)
      window.open(url,"_blank");
    } else {
      window.open(url,"_blank");
    }
  };

  function about_link(url) {
    if (
      url.includes("123", 0)
    ) {
      var answer = confirm("123-movies.com is free, but it shows scammy pop-ups and ads. An ad blocker is recommended. Continue?")
      if (answer)
      window.open(url,"_blank");
    } else {
      window.open(url,"_blank");
    }
  };

  function click_day() {
    var all_buttons = document.querySelectorAll('.'+date);
    all_buttons.forEach(function(each_button) {
      each_button.click();
    });
  };

  function onload() {
    click_day();
    set_text();
  }

  window.onload = onload();
