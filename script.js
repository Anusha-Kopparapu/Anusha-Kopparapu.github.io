 function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("container");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


var arr = [];
function addname() {
   var inp = document.getElementsByClassName("c1");
  arr.push(inp[0].value);
   var html = '';
   for (var i=0; i<arr.length; i++) {
      html += '<li>' + '<a>' +arr[i] + '</a>' +'</li>';
   }
   var con = document.getElementById('container');
   con.innerHTML = html;
}


 function add1(){
    var Person = { 

Name: "", 
Mobile: "", 
Home:"", 
Work: "",  
Address:""
};
 var lscount = localStorage.length; 
var inputs = document.getElementsByClassName("c1"); 
            Person.Name = inputs[0].value; 
            Person.Mobile = inputs[1].value; 
            Person.Home = inputs[2].value; 
            Person.Work = inputs[3].value; 
            Person.Address = inputs[4].value; 
          localStorage.setItem("Person_", JSON.stringify(Person)); 
        
        var datacount = localStorage.length; 
    if (datacount > 0) {    
     var render = '';

for (i = 0; i < datacount; i++) { 
            var key = localStorage.key(i); //Get  the Key 
            var person = localStorage.getItem(key); //Get Data from Key 
            var data = JSON.parse(person); //Parse the Data back into the object 
            
             render += "<h2> Name  </h2>" + "<p>"+data.Name + " </p>" ;
                render += "<h2> Mobile </h2>" + "<p>"+data.Mobile + " </p>" ;
                        render +="<h2> Home </h2>" + "<p>"+data.Home + " </p>" ;
                        render +="<h2> Work </h2>" + "<p>"+data.Work + " </p>";
                        render +="<h2> Address</h2>" + "<p>"+data.Address + " </p>" ; 
            
          } 
        dvcontainer.innerHTML = render; 
      }

          var mq = window.matchMedia('all and (max-width: 800px)');
if(mq.matches) {
    $('#hidepanel').hide();
    $('#back').show();
} else {
    $('#hidepanel').show();
    $('#back').hide();
  } 
 }


 function myEdit() {
    document.getElementById("id").contentEditable = true;
    }


 function myScroll(myMessage) {
     var input, filter, ul, li, a, i;
     ul = document.getElementById("container");
     li = ul.getElementsByTagName("li");
     for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            
            if (a.innerHTML.toUpperCase().charAt(0)==myMessage) {
                li[i].style.display = "";
            }
             else if(myMessage=='#')
            {
                
                 li[i].style.display = "";
            }
                
            else {
                li[i].style.display = "none";
            }
        }
}


 var divsions = ["contacts","groups","aplhaList","editpanel"];
    var visibleDiv = null;
    function visibility(divId) {
      if(visibleDiv === divId) {
        visibleDiv = null;
      } else {  
        visibleDiv = divId;
      }
      hideVisibleDivs();
    }
    function hideVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divsions.length; i++) {
        divId = divsions[i];
        div = document.getElementById(divId);
        if(visibleDiv === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }
    $(document).ready(function() {
    $('#view').on('click', function() {
            $('.contacts').show();
            $('.aplhaList').show();
            $('#groups').hide();
             
    });
    

    $('#view1').on('click', function() {
            $('#groups').show();
            $('.aplhaList').hide();
            $('#editpanel').hide();
             $('.contacts').hide();
    });
    $('#container').on('click', function() {
            $('#groups').hide();
            $('.aplhaList').show();
            $('#editpanel').show();
             $('.contacts').show();
             $('.dvcontainer').show();
    });
$('#groups').hide();
    $('#editpanel').hide();

});
 
    function visibility(){

        $('#hidepanel').show(); 
        $('#editpanel').hide(); 
    }
    function cancel (){
    var storagecount = localStorage.length; 
    if (storagecount > 0) 
    { 
        for (i = 0; i < storagecount; i++) { 
            localStorage.clear(); 
        } 
    } 
   
   }
   function cleardata(){
    var inputs = document.getElementsByClassName("c1");
    inputs[0].value='';
    inputs[1].value='';
    inputs[2].value='';
    inputs[3].value='';
    inputs[4].value='';

   }
   
