class TrExtension {
  getInfo() {
    return {
      id: 'testingexample', // change this if you make an actual extension!
      name: 'Power',
      blocks: [
        {
          opcode: 'Tr',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] ** [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  Tr(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE ** args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());