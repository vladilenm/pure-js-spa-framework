class PipesFactory {
  constructor() {
    this.pipes = {}
  }

  registerPipe(pipe) {
    this.pipes[pipe.name] = pipe
  }
  
  getPipe(name) {
    return this.pipes[name]
  }
}

export const pipesFactory = new PipesFactory()