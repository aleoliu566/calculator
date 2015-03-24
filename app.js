$(function(){
	var currentText = 0 ;
	var x=0 ;
	var b=0 ;
	var currentAnswer;
	var FinalAnswer;
	$('#btn1').on('click',function(){
		/*alert('hello jQuery');
		render();
		$('#message').addClass('green')
		plus( a );
		render();
		if (currentText == 0){
			currentText = 1;

		}else{
		currentText = currentText + '1';
		}
		$('#message').text(currentText);*/
		a = 1;
		render(1);
		
	});
	$('#btn2').on('click',function(){
		a = 2 ;
		render(2);
	});
	$('#btn3').on('click',function(){
		a = 3 ;
		render(3);
	});
	$('#btn4').on('click',function(){
		a = 4 ;
		render(4);
	});
	$('#btn5').on('click',function(){
		a = 5 ;
		render(5);
	});
	$('#btn6').on('click',function(){
		a = 6 ;
		render(6);
	});
	$('#btn7').on('click',function(){
		a = 7 ;
		render(7);
	});
	$('#btn8').on('click',function(){
		a = 8 ;
		render(8);
	});
	$('#btn9').on('click',function(){
		a = 9 ;
		render(9);
	});
	$('#btn0').on('click',function(){
		a = 0 ;
		render(0);
	});
	$('#btndot').on('click',function(){		
		//boolean str = currentText.contains(.);
		a = '.' ;
		//if( str == false){
			render('.');
		/*}
		else{
			render('');
		}*/
	});

	
	$('#btnplus').on('click',function(){
		x = 1;
		currentAnswer = currentText;
		currentText = 0;
		//currentText =currentText ;
		//render();
	});

	$('#btnminus').on('click',function(){
		if(b==0){
			currentText = '-';
			$('#message').text('-');
		}else{
			x = 2;
			currentAnswer = currentText;
			currentText = 0;
		}
		//currentText = currentText ;
		//render();
	});

	$('#btnmultiply').on('click',function(){
		x = 3;
		currentAnswer = currentText;
		currentText = 0;
		//currentText = currentText ;
		//render();
	});
	$('#btndivide').on('click',function(){
		x = 4;
		currentAnswer = currentText;
		currentText = 0;
		//currentText = currentText ;
		//render();
	});
	$('#btnequal').on('click',function(){
		var currentText1 = parseFloat(currentText,10);
		var currentAnswer1 = parseFloat(currentAnswer,10);

		if ( x == 1){
			FinalAnswer = currentAnswer1 + currentText1;
		}
		if ( x == 2){
			FinalAnswer = currentAnswer1 - currentText1;
		}
		if ( x == 3){
			FinalAnswer = currentAnswer1 * currentText1;
		}
		if ( x == 4){
			FinalAnswer = currentAnswer1 / currentText1;
		}

		$('#message').text(FinalAnswer);
		currentText = FinalAnswer;
	});
	$('#btnclear').on('click',function(){
		currentText = 0;
		currentAnswer = 0;
		FinalAnswer = 0;
		render(0);
		x,b=0;
		//$('#message').text(currentText);
	});

	function render(a){
		if (currentText == 0){
			currentText = a;
		}else{
		a = a.toString();
		currentText = currentText + a;
		}
		$('#message').text(currentText);
		b=1;
	}
});

