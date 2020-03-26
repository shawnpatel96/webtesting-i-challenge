module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
 if (item.enhancement === 20) {
		return { ...item }
	} else if(item.enhancement > 20) {
    throw new Error('Use a BlackSmith scroll to extract 20+ Enhancement Levels');
	} else {
    item.enhancement += 1;
		return { ...item };
  }
}



function fail(item) {
  if (item.enhancement >= 15 && item.enhancement <= 16) {
    return { ...item, durability: item.durability - 10 }
  } else if (item.enhancement > 16) {
    return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
  } else {
    return {...item, durability: item.durability - 5}
  }
}

function repair(item) {
	if (item) {
		item.durability = 100;
    return { ...item };
	} else{
    throw new Error({message: "invalid item input"})
  }
}

function get(item) {
   return { ...item };
}

