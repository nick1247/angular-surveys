angular.module('mwFormUtils', ['mwFormUtils.responseUtils'])
	.constant('MW_QUESTION_TYPES_WITH_AUTOFILL', [
		'text',
		'textarea',
		'number',
		'date',
		'time',
		'email',
		'range',
		'url'
	])
	.service('mwAutofillService', function () {
		var autofillList = [];

		this.addAutofillList = function(list) {
			autofillList = autofillList.concat(list);
		}
		this.setAutofillList = function(list) {
			autofillList = list;
		}
		this.clearAutofillList = function() {
			autofillList = [];
		}
		this.getAutofillList = function() {
			return autofillList;
		}

		var autofillSource = {};

		this.setAutofillSource = function(source) {
			autofillSource = source;
		}
		this.clearAutofillSource = function() {
			autofillSource = {};
		}
		this.getAutofillSource = function() {
			return autofillSource;
		}
	});