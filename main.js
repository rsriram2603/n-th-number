let arr=[45,6,7,-1];
let n=parseInt(prompt("enter the element"));
function nsmall(arr,n)
{
	for(i=0;i<arr.length;i++)
	{
		for(j=i+1;j<arr.length;j++)
		{
			if(arr[i]>arr[j])
			{
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
		console.log(arr[i]);
	}
	let small=arr[0];
	return small;
}
console.log(nsmall(arr,n));