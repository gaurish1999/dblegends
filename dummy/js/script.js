// some scripts

// jquery ready start
$(document).ready(function() {
    // jQuery code




    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////


    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function(e) {
        e.stopPropagation();
    });




    //////////////////////// Bootstrap tooltip
    if ($('[data-toggle="tooltip"]').length > 0) { // check if element exists
        $('[data-toggle="tooltip"]').tooltip()
    } // end if


    // $("input.radio[type=radio]:checked").parent().addClass("active");

    $(document).on('click', '.radio', function(e) {
        $("#clear").css("display", "block");
        $name = this.name;
        var radios = document.getElementsByName($name);
        var selected = Array.from(radios).find(radio => radio.checked);
        $(radios).parent().removeClass("active");
        $(selected).parent().addClass("active");
    });

    $(document).on('click', '.dropdown-item', function() {
        this.closest('.dropdown-menu').classList.remove('show');
    })

});
// jquery end