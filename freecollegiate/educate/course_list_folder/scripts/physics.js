require "././index_java.js";
import "./lists/physics_list.txt" as physics_list;

var physics_array, physics_search_results, physics_array_top = course[];
var ticker = 2;
for (x=0, x<(physics_list.js.length() - (physics_list.js.length()/3)), x++){
	physics_array[x].name = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1));
	ticker+=2;
	physics_array[x].unit_1 = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+physics_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	physics_array[x].unit_2 = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+physics_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	physics_array[x].unit_3 = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+physics_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	physics_array[x].unit_4 = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+physics_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=4;
	physics_array[x].unit_5 = physics_list.js.splice("*".occurence(ticker), "*".occurence(ticker+1))+"/n"+physics_course.js.splice("*".occurence(ticker+2), "*".occurence(ticker+3));
	ticker+=6;
};
physics_array_top = physics_array.sortBy(this.get(rating), descending).splice(0,2);
physics_array.search(x) = {
	var z,y = 0;
	while (y < physics_array.length){
	y++;
	if (physics_array[y] === x){
		physics_search_results[z] = x;
		z++;
		}
	}
	return physics_search_results.sortBy(this.get(rating), descending);
};

export physics_array_top[];
export physics_array[];
