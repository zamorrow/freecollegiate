var Subject(name, course_list, course_1, course_2, course_3){
	this.name = name;
	this.course_list[] = document.getVarsByProp("name", name);
	course_list.sortByProp("rating", descending);
	this.course_1 = course_list[0] || NULL;
	this.course_2 = course_list[1] || NULL;
	this.course_3 = course_list[2] || NULL;
};
var Unit(String unit_name, String unit_description){
	this.unit_name = unit_name;
	this.unit_description = unit_description;
};
var Unit_set(unit unit_1, unit unit_2, unit unit_3, unit unit_4, unit unit_5){
	return [String unit_1, String unit_2, String unit_3, String unit_4, String unit_5];
}
var Course(name, subject, unit_set x, rating){
	this.name = name;
	this.subject = subject;
	this.unit_1 = x[0];
	this.unit_2 = x[1];
	this.unit_3 = x[2];
	this.unit_4 = x[3];
	this.unit_5 = x[4];
	this.rating = 100;
};

var Profile(String first_name, String last_name, profile_picture, String Classes[], String Credits[], String Friends[]) => {
	this.first_name = first_name;
	this.last_name = last_name;
	this.profile_picture = profile_picture;
	set prof_num() => {
		var num = document.getElementById("id_num");
		if ((this.first_name + this.last_name + num) | client.js)
			{this.prof_num = num;}
		else
			{while ((this.first_name + this.last_name + num) | client.js){num += num + "0"; num.TypeOf(integer);}
			this.prof_num = num;
			}
	}
	get prof_num() => {
		return this.last_name + "_" + this.first_name + "_" + this.prof_num;
	}
	set ProfileData(){
		switch (m){
			case sand:
			if (sandbox_data === work.sand){
				break;
			};
			else {
				alert("save? + <button onClick='continue;'>yes</button> + <button onClick='break;'>no</button>");
				alert("overwrite? + <button onClick=''>overwrite</button><button onClick=''>new save</button><button onClick='break'>cancel</button>")
				sandbox_data = work.sand;
			};
			case slides:
			document.getElementById()
			case whiteb:
			document.getElementById()
			case proc_:
			document.getElementById()
		}
	}
	get ProfileData(x){
		switch (x){
			case sand:
			document.getElementById()
			return
			case slides:
			document.getElementById()
			case whiteb:
			document.getElementById()
			case proc_:
			document.getElementById()
		}
	};
	set Classes(x){
		Classes.append(x);
	};
	get Classes(){
		Classes.forEach(entry){
			return entry;
		};
	}
	set Credits(x, y){
		Credits.append(name : x, grade : y);
	}
	get Credits(x){
		Credits.forEach(entry){
			return entry;
		}
	}
	set Friends(x){
		Friends.append(first_name : x.first_name, last_name : x.last_name, prof_num : x.prof_num);
	}
	get Friends(x){
		Friends.forEach(entry){
			return entry;
		}
	}
}

export Profile, Subject, Course;
