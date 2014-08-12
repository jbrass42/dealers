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
		jQuery('.inventory-list.widget').remove(); //remove search widget
		if (jQuery('#eagle-listing').length){
		  jQuery('.eagle-vehicle').each(function(){
				vin = jQuery(this).attr('id');
				text = "<a class='carfax' href='http://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&vin="+vin+"' target='_blank'><img src='http://www.carfaxonline.com/media/img/subscriber/buyback.jpg'; width='145' height='56' border='0'></a>";
				jQuery(this).find('.eagle-column-right').append(text);
			});
			jQuery('.carfax').css({'display':'block','margin':'5% 0 0 0'});
		} 
	}
}

/**************
price moving
**************/

//for vehicles with no ais rebate
if( jQuery('#dealertrend-inventory-api').length ){
if( jQuery('#eagle-listing').length ){
		jQuery('.eagle-vehicle').each( function() {
			if( jQuery(this).find('.eagle-saleclass').text().match(/new/i) != null ){
			jQuery('.eagle-msrp').remove();   //ADD

				fields = get_fields( jQuery(this).find('.hidden-vehicle-prices > div') );

				jQuery(this).find('.eagle-price > div').css({'display' : 'none'})

				show_no_ais = get_display_no_ais( fields );
				jQuery(this).find('.eagle-price').append( show_no_ais );

			}
		});
	}
}


if( jQuery('#eagle-detail').length ){

		fields = get_fields( jQuery('.hidden-vehicle-prices > div') );

		jQuery('.eagle-price > div').css({'display' : 'none'})

		show = get_display( fields, 'detail' );
		jQuery('.eagle-price').append( show );
	}

function currency_display( val ){
	display = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return '$' + display;
}

function get_fields( fields ){
	obj = {};

	jQuery( fields ).each( function() {
		obj[ jQuery(this).attr( 'alt' ) ] = jQuery(this).text();
	});

	return obj;
}

function get_display_no_ais( prices, page ){

	page = typeof page !== 'undefined' ? page : '';

	display = '';
	
 if( prices['msrp'] > 0 ){
		display += '<div class="js-eagle-msrp '+page+'">MSRP: ' + currency_display(prices['msrp']) + '</div>';
	}

	if( prices['msrp'] && prices['msrp'] == prices['asking'] ){
		display += '<div class="js-eagle-msrp '+page+'">MSRP: ' + currency_display(prices['msrp']) + '</div>';
	} else if ( prices['asking'] > 0 ){
		display += '<div class="js-eagle-msrp '+page+'">Asking Price: ' + currency_display(prices['asking']) + '</div>';
	}
	if( fields['rebate'] ){
		display += '<div class="js-eagle-rebate '+page+'">Factory Rebate: $' + prices['rebate'] + '</div>';
	}
	if( fields['discount'] ){
		display += '<div class="js-eagle-rebate '+page+'">Dealer Discount: $' + prices['discount'] + '</div>';
	}
	//change to not show 0
  if (prices['asking'] == 0){
	display += '<div class="js-eagle-main '+page+'"><span class="text">Call for Price</span><br><span class="num"></span></div>';
  		}
  else {
	if (prices['asking'] > 0){
	  if( fields['main']){
		display += '<div class="js-eagle-main '+page+'"><span class="text">Your Valenti Price:</span><br><span class="num">'+ currency_display(prices['main']) +'</span></div>';
	  }
	}
	}
	//end
	

	return display;
}


//for vehicles with ais
if( jQuery('#dealertrend-inventory-api').length ){
 if (jQuery('.eagle-price .eagle-ais-incentive-s-text').length){
	if( jQuery('#eagle-listing').length ){
		jQuery('.eagle-vehicle').each( function() {
			if( jQuery(this).find('.view-available-rebates').length && jQuery(this).find('.eagle-saleclass').text().match(/new/i) != null ){
						jQuery('.eagle-msrp').remove();   //ADD

				fields = get_fields( jQuery(this).find('.hidden-vehicle-prices > div') );
				ais = jQuery(this).find('.eagle-price .eagle-ais-incentive-l-text').text();
				link = ( jQuery(this).find('.eagle-price .eagle-ais-incentive-s-text').html() ).replace(/view ais/i, 'View Incentive Details');

				jQuery(this).find('.eagle-price > div').css({'display' : 'none'})

				show = get_display( fields, ais, link );
				jQuery(this).find('.eagle-price').append( show );

			}
		});
	}

	if( jQuery('#eagle-detail').length ){

		fields = get_fields( jQuery('.hidden-vehicle-prices > div') );
		ais = jQuery('.eagle-price .eagle-ais-incentive-l-text').text();
		link = ( jQuery('.eagle-price .eagle-ais-incentive-s-text').html() ).replace(/view ais/i, 'View Incentive Details');

		jQuery('.eagle-price > div').css({'display' : 'none'})

		show = get_display( fields, ais, link, 'detail' );
		jQuery('.eagle-price').append( show );
	}
}
}

function currency_display( val ){
	display = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return '$' + display;
}
