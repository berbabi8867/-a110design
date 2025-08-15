$(document).ready(function() {
	// inject btn after #row-loginmenu
  if (typeof btns_after_row_loginmenu !== 'undefined') {
  	let inject_html = '<div id="row-injected-after-loginmenu" class="d-flex flex-column gap-3">';    
    for (let i = 0; i < btns_after_row_loginmenu.length; i++) {
      const btn = btns_after_row_loginmenu[i];
      inject_html += '<a href="'+btn[2]+'" class="btn btn-lg flex-fill '+btn[3]+'" id="'+btn[0]+'">'+btn[1]+'</a>';
    }
  	inject_html += '</div>';
  	$('#row-loginmenu').after(inject_html);
  }

  // inject btn after #member-status-panel
  if (typeof btns_after_member_status_panel !== 'undefined') {
    let inject_html = '<div id="row-injected-after-member-status-panel" class="d-flex flex-column gap-3">';
    for (let i = 0; i < btns_after_member_status_panel.length; i++) {
      const btn = btns_after_member_status_panel[i];
      inject_html += '<a href="'+btn[2]+'" class="btn btn-lg flex-fill '+btn[3]+'" id="'+btn[0]+'">'+btn[1]+'</a>';
    }
    inject_html += '</div>';
    $('#member-status-panel').after(inject_html);
  }


  // inject download apk
  if (typeof download_apk_link !== 'undefined') {
    if (navigator.userAgent.match(/Android/i)) {
      let line1 = 'download APK';
      let line2 = 'anti blokir';      
      if (typeof download_apk_line1 !== 'undefined') line1 = download_apk_line1;
      if (typeof download_apk_line2 !== 'undefined') line2 = download_apk_line2;
      let html = '<div id="container-apk">';
      html += '<div id="container-apk-button">';
      html += '<a id="apk-button" href="'+download_apk_link+'">';
      // android logo
      html += '<img src="https://fffiiillleee.com/open-img-pub/named-panel/android.svg" height="24" /> ';
      html += 'klik di sini';
      html += '</a>';
      html += '</div>';
      html += '<div id="container-apk-a">'+line1+'</div>';
      html += '<div id="container-apk-b">'+line2+'</div>';
      html += '</div>';
      $('#navbar-top-wrapper').prepend(html);

      // margin top of content need to be 123
      $('#content').css('margin-top', '123px');
    }
  }
});
