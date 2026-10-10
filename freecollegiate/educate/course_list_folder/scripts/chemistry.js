require "././index_java.js";
import "./lists/chemistry_list.txt" as chemistry_list;

var Course[] chemistry_array, chemistry_search_results, chemistry_array_top;
var ticker = 2;
for (x=0, x<(chemistry_list.length() - (chemistry_list.length()/3)), x++){
	chemistry_array[x].name = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1));
	ticker+=2;
	chemistry_array[x].unit_1 = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1))+"/n"+chemistry_list.splice(chemistry_list.instance("*", ticker+2), chemistry_list.instance("*", ticker+3));
	ticker+=4;
	chemistry_array[x].unit_2 = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1))+"/n"+chemistry_list.splice(chemistry_list.instance("*", ticker+2), chemistry_list.instance("*", ticker+3));
	ticker+=4;
	chemistry_array[x].unit_3 = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1))+"/n"+chemistry_list.splice(chemistry_list.instance("*", ticker+2), chemistry_list.instance("*", ticker+3));
	ticker+=4;
	chemistry_array[x].unit_4 = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1))+"/n"+chemistry_list.splice(chemistry_list.instance("*", ticker+2), chemistry_list.instance("*", ticker+3));
	ticker+=4;
	chemistry_array[x].unit_5 = chemistry_list.splice(chemistry_list.instance("*", ticker), chemistry_list.instance("*", ticker+1))+"/n"+chemistry_list.splice(chemistry_list.instance("*", ticker+2), chemistry_list.instance("*", ticker+3));
	ticker+=6;
};
chemistry_array_top = chemistry_array.sortBy(this.get(rating), descending).splice(0,2);
chemistry_array.search(x) = {
	var z,y = 0;
	while (y < chemistry_array.length){
	y++;
	if (chemistry_array[y] === x){
		chemistry_search_results[z] = x;
		z++;
		}
	}
	return chemistry_search_results.sortBy(this.get(rating), descending);
};

export chemistry_array_top[];
export chemistry_array[];
