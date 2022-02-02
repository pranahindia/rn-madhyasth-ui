
## Usage/Examples
### Theming
You are needed to create a color JSON for Components. Following is the example JSON with accepted parameters.
```javascript
 const Theme = {
    primary: 'red',
    textLight: '#fff',
    white: '#fff',
    textBox: '#ededed',
  };
```
Above JSON should be provided to Components.
### Button
Parameters are listed below
- ```theme``` : Accepts ```theme JSON``` 
- ```style``` : Accepts ```style``` Object
- ```onPress``` : Accepts ```onPress``` event
- ```title``` : Button Text or if this is not provided Component will act as container tag and search for ```children```.
- ```progress``` : Accepts ```boolean``` to show ```ActivityIndicator``` in button.
- ```mode```: Accepts ```"primary"```, ```"outline"``` or ```"text"``` for different button types.

Example is below
```javascript
<Button
 theme={Theme}
 onPress={()=>alert('Hello')}
 progress={false}
 mode="outline"
>
    Button Text
</Button>
```
### Input
Text Box that accepts Text input from user. Accepts following parameters.
- ```hint```
- ```width```, default is 80%
- ```value```
- ```multiline```, default is ```false```
- ```onChangeText```
- ```password```, default is ```false```
- ```returnKeyType```
- ```onKeyPress```
- ```hintColor```, default is ```#0000000```
- ```theme```
- ```ref```
- ```paddingVertical```
- ```borderRadius```
- ```icon```

Example is below.
```javascript
<Input
    hint="Full Name"
    value={name}
    onChangeText={setName}
/>
```
### Heading
Accepts
- ```size```, accepts number for size of Heading, default is `30`
- ```children```, must provided as container tag, no need of ```<Text>``` here, provide raw string for heading.

Example:
```javascript
    <Heading>
        Hello World
    </Heading>
```
### P
For Paragraph, or a simple descriptive text.
Accepts
- `children`, must be provided as container tag, no `<Text>` is required, directly provide string.
Example
```javascript
    <P>
        Some Long Paragraph
    </P>
```
### Card
Creates a card.
Accepts
- `children` must be provided as container tag. 
- `size` accepts `"fill"` if you want card width to fill all horizontal space.
Example
```javascript
<Card>
    <Heading size={25}>How Are you?</Heading>
    <P>Expecting that you are completely fine!</P>
</Card>
```