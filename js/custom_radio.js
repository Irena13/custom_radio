/**
 * Created by stagiaire on 10/05/2016.
 */
$(function(){
    //on ajoute un span après chaque input et on cache l'input
    $('.custom_radio input[type=radio]').hide().after('<span class="off"></span>');

    //evt de click sur les spans
    $('.off').click(function(){

        //on deselectionne le precedent
        $(this).parent().find('.on').prev().prop('checked', false);
        $(this).parent().find('.on').removeClass('on').addClass('off');

        //on selection l'element en cours
        $(this).removeClass('off').addClass('on');
        $(this).prev().prop('checked', true);


    });

    //vérif saisie
    $('#btn').click(function(){
     console.log($('input[name=choix]:checked').val());
     console.log($('input[name=sexe]:checked').val());

    });

});