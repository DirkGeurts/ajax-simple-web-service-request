console.log("I am linked")


 $(document).ready(function(){
    $.ajax({url: "https://thatsthespir.it/api", success: function(quotes){

      console.log(quotes.quote);

      let output =
      "<div class = 'quoteOfDay'>" +"<h3>"+quotes.quote+"</h3>"+"<br></br>"+ "<img src ='"+quotes.photo+"'>"+"<br></br>"+"<p>"+quotes.author+"</p>";


      $("#quote").html(output);
    }});
  });
 
