const { repair, success, fail, get} = require('./enhancer.js');
// test away!

describe('repair', () => {
    it('takes in an item and changes the durability to 100', () => {
        const item = {
            name: 'Needlessly Large Rod',
            durability: 45,
            enhancement: 20,
        };

        const expectedItem = {
            name: 'Needlessly Large Rod',
            durability: 100,
            enhancement: 20,
        }

        expect(repair(item)).toEqual(expectedItem)
    })
})

describe('success', () => {
    it('increases an items enhancement by 1, unless the enhancement is maxed out', () => {
        const itemA = {
            name: 'Dagger',
            durability: 100,
            enhancement: 18,
        }

        const itemB = {
            name: 'B.F. Sword',
            durability: 100,
            enhancement: 20,
        }

        function expectedItem(item) {
            if (item.enhancement >= 20) {
                return item
            } else {
                const enhancedItem = {
                    name: item.name,
                    durability: item.durability,
                    enhancement: item.enhancement + 1,
                }

                return enhancedItem
            }
        }

        expect(success(itemA)).toEqual(expectedItem(itemA))
        expect(success(itemB)).toEqual(expectedItem(itemB))
    })
})

describe('fail', () => {
    function expectedItem(item) {
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

    it('lowers the durability by 5, if the enhancement is less than 15', () => {
        const item = {
            name: 'Needlessly Large Rod',
            durability: 100,
            enhancement: 14,
        }

        expect(fail(item)).toEqual(expectedItem(item))
    })

    it('lowers the durability by 10, if the enhancement is 15 or 16', () => {
        const item = {
            name: 'Blasting Wand',
            durability: 100,
            enhancement: 16,
        }

        expect(fail(item)).toEqual(expectedItem(item))
    })

    it('lowers the durability by 10 and the enhancement by 1, if the enhancement is 17 or more', () => {
        const item = {
            name: 'Amplifying Tome',
            durability: 100,
            enhancement: 18,
        }

        expect(fail(item)).toEqual(expectedItem(item))
    })
})

describe('get', () => {
    it('returns the item with enhancement displayed unless the enhancement is 0', () => {
        function alterItem(item) {
            if (item.enhancement > 0) {
                const alteredItem = {
                    name: `[+${item.enhancement}] ${item.name}`,
                    durability: item.durability,
                    enhancement: item.enhancement,
                  }
                return alteredItem
              } else {
                return item
              }
        }
    })
})