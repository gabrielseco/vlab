import * as readline from 'readline';
import { Writable } from 'stream';

interface IPrompt {
  ask(question: string): Promise<string>;
}

class ClassicPrompt implements IPrompt {
  ask(question: string): Promise<string> {
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

class PasswordPrompt implements IPrompt {
  ask(question: string): Promise<string> {
    let muted = false;
    const mutedStdout = new Writable({
      write: (chunk, encoding, callback) => {
        if (!muted) {
          process.stdout.write(chunk as any, encoding);
        }
        callback();
      }
    });

    const stream = readline.createInterface({
      input: process.stdin,
      output: mutedStdout,
      terminal: true
    });

    return new Promise<string>((resolve, reject) => {
      stream.question(question, (answer: string) => {
        stream.close();
        resolve(answer);
      });
      muted = true;
    });
  }
}

export class Prompt {
  static ask(question: string, options?: { type: string }): Promise<string> {
    if (options === undefined) {
      return new ClassicPrompt().ask(question);
    }

    if (options && options.type === 'password') {
      return new PasswordPrompt().ask(question);
    }
  }
}
