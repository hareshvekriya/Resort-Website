$.getJSON('resort.json', function(data) {
$(window).ready(function(){
// jquery ui buttons 
        $(function() {
        $( "#comfortLevel" ).selectmenu();
        $( "#destination" ).selectmenu();
        $( "#price" ).selectmenu();
        $( "#activity" ).buttonset();  
        $( "#search" ).button({
  icons: { primary: "ui-icon-circle-zoomin" }
    });
        $( "#viewFavourites" ).button({
  icons: { primary: "ui-icon-heart" }
        });
        $( ".save" ).button({
  icons: { primary: "ui-icon-circle-plus" }
        });

});
// Slider script
    $('.pgwSlider').pgwSlider();
     var startDate;
     var endDate;
/////////////////// date script////////////////////////////////////
    $(function() {
        $("#datepicker").datepicker({ 
        dateFormat: 'yy,mm,dd', 
        onClose: function(date) {
        startDate = $("#datepicker").val();
        }
      });
    
       $("#datepicker2").datepicker({ 
        dateFormat: 'yy,mm,dd', 
        onClose: function(date) {
        endDate = $("#datepicker2").val();
            var output = "<ul>";
        for(var i in data.resorts){
            if(startDate == data.resorts[i].startDate){
            output+="<li>";
            output+="<h5>"+data.resorts[i].destination+"                     "+data.resorts[i].location+"--"+"Price                           £"+data.resorts[i].price+" <a href='"+                           data.resorts[i].id + ".html'>Visit Page</a></h5>";
                // images 
            output+="<ul>"+'<img class="img"                                 src="'+data.resorts[i].picture+'"/>'+"</ul>";
            output+="<ul>"+data.resorts[i].comfortLevel+" Star"+"             </ul>";
            output+="<p>"+data.resorts[i].short_description+"                 </p>";
            output+="</li>";
            }
        } 
output+="</ul>";
document.getElementById("placeholder").innerHTML=output;            
        }
      }); 
    });   

////////////// function search button click//////////////////////
$("#search").on("click", function(){
        
        var destination=$('#destination option:selected').val();
        var comfortLevel=$('#comfortLevel option:selected').val();
        var priceValue=$('#price option:selected').val();
        
        var activitiesSearch =$("input[name='activity']:checked").map(function(){
            return this.value;}).get();
        var needToMatch = activitiesSearch.length;
        
        var output="<ul>"
        for(var i in data.resorts){
            if(((destination==data.resorts[i].destination)||(destination=='Any'))&&((comfortLevel==data.resorts[i].comfortLevel)||(comfortLevel=='Any'))&&((priceValue==data.resorts[i].price)||(priceValue=='Any'))){
               needToMatch = activitiesSearch.length;
            if ( needToMatch==0) {
                output+="<li>";
                output+="<h5>"+data.resorts[i].destination+"                     "+data.resorts[i].location+"--"+"Price                           £"+data.resorts[i].price+" <a href='"+                           data.resorts[i].id + ".html'>Visit Page</a></h5>";
                // images 
            output+="<ul>"+'<img class="img"                                 src="'+data.resorts[i].picture+'"/>'+"</ul>";
            output+="<ul>"+data.resorts[i].comfortLevel+" Star"+"             </ul>";
            output+="<p>"+data.resorts[i].short_description+"                 </p>";
            output+="</li>";
          } else {
          for (var j in data.resorts[i].activities){
             for(var k in activitiesSearch) {
                if(activitiesSearch[k] == data.resorts[i].activities[j]) {
                    needToMatch --;
                    }
                }
          }
          if (needToMatch==0) {
            output+="<li>";
            output+="<h5>"+data.resorts[i].destination+"                     "+data.resorts[i].location+"--"+"Price                           £"+data.resorts[i].price+" <a href='"+                           data.resorts[i].id + ".html'>Visit Page</a></h5>";
                // images 
            output+="<ul>"+'<img class="img"                                 src="'+data.resorts[i].picture+'"/>'+"</ul>";
            output+="<ul>"+data.resorts[i].comfortLevel+" Star"+"             </ul>";
            output+="<p>"+data.resorts[i].short_description+"                 </p>";
            output+="</li>";
              }
          }
      }
  }
  output+= "</ul>";
  document.getElementById("placeholder").innerHTML = output;
});
       
///////////////end of on click func search//////////////////////
     
    
///////////////Description into the tab function////////////////
    var tab = $(".form").find(".check").attr("id");
$(function(){
    var output = "<ul>";
    if(tab=="resort1"){
        output+="<p>"+data.resorts[0].long_description+"</p>";
    }
    if(tab=="resort2"){
        output+="<p>"+data.resorts[1].long_description+"</p>";
    }
    if(tab=="resort3"){
        output+="<p>"+data.resorts[2].long_description+"</p>";
    }
    if(tab=="resort4"){
        output+="<p>"+data.resorts[3].long_description+"</p>";
    }
    if(tab=="resort5"){
        output+="<p>"+data.resorts[4].long_description+"</p>";
    }
    if(tab=="resort6"){
        output+="<p>"+data.resorts[5].long_description+"</p>";
    }
    if(tab=="resort7"){
        output+="<p>"+data.resorts[6].long_description+"</p>";
    }
    output+="</ul>";
    document.getElementById("tabs-1").innerHTML=output;
});
    
    
$(function(){
    var output = "<ul>";

    if(tab=="resort1"){
        output+="<p>"+data.resorts[0].name+"</p>";
    }
    if(tab=="resort2"){
        output+="<p>"+data.resorts[1].name+"</p>";
    }
    if(tab=="resort3"){
        output+="<p>"+data.resorts[2].name+"</p>";
    }
    if(tab=="resort4"){
        output+="<p>"+data.resorts[3].name+"</p>";
    }
    if(tab=="resort5"){
        output+="<p>"+data.resorts[4].name+"</p>";
    }
    if(tab=="resort6"){
        output+="<p>"+data.resorts[5].name+"</p>";
    }
    if(tab=="resort7"){
        output+="<p>"+data.resorts[6].name+"</p>";
    }
output+="</ul>";
document.getElementById("placeholderTab2").innerHTML=output;
});
//////////////End of Description into tab//////////////////////
//////////////Heading for each pages//////////////////////////
$(function(){
    if(tab=="resort1"){
        $( "#mainHeading" ).append("Welcome, to the "+data.resorts[0].destination);  
    }
    if(tab=="resort2"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[1].destination);   
    }
    if(tab=="resort3"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[2].destination);  
    }
    if(tab=="resort4"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[3].destination);   
    }
    if(tab=="resort5"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[4].destination);  
    }
    if(tab=="resort6"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[5].destination);  
    }
    if(tab=="resort7"){
       $( "#mainHeading" ).append("Welcome, to the "+data.resorts[6].destination);   
    }
});
//////////////Heading for each pages//////////////////////////
///////////////////// Page Descriptions func//////////////////
$(function(){
    var output = "<ul>";
    if(tab=="resort1"){
        output+="<p>"+data.resorts[0].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[0].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[0].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[0].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[0].destination+"</ul>";
    }
    if(tab=="resort2"){
        output+="<p>"+data.resorts[1].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[1].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[1].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[1].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[1].destination+"</ul>";
    }
    if(tab=="resort3"){
        output+="<p>"+data.resorts[2].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[2].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[2].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[2].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[2].destination+"</ul>";
    }
    if(tab=="resort4"){
        output+="<p>"+data.resorts[3].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[3].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[3].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[3].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[3].destination+"</ul>";
    }
    if(tab=="resort5"){
        output+="<p>"+data.resorts[4].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[4].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[4].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[4].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[4].destination+"</ul>";
    }
    if(tab=="resort6"){
        output+="<p>"+data.resorts[5].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[5].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[5].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[5].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[5].destination+"</ul>";
    }
    if(tab=="resort7"){
        output+="<p>"+data.resorts[6].short_description+"</p>";
        output+="<ul>"+"<b>"+"Activities: "+"</b>"+data.resorts[6].activities+"</ul>";
        output+="<ul>"+"<b>"+"Comfort Level:  "+"</b>"+data.resorts[6].comfortLevel+"</ul>";
        output+="<ul>"+"<b>"+"Price: £"+"</b>"+data.resorts[6].price+"</ul>";
        output+="<ul>"+"<b>"+"Destination: "+"</b>"+data.resorts[6].destination+"</ul>";
    }
    output+="</ul>";
    document.getElementById("holsDescription").innerHTML=output;
});
/////////////////// End of Page Descriptions func////////////////     
///////////// ADD TO FAV and VIEW FAV///////////////////////////
    var favCount = 0;
$(".save").on("click", function(){
    favCount++;
    $( "#draggable" ).draggable( "disable" );
    $(".save").attr('disabled',true);
    
    var check = false;
    try{
    var staffIdToAdd = $(".save").parents(".form").find(".check").attr("id");
    var myFavouriteStaff = JSON.parse(localStorage.getItem("favResorts"));
        if(myFavouriteStaff == null){
            myFavouriteStaff = [];
        }
    for(var i in myFavouriteStaff){
        if(staffIdToAdd == myFavouriteStaff[i]){
            alert(staffIdToAdd+" already exists");
            $( "#draggable" ).draggable( "disable" );
            $(".save").attr('disabled',true);
            check = true;
        } 
    }
    if(check == false){
        myFavouriteStaff.push(staffIdToAdd);
        localStorage.setItem("favResorts",                       JSON.stringify(myFavouriteStaff));  
        }    
}
    catch(e){
        return false;
      }
}); 
/////////////////end of save func/////////////////////////////
    
$("#viewFavourites").on("click", function(){
       console.log("Restoring array data from local storage.");
        myFavouriteStaff = JSON.parse(localStorage.getItem("favResorts"));
        var output = "<ul>";
        if(myFavouriteStaff != null){
            for(var i = 0; i<data.resorts.length; i++){
                for(var j= 0; j<myFavouriteStaff.length; j++){
                //buttons    
                if(data.resorts[i].id == myFavouriteStaff[j]){
                output+="<h5>"+'<button class="minus">-Remove this-</button>'+'<button class="clear">-Clear all-</button>'+"</h5>";
                //list of resorts
                output+="<li>";
                output+="<h5>"+data.resorts[i].destination+" "+data.resorts[i].location+"--"+"Price  £"+data.resorts[i].price+" <a href='"+ data.resorts[i].id + ".html'>Visit Page</a>"+"</h5>";
                // images 
                output+="<ul>"+'<img class="img" src="'+data.resorts[i].picture+'"/>'+"</ul>";
                output+="<ul>"+data.resorts[i].comfortLevel+" Star"+"</ul>";
                output+="<p>"+data.resorts[i].short_description+"</p>"; 
                output+="</li>";
                    }  
                }
            }
        }
if(myFavouriteStaff == null){
    alert("You have not added any favorite resorts yet");
}
        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
        
    });
/////////////////////End of save and view//////////////////////
var myFavouriteStaff = JSON.parse(localStorage.getItem("favResorts"));
///////////////////// Start of delete button//////////////////
$("#placeholder").on("click", "button.minus" , function() {
            if (favCount >= 0) {
                $(this).closest("ul").remove();
                localStorage.removeItem("favResorts");
                $(".save").attr('disabled',false);
                $( "#draggable" ).draggable( "enable" );
                $("#droppable")
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Drop here" );
            }
    });    
///////////////////// End of delete button//////////////////
    
///////////////////// Start of clear button//////////////////
$(document).on("click", "button.clear" , function() {
            if (favCount >= 0) {
                $(this).closest("ul").remove();
                localStorage.removeItem("favResorts");
                $(".save").attr('disabled',false);
                $( "#draggable" ).draggable( "enable" );
                $("#droppable")
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Drop here" );
            }
        });
///////////////////// End of clear button//////////////////
        
/////////////////////Start of Drag and Drop////////////////////
$(function() {
    $( "#draggable" ).draggable({
        revert:true,
    });

        
$( "#droppable" ).droppable({
drop: function( event, ui ) {
    $(this)
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( "Resort added to Favorites!" );
        addFav();
    }
});
/////////////////// ADD to FAV Function///////////////////////    
function addFav() {
    favCount++;
    $( "#draggable" ).draggable( "disable" );
    $(".save").attr('disabled',true);
    
    var check = false;
    try{
    var staffIdToAdd = $(".save").parents(".form").find(".check").attr("id");
    var myFavouriteStaff = JSON.parse(localStorage.getItem("favResorts"));
        if(myFavouriteStaff == null){
            myFavouriteStaff = [];
        }
    for(var i in myFavouriteStaff){
        if(staffIdToAdd == myFavouriteStaff[i]){
            alert(staffIdToAdd+" already exists");
            $( "#draggable" ).draggable( "disable" );
            $(".save").attr('disabled',true);
            check = true;
        } 
    }
    if(check == false){
        myFavouriteStaff.push(staffIdToAdd);
        localStorage.setItem("favResorts",                       JSON.stringify(myFavouriteStaff));  
        }    
}
    catch(e){
        return false;
      }
    }
});
/////////////////////End of Drag and Drop//////////////////// 
    
});//end of doc ready
});//end of json

