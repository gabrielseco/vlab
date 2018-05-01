import * as readline from 'readline';

export class Prompt {
  static ask(question: string): Promise<string> {
    const stream = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise<string>((resolve, reject) => {
      stream.question(question, (answer: string) => {
        stream.close();
        resolve(answer);
      });
    });
  }
}