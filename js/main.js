$(function() {
    function remove_feedback() {
        var $form = $('form#contact-us-form');

        //reverse the feedback from the button
        $('button[type="button"]', $form).each(function()
        {
            $btn = $(this);
            label = $btn.prop('orig_label');
            if(label)
            {
                $btn.prop('type','submit' );
                $btn.text(label);
                $btn.prop('orig_label','');
            }
        });
    }
    function clenup() {
        $('#success_message').hide();
        $('#error_message').hide();
        remove_feedback();
        $('form#contact-us-form').trigger('reset');
        $('form#contact-us-form').show();
    }

    function after_form_submitted(data) {
        // cleanup old messages
        $('#success_message ul').remove();
        $('#error_message ul').remove();

        if (data.result == 'success') {
            $('form#contact-us-form').hide();
            $('#success_message').show();
            $('#error_message').hide();
            setTimeout(function () {
                clenup();
            },3000);
        } else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            remove_feedback();
        }
    }

    $('#contact-us-form').submit(function (e) {
        e.preventDefault();

        var $form = $(this);

        // show feedback for the user on submit
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });

        // verify information and send message on email
        $.ajax({
            type: 'post',
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });
    });
});