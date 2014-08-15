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
            _init: function() {
                itemPageglobal._exect();
            },
            _exect: function() {
                $.gsa({
                    GSA_domain: "http://googleak.esmas.com/search",
                    GSA_query: "site:http://televisadeportes.esmas.com/copa-mundial-fifa-brasil-2014/noticias",
                    GSA_num: settings.items * settings.num_idas,
                    GSA_client: "deportes",
                    GSA_site: "deportes",
                    GSA_requiredfields: "tipo:articulo",
                }, function(data) {
                    if (data.RES) {
                        var $results = $.gsa.results(data),
                            $resultsPrinted = "";
                        $.each($results, function(key, metadata) {
                            var $image = (typeof metadata['624x468'] !== "undefined") ? metadata['100x1990'] : metadata['thumbnail_url'];
                            $resultsPrinted += '<div class="carousel-item wtf" style="display:none">';
                            $resultsPrinted += '<a href="' + metadata['URL'] + '" title="' + metadata['title'] + '" target="_self" class="#hallo">';
                            $resultsPrinted += '<div class="imagen"><img src="' + $image + '" alt="" width="138" height="102" /></div>';
                            $resultsPrinted += '</a>';
                            $resultsPrinted += '<a href="' + metadata['URL'] + '" title="' + metadata['title'] + '" target="_self" class="#hallo">';
                            $resultsPrinted += '<h2 class="item-title-small">' + metadata['title'] + '</h2>';
                            $resultsPrinted += '</a>';
                            $resultsPrinted += '</div>';
                        });
                        globalThis.prepend($resultsPrinted + "<div style=\"clear:both;\"></div>");
                        itemPageglobal._view_items();
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
                (itemPageglobal.btn_clicked>=settings.num_idas) ? $("#" + settings.button).hide() : '';
                globalThis.find('.carousel-item').each(function(index, el) {
                    if (itemPageglobal.actual_item + settings.items > index) {
                        $(this).css('display', 'block');
                    }
                });
            }
        }
        itemPageglobal._init();
    }
})(jQuery);
$(function() {
    $(".item-page").itemPage({
        'items': 6,
        'num_idas':5,
        'button': 'view-more-item-page'
    });
});