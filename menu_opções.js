$(function(){
   
    var sels = $(".fake-sel");
    
    var imgs_ = [
       [
          'https://barbeariaderespeito.s3.us-east-2.amazonaws.com/529/fotos-de-perfil/fun-781-964-min',
          'https://barbeariaderespeito.s3.us-east-2.amazonaws.com/529/fotos-de-perfil/fun-1292-242-min',
          'https://barbeariaderespeito.s3.us-east-2.amazonaws.com/529/fotos-de-perfil/fun-779-981-min',
          'https://barbeariaderespeito.s3.us-east-2.amazonaws.com/529/fotos-de-perfil/fun-780-570-min'
       ],
       [
          'https://oc2.ocstatic.com/images/logo_small.png',
          'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
       ]
    ];
 
    sels.each(function(x){
       
       var $t = $(this);
       
       var opts_ = '', first;
       
       $t.find("option").each(function(i){
          
          if(i == 0){
             first = "<li><img src='"+ imgs_[x][i] +"'>"+ $(this).text() +"</li>";
          }
          opts_ += "<li"+ (i == 0 ? " class='ativo'" : '') +"><img src='"+ imgs_[x][i] +"'>"+ $(this).text() +"</li>";
       });
 
       $t
       .wrap("<div class='fake-sel-wrap'></div>")
       .parent()
       .css("width", $t.outerWidth()+60)
       .append("<ul>"+ first+opts_ +"</ul>")
       .find("ul")
       .on("click", function(e){
          e.stopPropagation();
          $(".fake-sel-wrap ul")
          .not(this)
          .removeClass("ativo");
          $(this).toggleClass("ativo");
       })
       .find("li:not(:first)")
       .on("click", function(){
          $(this)
          .addClass("ativo")
          .siblings()
          .removeClass("ativo")
          .parent()
          .find("li:first")
          .html($(this).html());
          
          $t.val($(this).text());
          
       });
    });
    
    $(document).on("click", function(){
       $(".fake-sel-wrap ul").removeClass("ativo");
    });
    
 });