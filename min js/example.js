(function($) {
    $.fn.itemPage = function(options) {
        var settings = $.extend({
            'items': 0,
            'num_idas': 0,
            'button': ''
        }, options);
        var globalThis = this;
        var itemPageglobal = {
            actual_item: 0,
            btn_clicked : 0,
            _exect: function() {
                $(window).resize(function(event) {
                    itemPageglobal._resize();
                });
                $.gsa({
                    GSA_domain: "http://googleak.esmas.com/search",
                    GSA_query: "site:http://www.televisa.com/telenovelas/el-color-de-la-pasion/noticias",
                    GSA_num: settings.items * settings.num_idas,
                    GSA_client: "televisa_com",
                    GSA_site: "televisa_com",
                    GSA_requiredfields: "tipo:articulo",
                }, function(data) {
                    if (data.RES) {
                        var $results = $.gsa.results(data),
                            $resultsPrinted = "";
                        $.each($results, function(key, metadata) {
                            var $image = (typeof metadata['320x240'] !== "undefined") ? metadata['624x468'] : 'http://imagemockup.com/320/240/99/nature/4';
                            $resultsPrinted += '<div class="carousel-item wtf" style="display:none">';
                            $resultsPrinted += '<a href="' + metadata['URL'] + '" title="' + metadata['title'] + '" target="_self" class="#hallo">';
                            $resultsPrinted += '<div class="imagen"><img src="' + $image + '" alt="" width="138" height="102" /></div></a>';
                            $resultsPrinted += '<a href="' + metadata['URL'] + '" title="' + metadata['title'] + '" target="_self" class="#hallo">';
                            $resultsPrinted += '<h2 class="item-title-small">' + metadata['title'] + '</h2></a><p class="item-title-small">12. Ago. 2014</p></div>';
                        });
                        globalThis.html($resultsPrinted + "<div style=\"clear:both;\"></div>");
                        itemPageglobal._view_items();
                        ($(window).width()<647) ? $("#" + settings.button).css('display', 'block') : '';
                        $("#" + settings.button).click(function(event) {
                            event.preventDefault();
                            itemPageglobal.actual_item = itemPageglobal.actual_item + settings.items;
                            itemPageglobal._view_items();
                        });
                    }
                });
            },
            _view_items: function() {
                itemPageglobal.btn_clicked++;
                (itemPageglobal.btn_clicked>=settings.num_idas) ? $("#" + settings.button).css('display', 'none') : '';
                globalThis.find('.carousel-item').each(function(index, el) {
                    if(itemPageglobal.actual_item + settings.items > index) {
                        $(this).css('display', 'block');
                    }
                });
            },
            _resize: function(){
                if($(window).width()>647){
                    $("#" + settings.button).css('display', 'none');
                    globalThis.find('.carousel-item').css('display', 'none').each(function(index, el) {
                        (settings.items > index) ? $(this).css('display', 'block') : '';
                    });
                }else{
                    (globalThis.find('.carousel-item:hidden').length>0) ? $("#" + settings.button).css('display', 'block') : '';   
                    itemPageglobal.btn_clicked=1;
                    itemPageglobal.actual_item=0;
                }
            }
        }
        itemPageglobal._exect();
    }
})(jQuery);