const actualInput = [
{
  	name: "abc",
  },
  {
  	name: "abc",
  },
  {
  	name: "abc",
  },
  {
  	name: "bce",
  },
  {
  	name: "bced",
  },
  {
  	name: "abc",
  }
]
const countUniques = (actualInput) => {
	const output = actualInput.reduce((accumulator, currentValue) => {
  		if(accumulator[currentValue.name]){
      	accumulator[currentValue.name]+=1;
      }else{
        accumulator[currentValue.name] = 1
      }
      return accumulator;
  }, []);
  console.log(output);
}
countUniques(actualInput);