var array_a_trabajar = [];
var copia_array_a_trabajar = [];

function myReversa(array_a_trabajar){
	if (Array.isArray(array_a_trabajar)) {
		copia_array_a_trabajar = array_a_trabajar.slice();
		for (var i = 0; i < array_a_trabajar.length; i++) {
			array_a_trabajar[i] = copia_array_a_trabajar[ array_a_trabajar.length - 1- i];
		};
		return (" SI SI , ES UN TRUE, VIEJO, EN CAPS Y TODO")
	}
	else {
		return ("FALSÏSIMO")
	}
};

