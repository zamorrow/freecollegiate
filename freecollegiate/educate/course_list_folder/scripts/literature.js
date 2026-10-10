require "././index_java.js";
import "./lists/literature_list.txt" as literature_list;

var Course[] literature_array, literature_search_results, literature_array_top;
var ticker = 2;
for (x=0, x<(literature_list.length() - (literature_list.length()/3)), x++){
	literature_array[x].name = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1));
	ticker+=2;
	literature_array[x].unit_1 = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1))+"/n"+literature_list.splice(literature_list.instance("*", ticker+2), literature_list.instance("*", ticker+3));
	ticker+=4;
	literature_array[x].unit_2 = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1))+"/n"+literature_list.splice(literature_list.instance("*", ticker+2), literature_list.instance("*", ticker+3));
	ticker+=4;
	literature_array[x].unit_3 = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1))+"/n"+literature_list.splice(literature_list.instance("*", ticker+2), literature_list.instance("*", ticker+3));
	ticker+=4;
	literature_array[x].unit_4 = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1))+"/n"+literature_list.splice(literature_list.instance("*", ticker+2), literature_list.instance("*", ticker+3));
	ticker+=4;
	literature_array[x].unit_5 = literature_list.splice(literature_list.instance("*", ticker), literature_list.instance("*", ticker+1))+"/n"+literature_list.splice(literature_list.instance("*", ticker+2), literature_list.instance("*", ticker+3));
	ticker+=6;
};
literature_array_top = literature_array.sortBy(this.get(rating), descending).splice(0,2);
literature_array.search(x) = {
	var z,y = 0;
	while (y < literature_array.length){
	y++;
	if (literature_array[y] === x){
		literature_search_results[z] = x;
		z++;
		}
	}
	return literature_search_results.sortBy(this.get(rating), descending);
};

export literature_array_top[];
export literature_array[];
