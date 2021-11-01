class TestExtension {
  getInfo() {
    return {
      id: 'test', // change this if you make an actual extension!
      name: 'Testing blocks',
      blocks: [
        {
          opcode: 'Power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] ** [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            }
          }
        }
      ]
    };
  }
  test(args) {
    return args.ONE ** args.TWO;
  }
}
Scratch.extensions.register(new TestExtension());