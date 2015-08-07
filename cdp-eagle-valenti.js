if (jQuery('#cardealerpress-inventory').length){
	saleclass=jQuery('.inventory-saleclass:first').text();		
//NEW List and Detail

if (saleclass === 'New') {
  jQuery('.inventory-asking-price.inventory-main-price').remove(); 
  jQuery('.inventory-strike-through.inventory-asking-price.inventory-ais').remove(); 
  jQuery('.inventory-asking-price.inventory-main-price').remove(); 
  jQuery('.inventory-your-price.inventory-ais.inventory-main-price').remove();
  
	//List
	if (jQuery('#inventory-listing').length){
		jQuery('#inventory-top-search').prepend(jQuery('#detail-widget-area'));  //move search widget to top
    	jQuery('#detail-widget-area .inventory-list:last').remove();
	
		jQuery('.inventory-vehicle').each(function(){
		  	vin = jQuery(this).attr('id');
	      	make=jQuery(this).find('.inventory-make').text();
	      	windowSticker = addWindowSticker(make);
	      	jQuery(this).find('.inventory-listing-buttons').append(windowSticker);
			eprice = jQuery(this).find('.inventory-listing-button.inventory-confirm-button.inventory_get_gform');
	      	jQuery(this).find('.inventory-column-right').append(eprice);
    	});
		jQuery('.inventory-listing-button.inventory-confirm-button.inventory_get_gform').removeClass('inventory-listing-button').removeClass('inventory-confirm-button').addClass('inventory-detail-button');
		jQuery('.inventory_get_gform.inventory-detail-button').css({'background-color': 'pink','color': '#f2d337','font-weight': 'bold'});
	}
	 else {	
	//Detail
		vin = jQuery('.inventory-vin').text();
		make=jQuery('.inventory-make').text();
	  windowSticker = addWindowSticker(make);
	  jQuery('#inventory-stock-vin-wrapper').append(windowSticker);
	  jQuery('.ws').css({'font-weight':'bold','color':'#2c3e50'});
	}
}
	if (saleclass === 'Used') {
		jQuery('#inventory-top-search').prepend(jQuery('#detail-widget-area'));  //move search widget to top
		jQuery('#detail-widget-area .inventory-list:first').remove(); //remove NEW search widget
		
		if (jQuery('#inventory-listing').length){
		  jQuery('.inventory-vehicle').each(function(){
				vin = jQuery(this).attr('id');
				text = "<a class='carfax' href='http://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&vin="+vin+"' target='_blank'><img src='http://www.carfaxonline.com/media/img/subscriber/buyback.jpg'; width='145' height='56' border='0'></a>";
				jQuery(this).find('.inventory-column-right').append(text);
			});
			jQuery('.carfax').css({'display':'block','margin':'5% 0 0 0'});
		} 
	}
}
function addWindowSticker(make){
  switch(make){
  	case 'Ford':
  		linkFord =("<div class='inventory-listing-button inventory-details-button'><a class='ws' target='_blank' href='http://fordlabels.webview.biz/webviewhybrid/WindowSticker.aspx?vin="+vin+"&ref=VL'>Window Sticker</a></div>");
    	return linkFord;
  		break;
  	case 'Chevrolet':
  		linkChevy =("<div class='inventory-listing-button inventory-details-button'><a class='ws' target='_blank' href='http://www.bobvalentichevy.com/f_WindowSticker?VIN="+vin+"'>Window Sticker</a></div>");
  		return linkChevy;
  		break;
  }
  
  makeRegex=/(chrysler|dodge|ram|jeep)/i;
  if (makeRegex.test(make)) {
    linkCDJR = ("<div class='inventory-listing-button inventory-details-button'><a class='ws' target='_blank' href='http://www.chrysler.com/hostd/windowsticker/getWindowStickerPdf.do?vin="+vin+"'>Window Sticker</a></div>");
    return linkCDJR;
  }
}
