module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancedItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement + 1,
  }

  if (item.enhancement >= 20) {
    return item
  } else {
    return enhancedItem
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const failedEnhancementLess15 = {
        name: item.name,
        durability: item.durability - 5,
        enhancement: item.enhancement,
    }

    return failedEnhancementLess15
}

if (item.enhancement >= 15 && item.enhancement < 17) {
    const failedEnhancementBetween = {
        name: item.name,
        durability: item.durability - 10,
        enhancement: item.enhancement,
    }

    return failedEnhancementBetween
}

if (item.enhancement >= 17) {
    const failedEnhancement17Above = {
        name: item.name,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
    }

    return failedEnhancement17Above
}
}

function repair(item) {
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement,
  }

  return repairedItem;
}





function get(item) {
  const retrievedItem = {
    name: `[+${item.enhancement}] ${item.name}`,
    durability: item.durability,
    enhancement: item.enhancement,
  }

  if (item.enhancement > 0) {
    return retrievedItem
  } else {
    return item
  }
}
