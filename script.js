$(document).ready(function(){
    var list = [
    {name:"Cheska",message:"HAPPY BIRTHDAY TO MY FELLOW INTERN AND WORKMATE 🐸🐸 hahaa super appreciate you joining me in leapfroggr and messaging sir when I got super anxious. Enjoy your day you lovely human being!",img:"cheska.jpg"},
    {name:"Pons",message:"Hi Andie! Happy birthday ka-1998/doobi/South™! Hope you're doing well in spite of the pandemic. Keep safe always and see you sa next doobi reunion! ",img:"pons.jpg"},
    {name:"Shark&#129416",message:"Happy birthday Ms. Andie! Well done on taking over the Service Committee. I wish you (Momo)re (Joy) in life. See you next year!<br><br>PS: I can't believe this is our only pic together (that I could find)",img:"jigger.jpg"},
    {name:"Bia",message:"Hi momsh!!!!! HAPPY HAPPY BIRTHDAY!!!!! i know dat its unusual not to celebrate your bday specially now sa pandemic :(( wasak na dapat tayo ngayon along katip/magin, dancing to kpop songs or whatever fuckboy song is playing HAHAHAHAHAH BUT I HOPE YOU STILL HAVE A BLAST!!!! pakawasak ka for us and know that we're there in spirit lmao! virtual nomi if you want! set tayo! wish we could celebrate your special day together but its ayt bawi tayo after all this bs is done sksks love you momsh!!!! we're always here for you if u need anything!!!! DONT BE SHY TO ASK HELP WE GOTCHU ALWAYS MWAAAA",img:"bianca.jpg"},
    {name:"Karina",message:"Happiest birthday, Stripes Gang™ president! Thank you for always riding with my kalokohan since day 1!! I hope you enjoy your day and u and your family are safe!! love u!! ❤",img:"karina.jpg"},
    {name:"Angela",message:"Hi Andie,<br><br>Happy Birthday to one of the best ppl I met sa DCS !!! Part ka ata ng unexpected ppl I'll talk to but here we are HAHAHA I thancc rv for connecting ppl together HAHAHAJK<br><br>Sana you always find a reason to smile-- It must be nice if the pandemic gets handled well by this govt na and we could meet soon D:<br><br>ANYWAY Thank you for existing :D HBD",img:"angela.gif"},
    {name:"Buboy",message:"HAPPY 18TH BIRTHDAY, MX ANDIE!!! charot SANA HAPPY KA TODAY. SAYANG WE’RE PROBABLY DANCING AND VOGUING TO CARLY RAE, GAGA, AND TWICE SA LAN KWAI RIGHT NOW IF IT WASN’T FOR COVID AND OUR INCOMPETENT GOVERNMENT. MAYBE AFTER ALL THIS IS OVER KUNG KILALA MO PA KO NON CHAROT. I HOPE U ENJOY UR DAY. KEEP SLAYING, QUEEN. ✨",img:"buboy.jpeg"},
    {name:"Ceej",message:"HAPPY BIRTHDAYYYY ANDIIIEEEE!!! I REALLY WISH I COULD GO OUT AND VISIT YOUR HOUSE AND INOM LANG TAYO HUHUHU I HOPE YOU ENJOY YOUR DAAAYYY~~~ HERE'S SOME PHOTOS OF US THAT YOU POSTED NUNG MISSIONS WEEK MO AHHAHAHAHAA",img:"ceej.jpg"},
    {name:"Eya",message:"happy happy birthday, andrea carly rae! 🤍🎂 I hope you enjoy your day despite everything that’s happening around us. thanks for being a great sabaw friend hahah I love how we can discuss so many things from ✨astrology✨ to our nation’s issues. I’m so proud of how far you’ve come. Remember that I’m always here for you and I hope to see you soon! happy birthday 🤗🤍",img:"eya.jpg"},
    {name:"Aids",message:"Hello what up just wanted to say thank you for being my friend like tysm for everything man. I want you to know that I really appreciate you and value you. Also I want to thank you for everything I've learned from you from kpop to growth and being a good person. We might have had a lot of 'fights' before (haha) but it taught me so much and I believe I am better because of it; because of you. Again, thank you for being such a good friend. I wish you the world. Happy birthday Ponkan!!!!",img:"aids.jpg"},
    {name:"Matt",message:"HAPPY BIRTHDAY GURLLLLLL!!! EWW SHES GETTIN OLD AHHAHA THANKS FOR JUST BEIN ANDIE BITCH LIKE HAHAAH BASTA YOU JUST MAKE EVERYONE SO HAPPY EVEN THOUGH SOMETIMES YOU ARENT COMPLETELY 100% LIKE YOU JUST GIVE OFF A VIBE NA JUST MAKES EVERYONE SMILE AND WHEN I'M WITH YOU TALAGA GURL ITS JUST A VIBE I SWEAR ITS LIKE UNHHH LIKE IT HAPPENS ONCE A WEEK LANG AND WE JUST RIFF AND SHES A VIBE YAKNOW. LIKE MY FAVORITE MEMORY OF US WAS NUNG NANDON TAYO SA FIRST DORM MO TO DO 21 AND WE LITERALLY JUST DID 21 AND WE JUST FUCKED AROUND AFTER THAT HAHAHA TAPOS WE JUST ROAMED AROUND KATIP LOOKIN AT DRUNK PEOPLE OH OH OH AND PAG LAB YOU JUST LEAVE AND YOU’RE LIKE BYE BITCH I’M GOIN TO THERAPY AHHAHAHAH LOVE THAT FOR YOU UGH CS 21 WAS A VIBEHAHAHA LABYU GURL KEEP BEING SUPER NICE, GENEROUS, CONYO, GIVING, CONSIDERATE OF OTHERS SOBRA AND SUPER FUNNY AND CHILL AND SUPER FRIENDLY LIKE YOU MAKE FRIENDS LEFT AND RIGHT LIKE BITCH HOW DO YOU DO THAT HAHAHA I REALLY HOPE NA WE NEVER STOP BEIN FRIENDS CUS YOU'RE SUCH A SOLID PERSON GURL UGH KEEP CONVERTIN ME INTO A KPOPPER GURL KEEP SENDIN THEM HOT PICS OF SEVENTEEN AHAHAHAH HAPPY BIRTHDAY QUEEN THANKS FOR EVERYTHIN",img:"matt.gif"},
    {name:"Maro",message:"HAPPY BIRTHDAY here's the greatest honor I can give you: I have associated you w/ an ALBUM. okay not in like the weird way since these guys' lyrics are pretty sad, but just that I remember you whenever I listen to them (since you introduced them to me HAHA). ANYWAY point here is to show how you cross my mind from time to time and whenever you do I just think that I hope you're (somewhat) happy and not dying LOL HAPPY BIRTHDAY AGAIN and come back to katip thanks",img:"maro.jpg"},
    {name:"Cid",message:"HI ANDIEEE HAPPY BERDAY. IM HAPPY  NA UR GROWING AND MORE MATURE AND BETTER AT EVERYTHING. Thank you sa ilang months natin pagsasama kahit it was stress sa project. And sa bexec termm it was a good 0.7 year. Since close kami ni Jesus more ill try to ask for blessings for youu. God bless. Stay safe from covidd.",img:"cid.jpg"},
    {name:"Mika",message:"MISS ANDIE <3333 HAPPY HAPPY BIRTHDAY!!! thank you so much for introducing me to red velvet hehehe i hope u continue being such an amazing person! you're one of the first people i became friends with sa UP, and im really thankful for you. ikaw rin nagpush sa aking mag-join ng AY YAYYY super laki ng impact mo sa life ko, and i hope you know just how much i appreciate your existence. i hope u have a great birthday!! please take care. ilysm <3",img:"mika.jpg"},
    {name:"James",message:"Happy happy biiiirthdaaaay Andieeeee 🥳🥳🎉🎉🎉 Keep sharing your positive vibes to other peeps and never forget to take care of yourself 🤙 Sana masarap ulam mo todaaay HAHAHA stay safe palagiii!!",img:"james.jpg"},
    {name:"Neph",message:"Happy birthday to the #1 impostor of 16Q <3 <3 Hope u have an incredible day today despite the lack of a solid inuman sesh with which ur birthday is always associated HAHAHAH bawiin nalang natin pagbalik. In the meantime, catch u nalang muna at Discord or in Zoom at our next horror movie night!! HAHA HAPPY BDAY AGAIN ANDIEEEEEEE <3",img:"neph.jpg"},
    {name:"Makki",message:"Happy birthday Andie!!! Thank you for being my one stop shop for Vue, Kpop and other slapping music. May you always be greeted by warm messages from everyone around you and not a single Vue compile error.",img:"makki.png"},
    {name:"BYTE",message:"HI BITTTTT AAAA HAPPY BIRTHDAY MISHU NA SLAKDJLAKJSDAS Hope ur doing Well™ rn. Hope u enjoy ur day!!! Kain tayo pag pwede na ulit at nasa qc na ulit ako hehehe",img:"zak.jpg"},
    {name:"Weej",message:"HABERDAY ANDIEEE!!! Thank you for being so supportive of me for the past few years and for being such a cool person to talk to about all kinds of stuff (especially when you approach me to talk about kpop hehe). Hoping for more opportunities to hang out, eat, inom and kwento with you after all this is over huhuhu. Labyu ka-Engg Week Magic! 💚",img:"weej.jpg"},
    {name:"Iyawi",message:"Only saw u thrice irl (zach first time meeting, your cs 21 long exam, and kcon), but hanging out with u feels like we have been friends for a long time. Happy birthday, Andie!! I gotchu always.",img:"iya.jpg"},
    {name:"Mars",message:"HAPPY BIRTHDAY, ANDIE! Hahaha! I know we've only met recently but it's been really fun getting to know you through our daily PUBG sessions. Hahaha! Thanks for hearing me rant, you know what I mean HAHA Have a good one! :)",img:"mars.jpg"},
    {name:"Ease",message:"Hap de birch Andie! Have the most bodacious birthday, duder! 🔥💯🤘",img:"ease.gif"},
    {name:"Anne",message:"happy birthday andie!! we only really know each other through awitan hehe, and i think you're a really cool person. hope ur doing well, growing and thriving w a o w",img:"anne.jpg"},
    {name:"Raffy",message:"Hey Andie, meeting you was one of the things I am most grateful of. I hope that you finally get a fucken jowa para di ka na bitter and lonely. I hope she plays PUBG too and has good music taste.<br><br>You are definitely one of the most interesting characters I met. I do hope we’ll meet when the pandemic ends. Take care always, your mind and fingers never fail to amaze me. <br><br>Please dont kill me cuz of the picture I uploaded, thats the only decent picture we have.",img:"raffy.jpg"},
    {name:"Allure",message:'"HI ANDIEBAEEEE HAPPY HAPPY BIRTHDAYYYY miss na kita bebe hindi ko na kaya~ It really is a blessing to have met u and makasama ka sa team7 natin hehe miss ko na rin ung nga kulitan natin sa scl and kain sa kiosks :< Always remember that you are loved bb ❤️ and grateful kami to have someone like u in our lives!!! BONDING TAYO AFTER PANDEMIC HA <br><br>I hope and pray na God will bless you even more, not just sa chaching $$$, but also sa friends, work, family, and even sa kpop WOOO PSYCHO SOTY PA RIN!!! Chat ka lang rin if u need kausap and random na bonding hehe I hope pag nakita mo na tong website na to masabi mo sa amin na "YOU MAKE ME FEEL SPESHARRRR" chz Love you andie!!! here for u alwayz"',img:"allure.jpeg"},
    {name:"Andy",message:"HELLO ANDIE HAPPY BIRTHDAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! highkey miss you ngl",img:"andy.jpg"},
    {name:"Pio",message:"HI ANDIE happy birthday!! hope ur doing well despite the pandemic<br><br>have a nice day and hope u dream of sheeps tonight",img:"pio.gif"},
    {name:"Brent",message:"HAPPY BIRTHDAY TO THE FF: <ul><li>1 year magkagalit</li><li>CS 21 Clutch Mate</li><li>Internship Mate</li><li>Thesis Mate</li><li>Life Coach</li><li>The B</li></ul><br>Tsaka na mushy message pag may soft boy pass na HAHAHA",img:"brent.jpg"},
    ];
     
    // {name:"",message:"",img:""}
    list.forEach((element,index,array) => {
        var string = ' <div class="col-md-6 col-lg-4 mb-5"><div class="portfolio-item mx-auto"  id="img-messages" data-toggle="modal" data-target="#'+element.name+index+'"><div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"><div class="portfolio-item-caption-content text-center text-white"><h1>'+element.name+'</h1></i></div></div><img class="img-fluid" src="static/img/'+element.img+'" alt=""  id="img-messages"/></div></div>'

        var modalString = '<div class="portfolio-modal modal fade" id="'+element.name+index+'" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true"><div class="modal-dialog modal-xl modal-dialog-centered" role="document"><div class="modal-content"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button><div class="modal-body text-center"><div class="container"><div class="row justify-content-center"><div class="col-lg-8"><h2 class="portfolio-modal-title text-uppercase mb-0" id="portfolioModal1Label">'+element.name+'</h2><div class="divider-custom"><div class="divider-custom-line"></div><div class="divider-custom-icon"><i class="fas fa-plane"></i>   Going 22    <i class="fas fa-plane"></i></div><div class="divider-custom-line"></div></div><img class="img-fluid rounded img_sixty mb-5" src="static/img/'+element.img+'" alt="" /><p class="text-center mb-5">'+element.message+'</p><button class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button></div></div></div></div></div></div></div>'
        
        $("#messages").append(string);

        $("#modal-here").append(modalString)
    });

    var num = 72;
    var imageNum = [];
    for (var j = 1; j <= num; j++){
        imageNum.push("c"+j);
    }

    imageNum.forEach((element,index,array) => {
        var carousel_string = '<li data-target="#carouselExampleIndicators" data-slide-to="'+index+'"';
        // console.log(element);

        var carousel_inner = '<div class="carousel-item'
        if (index == 0){
            carousel_string += 'class="active"';
            carousel_inner += ' active ';
        }

        carousel_string += '></li>';
        carousel_inner += '"><img class="d-block w-100 img-carousel" src="static/img/carousel/'+element+'.jpg"></div>';
        // console.log(carousel_string);
        $(".carousel-indicators").append(carousel_string);
        $(".carousel-inner").append(carousel_inner)
    });

    var about_messages = [
        'Andrea Carla Dioso','"a queen"','Astrology Guru','boujie on the outside, jeje on the inside','baket?? ewan HAHA','HOE',
        '"8===D"','strong','so pridi <3','#AndieLangMalakas','expert impostor sa Among Us','WACK','BIT KO NAPAKABAIT NAPAKAGANDA MAPAGMAHAL 10/10',
        'COOL AF','meme','Softie. CHZ','A bad bitch!!!','andie','BAE (AZ AN ANDIEBAE)','nakakamansjaks (waw inside joke!)','inom'
        ];
    var about_length = about_messages.length
    var split1 = about_messages.slice(0,(about_length/2)+1);
    var split2 = about_messages.slice((about_length/2)+1,about_length);
    split1.forEach((element,index,array)=>{
        var s1 = document.getElementById("about_message1");
        var text1 = document.createTextNode(element);
        var br = document.createElement("br");
        s1.appendChild(text1);
        s1.appendChild(br);
    });

    split2.forEach((element,index,array)=>{
        var s2 = document.getElementById("about_message2");
        var text2 = document.createTextNode(element);
        var br = document.createElement("br");
        s2.appendChild(text2);
        s2.appendChild(br);
    });

});

(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html, body').animate({
        scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
    }
    }
});

// Scroll to top button appear
$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
    } else {
    $('.scroll-to-top').fadeOut();
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: 80
});

// Collapse Navbar
var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
    } else {
    $("#mainNav").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
    });
});

})(jQuery); // End of use strict
