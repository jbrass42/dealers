/*Replace default form with GF and populate fields**/
if( jQuery('#eagle-detail').length ) {
jQuery('.eagle-content-sidebar-wrapper .eagle-forms > div').remove();
jQuery('.eagle-content-sidebar-wrapper .eagle-forms').append(jQuery('#eagle-widget-area'));
jQuery('.gf-hidden').css('display','none');

    var	dealer_name = jQuery('#eagle-contact-name').text();
    var	dealer_address = jQuery('#eagle-contact-vehicle-location').text();
    var	dealer_phone = jQuery('#eagle-contact-phone').text();
    var	dealer_url = jQuery('.eagle-breadcrumbs a').attr('href');
    var sales_class = jQuery('#eagle-main-headline h2 .eagle-saleclass').text();
    var year = jQuery('#eagle-main-headline h2 .eagle-year').text();
    var	make = jQuery('#eagle-main-headline h2 .eagle-make').text();
    var	model = jQuery('#eagle-main-headline h2 .eagle-model').text();
    var	trim = jQuery('#eagle-main-headline h2 .eagle-trim').text();
    var	stock_number = jQuery('#eagle-stock-number').text();
    var	vin = jQuery('#eagle-vin-number').text();
    var main_price = jQuery('.hidden-vehicle-prices .hidden-main').text();
	jQuery('.dealer_name .ginput_container input').val( dealer_name ); 
	jQuery('.dealer_address .ginput_container input').val( dealer_address ); 
	jQuery('.dealer_phone .ginput_container input').val( dealer_phone ); 
	jQuery('.dealer_url .ginput_container input').val( dealer_url ); 
	jQuery('.sales_class .ginput_container input').val( sales_class ); 
	jQuery('.year .ginput_container input').val( year ); 
	jQuery('.make .ginput_container input').val( make ); 
	jQuery('.model .ginput_container input').val( model ); 
	jQuery('.trim .ginput_container input').val( trim ); 
	jQuery('.stock_number .ginput_container input').val( stock_number ); 
	jQuery('.vin .ginput_container input').val( vin ); 
	jQuery('.main_price .ginput_container input').val( main_price ); 
}
