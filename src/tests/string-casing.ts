import { doNotExecute } from "./utils";

doNotExecute(() => {
  const str = "Foo" as const;

  // No error
  let lowercase: Lowercase<typeof str> = str.toLowerCase();
  
  // @ts-expect-error
  lowercase = str;
});

doNotExecute(() => {
  const str = "Foo" as const;

  // No error
  let lowercase: Lowercase<typeof str> = str.toLocaleLowerCase();
  
  // @ts-expect-error
  lowercase = str;
});

doNotExecute(() => {
  const str = "Foo" as const;

  // No error
  let uppercase: Uppercase<typeof str> = str.toUpperCase();
  
  // @ts-expect-error
  uppercase = str;
});

doNotExecute(() => {
  const str = "Foo" as const;

  // No error
  let uppercase: Uppercase<typeof str> = str.toLocaleUpperCase();
  
  // @ts-expect-error
  uppercase = str;
});
