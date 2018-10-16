/*console.log("test"); voor element inspector
camelcase: document.getElementById
geel: herkent als functie, geen waarde tussen ()
Element inspector 'source', breakpoints aanklikken op foutregel, kijken of de code ingelezen wordt.
Bij 'return' houdt JS op code te executen. return false; stopt met dat stukje code*/

/*---------------------------------------------------------------------------------------------------
       var links = document.getElementById('topbar').getElementsByTagName('a');
       /*var links2 = document.getElementById('').getElementsByTagName('a');*/

            /*creëert numeric array van topbar en elementen van alle links (a).

       function highlightCurrent(link) {
        link.className = 'current';
        }
            Creeert een functie die de classname 'current' toevoegt aan het element dat tussen 
            () staat als de functie wordt geroepen. Hij wordt later geroepen met het element uit
            de array tussen ()

        function removeHighlights() {
            for (var i = 0, l = links.length; i < l; i += 1)  {
                links[i].className = '';
            }
        }
        Dit stukje code creeert een functie die alle elementen in de array bij langsgaat en overal 
        de classname verwijdert.

        for (var i = 0, l = links.length; i < l; i += 1) {
            links[i].onclick = function(){
                removeHighlights();
                highlightCurrent(this);
            }
        }
        Gaat alle elementen in de array bij langs en zodra er op een link geklikt wordt moet er bij
        alle elementen de classname verwijderd worden, en aan het element waarop geklikt wordt de 
        classname toegevoegd.
        ---------------------------------------------------------------------------------------------------*/
        /*------------------------------------hamburgerstart-----------------------------------*/
        function dropdownToggle(){
            console.log("test");
            var element = document.getElementById("dropdown");
            element.classList.toggle("dropdownactive");
        }

        window.addEventListener('mouseup', function clickOutside(event){
            var box = document.getElementById('dropdown');
            if(event.target != box && event.target.ParentNode != box){
                box.style.display = 'none';
            }
        })

        // mouseup multiple boxes: loop through array of boxes in mouseup function
        /*------------------------------------hamburgerend-----------------------------------*/     

        /*----------------------------------Slideshow-start-------------------------------------*/
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
            }
          
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1} 
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; 
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block"; 
            dots[slideIndex-1].className += " active";
        }
        /*------------------------------------Slideshow-end-----------------------------------*/

        /*------------------------------------contactformstart-----------------------------------*/
        function validatePhoneNumber(){
            alert("test2");
            var x = document.forms["contactform"]["phone"].value;
            if(x.length < 10 || x.length > 13){
                alert("Please fill out a valid number format");
                return false;
            }
            else{
                return true;
            }
        }
       
        function returnValidateForm(){
            console.log("test");
            var name = document.forms["contactform"]["name"].value;
            if (name == ""){
                alert("Please fill out your full name.");
                return false;
            }
            var email = document.forms["contactform"]["email"].value; 
            if (email == ""){
                alert("Please fill out a valid e-mail address.");
                return false;
            }
            var phone = document.forms["contactform"]["phone"].value;
            if (phone == ""){
                alert("Please fill out your phone number.");
                return false;
            }
            var subject = document.forms["contactform"]["subject"].value;
            if (subject == ""){
                alert("Please fill out a subject.");
                return false;
            }
        }

        /*function validatePhoneNumber(){
            var char = ["0", "1", "2","3","4","5","6","7","8","9","-",",","."];
            document.getElementsByClassName("") = char.toString();
            var x = char.length;*/

        /*for (i = 0; i < x; i++){*/
            /*var phoneval = document.forms["contactform"]["phone"].value;
            if (phoneval == "10" || "12");{
                return true;
            }
            else{
                alert()
            }
        }*/
            
        /*------------------------------------contactformend-----------------------------------*/
