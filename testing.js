var MyNamespace = MyNamespace || {};

(function ($m) {
	$m.Person = function () {
		this.newAges = [12,34,56];
	};
	$m.Person.prototype = {
		ages: [12, 34, 56],
		age: 12,
		ageObject: {value: 24},
		ageString: "Twenty Four",
		ageFunction: function () {
			return this.ageString;
		}
	};
	
	$m.buttonClick = function () {
	};
})(MyNamespace);
