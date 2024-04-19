//your code here
function findMajorityElement(nums){
	let count=0;
	let candidate=null;
	for(let num of nums){
		if(count===0){
			candidate=num;
		}
		count+=(num===candidate)?1:-1;
	}
	count=0;
	for(let num of nums){
		if(num === candidate){
			count++;
		}
	}
if(count > Math.floor(nums.length/2)){
	return candidate;
}
else{
	return -1;
}
}