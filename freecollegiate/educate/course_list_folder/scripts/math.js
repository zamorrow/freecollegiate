require index_java.js from "../index_java.js";
const math_fil = new FileReader();
math_fil.addEventListener('load', (math_list) => {this.src "./lists/math_list.txt"});

var Course[] math_array, math_array_top;
var ticker = 3;
var tot() => {
	var answe = 0;
	math_list.forEach() => {if(this === "/n") {answe +1}};
	return answe/3;
};
for (x=0, x<tot(), x++){
	math_array[x].name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
	ticker+=2;
	math_array[x].unit_1.unit_name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
		math_array[x].unit_1.unit_description = math_list.splice(math_list.instance("*", ticker+2), math_list.instance("*", ticker+3));
	ticker+=4;
	math_array[x].unit_2.unit_name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
		math_array[x].unit_2.unit_description = math_list.splice(math_list.instance("*", ticker+2), math_list.instance("*", ticker+3));
	ticker+=4;
	math_array[x].unit_3.unit_name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
		math_array[x].unit_3.unit_description = math_list.splice(math_list.instance("*", ticker+2), math_list.instance("*", ticker+3));
	ticker+=4;
	math_array[x].unit_4.unit_name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
		math_array[x].unit_4.unit_description = math_list.splice(math_list.instance("*", ticker+2), math_list.instance("*", ticker+3));
	ticker+=4;
	math_array[x].unit_5.unit_name = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
		math_array[x].unit_5.unit_description = math_list.splice(math_list.instance("*", ticker+2), math_list.instance("*", ticker+3));
	ticker+=4;
	math_array[x].subject = "math";
	math_array[x].rating = math_list.splice(math_list.instance("*", ticker), math_list.instance("*", ticker+1));
	ticker+=6;
};
math_array_top = math_array.sortBy(this.get(rating), descending);
math_array.search(x) = {
	var Course[] resul;
	var z,y = 0;
	while (y < math_array.length()){
	y++;
	if (math_array[y].name === x){
		resul[z] = math_array[y];
		z++;
		}
	}
	return resul.sortBy(this.get(rating), descending);
};

export math_array_top{0,3};
