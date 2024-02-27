// There can be multiple test cases inside a test suit.
// if there are multiple test case and you want to execute a specific one , just write only with that test case

describe('suit name', () => {

    it.only('test case 1', () => {
      expect(true).to.equal(true)
    })

    it('test case 2', () => {
        expect(true).to.equal(false)
      })

  })