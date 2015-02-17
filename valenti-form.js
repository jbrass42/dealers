//Add custom forms to list and detail
if ( jQuery('#dealertrend-inventory-api').length ) { 
//Hides GF
  jQuery('.inventory .eprice-form').hide();
  jQuery('.gf-hidden').css('display','none');

//add custom eprice form DETAIL
  if ( jQuery('#eagle-detail').length ) { 
    jQuery('.eagle-get-price-button.eagle-show-form').removeClass('eagle-show-form').addClass('eprice-cust');

    //store specific routing for Used   
stockRouting = jQuery('#eagle-stock-number').text().charAt(0);
jQuery('.stockRouting input').val(stockRouting);
    
    //pop up GF
  jQuery( '.eprice-cust' ).click(function() {
    jQuery('.inventory .eprice-form').dialog({ width: 320, // overcomes width:'auto' and maxWidth bug
    maxWidth: 320,
    height: 'auto',
    modal: true,
    fluid: true, //new option
    resizable: false
     },{ title: "GET YOUR ePrice" });
  });
  } else {   //add to listing
    if( jQuery('#eagle-listing').length){
        jQuery('.eagle-vehicle').each(function(){
               
          jQuery('.eagle-listing-button.eagle-show-form.eagle-confirm-button').remove();
          jQuery('.eagle-listing-button.eagle-show-form.eagle-question-button').remove();
          jQuery('.eagle-detail-button.eagle-show-form').remove();
          
          detailbtn = jQuery(this).find('.eagle-listing-button.eagle-details-button').removeClass('eagle-details-button').addClass('eagle-detail-button').removeClass('eagle-listing-button');
          jQuery(this).find('.eagle-price').after(detailbtn);
               
        });
      }
     
    }
}
