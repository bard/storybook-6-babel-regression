export class ClassWithTranspilationIssues {
  constructor(private configuration: any = { foo: 'bar' }) { }

  printConfigParameter(): void {
    console.log(this.configuration.foo); // Unexpected error: TypeError: Cannot read property 'foo' of undefined
  }
}
