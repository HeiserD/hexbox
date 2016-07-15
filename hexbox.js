var base = "";
var convert_base = "Decimal";
var num = 0;
var well = {
    fill_random: function () {
        var ran_base = Math.floor((Math.random() * 3) + 1);
        var base_string = ""
        var ran_num = Math.floor((Math.random() * 32) + 1);

        switch (ran_base) {
        case (1):
            base_string = "Decimal";
            number = ran_num.toString();
            break;
        case (2):
            base_string = "Hex";
            number = ran_num.toString(16);
            break;
        case (3):
            base_string = "Binary";
            number = ran_num.toString(2);
            break;
        }

        base = base_string;
        num = number;
        return base_string + ": " + number
    },

    check_answers: function () {
        var entered_hex = $("#hex_tb").val()
            , entered_bin = $("#bin_tb").val()
            , entered_int = $("#int_tb").val()
            , answer_hex = 0
            , answer_bin = 0
            , answer_int = 0;

        switch (base) {
        case ("Decimal"):
            if (parseInt(entered_hex, 16).toString() === num.toString()) {
                $("#hex_group").removeClass("has-error");
                $("#quiz_hex").removeClass("incorrect");
                $("#hex_group").addClass("has-success");
                $("#quiz_hex").addClass("correct");
            } else {
                $("#hex_group").addClass("has-error");
                $("#quiz_hex").addClass("incorrect");
            }

            if (parseInt(entered_bin, 2).toString() === num.toString()) {
                $("#bin_group").removeClass("has-error");
                $("#quiz_bin").removeClass("incorrect");
                $("#bin_group").addClass("has-success");
                $("#quiz_bin").addClass("correct");
            } else {
                $("#bin_group").addClass("has-error");
                $("#quiz_bin").addClass("incorrect");
            }

            if (entered_int.toString() === num.toString()) {
                $("#int_group").removeClass("has-error");
                $("#quiz_int").removeClass("incorrect");
                $("#int_group").addClass("has-success");
                $("#quiz_int").addClass("correct");
            } else {
                $("#int_group").addClass("has-error");
                $("#quiz_int").addClass("incorrect");
            }
            break;
        case ("Hex"):
            if (entered_hex.toString() === num.toString()) {
                $("#hex_group").removeClass("has-error");
                $("#quiz_hex").removeClass("incorrect");
                $("#hex_group").addClass("has-success");
                $("#quiz_hex").addClass("correct");
            } else {
                $("#hex_group").addClass("has-error");
                $("#quiz_hex").addClass("incorrect");
            }

            if (parseInt(entered_bin, 2).toString(16) === num.toString()) {
                $("#bin_group").removeClass("has-error");
                $("#quiz_bin").removeClass("incorrect");
                $("#bin_group").addClass("has-success");
                $("#quiz_bin").addClass("correct");
            } else {
                $("#bin_group").addClass("has-error");
                $("#quiz_bin").addClass("incorrect");
            }
            if (parseInt(entered_int).toString(16) === num.toString()) {
                $("#int_group").removeClass("has-error");
                $("#quiz_int").removeClass("incorrect");
                $("#int_group").addClass("has-success");
                $("#quiz_int").addClass("correct");
            } else {
                $("#int_group").addClass("has-error");
                $("#quiz_int").addClass("incorrect");
            }
            break;

        case ("Binary"):
            if (parseInt(entered_hex, 16).toString(2) === num.toString()) {
                $("#hex_group").removeClass("has-error");
                $("#quiz_hex").removeClass("incorrect");
                $("#hex_group").addClass("has-success");
                $("#quiz_hex").addClass("correct");
            } else {
                $("#hex_group").addClass("has-error");
                $("#quiz_hex").addClass("incorrect");
            }

            if (parseInt(entered_int).toString(2) === num.toString()) {
                $("#bin_group").removeClass("has-error");
                $("#quiz_bin").removeClass("incorrect");
                $("#bin_group").addClass("has-success");
                $("#quiz_bin").addClass("correct");
            } else {
                $("#bin_group").addClass("has-error");
                $("#quiz_bin").addClass("incorrect");
            }
            if (entered_bin.toString() === num.toString()) {
                $("#int_group").removeClass("has-error");
                $("#quiz_int").removeClass("incorrect");
                $("#int_group").addClass("has-success");
                $("#quiz_int").addClass("correct");
            } else {
                $("#int_group").addClass("has-error");
                $("#quiz_int").addClass("incorrect");
            }
            break;

        }
    }
}


$(function () {
    $('#quiz_well').html(well.fill_random())

    $("#btn_quiz_ans").click(function () {
        well.check_answers();
        //alert($('#quiz_well').html());
    });

    $("#btn_quiz_new").click(function () {
        $('#quiz_well').html(well.fill_random())
    });

    $('.dropdown-menu li > a').click(function (e) {
        $("#convert_base").html(this.innerHTML);
        convert_base = this.innerHTML;
    });

    $("#btn_convert").click(function () {
        switch (convert_base) {
        case ("Decimal"):
            var num_to_convert = parseInt($("#convert_num").val());
            $("#hex_tb_con").val(num_to_convert.toString(16));
            $("#int_tb_con").val(num_to_convert.toString());
            $("#bin_tb_con").val(num_to_convert.toString(2));
            break;
        case ("Binary"):
            var num_to_convert = parseInt($("#convert_num").val(), 2);
            $("#hex_tb_con").val(num_to_convert.toString(16));
            $("#int_tb_con").val(num_to_convert.toString());
            $("#bin_tb_con").val(num_to_convert.toString(2));
            break;
        case ("Hex"):
            var num_to_convert = parseInt($("#convert_num").val(), 16);
            $("#hex_tb_con").val(num_to_convert.toString(16));
            $("#int_tb_con").val(num_to_convert.toString());
            $("#bin_tb_con").val(num_to_convert.toString(2));
            break;
        }
    });


});