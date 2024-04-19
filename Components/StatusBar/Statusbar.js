import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";

function Statusbar() {
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [barStyle, setBarStyle] = useState("default");
  return (
    <View>
      <StatusBar backgroundColor="blue" hidden={false} />
      <View style={styles.main}>
        <Button
          title="Press to hide "
          barStyle={barStyle}
          hidden={showStatusBar}
          style={styles.button}
          onPress={() => setShowStatusBar(!showStatusBar)}
        />
        <Button
          title="Press to open "
          style={styles.button}
          onPress={() => setBarStyle("dard-content")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    justifyContent: "center",
    alingItem: "<center></center>",
  },
  button: {
    padding: 10,
  },
});

export default Statusbar;

// Component to control the app's status bar. The status bar is the zone, typically at the top of the screen,
//  that displays the current time,
// Wi-Fi and cellular network information, battery level and/or other status icons.
