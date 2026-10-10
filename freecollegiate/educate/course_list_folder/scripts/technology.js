require "././index_java.js";
import "./lists/technology_list.txt" as technology_list;

var technology_array, technology_search_results, technology_array_top = course[];
var ticker = 2;
for (x=0, x<(technology_list.js.length() - (technology_list.js.length()/3)), x++){
	technology_array[x].name = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1));
	ticker+=2;
	technology_array[x].unit_1 = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+technology_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	technology_array[x].unit_2 = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+technology_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	technology_array[x].unit_3 = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+technology_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	technology_array[x].unit_4 = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+technology_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	technology_array[x].unit_5 = technology_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+technology_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=6;
};
technology_array_top = technology_array.sortBy(this.get(rating), descending).splice(0,2);
technology_array.search(x) = {
	var z,y = 0;
	while (y < technology_array.length){
	y++;
	if (technology_array[y] === x){
		technology_search_results[z] = x;
		z++;
		}
	}
	return technology_search_results.sortBy(this.get(rating), descending);
};

export technology_array_top[];
export technology_array[];
