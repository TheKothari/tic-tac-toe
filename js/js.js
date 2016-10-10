var turn, comp="X",c=0,flag=0,flag2=0;
var a=[0,1,2,3,4,5,6,7,8];
$(".reset").hide();
$(".container").hide();
$(".row1").hide();
$(document).ready(function(){
    $(".begin").click(function(){
         $(".start").fadeOut(500);
		 $(".container").delay(600).slideDown(2000);
		
   });


	
	
	
	
	

turn="X";
$(".xo1").click(function(){
		if(flag!=1) //this condition is to prevent user from clicking the boxes after game is finished
		{
			$(this).attr("value",turn);
			a[0]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer(); //this condition to prevent computer from playing once player has won
			else 
				{	$("#won p").append("YOU LOST");
					$(".reset").fadeIn();
				}
		}
});

	$(".xo2").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[1]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	
	$(".xo3").click(function(){
		if(flag!=1)	
		{
			$(this).attr("value",turn);
			a[2]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else
				{	$("#won p").append("YOU LOST");
					$(".reset").fadeIn();
				}
		}
});
	$(".xo4").click(function(){
	if(flag!=1)
		{
			$(this).attr("value",turn);
			a[3]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	
	$(".xo5").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[4]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	
	$(".xo6").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[5]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	
		
	$(".xo7").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[6]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	$(".xo8").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[7]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else 
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});
	
		$(".xo9").click(function(){
		if(flag!=1)
		{
			$(this).attr("value",turn);
			a[8]=$(this).attr("value");
			flag = check();
			if(flag!=1)computer();
			else
			{	$("#won p").append("YOU LOST");
				$(".reset").fadeIn();
			}
		}
});


//to check if any row or column is completed	
	 function  check()
	{if((a[0]==a[1])&&(a[1]==a[2]))
	{
	  return 1;

	}
	if((a[3]==a[4])&&(a[4]==a[5]))
	{
	  return 1;

	}
	 if((a[6]==a[7])&&(a[7]==a[8]))
	 { 
	  return 1;
	 }
	 
	 if((a[0]==a[3])&&(a[3]==a[6]))
	 { 
	  return 1;
	 }
	 
	 if((a[1]==a[4])&&(a[4]==a[7]))
	 {
	   return 1;

	 }
	 if((a[2]==a[5])&&(a[5]==a[8]))
	 {
	   return 1;

	 }
	 if((a[0]==a[4])&&(a[4]==a[8]))
	 {
	   return 1;

	 }
	 if((a[2]==a[4])&&(a[4]==a[6]))
	 {
	   return 1;

	 }
	}
	
// to generate random bo for computer
	function computer()
	{
		if(flag2!=1)
		{	if(c<=3)
			{	
			  do
				{
					comp=Math.floor(Math.random()*9)+1;  //gengerate random box thats not already filled

				}
			while((a[comp-1]=="X" || a[comp-1]=="O") );

				a[comp-1]="O";	
			$(".xo"+comp).attr("value","O");
			c++;
			}
			flag2=check();
				if(flag2==1) //to prevent player from playing after computer has won(which means u win)
				{
					$("#won p").append("YOU WON").fadeIn(400);	
					flag=1;
					$(".reset").fadeIn();

			}
		}
	}
	

	
//for a draw match
if((flag==0)&&(c==4))
{
	$("#won p").append("YOU LOST(draw)");
	$(".reset").fadeIn();

}
//reset button	
$(".reset").click(function(){
	for(i=1;i<=9;i++)
		{
			$(".xo"+i).attr("value","");
			a[i-1]=i;
		}
	flag=0;
	flag2=0;
	c=0;
	$("#won p").empty();
	$(this).hide();

})


});