let arr = [
	{
		name: "Ha",
		gender: 'female',
		poin: 8
	},
	{
		name: "Huy",
		gender: 'male',
		poin: 9
	},
	{
		name: "Hung",
		gender: 'male',
		poin: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		poin: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		poin: 10
	},
	{
		name: "Long",
		gender: 'male',
		poin: 5
	},
	{
		name: "Luan",
		gender: 'male',
		poin: 10
	},
	{
		name: "Linh",
		gender: 'female',
		poin: 8
	}

  ];
let demsonam = 0;
let tongdiemnam = 0;
let demsonu = 0;
let tongdiemnu = 0;
for(let i = 0; i< arr.length; i++){
    if(arr[i].gender == 'female'){
        demsonu++;
        tongdiemnu += arr[i].poin;
    }else if(arr[i].gender == 'male'){
        demsonam++;
        tongdiemnam += arr[i].poin;
    }
}
console.log(`Điểm trung bình của nam: ${tongdiemnam/demsonam}`);
console.log(`Điểm trung bình của nữ: ${tongdiemnu/demsonu}`);
