import { useEffect, useState } from "react";

const useInput = (
  validatorFunction: (
    value: string
  ) => boolean | { valid: boolean; message: string } = () => true,
  initialValue?: string
): [
  string | undefined,
  (newValue: string | undefined) => void,
  boolean,
  string | null
] => {
  const [value, setValue] = useState<string | undefined>(
    initialValue || undefined
  );
  const [valid, setValid] = useState(false);
  const [validationMessage, setValidationMessage] =
    useState<string | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      const validated = validatorFunction(value);
      if (typeof validated === "boolean") {
        setValid(validated);
      } else {
        setValid(validated.valid);
        setValidationMessage(validated.message);
      }
    }
  }, [value]);

  return [value, setValue, valid, validationMessage];
};

export default useInput;
