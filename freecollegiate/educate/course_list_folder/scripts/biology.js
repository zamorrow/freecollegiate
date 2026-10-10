require "././index_java.js";
const biology_list = new FileReader();
biology_list.addEventListener('load', biology_list => {return "./lists/biology_list.txt"});

var Course[] biology_array, biology_search_results, biology_array_top;
var ticker = 2;
for (x=0, x<(biology_list.length() - (biology_list.length()/3)), x++){
	biology_array[x].name = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1));
	ticker+=2;
	biology_array[x].unit_1 = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1))+"/n"+biology_list.splice(biology_list.instance("*", ticker+2), biology_list.instance("*", ticker+3));
	ticker+=4;
	biology_array[x].unit_2 = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1))+"/n"+biology_list.splice(biology_list.instance("*", ticker+2), biology_list.instance("*", ticker+3));
	ticker+=4;
	biology_array[x].unit_3 = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1))+"/n"+biology_list.splice(biology_list.instance("*", ticker+2), biology_list.instance("*", ticker+3));
	ticker+=4;
	biology_array[x].unit_4 = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1))+"/n"+biology_list.splice(biology_list.instance("*", ticker+2), biology_list.instance("*", ticker+3));
	ticker+=4;
	biology_array[x].unit_5 = biology_list.splice(biology_list.instance("*", ticker), biology_list.instance("*", ticker+1))+"/n"+biology_list.splice(biology_list.instance("*", ticker+2), biology_list.instance("*", ticker+3));
	ticker+=6;
};
biology_array_top = biology_array.sortBy(this.get(rating), descending).splice(0,2);
biology_array.search(x) = {
	var z,y = 0;

	while (y < biology_array.length){
	y++;
	if (biology_array[y] === x){
		biology_search_results[z] = x;
		z++;
		}
	}
	return biology_search_results.sortBy(this.get(rating), descending);
};
var enroll(class_nick, user_id, new_bool, time_se) => {
	class_nick=class_nick.slice(0, class_nick.length-3);
	if (new_bool){
		running_classes_active.append('${class_nick} + user_id')}
	else {
		running_classes_active.(class_nick).concat(this, '_ + user_id
};

export biology_array_top[];
default export biology_array[];
