
let currentNum = document.getElementById("currentNumber");
let previousNum = document.getElementById("previousNumber");
let calcNum = document.querySelectorAll(".num");
let dl = document.getElementById("delete");
let mn = document.getElementById("minus");
let mp = document.getElementById("multiple");
let dv = document.getElementById("divide");
let pl = document.getElementById("plus");
let dt = document.getElementById("dot");
let remove = document.getElementById("ce");
let result = document.getElementById("result");

class Calc{
	constructor(){
	 this.currentNum = currentNum;
	}
	
calcNum(){
 for(let i = 0; i < calcNum.length; i++){
	calcNum[i];
calcNum[i].addEventListener('click',(e)=>{
	currentNum.textContent += calcNum[i].value;
 })

}

}
	mn(){
mn.addEventListener('click', function(){
	currentNum.textContent += mn.value
})

}

mp(){
mp.addEventListener('click', function(){
	currentNum.textContent += mp.value;
})
}

dv(){

dv.addEventListener('click', function(){
	currentNum.textContent += dv.value;
})
}

pl(){
pl.addEventListener('click', function(){
	currentNum.textContent += pl.value;
})
}

dt(){
dt.addEventListener('click', function(){
	currentNum.textContent += dt.value;
})
}

remove(){
remove.addEventListener('click', function(){

	currentNum.textContent = "";
})
}
dl(){
	dl.addEventListener("click",function(){
		currentNum.textContent = currentNum.textContent.slice(0,-1);
	    })
}

result(){
	result.addEventListener("click",(e)=>{
		e.preventDefault
		previousNum.textContent = currentNum.value;
		let info;
		let result;
		 $(function(){
			info = $("#currentNumber").html();
			currentNum.textContent = (eval(info));
			})
	})
}
}


/*class Compute extends Calc{

     beforeCompute(){
	let cal_currentNum = new Calc();
	let RegNum = cal_currentNum.currentNum;
	console.log(RegNum);
	 }}*/
	
let cal = new Calc();
cal.dt();
cal.dv();
cal.mn();
cal.mp();
cal.pl();
cal.remove(); 
cal.dl();
cal.calcNum();
cal.result();
/*let compute_ = new Compute();
compute_.beforeCompute();*/