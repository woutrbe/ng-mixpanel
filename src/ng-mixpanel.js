(function(window, angular, undefinde) {
	angular.module('ngMixpanel', [])

	.service('ngMixpanelService', [function() {
		return {
			init: function(token) {
				mixpanel.init(token);
			},
			track: function(event, props) {
				props = props || {};

				mixpanel.track(event, props);
			}
		}
	}])

	.directive('mp-track-links', [function() {
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attrs, ctrl) {

			}
		}
	}])
})(window, window.angular);