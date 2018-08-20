'use strict';
$(document).ready(function () {
	 $('.accordion__collapse:not(:first)').hide();
	 $('.accordion__arrow:not(:first)').addClass('closed');

	 $('.accordion__toggler').on('click', function (e) {
			e.preventDefault();

			var collapse = $(this).parent().find('.accordion__collapse'),
				arrow = $(this).find('.accordion__arrow'),
				notThis = $('.accordion__toggler').not(this);

			notThis.parent().find('.accordion__collapse').slideUp();

			notThis.find('.accordion__arrow').addClass('closed');

			if (collapse.is(':hidden')) {
				 collapse.slideDown();
				 arrow.removeClass('closed');
			} else {
				 collapse.slideUp();
				 arrow.addClass('closed');
			}
	 });

//---------modalnoe okno

	 $('#showModal').on('click', function (e) {
			e.preventDefault();
			$('.modal').fadeIn(400, function () {
				 // $('.modal').addClass('opened');
				 $('.modal__box').addClass('rotateInUpLeft');
			});
	 });
	 $('.modal__btn').on('click', function (e) {
			e.preventDefault();
			$('.modal__box').removeClass('rotateInUpLeft').addClass('rotateOutDownLeft');
			setTimeout(function () {
				 $('.modal').fadeOut(400);
				 $('.modal__box').removeClass('rotateOutDownLeft')
			}, 600);
	 });
//-----------------------------------------

	 $(".tabs__caption").on("click", "li:not(.tabs__caption-list-active)", function () {
			$(this)
				.addClass("tabs__caption-list-active")
				.siblings() //выбираются братья
				.removeClass("tabs__caption-list-active")
				.closest("div.container") // Для каждого элемента в наборе, получает первый элемент, который совпадает с селектором при движении вверху по DOM дереву элементов.
				.find("div.page")
				.removeClass("page-active")
				.eq($(this).index())//Этот метод возвращает элемент (как объект) по его индексу (порядковому номеру)
				.addClass("page-active");
	 });
	 $(".page__score-star").on('click', function() {
			$(".star").attr("src","img/star-gold.svg");
	 });


});
