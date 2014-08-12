if (jQuery('#dealertrend-inventory-api').length){
	
	saleclass=saleclass=jQuery('.eagle-saleclass:first').text();		

//NEW List and Detail

if (jQuery('.eagle-breadcrumbs a:nth-child(2)').text().match(/new/i) != null) {
	//List
	if (jQuery('#eagle-listing').length){
	
	jQuery('.eagle-listing-button').css({'width':'20%'});
		jQuery('.eagle-vehicle').each(function(){
		  vin = jQuery(this).attr('id');
    make=jQuery(this).find('.eagle-make').text();

  		switch(make){
		  	case 'Ford':
					linkFord =("<div class='eagle-listing-button eagle-confirm-button'><a class='ws' target='_blank' href='http://fordlabels.webview.biz/webviewhybrid/WindowSticker.aspx?vin="+vin+"&ref=VL'>Window Sticker</a></div>");
  			jQuery(this).find('.eagle-listing-buttons').append(linkFord);
				break;
	  		case 'Chevrolet':
					linkChevy =("<div class='eagle-listing-button eagle-confirm-button'><a class='ws' target='_blank' href='http://www.bobvalentichevy.com/f_WindowSticker?VIN="+vin+"'>Window Sticker</a></div>");
					jQuery(this).find('.eagle-listing-buttons').append(linkChevy);
		  	break;
		  	}

			makeRegex=/(chrysler|dodge|ram|jeep)/i;
    		if (makeRegex.test(make)) {
    			linkCDJR = ("<div class='eagle-listing-button eagle-confirm-button'><a class='ws' target='_blank' href='http://www.chrysler.com/hostd/windowsticker/getWindowStickerPdf.do?vin="+vin+"'>Window Sticker</a></div>");
    			jQuery(this).find('.eagle-listing-buttons').append(linkCDJR);
    		}
});
		
	}
	 else {	
	//Detail
		vin = jQuery('#eagle-vin-number').text();
		make=jQuery('#eagle-content-headline .eagle-make').text();
		  switch(make){
		  	case 'Ford':
					linkFord =("<a class='ws' target='_blank' href='http://fordlabels.webview.biz/webviewhybrid/WindowSticker.aspx?vin="+vin+"&ref=VL'>Window Sticker</a>");
					jQuery('#eagle-stock-vin-wrapper').append(linkFord);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
		  	break;
		  	case 'Chevrolet':
					linkChevy =("<a class='ws' target='_blank' href='http://www.bobvalentichevy.com/f_WindowSticker?VIN="+vin+"'>Window Sticker</a>");
					jQuery('#eagle-stock-vin-wrapper').append(linkChevy);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
		  	break;
		  	}

      	modelRegex=/(chrysler|dodge|ram|jeep)/i;
    		if (modelRegex.test(model)) {
    			linkCDJR = ("<a class='ws' target='_blank' href='http://www.chrysler.com/hostd/windowsticker/getWindowStickerPdf.do?vin="+vin+"'>Window Sticker</a>");
    			jQuery('#eagle-stock-vin-wrapper').append(linkCDJR);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
    		}
	}
}
if (jQuery('.eagle-breadcrumbs a:nth-child(2)').text().match(/used/i) != null) {
	if (jQuery('#eagle-listing').length){
	  jQuery('.eagle-vehicle').each(function(){
			vin = jQuery(this).attr('id');
			text = "<a class='carfax' href='http://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&vin="+vin+"' target='_blank'><img src='http://www.carfaxonline.com/media/img/subscriber/buyback.jpg'; width='145' height='56' border='0'></a>";
			jQuery(this).find('.eagle-column-right').append(text);
		});
		jQuery('.carfax').css({'display':'block','margin':'5% 0 0 0'});
	} else { //Detail
	
	}
}


}
