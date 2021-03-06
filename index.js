import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Button({ children, theme, style, onPress, title, progress, mode }) {
  const { primary, textLight, white } = theme;
  const val = children == undefined ? title : children;
  let btnUi;
  let etc = null;
  if (mode === 'text') {
    btnUi = [css.textbtn];
    etc = css.textbtn;
  } else if (mode === 'outline') {
    btnUi = [css.outlineBtn, { borderColor: primary }];
    etc = css.textbtn;
  } else {
    btnUi = [{ backgroundColor: primary }, css.primaryBtn];
  }
  const text = mode === 'primary' ? white : primary;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[css.button, ...btnUi, style]}>
        {progress == true ? (
          <ActivityIndicator color={text} style={css.loader} />
        ) : null}
        <Text style={[{ color: text }, etc]}>{val}</Text>
      </View>
    </TouchableOpacity>
  );
}
function Br() {
  return (
    <View style={css.br}></View>
  )
}
function Input({
  hint,
  width,
  value,
  multiline,
  onChangeText,
  password,
  returnKeyType,
  onKeyPress,
  hintColor,
  theme,
  ref,
  paddingVertical,
  borderRadius,
  icon,
}) {
  return (
    <>
      <View
        style={[
          {
            backgroundColor: theme.textBox,
            width: width == undefined ? '80%' : width,
            paddingVertical:
              paddingVertical == undefined ? 10 : paddingVertical,
            borderRadius: borderRadius == undefined ? 20 : borderRadius,
          },
          css.textInputprnt,
        ]}>
        {icon}
        <TextInput
          placeholder={hint}
          ref={ref}
          placeholderTextColor={hintColor == undefined ? '#000' : hintColor}
          style={[
            css.textInput,
            { lineHeight: multiline == true ? 26 : undefined },
          ]}
          onChangeText={onChangeText}
          value={value == undefined ? '' : value}
          secureTextEntry={password == undefined ? false : password}
          returnKeyType={returnKeyType}
          onSubmitEditing={onKeyPress}
          multiline={multiline == true ? true : false}
        />
      </View>
    </>
  );
}
function Screen({ children, theme }) {
  return (
    <>
      <StatusBar height={StatusBar.currentHeight} backgroundColor={theme.statusBar !== undefined ? theme.statusBar : theme.primary !== undefined ? theme.primary : "#000000"} />
      <SafeAreaView style={css.flex}>
        <ScrollView style={css.flex}>
          <View style={css.flex}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
function Heading({ children, size }) {
  return (
    <Text style={[css.heading, { fontSize: size == undefined ? 30 : size }]}>
      {children}
    </Text>
  );
}
function P({ children }) {
  return <Text style={css.p}>{children}</Text>;
}
function Card({ children, size }) {
  return (
    <View
      style={[
        css.card,
        { alignSelf: size !== 'fill' ? 'flex-start' : undefined },
      ]}>
      {children}
    </View>
  );
}
export { Button, Input, Heading, P, Card, Br, Screen };

const css = StyleSheet.create({
  primaryBtn: {
    backgroundColor: 'red',
  },
  outlineBtn: {
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    alignSelf: 'flex-start',
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  textbtn: {
    fontWeight: 'bold',
  },
  loader: {
    marginRight: 10,
  },
  textInput: {
    padding: 0,
    width: "100%"
  },
  textInputprnt: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
    marginLeft: 25,
  },
  p: {
    marginHorizontal: 25,
    lineHeight: 25,
    marginTop: 10
  },
  br: {
    width: "100%",
    height: 8
  },
  flex: {
    flex: 1
  }
});
