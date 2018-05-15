$(function() {
    $('#contact-us-form').submit(function (e) {
        console.dir('subnit d=form bla bla ...' );
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

    });
});