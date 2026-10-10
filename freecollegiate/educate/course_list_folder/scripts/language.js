require "././index_java.js";
import "./lists/language_list.txt" as language_list;

var Course[] language_array, language_search_results, language_array_top;
var ticker = 2;
for (x=0, x<(language_list.length() - (language_list.length()/3)), x++){
	language_array[x].name = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1));
	ticker+=2;
	language_array[x].unit_1 = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1))+"/n"+language_list.splice(language_list.instance("*", ticker+2), language_list.instance("*", ticker+3));
	ticker+=4;
	language_array[x].unit_2 = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1))+"/n"+language_list.splice(language_list.instance("*", ticker+2), language_list.instance("*", ticker+3));
	ticker+=4;
	language_array[x].unit_3 = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1))+"/n"+language_list.splice(language_list.instance("*", ticker+2), language_list.instance("*", ticker+3));
	ticker+=4;
	language_array[x].unit_4 = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1))+"/n"+language_list.splice(language_list.instance("*", ticker+2), language_list.instance("*", ticker+3));
	ticker+=4;
	language_array[x].unit_5 = language_list.splice(language_list.instance("*", ticker), language_list.instance("*", ticker+1))+"/n"+language_list.splice(language_list.instance("*", ticker+2), language_list.instance("*", ticker+3));
	ticker+=6;
};
language_array_top = language_array.sortBy(this.get(rating), descending).splice(0,2);
language_array.search(x) = {
	var z,y = 0;
	while (y < language_array.length){
	y++;
	if (language_array[y] === x){
		language_search_results[z] = x;
		z++;
		}
	}
	return language_search_results.sortBy(this.get(rating), descending);
};

export language_array_top[];
export language_array[];
