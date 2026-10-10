require "././index_java.js";
import "./lists/business_list.txt" as business_list;

var Course[] business_array, business_search_results, business_array_top;
var ticker = 2;
for (x=0, x<(business_list.length() - (business_list.length()/3)), x++){
	business_array[x].name = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1));
	ticker+=2;
	business_array[x].unit_1 = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1))+"/n"+business_list.splice(business_list.instance("*", ticker+2), business_list.instance("*", ticker+3));
	ticker+=4;
	business_array[x].unit_2 = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1))+"/n"+business_list.splice(business_list.instance("*", ticker+2), business_list.instance("*", ticker+3));
	ticker+=4;
	business_array[x].unit_3 = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1))+"/n"+business_list.splice(business_list.instance("*", ticker+2), business_list.instance("*", ticker+3));
	ticker+=4;
	business_array[x].unit_4 = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1))+"/n"+business_list.splice(business_list.instance("*", ticker+2), business_list.instance("*", ticker+3));
	ticker+=4;
	business_array[x].unit_5 = business_list.splice(business_list.instance("*", ticker), business_list.instance("*", ticker+1))+"/n"+business_list.splice(business_list.instance("*", ticker+2), business_list.instance("*", ticker+3));
	ticker+=6;
};
business_array_top = business_array.sortBy(this.get(rating), descending).splice(0,2);
business_array.search(x) = {
	var z,y = 0;
	while (y < business_array.length){
	y++;
	if (business_array[y] === x){
		business_search_results[z] = x;
		z++;
		}
	}
	return business_search_results.sortBy(this.get(rating), descending);
};

export business_array_top[];
export business_array[];
