let guiStay = false;

let Gui = new function() {

    let timer;

    this.setUp = function() {
        
        $('#canvas').click(function() {
            $('#gui_full').fadeToggle(Config.guiFadeTime);
            guiStay = !guiStay;
        });
        
        
        $(document).mousemove(() => {
            clearInterval(timer);
            $("#gui_top").fadeIn(Config.guiFadeTime);
            $("#gui_bottom").fadeIn(Config.guiFadeTime);
            if (!guiStay) {
                timer = setTimeout(() => {
                    $("#gui_top").fadeOut(Config.guiFadeTime);   
                    $("#gui_bottom").fadeOut(Config.guiFadeTime);   
                }, Config.guiTimeout);
            }
        });
        
        $('input:text, .ui.button', '.ui.action.input').on('click', function(e) {
            $('input:file', $(e.target).parents()).click();
        });

        $('input:file', '.ui.action.input').on('change', function(e) {
            var name = e.target.files[0].name;
            $('input:text', $(e.target).parent()).val(name);
        });
        
        
    }
    
    this.setTitle  = function(artist, title) {
        $("#elmTitle").html("<h1 id='guiSong'><span id='guiArtist'>" + artist + "</span><br> " + title + "</h1>");
    }

};
