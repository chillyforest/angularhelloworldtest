describe("hello world", function() {
	var appCtrl;
	var $scope;
	beforeEach(module("HelloApp"));
	beforeEach(inject(function ($controller, _$scope_) {
		appCtrl = $controller("HelloController", {$scope: _$scope_ });
	} ));
	describe("HelloController", function () {
		it("Hello message", function() {
			$scope = {};
			appCtrl = $controller("HelloController", {$scope: _$scope_ });
			$scope.name = "Kevin";
			expect(appCtrl.greeting).toBe("Hello Kevin");
		});
		
	})
		
}