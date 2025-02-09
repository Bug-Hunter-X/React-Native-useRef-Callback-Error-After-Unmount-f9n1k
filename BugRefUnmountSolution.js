```javascript
import React, { useRef, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Cleanup function to prevent error when unmounting
    let isMounted = true;
    const callback = () => {
      if (isMounted && myRef.current) {
        // Accessing 'current' is safe here 
          console.log(myRef.current);
      }
    };
    setTimeout(callback, 1000); // Simulate async operation

    return () => { isMounted = false; };
  }, []);

  return (
    <View>
      <Text>My Component</Text>
      <Button title="Unmount Me" onPress={() => {}} />
      <View ref={myRef}>
        <Text>This is referenced</Text>
      </View>
    </View>
  );
};

export default MyComponent;
```