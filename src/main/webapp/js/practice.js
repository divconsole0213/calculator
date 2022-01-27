/**
 * 
 */
let count = 0;

myFunc();

function myFunc(){
	count++;
	document.write("hello" + count,"<br>");
}

myFunc();

let theFunc = function(){
	count++;
	document.write("bye" + count,"<br>");
	}

theFunc();

function sum(){
	let sum = arguments[0] + arguments[1] + arguments[2];
	document.write(sum);
}

sum(10,20,30);

function testAvg(arrData){
	let sum = 0;
	for(let i = 0; i < arrData.length; i++){
	sum+= Number(prompt(arrData[i] + "점수는?","0"));
			}
			
	let avg = sum/addData.length;
	return avg;
	}
	
	let arrSubject =['국어', '수학'];
	let result = testAvg(arrSubject);
	
	document.write("평균점수는" + result + "점수입니다.");