if (jQuery('#dealertrend-inventory-api').length){
	
	saleclass=saleclass=jQuery('.eagle-saleclass:first').text();		



//NEW List and Detail

if (jQuery('.eagle-breadcrumbs a:nth-child(2)').text().match(/new/i) != null) {
	//List
	if (jQuery('#eagle-listing').length){
		jQuery('.eagle-vehicle').each(function(){
			vin = jQuery(this).attr('id');
			model=jQuery('#eagle-content-headline .eagle-make').text();
		  switch(model){
		  	case 'Ford':
					linkFord =("<a class='ws' target='_blank' href='http://fordlabels.webview.biz/webviewhybrid/WindowSticker.aspx?vin="+vin+"&ref=VL'>Window Sticker</a>");
			jQuery(this).find('.eagle-listing-button').append(text);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
		  	break;
		  	case 'Chevrolet':
					linkChevy =("<a class='ws' target='_blank' href='http://www.bobvalentichevy.com/f_WindowSticker?VIN="+vin+"'>Window Sticker</a>");
			jQuery(this).find('.eagle-listing-button').append(text);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
		  	break;
		  	}
			
			modelRegex=/(chrysler|dodge|ram|jeep)/i;
    		if (modelRegex.test(model)) {
    			linkCDJR = ("<a class='ws' target='_blank' href='http://www.chrysler.com/hostd/windowsticker/getWindowStickerPdf.do?vin="+vin+"'>Window Sticker</a>");
    			jQuery('.eagle-listing-button').append(linkCDJR);
					jQuery('.ws').css({'font-weight':'bold','color':'red'});
    		}

		});
	}
	 else {	
	//Detail
		vin = jQuery('#eagle-vin-number').text();
		model=jQuery('#eagle-content-headline .eagle-make').text();
		  switch(model){
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
}
