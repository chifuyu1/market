import { useState, useCallback } from 'react';

export default function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChangeText = useCallback((text) => {
    setValue(text);
  }, []);
  return [value, onChangeText, setValue];
}
